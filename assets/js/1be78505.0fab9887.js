(self.webpackChunkauto_infra=self.webpackChunkauto_infra||[]).push([[514,608],{3616:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>U});var n=a(7294),o=a(3905),i=a(2263),r=a(6291),l=a(6016),s=a(2122),c=a(6010),d=a(9306),m=a(1839),u=a(3783),b=a(7898),p=a(6742),h=a(3919),f=a(5537);const E=e=>n.createElement("svg",(0,s.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));var v=a(4478),g=a(8617),C=a(4973);const k="sidebar_15mo",_="sidebarWithHideableNavbar_267A",N="sidebarHidden_2kNb",Z="sidebarLogo_3h0W",S="menu_Bmed",I="menuLinkText_2aKo",M="menuWithAnnouncementBar_2WvA",T="collapseSidebarButton_1CGd",y="collapseSidebarButtonIcon_3E-R",R="sidebarMenuIcon_fgN0",A="sidebarMenuCloseIcon_1lpH",x=(e,t)=>"link"===e.type?(0,d.Mg)(e.href,t):"category"===e.type&&e.items.some((e=>x(e,t))),w=(0,n.memo)((function({items:e,...t}){return e.map(((e,a)=>n.createElement(L,(0,s.Z)({key:a,item:e},t))))}));function L(e){switch(e.item.type){case"category":return n.createElement(B,e);case"link":default:return n.createElement(P,e)}}function B({item:e,onItemClick:t,collapsible:a,activePath:o,...i}){const{items:r,label:l}=e,m=x(e,o),u=(0,d.D9)(m),[b,p]=(0,n.useState)((()=>!!a&&(!m&&e.collapsed))),h=(0,n.useRef)(null),[f,E]=(0,n.useState)(void 0),v=(e=!0)=>{var t;E(e?`${null==(t=h.current)?void 0:t.scrollHeight}px`:void 0)};(0,n.useEffect)((()=>{m&&!u&&b&&p(!1)}),[m,u,b]);const g=(0,n.useCallback)((e=>{e.preventDefault(),f||v(),setTimeout((()=>p((e=>!e))),100)}),[f]);return 0===r.length?null:n.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":b})},n.createElement("a",(0,s.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&m,[I]:!a}),onClick:a?g:void 0,href:a?"#":void 0},i),l),n.createElement("ul",{className:"menu__list",ref:h,style:{height:f},onTransitionEnd:()=>{b||v(!1)}},n.createElement(w,{items:r,tabIndex:b?"-1":"0",onItemClick:t,collapsible:a,activePath:o})))}function P({item:e,onItemClick:t,activePath:a,collapsible:o,...i}){const{href:r,label:l}=e,d=x(e,a);return n.createElement("li",{className:"menu__list-item",key:l},n.createElement(p.Z,(0,s.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":d}),to:r},(0,h.Z)(r)&&{isNavLink:!0,exact:!0,onClick:t},i),(0,h.Z)(r)?l:n.createElement("span",null,l,n.createElement(g.Z,null))))}function D({onClick:e}){return n.createElement("button",{type:"button",title:(0,C.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",T),onClick:e},n.createElement(E,{className:y}))}function H({responsiveSidebarOpened:e,onClick:t}){return n.createElement("button",{"aria-label":e?(0,C.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,C.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:t},e?n.createElement("span",{className:(0,c.Z)(R,A)},"\xd7"):n.createElement(v.Z,{className:R,height:24,width:24}))}const W=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:o,isHidden:i}){const r=function(){const{isClosed:e}=(0,d.nT)(),[t,a]=(0,n.useState)(!e);return(0,b.Z)((({scrollY:t})=>{e||a(0===t)})),t}(),{navbar:{hideOnScroll:l},hideableSidebar:s}=(0,d.LU)(),{isClosed:p}=(0,d.nT)(),{showResponsiveSidebar:h,closeResponsiveSidebar:E,toggleResponsiveSidebar:v}=function(){const[e,t]=(0,n.useState)(!1);(0,m.Z)(e);const a=(0,u.Z)();return(0,n.useEffect)((()=>{a===u.D.desktop&&t(!1)}),[a]),{showResponsiveSidebar:e,closeResponsiveSidebar:(0,n.useCallback)((e=>{e.target.blur(),t(!1)}),[t]),toggleResponsiveSidebar:(0,n.useCallback)((()=>{t((e=>!e))}),[t])}}();return n.createElement("div",{className:(0,c.Z)(k,{[_]:l,[N]:i})},l&&n.createElement(f.Z,{tabIndex:-1,className:Z}),n.createElement("nav",{className:(0,c.Z)("menu","menu--responsive","thin-scrollbar",S,{"menu--show":h,[M]:!p&&r}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},n.createElement(H,{responsiveSidebarOpened:h,onClick:v}),n.createElement("ul",{className:"menu__list"},n.createElement(w,{items:t,onItemClick:E,collapsible:a,activePath:e}))),s&&n.createElement(D,{onClick:o}))};var F=a(1769),O=a(4608),K=a(5977);const z={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainer:"docSidebarContainer_3Kbt",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function J({currentDocRoute:e,versionMetadata:t,children:a}){var r;const{siteConfig:s,isClient:m}=(0,i.Z)(),{pluginId:u,version:b}=t,{sidebarName:p,sidebar:h}=function({versionMetadata:e,currentDocRoute:t}){const{permalinkToSidebar:a,docsSidebars:n}=e,o=a[t.path]||a[(i=t.path,i.endsWith("/")?i:`${i}/`)]||a[function(e){return e.endsWith("/")?e.slice(0,-1):e}(t.path)];var i;return{sidebar:n[o],sidebarName:o}}({versionMetadata:t,currentDocRoute:e}),[f,v]=(0,n.useState)(!1),[g,k]=(0,n.useState)(!1),_=(0,n.useCallback)((()=>{g&&k(!1),v(!f)}),[g]);return n.createElement(l.Z,{key:m,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:b,tag:(0,d.os)(u,b)}},n.createElement("div",{className:z.docPage},h&&n.createElement("aside",{className:(0,c.Z)(z.docSidebarContainer,{[z.docSidebarContainerHidden]:f}),onTransitionEnd:e=>{e.currentTarget.classList.contains(z.docSidebarContainer)&&f&&k(!0)}},n.createElement(W,{key:p,sidebar:h,path:e.path,sidebarCollapsible:(null==(r=s.themeConfig)?void 0:r.sidebarCollapsible)??!0,onCollapse:_,isHidden:g}),g&&n.createElement("div",{className:z.collapsedDocSidebar,title:(0,C.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,C.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},n.createElement(E,{className:z.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.Z)(z.docMainContainer,{[z.docMainContainerEnhanced]:f||!h})},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",z.docItemWrapper,{[z.docItemWrapperEnhanced]:f})},n.createElement(o.Zo,{components:F.Z},a)))))}const U=function(e){const{route:{routes:t},versionMetadata:a,location:o}=e,i=t.find((e=>(0,K.LX)(o.pathname,e)));return i?n.createElement(J,{currentDocRoute:i,versionMetadata:a},(0,r.Z)(t,{versionMetadata:a})):n.createElement(O.default,e)}},4608:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var n=a(7294),o=a(6016),i=a(4973);const r=function(){return n.createElement(o.Z,{title:(0,i.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},2969:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(7294);function o({children:e,color:t}){return n.createElement("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e)}},1769:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});a(7294);var n=a(7277),o=a(2969);const i={...n.Z,highlight:o.Z}}}]);