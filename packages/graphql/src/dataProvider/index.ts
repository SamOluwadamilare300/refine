import type { BaseRecord, CreateResponse, DataProvider } from "@refinedev/core";
import type { Client } from "@urql/core";
import pluralize from "pluralize";
import camelCase from "camelcase";
import gqlTag from "graphql-tag";
import { getOperationFields, isMutation } from "../utils";
import { poptions } from "./newOptions";

const dataProvider = (
  client: Client,
  options: typeof poptions = poptions,
): Required<DataProvider> => {
  return {
    create: async (params) => {
      const { variables, meta } = params;

      const gqlOperation = meta?.gqlMutation ?? meta?.gqlQuery;

      if (!gqlOperation) {
        throw new Error("Operation is required.");
      }

      const response = await client
        .mutation(gqlOperation, options.create.buildVariables(params))
        .toPromise();

      const rrr = options.create.dataMapper(response, params);

      console.log("RRRR ", rrr);

      return {
        data: rrr,
      } as any;
    },
    createMany: async (params) => {
      const { meta } = params;

      const gqlOperation = meta?.gqlMutation ?? meta?.gqlQuery;

      if (!gqlOperation) {
        throw new Error("Operation is required.");
      }

      const response = await client.mutation<BaseRecord>(
        gqlOperation,
        options.createMany.buildVariables(params, variables),
      );

      return {
        data: response[operation],
      };
    },
    getOne: async ({ resource, id, meta }) => {
      const singularResource = pluralize.singular(resource);
      const camelResource = camelCase(singularResource);

      const operation = meta?.operation ?? camelResource;
      const gqlOperation = meta?.gqlQuery ?? meta?.gqlMutation;
      const pascalOperation = camelCase(operation, {
        pascalCase: true,
      });

      if (gqlOperation) {
        let query = gqlOperation;

        if (isMutation(gqlOperation)) {
          const stringFields = getOperationFields(gqlOperation);

          query = gqlTag`
                        query Get${pascalOperation}($id: $uuid!) {
                            ${operation}(id: $id) {
                            ${stringFields}
                            }
                        }
                    `;
        }

        const response = await client
          .query(query, {
            id,
          })
          .toPromise();

        return {
          data: response.data[operation],
        };
      }

      return { data: {} };
    },
    getList: async (params) => {
      const { meta } = params;

      const paging = options.getList.buildPagination(params);
      const sorting = options.getList.buildSorters(params);
      const filter = options.getList.buildFilters(params);

      if (meta?.gqlQuery) {
        const response = await client
          .query(meta.gqlQuery, {
            sorting,
            filter,
            paging,
            ...meta?.variables,
          })
          .toPromise();

        return {
          data: options.getList.dataMapper(response, params),
          total: options.getList.countMapper(response, params),
        };
      }

      return { data: [], total: 0 };
    },
    getMany: async (params) => {
      const { ids, meta } = params;

      if (meta?.gqlQuery) {
        const response = await client
          .query(meta.gqlQuery, {
            where: {
              id_in: ids,
            },
          })
          .toPromise();

        return {
          data: options.getMany.dataMapper(response, params),
        };
      }

      return { data: [] };
    },
    update: async ({ resource, id, variables, meta }) => {
      const singularResource = pluralize.singular(resource);
      const camelUpdateName = camelCase(`update-${singularResource}`);

      const operation = meta?.operation ?? camelUpdateName;
      const gqlOperation = meta?.gqlMutation ?? meta?.gqlQuery;

      if (gqlOperation) {
        const response = await client
          .mutation(gqlOperation, {
            id,
            data: {
              ...variables,
            },
          })
          .toPromise();

        return {
          data: response.data[operation][singularResource],
        };
      }

      return {
        data: {},
      };
    },
    updateMany: async ({ resource, ids, variables, meta }) => {
      const singularResource = pluralize.singular(resource);
      const camelUpdateName = camelCase(`update-${singularResource}`);

      const operation = meta?.operation ?? camelUpdateName;
      const inputType = meta?.operation ?? `${camelUpdateName}Input`;

      if (meta?.gqlMutation) {
        const response = await Promise.all(
          ids.map(async (id) => {
            if (!meta?.gqlMutation) return null;

            const result = await client
              .mutation(meta.gqlMutation, {
                input: {
                  value: { where: { id }, data: variables },
                  type: inputType,
                },
              })
              .toPromise();

            return result.data[operation][singularResource];
          }),
        );

        return {
          data: response,
        };
      }

      return { data: [] };
    },
    deleteOne: async ({ resource, id, meta }) => {
      const singularResource = pluralize.singular(resource);
      const camelDeleteName = camelCase(`delete-${singularResource}`);

      const operation = meta?.operation ?? camelDeleteName;

      if (meta?.gqlMutation) {
        const response = await client
          .mutation(meta.gqlMutation, {
            input: {
              where: { id },
            },
          })
          .toPromise();

        return {
          data: response.data[operation][singularResource],
        };
      }

      return { data: {} };
    },
    deleteMany: async ({ resource, ids, meta }) => {
      const singularResource = pluralize.singular(resource);
      const camelDeleteName = camelCase(`delete-${singularResource}`);

      const operation = meta?.operation ?? camelDeleteName;

      if (meta?.gqlMutation) {
        const response = await Promise.all(
          ids.map(async (id) => {
            if (!meta?.gqlMutation) return null;

            const result = await client
              .mutation(meta.gqlMutation, {
                input: {
                  where: { id },
                },
              })
              .toPromise();

            return result.data[operation][singularResource];
          }),
        );

        return {
          data: response,
        };
      }

      return { data: [] };
    },
    custom: async ({ url, meta }) => {
      if (meta?.gqlMutation) {
        const response = await client
          .mutation(meta.gqlMutation, meta?.variables ?? {}, { url })
          .toPromise();

        return { data: response.data };
      }

      if (meta?.gqlQuery) {
        const response = await client
          .query(meta.gqlQuery, meta?.variables ?? {}, { url })
          .toPromise();

        return { data: response.data };
      }

      // if raw ?? restful one for example.
      return { data: {} };

      // throw new Error("GraphQL operation is required.");
    },
    getApiUrl: () => {
      throw Error("Not implemented on refine-graphql data provider.");
    },
  };
};

export default dataProvider;
