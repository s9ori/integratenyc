(self.webpackChunkcoblocks=self.webpackChunkcoblocks||[]).push([[880],{3601:function(e,t,o){"use strict";const n=(0,o(2175).withColors)("backgroundColor",{textColor:"color"});t.Z=n},5880:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return T}});var n=o(7462),l=o(9307),c=o(4184),r=o.n(c),a=o(7361),i=o.n(a),s=o(7635),u=o(5161),d=o.n(u),m=o(1313),k=o(5736),p=o(5609),b=o(4333),g=o(9818),_=o(2175),v=o(3601),f=o(9035),h=o(3267),B=o(5377),E=e=>{const{clientId:t,attributes:o,setAttributes:n,getBlocksByClientId:c,updateBlockAttributes:r}=e,{columns:a,layout:i,verticalAlignment:s}=o;let u=1;return a&&(u=parseInt(a.toString().split("-"))),i?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(_.BlockControls,null,a&&u>1&&(0,l.createElement)(p.ToolbarGroup,{isCollapsed:!0,icon:(()=>{let e=1;return a&&(e=parseInt(a.toString().split("-"))),void 0===i?h.Z.layout:d()(f.sL[e],(e=>{let{key:t,smallIcon:o}=e;return t===i?o:""}))})(),label:(0,k.__)("Change row block layout","coblocks"),controls:d()(f.sL[u],(e=>{let{name:o,key:l,smallIcon:a}=e;return{title:o,key:l,icon:a,isActive:l===i,onClick:()=>{const e=l.toString().split("-"),o=c(t);n({layout:l}),void 0!==o[0].innerBlocks&&d()(o[0].innerBlocks,((t,o)=>r(t.clientId,{width:e[o]})))}}}))}),(0,l.createElement)(_.BlockVerticalAlignmentToolbar,{onChange:e=>{const o=c(t);n({verticalAlignment:e}),void 0!==o[0].innerBlocks&&d()(o[0].innerBlocks,(t=>r(t.clientId,{verticalAlignment:e})))},value:s}),i&&(0,B.H)(e))):null},y=o(3264);function w(){return(0,l.createElement)(p.PanelBody,{initialOpen:!1,title:(0,l.createElement)("span",{className:"coblocks-ellipsis-loading"},(0,k.__)("Loading Inspector","coblocks"))},(0,l.createElement)(p.Spinner,null))}function I(e){let{children:t}=e;return(0,l.createElement)(_.InspectorControls,null,(0,l.createElement)(l.Suspense,{fallback:(0,l.createElement)(w,null)},t))}var S=o(4981);const C=(0,l.lazy)((()=>o.e(203).then(o.bind(o,4203)))),x=(0,g.withDispatch)((e=>{const{updateBlockAttributes:t}=e("core/block-editor");return{updateBlockAttributes:t}})),A=(0,g.withSelect)(((e,t)=>{const{getBlocks:o,getBlocksByClientId:n}=e("core/block-editor"),{getBlockType:l,getBlockVariations:c,getDefaultBlockVariation:r}=e("core/blocks"),a=o(t.clientId),{replaceInnerBlocks:i}=(0,g.useDispatch)("core/block-editor");return{blockType:l(t.name),defaultVariation:void 0===r?null:r(t.name),getBlocksByClientId:n,hasInnerBlocks:e("core/block-editor").getBlocks(t.clientId).length>0,innerBlocks:a,replaceInnerBlocks:i,variations:void 0===c?null:c(t.name)}}));var T=(0,b.compose)(v.Z,A,x)((e=>{const{attributes:t,isSelected:o,setAttributes:c,className:a,variations:u,hasInnerBlocks:v,defaultVariation:w,replaceInnerBlocks:x,blockType:A,textColor:T,backgroundColor:N,clientId:L}=e,{columns:F,layout:Z,id:P,backgroundImg:R,coblocks:$,paddingSize:V,marginSize:O,marginUnit:U,marginTop:D,marginRight:G,marginBottom:z,marginLeft:M,paddingUnit:j,paddingTop:H,backgroundType:K,hasParallax:Q,focalPoint:X,paddingRight:q,paddingBottom:J,isStackedOnMobile:W,paddingLeft:Y,verticalAlignment:ee}=t,te=(0,b.usePrevious)(v),[oe,ne]=(0,l.useState)(!0),{__unstableMarkNextChangeAsNotPersistent:le}=(0,g.useDispatch)("core/block-editor");(0,l.useEffect)((()=>{te&&!v&&(le(),ne(!0),c({columns:null,layout:null}))}),[v,te]);const ce=e=>d()(e,(e=>{let[t,o,n=[]]=e;return(0,S.createBlock)(t,o,ce(n))})),re=()=>!!S.registerBlockVariation,ae=(0,l.createElement)(B.pG,(0,n.Z)({},e,{label:(0,k.__)("Add background to row","coblocks")})),ie=[{columns:1,icon:h.Z.colOne,key:"100",name:(0,k.__)("One column","coblocks")},{columns:2,icon:h.Z.colTwo,name:(0,k.__)("Two columns","coblocks")},{columns:3,icon:h.Z.colThree,name:(0,k.__)("Three columns","coblocks")},{columns:4,icon:h.Z.colFour,name:(0,k.__)("Four columns","coblocks")}];let se=1;if(F&&(se=parseInt(F.toString().split("-"))),!Z&&oe&&!re())return(0,l.createElement)(l.Fragment,null,o&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(E,e),(0,l.createElement)(I,null,(0,l.createElement)(C,e))),(0,l.createElement)(p.Placeholder,{className:"components-coblocks-row-placeholder",icon:(0,l.createElement)(p.Icon,{icon:s.M8y}),instructions:F?(0,k.sprintf)(
/* translators: %s: 'one' 'two' 'three' and 'four' */
(0,k.__)("Select a layout for this %s column row.","coblocks"),(ue=F,1===ue?(0,k.__)("one","coblocks"):2===ue?(0,k.__)("two","coblocks"):3===ue?(0,k.__)("three","coblocks"):4===ue?(0,k.__)("four","coblocks"):void 0)):(0,k.__)("Select the number of columns for this row.","coblocks"),key:"placeholder",label:F?(0,k.__)("Row layout","coblocks"):(0,k.__)("Row","coblocks")},F?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(p.ButtonGroup,{"aria-label":(0,k.__)("Select row layout","coblocks"),className:"block-editor-inner-blocks__template-picker-options block-editor-block-pattern-picker__patterns"},(0,l.createElement)(p.Button,{className:"components-coblocks-row-placeholder__back",icon:"exit",label:(0,k.__)("Back to columns","coblocks"),onClick:()=>{c({columns:null}),ne(!0)}}),d()(f.sL[se],(e=>(0,l.createElement)(p.Tooltip,{text:e.name},(0,l.createElement)("div",{className:"components-coblocks-row-placeholder__button-wrapper"},(0,l.createElement)(p.Button,{className:"components-coblocks-row-placeholder__button block-editor-inner-blocks__template-picker-option block-editor-block-pattern-picker__pattern",isSecondary:!0,key:e.key,onClick:()=>{c({layout:e.key}),ne(!1)}},e.icon))))))):(0,l.createElement)(p.ButtonGroup,{"aria-label":(0,k.__)("Select row columns","coblocks"),className:"block-editor-inner-blocks__template-picker-options block-editor-block-pattern-picker__patterns"},d()(ie,(e=>(0,l.createElement)(p.Tooltip,{text:e.name},(0,l.createElement)("div",{className:"components-coblocks-row-placeholder__button-wrapper"},(0,l.createElement)(p.Button,{className:"components-coblocks-row-placeholder__button block-editor-inner-blocks__template-picker-option block-editor-block-pattern-picker__pattern",isSecondary:!0,onClick:()=>{c({columns:e.columns,layout:1===e.columns?e.key:null}),1===e.columns&&ne(!1)}},e.icon))))))));var ue;let de=r()(a,{[`coblocks-row--${P}`]:P});$&&void 0!==$.id&&(de=r()(de,`coblocks-row-${$.id}`));const me=r()("wp-block-coblocks-row__inner",...(0,B.Ro)(t),{"has-text-color":T.color,"has-padding":V&&"no"!==V,[`has-${V}-padding`]:V&&"advanced"!==V,"has-margin":O&&"no"!==O,[`has-${O}-margin`]:O&&"advanced"!==O,"is-stacked-on-mobile":W,[`are-vertically-aligned-${ee}`]:ee}),ke={backgroundColor:N.color,backgroundImage:R&&"image"===K?`url(${R})`:void 0,backgroundPosition:X&&!Q?`${100*X.x}% ${100*X.y}%`:void 0,color:T.color,marginBottom:"advanced"===O&&z?z+U:void 0,marginLeft:"advanced"===O&&M?M+U:void 0,marginRight:"advanced"===O&&G?G+U:void 0,marginTop:"advanced"===O&&D?D+U:void 0,paddingBottom:"advanced"===V&&J?J+j:void 0,paddingLeft:"advanced"===V&&Y?Y+j:void 0,paddingRight:"advanced"===V&&q?q+j:void 0,paddingTop:"advanced"===V&&H?H+j:void 0};if(v&&Z){const n=()=>(0,l.createElement)(_.InnerBlocks,{allowedBlocks:f.Ss,renderAppender:()=>null,template:f.XK[Z],templateInsertUpdatesSelection:1===F,templateLock:"all"}),c=()=>(0,l.createElement)(_.InnerBlocks,{allowedBlocks:f.Ss,renderAppender:()=>null,templateInsertUpdatesSelection:1===F,templateLock:"all"});return(0,l.createElement)(l.Fragment,null,ae,o&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(E,e),(0,l.createElement)(I,null,(0,l.createElement)(C,e))),(0,l.createElement)("div",{className:de},(0,m.isBlobURL)(R)&&(0,l.createElement)(p.Spinner,null),(0,l.createElement)(y.Z,t,(0,l.createElement)("div",{className:me,style:ke},(0,B.QF)(t),re()?c():n()))))}return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(_.__experimentalBlockVariationPicker,{allowSkip:!0,icon:i()(A,["icon","src"]),instructions:(0,k.__)("Select a variation to start with.","coblocks"),label:i()(A,["title"]),onSelect:e=>function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;e.attributes&&c(e.attributes),e.innerBlocks&&x(L,ce(e.innerBlocks))}(e),variations:u}))}))},9881:function(e,t,o){var n=o(7816),l=o(9291)(n);e.exports=l},8483:function(e,t,o){var n=o(5063)();e.exports=n},7816:function(e,t,o){var n=o(8483),l=o(3674);e.exports=function(e,t){return e&&n(e,t,l)}},9199:function(e,t,o){var n=o(9881),l=o(8612);e.exports=function(e,t){var o=-1,c=l(e)?Array(e.length):[];return n(e,(function(e,n,l){c[++o]=t(e,n,l)})),c}},9291:function(e,t,o){var n=o(8612);e.exports=function(e,t){return function(o,l){if(null==o)return o;if(!n(o))return e(o,l);for(var c=o.length,r=t?c:-1,a=Object(o);(t?r--:++r<c)&&!1!==l(a[r],r,a););return o}}},5063:function(e){e.exports=function(e){return function(t,o,n){for(var l=-1,c=Object(t),r=n(t),a=r.length;a--;){var i=r[e?a:++l];if(!1===o(c[i],i,c))break}return t}}},5161:function(e,t,o){var n=o(9932),l=o(7206),c=o(9199),r=o(1469);e.exports=function(e,t){return(r(e)?n:c)(e,l(t,3))}}}]);