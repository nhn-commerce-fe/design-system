/*! For license information please see layout-header-ServiceMap-stories.b2365448.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkui=self.webpackChunkui||[]).push([[9411],{"../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"../../node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"../../node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/layout/header/ServiceMap.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),meta={title:"Layout/ServiceMap",component:__webpack_require__("./src/layout/header/ServiceMap.tsx").A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}};__webpack_exports__.default=meta;var Default={args:{sitemap:{hostUrl:"/",hostName:"",biUrl:"/",isGnbCtaDisplay:!1,menus:[{no:349,name:"menu",siteUrl:"",parentNo:348,depth:1,sort:0,target:"_self",isDisplayedInMobileGnb:!0,description:"",children:[{no:367,name:"테스트용",siteUrl:"http://localhost:3007/1428",parentNo:349,depth:2,sort:0,target:"_self",isDisplayedInMobileGnb:!0,description:"test description",children:[]},{no:367,name:"테스트용",siteUrl:"http://localhost:3007/1428",parentNo:349,depth:2,sort:0,target:"_self",isDisplayedInMobileGnb:!0,description:"test description",children:[]}]},{no:349,name:"menu",siteUrl:"http://localhost:3007",parentNo:348,depth:1,sort:0,target:"_self",isDisplayedInMobileGnb:!0,description:"",children:[{no:367,name:"테스트용",siteUrl:"http://localhost:3007/1428",parentNo:349,depth:2,sort:0,target:"_self",isDisplayedInMobileGnb:!0,description:"test description",children:[]}]},{no:349,name:"menu",siteUrl:"http://localhost:3007",parentNo:348,depth:1,sort:0,target:"_self",isDisplayedInMobileGnb:!0,description:"",children:[{no:367,name:"테스트용",siteUrl:"http://localhost:3007/1428",parentNo:349,depth:2,sort:0,target:"_self",isDisplayedInMobileGnb:!0,description:"test description",children:[]}]},{no:349,name:"menu",siteUrl:"http://localhost:3007",parentNo:348,depth:1,sort:0,target:"_self",isDisplayedInMobileGnb:!0,description:"",children:[{no:367,name:"테스트용",siteUrl:"http://localhost:3007/1428",parentNo:349,depth:2,sort:0,target:"_self",isDisplayedInMobileGnb:!0,description:"test description",children:[]}]},{no:349,name:"menu",siteUrl:"http://localhost:3007",parentNo:348,depth:1,sort:0,target:"_self",isDisplayedInMobileGnb:!0,description:"",children:[{no:367,name:"테스트용",siteUrl:"http://localhost:3007/1428",parentNo:349,depth:2,sort:0,target:"_self",isDisplayedInMobileGnb:!0,description:"test description",children:[]}]},{no:349,name:"menu",siteUrl:"http://localhost:3007",parentNo:348,depth:1,sort:0,target:"_self",isDisplayedInMobileGnb:!0,description:"",children:[]},{no:349,name:"menu",siteUrl:"http://localhost:3007",parentNo:348,depth:1,sort:0,target:"_blank",isDisplayedInMobileGnb:!0,description:"",children:[]}]}}};Default.parameters=(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Default.parameters),{},{docs:(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {\n    sitemap: {\n      hostUrl: '/',\n      hostName: '',\n      biUrl: '/',\n      isGnbCtaDisplay: false,\n      menus: [{\n        no: 349,\n        name: `menu`,\n        siteUrl: '',\n        parentNo: 348,\n        depth: 1,\n        sort: 0,\n        target: '_self',\n        isDisplayedInMobileGnb: true,\n        description: '',\n        children: [{\n          no: 367,\n          name: '테스트용',\n          siteUrl: 'http://localhost:3007/1428',\n          parentNo: 349,\n          depth: 2,\n          sort: 0,\n          target: '_self',\n          isDisplayedInMobileGnb: true,\n          description: 'test description',\n          children: []\n        }, {\n          no: 367,\n          name: '테스트용',\n          siteUrl: 'http://localhost:3007/1428',\n          parentNo: 349,\n          depth: 2,\n          sort: 0,\n          target: '_self',\n          isDisplayedInMobileGnb: true,\n          description: 'test description',\n          children: []\n        }]\n      }, {\n        no: 349,\n        name: `menu`,\n        siteUrl: 'http://localhost:3007',\n        parentNo: 348,\n        depth: 1,\n        sort: 0,\n        target: '_self',\n        isDisplayedInMobileGnb: true,\n        description: '',\n        children: [{\n          no: 367,\n          name: '테스트용',\n          siteUrl: 'http://localhost:3007/1428',\n          parentNo: 349,\n          depth: 2,\n          sort: 0,\n          target: '_self',\n          isDisplayedInMobileGnb: true,\n          description: 'test description',\n          children: []\n        }]\n      }, {\n        no: 349,\n        name: `menu`,\n        siteUrl: 'http://localhost:3007',\n        parentNo: 348,\n        depth: 1,\n        sort: 0,\n        target: '_self',\n        isDisplayedInMobileGnb: true,\n        description: '',\n        children: [{\n          no: 367,\n          name: '테스트용',\n          siteUrl: 'http://localhost:3007/1428',\n          parentNo: 349,\n          depth: 2,\n          sort: 0,\n          target: '_self',\n          isDisplayedInMobileGnb: true,\n          description: 'test description',\n          children: []\n        }]\n      }, {\n        no: 349,\n        name: `menu`,\n        siteUrl: 'http://localhost:3007',\n        parentNo: 348,\n        depth: 1,\n        sort: 0,\n        target: '_self',\n        isDisplayedInMobileGnb: true,\n        description: '',\n        children: [{\n          no: 367,\n          name: '테스트용',\n          siteUrl: 'http://localhost:3007/1428',\n          parentNo: 349,\n          depth: 2,\n          sort: 0,\n          target: '_self',\n          isDisplayedInMobileGnb: true,\n          description: 'test description',\n          children: []\n        }]\n      }, {\n        no: 349,\n        name: `menu`,\n        siteUrl: 'http://localhost:3007',\n        parentNo: 348,\n        depth: 1,\n        sort: 0,\n        target: '_self',\n        isDisplayedInMobileGnb: true,\n        description: '',\n        children: [{\n          no: 367,\n          name: '테스트용',\n          siteUrl: 'http://localhost:3007/1428',\n          parentNo: 349,\n          depth: 2,\n          sort: 0,\n          target: '_self',\n          isDisplayedInMobileGnb: true,\n          description: 'test description',\n          children: []\n        }]\n      }, {\n        no: 349,\n        name: `menu`,\n        siteUrl: 'http://localhost:3007',\n        parentNo: 348,\n        depth: 1,\n        sort: 0,\n        target: '_self',\n        isDisplayedInMobileGnb: true,\n        description: '',\n        children: []\n      }, {\n        no: 349,\n        name: `menu`,\n        siteUrl: 'http://localhost:3007',\n        parentNo: 348,\n        depth: 1,\n        sort: 0,\n        target: '_blank',\n        isDisplayedInMobileGnb: true,\n        description: '',\n        children: []\n      }]\n    }\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{X:function(){return ButtonBase},z:function(){return Button}});var _Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/svg/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_excluded=["href","children"],_excluded2=["useSpan","leadingIcon","trailingIcon","onlyIcon","href","label","hierarchy","disabled","className","fullSized","size","iconColor","hasUnderline","children"],ButtonBase=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,ref){var href=_ref.href,children=_ref.children,props=(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded),BaseComponent=href?"a":"button";return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseComponent,(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({href:href,ref:ref},props),children)})),Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref2,ref){var _ref2$useSpan=_ref2.useSpan,useSpan=void 0!==_ref2$useSpan&&_ref2$useSpan,leadingIcon=_ref2.leadingIcon,trailingIcon=_ref2.trailingIcon,_ref2$onlyIcon=_ref2.onlyIcon,onlyIcon=void 0!==_ref2$onlyIcon&&_ref2$onlyIcon,href=_ref2.href,label=_ref2.label,hierarchy=_ref2.hierarchy,disabled=_ref2.disabled,_ref2$className=_ref2.className,className=void 0===_ref2$className?"":_ref2$className,fullSized=_ref2.fullSized,_ref2$size=_ref2.size,size=void 0===_ref2$size?"lg":_ref2$size,iconColor=_ref2.iconColor,_ref2$hasUnderline=_ref2.hasUnderline,hasUnderline=void 0!==_ref2$hasUnderline&&_ref2$hasUnderline,children=_ref2.children,props=(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref2,_excluded2),svgSize=["sm","md","lg","xl"].includes(size)?20:24,stateClassName={"is-full":fullSized,"is-disable":disabled,"has-underline":hasUnderline};return useSpan?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-btn","cds-btn--".concat(size),{"only-icon":onlyIcon,"is-disable":disabled},className,stateClassName,hierarchy&&"cds-btn--".concat(hierarchy)),ref:ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[leadingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{icon:leadingIcon,size:svgSize,color:iconColor}),!onlyIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"cds-btn__label",children:label}),trailingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{icon:trailingIcon,size:svgSize,color:iconColor}),children]})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ButtonBase,(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({href:href,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-btn","cds-btn--".concat(size),{"only-icon":onlyIcon},className,stateClassName,hierarchy&&"cds-btn--".concat(hierarchy)),disabled:disabled},props),{},{ref:ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[leadingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{icon:leadingIcon,size:svgSize,color:iconColor}),!onlyIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"cds-btn__label",children:label}),trailingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{icon:trailingIcon,size:svgSize,color:iconColor}),children]})}))}));try{ButtonBase.displayName="ButtonBase",ButtonBase.__docgenInfo={description:"",displayName:"ButtonBase",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#ButtonBase"]={docgenInfo:ButtonBase.__docgenInfo,name:"ButtonBase",path:"src/components/button/Button.tsx#ButtonBase"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{useSpan:{defaultValue:{value:"false"},description:"",name:"useSpan",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},fullSized:{defaultValue:null,description:"",name:"fullSized",required:!1,type:{name:"boolean"}},hierarchy:{defaultValue:null,description:"",name:"hierarchy",required:!1,type:{name:"enum",value:[{value:'"primary-red"'},{value:'"primary-blue"'},{value:'"tertiary-gray"'},{value:'"secondary-color"'},{value:'"secondary-gray"'},{value:'"tertiary-color"'},{value:'"link-gray"'},{value:'"link-color"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"string"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"string"}},onlyIcon:{defaultValue:{value:"false"},description:"",name:"onlyIcon",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xl"'},{value:'"2xl"'}]}},hasUnderline:{defaultValue:{value:"false"},description:"",name:"hasUnderline",required:!1,type:{name:"boolean"}},iconColor:{defaultValue:null,description:"",name:"iconColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"secondary-gray-blue-50"'},{value:'"currentColor"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"blue500"'},{value:'"blue600"'},{value:'"red500"'},{value:'"red600"'},{value:'"orange500"'},{value:'"orange600"'},{value:'"green500"'},{value:'"green600"'},{value:'"pink600"'},{value:'"yellow600"'},{value:'"violet600"'},{value:'"secondary-gray-blue-100"'},{value:'"secondary-gray-blue-200"'},{value:'"secondary-gray-blue-300"'},{value:'"secondary-gray-blue-400"'},{value:'"secondary-gray-blue-450"'},{value:'"secondary-gray-blue-500"'},{value:'"secondary-gray-blue-600"'},{value:'"secondary-gray-blue-700"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/logo/Logo.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{T:function(){return Logo}});var _Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),process=__webpack_require__("../../node_modules/process/browser.js"),_excluded=["useSpan","isSimple","type","mainUrl","label","className","hierarchy","useMobileCi","isServiceNameDisplayed"],Logo=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(_ref,ref){var _ref$useSpan=_ref.useSpan,useSpan=void 0!==_ref$useSpan&&_ref$useSpan,isSimple=_ref.isSimple,_ref$type=_ref.type,type=void 0===_ref$type?"commerce":_ref$type,mainUrl=_ref.mainUrl,label=_ref.label,className=_ref.className,_ref$hierarchy=_ref.hierarchy,hierarchy=void 0===_ref$hierarchy?"black":_ref$hierarchy,_ref$useMobileCi=_ref.useMobileCi,useMobileCi=void 0!==_ref$useMobileCi&&_ref$useMobileCi,_ref$isServiceNameDis=_ref.isServiceNameDisplayed,isServiceNameDisplayed=void 0===_ref$isServiceNameDis||_ref$isServiceNameDis,props=(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),ciClassName=["cds-logo__anchor","cds-logo__ci-".concat(hierarchy),{"is-static":!useMobileCi&&(isSimple||"commerce"===type)},{"is-mobile-ci":useMobileCi}];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},props),{},{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("cds-logo",className),ref:ref,children:[useSpan?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default().apply(void 0,ciClassName),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"a11y",children:"nhn commerce 홈으로 이동"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default().apply(void 0,ciClassName),href:"".concat(process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"a11y",children:"nhn commerce 홈으로 이동"})}),Boolean(type&&!useMobileCi&&isServiceNameDisplayed&&!isSimple)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("cds-logo__anchor","commerce"!==type?"cds-logo__".concat(type):""),href:mainUrl,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"a11y",children:label})})]}))}));try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{type:{defaultValue:{value:"commerce"},description:"",name:"type",required:!1,type:{name:"LogoType"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},isSimple:{defaultValue:null,description:"",name:"isSimple",required:!1,type:{name:"boolean"}},useMobileCi:{defaultValue:{value:"false"},description:"",name:"useMobileCi",required:!1,type:{name:"boolean"}},isServiceNameDisplayed:{defaultValue:{value:"true"},description:"",name:"isServiceNameDisplayed",required:!1,type:{name:"boolean"}},useSpan:{defaultValue:{value:"false"},description:"",name:"useSpan",required:!1,type:{name:"boolean"}},hierarchy:{defaultValue:{value:"black"},description:"",name:"hierarchy",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mainUrl:{defaultValue:null,description:"",name:"mainUrl",required:!0,type:{name:"HeaderProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/logo/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"src/components/logo/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}},"./src/layout/header/NavMenuItem.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{_:function(){return NavMenuItem}});var _Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),ui_src_components_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/svg/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_excluded=["href","icon","badge","text","more","outLink","label"],NavMenuItem=function NavMenuItem(_ref){var href=_ref.href,badge=(_ref.icon,_ref.badge),text=_ref.text,more=_ref.more,outLink=_ref.outLink,label=_ref.label,props=(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a",(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)((0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.Z)({className:"cds-nav-menu-item",href:href},props),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p",{className:"cds-nav-menu-item__link-top",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("em",{className:"cds-nav-menu-item__link-label",children:label}),badge&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:"badge"}),outLink&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ui_src_components_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_0__.l,{icon:"arrowUpRight",size:20,color:"gray300"})]}),text&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"cds-nav-menu-item__link-text",dangerouslySetInnerHTML:{__html:text}}),more&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span",{className:"cds-nav-menu-item__link-more",children:["더보기 ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ui_src_components_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_0__.l,{icon:"arrowRight",size:20,color:"blue500"})]})]}))};try{NavMenuItem.displayName="NavMenuItem",NavMenuItem.__docgenInfo={description:"",displayName:"NavMenuItem",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"boolean"}},badge:{defaultValue:null,description:"",name:"badge",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},more:{defaultValue:null,description:"",name:"more",required:!1,type:{name:"boolean"}},outLink:{defaultValue:null,description:"",name:"outLink",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/header/NavMenuItem.tsx#NavMenuItem"]={docgenInfo:NavMenuItem.__docgenInfo,name:"NavMenuItem",path:"src/layout/header/NavMenuItem.tsx#NavMenuItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/layout/header/ServiceMap.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{A:function(){return ServiceMap}});var ui_src_components_button_Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/button/Button.tsx"),_NavMenuItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/layout/header/NavMenuItem.tsx"),ui_src_components_logo_Logo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/logo/Logo.tsx"),ui_src_components_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/svg/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),process=__webpack_require__("../../node_modules/process/browser.js"),ServiceMap=function ServiceMap(_ref){var _sitemap$menus,sitemap=_ref.sitemap;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("article",{className:"cds-service-map",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("header",{className:"cds-service-map__header",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ui_src_components_button_Button__WEBPACK_IMPORTED_MODULE_0__.z,{label:"NHN커머스 메인",hierarchy:"tertiary-gray",className:"cds-service-map__home-link",href:(null==sitemap?void 0:sitemap.hostUrl)||"/",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ui_src_components_logo_Logo__WEBPACK_IMPORTED_MODULE_2__.T,{useSpan:!0,useMobileCi:!0})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ui_src_components_button_Button__WEBPACK_IMPORTED_MODULE_0__.z,{hierarchy:"link-gray",label:"전체 사이트맵 보기",trailingIcon:"arrowRight",href:"".concat(process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE,"/z/site-map")})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"cds-service-map__list",children:null==sitemap||null===(_sitemap$menus=sitemap.menus)||void 0===_sitemap$menus?void 0:_sitemap$menus.map((function(item){var _item$children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("dl",{className:"cds-service-map__columns",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("dt",{className:"cds-service-map__menu-title",children:item.siteUrl?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a",{href:item.siteUrl,target:item.target,children:[item.name,"_blank"===item.target&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ui_src_components_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_3__.l,{icon:"arrowUpRight",size:16})]}):item.name}),null===(_item$children=item.children)||void 0===_item$children?void 0:_item$children.map((function(child){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("dd",{className:"cds-service-map__menu-content",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_NavMenuItem__WEBPACK_IMPORTED_MODULE_1__._,{label:child.name,href:child.siteUrl,target:child.target,text:child.description})},child.no)}))]},item.no)}))})]})};try{ServiceMap.displayName="ServiceMap",ServiceMap.__docgenInfo={description:"",displayName:"ServiceMap",props:{sitemap:{defaultValue:null,description:"",name:"sitemap",required:!0,type:{name:"SitemapProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/header/ServiceMap.tsx#ServiceMap"]={docgenInfo:ServiceMap.__docgenInfo,name:"ServiceMap",path:"src/layout/header/ServiceMap.tsx#ServiceMap"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);