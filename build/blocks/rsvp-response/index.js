(()=>{"use strict";var e,t={5527:(e,t,s)=>{const n=window.wp.blocks,a=window.React,r=window.wp.blockEditor,i=window.wp.components,l=window.wp.element,o=window.wp.i18n,p=window.wp.data,c=(e,t="")=>{for(const[s,n]of Object.entries(e)){let e=s;t&&(e+="_"+String(t)),addEventListener(e,(e=>{n(e.detail)}),!1)}};function u(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}const v=({item:e,activeItem:t=!1,count:s,onTitleClick:n,defaultLimit:r})=>{const{title:i,value:o}=e,p=!(0===s&&"attending"!==o),c=t?"span":"a",v=u("eventDetails.postId"),d=s>r;return(0,l.useEffect)((()=>{t&&((e,t="")=>{for(const[s,n]of Object.entries(e)){let e=s;t&&(e+="_"+String(t));const a=new CustomEvent(e,{detail:n});dispatchEvent(a)}})({setRsvpSeeAllLink:d},v)})),p?(0,a.createElement)("div",{className:"gp-rsvp-response__navigation-item"},(0,a.createElement)(c,{className:"gp-rsvp-response__anchor","data-item":o,"data-toggle":"tab",href:"#",role:"tab","aria-controls":`#gp-rsvp-${o}`,onClick:e=>n(e,o)},i),(0,a.createElement)("span",{className:"gp-rsvp-response__count"},"(",s,")")):""},d=({items:e,activeValue:t,onTitleClick:n,defaultLimit:r})=>{var i;const o={all:0,attending:0,not_attending:0,waiting_list:0},p=null!==(i=u("eventDetails.responses"))&&void 0!==i?i:{};for(const[e,t]of Object.entries(p))o[e]=t.count;const[d,m]=(0,l.useState)(o),[g,h]=(0,l.useState)(!1),[_,f]=(0,l.useState)(!0),E=_?"span":"a";c({setRsvpCount:m},u("eventDetails.postId"));let b=0;const w=e.map(((e,s)=>{const i=e.value===t;return i&&(b=s),(0,a.createElement)(v,{key:s,item:e,count:d[e.value],activeItem:i,onTitleClick:n,defaultLimit:r})}));return(0,l.useEffect)((()=>{s.g.document.addEventListener("click",(({target:e})=>{e.closest(".gp-rsvp-response__navigation-active")||h(!1)})),s.g.document.addEventListener("keydown",(({key:e})=>{"Escape"===e&&h(!1)}))})),(0,l.useEffect)((()=>{0===d.not_attending&&0===d.waiting_list?f(!0):f(!1)}),[d]),(0,a.createElement)("div",{className:"gp-rsvp-response__navigation-wrapper"},(0,a.createElement)("div",null,(0,a.createElement)(E,{href:"#",className:"gp-rsvp-response__navigation-active",onClick:e=>(e=>{e.preventDefault(),h(!g)})(e)},e[b].title)," ",(0,a.createElement)("span",null,"(",d[t],")")),!_&&g&&(0,a.createElement)("nav",{className:"gp-rsvp-response__navigation"},w))},m=({items:e,activeValue:t,onTitleClick:s,rsvpLimit:n,setRsvpLimit:r,defaultLimit:i})=>{let p;p=!1===n?(0,o.__)("See fewer","gatherpress"):(0,o.__)("See all","gatherpress");let v=!1;const m=u("eventDetails.responses");var g;m&&m[t]&&(v=null!==(g=u("eventDetails.responses")[t].count)&&void 0!==g?g:0>i);const[h,_]=(0,l.useState)(v);return c({setRsvpSeeAllLink:_},u("eventDetails.postId")),(0,a.createElement)("div",{className:"gp-rsvp-response__header"},(0,a.createElement)("div",{className:"dashicons dashicons-groups"}),(0,a.createElement)(d,{items:e,activeValue:t,onTitleClick:s,defaultLimit:i}),h&&(0,a.createElement)("div",{className:"gp-rsvp-response__see-all"},(0,a.createElement)("a",{href:"#",onClick:e=>(e=>{e.preventDefault(),r(!1===n&&i)})(e)},p)))},g=({value:e,limit:t,responses:s=[]})=>{let n="";return"object"==typeof s&&void 0!==s[e]&&(s=[...s[e].responses],t&&(s=s.splice(0,t)),n=s.map(((e,t)=>{const{profile:s,name:n,photo:r,role:i}=e,{guests:l}=e;return(0,a.createElement)("div",{key:t,className:"gp-rsvp-response__item"},(0,a.createElement)("figure",{className:"gp-rsvp-response__member-avatar"},""!==s?(0,a.createElement)("a",{href:s},(0,a.createElement)("img",{alt:n,title:n,src:r})):(0,a.createElement)("img",{alt:n,title:n,src:r})),(0,a.createElement)("div",{className:"gp-rsvp-response__member-info"},(0,a.createElement)("div",{className:"gp-rsvp-response__member-name"},""!==s?(0,a.createElement)("a",{href:s,title:n},n):(0,a.createElement)("span",null,n)),(0,a.createElement)("div",{className:"gp-rsvp-response__member-role"},i),0!==l&&(0,a.createElement)("small",{className:"gp-rsvp-response__guests"},(0,o.sprintf)(/* translators: %d: Number of guests. */ /* translators: %d: Number of guests. */
(0,o._n)("+%d guest","+%d guests",l,"gatherpress"),l))))}))),(0,a.createElement)(a.Fragment,null,"attending"===e&&0===n.length&&(0,a.createElement)("div",{className:"gp-rsvp-response__no-responses"},!1===u("eventDetails.hasEventPast")?(0,o.__)("No one is attending this event yet.","gatherpress"):(0,o.__)("No one went to this event.","gatherpress")),n)},h=({items:e,activeValue:t,limit:s=!1})=>{const n=u("eventDetails.postId"),[r,i]=(0,l.useState)(u("eventDetails.responses"));c({setRsvpResponse:i},n);const o=e.map(((e,n)=>{const{value:i}=e;return i===t?(0,a.createElement)("div",{key:n,className:"gp-rsvp-response__items",id:`gp-rsvp-${i}`,role:"tabpanel","aria-labelledby":`gp-rsvp-${i}-tab`},(0,a.createElement)(g,{value:i,limit:s,responses:r})):""}));return(0,a.createElement)("div",{className:"gp-rsvp-response__content"},o)},_=({defaultStatus:e="attending"})=>{const t=u("eventDetails.hasEventPast"),s=[{title:!1===t?(0,o._x)("Attending","Responded Status","gatherpress"):(0,o._x)("Went","Responded Status","gatherpress"),value:"attending"},{title:!1===t?(0,o._x)("Waiting List","Responded Status","gatherpress"):(0,o._x)("Wait Listed","Responded Status","gatherpress"),value:"waiting_list"},{title:!1===t?(0,o._x)("Not Attending","Responded Status","gatherpress"):(0,o._x)("Didn't Go","Responded Status","gatherpress"),value:"not_attending"}],[n,r]=(0,l.useState)(e),[i,p]=(0,l.useState)(8);return c({setRsvpStatus:r},u("eventDetails.postId")),s.some((e=>e.value===n))||r(e),(0,a.createElement)("div",{className:"gp-rsvp-response"},(0,a.createElement)(m,{items:s,activeValue:n,onTitleClick:(e,t)=>{e.preventDefault(),r(t)},rsvpLimit:i,setRsvpLimit:p,defaultLimit:8}),(0,a.createElement)(h,{items:s,activeValue:n,limit:i}))},f=window.wp.apiFetch;var E=s.n(f);const b=window.wp.coreData,w=({defaultStatus:e,setDefaultStatus:t})=>{var s;const n=u("eventDetails.responses"),r=u("eventDetails.postId"),[c,v]=(0,l.useState)(n),d=c[e].responses,{userList:m}=(0,p.useSelect)((e=>{const{getEntityRecords:t}=e(b.store);return{userList:t("root","user",{per_page:-1})}}),[]),g=null!==(s=m?.reduce(((e,t)=>({...e,[t.username]:t})),{}))&&void 0!==s?s:{},h=(e,t="attending")=>{E()({path:u("urls.eventRestApi")+"/rsvp",method:"POST",data:{post_id:r,status:t,user_id:e,_wpnonce:u("misc.nonce")}}).then((e=>{v(e.responses),function(e,t){if("object"!=typeof GatherPress)return;const s="eventDetails.responses".split("."),n=s.pop();s.reduce(((e,t)=>{var s;return null!==(s=e[t])&&void 0!==s?s:e[t]={}}),GatherPress)[n]=t}(0,e.responses)}))};return(0,a.createElement)("div",{className:"gp-rsvp-response"},(0,a.createElement)(i.SelectControl,{label:(0,o.__)("Status","gatherpress"),value:e,options:[{label:(0,o._x)("Attending","List Status","gatherpress"),value:"attending"},{label:(0,o._x)("Waiting List","List Status","gatherpress"),value:"waiting_list"},{label:(0,o._x)("Not Attending","List Status","gatherpress"),value:"not_attending"}],onChange:e=>t(e)}),(0,a.createElement)(i.FormTokenField,{key:"query-controls-topics-select",label:(0,o.__)("Members","gatherpress"),value:d&&d.map((e=>({id:e.id,value:e.name}))),tokenizeOnSpace:!0,onChange:async t=>{t.length>d.length?t.forEach((t=>{g[t]&&h(g[t].id,e)})):d.forEach((e=>{!1===t.some((t=>t.id===e.id))&&h(e.id,"no_status")}))},suggestions:Object.keys(g),maxSuggestions:20}))},S=e=>{const{isSelected:t}=e,s=t?"none":"block";return(0,a.createElement)("div",{style:{position:"relative"}},e.children,(0,a.createElement)("div",{style:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:s}}))},k=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/rsvp-response","version":"1.0.0","title":"RSVP Response","category":"gatherpress","icon":"groups","example":{},"description":"Displays a list of members who have confirmed their attendance for an event.","attributes":{"blockId":{"type":"string"},"content":{"type":"string"},"color":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./rsvp-response.js","render":"file:./render.php"}');(0,n.registerBlockType)(k,{edit:()=>{const e=(0,p.select)("core").canUser("create","posts"),t=(0,r.useBlockProps)(),[s,n]=(0,l.useState)(!1),[c,u]=(0,l.useState)("attending");return(0,a.createElement)("div",{...t},s&&(0,a.createElement)(w,{defaultStatus:c,setDefaultStatus:u}),!s&&(0,a.createElement)(S,null,(0,a.createElement)(_,{defaultStatus:c})),e&&(0,a.createElement)(r.BlockControls,null,(0,a.createElement)(i.ToolbarGroup,null,(0,a.createElement)(i.ToolbarButton,{label:(0,o.__)("Edit","gatherpress"),text:s?(0,o.__)("Preview","gatherpress"):(0,o.__)("Edit","gatherpress"),onClick:e=>{e.preventDefault(),n(!s)}}))))},save:()=>null})}},s={};function n(e){var a=s[e];if(void 0!==a)return a.exports;var r=s[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,s,a,r)=>{if(!s){var i=1/0;for(c=0;c<e.length;c++){for(var[s,a,r]=e[c],l=!0,o=0;o<s.length;o++)(!1&r||i>=r)&&Object.keys(n.O).every((e=>n.O[e](s[o])))?s.splice(o--,1):(l=!1,r<i&&(i=r));if(l){e.splice(c--,1);var p=a();void 0!==p&&(t=p)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[s,a,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={788:0,556:0};n.O.j=t=>0===e[t];var t=(t,s)=>{var a,r,[i,l,o]=s,p=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(o)var c=o(n)}for(t&&t(s);p<i.length;p++)r=i[p],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},s=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var a=n.O(void 0,[556],(()=>n(5527)));a=n.O(a)})();