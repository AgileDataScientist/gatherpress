(()=>{"use strict";var e,t={5358:()=>{const e=window.wp.blocks,t=window.React,r=window.wp.i18n,n=window.wp.blockEditor,a=window.wp.components,l=e=>{const{isSelected:r}=e,n=r?"none":"block";return(0,t.createElement)("div",{style:{position:"relative"}},e.children,(0,t.createElement)("div",{style:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:n}}))},o=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/add-to-calendar","version":"1.0.0","title":"Add to Calendar","category":"gatherpress","icon":"calendar","example":{},"description":"Allows a member to add an event to their preferred calendar.","attributes":{"blockId":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./add-to-calendar.js","render":"file:./render.php"}');(0,e.registerBlockType)(o,{edit:()=>{const e=(0,n.useBlockProps)();return(0,t.createElement)("div",{...e},(0,t.createElement)(l,null,(0,t.createElement)(a.Flex,{justify:"normal",align:"center",gap:"4"},(0,t.createElement)(a.FlexItem,{display:"flex",className:"gp-event-date__icon"},(0,t.createElement)(a.Icon,{icon:"calendar"})),(0,t.createElement)(a.FlexItem,null,(0,t.createElement)("a",{href:"#"},(0,r.__)("Add to calendar","gatherpress"))))))},save:()=>null})}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,r,a,l)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){for(var[r,a,l]=e[d],s=!0,i=0;i<r.length;i++)(!1&l||o>=l)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(s=!1,l<o&&(o=l));if(s){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[r,a,l]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={181:0,129:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,l,[o,s,i]=r,c=0;if(o.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(i)var d=i(n)}for(t&&t(r);c<o.length;c++)l=o[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(d)},r=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[129],(()=>n(5358)));a=n.O(a)})();