(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[18],{276:function(e,a,t){"use strict";t.r(a);var n=t(4),s=t(3),r=t(9),c=t(1),i=t(18),o=t(65),l=t(84),d=t(64),u=t(62),p=t(66),m=t(68),b=t(69),j=t(258),f=t(79),g=t(51),h=t(259),O=t(235),v=t(73),x=t(74),y=t(59),N=t(55),w=t(52),T=(t(70),t(0)),M=t(5);a.default=function(){var e=Object(o.i)().id,a=Object(o.g)(),t=Object(i.b)(),_=Object(c.useState)(),R=Object(r.a)(_,2),E=R[0],C=R[1],A=Object(i.c)((function(e){return e.announcementRecords})).getAnnouncementsRecords,k=Object(i.c)((function(e){return e.EditAnnouncementData})),D=k.AnnouncementEditData,P=k.error;Object(c.useEffect)((function(){D&&a.push("/announcement/list")}),[D]),console.log(D,"AnnouncementEditData");var S=Object(c.useState)({image:"",title:"",descripton:"",start_date:"",end_date:"",location:""}),z=Object(r.a)(S,2),L=z[0],F=z[1],G=Object(c.useState)(),U=Object(r.a)(G,2),q=U[0],H=U[1],J=function(e){F(Object(s.a)(Object(s.a)({},L),{},Object(n.a)({},e.target.name,e.target.value)))};Object(c.useEffect)((function(){t(Object(l.b)(e)),t({type:T.g})}),[]),Object(c.useEffect)((function(){F({title:A&&A.data.title,description:A&&A.data.description,start_date:A&&A.data.start_date,end_date:A&&A.data.end_date,location:A&&A.data.location,image:A&&A.data.image})}),[A]),console.log(A,"getAnnouncementsRecords");return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(N.a,{breadCrumbTitle:"Announcement",breadCrumbParent:Object(M.jsx)(w.b,{to:"/announcement/list",children:"Announcement List"}),breadCrumbActive:"Announcement Edit"}),L&&Object(M.jsx)(d.a,{children:Object(M.jsx)(u.a,{children:Object(M.jsx)(p.a,{onSubmit:function(a){return function(a){a.preventDefault();var n=L.title,s=L.description,r=L.start_date,c=L.end_date,i=L.location,o=(L.image,new FormData);o.append("title",n),o.append("description",s),o.append("start_date",r),o.append("end_date",c),o.append("location",i),void 0!=E&&o.append("image",E),t(Object(l.f)(e,o))}(a)},children:Object(M.jsxs)(m.a,{children:[Object(M.jsxs)(b.a,{sm:"12",children:[Object(M.jsx)(j.a,{for:"image",children:"Image"}),Object(M.jsxs)(f.a,{className:"mb-2",children:[null!=q?Object(M.jsx)("img",{className:"user-avatar rounded mr-2 my-25 cursor-pointer",src:q,height:"90",width:"90"}):Object(M.jsx)("img",{className:"user-avatar rounded mr-2 my-25 cursor-pointer",src:"Testing"===L.image?"https://bootdey.com/img/Content/avatar/avatar7.png":L.image,height:"90",width:"90"}),Object(M.jsx)(f.a,{className:"mt-50",body:!0,children:Object(M.jsxs)("div",{className:"d-flex flex-wrap mt-1 px-0",children:[Object(M.jsxs)(g.a.Ripple,{id:"change-img",tag:j.a,className:"mr-75 mb-0",color:"primary",children:["Upload",Object(M.jsx)(h.a,{type:"file",hidden:!0,id:"change-img",accept:"image/*",onChange:function(e){return function(e){C(e.target.files[0]);var a=new FileReader,t=e.target.files;a.onload=function(){H(a.result)},a.readAsDataURL(t[0])}(e)}})]}),Object(M.jsx)(g.a.Ripple,{color:"danger",outline:!0,onClick:function(){return C()},children:"Remove"})]})})]})]}),Object(M.jsx)(b.a,{md:"6",sm:"12",children:Object(M.jsxs)(O.a,{className:"mb-2",children:[Object(M.jsx)(j.a,{for:"title",children:"Title"}),Object(M.jsxs)(v.a,{className:P&&P.title?"is-invalid input-group-merge":"input-group-merge",children:[Object(M.jsx)(x.a,{addonType:"prepend",children:Object(M.jsx)(y.a,{className:P&&P.title?"is-invalid":""})}),Object(M.jsx)(h.a,{className:P&&P.title?"is-invalid":"",type:"text",id:"title",name:"title",placeholder:"Title",value:L.title,onChange:function(e){return J(e)}})]}),P&&P.title?Object(M.jsx)("div",{className:"error",children:P.title}):null]})}),Object(M.jsx)(b.a,{md:"6",sm:"12",children:Object(M.jsxs)(O.a,{className:"mb-2",children:[Object(M.jsx)(j.a,{for:"description",children:"Description"}),Object(M.jsxs)(v.a,{className:P&&P.description?"is-invalid input-group-merge":"input-group-merge",children:[Object(M.jsx)(x.a,{addonType:"prepend",children:Object(M.jsx)(y.a,{className:P&&P.description?"is-invalid":""})}),Object(M.jsx)(h.a,{className:P&&P.description?"is-invalid":"",type:"text",id:"description",name:"description",placeholder:"Description",value:L.description,onChange:function(e){return J(e)}})]}),P&&P.description?Object(M.jsx)("div",{className:"error",children:P.description}):null]})}),Object(M.jsx)(b.a,{md:"6",sm:"12",children:Object(M.jsxs)(O.a,{className:"mb-2",children:[Object(M.jsx)(j.a,{for:"start_date",children:"Start Date"}),Object(M.jsxs)(v.a,{className:P&&P.start_date?"is-invalid input-group-merge":"input-group-merge",children:[Object(M.jsx)(x.a,{addonType:"prepend",children:Object(M.jsx)(y.a,{className:P&&P.start_date?"is-invalid":""})}),Object(M.jsx)(h.a,{className:P&&P.start_date?"is-invalid":"",type:"text",id:"start_date",name:"start_date",placeholder:"Start Date",value:L.start_date,onChange:function(e){return J(e)}})]}),P&&P.start_date?Object(M.jsx)("div",{className:"error",children:P.start_date}):null]})}),Object(M.jsx)(b.a,{md:"6",sm:"12",children:Object(M.jsxs)(O.a,{className:"mb-2",children:[Object(M.jsx)(j.a,{for:"end_date",children:"End Date"}),Object(M.jsxs)(v.a,{className:P&&P.end_date?"is-invalid input-group-merge":"input-group-merge",children:[Object(M.jsx)(x.a,{addonType:"prepend",children:Object(M.jsx)(y.a,{className:P&&P.end_date?"is-invalid":""})}),Object(M.jsx)(h.a,{className:P&&P.end_date?"is-invalid":"",type:"text",id:"end_date",name:"end_date",placeholder:"End Date",value:L.end_date,onChange:function(e){return J(e)}})]}),P&&P.end_date?Object(M.jsx)("div",{className:"error",children:P.end_date}):null]})}),Object(M.jsx)(b.a,{md:"6",sm:"12",children:Object(M.jsxs)(O.a,{className:"mb-2",children:[Object(M.jsx)(j.a,{for:"location",children:"Location"}),Object(M.jsxs)(v.a,{className:P&&P.location?"is-invalid input-group-merge":"input-group-merge",children:[Object(M.jsx)(x.a,{addonType:"prepend",children:Object(M.jsx)(y.a,{className:P&&P.location?"is-invalid":""})}),Object(M.jsx)(h.a,{className:P&&P.location?"is-invalid":"",type:"text",id:"location",name:"location",placeholder:"Location",value:L.location,onChange:function(e){return J(e)}})]}),P&&P.location?Object(M.jsx)("div",{className:"error",children:P.location}):null]})}),Object(M.jsxs)(b.a,{className:"d-flex flex-sm-row flex-column mt-2",sm:"12",children:[Object(M.jsx)(g.a.Ripple,{className:"mb-1 mb-sm-0 mr-0 mr-sm-1",type:"submit",color:"primary",children:"Save Changes"}),Object(M.jsx)(g.a.Ripple,{color:"danger",tag:w.b,to:"/announcement/list",outline:!0,children:"Cancel"})]})]})})})})]})}},55:function(e,a,t){"use strict";var n=t(52),s=t(71),r=t(72),c=t(5);a.a=function(e){var a=e.breadCrumbTitle,t=e.breadCrumbParent,i=e.breadCrumbParent2,o=e.breadCrumbParent3,l=e.breadCrumbActive;return Object(c.jsx)("div",{className:"content-header row",children:Object(c.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(c.jsx)("div",{className:"row breadcrumbs-top",children:Object(c.jsxs)("div",{className:"col-12",children:[a?Object(c.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(c.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(c.jsxs)(s.a,{children:[Object(c.jsx)(r.a,{tag:"li",children:Object(c.jsx)(n.b,{to:"/",children:"Home"})}),Object(c.jsx)(r.a,{tag:"li",className:"text-primary",children:t}),i?Object(c.jsx)(r.a,{tag:"li",className:"text-primary",children:i}):"",o?Object(c.jsx)(r.a,{tag:"li",className:"text-primary",children:o}):"",Object(c.jsx)(r.a,{tag:"li",active:!0,children:l})]})})]})})})})}},59:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),c=t.n(r),i=t(2),o=t.n(i),l=t(11),d=t.n(l),u=t(13),p={tag:u.i,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),o=Object(u.f)(d()(a,"input-group-text"),t);return c.a.createElement(r,Object(n.a)({},i,{className:o}))};m.propTypes=p,m.defaultProps={tag:"span"},a.a=m},62:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),c=t.n(r),i=t(2),o=t.n(i),l=t(11),d=t.n(l),u=t(13),p={tag:u.i,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},m=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,i=e.tag,o=Object(s.a)(e,["className","cssModule","innerRef","tag"]),l=Object(u.f)(d()(a,"card-body"),t);return c.a.createElement(i,Object(n.a)({},o,{className:l,ref:r}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},64:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),c=t.n(r),i=t(2),o=t.n(i),l=t(11),d=t.n(l),u=t(13),p={tag:u.i,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},m=function(e){var a=e.className,t=e.cssModule,r=e.color,i=e.body,o=e.inverse,l=e.outline,p=e.tag,m=e.innerRef,b=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),j=Object(u.f)(d()(a,"card",!!o&&"text-white",!!i&&"card-body",!!r&&(l?"border":"bg")+"-"+r),t);return c.a.createElement(p,Object(n.a)({},b,{className:j,ref:m}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},66:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(20),c=t(19),i=t(1),o=t.n(i),l=t(2),d=t.n(l),u=t(11),p=t.n(u),m=t(13),b={children:d.a.node,inline:d.a.bool,tag:m.i,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},j=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,c=e.tag,i=e.innerRef,l=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(m.f)(p()(a,!!r&&"form-inline"),t);return o.a.createElement(c,Object(n.a)({},l,{ref:i,className:d}))},a}(i.Component);j.propTypes=b,j.defaultProps={tag:"form"},a.a=j},68:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),c=t.n(r),i=t(2),o=t.n(i),l=t(11),d=t.n(l),u=t(13),p=o.a.oneOfType([o.a.number,o.a.string]),m={tag:u.i,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},b={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,i=e.tag,o=e.form,l=e.widths,p=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];l.forEach((function(a,t){var n=e[a];if(delete p[a],n){var s=!t;m.push(s?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var b=Object(u.f)(d()(a,r?"no-gutters":null,o?"form-row":"row",m),t);return c.a.createElement(i,Object(n.a)({},p,{className:b}))};j.propTypes=m,j.defaultProps=b,a.a=j},69:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),c=t.n(r),i=t(2),o=t.n(i),l=t(11),d=t.n(l),u=t(13),p=o.a.oneOfType([o.a.number,o.a.string]),m=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:p,offset:p})]),b={tag:u.i,xs:m,sm:m,md:m,lg:m,xl:m,className:o.a.string,cssModule:o.a.object,widths:o.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,r=e.widths,i=e.tag,o=Object(s.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(a,n){var s=e[a];if(delete o[a],s||""===s){var r=!n;if(Object(u.d)(s)){var c,i=r?"-":"-"+a+"-",p=f(r,a,s.size);l.push(Object(u.f)(d()(((c={})[p]=s.size||""===s.size,c["order"+i+s.order]=s.order||0===s.order,c["offset"+i+s.offset]=s.offset||0===s.offset,c)),t))}else{var m=f(r,a,s);l.push(m)}}})),l.length||l.push("col");var p=Object(u.f)(d()(a,l),t);return c.a.createElement(i,Object(n.a)({},o,{className:p}))};g.propTypes=b,g.defaultProps=j,a.a=g},71:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),c=t.n(r),i=t(2),o=t.n(i),l=t(11),d=t.n(l),u=t(13),p={tag:u.i,listTag:u.i,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},m=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,i=e.children,o=e.tag,l=e.listTag,p=e["aria-label"],m=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(u.f)(d()(a),r),j=Object(u.f)(d()("breadcrumb",t),r);return c.a.createElement(o,Object(n.a)({},m,{className:b,"aria-label":p}),c.a.createElement(l,{className:j},i))};m.propTypes=p,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},72:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),c=t.n(r),i=t(2),o=t.n(i),l=t(11),d=t.n(l),u=t(13),p={tag:u.i,active:o.a.bool,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.active,i=e.tag,o=Object(s.a)(e,["className","cssModule","active","tag"]),l=Object(u.f)(d()(a,!!r&&"active","breadcrumb-item"),t);return c.a.createElement(i,Object(n.a)({},o,{className:l,"aria-current":r?"page":void 0}))};m.propTypes=p,m.defaultProps={tag:"li"},a.a=m},73:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),c=t.n(r),i=t(2),o=t.n(i),l=t(11),d=t.n(l),u=t(13),p={tag:u.i,size:o.a.string,className:o.a.string,cssModule:o.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,i=e.size,o=Object(s.a)(e,["className","cssModule","tag","size"]),l=Object(u.f)(d()(a,"input-group",i?"input-group-"+i:null),t);return c.a.createElement(r,Object(n.a)({},o,{className:l}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},74:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),c=t.n(r),i=t(2),o=t.n(i),l=t(11),d=t.n(l),u=t(13),p=t(59),m={tag:u.i,addonType:o.a.oneOf(["prepend","append"]).isRequired,children:o.a.node,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.tag,i=e.addonType,o=e.children,l=Object(s.a)(e,["className","cssModule","tag","addonType","children"]),m=Object(u.f)(d()(a,"input-group-"+i),t);return"string"===typeof o?c.a.createElement(r,Object(n.a)({},l,{className:m}),c.a.createElement(p.a,{children:o})):c.a.createElement(r,Object(n.a)({},l,{className:m,children:o}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},79:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),c=t.n(r),i=t(2),o=t.n(i),l=t(11),d=t.n(l),u=t(13),p={body:o.a.bool,bottom:o.a.bool,children:o.a.node,className:o.a.string,cssModule:o.a.object,heading:o.a.bool,left:o.a.bool,list:o.a.bool,middle:o.a.bool,object:o.a.bool,right:o.a.bool,tag:u.i,top:o.a.bool},m=function(e){var a,t=e.body,r=e.bottom,i=e.className,o=e.cssModule,l=e.heading,p=e.left,m=e.list,b=e.middle,j=e.object,f=e.right,g=e.tag,h=e.top,O=Object(s.a)(e,["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"]);a=l?"h4":O.href?"a":O.src||j?"img":m?"ul":"div";var v=g||a,x=Object(u.f)(d()(i,{"media-body":t,"media-heading":l,"media-left":p,"media-right":f,"media-top":h,"media-bottom":r,"media-middle":b,"media-object":j,"media-list":m,media:!t&&!l&&!p&&!f&&!h&&!r&&!b&&!j&&!m}),o);return c.a.createElement(v,Object(n.a)({},O,{className:x}))};m.propTypes=p,a.a=m},84:function(e,a,t){"use strict";t.d(a,"e",(function(){return u})),t.d(a,"c",(function(){return p})),t.d(a,"b",(function(){return m})),t.d(a,"f",(function(){return b})),t.d(a,"a",(function(){return j})),t.d(a,"d",(function(){return f}));var n=t(56),s=t.n(n),r=t(57),c=t(61),i=t.n(c),o=t(58),l=t(0),d=t(60),u=function(e){return function(){var a=Object(r.a)(s.a.mark((function a(t){var n,r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:l.v}),a.prev=1,a.next=4,i.a.post("/chairman/announcement/create",e,o.a);case 4:n=a.sent,(r=n.data)&&d.b.success("Announcement Created Successfully"),t({type:l.x,payload:r}),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),t({type:l.u,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}()},p=function(e){return function(){var a=Object(r.a)(s.a.mark((function a(t){var n,r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:l.n}),a.next=4,i.a.get("/chairman/announcement/getAll_Announcement?"+e,o.a);case 4:n=a.sent,r=n.data,t({type:l.p,payload:r}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t({type:l.m,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},m=function(e){return function(){var a=Object(r.a)(s.a.mark((function a(t){var n,r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:l.j}),a.next=4,i.a.get("/chairman/announcement/get_Announcement/".concat(e),o.a);case 4:n=a.sent,r=n.data,t({type:l.l,payload:r}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t({type:l.i,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},b=function(e,a){return function(){var t=Object(r.a)(s.a.mark((function t(n){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:l.f}),t.next=4,i.a.put("/chairman/announcement/update/".concat(e),a,{configHeader:o.a});case 4:r=t.sent,c=r.data,n({type:l.h,payload:c}),c&&d.b.success("Announcement Updated Successfully"),n({type:l.g}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),n({type:l.e,payload:t.t0.response&&t.t0.response.data.errors?t.t0.response.data.errors:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var a=Object(r.a)(s.a.mark((function a(t){var n,r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:l.b}),a.next=4,i.a.delete("/chairman/announcement/delete/".concat(e),o.a);case 4:n=a.sent,r=n.data,t({type:l.d,payload:r}),r&&d.b.error("Announcement Deleted Successfully"),t({type:l.c}),t(p()),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),t({type:l.a,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}()},f=function(e){return function(){var a=Object(r.a)(s.a.mark((function a(t){var n,r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:l.r}),a.next=4,i.a.delete("/chairman/announcement/delete_many/",e);case 4:n=a.sent,r=n.data,t({type:l.t,payload:r}),r&&d.b.error("Announcement Deleted Successfully"),t({type:l.s}),t(p()),setDeletedRow([]),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),t({type:l.q,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 16:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(e){return a.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=18.e031bf87.chunk.js.map