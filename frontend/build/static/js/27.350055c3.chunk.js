(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[27],{512:function(e,a,t){"use strict";t.r(a);var r=t(0),n=(t(62),t(18)),s=t(65),c=t(67),d=t(55),i=t(488),o=t(505),l=t(104),p=t(495),u=t(71),b=t(68),j=t(72),m=t(76),x=t(77),h=t(473),f=t(124),O=t(483),y=t(80),v=t(81),g=t(63),w=t(474),k=t(530),N=t(54),_=t(4);a.default=function(){var e=Object(c.i)().id,a=Object(n.b)();Object(r.useEffect)((function(){a(Object(s.d)(e))}),[]);var t=Object(n.c)((function(e){return e.userRecords})).getUsersRecords;return Object(_.jsxs)(r.Fragment,{children:[Object(_.jsx)("h3",{children:"View Chairman"}),t&&Object(_.jsx)(u.a,{children:Object(_.jsx)(b.a,{children:Object(_.jsx)(j.a,{children:Object(_.jsxs)(m.a,{children:[Object(_.jsxs)(x.a,{sm:"12",children:[Object(_.jsx)(h.a,{for:"image",children:"Profile Image"}),Object(_.jsx)(f.a,{className:"mb-2",children:Object(_.jsx)("div",{className:"d-flex flex-wrap mt-1 px-0",children:Object(_.jsx)("img",{className:"user-avatar rounded mr-2 my-25 cursor-pointer",src:t.data.profile_image,height:"90",width:"90"})})})]}),Object(_.jsx)(x.a,{md:"6",sm:"12",children:Object(_.jsxs)(O.a,{className:"mb-2",children:[Object(_.jsx)(h.a,{for:"name",children:"Name"}),Object(_.jsxs)(y.a,{className:"input-group-merge disabled",children:[Object(_.jsx)(v.a,{addonType:"prepend",children:Object(_.jsx)(g.a,{children:Object(_.jsx)(i.a,{size:15})})}),Object(_.jsx)(w.a,{type:"text",id:"name",name:"name",placeholder:"Name",disabled:!0,defaultValue:t.data.name})]})]})}),Object(_.jsx)(x.a,{md:"6",sm:"12",children:Object(_.jsxs)(O.a,{className:"mb-2",children:[Object(_.jsx)(h.a,{for:"email",children:"Email"}),Object(_.jsxs)(y.a,{className:"input-group-merge disabled",children:[Object(_.jsx)(v.a,{addonType:"prepend",children:Object(_.jsx)(g.a,{children:Object(_.jsx)(o.a,{size:15})})}),Object(_.jsx)(w.a,{type:"text",id:"email",name:"email",placeholder:"Email",disabled:!0,defaultValue:t.data.email})]})]})}),Object(_.jsx)(x.a,{md:"6",sm:"12",children:Object(_.jsxs)(O.a,{className:"mb-2",children:[Object(_.jsx)(h.a,{for:"mobile_no",children:"Mobile No"}),Object(_.jsxs)(y.a,{className:"input-group-merge disabled",children:[Object(_.jsx)(v.a,{addonType:"prepend",children:Object(_.jsx)(g.a,{children:Object(_.jsx)(l.a,{size:15})})}),Object(_.jsx)(w.a,{type:"text",id:"mobile_no",name:"mobile_no",placeholder:"Mobile No",disabled:!0,defaultValue:t.data.mobile_no})]})]})}),Object(_.jsx)(x.a,{md:"6",sm:"12",children:Object(_.jsxs)(O.a,{className:"mb-2",children:[Object(_.jsx)(h.a,{for:"address",children:"Address"}),Object(_.jsxs)(y.a,{className:"input-group-merge disabled",children:[Object(_.jsx)(v.a,{addonType:"prepend",children:Object(_.jsx)(g.a,{children:Object(_.jsx)(p.a,{size:15})})}),Object(_.jsx)(w.a,{type:"text",rows:"2",Col:"5",name:"address",id:"address",placeholder:"Address",disabled:!0,defaultValue:t.data.address})]})]})}),Object(_.jsx)(x.a,{md:"6",sm:"12",children:Object(_.jsxs)(O.a,{className:"mb-2",children:[Object(_.jsx)(h.a,{for:"gender",children:"Gender"}),Object(_.jsx)("br",{}),Object(_.jsx)(k.a,{type:"radio",id:"gender1",name:"gender",inline:!0,label:"Male",disabled:!0,defaultChecked:"male"===t.data.gender}),Object(_.jsx)(k.a,{type:"radio",id:"gender2",name:"gender",inline:!0,label:"Female",disabled:!0,defaultChecked:"female"===t.data.gender})]})}),Object(_.jsx)(x.a,{sm:"12",children:Object(_.jsx)(N.a.Ripple,{color:"secondary",tag:d.b,to:"/chairman/list",outline:!0,children:"Cancel"})})]})})})})]})}},62:function(e,a,t){},65:function(e,a,t){"use strict";t.d(a,"f",(function(){return l})),t.d(a,"a",(function(){return p})),t.d(a,"c",(function(){return u})),t.d(a,"b",(function(){return b})),t.d(a,"e",(function(){return j})),t.d(a,"d",(function(){return m}));var r=t(59),n=t.n(r),s=t(60),c=t(61),d=t.n(c),i=t(58),o=t(1),l=function(e){return function(){var a=Object(s.a)(n.a.mark((function a(t){var r,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:o.rb}),a.next=4,d.a.post("/api/user_register/",e,i.a);case 4:r=a.sent,s=r.data,t({type:o.tb,payload:s}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t({type:o.qb,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},p=function(e,a){return function(){var t=Object(s.a)(n.a.mark((function t(r){var s,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:o.fb}),t.next=4,d.a.put("/api/update/".concat(e),a,{configHeader:i.a});case 4:s=t.sent,c=s.data,r({type:o.hb,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:o.eb,payload:t.t0.response&&t.t0.response.data.errors?t.t0.response.data.errors:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var a=Object(s.a)(n.a.mark((function a(t){var r,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:o.bb}),a.next=4,d.a.delete("/api/delete/".concat(e),i.a);case 4:r=a.sent,s=r.data,t({type:o.db,payload:s}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t({type:o.ab,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},b=function(e){return function(){var a=Object(s.a)(n.a.mark((function a(t){var r,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:o.P}),a.next=4,d.a.post("/api/delete_many/",e,i.a);case 4:r=a.sent,s=r.data,t({type:o.R,payload:s}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t({type:o.O,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},j=function(e){return function(){var a=Object(s.a)(n.a.mark((function a(t){var r,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:o.nb}),a.next=4,d.a.get("/api/get_all_user?"+e,i.a);case 4:r=a.sent,s=r.data,t({type:o.pb,payload:s}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t({type:o.mb,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},m=function(e){return function(){var a=Object(s.a)(n.a.mark((function a(t){var r,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t({type:o.jb}),a.next=4,d.a.get("/api/get_data/".concat(e),i.a);case 4:r=a.sent,s=r.data,t({type:o.lb,payload:s}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),t({type:o.ib,payload:a.t0.response&&a.t0.response.data.errors?a.t0.response.data.errors:a.t0.message});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=27.350055c3.chunk.js.map