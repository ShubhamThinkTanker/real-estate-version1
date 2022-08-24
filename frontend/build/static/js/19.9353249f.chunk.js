(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[19],{156:function(e,t,a){"use strict";var r=a(1),n=a.n(r),s=a(3),c=a.n(s);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,s=e.size,c=void 0===s?24:s,l=o(e,["color","size"]);return n.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.a.createElement("polyline",{points:"4 7 4 4 20 4 20 7"}),n.a.createElement("line",{x1:"9",y1:"20",x2:"15",y2:"20"}),n.a.createElement("line",{x1:"12",y1:"4",x2:"12",y2:"20"}))}));l.propTypes={color:c.a.string,size:c.a.oneOfType([c.a.string,c.a.number])},l.displayName="Type",t.a=l},253:function(e,t,a){"use strict";var r=a(6),n=a(7),s=a(1),c=a.n(s),i=a(3),o=a.n(i),l=a(11),u=a.n(l),d=a(13),p={tag:d.i,type:o.a.string,size:o.a.string,color:o.a.string,className:o.a.string,cssModule:o.a.object,children:o.a.string},b=function(e){var t=e.className,a=e.cssModule,s=e.type,i=e.size,o=e.color,l=e.children,p=e.tag,b=Object(n.a)(e,["className","cssModule","type","size","color","children","tag"]),f=Object(d.f)(u()(t,!!i&&"spinner-"+s+"-"+i,"spinner-"+s,!!o&&"text-"+o),a);return c.a.createElement(p,Object(r.a)({role:"status"},b,{className:f}),l&&c.a.createElement("span",{className:Object(d.f)("sr-only",a)},l))};b.propTypes=p,b.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=b},304:function(e,t,a){"use strict";a.r(t);var r=a(56),n=a.n(r),s=a(57),c=a(4),i=a(2),o=a(9),l=a(1),u=a(18),d=a(71),p=a(53),b=a(55),f=a(152),m=a(62),h=a(253),j=a(63),v=a(65),g=a(66),O=a(260),y=a(246),x=a(69),N=a(70),w=a(58),k=a(247),_=a(311),T=a(52),E=a(156),M=a(76),S=a(72),C=a(81),P=a(0),R=a(5);t.default=function(){var e=Object(d.i)().id,t=Object(d.g)(),a=Object(u.b)(),r=Object(u.c)((function(e){return null===e||void 0===e?void 0:e.vehicle})),V=r.error,z=r.loading,Y=r.editedVehicle,A=r.vehicle,D=Object(l.useState)({vehicle_no:"",vehicle_type:"",sticker_status:"NO"}),L=Object(o.a)(D,2),B=L[0],G=L[1],F=[{value:"car",label:"CAR"},{value:"bike",label:"BIKE"},{value:"scooty",label:"SCOOTY"},{value:"truck",label:"TRUCK"},{value:"bus",label:"BUS"}],I=function(e){G(Object(i.a)(Object(i.a)({},B),{},Object(c.a)({},e.target.name,e.target.value)))},J=function(){var t=Object(s.a)(n.a.mark((function t(r){var s,c,i,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),s=B.vehicle_no,c=B.vehicle_type,i=B.sticker_status,(o=new FormData).append("vehicle_no",s),o.append("vehicle_type",c),o.append("sticker_status","YES"===i),t.next=8,a(Object(C.b)(e,o));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.useEffect)((function(){return a(Object(C.d)(e)),function(){a({type:P.cc})}}),[a,e]),Object(l.useEffect)((function(){return Y&&t.push("/vehicle/list"),function(){a({type:P.Yb})}}),[Y,a]),Object(R.jsxs)(l.Fragment,{children:[Object(R.jsx)(b.a,{breadCrumbTitle:"Vehicle",breadCrumbParent:Object(R.jsx)(p.b,{to:"/vehicle/list",children:"Vehicle List"}),breadCrumbActive:"Edit Vehicle Details"}),Object(R.jsx)(f.a,{children:Object(R.jsx)(m.a,{children:z?Object(R.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:Object(R.jsx)(h.a,{color:"primary"})}):Object(R.jsx)(j.a,{onSubmit:function(e){return J(e)},children:Object(R.jsxs)(v.a,{children:[Object(R.jsx)(g.a,{md:"6",sm:"12",children:Object(R.jsxs)(O.a,{className:"mb-2",children:[Object(R.jsx)(y.a,{for:"vehicle_no",children:"Vehicle No"}),Object(R.jsxs)(x.a,{className:V&&V.vehicle_no?"is-invalid input-group-merge":"input-group-merge mb-1",children:[Object(R.jsx)(N.a,{addonType:"prepend",children:Object(R.jsx)(w.a,{className:V&&V.vehicle_no?"is-invalid":"",children:Object(R.jsx)(E.a,{size:15})})}),Object(R.jsx)(k.a,{className:V&&V.vehicle_no?"is-invalid":"",type:"text",id:"vehicle_no",name:"vehicle_no",placeholder:"Vehicle Number",onChange:I,defaultValue:null===A||void 0===A?void 0:A.vehicle_no})]}),V&&V.vehicle_no?Object(R.jsx)("div",{className:"error",children:V.vehicle_no}):null]})}),Object(R.jsx)(g.a,{md:"6",sm:"12",children:Object(R.jsxs)(O.a,{className:"mb-2",children:[Object(R.jsx)(y.a,{for:"vehicle_type",children:"Vehicle Type"}),Object(R.jsx)(x.a,{className:V&&V.vehicle_type?"is-invalid input-group-merge":"input-group-merge",children:Object(R.jsx)(M.a,{className:V&&V.vehicle_type?"is-invalid  w-100":" w-100",theme:S.b,id:"vehicle_type",name:"vehicle_type",options:F,onChange:function(e){return G(Object(i.a)(Object(i.a)({},B),{},{vehicle_type:e.value}))},defaultValue:F.filter((function(e){return e.value===(null===A||void 0===A?void 0:A.vehicle_type)}))})}),V&&V.vehicle_type?Object(R.jsx)("div",{className:"error",children:V.vehicle_type}):null]})}),Object(R.jsxs)(g.a,{md:"6",sm:"12",children:[Object(R.jsx)(y.a,{for:"sticker_status",children:"Sticker Status"}),Object(R.jsxs)(O.a,{className:"",children:[Object(R.jsx)(_.a,{type:"radio",id:"sticker_status_yes",name:"sticker_status",inline:!0,label:"YES",checked:"YES"===B.sticker_status,defaultValue:"YES",onChange:I}),Object(R.jsx)(_.a,{type:"radio",id:"sticker_status_no",name:"sticker_status",inline:!0,label:"NO",checked:"NO"===B.sticker_status,defaultValue:"NO",onChange:I})]})]}),Object(R.jsxs)(g.a,{className:"d-flex flex-sm-row flex-column mt-2",sm:"12",children:[Object(R.jsx)(T.a.Ripple,{className:"mb-1 mb-sm-0 mr-0 mr-sm-1",color:"primary",type:"submit",children:"Submit"}),Object(R.jsx)(T.a.Ripple,{color:"danger",tag:p.b,to:"/vehicle/list",outline:!0,children:"Cancel"})]})]})})})})]})}},55:function(e,t,a){"use strict";var r=a(53),n=a(67),s=a(68),c=a(5);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,i=e.breadCrumbParent2,o=e.breadCrumbParent3,l=e.breadCrumbActive;return Object(c.jsx)("div",{className:"content-header row",children:Object(c.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(c.jsx)("div",{className:"row breadcrumbs-top",children:Object(c.jsxs)("div",{className:"col-12",children:[t?Object(c.jsx)("h2",{className:"content-header-title float-left mb-0",children:t}):"",Object(c.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(c.jsxs)(n.a,{children:[Object(c.jsx)(s.a,{tag:"li",children:Object(c.jsx)(r.b,{to:"/",children:"Home"})}),Object(c.jsx)(s.a,{tag:"li",className:"text-primary",children:a}),i?Object(c.jsx)(s.a,{tag:"li",className:"text-primary",children:i}):"",o?Object(c.jsx)(s.a,{tag:"li",className:"text-primary",children:o}):"",Object(c.jsx)(s.a,{tag:"li",active:!0,children:l})]})})]})})})})}},58:function(e,t,a){"use strict";var r=a(6),n=a(7),s=a(1),c=a.n(s),i=a(3),o=a.n(i),l=a(11),u=a.n(l),d=a(13),p={tag:d.i,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,s=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),o=Object(d.f)(u()(t,"input-group-text"),a);return c.a.createElement(s,Object(r.a)({},i,{className:o}))};b.propTypes=p,b.defaultProps={tag:"span"},t.a=b},62:function(e,t,a){"use strict";var r=a(6),n=a(7),s=a(1),c=a.n(s),i=a(3),o=a.n(i),l=a(11),u=a.n(l),d=a(13),p={tag:d.i,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var t=e.className,a=e.cssModule,s=e.innerRef,i=e.tag,o=Object(n.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.f)(u()(t,"card-body"),a);return c.a.createElement(i,Object(r.a)({},o,{className:l,ref:s}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},63:function(e,t,a){"use strict";var r=a(6),n=a(7),s=a(20),c=a(19),i=a(1),o=a.n(i),l=a(3),u=a.n(l),d=a(11),p=a.n(d),b=a(13),f={children:u.a.node,inline:u.a.bool,tag:b.i,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,c=e.tag,i=e.innerRef,l=Object(n.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(b.f)(p()(t,!!s&&"form-inline"),a);return o.a.createElement(c,Object(r.a)({},l,{ref:i,className:u}))},t}(i.Component);m.propTypes=f,m.defaultProps={tag:"form"},t.a=m},65:function(e,t,a){"use strict";var r=a(6),n=a(7),s=a(1),c=a.n(s),i=a(3),o=a.n(i),l=a(11),u=a.n(l),d=a(13),p=o.a.oneOfType([o.a.number,o.a.string]),b={tag:d.i,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},f={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,i=e.tag,o=e.form,l=e.widths,p=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];l.forEach((function(t,a){var r=e[t];if(delete p[t],r){var n=!a;b.push(n?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var f=Object(d.f)(u()(t,s?"no-gutters":null,o?"form-row":"row",b),a);return c.a.createElement(i,Object(r.a)({},p,{className:f}))};m.propTypes=b,m.defaultProps=f,t.a=m},66:function(e,t,a){"use strict";var r=a(6),n=a(7),s=a(1),c=a.n(s),i=a(3),o=a.n(i),l=a(11),u=a.n(l),d=a(13),p=o.a.oneOfType([o.a.number,o.a.string]),b=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:p,offset:p})]),f={tag:d.i,xs:b,sm:b,md:b,lg:b,xl:b,className:o.a.string,cssModule:o.a.object,widths:o.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},j=function(e){var t=e.className,a=e.cssModule,s=e.widths,i=e.tag,o=Object(n.a)(e,["className","cssModule","widths","tag"]),l=[];s.forEach((function(t,r){var n=e[t];if(delete o[t],n||""===n){var s=!r;if(Object(d.d)(n)){var c,i=s?"-":"-"+t+"-",p=h(s,t,n.size);l.push(Object(d.f)(u()(((c={})[p]=n.size||""===n.size,c["order"+i+n.order]=n.order||0===n.order,c["offset"+i+n.offset]=n.offset||0===n.offset,c)),a))}else{var b=h(s,t,n);l.push(b)}}})),l.length||l.push("col");var p=Object(d.f)(u()(t,l),a);return c.a.createElement(i,Object(r.a)({},o,{className:p}))};j.propTypes=f,j.defaultProps=m,t.a=j},67:function(e,t,a){"use strict";var r=a(6),n=a(7),s=a(1),c=a.n(s),i=a(3),o=a.n(i),l=a(11),u=a.n(l),d=a(13),p={tag:d.i,listTag:d.i,className:o.a.string,listClassName:o.a.string,cssModule:o.a.object,children:o.a.node,"aria-label":o.a.string},b=function(e){var t=e.className,a=e.listClassName,s=e.cssModule,i=e.children,o=e.tag,l=e.listTag,p=e["aria-label"],b=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),f=Object(d.f)(u()(t),s),m=Object(d.f)(u()("breadcrumb",a),s);return c.a.createElement(o,Object(r.a)({},b,{className:f,"aria-label":p}),c.a.createElement(l,{className:m},i))};b.propTypes=p,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=b},68:function(e,t,a){"use strict";var r=a(6),n=a(7),s=a(1),c=a.n(s),i=a(3),o=a.n(i),l=a(11),u=a.n(l),d=a(13),p={tag:d.i,active:o.a.bool,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,s=e.active,i=e.tag,o=Object(n.a)(e,["className","cssModule","active","tag"]),l=Object(d.f)(u()(t,!!s&&"active","breadcrumb-item"),a);return c.a.createElement(i,Object(r.a)({},o,{className:l,"aria-current":s?"page":void 0}))};b.propTypes=p,b.defaultProps={tag:"li"},t.a=b},69:function(e,t,a){"use strict";var r=a(6),n=a(7),s=a(1),c=a.n(s),i=a(3),o=a.n(i),l=a(11),u=a.n(l),d=a(13),p={tag:d.i,size:o.a.string,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,s=e.tag,i=e.size,o=Object(n.a)(e,["className","cssModule","tag","size"]),l=Object(d.f)(u()(t,"input-group",i?"input-group-"+i:null),a);return c.a.createElement(s,Object(r.a)({},o,{className:l}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},70:function(e,t,a){"use strict";var r=a(6),n=a(7),s=a(1),c=a.n(s),i=a(3),o=a.n(i),l=a(11),u=a.n(l),d=a(13),p=a(58),b={tag:d.i,addonType:o.a.oneOf(["prepend","append"]).isRequired,children:o.a.node,className:o.a.string,cssModule:o.a.object},f=function(e){var t=e.className,a=e.cssModule,s=e.tag,i=e.addonType,o=e.children,l=Object(n.a)(e,["className","cssModule","tag","addonType","children"]),b=Object(d.f)(u()(t,"input-group-"+i),a);return"string"===typeof o?c.a.createElement(s,Object(r.a)({},l,{className:b}),c.a.createElement(p.a,{children:o})):c.a.createElement(s,Object(r.a)({},l,{className:b,children:o}))};f.propTypes=b,f.defaultProps={tag:"div"},t.a=f},81:function(e,t,a){"use strict";a.d(t,"f",(function(){return d})),a.d(t,"c",(function(){return p})),a.d(t,"d",(function(){return b})),a.d(t,"b",(function(){return f})),a.d(t,"a",(function(){return m})),a.d(t,"e",(function(){return h}));var r=a(56),n=a.n(r),s=a(57),c=a(61),i=a.n(c),o=a(60),l=a(59),u=a(0),d=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(a){var r,s,c,d;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:u.nc}),t.prev=1,t.next=4,i.a.post("/api/vehicle/create",e,l.a);case 4:r=t.sent,s=r.data,c=s.error,d=s.statusCode,a({type:u.pc,payload:s}),201===d&&o.b.success("Vehicle Created Successfully"),c&&o.b.error("Something went wrong"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),o.b.error("Something went wrong",t.t0),a({type:u.mc,payload:t.t0.response&&t.t0.response.data.errors?t.t0.response.data.errors:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(a){var r,s,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:u.fc}),t.prev=1,t.next=4,i.a.get("/api/vehicle?".concat(e),l.a);case 4:r=t.sent,s=r.data,c=s.error,s.statusCode,a({type:u.hc,payload:s}),c&&o.b.error("Something went wrong"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),o.b.error("Something went wrong"),a({type:u.ec,payload:t.t0.response&&t.t0.response.data.errors?t.t0.response.data.errors:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(a){var r,s,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:u.bc}),t.prev=1,t.next=4,i.a.get("/api/vehicle/".concat(e),l.a);case 4:r=t.sent,s=r.data,c=s.error,s.statusCode,a({type:u.dc,payload:s}),c&&o.b.error("Something went wrong"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),o.b.error("Something went wrong"),a({type:u.ac,payload:t.t0.response&&t.t0.response.data.errors?t.t0.response.data.errors:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e,t){return function(){var a=Object(s.a)(n.a.mark((function a(r){var s,c,d,p;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r({type:u.Xb}),a.prev=1,a.next=4,i.a.put("/api/vehicle/edit/".concat(e),t,l.a);case 4:s=a.sent,c=s.data,d=c.error,p=c.statusCode,r({type:u.Zb,payload:c}),200===p&&o.b.success("Vehicle Edited Successfully"),d&&o.b.error("Something went wrong"),a.next=16;break;case 12:a.prev=12,a.t0=a.catch(1),o.b.error("Something went wrong"),r({type:u.Wb,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 16:case"end":return a.stop()}}),a,null,[[1,12]])})));return function(e){return a.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(a){var r,s,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:u.Tb}),t.prev=1,t.next=4,i.a.delete("/api/vehicle/delete/".concat(e),l.a);case 4:r=t.sent,s=r.data,c=s.error,s.statusCode,a({type:u.Vb,payload:s}),c&&o.b.error("Something went wrong"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),o.b.error("Something went wrong"),a({type:u.Sb,payload:t.t0.response&&t.t0.response.data.errors?t.t0.response.data.errors:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(n.a.mark((function t(a){var r,s,c,d;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:u.jc}),t.prev=1,t.next=4,i.a.post("/api/vehicle/delete/",e,l.a);case 4:r=t.sent,s=r.data,c=s.error,d=s.statusCode,a({type:u.lc,payload:s}),200===d&&o.b.success("All Vehicle Deleted Successfully"),c&&o.b.error("Something went wrong"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),o.b.error("Something went wrong"),a({type:u.ic,payload:t.t0.response&&t.t0.response.data.errors?t.t0.response.data.errors:t.t0.message});case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=19.9353249f.chunk.js.map