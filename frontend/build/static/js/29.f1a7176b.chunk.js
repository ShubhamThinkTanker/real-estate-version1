(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[29],{516:function(e,a,t){"use strict";t.r(a);var r=t(0),s=(t(63),t(18)),n=t(66),c=t(55),l=t(77),d=t(73),o=t(70),i=t(75),u=t(76),j=t(468),p=t(469),b=t(54),m=t(81),f=t(4);a.default=function(){var e=Object(n.i)().id,a=Object(s.b)();Object(r.useEffect)((function(){a(Object(m.b)(e))}),[]);var t=Object(s.c)((function(e){return e.getidComplexRecord})).getComplexRecord;return Object(f.jsxs)(r.Fragment,{children:[Object(f.jsx)("h3",{children:"View Complex"}),t&&Object(f.jsx)(l.a,{children:Object(f.jsx)(d.a,{children:Object(f.jsx)(o.a,{children:Object(f.jsxs)(i.a,{children:[Object(f.jsxs)(u.a,{md:"6",sm:"12",className:"mb-1",children:[Object(f.jsx)(j.a,{className:"form-label",for:"name",children:"Realestate Name"}),Object(f.jsx)(p.a,{type:"text",name:"realestate_name",id:"realestate_name",placeholder:"Realestate Name",disabled:!0,defaultValue:t.data.realestate_name})]}),Object(f.jsxs)(u.a,{md:"6",sm:"12",className:"mb-1",children:[Object(f.jsx)(j.a,{className:"form-label",for:"lastname",children:"Address"}),Object(f.jsx)(p.a,{type:"textarea",name:"address",id:"address",rows:"1",placeholder:"Address",disabled:!0,defaultValue:t.data.address})]}),Object(f.jsxs)(u.a,{md:"6",sm:"12",className:"mb-1",children:[Object(f.jsx)(j.a,{className:"form-label",for:"mobileno",children:"Country"}),Object(f.jsxs)(p.a,{type:"select",name:"country",disabled:!0,defaultValue:t.data.country,children:[Object(f.jsx)("option",{value:"",children:"Select Country"}),Object(f.jsx)("option",{value:"india",children:"India"})]})]}),Object(f.jsxs)(u.a,{md:"6",sm:"12",className:"mb-1",children:[Object(f.jsx)(j.a,{className:"form-label",for:"profession",children:"State"}),Object(f.jsxs)(p.a,{type:"select",name:"state",disabled:!0,defaultValue:t.data.state,children:[Object(f.jsx)("option",{value:"",children:"Select State"}),Object(f.jsx)("option",{value:"gujarat",children:"Gujarat"})]})]}),Object(f.jsxs)(u.a,{md:"6",sm:"12",className:"mb-1",children:[Object(f.jsx)(j.a,{className:"form-label",for:"service",children:"City"}),Object(f.jsxs)(p.a,{type:"select",name:"city",disabled:!0,defaultValue:t.data.city,children:[Object(f.jsx)("option",{value:"",children:"Select City"}),Object(f.jsx)("option",{value:"ahmedabad",children:"Ahmedabad"}),Object(f.jsx)("option",{value:"surat",children:"Surat"}),Object(f.jsx)("option",{value:"rajkot",children:"Rajkot"})]})]}),Object(f.jsx)(u.a,{sm:"12",children:Object(f.jsx)(b.a.Ripple,{color:"secondary",tag:c.b,to:"/complex/list",outline:!0,children:"Cancel"})})]})})})})]})}},63:function(e,a,t){},81:function(e,a,t){"use strict";t.d(a,"c",(function(){return i})),t.d(a,"b",(function(){return u})),t.d(a,"a",(function(){return j}));var r=t(59),s=t.n(r),n=t(60),c=t(61),l=t.n(c),d=t(58),o=t(1),i=function(e){return function(){var a=Object(n.a)(s.a.mark((function a(t){var r,n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:o.r}),a.next=4,l.a.get("/realestate/find?"+e,d.a);case 4:r=a.sent,n=r.data,t({type:o.t,payload:n}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t({type:o.q,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},u=function(e){return function(){var a=Object(n.a)(s.a.mark((function a(t){var r,n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:o.n}),a.next=4,l.a.get("/realestate/findid/".concat(e),d.a);case 4:r=a.sent,n=r.data,t({type:o.p,payload:n}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t({type:o.m,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},j=function(e){return function(){var a=Object(n.a)(s.a.mark((function a(t){var r,n;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:o.j}),a.next=4,l.a.post("/realestate/add",e,d.a);case 4:r=a.sent,n=r.data,t({type:o.l,payload:n}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t({type:o.i,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=29.f1a7176b.chunk.js.map