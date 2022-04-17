"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[5363],{4137:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=m(a),c=n,d=k["".concat(o,".").concat(c)]||k[c]||s[c]||l;return a?r.createElement(d,p(p({ref:t},u),{},{components:a})):r.createElement(d,p({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7106:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return u},default:function(){return k}});var r=a(7462),n=a(3366),l=(a(7294),a(4137)),p=["components"],i={id:"docker-deploy",title:"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5HertzBeat",sidebar_label:"Docker\u65b9\u5f0f\u90e8\u7f72"},o=void 0,m={unversionedId:"start/docker-deploy",id:"start/docker-deploy",title:"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5HertzBeat",description:"\u63a8\u8350\u4f7f\u7528docker\u90e8\u7f72HertzBeat",source:"@site/docs/start/docker-deploy.md",sourceDirName:"start",slug:"/start/docker-deploy",permalink:"/docs/start/docker-deploy",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/start/docker-deploy.md",tags:[],version:"current",frontMatter:{id:"docker-deploy",title:"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5HertzBeat",sidebar_label:"Docker\u65b9\u5f0f\u90e8\u7f72"},sidebar:"docs",previous:{title:"TDengine\u5b89\u88c5\u521d\u59cb\u5316",permalink:"/docs/start/tdengine-init"},next:{title:"\u5b89\u88c5\u5305\u65b9\u5f0f\u90e8\u7f72",permalink:"/docs/start/package-deploy"}},u=[{value:"Docker\u90e8\u7f72\u5e38\u89c1\u95ee\u9898",id:"docker\u90e8\u7f72\u5e38\u89c1\u95ee\u9898",children:[],level:3}],s={toc:u};function k(e){var t=e.components,a=(0,n.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u63a8\u8350\u4f7f\u7528docker\u90e8\u7f72HertzBeat  ")),(0,l.kt)("p",null,"\u5b89\u88c5\u90e8\u7f72\u89c6\u9891\u6559\u7a0b: ",(0,l.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1GY41177YL"},"HertzBeat\u5b89\u88c5\u90e8\u7f72-BiliBili"),"  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u5b89\u88c5Docker\u73af\u5883",(0,l.kt)("br",{parentName:"p"}),"\n","Docker \u5de5\u5177\u81ea\u8eab\u7684\u4e0b\u8f7d\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker\u5b98\u7f51\u6587\u6863"),"\u3002\n\u5b89\u88c5\u5b8c\u6bd5\u540e\u7ec8\u7aef\u67e5\u770bDocker\u7248\u672c\u662f\u5426\u6b63\u5e38\u8f93\u51fa\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u62c9\u53d6HertzBeat Docker\u955c\u50cf",(0,l.kt)("br",{parentName:"p"}),"\n","\u955c\u50cf\u7248\u672cTAG\u53ef\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tancloud/hertzbeat/tags"},"\u5b98\u65b9\u955c\u50cf\u4ed3\u5e93"),"     "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"$ docker pull tancloud/hertzbeat:[\u7248\u672ctag]   \n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6eHertzBeat\u7684\u914d\u7f6e\u6587\u4ef6",(0,l.kt)("br",{parentName:"p"}),"\n","\u5728\u4e3b\u673a\u76ee\u5f55\u4e0b\u521b\u5efaapplication.yml\uff0ceg:/opt/application.yml",(0,l.kt)("br",{parentName:"p"}),"\n","\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u53c2\u8003 \u9879\u76ee\u4ed3\u5e93",(0,l.kt)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat/raw/master/script/application.yml"},"/script/application.yml"),"\uff0c\u9700\u8981\u66ff\u6362\u91cc\u9762\u7684MYSQL\u670d\u52a1\u548cTDengine\u670d\u52a1\u53c2\u6570\uff0cIP\u7aef\u53e3\u8d26\u6237\u5bc6\u7801\uff08\u82e5\u4f7f\u7528\u90ae\u4ef6\u544a\u8b66\uff0c\u9700\u66ff\u6362\u91cc\u9762\u7684\u90ae\u4ef6\u670d\u52a1\u5668\u53c2\u6570\uff09\n\u5177\u4f53\u66ff\u6362\u53c2\u6570\u5982\u4e0b:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"spring.datasource.url\nspring.datasource.username\nspring.datasource.password\n\nwarehouse.store.td-engine.url\nwarehouse.store.td-engine.username\nwarehouse.store.td-engine.password\n\nspring.mail.host\nspring.mail.port\nspring.mail.username\nspring.mail.password\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u7528\u6237\u914d\u7f6e\u6587\u4ef6(\u975e\u5fc5\u987b,\u914d\u7f6e\u8d26\u6237\u9700\u8981)",(0,l.kt)("br",{parentName:"p"}),"\n","HertzBeat\u9ed8\u8ba4\u5185\u7f6e\u4e09\u4e2a\u7528\u6237\u8d26\u6237,\u5206\u522b\u4e3a admin/admin tom/tom@123 lili/lili",(0,l.kt)("br",{parentName:"p"}),"\n","\u82e5\u9700\u8981\u65b0\u589e\u5220\u9664\u4fee\u6539\u8d26\u6237\u6216\u5bc6\u7801\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"sureness.yml")," \u5b9e\u73b0\uff0c\u82e5\u65e0\u6b64\u9700\u6c42\u53ef\u5ffd\u7565\u6b64\u6b65\u9aa4",(0,l.kt)("br",{parentName:"p"}),"\n","\u5728\u4e3b\u673a\u76ee\u5f55\u4e0b\u521b\u5efasureness.yml\uff0ceg:/opt/sureness.yml",(0,l.kt)("br",{parentName:"p"}),"\n","\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u53c2\u8003 \u9879\u76ee\u4ed3\u5e93",(0,l.kt)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat/blob/master/script/sureness.yml"},"/script/sureness.yml")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"")))),(0,l.kt)("p",null,"resourceRole:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/account/auth/refresh===post===","[admin,user,guest]"),(0,l.kt)("li",{parentName:"ul"},"/apps/**===get===","[admin,user,guest]"),(0,l.kt)("li",{parentName:"ul"},"/monitor/**===get===","[admin,user,guest]"),(0,l.kt)("li",{parentName:"ul"},"/monitor/**===post===","[admin,user]"),(0,l.kt)("li",{parentName:"ul"},"/monitor/**===put===","[admin,user]"),(0,l.kt)("li",{parentName:"ul"},"/monitor/**===delete==","[admin]"),(0,l.kt)("li",{parentName:"ul"},"/monitors/**===get===","[admin,user,guest]"),(0,l.kt)("li",{parentName:"ul"},"/monitors/**===post===","[admin,user]"),(0,l.kt)("li",{parentName:"ul"},"/monitors/**===put===","[admin,user]"),(0,l.kt)("li",{parentName:"ul"},"/monitors/**===delete===","[admin]"),(0,l.kt)("li",{parentName:"ul"},"/alert/**===get===","[admin,user,guest]"),(0,l.kt)("li",{parentName:"ul"},"/alert/**===post===","[admin,user]"),(0,l.kt)("li",{parentName:"ul"},"/alert/**===put===","[admin,user]"),(0,l.kt)("li",{parentName:"ul"},"/alert/**===delete===","[admin]"),(0,l.kt)("li",{parentName:"ul"},"/alerts/**===get===","[admin,user,guest]"),(0,l.kt)("li",{parentName:"ul"},"/alerts/**===post===","[admin,user]"),(0,l.kt)("li",{parentName:"ul"},"/alerts/**===put===","[admin,user]"),(0,l.kt)("li",{parentName:"ul"},"/alerts/**===delete===","[admin]"),(0,l.kt)("li",{parentName:"ul"},"/notice/**===get===","[admin,user,guest]"),(0,l.kt)("li",{parentName:"ul"},"/notice/**===post===","[admin,user]"),(0,l.kt)("li",{parentName:"ul"},"/notice/**===put===","[admin,user]"),(0,l.kt)("li",{parentName:"ul"},"/notice/**===delete===","[admin]"),(0,l.kt)("li",{parentName:"ul"},"/summary/**===get===","[admin,user,guest]"),(0,l.kt)("li",{parentName:"ul"},"/summary/**===post===","[admin,user]"),(0,l.kt)("li",{parentName:"ul"},"/summary/**===put===","[admin,user]"),(0,l.kt)("li",{parentName:"ul"},"/summary/**===delete===","[admin]")),(0,l.kt)("p",null,"excludedResource:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/account/auth/*",(0,l.kt)("em",{parentName:"li"},"===")),(0,l.kt)("li",{parentName:"ul"},"/===get"),(0,l.kt)("li",{parentName:"ul"},"/i18n/**===get"),(0,l.kt)("li",{parentName:"ul"},"/apps/hierarchy===get")),(0,l.kt)("h1",{id:"web-ui-\u9759\u6001\u8d44\u6e90"},"web ui \u9759\u6001\u8d44\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/console/**===get"),(0,l.kt)("li",{parentName:"ul"},"/*",(0,l.kt)("em",{parentName:"li"},"/"),".html===get"),(0,l.kt)("li",{parentName:"ul"},"/*",(0,l.kt)("em",{parentName:"li"},"/"),".js===get"),(0,l.kt)("li",{parentName:"ul"},"/*",(0,l.kt)("em",{parentName:"li"},"/"),".css===get"),(0,l.kt)("li",{parentName:"ul"},"/*",(0,l.kt)("em",{parentName:"li"},"/"),".ico===get"),(0,l.kt)("li",{parentName:"ul"},"/*",(0,l.kt)("em",{parentName:"li"},"/"),".ttf===get"),(0,l.kt)("li",{parentName:"ul"},"/*",(0,l.kt)("em",{parentName:"li"},"/"),".png===get"),(0,l.kt)("li",{parentName:"ul"},"/*",(0,l.kt)("em",{parentName:"li"},"/"),".gif===get",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"/*",(0,l.kt)("em",{parentName:"li"},"/"),".png===*")))),(0,l.kt)("h1",{id:"swagger-ui-\u8d44\u6e90"},"swagger ui \u8d44\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/swagger-resources/**===get"),(0,l.kt)("li",{parentName:"ul"},"/v2/api-docs===get"),(0,l.kt)("li",{parentName:"ul"},"/v3/api-docs===get")),(0,l.kt)("p",null,"account:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"appId: admin\ncredential: admin\nrole: ","[admin,user]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"appId: tom\ncredential: tom@123\nrole: ","[user]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"appId: guest\ncredential: guest\nrole: ","[guest]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"appId: lili"),(0,l.kt)("h1",{parentName:"li",id:"\u6ce8\u610f-digest\u8ba4\u8bc1\u4e0d\u652f\u6301\u52a0\u76d0\u52a0\u5bc6\u7684\u5bc6\u7801\u8d26\u6237"},"\u6ce8\u610f Digest\u8ba4\u8bc1\u4e0d\u652f\u6301\u52a0\u76d0\u52a0\u5bc6\u7684\u5bc6\u7801\u8d26\u6237"),(0,l.kt)("h1",{parentName:"li",id:"\u52a0\u76d0\u52a0\u5bc6\u7684\u5bc6\u7801\u901a\u8fc7-md5passwordsalt\u8ba1\u7b97"},"\u52a0\u76d0\u52a0\u5bc6\u7684\u5bc6\u7801\uff0c\u901a\u8fc7 MD5(password+salt)\u8ba1\u7b97"),(0,l.kt)("h1",{parentName:"li",id:"\u6b64\u8d26\u6237\u7684\u539f\u59cb\u5bc6\u7801\u4e3a-lili"},"\u6b64\u8d26\u6237\u7684\u539f\u59cb\u5bc6\u7801\u4e3a lili"),(0,l.kt)("p",{parentName:"li"},"credential: 1A676730B0C7F54654B0E09184448289\nsalt: 123\nrole: ","[guest]"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\n\u4fee\u6539sureness.yml\u7684\u5982\u4e0b**\u90e8\u5206\u53c2\u6570**\uff1a**[\u6ce8\u610f\u26a0\ufe0fsureness\u914d\u7f6e\u7684\u5176\u5b83\u9ed8\u8ba4\u53c2\u6570\u9700\u4fdd\u7559]**  \n\n```yaml\n\n")))),(0,l.kt)("h1",{id:"\u7528\u6237\u8d26\u6237\u4fe1\u606f"},"\u7528\u6237\u8d26\u6237\u4fe1\u606f"),(0,l.kt)("h1",{id:"\u4e0b\u9762\u6709-admin-tom-lili-\u4e09\u4e2a\u8d26\u6237"},"\u4e0b\u9762\u6709 admin tom lili \u4e09\u4e2a\u8d26\u6237"),(0,l.kt)("h1",{id:"eg-admin-\u62e5\u6709adminuser\u89d2\u8272\u5bc6\u7801\u4e3aadmin"},"eg: admin \u62e5\u6709","[admin,user]","\u89d2\u8272,\u5bc6\u7801\u4e3aadmin"),(0,l.kt)("h1",{id:"eg-tom-\u62e5\u6709user\u5bc6\u7801\u4e3atom123"},"eg: tom \u62e5\u6709","[user]",",\u5bc6\u7801\u4e3atom@123"),(0,l.kt)("h1",{id:"eg-lili-\u62e5\u6709guest\u660e\u6587\u5bc6\u7801\u4e3alili-\u52a0\u76d0\u5bc6\u7801\u4e3a1a676730b0c7f54654b0e09184448289"},"eg: lili \u62e5\u6709","[guest]",",\u660e\u6587\u5bc6\u7801\u4e3alili, \u52a0\u76d0\u5bc6\u7801\u4e3a1A676730B0C7F54654B0E09184448289"),(0,l.kt)("p",null,"account:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"appId: admin\ncredential: admin\nrole: ","[admin,user]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"appId: tom\ncredential: tom@123\nrole: ","[user]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"appId: guest\ncredential: guest\nrole: ","[guest]")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"appId: lili"),(0,l.kt)("h1",{parentName:"li",id:"\u6ce8\u610f-digest\u8ba4\u8bc1\u4e0d\u652f\u6301\u52a0\u76d0\u52a0\u5bc6\u7684\u5bc6\u7801\u8d26\u6237-1"},"\u6ce8\u610f Digest\u8ba4\u8bc1\u4e0d\u652f\u6301\u52a0\u76d0\u52a0\u5bc6\u7684\u5bc6\u7801\u8d26\u6237"),(0,l.kt)("h1",{parentName:"li",id:"\u52a0\u76d0\u52a0\u5bc6\u7684\u5bc6\u7801\u901a\u8fc7-md5passwordsalt\u8ba1\u7b97-1"},"\u52a0\u76d0\u52a0\u5bc6\u7684\u5bc6\u7801\uff0c\u901a\u8fc7 MD5(password+salt)\u8ba1\u7b97"),(0,l.kt)("h1",{parentName:"li",id:"\u6b64\u8d26\u6237\u7684\u539f\u59cb\u5bc6\u7801\u4e3a-lili-1"},"\u6b64\u8d26\u6237\u7684\u539f\u59cb\u5bc6\u7801\u4e3a lili"),(0,l.kt)("p",{parentName:"li"},"credential: 1A676730B0C7F54654B0E09184448289\nsalt: 123\nrole: ","[guest]"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"")))),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u542f\u52a8HertzBeat Docker\u5bb9\u5668  "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"$ docker run -d -p 1157:1157 -v /opt/application.yml:/opt/hertzbeat/config/application.yml -v /opt/sureness.yml:/opt/hertzbeat/config/sureness.yml --name hertzbeat tancloud/hertzbeat:[\u7248\u672ctag]\n526aa188da767ae94b244226a2b2eec2b5f17dd8eff592893d9ec0cd0f3a1ccd\n")),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u6761\u547d\u4ee4\u542f\u52a8\u4e00\u4e2a\u8fd0\u884cHertzBeat\u7684Docker\u5bb9\u5668\uff0c\u5e76\u4e14\u5c06\u5bb9\u5668\u76841157\u7aef\u53e3\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u76841157\u7aef\u53e3\u4e0a\u3002\u82e5\u5bbf\u4e3b\u673a\u5df2\u6709\u8fdb\u7a0b\u5360\u7528\u8be5\u7aef\u53e3\uff0c\u5219\u9700\u8981\u4fee\u6539\u4e3b\u673a\u6620\u5c04\u7aef\u53e3\u3002"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"docker run -d : \u901a\u8fc7Docker\u8fd0\u884c\u4e00\u4e2a\u5bb9\u5668,\u4f7f\u5176\u5728\u540e\u53f0\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ul"},"-p 1157:1157  : \u6620\u5c04\u5bb9\u5668\u7aef\u53e3\u5230\u4e3b\u673a\u7aef\u53e3"),(0,l.kt)("li",{parentName:"ul"},"-v /opt/application.yml:/opt/hertzbeat/config/application.yml  : \u6302\u8f7d\u4e0a\u4e0a\u4e00\u6b65\u4fee\u6539\u7684\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u5230\u5bb9\u5668\u4e2d\uff0c\u5373\u4f7f\u7528\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u8986\u76d6\u5bb9\u5668\u914d\u7f6e\u6587\u4ef6\u3002\u6211\u4eec\u9700\u8981\u4fee\u6539\u6b64\u914d\u7f6e\u6587\u4ef6\u7684MYSQL\uff0cTDengine\u914d\u7f6e\u4fe1\u606f\u6765\u8fde\u63a5\u5916\u90e8\u670d\u52a1\u3002"),(0,l.kt)("li",{parentName:"ul"},"-v /opt/sureness.yml:/opt/hertzbeat/config/sureness.yml  : (\u975e\u5fc5\u987b)\u6302\u8f7d\u4e0a\u4e00\u6b65\u4fee\u6539\u7684\u8d26\u6237\u914d\u7f6e\u6587\u4ef6\u5230\u5bb9\u5668\u4e2d\uff0c\u82e5\u65e0\u4fee\u6539\u8d26\u6237\u9700\u6c42\u53ef\u5220\u9664\u6b64\u547d\u4ee4\u53c2\u6570\u3002  "),(0,l.kt)("li",{parentName:"ul"},"--name hertzbeat : \u547d\u540d\u5bb9\u5668\u540d\u79f0 hertzbeat "),(0,l.kt)("li",{parentName:"ul"},"tancloud/hertzbeat:","[\u7248\u672ctag]"," : \u4f7f\u7528\u62c9\u53d6\u7684HertzBeat\u5b98\u65b9\u53d1\u5e03\u7684\u5e94\u7528\u955c\u50cf\u6765\u542f\u52a8\u5bb9\u5668,TAG\u53ef\u67e5\u770b",(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/tancloud/hertzbeat/tags"},"\u5b98\u65b9\u955c\u50cf\u4ed3\u5e93"),"   "))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f00\u59cb\u63a2\u7d22HertzBeat",(0,l.kt)("br",{parentName:"p"}),"\n","\u6d4f\u89c8\u5668\u8bbf\u95ee http://ip:1157/console \u5f00\u59cb\u4f7f\u7528HertzBeat\u8fdb\u884c\u76d1\u63a7\u544a\u8b66\uff0c\u9ed8\u8ba4\u8d26\u6237\u5bc6\u7801 admin/admin\u3002  "))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"HAVE FUN"),"   "),(0,l.kt)("h3",{id:"docker\u90e8\u7f72\u5e38\u89c1\u95ee\u9898"},"Docker\u90e8\u7f72\u5e38\u89c1\u95ee\u9898"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"MYSQL,TDENGINE\u548cHertzBeat\u90fdDocker\u90e8\u7f72\u5728\u540c\u4e00\u4e3b\u673a\u4e0a\uff0cHertzBeat\u4f7f\u7528localhost\u6216127.0.0.1\u8fde\u63a5\u6570\u636e\u5e93\u5931\u8d25"),(0,l.kt)("br",{parentName:"p"}),"\n","\u6b64\u95ee\u9898\u672c\u8d28\u4e3aDocker\u5bb9\u5668\u8bbf\u95ee\u5bbf\u4e3b\u673a\u7aef\u53e3\u8fde\u63a5\u5931\u8d25\uff0c\u7531\u4e8edocker\u9ed8\u8ba4\u7f51\u7edc\u6a21\u5f0f\u4e3aBridge\u6a21\u5f0f\uff0c\u5176\u901a\u8fc7localhost\u8bbf\u95ee\u4e0d\u5230\u5bbf\u4e3b\u673a\u3002"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u89e3\u51b3\u529e\u6cd5\u4e00\uff1a\u914d\u7f6eapplication.yml\u5c06\u6570\u636e\u5e93\u7684\u8fde\u63a5\u5730\u5740\u7531localhost\u4fee\u6539\u4e3a\u5bbf\u4e3b\u673a\u7684\u5bf9\u5916IP",(0,l.kt)("br",{parentName:"p"}),"\n","\u89e3\u51b3\u529e\u6cd5\u4e8c\uff1a\u4f7f\u7528Host\u7f51\u7edc\u6a21\u5f0f\u542f\u52a8Docker\uff0c\u5373\u4f7fDocker\u5bb9\u5668\u548c\u5bbf\u4e3b\u673a\u5171\u4eab\u7f51\u7edc ",(0,l.kt)("inlineCode",{parentName:"p"},"docker run -d --network host ....."),"   "))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u6309\u7167\u6d41\u7a0b\u90e8\u7f72\uff0c\u8bbf\u95ee http://ip:1157/console \u65e0\u754c\u9762"),(0,l.kt)("br",{parentName:"p"}),"\n","\u8bf7\u53c2\u8003\u4e0b\u9762\u51e0\u70b9\u6392\u67e5\u95ee\u9898\uff1a  "),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u4e00\uff1a\u4f9d\u8d56\u670d\u52a1MYSQL\u6570\u636e\u5e93\uff0cTDENGINE\u6570\u636e\u5e93\u662f\u5426\u5df2\u6309\u7167\u542f\u52a8\u6210\u529f\uff0c\u5bf9\u5e94hertzbeat\u6570\u636e\u5e93\u662f\u5426\u5df2\u521b\u5efa\uff0cSQL\u811a\u672c\u662f\u5426\u6267\u884c",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e8c\uff1aHertzBeat\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml")," \u91cc\u9762\u7684\u4f9d\u8d56\u670d\u52a1IP\u8d26\u6237\u5bc6\u7801\u7b49\u914d\u7f6e\u662f\u5426\u6b63\u786e",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e09\uff1a\u82e5\u90fd\u65e0\u95ee\u9898\u53ef\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker logs hertzbeat")," \u67e5\u770b\u5bb9\u5668\u65e5\u5fd7\u662f\u5426\u6709\u660e\u663e\u9519\u8bef\uff0c\u63d0issue\u6216\u4ea4\u6d41\u7fa4\u6216\u793e\u533a\u53cd\u9988"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u65e5\u5fd7\u62a5\u9519TDengine\u8fde\u63a5\u6216\u63d2\u5165SQL\u5931\u8d25"),"  "),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u4e00\uff1a\u6392\u67e5\u914d\u7f6e\u7684\u6570\u636e\u5e93\u8d26\u6237\u5bc6\u7801\u662f\u5426\u6b63\u786e\uff0c\u6570\u636e\u5e93\u662f\u5426\u521b\u5efa",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e8c\uff1a\u82e5\u662f\u5b89\u88c5\u5305\u5b89\u88c5\u7684TDengine2.3+\uff0c\u9664\u4e86\u542f\u52a8server\u5916\uff0c\u8fd8\u9700\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"systemctl start taosadapter")," \u542f\u52a8 adapter")))))}k.isMDXComponent=!0}}]);