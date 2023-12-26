"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"How to use JavaScript Ternary Operator?",description:"In this post, we expound on with examples of what the JavaScript ternary operator is, how it works.",slug:"javascript-ternary-operator",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-15-js-ternary/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/javascript-ternary-operator",source:"@site/blog/2022-11-15-js-ternary.md",title:"How to use JavaScript Ternary Operator?",description:"In this post, we expound on with examples of what the JavaScript ternary operator is, how it works.",date:"2022-11-15T00:00:00.000Z",formattedDate:"November 15, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:4.06,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"How to use JavaScript Ternary Operator?",description:"In this post, we expound on with examples of what the JavaScript ternary operator is, how it works.",slug:"javascript-ternary-operator",authors:"abdullah_numan",tags:["javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-15-js-ternary/social.png",hide_table_of_contents:!1},prevItem:{title:"React Props Explained with Examples",permalink:"/blog/react-props"},nextItem:{title:"What is Turborepo and Why Should You Care?",permalink:"/blog/how-to-use-turborepo"},relatedPosts:[{title:"How to Use JavaScript Array Splice",description:"This post is about various uses of the splice() method in JavaScript.",permalink:"/blog/javascript-splice-method",formattedDate:"October 20, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:11.03,date:"2023-10-20T00:00:00.000Z"},{title:"Error Handling With try, catch and finally Blocks in JavaScript",description:"We'll see how to handle errors in JavaScript using the try/catch/finally blocks.",permalink:"/blog/javascript-try-catch-finally",formattedDate:"November 22, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.385,date:"2022-11-22T00:00:00.000Z"},{title:"JavaScript Substring Method",description:"We'll learn how to use JavaScript substring method to extract substrings from a parent string.",permalink:"/blog/javascript-substring-method",formattedDate:"October 23, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.88,date:"2023-10-23T00:00:00.000Z"}],authorPosts:[{title:"How to Use the TypeScript satisfies Operator",description:"TypeScript classes are a superset of JavaScript classes. This post covers the fundamentals of type annotations in TypeScript Classes and their associated quirks.",permalink:"/blog/typescript-satisfies-operator",formattedDate:"November 15, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.41,date:"2023-11-15T00:00:00.000Z"},{title:"Adding Realtime Collaboration",description:"We'll implement realtime broadcast and subscription of pixels updates in Pixels app.",permalink:"/blog/refine-pixels-4",formattedDate:"February 17, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.15,date:"2023-02-17T00:00:00.000Z"},{title:"Adding PDF Renderer",description:"We are going to add PDF renderer to our PDF Invoice Generator app that we have been building last few days. This is also where we summarize our accomplishments and wrap up the series.",permalink:"/blog/refine-react-invoice-generator-5",formattedDate:"April 14, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.42,date:"2023-04-14T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"What is JavaScript Ternary Operator?",id:"what-is-javascript-ternary-operator",level:2},{value:"How to Use the JS Ternary Operator?",id:"how-to-use-the-js-ternary-operator",level:2},{value:"When to Use the Ternary Operator",id:"when-to-use-the-ternary-operator",level:2},{value:"Chained Ternary Operator",id:"chained-ternary-operator",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This post is about the Ternary Operator in JavaScript. In this post, we'll discuss what the ternary operator is, how it is used, when to use it and discuss how it compares to other constructs such as ",(0,a.kt)("inlineCode",{parentName:"p"},"if/else"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"if/else if/else")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"switch"),"."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-javascript-ternary-operator"},"What is JavaScript Ternary Operator?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-use-the-js-ternary-operator"},"How to Use the JS Ternary Operator?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#when-to-use-the-ternary-operator"},"When to Use the Ternary Operator")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#chained-ternary-operator"},"Chained Ternary Operator"))),(0,a.kt)("h2",{id:"what-is-javascript-ternary-operator"},"What is JavaScript Ternary Operator?"),(0,a.kt)("p",null,"The ternary operator in JavaScript is an operator denoted by the question mark, ",(0,a.kt)("inlineCode",{parentName:"p"},"?"),", that evaluates a conditional expression passed before it and executes a block of code based on the decision of the conditional expression. It accepts the possible blocks to be executed as two other operands that come after the ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," operator - the third separated from the second by a colon, ",(0,a.kt)("inlineCode",{parentName:"p"},":")," . Its syntax looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"conditionalExpression ? exprIfTruthy : valueIfFalsy;\n")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"conditionalExpression")," evaluates to a truthy value ",(0,a.kt)("inlineCode",{parentName:"p"},"exprIfTruthy")," is executed. If it evaluates to a falsy value, ",(0,a.kt)("inlineCode",{parentName:"p"},"exprIfFalsy")," is executed."),(0,a.kt)("h2",{id:"how-to-use-the-js-ternary-operator"},"How to Use the JS Ternary Operator?"),(0,a.kt)("p",null,"We can use the ternary operator when we need to decide on a return value of a variable from two or more options based on a condition we pass as the first operand. The below code shows how:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Example\n\nconst student = 'Abd';\nconst welcomeStudent = student ? `Welcome, ${student}!` : \"Welcome, Guest!\";\n\nconsole.log(welcomeStudent); // Welcome, Abd!\n")),(0,a.kt)("p",null,"In the above snippet, ",(0,a.kt)("inlineCode",{parentName:"p"},"student ?")," evaluates the expression before the ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," mark as a Boolean condition, asking if ",(0,a.kt)("inlineCode",{parentName:"p"},"student")," is truthy. For this reason, the ternary operator, ",(0,a.kt)("inlineCode",{parentName:"p"},"?"),", is also called the ",(0,a.kt)("strong",{parentName:"p"},"conditional operator"),"."),(0,a.kt)("p",null,"The value from this conditional expression is used to decide the value of the stored variable, ",(0,a.kt)("inlineCode",{parentName:"p"},"welcomeStudent"),". If the conditional operand evaluates to a truthy value the second operand, i.e. the value before the colon, ",(0,a.kt)("inlineCode",{parentName:"p"},":"),", is returned to ",(0,a.kt)("inlineCode",{parentName:"p"},"welcomeStudent"),". If it evaluates to falsy, the third operand, in other words the one after the ",(0,a.kt)("inlineCode",{parentName:"p"},":")," is returned."),(0,a.kt)("p",null,"In JavaScript, falsy values include ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0n")," ",(0,a.kt)("inlineCode",{parentName:"p"},'""'),", ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"NaN"),". All other values are considered truthy."),(0,a.kt)("h2",{id:"when-to-use-the-ternary-operator"},"When to Use the Ternary Operator"),(0,a.kt)("p",null,"The most common use case of the ternary operator is when there are only two possible outcomes, i.e, as a shorthand alternative of the ",(0,a.kt)("inlineCode",{parentName:"p"},"if/else")," construct. The use of the ternary operator makes the code more readable and usually takes less number of lines."),(0,a.kt)("p",null,"As in the example above, it can be used to return the value of a variable directly."),(0,a.kt)("p",null,"It can also be used when we need to return a value from a function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// With if/else\nconst welcomeStudent = student => {\n  if (student) {\n    return `Welcome, ${student.name}!`;\n  } else {\n    return \"Welcome, Guest!\";\n  };\n};\n\nconsole.log(welcomeStudent({ name: 'Abd' })); // Welcome, Abd!\nconsole.log(welcomeStudent()); // Welcome, Guest!\n\n\n// With ternary operator\nconst welcomeStudent = student => student ? `Welcome, ${student.name}!` : \"Welcome, Guest!\";\n\nconsole.log(welcomeStudent({ name: 'Abd' })); // Welcome, Abd!\nconsole.log(welcomeStudent()); // Welcome, Guest!\n")),(0,a.kt)("p",null,"As we can see, the ternary operator simplifies the code to a one-liner. It made the code more readable and the logic easy to follow."),(0,a.kt)("h2",{id:"chained-ternary-operator"},"Chained Ternary Operator"),(0,a.kt)("p",null,"We can chain ternary operators to emulate a ",(0,a.kt)("inlineCode",{parentName:"p"},"if/else if/else")," construct or a ",(0,a.kt)("inlineCode",{parentName:"p"},"switch")," statement:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// With if/else if/else\nconst grade = mark => {\n  if (mark > 100) {\n    return;\n  } else if (mark > 80) {\n    return 'A';\n  } else if (mark > 70) {\n    return 'B';\n  } else if (mark > 60) {\n    return 'C';\n  } else if (mark > 50) {\n    return 'D';\n  } else {\n    return 'F';\n  };\n};\n\nconsole.log(grade(100)); // A\nconsole.log(grade(1000)); // undefined\nconsole.log(grade(10)); // F\n\n// With chained ternary operators\nconst grade = mark => mark > 100 ? undefined\n                      : mark > 80 ? 'A'\n                      : mark > 70 ? 'B'\n                      : mark > 60 ? 'C'\n                      : mark > 50 ? 'D'\n                      : 'F';\n\nconsole.log(grade(100)); // A\nconsole.log(grade(1000)); // undefined\nconsole.log(grade(10)); // F\n")),(0,a.kt)("p",null,"Here, we chained the conditional operator into the third operand of the ternary operator at each level."),(0,a.kt)("p",null,"Many developers do not prefer nested ternary operators like this because multiple conditional checks hurt readability, instead of improving it. As opposed to chaining ternary operators, using plain ",(0,a.kt)("inlineCode",{parentName:"p"},"if/else if/else")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"switch")," statements are recommended when there are multiple forks in a control flow."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this article, we explored the use of the ternary operator in JavaScript. We saw two common cases that improve code readability, one involving a variable and the other a function expression that return a value based on the evaluation of one conditional expression inside a function."),(0,a.kt)("p",null,"Ternary operators can be chained to emulate ",(0,a.kt)("inlineCode",{parentName:"p"},"if/else if/else")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"switch")," constructs, but the recommended way is to stick to the later constructs because chaining multiple ternary operators are counter-productive in terms of readability."))}m.isMDXComponent=!0}}]);