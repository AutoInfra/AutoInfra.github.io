(self.webpackChunkauto_infra=self.webpackChunkauto_infra||[]).push([[645],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},127:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>l,toc:()=>i,default:()=>c});var r=n(2122),a=(n(7294),n(3905));const o={slug:"ReportPortalKubernetes",title:"Deploy Reportportal on Azure Kubernetes Cluster",author:"Bhargav Murari",author_title:"Automation Test Engineer @Kongsberg Digital",tags:["Selenium","Java","Reporting"],draft:!1},s="Deploy Reportportal.io on Azure Kubernetes Service",l={unversionedId:"Articles/2022-11-17-ReportportalKubernetes",id:"Articles/2022-11-17-ReportportalKubernetes",isDocsHomePage:!1,title:"Deploy Reportportal on Azure Kubernetes Cluster",description:"This Article is Written as a part of Kongsberg Digital Blogging Challange.",source:"@site/docs/Articles/2022-11-17-ReportportalKubernetes.mdx",sourceDirName:"Articles",slug:"/Articles/ReportPortalKubernetes",permalink:"/docs/Articles/ReportPortalKubernetes",version:"current",frontMatter:{slug:"ReportPortalKubernetes",title:"Deploy Reportportal on Azure Kubernetes Cluster",author:"Bhargav Murari",author_title:"Automation Test Engineer @Kongsberg Digital",tags:["Selenium","Java","Reporting"],draft:!1},sidebar:"tutorialSidebar",previous:{title:"Advanced RestAssured Logging in Extent Report",permalink:"/docs/Articles/RestAssuredExtent"},next:{title:"Things To Test Before Going Live With A Mobile App",permalink:"/docs/Articles/MobileAppTesting"}},i=[{value:"Overall information",id:"overall-information",children:[]},{value:"PreRequisites:",id:"prerequisites",children:[]},{value:"Run ReportPortal over SSL (HTTPS)",id:"run-reportportal-over-ssl-https",children:[]}],p={toc:i};function c({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-reportportalio-on-azure-kubernetes-service"},"Deploy Reportportal.io on Azure Kubernetes Service"),(0,a.kt)("p",null,"This Article is Written as a part of Kongsberg Digital Blogging Challange."),(0,a.kt)("p",null,"#KdiBloggingChallange #articleAWeek #KongsbergTechCommunity"),(0,a.kt)("p",null,"Couple of years ago i have written my first article on ",(0,a.kt)("a",{parentName:"p",href:"https://autoinfra.github.io/home/docs/Articles/ReportPortal"},"How to deploy Reportportal on Dockers"),", Now it is time for Kubernetes"),(0,a.kt)("h3",{id:"overall-information"},"Overall information"),(0,a.kt)("h4",{id:"basic-deployment-architecture"},"Basic Deployment Architecture:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(7622).Z})),(0,a.kt)("p",null,"This project is created to install ReportPortal on Kubernetes with Helm. I have faced many issues while following the Official Documentation and for a novice Kubernetes guys it is very difficult to understand the deployement steps."),(0,a.kt)("p",null,"In this articles i am describing installation of all mandatory services to run the application such as PostgreSQL, elasticsearch,Minio and RabbitMQ."),(0,a.kt)("h3",{id:"prerequisites"},"PreRequisites:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Aks Cluster "),(0,a.kt)("li",{parentName:"ul"},"Helm")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Create a AKS Cluster")),(0,a.kt)("p",null,"The Azure Kubernetes Service (AKS) offers simple deployments for Kubernetes clusters."),(0,a.kt)("p",null,"To deploy an AKS cluster use the following guides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough-portal"},"By using the Azure portal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough"},"By using the Azure CLI"))),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"NodeSize and No.of Nodes to select")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"While creating AKS cluster it is recomended to select a 16 GB Ram node and 100+ GB disk space for your Node.\nI have selected Standard_B4ms for my requirements"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(1027).Z})),(0,a.kt)("h4",{id:"reportportal-use-the-following-images"},"ReportPortal use the following images:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/reportportal/service-authorization"},(0,a.kt)("inlineCode",{parentName:"a"},"service-authorization"))," Authorization Service. In charge of access tokens distribution"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/reportportal/service-api"},(0,a.kt)("inlineCode",{parentName:"a"},"service-api"))," API Service. Application Backend"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/reportportal/service-ui"},(0,a.kt)("inlineCode",{parentName:"a"},"service-ui"))," UI Service. Application Frontend"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/reportportal/service-auto-analyzer"},(0,a.kt)("inlineCode",{parentName:"a"},"service-analyzer"))," Analyzer Service. Finds most relevant test fail prob")),(0,a.kt)("h4",{id:"other-images-we-are-going-to-need-non-managed-by-reportportal-team"},"Other Images we are going to need (non managed by ReportPortal team):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RabbitMQ")," (Helm chart installation)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ElasticSearch")," (Helm chart installation | Amazon Elasticsearch Service)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PostgreSQL")," (Helm chart installation | Amazon PostgreSQL RDS | Azure Database for PostgreSQL)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MinIO")," (Helm chart installation)")),(0,a.kt)("p",null,"All configuration variables are presented in ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Install and configure Helm package manager")),(0,a.kt)("p",null,"Note: Helm is installed by default when you create AKS Cluster, if Helm is not created then use the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-helm"},"Install Helm On Azure"))),(0,a.kt)("p",null,"Confirm that Helm is running with the following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm version\n")),(0,a.kt)("h4",{id:"deploy-nginx-ingress-controller"},"Deploy NGINX Ingress controller"),(0,a.kt)("p",null,"Please find the guides below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/ingress-nginx/blob/master/docs/deploy/index.md#azure"},"NGNIX ON AZURE"))),(0,a.kt)("p",null,"Or you can istall an NGINX ingress controller using Helm."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx && helm repo update\n\n")),(0,a.kt)("h5",{id:"now-our-aks-cluster-is-ready-lets-move-forward-with-the-deployment-steps"},"Now Our AKS Cluster is ready, Lets move forward with the Deployment steps"),(0,a.kt)("h4",{id:"step1-download-the-latest-reportportal-kubernetes-files"},"Step1: Download the Latest ReportPortal Kubernetes Files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm repo add rp_repo https://reportportal.github.io/kubernetes\n\nhelm pull rp_repo/reportportal \u2013untar\n\n")),(0,a.kt)("h4",{id:"step2--update-helm-dependency-with-reportportal"},"Step2:  Update HELM dependency with reportportal"),(0,a.kt)("p",null,"Run Command ",(0,a.kt)("inlineCode",{parentName:"p"},"helm dependency update reportportal")),(0,a.kt)("p",null,"Once you run above command, output Should be something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Getting updates for unmanaged Helm repositories...\n...Successfully got an update from the "https://raw.githubusercontent.com/bitnami/charts/archive-full-index/bitnami" chart repository\n...Successfully got an update from the "https://raw.githubusercontent.com/bitnami/charts/archive-full-index/bitnami" chart repository\n...Successfully got an update from the "https://raw.githubusercontent.com/bitnami/charts/archive-full-index/bitnami" chart repository\nHang tight while we grab the latest from your chart repositories...\n...Successfully got an update from the "rp_repo" chart repository\n...Successfully got an update from the "elastic" chart repository\n...Successfully got an update from the "ingress-nginx" chart repository\n...Successfully got an update from the "bitnami" chart repository\nUpdate Complete. \u2388Happy Helming!\u2388\nSaving 4 charts\nDownloading postgresql from repo https://raw.githubusercontent.com/bitnami/charts/archive-full-index/bitnami\nDownloading rabbitmq from repo https://raw.githubusercontent.com/bitnami/charts/archive-full-index/bitnami\nDownloading elasticsearch from repo https://helm.elastic.co\nDownloading minio from repo https://raw.githubusercontent.com/bitnami/charts/archive-full-index/bitnami\nDeleting outdated charts \n')),(0,a.kt)("h4",{id:"step3-install-ngnix-ingress-latest-version"},"Step3: Install NGNIX-INGRESS Latest Version"),(0,a.kt)("p",null,"Run Command ",(0,a.kt)("inlineCode",{parentName:"p"},"helm install nginx-ingress ingress-nginx/ingress-nginx --version 4.3.0")),(0,a.kt)("p",null,"Once you run above command, output Should be something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME: nginx-ingress\nLAST DEPLOYED: Sat Oct 22 13:13:36 2022\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\nThe ingress-nginx controller has been installed.\nIt may take a few minutes for the LoadBalancer IP to be available.\nYou can watch the status by running 'kubectl --namespace default get services -o wide -w nginx-ingress-ingress-nginx-controller'\n\nAn example Ingress that makes use of the controller:\n  apiVersion: networking.k8s.io/v1\n  kind: Ingress\n  metadata:\n    name: example\n    namespace: foo\n  spec:\n    ingressClassName: nginx\n    rules:\n      - host: www.example.com\n        http:\n          paths:\n            - pathType: Prefix\n              backend:\n                service:\n                  name: exampleService\n                  port:\n                    number: 80\n              path: /\n    # This section is only required if TLS is to be enabled for the Ingress\n    tls:\n      - hosts:\n        - www.example.com\n        secretName: example-tls\n\nIf TLS is enabled for the Ingress, a Secret containing the certificate and key must also be provided:\n\n  apiVersion: v1\n  kind: Secret\n  metadata:\n    name: example-tls\n    namespace: foo\n  data:\n    tls.crt: <base64 encoded cert>\n    tls.key: <base64 encoded\n")),(0,a.kt)("h4",{id:"step4-install-elasticsearch"},"Step4: Install ElasticSearch"),(0,a.kt)("p",null,"Run command ",(0,a.kt)("inlineCode",{parentName:"p"},"helm install elastic ./reportportal/charts/elasticsearch-7.10.2.tgz --set replicas=1")),(0,a.kt)("p",null,"If you get any errors then Run these commands "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-helm",metastring:"repo add elastic https://helm.elastic.co && helm repo update",repo:!0,add:!0,elastic:!0,"https://helm.elastic.co":!0,"&&":!0,helm:!0,update:!0},"\nhelm dependency build ./reportportal/\nhelm install elastic ./reportportal/charts/elasticsearch-7.10.2.tgz --set replicas=1\n")),(0,a.kt)("p",null,"Once you run above command, output Should be something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"W1022 13:16:07.760393   17116 warnings.go:70] policy/v1beta1 PodDisruptionBudget is deprecated in v1.21+, unavailable in v1.25+; use policy/v1 PodDisruptionB\nudget\nW1022 13:16:07.865213   17116 warnings.go:70] policy/v1beta1 PodDisruptionBudget is deprecated in v1.21+, unavailable in v1.25+; use policy/v1 PodDisruptionB\nudget\nNAME: elastic\nLAST DEPLOYED: Sat Oct 22 13:16:07 2022\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nNOTES:\n1. Watch all cluster members come up.\n  $ kubectl get pods --namespace=default -l app=elasticsearch-master -w\n2. Test cluster health using Helm test.\n  $ helm test elastic\n")),(0,a.kt)("h4",{id:"step5-install-rabbitmq"},"Step5: Install rabbitmq"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-helm",metastring:"install rabbit --set auth.username=rabbitmq,auth.password=rabbitmq,replicaCount=1 ./reportportal/charts/rabbitmq-7.5.6.tgz",install:!0,rabbit:!0,"--set":!0,"auth.username":"rabbitmq,auth.password","./reportportal/charts/rabbitmq-7.5.6.tgz":!0},"\nkubectl exec -it rabbitmq-0 -- rabbitmqctl set_vm_memory_high_watermark 0.8\n")),(0,a.kt)("h4",{id:"step6-install-postgres"},"STEP6: Install Postgres"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-helm",metastring:"install postgres \\",install:!0,postgres:!0,"\\":!0},"  --set postgresqlUsername=rpuser,postgresqlPassword=rppass,postgresqlDatabase=reportportal,postgresqlPostgresPassword=rppass \\\n  -f ./reportportal/postgresql/values.yaml \\\n  ./reportportal/charts/postgresql-10.9.4.tgz\n  \n")),(0,a.kt)("p",null,"Once you run above command, output Should be something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'NAME: postgres\nLAST DEPLOYED: Sat Oct 22 13:17:51 2022\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\n** Please be patient while the chart is being deployed **\n\nPostgreSQL can be accessed via port 5432 on the following DNS names from within your cluster:\n\n    postgres-postgresql.default.svc.cluster.local - Read/Write connection\n\nTo get the password for "postgres" run:\n\n    export POSTGRES_ADMIN_PASSWORD=$(kubectl get secret --namespace default postgres-postgresql -o jsonpath="{.data.postgresql-postgres-password}" | base64 -\n-decode)\n\nTo get the password for "rpuser" run:\n\n    export POSTGRES_PASSWORD=$(kubectl get secret --namespace default postgres-postgresql -o jsonpath="{.data.postgresql-password}" | base64 --decode)\n\nTo connect to your database run the following command:\n\n    kubectl run postgres-postgresql-client --rm --tty -i --restart=\'Never\' --namespace default --image docker.io/bitnami/postgresql:11.13.0-debian-10-r12 --e\nnv="PGPASSWORD=$POSTGRES_PASSWORD" --command -- psql --host postgres-postgresql -U rpuser -d reportportal -p 5432\n\nTo connect to your database from outside the cluster execute the following commands:\n\n    kubectl port-forward --namespace default svc/postgres-postgresql 5432:5432 &\n    PGPASSWORD="$POSTGRES_PASSWORD" psql --host 127.0.0.1 -U rpuser -d reportportal -p 5432\n')),(0,a.kt)("h4",{id:"step7-install-minio"},"Step7: Install Minio"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"helm install minio --set accessKey.password=minio,secretKey.password=miniominio,persistence.size=40Gi ./reportportal/charts/minio-7.1.9.tgz")),(0,a.kt)("p",null,"Once you run above command, output Should be something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'NAME: minio\nLAST DEPLOYED: Sat Oct 22 13:18:38 2022\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\n** Please be patient while the chart is being deployed **\n\nMinIO&reg; can be accessed via port 9000 on the following DNS name from within your cluster:\n\n   minio.default.svc.cluster.local\n\nTo get your credentials run:\n\n   export ACCESS_KEY=$(kubectl get secret --namespace default minio -o jsonpath="{.data.access-key}" | base64 --decode)\n   export SECRET_KEY=$(kubectl get secret --namespace default minio -o jsonpath="{.data.secret-key}" | base64 --decode)\n\nTo connect to your MinIO&reg; server using a client:\n\n- Run a MinIO&reg; Client pod and append the desired command (e.g. \'admin info\'):\n\n   kubectl run --namespace default minio-client \\\n     --rm --tty -i --restart=\'Never\' \\\n     --env MINIO_SERVER_ACCESS_KEY=$ACCESS_KEY \\\n     --env MINIO_SERVER_SECRET_KEY=$SECRET_KEY \\\n     --env MINIO_SERVER_HOST=minio \\\n     --image docker.io/bitnami/minio-client:2021.7.27-debian-10-r26 -- admin info minio\n\nTo access the MinIO&reg; web UI:\n\n- Get the MinIO&reg; URL:\n\n   echo "MinIO&reg; web URL: http://127.0.0.1:9000/minio"\n   kubectl port-forward --namespace default svc/minio 9000:9000 \n')),(0,a.kt)("h4",{id:"step8-optional-package-reportportal-helm-package-reportportal"},"Step8: ","[Optional]"," Package Reportportal: ",(0,a.kt)("inlineCode",{parentName:"h4"},"helm package ./reportportal/")),(0,a.kt)("h4",{id:"step9-install-reportportal"},"Step9: Install reportportal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-helm",metastring:"install reportportal \\",install:!0,reportportal:!0,"\\":!0},"  --set postgresql.SecretName=postgres-postgresql,postgresql.endpoint.address=postgres-postgresql.default.svc.cluster.local \\\n  --set rabbitmq.SecretName=rabbit-rabbitmq,rabbitmq.endpoint.address=rabbit-rabbitmq.default.svc.cluster.local \\\n  --set minio.secretName=minio,minio.endpoint=http://minio.default.svc.cluster.local:9000,minio.endpointshort=minio.default.svc.cluster.local:9000 \\\n  ./reportportal\n")),(0,a.kt)("p",null,"Once you run above command, output Should be something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"NAME: reportportal\nLAST DEPLOYED: Sat Oct 22 13:19:37 2022\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\nReportPortal is now available at:\n    - reportportal.k8.com\n")),(0,a.kt)("h4",{id:"hola-your-reportportal-is-now-ready"},"Hola! Your reportportal is now Ready."),(0,a.kt)("h4",{id:"step-10-validate-the-pods-and-service"},"Step 10: Validate the pods and service"),(0,a.kt)("p",null,"Once ReportPortal is deployed, you can validate if the application is up and running by:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Check the pods status:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get pods\n")),(0,a.kt)("p",null,'Everything should be in "Running" status, and \'migrations\' service in "Completed"'),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Open your LoadBalancer address in a web browser")),(0,a.kt)("p",null,"Since you expose your application with an Ingress controller, note LoadBalancer's EXTERNAL-IP address by run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get service\n")),(0,a.kt)("p",null,"As an example, if you have:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"my-nginx-nginx-ingress-controller  LoadBalancer 10.100.69.32  128.245.232.2342342  80:32633/TCP,443:31683/TCP  2s\n")),(0,a.kt)("p",null,"Then ",(0,a.kt)("a",{parentName:"p",href:"http://128.245.232.2342342/ui"},"http://128.245.232.2342342/ui")," is your Reportportal UI address"),(0,a.kt)("h4",{id:"step-11-start-work-with-reportportal"},"Step 11: Start work with ReportPortal"),(0,a.kt)("p",null,"Open the http://<LoadBalancer's EXTERNAL-IP address> page in your browser. Defalut login and password are:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"superadmin\nerebus\n")),(0,a.kt)("p",null,"P.S: If you can't login - please check logs of api and uat pods. It take some time to initialize"),(0,a.kt)("h3",{id:"run-reportportal-over-ssl-https"},"Run ReportPortal over SSL (HTTPS)"),(0,a.kt)("h4",{id:"1-configure-a-custom-domain-name-for-your-reportportal-website"},"1. Configure a custom domain name for your ReportPortal website"),(0,a.kt)("p",null,"Set up a domain name you own at the domain registrar Or if your Organization has a DNS Zone in Azure, Create a record set like Below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(4994).Z}),"\n",(0,a.kt)("img",{alt:"image",src:n(7636).Z})),(0,a.kt)("h4",{id:"2-pre-requisite-configuration"},"2. Pre-requisite configuration"),(0,a.kt)("p",null,"In order to enable HTTPS, you need to get a SSL/TLS certificate from a Certificate Authority (CA)\nAs a free option, you can use Let's Encrypt - a non-profit TLS CA. Its purpose is to try to make a safer internet by making it easier and cheaper to use TLS"),(0,a.kt)("h4",{id:"21-deploy-the-cert-manager-for-kubernetes-115-119"},"2.1. Deploy the Cert Manager for Kubernetes 1.15-1.19"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/jetstack/cert-manager/tree/master/deploy/charts/cert-manager"},"Cert-manager")," is a native Kubernetes certificate management controller\nIt can help with issuing certificates from a variety of sources, such as Let\u2019s Encrypt, HashiCorp Vault, Venafi, a simple signing keypair, or self-signed"),(0,a.kt)("p",null,"Install the cert-manager CRDs ",(0,a.kt)("strong",{parentName:"p"},"before")," installing the cert-manager Helm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.0.3/cert-manager.crds.yaml\n")),(0,a.kt)("p",null,"Add the Jetstack Helm repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add jetstack https://charts.jetstack.io && helm repo update\n")),(0,a.kt)("p",null,"Install the cert-manager"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm install cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --create-namespace \\\n  --version v1.0.3\n")),(0,a.kt)("h4",{id:"22-deploy-the-cert-manager-for-kubernetes-120"},"2.2. Deploy the Cert Manager for Kubernetes 1.20+"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/jetstack/cert-manager/tree/master/deploy/charts/cert-manager"},"Cert-manager")," is a native Kubernetes certificate management controller\nIt can help with issuing certificates from a variety of sources, such as Let\u2019s Encrypt, HashiCorp Vault, Venafi, a simple signing keypair, or self-signed"),(0,a.kt)("p",null,"Install the cert-manager CRDs ",(0,a.kt)("strong",{parentName:"p"},"before")," installing the cert-manager Helm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.10.0/cert-manager.crds.yaml\n")),(0,a.kt)("p",null,"Add the Jetstack Helm repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm repo add jetstack https://charts.jetstack.io && helm repo update\n")),(0,a.kt)("p",null,"Install the cert-manager"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"helm install cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --create-namespace \\\n  --version v1.10.0\n")),(0,a.kt)("h4",{id:"23-create-a-lets-encrypt-ca-clusterissuer-kubernetes-resource"},"2.3. Create a Let's Encrypt CA ClusterIssuer Kubernetes resource:"),(0,a.kt)("p",null," ClusterIssuers (and Issuers) represent a certificate authority from which signed x509 certificates can be obtained, such as Let\u2019s Encrypt. You will need at least one ClusterIssuer in order to begin issuing certificates within your cluster"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"vi letsencrypt-clusterissuer.yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: cert-manager.io/v1alpha2\nkind: ClusterIssuer\nmetadata:\n  name: <your_clusterissuer_name>\nspec:\n  acme:\n    email: <your_email>\n    server: https://acme-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      name: <your_clusterissuer_name>-account-key\n    solvers:\n    - http01:\n        ingress:\n          class: nginx\n")),(0,a.kt)("p",null,"Do not forget to set the name and email for your ClusterIssuer"),(0,a.kt)("p",null,"For example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: cert-manager.io/v1alpha2\nkind: ClusterIssuer\nmetadata:\n  name: letsencrypt-prod\nspec:\n  acme:\n    email: support@testreportportal.com\n    server: https://acme-v02.api.letsencrypt.org/directory\n    privateKeySecretRef:\n      name: letsencrypt-prod-account-key\n    solvers:\n    - http01:\n        ingress:\n          class: nginx\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl create -f letsencrypt-clusterissuer.yaml\n")),(0,a.kt)("h4",{id:"3-update-your-reportportal-installation-with-a-new-ingress-configuration-to-be-access-at-a-tls-endpoint"},"3. Update your ReportPortal installation with a new Ingress Configuration to be access at a TLS endpoint"),(0,a.kt)("p",null,"With all the pre-requisite configuration in place, we can now do the pieces to request the TLS certificate"),(0,a.kt)("h4",{id:"31-add-the-certmanager-annotation"},"3.1. Add the certmanager annotation:"),(0,a.kt)("p",null,"Add the following annotation to your Ingress configuration by editing ReportPortal Helm chart values.yaml file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cert-manager.io/cluster-issuer: "letsencrypt-prod"\n')),(0,a.kt)("p",null,"The result in values.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'..\n  annotations:\n    kubernetes.io/ingress.class: nginx\n    nginx.ingress.kubernetes.io/ssl-redirect: "false"\n    nginx.ingress.kubernetes.io/rewrite-target: /$2\n    nginx.ingress.kubernetes.io/x-forwarded-prefix: /$1\n    nginx.ingress.kubernetes.io/proxy-body-size: 128m\n    nginx.ingress.kubernetes.io/proxy-buffer-size: 512k\n    nginx.ingress.kubernetes.io/proxy-buffers-number: "4"\n    nginx.ingress.kubernetes.io/proxy-busy-buffers-size: 512k\n    nginx.ingress.kubernetes.io/proxy-connect-timeout: "2000"\n    nginx.ingress.kubernetes.io/proxy-read-timeout: "1000"\n    nginx.ingress.kubernetes.io/proxy-send-timeout: "1000"\n    cert-manager.io/cluster-issuer: "letsencrypt-prod"\n')),(0,a.kt)("h4",{id:"32-update-your-reportportal-ingress-configuration"},"3.2. Update your ReportPortal Ingress configuration:"),(0,a.kt)("p",null,"Edit gateway-ingress.yaml template in your copy of ReportPortal Helm chart, and add the following right after 'spec'"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  tls:\n  - hosts:\n    - <your_domain_name>\n    secretName: <your_certificate_secretname>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You will create your certificate with secretname on the next step")),(0,a.kt)("p",null,"Let's suppose your domain name is 'my.reportportal.com' and your certificate secretname is 'my.reportportal.com-tls'"),(0,a.kt)("p",null,"Then the result in your gateway-ingress.yaml file will be"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  tls:\n  - hosts:\n    - my.reportportal.com\n    secretName: my.reportportal.com-tls\n  rules:\n..\n")),(0,a.kt)("h4",{id:"33-redeploy-or-upgrade-your-reporportal-installation-with-helm"},"3.3. Redeploy or upgrade your ReporPortal installation with Helm"),(0,a.kt)("h4",{id:"4-create-a-certificate-resource-in-kubernetes-with-acme-http-challenge-configured"},"4. Create a Certificate resource in Kubernetes with acme http challenge configured:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"vi certificate-tls.yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: certmanager.k8s.io/v1alpha1\nkind: Certificate\nmetadata:\n  name: <your_certificate_name>\nspec:\n  secretName: <your_certificate_secretname>\n  dnsNames:\n  - <your_domain_name>\n  acme:\n    config:\n    - http01:\n        ingressClass: nginx\n      domains:\n      - <your_domain_name>\n  issuerRef:\n    name: <your_clusterissuer_name>\n    kind: ClusterIssuer\n")),(0,a.kt)("p",null,"For our example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: certmanager.k8s.io/v1alpha1\nkind: Certificate\nmetadata:\n  name: my.reportportal.com-tls\nspec:\n  secretName: my.reportportal.com-tls\n  dnsNames:\n  - my.reportportal.com\n  acme:\n    config:\n    - http01:\n        ingressClass: nginx\n      domains:\n      - my.reportportal.com\n  issuerRef:\n    name: letsencrypt-prod\n    kind: ClusterIssuer\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl create -f certificate-tls.yaml\n")),(0,a.kt)("p",null,"Once this resource is created, there should be a tls cert that is created. If not, then check the logs of the cert-manger service for errors"),(0,a.kt)("p",null,"In order to check the certificate and secret"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get certificates\nkubectl describe certificate <your_certificate_name>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get secrets\nkubectl describe secret <your_certificate_secretname>\n")),(0,a.kt)("p",null,"Now you should be able to run your ReportPortal installation over HTTPS"),(0,a.kt)("p",null,"Please take into account that you don't have to re-deploy the application in order to apply changes"))}c.isMDXComponent=!0},4994:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/Dns1-0f3a3c401bb45c0bef09d33c080c57d3.jpg"},7636:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/Dns2-3a99c23faa2ab12587ab18e9d2ea3390.jpg"},7622:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/RPKubernetesArchitecture-4bea6b9d4292e2112342281891b210d0.jpg"},1027:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/selectNodeSize-e4b28b16b22479934ce717dfe8c55862.jpg"}}]);