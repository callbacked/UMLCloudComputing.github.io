"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[634],{7785:(e,n,r)=>{var t=r(4994);n.A=void 0;var i=t(r(2032)),o=r(4848);n.A=(0,i.default)((0,o.jsx)("path",{d:"m19 1-5 5v11l5-4.5zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6m22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5z"}),"AutoStories")},4269:(e,n,r)=>{var t=r(4994);n.A=void 0;var i=t(r(2032)),o=r(4848);n.A=(0,i.default)((0,o.jsx)("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"}),"School")},707:(e,n,r)=>{r.r(n),r.d(n,{default:()=>ue});var t=r(6540),i=r(4625),o=r(4586),a=r(5293),s=r(2007),l=r(7733),c=r(6132),u=r(7859),d=r(7512),p=r(8168),m=r(8587),h=r(4164),g=r(9069),f=r(7245),x=r(4111),v=r(9369),b=r(8610),w=r(3049),j=r(9599),A=r(1264);const S=(e,n,r)=>{const t=e.keys[0];if(Array.isArray(n))n.forEach(((n,t)=>{r(((n,r)=>{t<=e.keys.length-1&&(0===t?Object.assign(n,r):n[e.up(e.keys[t])]=r)}),n)}));else if(n&&"object"==typeof n){(Object.keys(n).length>e.keys.length?e.keys:(i=e.keys,o=Object.keys(n),i.filter((e=>o.includes(e))))).forEach((i=>{if(-1!==e.keys.indexOf(i)){const o=n[i];void 0!==o&&r(((n,r)=>{t===i?Object.assign(n,r):n[e.up(i)]=r}),o)}}))}else"number"!=typeof n&&"string"!=typeof n||r(((e,n)=>{Object.assign(e,n)}),n);var i,o};function k(e){return e?`Level${e}`:""}function y(e){return e.unstable_level>0&&e.container}function $(e){return function(n){return`var(--Grid-${n}Spacing${k(e.unstable_level)})`}}function G(e){return function(n){return 0===e.unstable_level?`var(--Grid-${n}Spacing)`:`var(--Grid-${n}Spacing${k(e.unstable_level-1)})`}}function _(e){return 0===e.unstable_level?"var(--Grid-columns)":`var(--Grid-columns${k(e.unstable_level-1)})`}const O=({theme:e,ownerState:n})=>{const r=$(n),t={};return S(e.breakpoints,n.gridSize,((e,i)=>{let o={};!0===i&&(o={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===i&&(o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof i&&(o={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${i} / ${_(n)}${y(n)?` + ${r("column")}`:""})`}),e(t,o)})),t},E=({theme:e,ownerState:n})=>{const r={};return S(e.breakpoints,n.gridOffset,((e,t)=>{let i={};"auto"===t&&(i={marginLeft:"auto"}),"number"==typeof t&&(i={marginLeft:0===t?"0px":`calc(100% * ${t} / ${_(n)})`}),e(r,i)})),r},M=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=y(n)?{[`--Grid-columns${k(n.unstable_level)}`]:_(n)}:{"--Grid-columns":12};return S(e.breakpoints,n.columns,((e,t)=>{e(r,{[`--Grid-columns${k(n.unstable_level)}`]:t})})),r},z=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=G(n),t=y(n)?{[`--Grid-rowSpacing${k(n.unstable_level)}`]:r("row")}:{};return S(e.breakpoints,n.rowSpacing,((r,i)=>{var o;r(t,{[`--Grid-rowSpacing${k(n.unstable_level)}`]:"string"==typeof i?i:null==(o=e.spacing)?void 0:o.call(e,i)})})),t},C=({theme:e,ownerState:n})=>{if(!n.container)return{};const r=G(n),t=y(n)?{[`--Grid-columnSpacing${k(n.unstable_level)}`]:r("column")}:{};return S(e.breakpoints,n.columnSpacing,((r,i)=>{var o;r(t,{[`--Grid-columnSpacing${k(n.unstable_level)}`]:"string"==typeof i?i:null==(o=e.spacing)?void 0:o.call(e,i)})})),t},D=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={};return S(e.breakpoints,n.direction,((e,n)=>{e(r,{flexDirection:n})})),r},N=({ownerState:e})=>{const n=$(e),r=G(e);return(0,p.A)({minWidth:0,boxSizing:"border-box"},e.container&&(0,p.A)({display:"flex",flexWrap:"wrap"},e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},{margin:`calc(${n("row")} / -2) calc(${n("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${n("row")} * -1) 0px 0px calc(${n("column")} * -1)`}),(!e.container||y(e))&&(0,p.A)({padding:`calc(${r("row")} / 2) calc(${r("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${r("row")} 0px 0px ${r("column")}`}))},W=e=>{const n=[];return Object.entries(e).forEach((([e,r])=>{!1!==r&&void 0!==r&&n.push(`grid-${e}-${String(r)}`)})),n},F=(e,n="xs")=>{function r(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(r(e))return[`spacing-${n}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){const n=[];return Object.entries(e).forEach((([e,t])=>{r(t)&&n.push(`spacing-${e}-${String(t)}`)})),n}return[]},P=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map((([e,n])=>`direction-${e}-${n}`)):[`direction-xs-${String(e)}`];var I=r(4848);const q=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],L=(0,A.A)(),R=(0,v.A)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function U(e){return(0,b.A)({props:e,name:"MuiGrid",defaultTheme:L})}var V=r(1848),H=r(3541);const T=function(e={}){const{createStyledComponent:n=R,useThemeProps:r=U,componentName:i="MuiGrid"}=e,o=t.createContext(void 0),a=n(M,C,z,O,D,N,E),s=t.forwardRef((function(e,n){var s,l,c,u,d,v,b,A;const S=(0,w.A)(),k=r(e),y=(0,j.A)(k),$=t.useContext(o),{className:G,children:_,columns:O=12,container:E=!1,component:M="div",direction:z="row",wrap:C="wrap",spacing:D=0,rowSpacing:N=D,columnSpacing:L=D,disableEqualOverflow:R,unstable_level:U=0}=y,V=(0,m.A)(y,q);let H=R;U&&void 0!==R&&(H=e.disableEqualOverflow);const T={},B={},J={};Object.entries(V).forEach((([e,n])=>{void 0!==S.breakpoints.values[e]?T[e]=n:void 0!==S.breakpoints.values[e.replace("Offset","")]?B[e.replace("Offset","")]=n:J[e]=n}));const K=null!=(s=e.columns)?s:U?void 0:O,Q=null!=(l=e.spacing)?l:U?void 0:D,X=null!=(c=null!=(u=e.rowSpacing)?u:e.spacing)?c:U?void 0:N,Y=null!=(d=null!=(v=e.columnSpacing)?v:e.spacing)?d:U?void 0:L,Z=(0,p.A)({},y,{level:U,columns:K,container:E,direction:z,wrap:C,spacing:Q,rowSpacing:X,columnSpacing:Y,gridSize:T,gridOffset:B,disableEqualOverflow:null!=(b=null!=(A=H)?A:$)&&b,parentDisableEqualOverflow:$}),ee=((e,n)=>{const{container:r,direction:t,spacing:o,wrap:a,gridSize:s}=e,l={root:["root",r&&"container","wrap"!==a&&`wrap-xs-${String(a)}`,...P(t),...W(s),...r?F(o,n.breakpoints.keys[0]):[]]};return(0,x.A)(l,(e=>(0,f.Ay)(i,e)),{})})(Z,S);let ne=(0,I.jsx)(a,(0,p.A)({ref:n,as:M,ownerState:Z,className:(0,h.A)(ee.root,G)},J,{children:t.Children.map(_,(e=>{var n;return t.isValidElement(e)&&(0,g.A)(e,["Grid"])?t.cloneElement(e,{unstable_level:null!=(n=e.props.unstable_level)?n:U+1}):e}))}));return void 0!==H&&H!==(null!=$&&$)&&(ne=(0,I.jsx)(o.Provider,{value:H,children:ne})),ne}));return s.muiName="Grid",s}({createStyledComponent:(0,V.Ay)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>n.root}),componentName:"MuiGrid2",useThemeProps:e=>(0,H.A)({props:e,name:"MuiGrid2"})}),B=T;var J=r(7416),K=r(4269),Q=r(7785),X=r(467),Y=r(5697);function Z(e){return String(parseFloat(e)).length===String(e).length}function ee(e){return parseFloat(e)}function ne(e){return(n,r)=>{const t=String(n).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(t===r)return n;let i=ee(n);"px"!==t&&("em"===t||"rem"===t)&&(i=ee(n)*ee(e));let o=i;if("px"!==r)if("em"===r)o=i/ee(e);else{if("rem"!==r)return n;o=i/ee(e)}return parseFloat(o.toFixed(5))+r}}function re({lineHeight:e,pixels:n,htmlFontSize:r}){return n/(e*r)}var te=r(8379),ie=r(4765);let oe=(0,X.A)();function ae(){const{siteConfig:e}=(0,o.A)(),{colorMode:n}=(0,a.G)(),r="dark"===n,[p,m]=(0,t.useState)(0);return(0,t.useEffect)((()=>{const e=setInterval((()=>{m((e=>e+.6))}),30);return()=>clearInterval(e)}),[]),(0,I.jsx)(l.A,{component:"header",sx:{backgroundImage:r?`linear-gradient(${p}deg, #7b5caa, #CD7672)`:`linear-gradient(${p}deg, #9dcbfc, white)`,borderRadius:"16px",filter:r?"drop-shadow(0 0.4rem 0.3rem rgba(123, 123, 123, 0.5))":"drop-shadow(0 0.4rem 0.3rem rgba(0,0,0,0.5))",transition:"background-image 0.5s ease",backgroundSize:"cover",backgroundPosition:"center",color:"white",textAlign:"center",py:10},children:(0,I.jsxs)(c.A,{maxWidth:"md",children:[(0,I.jsxs)(ie.a,{theme:oe,children:[(0,I.jsx)(u.A,{variant:"h1",component:"h1",className:"animate__animated animate__fadeInDown",color:r?"white":"#707070",children:e.title}),(0,I.jsx)(u.A,{variant:"h5",component:"p",sx:{mt:2},className:"animate__animated animate__fadeInUp",color:r?"white":"#707070",children:e.tagline})]}),(0,I.jsxs)(s.A,{sx:{mt:4},direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[(0,I.jsx)(d.A,{variant:"contained",sx:{mt:4},color:"primary",component:i.N_,to:"docs/tutorials/welcome",startIcon:(0,I.jsx)(K.A,{}),children:"Explore Tutorials"}),(0,I.jsx)(d.A,{variant:"contained",sx:{mt:2,ml:2},color:"primary",component:i.N_,to:"docs/projects/welcome",endIcon:(0,I.jsx)(Q.A,{}),children:"View Projects"})]})]})})}oe=function(e,n={}){const{breakpoints:r=["sm","md","lg"],disableAlign:t=!1,factor:i=2,variants:o=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=n,a=(0,p.A)({},e);a.typography=(0,p.A)({},a.typography);const s=a.typography,l=ne(s.htmlFontSize),c=r.map((e=>a.breakpoints.values[e]));return o.forEach((e=>{const n=s[e];if(!n)return;const r=parseFloat(l(n.fontSize,"rem"));if(r<=1)return;const o=r,a=1+(o-1)/i;let{lineHeight:u}=n;if(!Z(u)&&!t)throw new Error((0,Y.A)(6));Z(u)||(u=parseFloat(l(u,"rem"))/parseFloat(r));let d=null;t||(d=e=>function({size:e,grid:n}){const r=e-e%n,t=r+n;return e-r<t-e?r:t}({size:e,grid:re({pixels:4,lineHeight:u,htmlFontSize:s.htmlFontSize})})),s[e]=(0,p.A)({},n,function({cssProperty:e,min:n,max:r,unit:t="rem",breakpoints:i=[600,900,1200],transform:o=null}){const a={[e]:`${n}${t}`},s=(r-n)/i[i.length-1];return i.forEach((r=>{let i=n+s*r;null!==o&&(i=o(i)),a[`@media (min-width:${r}px)`]={[e]:`${Math.round(1e4*i)/1e4}${t}`}})),a}({cssProperty:"fontSize",min:a,max:o,unit:"rem",breakpoints:c,transform:d}))})),a}(oe);const se=e=>{let{children:n,isDarkMode:r}=e;return(0,I.jsx)(J.A,{elevation:3,sx:{p:3,textAlign:"center",bgcolor:r?"grey.800":"background.paper",color:r?"white":"text.primary",height:"100%",borderRadius:"16px"},children:n})};function le(){const{colorMode:e}=(0,a.G)(),n="dark"===e;return(0,I.jsx)(c.A,{sx:{py:4},children:(0,I.jsxs)(B,{container:!0,spacing:4,children:[(0,I.jsx)(B,{item:!0,xs:12,sm:4,children:(0,I.jsxs)(se,{isDarkMode:n,children:[(0,I.jsx)(u.A,{variant:"h6",children:"About Us"}),(0,I.jsx)(u.A,{children:"We are a student-led organization dedicated to exploring cloud computing and its applications through hands-on learning, projects, and industry connections."})]})}),(0,I.jsx)(B,{item:!0,xs:12,sm:4,children:(0,I.jsxs)(se,{isDarkMode:n,children:[(0,I.jsx)(u.A,{variant:"h6",children:"Join Us"}),(0,I.jsx)(u.A,{children:"Open to all UMass Lowell students, faculty, and staff. Join us at our weekly meetings to learn, build, and connect."})]})}),(0,I.jsx)(B,{item:!0,xs:12,sm:4,children:(0,I.jsxs)(se,{isDarkMode:n,children:[(0,I.jsx)(u.A,{variant:"h6",children:"Our Projects"}),(0,I.jsx)(u.A,{children:"We work on various projects including UniPath.io, AWS Essentials, and Docker containerization. Contribute and gain practical experience."})]})})]})})}function ce(){const{colorMode:e}=(0,a.G)(),n="dark"===e;return(0,I.jsx)(c.A,{sx:{pb:4},children:(0,I.jsxs)(B,{container:!0,spacing:4,children:[(0,I.jsx)(B,{item:!0,xs:12,sm:4,children:(0,I.jsxs)(se,{isDarkMode:n,children:[(0,I.jsx)(u.A,{variant:"h6",children:"Hands-On Learning"}),(0,I.jsx)(u.A,{children:"Engage in hands-on learning experiences with cloud computing technologies like AWS, Docker, and more."})]})}),(0,I.jsx)(B,{item:!0,xs:12,sm:4,children:(0,I.jsxs)(se,{isDarkMode:n,children:[(0,I.jsx)(u.A,{variant:"h6",children:"Industry Connections"}),(0,I.jsx)(u.A,{children:"Connect with industry professionals through guest lectures, workshops, and networking events."})]})}),(0,I.jsx)(B,{item:!0,xs:12,sm:4,children:(0,I.jsxs)(se,{isDarkMode:n,children:[(0,I.jsx)(u.A,{variant:"h6",children:"Collaborative Projects"}),(0,I.jsx)(u.A,{children:"Work on real-world projects and collaborate with peers to develop practical cloud computing skills."})]})})]})})}function ue(){const{siteConfig:e}=(0,o.A)();return(0,I.jsxs)(te.A,{title:"Welcome",description:"Join the UMass Lowell Cloud Computing Club to explore the world of cloud computing.",children:[(0,I.jsx)(ae,{}),(0,I.jsxs)("main",{children:[(0,I.jsx)(le,{}),(0,I.jsx)(ce,{})]})]})}}}]);