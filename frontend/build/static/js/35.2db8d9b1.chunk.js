(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[35],{510:function(e,a,t){"use strict";t.r(a);var r=t(5),n=t(3),s=t(9),c=t(0),o=t(18),d=t(66),i=t(74),l=t(77),u=t(73),p=t(70),b=t(75),m=t(76),f=t(468),j=t(469),v=t(54),h=t(55),x=(t(63),t(1)),O=t(4);a.default=function(){var e=Object(d.i)().id,a=Object(d.g)(),t=Object(o.b)(),y=Object(o.c)((function(e){return e.vendorRecords})),N=(y.error,y.getVendorsRecords),g=Object(o.c)((function(e){return e.EditVendorData})),w=g.VendorEditData,k=g.error;Object(c.useEffect)((function(){w&&a.push("/vendor/list")}),[w]);var _=Object(c.useState)({name:"",lastname:"",mobile_no:"",profession:"",services:"",address:""}),V=Object(s.a)(_,2),C=V[0],E=V[1],D=function(e){E(Object(n.a)(Object(n.a)({},C),{},Object(r.a)({},e.target.name,e.target.value)))};Object(c.useEffect)((function(){t(Object(i.c)(e)),t({type:x.ob})}),[]),Object(c.useEffect)((function(){E({name:N&&N.data.name,lastname:N&&N.data.lastname,mobile_no:N&&N.data.mobile_no,profession:N&&N.data.profession,services:N&&N.data.services,address:N&&N.data.address})}),[N]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{children:"Edit Vendor"}),C&&Object(O.jsx)(l.a,{children:Object(O.jsx)(u.a,{children:Object(O.jsx)(p.a,{onSubmit:function(a){return function(a){a.preventDefault();var r=C.name,n=C.lastname,s=C.mobile_no,c=C.profession,o=C.services,d=C.address,l=new FormData;l.append("name",r),l.append("lastname",n),l.append("mobile_no",s),l.append("profession",c),l.append("services",o),l.append("address",d),t(Object(i.a)(e,l))}(a)},children:Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(m.a,{md:"6",sm:"12",className:"mb-1",children:[Object(O.jsx)(f.a,{className:"form-label",for:"name",children:"First Name"}),Object(O.jsx)(j.a,{type:"text",name:"name",id:"name",placeholder:"First Name",defaultValue:C.name,onChange:function(e){return D(e)}}),k&&k.name?Object(O.jsx)("div",{className:"error",children:k.name}):null]}),Object(O.jsxs)(m.a,{md:"6",sm:"12",className:"mb-1",children:[Object(O.jsx)(f.a,{className:"form-label",for:"lastname",children:"Last Name"}),Object(O.jsx)(j.a,{type:"text",name:"lastname",id:"lastname",placeholder:"Last Name",defaultValue:C.lastname,onChange:function(e){return D(e)}}),k&&k.lastname?Object(O.jsx)("div",{className:"error",children:k.lastname}):null]}),Object(O.jsxs)(m.a,{md:"6",sm:"12",className:"mb-1",children:[Object(O.jsx)(f.a,{className:"form-label",for:"mobile_no",children:"Mobile No"}),Object(O.jsx)(j.a,{type:"number",name:"mobile_no",id:"mobile_no",placeholder:"Mobile no",defaultValue:C.mobile_no,onChange:function(e){return D(e)}}),k&&k.mobile_no?Object(O.jsx)("div",{className:"error",children:k.mobile_no}):null]}),Object(O.jsxs)(m.a,{md:"6",sm:"12",className:"mb-1",children:[Object(O.jsx)(f.a,{className:"form-label",for:"profession",children:"Profession"}),Object(O.jsx)(j.a,{type:"text",name:"profession",id:"profession",placeholder:"Profession",defaultValue:C.profession,onChange:function(e){return D(e)}}),k&&k.profession?Object(O.jsx)("div",{className:"error",children:k.profession}):null]}),Object(O.jsxs)(m.a,{md:"6",sm:"12",className:"mb-1",children:[Object(O.jsx)(f.a,{className:"form-label",for:"service",children:"Type of Service"}),Object(O.jsx)(j.a,{type:"text",name:"services",id:"service",placeholder:"Service",defaultValue:C.services,onChange:function(e){return D(e)}}),k&&k.services?Object(O.jsx)("div",{className:"error",children:k.services}):null]}),Object(O.jsxs)(m.a,{md:"6",sm:"12",className:"mb-1",children:[Object(O.jsx)(f.a,{className:"form-label",for:"address",children:"Address"}),Object(O.jsx)(j.a,{type:"text",name:"address",id:"address",placeholder:"Address",defaultValue:C.address,onChange:function(e){return D(e)}}),k&&k.address?Object(O.jsx)("div",{className:"error",children:k.address}):null]}),Object(O.jsx)(m.a,{sm:"12",children:Object(O.jsxs)("div",{className:"d-flex ",children:[Object(O.jsx)(v.a.Ripple,{className:"me-1 mr-1",color:"primary",type:"submit",children:"Save Changes"}),Object(O.jsx)(v.a.Ripple,{outline:!0,color:"secondary",type:"cancel",tag:h.b,to:"/vendor/list",children:"Cancel"})]})})]})})})})]})}},63:function(e,a,t){},74:function(e,a,t){"use strict";t.d(a,"f",(function(){return l})),t.d(a,"c",(function(){return u})),t.d(a,"d",(function(){return p})),t.d(a,"b",(function(){return b})),t.d(a,"e",(function(){return m})),t.d(a,"a",(function(){return f}));var r=t(59),n=t.n(r),s=t(60),c=t(61),o=t.n(c),d=t(58),i=t(1),l=function(e){return function(){var a=Object(s.a)(n.a.mark((function a(t){var r,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:i.Db}),a.next=4,o.a.post("/vendor/create",e,d.a);case 4:r=a.sent,s=r.data,t({type:i.Fb,payload:s}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t({type:i.Cb,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},u=function(e){return function(){var a=Object(s.a)(n.a.mark((function a(t){var r,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:i.rb}),a.next=4,o.a.get("/vendor/findById/".concat(e),d.a);case 4:r=a.sent,s=r.data,t({type:i.tb,payload:s}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t({type:i.qb,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},p=function(e){return function(){var a=Object(s.a)(n.a.mark((function a(t){var r,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:i.vb}),a.next=4,o.a.post("/vendor/findAll?"+e,d.a);case 4:r=a.sent,s=r.data,t({type:i.xb,payload:s}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t({type:i.ub,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},b=function(e){return function(){var a=Object(s.a)(n.a.mark((function a(t){var r,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:i.jb}),a.next=4,o.a.delete("/vendor/deletevendor/".concat(e),d.a);case 4:r=a.sent,s=r.data,t({type:i.lb,payload:s}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t({type:i.ib,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},m=function(e){return function(){var a=Object(s.a)(n.a.mark((function a(t){var r,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:i.zb}),a.next=4,o.a.post("/vendor/deletemultiple/",e);case 4:r=a.sent,s=r.data,t({type:i.Bb,payload:s}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t({type:i.yb,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},f=function(e,a){return function(){var t=Object(s.a)(n.a.mark((function t(r){var s,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:i.nb}),t.next=4,o.a.put("/vendor/updatevendor/".concat(e),a,{configHeader:d.a});case 4:s=t.sent,c=s.data,r({type:i.pb,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:i.mb,payload:t.t0.response&&t.t0.response.data.errors?t.t0.response.data.errors:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=35.2db8d9b1.chunk.js.map