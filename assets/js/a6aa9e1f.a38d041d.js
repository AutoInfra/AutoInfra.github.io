"use strict";(self.webpackChunkauto_infra=self.webpackChunkauto_infra||[]).push([[89],{4428:(e,a,t)=>{t.r(a),t.d(a,{default:()=>g});var l=t(7294),r=t(2263),n=t(6016),i=t(3146),s=t(6742),m=t(4973);const o=function(e){const{metadata:a}=e,{previousPage:t,nextPage:r}=a;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},t&&l.createElement(s.Z,{className:"pagination-nav__link",to:t},l.createElement("div",{className:"pagination-nav__label"},"\xab"," ",l.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&l.createElement(s.Z,{className:"pagination-nav__link",to:r},l.createElement("div",{className:"pagination-nav__label"},l.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var c=t(5601),d=t(9306);const g=function(e){const{metadata:a,items:t,sidebar:s}=e,{siteConfig:{title:m}}=(0,r.Z)(),{blogDescription:g,blogTitle:p,permalink:u}=a,E="/"===u?m:p;return l.createElement(n.Z,{title:E,description:g,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("aside",{className:"col col--3"},l.createElement(c.Z,{sidebar:s})),l.createElement("main",{className:"col col--7"},t.map((e=>{let{content:a}=e;return l.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},l.createElement(a,null))})),l.createElement(o,{metadata:a})))))}},3146:(e,a,t)=>{t.d(a,{Z:()=>E});var l=t(7294),r=t(6010),n=t(3905),i=t(4973),s=t(6742),m=t(9306),o=t(1769),c=t(1217),d=t(6146);const g="blogPostTitle_d4p0",p="blogPostData_-Im+",u="blogPostDetailsFull_xD8n";const E=function(e){const a=function(){const{selectMessage:e}=(0,m.c2)();return a=>{const t=Math.ceil(a);return e(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}}(),{children:t,frontMatter:E,metadata:h,truncated:b,isBlogPostPage:v=!1}=e,{date:_,formattedDate:N,permalink:Z,tags:f,readingTime:k,title:T,editUrl:w}=h,{author:I,image:L,keywords:P}=E,x=E.author_url||E.authorURL,M=E.author_title||E.authorTitle,y=E.author_image_url||E.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(c.Z,{keywords:P,image:L}),l.createElement("article",{className:v?void 0:"margin-bottom--xl"},(()=>{const e=v?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:g},v?T:l.createElement(s.Z,{to:Z},T)),l.createElement("div",{className:(0,r.Z)(p,"margin-vert--md")},l.createElement("time",{dateTime:_},N),k&&l.createElement(l.Fragment,null," \xb7 ",a(k))),l.createElement("div",{className:"avatar margin-vert--md"},y&&l.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:x},l.createElement("img",{src:y,alt:I})),l.createElement("div",{className:"avatar__intro"},I&&l.createElement(l.Fragment,null,l.createElement("div",{className:"avatar__name"},l.createElement(s.Z,{href:x},I)),l.createElement("small",{className:"avatar__subtitle"},M)))))})(),l.createElement("div",{className:"markdown"},l.createElement(n.Zo,{components:o.Z},t)),(f.length>0||b)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",{[u]:v})},f.length>0&&l.createElement("div",{className:"col"},l.createElement("b",null,l.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),f.map((e=>{let{label:a,permalink:t}=e;return l.createElement(s.Z,{key:t,className:"margin-horiz--sm",to:t},a)}))),v&&w&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:w})),!v&&b&&l.createElement("div",{className:"col text--right"},l.createElement(s.Z,{to:h.permalink,"aria-label":`Read more about ${T}`},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:(e,a,t)=>{t.d(a,{Z:()=>p});var l=t(7294),r=t(6010),n=t(6742);const i="sidebar_q+wC",s="sidebarItemTitle_9G5K",m="sidebarItemList_6T4b",o="sidebarItem_cjdF",c="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs";var g=t(4973);function p(e){let{sidebar:a}=e;return 0===a.items.length?null:l.createElement("nav",{className:(0,r.Z)(i,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(s,"margin-bottom--md")},a.title),l.createElement("ul",{className:m},a.items.map((e=>l.createElement("li",{key:e.permalink,className:o},l.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:c,activeClassName:d},e.title))))))}},6146:(e,a,t)=>{t.d(a,{Z:()=>o});var l=t(7294),r=t(4973),n=t(7462),i=t(6010);const s="iconEdit_mS5F",m=e=>{let{className:a,...t}=e;return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,a),"aria-hidden":"true"},t),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function o(e){let{editUrl:a}=e;return l.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},l.createElement(m,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2969:(e,a,t)=>{t.d(a,{Z:()=>r});var l=t(7294);function r(e){let{children:a,color:t}=e;return l.createElement("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},a)}},1769:(e,a,t)=>{t.d(a,{Z:()=>n});t(7294);var l=t(5484),r=t(2969);const n={...l.Z,highlight:r.Z}}}]);