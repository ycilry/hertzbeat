"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[5640],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},44105:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={id:"mysql-change",title:"Dependent Relational Database H2 Switch to MYSQL",sidebar_label:"H2 Switch to MYSQL"},i=void 0,l={unversionedId:"start/mysql-change",id:"start/mysql-change",title:"Dependent Relational Database H2 Switch to MYSQL",description:"MYSQL is a reliable relational database. In addition to default built-in H2 database, HertzBeat allow you to use MYSQL to store structured relational data such as monitoring information, alarm information and configuration information.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/start/mysql-change.md",sourceDirName:"start",slug:"/start/mysql-change",permalink:"/en/docs/start/mysql-change",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/start/mysql-change.md",tags:[],version:"current",frontMatter:{id:"mysql-change",title:"Dependent Relational Database H2 Switch to MYSQL",sidebar_label:"H2 Switch to MYSQL"},sidebar:"docs",previous:{title:"Practice Example",permalink:"/en/docs/start/ssl-cert-practice"},next:{title:"Advanced Config",permalink:"/en/docs/start/custom-config"}},c={},s=[{value:"Install MYSQL via Docker",id:"install-mysql-via-docker",level:3},{value:"Database creation",id:"database-creation",level:3},{value:"Modify hertzbeat&#39;s configuration file application.yml and switch data source",id:"modify-hertzbeats-configuration-file-applicationyml-and-switch-data-source",level:3}],d={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"MYSQL is a reliable relational database. In addition to default built-in H2 database, HertzBeat allow you to use MYSQL to store structured relational data such as monitoring information, alarm information and configuration information.   "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you have the MYSQL environment, can be directly to database creation step.  ")),(0,r.kt)("h3",{id:"install-mysql-via-docker"},"Install MYSQL via Docker"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download and install the Docker environment",(0,r.kt)("br",{parentName:"li"}),"Docker tools download refer to ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker official document"),"\u3002\nAfter the installation you can check if the Docker version normally output at the terminal.  ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,r.kt)("li",{parentName:"ol"},"Install MYSQl with Docker ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ docker run -d --name mysql -p 3306:3306 -v /opt/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7\n")),(0,r.kt)("inlineCode",{parentName:"li"},"-v /opt/data:/var/lib/mysql"),"  is local persistent mount of mysql data directory. ",(0,r.kt)("inlineCode",{parentName:"li"},"/opt/data")," should be replaced with the actual local directory.",(0,r.kt)("br",{parentName:"li"}),"use",(0,r.kt)("inlineCode",{parentName:"li"},"$ docker ps"),"to check if the database started successfully")),(0,r.kt)("h3",{id:"database-creation"},"Database creation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enter MYSQL or use the client to connect MYSQL service",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"mysql -uroot -p123456"),"  "),(0,r.kt)("li",{parentName:"ol"},"Create database named hertzbeat",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("inlineCode",{parentName:"li"},"create database hertzbeat;")),(0,r.kt)("li",{parentName:"ol"},"Check if hertzbeat database has been successfully created\n",(0,r.kt)("inlineCode",{parentName:"li"},"show databases;"))),(0,r.kt)("h3",{id:"modify-hertzbeats-configuration-file-applicationyml-and-switch-data-source"},"Modify hertzbeat's configuration file application.yml and switch data source"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure HertzBeat's configuration file\nModify ",(0,r.kt)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," configuration file\nNote\u26a0\ufe0fThe docker container way need to mount application.yml file locally,while you can use installation package way to unzip and modify ",(0,r.kt)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml"),(0,r.kt)("br",{parentName:"li"}),"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"spring.database")," data source parameters, URL account and password.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  datasource:\n    driver-class-name: org.h2.Driver\n    username: sa\n    password: 123456\n    url: jdbc:h2:./data/hertzbeat;MODE=MYSQL\n")),(0,r.kt)("p",null,"   Specific replacement parameters is as follows and you need to configure account according to the mysql environment:   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  datasource:\n    driver-class-name: com.mysql.cj.jdbc.Driver\n    username: root\n    password: 123456\n    url: jdbc:mysql://localhost:3306/hertzbeat?useUnicode=true&characterEncoding=utf-8&useSSL=false\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Start HertzBeat  visit http://ip:1157/ on the browser  You can use HertzBeat monitoring alarm, default account and password are admin/hertzbeat")))}p.isMDXComponent=!0}}]);