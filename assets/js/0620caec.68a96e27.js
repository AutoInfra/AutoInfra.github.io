(self.webpackChunkauto_infra=self.webpackChunkauto_infra||[]).push([[641],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,h=c["".concat(o,".").concat(d)]||c[d]||p[d]||r;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9612:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>l,metadata:()=>s,toc:()=>o,default:()=>m});var a=n(2122),i=(n(7294),n(3905));const r={slug:"Healenium",title:"Self Healing Selenium - Healenium",author:"Bhargav Murari",author_title:"Automation Test Engineer @Kongsberg Digital",tags:["Selenium","Java","Healenium"],draft:!1},l=void 0,s={unversionedId:"Articles/2019-05-30-Healenium",id:"Articles/2019-05-30-Healenium",isDocsHomePage:!1,title:"Self Healing Selenium - Healenium",description:"Healenium - An OpenSource Self Healing Test Automation solution",source:"@site/docs/Articles/2019-05-30-Healenium.mdx",sourceDirName:"Articles",slug:"/Articles/Healenium",permalink:"/docs/Articles/Healenium",version:"current",frontMatter:{slug:"Healenium",title:"Self Healing Selenium - Healenium",author:"Bhargav Murari",author_title:"Automation Test Engineer @Kongsberg Digital",tags:["Selenium","Java","Healenium"],draft:!1},sidebar:"tutorialSidebar",previous:{title:"Write Bug Free Automation Code",permalink:"/docs/Articles/SonarQube"},next:{title:"Stream Test Results To PowerBI",permalink:"/docs/Articles/PowerBI"}},o=[{value:"Healenium - An OpenSource Self Healing Test Automation solution",id:"healenium---an-opensource-self-healing-test-automation-solution",children:[{value:"What is Self Healing:",id:"what-is-self-healing",children:[]}]}],u={toc:o};function m({components:e,...t}){return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"healenium---an-opensource-self-healing-test-automation-solution"},"Healenium - An OpenSource Self Healing Test Automation solution"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(2966).Z}),"\nImages/Healenium/banner.jpeg"),(0,i.kt)("h3",{id:"what-is-self-healing"},"What is Self Healing:"),(0,i.kt)("p",null,"  Self Healing in testing is a mechanism that detects object changes in the product and intuitively updates with new attributes to ensure test cases are functional. "),(0,i.kt)("p",null,"  For example, if the \u2018id\u2019 or \u2018class\u2019 attributes of an element on a web page is changed by the developer, then the existing automated test script need also be changed. This may sound simple, but if there are many such changes in the application, this takes a lot of time and effort for the testers to modify tests and run them."),(0,i.kt)("p",null,"This is where the ",(0,i.kt)("a",{parentName:"p",href:"https://healenium.io/"},"Healenium")," comes to help."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Is Healenium a wrapper of selenium?")),(0,i.kt)("p",null,"Kind of, It creates a ",(0,i.kt)("strong",{parentName:"p"},"delegate")," to the selenium WebDriver object instance."),(0,i.kt)("p",null,"Delegation means that you use an object of another class as an instance variable, and forward messages to the instance. ... Delegation can be viewed as a relationship between objects where one object forwards certain method calls to another object, called its delegate (creating a delegate means you are wrapping the object)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How Does it Exactly Heal at RunTime?")),(0,i.kt)("p",null,"The Healenium delegate ads try/catch Block around WebDriver NoSuchElement Exception In runtime replaces failed controls with a new value that matches the best and performs an action with replaced control successfully."),(0,i.kt)("p",null,"Here is the flow diagram from the official website."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(1752).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In a nutshell: "),"\nHealenium backend services stores the page state and refer it whenever there is a NoSuchElement exception in future for the same page.\nSetup:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Software Requirements:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Docker"),(0,i.kt)("li",{parentName:"ol"},"IntelliJ ","[sorry eclipse users]"),(0,i.kt)("li",{parentName:"ol"},"Maven/Gradle Selenium Project"),(0,i.kt)("li",{parentName:"ol"},"Healenium IntelliJ Plugin")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Let's See What are Changes required to Implement Healenium.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step1:")),(0,i.kt)("p",null,"Open your Selenium Project and Create Folder structure as below ",(0,i.kt)("inlineCode",{parentName:"p"},"DockerFiles/Healenium/db/sql"),". "),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Pro tip ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"you can change this folder structure but the related path must be updated in docker-compose file too"))),(0,i.kt)("p",null,'Copy below commands and save in the "init.sql" file as per below.'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CREATE SCHEMA healenium AUTHORIZATION healenium_user;  GRANT USAGE ON SCHEMA healenium TO healenium_user")),(0,i.kt)("p",null,"![image]"," (Healenium/1.png)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step2:")),(0,i.kt)("p",null,"Copy the below commands and place it in a docker-compose.yml file like shown in the above image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'// highlight-start\n\nversion: "3.3"\n\nservices:\n\n  db:\n    image: postgres:11-alpine\n    ports:\n      - "5433:5432"\n    volumes:\n      - ./db/sql/init.sql:/docker-entrypoint-initdb.d/init.sql\n\n    restart: always\n    environment:\n      - POSTGRES_DB=healenium\n      - POSTGRES_USER=healenium_user\n      - POSTGRES_PASSWORD=YDk2nmNs4s9aCP6K\n    networks:\n      - healenium\n\n  healenium:\n    image: healenium/hlm-backend:latest\n    ports:\n      - "7878:7878"\n    restart: always\n    links:\n      - db\n    environment:\n      - SPRING_CONTAINER_NAME=healenium\n      - SPRING_POSTGRES_DB=healenium\n      - SPRING_POSTGRES_USER=healenium_user\n      - SPRING_POSTGRES_PASSWORD=YDk2nmNs4s9aCP6K\n      - SPRING_POSTGRES_URL=jdbc:postgresql://db:5432/healenium?currentSchema=healenium\n    networks:\n      - healenium\n\nnetworks:\n  healenium: \n// highlight-end\n\n')),(0,i.kt)("p",null,"Bring the Healenium Backend Services UP by running the command ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up -d"),". Once successful you will see the status of the containers like below.\nNo alt text provided for this image"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(8262).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step3:")),(0,i.kt)("p",null,"Place Healenium Properties File under src\\test\\resources\\healenium.properties file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="healenium.properties"',title:'"healenium.properties"'},"// highlight-start\nscore-cap=.6\nheal-enabled=true\nserverHost = localhost\nserverPort = 7878\n// highlight-end\n\nHere server host is where your docker is running.\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(6672).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step4:")),(0,i.kt)("p",null,"Install Healenium IntelliJ Plugin\n",(0,i.kt)("img",{alt:"image",src:n(664).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step5:")),(0,i.kt)("p",null,"Create delegate to webdriver like below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Initiate Healenium Like Below"',title:'"Initiate',Healenium:!0,Like:!0,'Below"':!0},"// highlight-start\n// Create a selenium webdriver instance as Usual\n\nWebDriver seleniumdriver = new ChromeDriver();\n\n//Create Healenium Driver [this is new]\n\nSelfHealingDriver driver = SelfHealingDriver.create(seleniumdriver);\n\n// Write your selenium Program As Usual.\n\ndriver.manage().window().maximize();\n// highlight-end\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step6:")),(0,i.kt)("p",null,"Add Healenium maven dependency in pom.xml file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="pom.xml"',title:'"pom.xml"'},"// highlight-start\n\n<repositories>\n <repository>\n  <snapshots>\n    <enabled>false</enabled>\n  </snapshots>\n  <id>bintray-epam-healenium</id>\n     <name>bintray</name>\n     <url>https://dl.bintray.com/epam/healenium</url>\n </repository>\n</repositories>\n\n\n<dependency>\n  <groupId>com.epam.healenium</groupId>\n  <artifactId>healenium-web</artifactId>\n  <version>3.0.2</version>\n\n</dependency>\n\n// highlight-end\n\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Final Step:")),(0,i.kt)("p",null,"Now run your tests using the Maven command ",(0,i.kt)("inlineCode",{parentName:"p"},"mvn clean test")," and get the healing reports automatically."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(7492).Z}),"\n",(0,i.kt)("img",{alt:"image",src:n(5837).Z})),(0,i.kt)("p",null,"Here is the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AutoInfra/HealeniumTestng"},"sample project"),"  to demonstrate Healenium capabilities."),(0,i.kt)("p",null,"Here is the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/healenium/healenium-web"},"Official Healenium Repo"),"  with More Detailed Step By Step Instructions"),(0,i.kt)("p",null,"Enjoy......"))}m.isMDXComponent=!0},8262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-7d17fc8b371de296a79ca6e7a946bb53.png"},6672:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-4cbaea56a5d99707f8cdb6aed7c29f2b.png"},664:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-9f40a9506733680baea38f76fa833208.png"},7492:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/5-cc60a2d6cd8c1dcad6a7d6516ca5d106.png"},5837:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/6-5d68e0da8e50e86341563766460ffb53.png"},2966:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/banner-d9f2c20c4c911fffc643ef0f622b2513.jpeg"},1752:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/heal-725029add7837962895b64990a7f0fd8.gif"}}]);