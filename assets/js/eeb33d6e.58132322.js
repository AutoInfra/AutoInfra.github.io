(self.webpackChunkauto_infra=self.webpackChunkauto_infra||[]).push([[950],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2650:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>u});var n=a(2122),r=(a(7294),a(3905));const o={slug:"ReportPortal",title:"How to Achieve Machine Learning In TestAutomation",author:"Bhargav Murari",author_title:"Automation Test Engineer @Kongsberg Digital",tags:["Selenium","Java","Reporting"],draft:!1},i=void 0,s={unversionedId:"Articles/2019-05-28-ReportPortal",id:"Articles/2019-05-28-ReportPortal",isDocsHomePage:!1,title:"How to Achieve Machine Learning In TestAutomation",description:"image",source:"@site/docs/Articles/2019-05-28-ReportPortal.mdx",sourceDirName:"Articles",slug:"/Articles/ReportPortal",permalink:"/docs/Articles/ReportPortal",version:"current",frontMatter:{slug:"ReportPortal",title:"How to Achieve Machine Learning In TestAutomation",author:"Bhargav Murari",author_title:"Automation Test Engineer @Kongsberg Digital",tags:["Selenium","Java","Reporting"],draft:!1},sidebar:"tutorialSidebar",next:{title:"Write Bug Free Automation Code",permalink:"/docs/Articles/SonarQube"}},l=[],p={toc:l};function u({components:e,...t}){return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(1204).Z})),(0,r.kt)("p",null,"Hello Everyone,"),(0,r.kt)("p",null,"Each year there is, of course, a lot of buzz about the future of test automation. At the outset of 2018, the big news was that AI and ML were coming and to be fair it did. Well, sort of. AI, ML, and Visual Testing are becoming an increasingly important and viable way to automate tests."),(0,r.kt)("p",null,"Today in 2020 Everyone wants to implement AI/ML in their product, result? We have witnessed the rise of Python aggressively since 2018."),(0,r.kt)("p",null,"As a test automation engineer, I always wanted to understand machine learning and how it can be useful in test automation, I am not talking about ML inside product or app, Just the plain test automation. Earlier I tried to build Business Intelligence Dashboard using ",(0,r.kt)("strong",{parentName:"p"},"PowerBI")," to strongly integrate with my tests and predict the test execution pass/fail trends based on historical execution results, and I came to the conclusion that BI Tools are not for Test Automation reporting purpose. And decided to explore further. My search came to an end with a small podcast from ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/user/JoeColantonio"},"Joe Colantonio"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What is ML"),": Machine learning is a method of data analysis that automates analytical model building. It uses algorithms that iteratively learn from data."),(0,r.kt)("p",null,"When your ML Engine learns from your test automation logs and tells you why the failure occurred, Then Congratulations.. you have achieved machine learning."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What I Hate Most in Test Automation"),":"),(0,r.kt)("p",null,"Reporting, I always hate the Traditional and Most Popular reports like Allure, Klov, Extent, TestNg ","[considering only community editions and On-premise setup]"," Maintaining bulky HTML report sack is a mess, and there is no Historical data analysis we can achieve with it. Sending a simple pass-fail test analysis is not enough. Management might simply tell you to bring back a report with more passed tests. It would be better to show management how many bugs you avoided as a result of automated testing."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What is ",(0,r.kt)("a",{parentName:"strong",href:"https://reportportal.io/"},"ReportPortal")),":"),(0,r.kt)("p",null,"A powerful server-client reporting tool. Reduce the effort to work with results. Powered with Machine Learning, Providing historical data (statues) of executions in on click, logs, screenshots and any binary attachments. Trends, flaky test, most failed, longest test via custom widgets and dashboards, which give visibility to the team, leads, managers and falcon-eye view for VPs. Provide the ability to categorize fails by custom defect types and utilize power of Machine Learning to detect fails, based on collected patterns. Give benefits of real-time integration: no need to wait for execution ends. Any language, any platform. Free, Open Sourced. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reportportal?utf8=%E2%9C%93&q=agent-java&type=&language="},"Java integrations")),(0,r.kt)("p",null,"There is no Much information on the internet about reportportal.io except their official documentation. Not sure why this ",(0,r.kt)("strong",{parentName:"p"},"amazing tool")," is shadowed by Extent, Allure, etc., Everyone in the Selenium communities on LinkedIn, FB says it is very difficult to implement reportportal and requires a powerful machine to implement it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(579).Z})),(0,r.kt)("p",null,"The moment I saw reportportal.io I was amazed by its features like Machine Learning, Pattern Analysis, etc., and I can\u2019t stop myself from tasting it. Now I am convinced that ML in test automation can be achievable, and Reportportal.io is the best reporting mechanism ever seen in my career. And Big thanks to Dmitriy for such an initiative."),(0,r.kt)("p",null,"Benefits and Why you should migrate to it:"),(0,r.kt)("p",null,"Machine Learning Capability\nLive Reporting Mechanism ","[ Results become available the moment execution starts, you don't have to wait till the end]","\nManage all your automation results and reports in one place\nFast Traceability with defect management tools like Jira/Rally.\nCentralized reporting for your different test automation frameworks ","[selenium, Python, SOAP UI, Etc.]","\nAuto Analysis of issues based on Failure history\nBuild custom dashboards and metrics to learn from the past and predict trends\nMulti-Language/Framework support"),(0,r.kt)("p",null,"Setup:"),(0,r.kt)("p",null,"There are two ways to setup reportportal.io"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," The Hard way: Install a bunch of software and integrate them\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," The Easy way: build using docker-compose.\n")))),(0,r.kt)("p",null,"I am going to build using docker-compose as it is very easy nowadays to build anything with dockers. And A Big thanks to Karthik KK and his ABC of Docker YouTube series helped me learning dockers a year ago. Since then I became a fan of Karthik, Docker, and its capabilities."),(0,r.kt)("p",null,"System Requirements and Involved Software:"),(0,r.kt)("p",null,"The official integration steps from reportportal.io are based on deploying in a Linux environment, but in my project, I am using it in windows."),(0,r.kt)("p",null,"Remember this Instruction before implementing this on your project:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(3299).Z})),(0,r.kt)("p",null,"Operating System: Windows 10"),(0,r.kt)("p",null,"Docker version: Any recent stable version ","[ I am using community edition]"),(0,r.kt)("p",null,"Docker-compose: default compose version as my OS is windows"),(0,r.kt)("p",null,"RAM: At least 5 GB of Dedicated RAM to Dockers"),(0,r.kt)("p",null,"ReportPortal version: v4.3.0"),(0,r.kt)("p",null,"Database: MongoDB"),(0,r.kt)("p",null,"SearchEngine: ElasticSearch"),(0,r.kt)("p",null,"Gateway: Fabio/ use tarefik if deploying in Linux         "),(0,r.kt)("p",null,"Defect Management Tool: Jira/Rally"),(0,r.kt)("p",null,"PORT: 8080 ","[if any of your services is already pointing to 8080 I suggest moving it to another port]"),(0,r.kt)("p",null,"Volumes in use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," mongo\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," Consul\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," ElasticSearch    \n")))),(0,r.kt)("p",null,"Docker Commands in use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Docker-compose up -d\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Docker ps\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Docker volume ls\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Docker container_name logs\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Docker-compose down\n")))),(0,r.kt)("p",null,"Execution Flow Diagram:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(7464).Z})),(0,r.kt)("p",null,"Supported Frameworks Integration:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(6215).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(7964).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(6587).Z})),(0,r.kt)("p",null,"If your Tool/Framework is not listed above, you can create your own integration using its REST APIs."),(0,r.kt)("p",null,"Installation Steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," Download Docker from the official site and install it.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," Once install is complete make sure your Docker is UP and Running and Set RAM 5 GB.\n")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(3122).Z})),(0,r.kt)("p",null,"Now Copy paste my below optimized YAML file in your local drive and go to that path in PowerShell"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/reportportal/reportportal/blob/master/docker-compose.yml"},"https://github.com/reportportal/reportportal/blob/master/docker-compose.yml")),(0,r.kt)("p",null,"You will require Docker knowledge on changing its volumes, debugging logs if reportportal doesn't come up."),(0,r.kt)("p",null,"Execute command 'docker-compose -f reportportal.yml -p reportportal up -d --force-recreate --build'"),(0,r.kt)("p",null,"Where:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. '-p reportportal' -- specifies container's prefix (project name)\n\n2. '-d' -- enables daemon mode\n\n3. '--force-recreate' -- forces re-recreating of all containers\n\n4. \u2018-f\u2019 \u2013 specify compose file name\n\n5. \u2018\u2014build\u2019 \u2013build images properly before creating containers\n")),(0,r.kt)("p",null,"Once you execute the above command you will see something like this."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(1576).Z})),(0,r.kt)("p",null,"Now execute command \u2018docker ps\u2019 and make sure all containers are stable."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(1731).Z})),(0,r.kt)("p",null,"Now go to http://localhost:8080 and verify reportportal"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(4462).Z})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Username: superadmin, Password: erebus [default ones]")),(0,r.kt)("p",null,"For security reasons, I suggest changing the admin password after login."),(0,r.kt)("p",null,"How to Integrate your test automation framework:"),(0,r.kt)("p",null,"I am using a Selenium TestNG framework to test this. Source Code Github link"),(0,r.kt)("p",null,"Follow the steps mentioned above and change the reportportal.properties file from the portal menu -> profile"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(6655).Z}),"\nAnd add reportportal.properties file on your framework under the folder resources"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(293).Z})),(0,r.kt)("p",null,"Add Listener in your testng.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'<listeners>\n\n<listener class-name="com.epam.reportportal.testng.ReportPortalTestNGListener" />\n\n</listeners>\n')),(0,r.kt)("p",null,"Add Maven SureFirePlugin with the below properties."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(4811).Z})),(0,r.kt)("p",null,"Add Below Dependencies to your POM.XML"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(1904).Z})),(0,r.kt)("p",null,"Run the Project as TestNG or Maven and see the data going inside reportportal live, Once your tests are complete your Dashboard will look like this."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(7854).Z})),(0,r.kt)("p",null,"Now it is time to analyze the failures and Train your ML Engine. By Default, all failures go under the TO_INVESTIGATE section."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(7271).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(5718).Z})),(0,r.kt)("p",null,"Now click on failures, Investigate the reasons and edit the comments accordingly. this will feed the analysis to ML Engine."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(7322).Z}),"\n",(0,r.kt)("img",{alt:"image",src:a(9066).Z})),(0,r.kt)("p",null,"Run all your Scenarios multiple times and make sure you feed the Engine with proper comments and analysis by capturing all errors."),(0,r.kt)("p",null,"After Repeat this process for a couple of days and go to Settings -> turn Auto Analysis ON for Machine Learning."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(8372).Z})),(0,r.kt)("p",null,"Now Run your tests once again and see how issues are analyzed automatically based on the training you gave to ML Engine."),(0,r.kt)("p",null,"Here AA means Auto Analyzed by ML Engine. Comments added from previous Run History automatically."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(7205).Z}),"\n",(0,r.kt)("img",{alt:"image",src:a(8642).Z})),(0,r.kt)("p",null,"Also Attach Screenshots using TestNG Listeners when the test method fails."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(9887).Z})),(0,r.kt)("p",null,"And that's it. You have achieved ML with the Best reporting mechanism."))}u.isMDXComponent=!0},1204:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/1-d476c9077618b9e056952a5033fd858a.png"},4462:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/10-1178ee9c0e48d26c77232ba498b197d3.png"},6655:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/11-76fa973c848908b935870b75bdd2dd1b.png"},293:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/12-59a46fdfb53d5c2db1387f19cd125811.png"},4811:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/13-b6095ca2e202d959e6a991c63b98b2ec.png"},1904:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/14-2379909168ffcec388be6e5cc0fb442d.png"},7854:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/15-959d97d981ee63d2167ff8d9765275d6.png"},7271:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/16-26539a37fba7d0a911b5641171a1ace3.png"},5718:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/17-45da96f81f2ba3248d1e44c865cbed70.png"},7322:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/18-fda9b3e6a5b16dd5559aff2730824edb.png"},9066:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/19-fda9b3e6a5b16dd5559aff2730824edb.png"},3299:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/2-17afe19148cea0bba44547c4ab16791a.png"},8372:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/20-faf0fad0f5d6310050a84d6fc115d5fc.png"},7205:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/21-343d86f82345c8f405cd88d9e9bc34e8.png"},8642:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/22-900c200367f82089c1550677b735c3ec.jpeg"},9887:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/23-859bead99df4fb7b47442dc60d3df7e7.jpeg"},579:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/2a-dd6304a4772bbf99fb9cb922f329885f.png"},7464:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/3-9518c609f570524ac03a17d4bd89d7ab.png"},6215:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/4-af0ed1064738e29f10a2f3eb35eee504.png"},7964:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/5-3656473d996d9161d72e8cf432bd5d68.png"},6587:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/6-7eaf1bdc84dad1ad72758423400746fe.png"},3122:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/7-85c9569d3dbdef179dc5f277bb951d41.png"},1576:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},1731:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/9-56ae77a9429ff16153a3bc740fd369fd.png"}}]);