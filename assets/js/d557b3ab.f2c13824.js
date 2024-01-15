"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[70014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={title:"Mocking API calls in React Tests with Nock",description:"How to test API calls in React?",slug:"mocking-api-calls-in-react",authors:"necati",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-04-mocking-api-calls/social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/mocking-api-calls-in-react",source:"@site/blog/2022-08-04-mocking-api-calls.md",title:"Mocking API calls in React Tests with Nock",description:"How to test API calls in React?",date:"2022-08-04T00:00:00.000Z",formattedDate:"August 4, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:6.755,hasTruncateMarker:!1,authors:[{name:"Necati \xd6zmen",title:"Head of Growth at refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"Mocking API calls in React Tests with Nock",description:"How to test API calls in React?",slug:"mocking-api-calls-in-react",authors:"necati",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-04-mocking-api-calls/social.png",hide_table_of_contents:!1},prevItem:{title:"Nextjs image optimization with examples",permalink:"/blog/using-next-image"},nextItem:{title:"Building a CRUD app with Material UI and Strapi in React",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi"},relatedPosts:[{title:"Build internal tools using Low-Code with refine, React-based framework",description:"Why you should be using low-code app Refine to build internal tools? Learn how to build low-code apps using Refine, React and Ant Design.",permalink:"/blog/build-internal-tools-using-low-code-with-refine",formattedDate:"February 21, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:9.675,date:"2022-02-21T00:00:00.000Z"},{title:"Understanding Virtual DOM in React",description:"We'll dive into the concept of a virtual DOM in the React as well as explore its purpose.",permalink:"/blog/react-virtual-dom",formattedDate:"November 23, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:12.11,date:"2023-11-23T00:00:00.000Z"},{title:"How to Build a React Admin Panel with Mantine and Strapi",description:"We'll be building a simple React Admin Panel with refine and Mantine using Strapi as a backend service.",permalink:"/blog/react-admin-panel",formattedDate:"February 23, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:22.995,date:"2023-02-23T00:00:00.000Z"}],authorPosts:[{title:"refine Joins the Hacktoberfest Fun",description:"Hactoberfest is back and we are excited to be a part of it. Join us in making open source contributions.",permalink:"/blog/hacktoberfest-refine",formattedDate:"October 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:.88,date:"2022-10-04T00:00:00.000Z"},{title:"We\u2019ve raised $1M in Seed Funding! \ud83d\ude80 \ud83d\ude80 \ud83d\ude80",description:"We are very excited to announce that Refine has raised $1M in our first round led by 500 Istanbul.",permalink:"/blog/weve-raised-dollar1m-seed-funding",formattedDate:"June 10, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:.74,date:"2022-06-10T00:00:00.000Z"},{title:"Announcing the refine Open Source Hackathon 2 Winners",description:"We're thrilled to announce the winners of the refine Open Source Hackathon 2!",permalink:"/blog/refine-hackathon-2-winners",formattedDate:"August 4, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:5.005,date:"2023-08-04T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"Why mocking HTTP requests during testing is important?",id:"why-mocking-http-requests-during-testing-is-important",level:2},{value:"What is Nock?",id:"what-is-nock",level:2},{value:"Bootstrapping the example app",id:"bootstrapping-the-example-app",level:2},{value:"Adding a unit test",id:"adding-a-unit-test",level:2},{value:"Nock installation and configuration",id:"nock-installation-and-configuration",level:2},{value:"Custom requests in Nock",id:"custom-requests-in-nock",level:2},{value:"All HTTP methods like <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code> can be mock.",id:"all-http-methods-like-get-post-put-delete-can-be-mock",level:4},{value:"To handle query parameters, the <code>query</code> option can be used.",id:"to-handle-query-parameters-the-query-option-can-be-used",level:4},{value:"Mocking server Errors",id:"mocking-server-errors",level:4},{value:"Recording in Nock",id:"recording-in-nock",level:2},{value:"Alternative API mocking libraries",id:"alternative-api-mocking-libraries",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Writing unit tests is very important for the development process. Testing components that use HTTP requests sometimes may be a real pain."),(0,a.kt)("p",null,"In testing, we often want to make mock requests to test our code without actually making an HTTP request. This can be especially important when we are testing code that makes external API calls since we don't want to rely on the availability of the external API."),(0,a.kt)("p",null,"We'll use a third-party package called ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nock/nock"},"nock")," that helps us to mock HTTP requests. With nock, we can specify the desired behavior of our mock HTTP requests, including the URL, headers, and body. This allows us to test our code against a known data set, making debugging and testing much more straightforward."),(0,a.kt)("p",null,"I'll show how to write unit tests for API calls by mocking method in the simple React app."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#why-mocking-http-requests-during-testing-is-important"},"Why mocking HTTP requests during testing is important?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-nock"},"What is Nock?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#bootstrapping-the-example-app"},"Bootstrapping the example app")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#adding-a-unit-test"},"Adding a unit test")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#nock-installation-and-configuration"},"Nock installation and configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#custom-requests-in-nock"},"Custom requests in Nock"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#all-http-methods-like-get-post-put-delete-can-be-mock"},"All HTTP methods like ",(0,a.kt)("inlineCode",{parentName:"a"},"GET"),", ",(0,a.kt)("inlineCode",{parentName:"a"},"POST"),", ",(0,a.kt)("inlineCode",{parentName:"a"},"PUT"),", ",(0,a.kt)("inlineCode",{parentName:"a"},"DELETE")," can be mock.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#to-handle-query-parameters-the-query-option-can-be-used"},"To handle query parameters, the ",(0,a.kt)("inlineCode",{parentName:"a"},"query")," option can be used.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#mocking-server-errors"},"Mocking server Errors")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#recording-in-nock"},"Recording in Nock")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#alternative-api-mocking-libraries"},"Alternative API mocking libraries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#conclusion"},"Conclusion"))),(0,a.kt)("h2",{id:"why-mocking-http-requests-during-testing-is-important"},"Why mocking HTTP requests during testing is important?"),(0,a.kt)("p",null,"Mock testing is a great way to speed up running tests because you can eliminate external systems and servers."),(0,a.kt)("p",null,"These are all possible errors that you might encounter when running tests with the API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The data returned from API can be different on each request."),(0,a.kt)("li",{parentName:"ul"},"It takes a longer time to finish running the test."),(0,a.kt)("li",{parentName:"ul"},"You may get a big size of data that you don't need to use in tests."),(0,a.kt)("li",{parentName:"ul"},"You may have issues like rate limiting and connectivity.")),(0,a.kt)("p",null,"We'll use the Nock to find a solution for these problems. We'll create a simple react app and request an external API. We will implement how to mock API calls and write a unit test for API calls using Nock in a React application."),(0,a.kt)("h2",{id:"what-is-nock"},"What is Nock?"),(0,a.kt)("p",null,"Nock is an HTTP server mocking and expectations library. Nock works by overriding Node's ",(0,a.kt)("inlineCode",{parentName:"p"},"http.request")," function."),(0,a.kt)("p",null,"It helps us mock calls to API and specifies what URLs we want to listen for, and responds with predefined responses, just like real APIs would."),(0,a.kt)("p",null,"We can use nock to test React components that make HTTP requests."),(0,a.kt)("h2",{id:"bootstrapping-the-example-app"},"Bootstrapping the example app"),(0,a.kt)("p",null,"We'll use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pankod/superplate"},"superplate")," CLI wizard to create and customize the React application fastly."),(0,a.kt)("p",null,"Run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx superplate-cli example-app\n")),(0,a.kt)("p",null,"Select the following options when taking the CLI steps:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"? Select your project type\n\u276f react\n\n? Testing Framework\n\u276f React Testing Library\n")),(0,a.kt)("p",null,"CLI should create a project and install the selected dependencies."),(0,a.kt)("p",null,"Create a component with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},'export const Main = () => {\n  const [state, setState] = React.useState<{ firstName: string }>({\n    firstName: "",\n  });\n\n  const fetchData = async () => {\n    const response = await fetch("https://api.fake-rest.refine.dev/users/1");\n    const result = await response.json();\n    return result;\n  };\n\n  React.useEffect(() => {\n    (async () => {\n      const data = await fetchData();\n      setState(data);\n    })();\n  }, []);\n\n  return <div>{state.firstName}</div>;\n};\n')),(0,a.kt)("p",null,"Above we can see that we do fetch call to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine"),"'s fake REST API URL and thereafter returned data shows on the screen."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/refinedev/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/github-support-banner.png",alt:"github support banner"}))),(0,a.kt)("h2",{id:"adding-a-unit-test"},"Adding a unit test"),(0,a.kt)("p",null,"Now, we are going to create a test file."),(0,a.kt)("p",null,"We want to add a test case for the function that makes an HTTP request to a URL and returns the data provided. Waiting for the data returned by API to be rendered on screen is a typical way of testing it."),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/intro/"},"React Testing Library")," the expected unit test vase will be the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.spec.tsx"',title:'"index.spec.tsx"'},'import { Main } from "./index";\nimport { render, screen, waitFor } from "@testing-library/react";\n\ndescribe("expectedData", () => {\n  it("checks if returned data from API rendered into component", async () => {\n    render(<Main />);\n\n    await waitFor(() => {\n      expect(screen.getByText("/value from the api")).toBeInTheDocument();\n    });\n  });\n});\n')),(0,a.kt)("p",null,"At this point, if run the test it will fail. It'll attempt to perform a network request. Since we are calling a real database it will return all the data rather than only the specific data that we need.\nAlso, the API will respond with different values for each request."),(0,a.kt)("p",null,"Testing this HTTP request-related architecture in that way can be a headache."),(0,a.kt)("p",null,"With the nock mock service, we can intercept requests to the API and return custom responses."),(0,a.kt)("h2",{id:"nock-installation-and-configuration"},"Nock installation and configuration"),(0,a.kt)("p",null,"Install the nock with the following command if you don't have it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install --save-dev nock\n")),(0,a.kt)("p",null,"We'll add the highlighted codes to initialize the nock."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.spec.tsx"',title:'"index.spec.tsx"'},'import { Main } from "./index";\nimport { render, screen, waitFor } from "@testing-library/react";\n//highlight-next-line\nimport nock from "nock";\n\ndescribe("expectedData", () => {\n  it("checks if returned data from API rendered into component", async () => {\n    //highlight-start\n    nock("https://api.fake-rest.refine.dev")\n      .defaultReplyHeaders({\n        "access-control-allow-origin": "*",\n      })\n      .get("/users/1")\n      .reply(200, {\n        id: 1,\n        firstName: "/value from the api",\n      });\n    //highlight-end\n\n    render(<Main />);\n\n    await waitFor(() => {\n      expect(screen.getByText("/value from the api")).toBeInTheDocument();\n    });\n  });\n});\n')),(0,a.kt)("p",null,"At this point, our test works."),(0,a.kt)("div",null,(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-04-mocking-api-calls/test-run.png",alt:"Test run"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The test runner creates a mock server with nock and the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchData()")," method will trigger.\nRather than calling the API to test our app, we provide a set of known responses that mock it."),(0,a.kt)("p",null,"Nock intercepts ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," requests to ",(0,a.kt)("inlineCode",{parentName:"p"},"'https://api.fake-rest.refine.dev'")," followed by the path ",(0,a.kt)("inlineCode",{parentName:"p"},"'/users/1'")," with the HTTP method ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),"."),(0,a.kt)("p",null,"The response should be like defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"reply()")," method.\nWe also set the ",(0,a.kt)("inlineCode",{parentName:"p"},"CORS")," policy to the header with ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultReplyHeaders"),"."),(0,a.kt)("h2",{id:"custom-requests-in-nock"},"Custom requests in Nock"),(0,a.kt)("p",null,"We can specify the mock requests."),(0,a.kt)("h4",{id:"all-http-methods-like-get-post-put-delete-can-be-mock"},"All HTTP methods like ",(0,a.kt)("inlineCode",{parentName:"h4"},"GET"),", ",(0,a.kt)("inlineCode",{parentName:"h4"},"POST"),", ",(0,a.kt)("inlineCode",{parentName:"h4"},"PUT"),", ",(0,a.kt)("inlineCode",{parentName:"h4"},"DELETE")," can be mock."),(0,a.kt)("p",null,"Simple ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'nock("https://api.fake-rest.refine.dev")\n  .post("/users", {\n    username: "test",\n    status: true,\n  })\n  .reply(201);\n')),(0,a.kt)("h4",{id:"to-handle-query-parameters-the-query-option-can-be-used"},"To handle query parameters, the ",(0,a.kt)("inlineCode",{parentName:"h4"},"query")," option can be used."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'nock("https://api.fake-rest.refine.dev")\n  .get("/users")\n  .query({\n    username: "test",\n    status: true,\n  })\n  .reply(200);\n')),(0,a.kt)("p",null,"When an HTTP request is made with specified query, nock will intercept and return with a ",(0,a.kt)("inlineCode",{parentName:"p"},"200")," status code."),(0,a.kt)("h4",{id:"mocking-server-errors"},"Mocking server Errors"),(0,a.kt)("p",null,"Error replies can be returned from the mocking server with ",(0,a.kt)("inlineCode",{parentName:"p"},"replyWithError")," prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'nock("https://api.fake-rest.refine.dev").get("/users").replyWithError({\n  message: "Server ERROR",\n});\n')),(0,a.kt)("p",null,"You may want to handle errors by only replying with a status code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'nock("https://api.fake-rest.refine.dev")\n  .post("/users", {\n    username: "test",\n    status: true,\n  })\n  .reply(500);\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"It\u2019s important to note we are using ",(0,a.kt)("inlineCode",{parentName:"p"},"afterAll(nock.restore)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"afterEach(nock.cleanAll)")," to make sure interceptors do not interfere with each other."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"afterAll(() => {\n  nock.cleanAll();\n  nock.restore();\n});\n"))),(0,a.kt)("h2",{id:"recording-in-nock"},"Recording in Nock"),(0,a.kt)("p",null,"Recording relies on intercepting real requests and responses and then persisting them for later use."),(0,a.kt)("p",null,"Nock prints the code to the console which we can use as a response in tests with ",(0,a.kt)("inlineCode",{parentName:"p"},"nock.recorder.rec()")," method."),(0,a.kt)("p",null,"Comment out the nock function and let's add ",(0,a.kt)("inlineCode",{parentName:"p"},"nock.recorder.rec()")," in to the test file."),(0,a.kt)("p",null,"When the test runs, the console logs all the service calls that nock has recorded."),(0,a.kt)("div",null,(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-04-mocking-api-calls/nock-recorder-log.png",alt:"nock record log"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Instead of defining ",(0,a.kt)("inlineCode",{parentName:"p"},"nock")," method and reply values manually, we can use recorded values."),(0,a.kt)("h2",{id:"alternative-api-mocking-libraries"},"Alternative API mocking libraries"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mswjs.io/"},"MSW Mock Service Worker"),": Mock Service Worker is an API mocking library that uses Service Worker API to intercept actual requests."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://miragejs.com/"},"Mirage JS"),": Mirage JS is an API mocking library that lets you build, test, and share a complete working JavaScript application without having to rely on any backend services."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/wheresrhys/fetch-mock"},"fetch-mock"),": fetch-mock allows mocking HTTP requests made using fetch or a library imitating its API."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this article, we've implemented API mocking and explained how useful it can be. We used nock to mock HTTP requests in our test and some useful properties are shown."),(0,a.kt)("p",null,"We have seen how to test only the behavior of an application in isolation. Avoid any external dependencies that may affect our tests and ensure they are running on stable versions at all times."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord-banner.png",alt:"discord banner"}))))}m.isMDXComponent=!0}}]);