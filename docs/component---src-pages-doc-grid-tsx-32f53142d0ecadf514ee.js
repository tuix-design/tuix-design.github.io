"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[630],{4210:function(e,t,l){var a=l(7294);t.Z=e=>{let{title:t,data:l,id:r}=e;const n=["props","type","status","default","description"];return a.createElement("div",{id:r,className:"my-4 w-full overflow-x-auto"},a.createElement("p",{className:"my-2"},t||"API"),a.createElement("table",{className:"w-full text-gray-300 rounded-sm"},a.createElement("thead",null,a.createElement("tr",null,n.map(((e,t)=>a.createElement("th",{key:t,className:"capitalize font-normal text-left border border-gray-500 p-4"},e))))),a.createElement("tbody",null,null==l?void 0:l.map(((e,t)=>a.createElement("tr",{key:t},n.map(((t,l)=>a.createElement("td",{key:l,className:"text-sm border border-gray-500 hover:border-white p-4"},e[t])))))))))}},6341:function(e,t,l){l.d(t,{Z:function(){return c}});l(7207);var a=l(7294),r=l(4186),n=l(2527),m=l(8192);var i=e=>{let{left:t=!1,title:l}=e;return a.createElement(n.Link,{to:"/doc/"+l,className:"border w-full  flex flex-col "+(!t&&"text-right")+" main-radius px-2 py-1 cursor-pointer hover:text-purple hover:border-purple"},a.createElement("span",{className:"text-[1.1rem]"},l),a.createElement("span",{className:"text-[0.9rem]"},t?"prev":"next"))},o=l(4045);var c=e=>{let{children:t,title:l,next:c,prev:u,tag:d}=e;const{0:s,1:b}=(0,a.useState)(),g="undefined"!=typeof window;return a.createElement(r.Z,null,a.createElement("div",{className:"flex w-full py-5 lg:hidden"},a.createElement("select",{className:"bg-transparent outline-none border w-full p-2",onChange:e=>{(0,n.navigate)("/doc/"+e.target.value.toLowerCase())},defaultValue:g?window.location.pathname.replace(/\/doc\/|\//g,""):""},Object.values(m.tH).map((e=>e.map(((e,t)=>a.createElement("option",{key:t,className:"bg-black"},e))))))),a.createElement("div",{className:"w-full !h-[calc(100vh-100px)] flex mt-5"},a.createElement("div",{className:"w-[200px] overflow-y-auto p-1 md:hidden"},Object.keys(m.tH).map(((e,t)=>a.createElement("div",{key:t},a.createElement("p",{key:t,className:"my-3 capitalize text-gray-500"},e),m.tH[e].map(((e,t)=>a.createElement(n.Link,{key:t,activeClassName:"bg-gray-900 border-l-2 border-l-purple",to:"/doc/"+e.toLowerCase(),className:"px-3 py-2 block w-full hover:bg-gray-900 main-radius"},e))))))),a.createElement("div",{className:"w-full h-full overflow-y-auto overflow-x-hidden px-5 md:px-2"},a.createElement("div",null,a.createElement("span",{className:"text-[2rem] font-medium"},l)),a.createElement(o.kC,{gap:5},a.createElement(o.kC,{w:20,grow:!0},a.createElement("div",{className:"w-full p-3 md:p-0"},t,a.createElement(o.T,{h:50}),a.createElement(o.kC,{justify:"between"},a.createElement(o.kC,{w:10},a.createElement(a.Fragment,null,u&&a.createElement(i,{title:u,left:!0}))),a.createElement(o.kC,{w:10},a.createElement(a.Fragment,null,c&&a.createElement(i,{title:c})))),a.createElement(o.T,{h:50}))),a.createElement(a.Fragment,null,a.createElement("div",{className:"md:hidden flex flex-col w-fit sticky top-0 h-fit"},null==d?void 0:d.map(((e,t)=>a.createElement("span",{key:t,className:"cursor-pointer min-w-[150px] pl-3 py-1 "+(s===""+e.toLowerCase().replaceAll(" ","-")&&"text-purple")+" hover:underline",onClick:t=>{const l=e.toLowerCase().replaceAll(" ","-");var a;(b(l),t.preventDefault(),g)&&(null===(a=document.getElementById(l))||void 0===a||a.scrollIntoView({behavior:"smooth"}),window.history.pushState({},"",window.location.pathname+"#"+l))}},e)))))))))}},772:function(e,t,l){l.r(t),l.d(t,{default:function(){return c}});var a=l(6341),r=l(4210),n=l(7294),m=l(8192),i=l(4045);var o=e=>{let{id:t,title:l,description:a,children:r,code:m}=e;return n.createElement("div",{className:"py-4"},n.createElement("p",{id:t,className:""},l),a&&n.createElement("p",null,a),r&&n.createElement("div",{className:"py-2"},r),n.createElement(i.EK,{mode:"dark",language:"javascript"},""+m))};var c=()=>n.createElement(a.Z,{title:"grid",prev:"animation",next:"flex",tag:["basic","simple grid","templateColumns","templateRows","gap","grid item","grid area","grid api","grid item api"]},n.createElement(o,{id:"basic",title:"Basic usage",code:'import {Grid} from "tuix-design"'}),n.createElement(o,{id:"simple-grid",title:"Simple Grid",description:"Column props define de number of grid's column.",code:'<Grid column={3}>\n    <Box bg="blue" height={100} />\n    <Box bg="blue" height={100} />\n    <Box bg="blue" height={100} />\n    <Box bg="blue" height={100} />\n</Grid>'},n.createElement(i.rj,{column:3},n.createElement(i.xu,{bg:"blue",height:100}),n.createElement(i.xu,{bg:"blue",height:100}),n.createElement(i.xu,{bg:"blue",height:100}),n.createElement(i.xu,{bg:"blue",height:100}))),n.createElement(o,{id:"autorows",title:"Autorows set all grid's child height.",code:'<Grid column={3} autoRows={100}>\n    <Box bg="blue" />\n    <Box bg="blue" />\n    <Box bg="blue" />\n    <Box bg="blue" />\n</Grid>'},n.createElement(i.rj,{column:3,autoRows:100},n.createElement(i.xu,{bg:"blue"}),n.createElement(i.xu,{bg:"blue"}),n.createElement(i.xu,{bg:"blue"}),n.createElement(i.xu,{bg:"blue"}))),n.createElement(o,{id:"autocols",title:"AutoCols sets a size for the columns in a grid.It affects only columns with the size not set",code:'<Grid column={3} autoRows={100}>\n    <Box bg="blue" />\n    <Box bg="blue" />\n    <Box bg="blue" />\n    <Box bg="blue" />\n</Grid>'},n.createElement(i.rj,{autoCols:100,autoRows:100},n.createElement(i.xu,{bg:"blue"}),n.createElement(i.xu,{bg:"blue"}))),n.createElement(o,{id:"templatecolumns",title:"templateColumns",code:'<Grid templateColumns="20px 100px 200px" autoRows={100}>\n    <Box bg="blue" />\n    <Box bg="blue" />\n    <Box bg="blue" />\n</Grid>'},n.createElement(i.rj,{templateColumns:"20px 100px 200px",autoRows:100},n.createElement(i.xu,{bg:"blue"}),n.createElement(i.xu,{bg:"blue"}),n.createElement(i.xu,{bg:"blue"}))),n.createElement(o,{id:"templaterows",title:"templateRows",code:'<Grid templateRows="100px 50px 20px">\n    <Box bg="blue" />\n    <Box bg="blue" />\n    <Box bg="blue" />\n</Grid>'},n.createElement(i.rj,{templateRows:"100px 50px 20px"},n.createElement(i.xu,{bg:"blue"}),n.createElement(i.xu,{bg:"blue"}),n.createElement(i.xu,{bg:"blue"}))),n.createElement(o,{id:"gap",title:"gap",code:'<Grid column={3} autoRows={100} gap={20}>\n    <Box bg="blue" />\n    <Box bg="blue" />\n    <Box bg="blue" />\n</Grid>'},n.createElement(i.rj,{column:3,autoRows:100,gap:20},n.createElement(i.xu,{bg:"blue"}),n.createElement(i.xu,{bg:"blue"}),n.createElement(i.xu,{bg:"blue"}))),n.createElement(o,{id:"grid-item",title:"Grid Item",code:'<Grid templateColumns="auto auto auto">\n<GridItem col="1 / 3">\n            <Box bg="red" height={100} />\n    </GridItem>\n<GridItem>\n            <Box bg="blue" height={100} />\n</GridItem>\n    <GridItem>\n            <Box bg="blue" height={100} />\n    </GridItem>\n</Grid>'},n.createElement(i.rj,{templateColumns:"auto auto auto"},n.createElement(i.P4,{col:"1 / 3"},n.createElement(i.xu,{bg:"red",height:100})),n.createElement(i.P4,null,n.createElement(i.xu,{bg:"blue",height:100})),n.createElement(i.P4,null,n.createElement(i.xu,{bg:"blue",height:100})))),n.createElement(o,{id:"grid-area",title:"Grid Area",code:'<Grid templateAreas=\'"red blue" "green green"\'>\n<GridItem area="red">\n<Box bg="red" height={100} />\n</GridItem>\n<GridItem area="blue">\n<Box bg="blue" height={100} />\n</GridItem>\n<GridItem area="green">\n<Box bg="green" height={100} />\n</GridItem>\n</Grid>'},n.createElement(i.rj,{templateAreas:'"red blue" "green green"'},n.createElement(i.P4,{area:"red"},n.createElement(i.xu,{bg:"red",height:100})),n.createElement(i.P4,{area:"blue"},n.createElement(i.xu,{bg:"blue",height:100})),n.createElement(i.P4,{area:"green"},n.createElement(i.xu,{bg:"green",height:100})))),n.createElement(r.Z,{id:"grid-api",title:"Grid props",data:m.zF}),n.createElement(r.Z,{id:"grid-item-api",title:"Grid Item props",data:m.sk}))}}]);
//# sourceMappingURL=component---src-pages-doc-grid-tsx-32f53142d0ecadf514ee.js.map