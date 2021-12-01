"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[2570],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},915:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=t(7462),o=t(3366),i=(t(7294),t(3905)),r=["components"],l={title:"Isolation Modes",slug:"isolation-mode.html"},s=void 0,c={unversionedId:"framework/isolation_mode",id:"framework/isolation_mode",isDocsHomePage:!1,title:"Isolation Modes",description:"All specs allow you to control how the test engine creates instances of Specs for test cases. This behavior is called the isolation mode and is controlled",source:"@site/docs/framework/isolation_mode.md",sourceDirName:"framework",slug:"/framework/isolation-mode.html",permalink:"/docs/framework/isolation-mode.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/isolation_mode.md",tags:[],version:"current",frontMatter:{title:"Isolation Modes",slug:"isolation-mode.html"},sidebar:"framework",previous:{title:"Gradle",permalink:"/docs/framework/conditional/conditional-tests-with-gradle.html"},next:{title:"Lifecycle hooks",permalink:"/docs/framework/lifecycle-hooks.html"}},d=[{value:"Single Instance",id:"single-instance",children:[],level:2},{value:"InstancePerTest",id:"instancepertest",children:[],level:2},{value:"InstancePerLeaf",id:"instanceperleaf",children:[],level:2},{value:"Global Isolation Mode",id:"global-isolation-mode",children:[{value:"System Property",id:"system-property",children:[],level:3},{value:"Config",id:"config",children:[],level:3}],level:2}],p={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All specs allow you to control how the test engine creates instances of Specs for test cases. This behavior is called the ",(0,i.kt)("em",{parentName:"p"},"isolation mode")," and is controlled\nby an enum ",(0,i.kt)("inlineCode",{parentName:"p"},"IsolationMode"),". There are three values: ",(0,i.kt)("inlineCode",{parentName:"p"},"SingleInstance"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"InstancePerLeaf"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"InstancePerTest"),"."),(0,i.kt)("p",null,"If you want tests to be executed inside fresh instances of the spec - to allow for state shared between tests to be reset -\nyou can change the isolation mode."),(0,i.kt)("p",null,"This can be done by using the DSL such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyTestClass : WordSpec({\n isolationMode = IsolationMode.SingleInstance\n // tests here\n})\n")),(0,i.kt)("p",null,"Or if you prefer function overrides, you can override ",(0,i.kt)("inlineCode",{parentName:"p"},"fun isolationMode(): IsolationMode"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyTestClass : WordSpec() {\n  override fun isolationMode() = IsolationMode.SingleInstance\n  init {\n    // tests here\n  }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The default in Kotest is Single Instance which is the same as ScalaTest (the inspiration for this framework), Jest, Jasmine, and other Javascript frameworks, but different to JUnit."))),(0,i.kt)("h2",{id:"single-instance"},"Single Instance"),(0,i.kt)("p",null,"The default isolation mode is ",(0,i.kt)("inlineCode",{parentName:"p"},"SingleInstance")," whereby one instance of the Spec class is created and then each test case\nis executed in turn until all tests have completed."),(0,i.kt)("p",null,"For example, in the following spec, the same id would be printed three times as the same instance is used for all tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class SingleInstanceExample : WordSpec({\n   val id = UUID.randomUUID()\n   "a" should {\n      println(id)\n      "b" {\n         println(id)\n      }\n      "c" {\n         println(id)\n      }\n   }\n})\n')),(0,i.kt)("h2",{id:"instancepertest"},"InstancePerTest"),(0,i.kt)("p",null,"The next mode is ",(0,i.kt)("inlineCode",{parentName:"p"},"IsolationMode.InstancePerTest"),' where a new spec will be created for every test case, including inner contexts.\nIn other words, outer contexts will execute as a "stand alone" test in their own instance of the spec.\nAn example should make this clear.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class InstancePerTestExample : WordSpec() {\n\n  override fun isolationMode(): IsolationMode = IsolationMode.InstancePerTest\n\n  init {\n    "a" should {\n      println("Hello")\n      "b" {\n        println("From")\n      }\n      "c" {\n        println("Sam")\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Do you see how we've overridden the ",(0,i.kt)("inlineCode",{parentName:"p"},"isolationMode")," function here."),(0,i.kt)("p",null,"When this is executed, the following will be printed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Hello\nHello\nFrom\nHello\nSam\n")),(0,i.kt)("p",null,'This is because the outer context (test "a") will be executed first. Then it will be executed again for test "b", and then again for test "c".\nEach time in a clean instance of the Spec class. This is very useful when we want to re-use variables.'),(0,i.kt)("p",null,"Another example will show how the variables are reset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class InstancePerTestExample : WordSpec() {\n\n  override fun isolationMode(): IsolationMode = IsolationMode.InstancePerTest\n\n  val counter = AtomicInteger(0)\n\n  init {\n    "a" should {\n      println("a=" + counter.getAndIncrement())\n      "b" {\n        println("b=" + counter.getAndIncrement())\n      }\n      "c" {\n        println("c=" + counter.getAndIncrement())\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"This time, the output will be:"),(0,i.kt)("p",null,"a=0\na=0\nb=1\na=0\nc=1"),(0,i.kt)("h2",{id:"instanceperleaf"},"InstancePerLeaf"),(0,i.kt)("p",null,"The next mode is ",(0,i.kt)("inlineCode",{parentName:"p"},"IsolationMode.InstancePerLeaf"),' where a new spec will be created for every leaf test case - so excluding inner contexts.\nIn other words, inner contexts are only executed as part of the "path" to an outer test.\nAn example should make this clear.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class InstancePerLeafExample : WordSpec() {\n\n  override fun isolationMode(): IsolationMode = IsolationMode.InstancePerLeaf\n\n  init {\n    "a" should {\n      println("Hello")\n      "b" {\n        println("From")\n      }\n      "c" {\n        println("Sam")\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"When this is executed, the following will be printed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Hello\nFrom\nHello\nSam\n")),(0,i.kt)("p",null,'This is because the outer context - test "a" - will be executed first, followed by test "b" in the same instance.\nThen a new spec will be created, and test "a" again executed, followed by test "c".'),(0,i.kt)("p",null,"Another example will show how the variables are reset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class InstancePerLeafExample : WordSpec() {\n\n  override fun isolationMode(): IsolationMode = IsolationMode.InstancePerLeaf\n\n  val counter = AtomicInteger(0)\n\n  init {\n    "a" should {\n      println("a=" + counter.getAndIncrement())\n      "b" {\n        println("b=" + counter.getAndIncrement())\n      }\n      "c" {\n        println("c=" + counter.getAndIncrement())\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"This time, the output will be:"),(0,i.kt)("p",null,"a=0\nb=1\na=0\nc=1"),(0,i.kt)("h2",{id:"global-isolation-mode"},"Global Isolation Mode"),(0,i.kt)("p",null,"Rather than setting the isolation mode in every spec, we can set it globally in project config or via a system property."),(0,i.kt)("h3",{id:"system-property"},"System Property"),(0,i.kt)("p",null,"To set the global isolation mode at the command line, use the system property ",(0,i.kt)("inlineCode",{parentName:"p"},"kotest.framework.isolation.mode")," with one of the values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"InstancePerTest"),(0,i.kt)("li",{parentName:"ul"},"InstancePerLeaf"),(0,i.kt)("li",{parentName:"ul"},"SingleInstance")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The values are case sensitive."))),(0,i.kt)("h3",{id:"config"},"Config"),(0,i.kt)("p",null,"See the docs on setting up ",(0,i.kt)("a",{parentName:"p",href:"/docs/framework/project-config.html"},"project wide config"),", and then add the isolation mode you want to be the default. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ProjectConfig: AbstractProjectConfig() {\n   override val isolationMode = IsolationMode.InstancePerLeaf\n}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Setting an isolation mode in a Spec will always override the project wide setting."))))}m.isMDXComponent=!0}}]);