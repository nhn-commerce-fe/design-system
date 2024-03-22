"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[2404],{"./src/layout/header/stories/HeaderControl.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return HeaderControl_stories}});var objectSpread2=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),Header=__webpack_require__("./src/layout/header/Header.tsx");var _Default$parameters,_Default$parameters2,_Default$parameters2$,Button=__webpack_require__("./src/components/button/Button.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StorybookHeaderControl=function StorybookHeaderControl(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Header.h,(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{defaultActiveIndex:0})),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{children:"GNB의 메뉴 포커스를 직접 컨트롤하고자 할 때 사용하는 함수"}),(0,jsx_runtime.jsxs)("div",{style:{background:"#3f3f3f",display:"inline-block",padding:"15px",color:"#FFF",marginBottom:"15px"},children:[(0,jsx_runtime.jsxs)("div",{children:["import ","{","setGNBActiveNumber","}"," from 'commerce-channel/gnb';"]}),(0,jsx_runtime.jsx)("div",{children:"setGNBActiveNumber(number);"})]}),(0,jsx_runtime.jsx)("div",{style:{display:"flex",gap:10},children:Array(4).fill(null).map((function(_,number){return(0,jsx_runtime.jsx)(Button.z,{onClick:function onClick(){return(number=>{window.postMessage({key:"nhn-commerce-channel",event:{type:"activeGNBNumber",value:number}})})(number)},label:"setGNBActiveNumber(".concat(number,")"),hierarchy:"secondary-gray",size:"sm"},number)}))})]})]})};try{StorybookHeaderControl.displayName="StorybookHeaderControl",StorybookHeaderControl.__docgenInfo={description:"스토리북 GNB 보기전용 컴포넌트",displayName:"StorybookHeaderControl",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/header/stories/StorybookHeaderControl.tsx#StorybookHeaderControl"]={docgenInfo:StorybookHeaderControl.__docgenInfo,name:"StorybookHeaderControl",path:"src/layout/header/stories/StorybookHeaderControl.tsx#StorybookHeaderControl"})}catch(__react_docgen_typescript_loader_error){}var HeaderControl_stories={title:"Layout/Header/Control",component:StorybookHeaderControl,parameters:{layout:"centered"},argTypes:{menus:{table:{disable:!0}},isMobile:{table:{disable:!0}}}},Default={args:{type:"shopby",logoLabel:"shopby 홈으로 가기",href:"/",userInfo:{name:"홍길동",isIntegratedMember:!0},menus:[{no:1,name:"메뉴1",siteUrl:"/",parentNo:0,depth:1,sort:1,target:"_self",isDisplayedInMobileGnb:!0,description:"",children:[]},{no:2,name:"메뉴2",siteUrl:"/",parentNo:0,depth:1,sort:1,target:"_self",isDisplayedInMobileGnb:!0,description:"",children:[]},{no:3,name:"메뉴3",siteUrl:"/",parentNo:0,depth:1,sort:1,target:"_self",isDisplayedInMobileGnb:!0,description:"",children:[]}],mainButtonLabel:"label"}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    type: 'shopby',\n    logoLabel: 'shopby 홈으로 가기',\n    href: '/',\n    userInfo: {\n      name: '홍길동',\n      isIntegratedMember: true\n    },\n    menus: [{\n      no: 1,\n      name: '메뉴1',\n      siteUrl: '/',\n      parentNo: 0,\n      depth: 1,\n      sort: 1,\n      target: '_self',\n      isDisplayedInMobileGnb: true,\n      description: '',\n      children: []\n    }, {\n      no: 2,\n      name: '메뉴2',\n      siteUrl: '/',\n      parentNo: 0,\n      depth: 1,\n      sort: 1,\n      target: '_self',\n      isDisplayedInMobileGnb: true,\n      description: '',\n      children: []\n    }, {\n      no: 3,\n      name: '메뉴3',\n      siteUrl: '/',\n      parentNo: 0,\n      depth: 1,\n      sort: 1,\n      target: '_self',\n      isDisplayedInMobileGnb: true,\n      description: '',\n      children: []\n    }],\n    mainButtonLabel: 'label'\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]}}]);