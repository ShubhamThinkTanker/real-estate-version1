(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[40],{531:function(e,t,n){"use strict";n.r(t);var a=n(23),c=n(3),r=n(9),o=n(0),i=(n(71),n(18)),s=n(499),l=n(95),d=n.n(l),u=n(86),b=n.n(u),j=(n(84),n(75)),m=n(76),O=n(468),f=n(469),p=n(54),x=n(77),h=(n(85),n(96),n(55)),g=n(62),v=n(87),_=n(97),w=n(98),C=n(4),y=["onClick"],N=function(e){return Object(C.jsx)("div",{className:"invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75",children:Object(C.jsxs)(j.a,{children:[Object(C.jsx)(m.a,{xl:"6",className:"d-flex align-items-center p-0"}),Object(C.jsxs)(m.a,{xl:"6",className:"d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1",children:[Object(C.jsxs)("div",{className:"d-flex align-items-center mb-sm-0 mb-1 mr-1 search-chairman-btn",children:[Object(C.jsx)(O.a,{className:"mb-0",for:"search-invoice",children:"Search:"}),Object(C.jsx)(f.a,{id:"search-invoice",className:"ml-50 w-100",type:"text",value:e.value,onChange:function(t){t.preventDefault(),e.handleFilter(t)},placeholder:"Search"})]}),Object(C.jsx)("div",{children:Object(C.jsx)(p.a.Ripple,{color:"primary",tag:h.b,to:"/announcement/add",children:"Create Announcement"})})]})]})})},S=function(e){var t=e.columns,n=Object(i.b)(),l=Object(i.c)((function(e){return e.getAllChairman})),u=l.loading,j=(l.error,l.getAllChairmanData),m=Object(o.useState)([]),O=Object(r.a)(m,2),f=O[0],h=O[1],S=Object(o.useState)(_.a),R=Object(r.a)(S,2),k=R[0],D=R[1],P=Object(o.useState)("desc"),A=Object(r.a)(P,2),H=A[0],z=A[1];Object(w.b)(h);var I=Object(o.useState)(""),E=Object(r.a)(I,2),F=E[0],T=E[1],J={page:1,limit:k,filter_value:F,sort_order:H,order_column:"updated_at"},U=Object(o.useState)("page=".concat(J.page,"&limit=").concat(J.per_page,"&filter_value=").concat(J.filter_value,"&sort_order=").concat(J.sort_order,"&order_column=").concat(J.order_column)),L=Object(r.a)(U,2),M=L[0],Y=L[1];Object(o.useEffect)((function(){n(Object(v.a)(M))}),[n,M]);var q=function(e){var t=Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&");Y(t)};Object(o.useEffect)((function(){n(Object(v.a)())}),[]);var B=Object(o.forwardRef)((function(e,t){var n=e.onClick,r=Object(a.a)(e,y);return Object(C.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(C.jsx)("input",Object(c.a)({type:"checkbox",className:"custom-control-input",ref:t},r)),Object(C.jsx)("label",{className:"custom-control-label",onClick:n})]})}));return Object(C.jsx)(o.Fragment,{children:Object(C.jsx)(x.a,{children:Object(C.jsxs)("div",{className:"app-user-list list",children:[Object(C.jsx)("div",{className:"btn-delete",children:0!=f.length?Object(C.jsx)(p.a.Ripple,{color:"danger",onClick:function(e){0!=f.length?b()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this data!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){if(e){var t={id:f.map((function(e){return e._id}))};n(Object(g.b)(t))}else b()("Your data  is safe!")})):b()("Please Select One Data")},children:"Delete"}):null}),Object(C.jsx)(d.a,{noHeader:!0,pagination:!0,selectableRows:!0,onSelectedRowsChange:function(e){return t=e.selectedRows,void h(t);var t},columns:t,data:null===j||void 0===j?void 0:j.data.Chairman_Details,paginationServer:!0,paginationRowsPerPageOptions:_.b,paginationPerPage:J.limit,paginationTotalRows:null===j||void 0===j?void 0:j.data.TotalCount,sortIcon:Object(C.jsx)(s.a,{size:5}),selectableRowsComponent:B,onChangeRowsPerPage:function(e,t){D(e),q(Object(c.a)(Object(c.a)({},J),{},{page:t,limit:e}))},onChangePage:function(e){q(Object(c.a)(Object(c.a)({},J),{},{page:e}))},onSort:function(e,t){z(t),q(Object(c.a)(Object(c.a)({},J),{},{sort_order:t,order_column:e.selector}))},fixedHeader:!0,fixedHeaderScrollHeight:"400px",sortServer:!0,striped:!0,progressPending:u,subHeaderComponent:Object(C.jsx)(N,{value:F,handleFilter:function(e){var t=e.target.value;q(Object(c.a)(Object(c.a)({},J),{},{filter_value:t})),T(t)}}),subHeader:!0})]})})})},R=(n(99),n(100),n(479)),k=n(500),D=n(246),P=n(247),A=n(492);n(74),t.default=function(){var e=[{id:"image",name:"Image",selector:function(e){return e.image},sortable:!1},{id:"title",name:"Title",selector:function(e){return e.title},sortable:!0},{id:" society",name:" Society Name",selector:function(e){return e.society},sortable:!0},{id:"description",name:"Description",selector:function(e){return e.description},sortable:!0},{id:" from_date",name:"Starting Date",selector:function(e){return e.from_date},sortable:!0},{id:"to_date",name:"Ending Date",selector:function(e){return e.to_date},sortable:!0},{name:"Actions",cell:function(e){return Object(C.jsx)("div",{className:"d-flex ",children:Object(C.jsxs)(R.a,{children:[Object(C.jsx)(h.b,{to:"/announcement/view/".concat(e._id),style:{color:"black"},children:Object(C.jsx)(k.a,{size:18})}),Object(C.jsx)(h.b,{to:"/announcement/edit/".concat(e._id),children:Object(C.jsx)(D.a,{size:18,className:"edit-btn"})}),Object(C.jsx)(P.a,{size:18,className:"delete-btn",style:{cursor:"pointer"},onClick:function(){return OneDeleteRecord(e._id)}})]})})}}];return Object(C.jsxs)("div",{className:"app-user-list",children:[Object(C.jsxs)("h3",{children:[Object(C.jsx)(A.a,{style:{marginRight:"20px"}}),"Announcement List"]}),Object(C.jsx)(S,{columns:e})]})}}}]);
//# sourceMappingURL=40.f43a31dd.chunk.js.map