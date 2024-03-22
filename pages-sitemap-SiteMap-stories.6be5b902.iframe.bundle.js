/*! For license information please see pages-sitemap-SiteMap-stories.6be5b902.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkui=self.webpackChunkui||[]).push([[2903],{"../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"../../node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"../../node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/pages/sitemap/SiteMap.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return SiteMap_stories}});var objectSpread2=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),Button=__webpack_require__("./src/components/button/Button.tsx"),ContentDivider=__webpack_require__("./src/components/contentDivider/ContentDivider.tsx"),HeaderSection=__webpack_require__("./src/sections/header/HeaderSection.tsx"),react=__webpack_require__("../../node_modules/react/index.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Logo=__webpack_require__("./src/components/logo/Logo.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),SiteMapContents=function SiteMapContents(_ref){var _ref$list=_ref.list,list=void 0===_ref$list?[]:_ref$list;return(0,jsx_runtime.jsx)("dd",{className:"cds-site-map__content",children:list.map((function(item){var _item$menus,_item$menus2,_item$menus3;return(0,jsx_runtime.jsxs)("div",{className:"cds-site-map__menu",children:[(0,jsx_runtime.jsx)("em",{className:"cds-site-map__menu-tit",children:(null===(_item$menus=item.menus)||void 0===_item$menus?void 0:_item$menus.length)>0?(0,jsx_runtime.jsx)("span",{children:item.name}):(0,jsx_runtime.jsx)(Button.z,{label:item.name,hierarchy:"link-gray",size:"lg",href:item.url,target:"_self"})}),(null===(_item$menus2=item.menus)||void 0===_item$menus2?void 0:_item$menus2.length)>0&&(0,jsx_runtime.jsx)("ul",{className:"cds-site-map__menu-list",children:null===(_item$menus3=item.menus)||void 0===_item$menus3?void 0:_item$menus3.map((function(item){return(0,jsx_runtime.jsx)("li",{className:"cds-site-map__menu-item",children:(0,jsx_runtime.jsx)(Button.z,{label:item.name,hierarchy:"link-gray",size:"sm",href:item.url,target:"_self"})},item.name)}))})]},item.name)}))})};try{SiteMapContents.displayName="SiteMapContents",SiteMapContents.__docgenInfo={description:"",displayName:"SiteMapContents",props:{list:{defaultValue:{value:"[]"},description:"",name:"list",required:!1,type:{name:"SiteMapType[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/sitemap/SiteMapContents.tsx#SiteMapContents"]={docgenInfo:SiteMapContents.__docgenInfo,name:"SiteMapContents",path:"src/pages/sitemap/SiteMapContents.tsx#SiteMapContents"})}catch(__react_docgen_typescript_loader_error){}var SiteMapList=function SiteMapList(_ref){var _ref$list=_ref.list,list=void 0===_ref$list?[]:_ref$list,_ref$hasLogoHostName=_ref.hasLogoHostName,hasLogoHostName=void 0===_ref$hasLogoHostName?"":_ref$hasLogoHostName;return(0,jsx_runtime.jsx)("dl",{className:"cds-site-map__list",children:list.map((function(row){return(0,jsx_runtime.jsxs)("div",{className:"cds-site-map__row",children:[(0,jsx_runtime.jsx)("dt",{className:classnames_default()("cds-site-map__root-menu"),children:(0,jsx_runtime.jsxs)("span",{className:classnames_default()({"has-logo":"NHN커머스"===row.name}),children:[row.name.includes(hasLogoHostName)&&(0,jsx_runtime.jsx)(Logo.T,{type:"commerce",mainUrl:row.url,useMobileCi:!0}),(0,jsx_runtime.jsx)(Button.z,{label:row.name,size:"2xl",hierarchy:"link-gray",href:row.url,target:"_self",trailingIcon:"chevronRight"})]})}),(0,jsx_runtime.jsx)(SiteMapContents,{list:null==row?void 0:row.menus})]},row.name)}))})};try{SiteMapList.displayName="SiteMapList",SiteMapList.__docgenInfo={description:"",displayName:"SiteMapList",props:{hasLogoHostName:{defaultValue:{value:""},description:"",name:"hasLogoHostName",required:!1,type:{name:"string"}},list:{defaultValue:{value:"[]"},description:"",name:"list",required:!1,type:{name:"SiteMapType[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/sitemap/SiteMapList.tsx#SiteMapList"]={docgenInfo:SiteMapList.__docgenInfo,name:"SiteMapList",path:"src/pages/sitemap/SiteMapList.tsx#SiteMapList"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,IGNORE_LIST=["엔터프라이즈"],SiteMap=function SiteMap(_ref){var _ref$list=_ref.list,list=void 0===_ref$list?[]:_ref$list,_useState=(0,react.useState)([]),_useState2=(0,slicedToArray.Z)(_useState,2),moreList=_useState2[0],setMoreList=_useState2[1],sortedList=list.filter((function(item){return!IGNORE_LIST.includes(item.name)})).sort((function(a,b){return a.sort-b.sort})),sliceList=sortedList.slice(0,8);return(0,jsx_runtime.jsxs)("article",{className:"cds-section-wrap cds-site-map",children:[(0,jsx_runtime.jsx)(HeaderSection.S,{heading:"사이트맵"}),(0,jsx_runtime.jsx)(SiteMapList,{list:sliceList,hasLogoHostName:"NHN커머스"}),(0,jsx_runtime.jsx)(ContentDivider.W,{className:"cds-site-map__divider",styleType:"background-fill",children:(0,jsx_runtime.jsx)(Button.z,{label:"더보기",hierarchy:"secondary-gray",size:"md",trailingIcon:null!=moreList&&moreList.length?"minus":"plus",onClick:function handleMoreList(){setMoreList(moreList.length?[]:sortedList.slice(8,null==list?void 0:list.length))}})}),(0,jsx_runtime.jsx)(SiteMapList,{list:moreList,hasLogoHostName:"NHN커머스"})]})};try{SiteMap.displayName="SiteMap",SiteMap.__docgenInfo={description:"",displayName:"SiteMap",props:{list:{defaultValue:{value:"[]"},description:"",name:"list",required:!1,type:{name:"SiteMapType[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/sitemap/SiteMap.tsx#SiteMap"]={docgenInfo:SiteMap.__docgenInfo,name:"SiteMap",path:"src/pages/sitemap/SiteMap.tsx#SiteMap"})}catch(__react_docgen_typescript_loader_error){}var SiteMap_stories={title:"page/Site map",component:SiteMap,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{list:[{name:"NHN커머스",url:"https://www.nhn-commerce.com",depth:0,sort:0,menus:[{name:"쇼핑몰",url:"",depth:1,sort:0,menus:[]}]},{name:"샵바이",url:"https://www.nhn-commerce.com/z/shopby/intro",depth:0,sort:1,menus:[{name:"소개",url:"https://www.nhn-commerce.com/z/shopby/intro",depth:1,sort:0,menus:[]}]}]}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    list: [{\n      name: 'NHN커머스',\n      url: 'https://www.nhn-commerce.com',\n      depth: 0,\n      sort: 0,\n      menus: [{\n        name: '쇼핑몰',\n        url: '',\n        depth: 1,\n        sort: 0,\n        menus: []\n      }]\n    }, {\n      name: '샵바이',\n      url: 'https://www.nhn-commerce.com/z/shopby/intro',\n      depth: 0,\n      sort: 1,\n      menus: [{\n        name: '소개',\n        url: 'https://www.nhn-commerce.com/z/shopby/intro',\n        depth: 1,\n        sort: 0,\n        menus: []\n      }]\n    }]\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{X:function(){return ButtonBase},z:function(){return Button}});var _Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/svg/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_excluded=["href","children"],_excluded2=["useSpan","leadingIcon","trailingIcon","onlyIcon","href","label","hierarchy","disabled","className","fullSized","size","iconColor","hasUnderline","children"],ButtonBase=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,ref){var href=_ref.href,children=_ref.children,props=(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded),BaseComponent=href?"a":"button";return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseComponent,(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({href:href,ref:ref},props),children)})),Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref2,ref){var _ref2$useSpan=_ref2.useSpan,useSpan=void 0!==_ref2$useSpan&&_ref2$useSpan,leadingIcon=_ref2.leadingIcon,trailingIcon=_ref2.trailingIcon,_ref2$onlyIcon=_ref2.onlyIcon,onlyIcon=void 0!==_ref2$onlyIcon&&_ref2$onlyIcon,href=_ref2.href,label=_ref2.label,hierarchy=_ref2.hierarchy,disabled=_ref2.disabled,_ref2$className=_ref2.className,className=void 0===_ref2$className?"":_ref2$className,fullSized=_ref2.fullSized,_ref2$size=_ref2.size,size=void 0===_ref2$size?"lg":_ref2$size,iconColor=_ref2.iconColor,_ref2$hasUnderline=_ref2.hasUnderline,hasUnderline=void 0!==_ref2$hasUnderline&&_ref2$hasUnderline,children=_ref2.children,props=(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref2,_excluded2),svgSize=["sm","md","lg","xl"].includes(size)?20:24,stateClassName={"is-full":fullSized,"is-disable":disabled,"has-underline":hasUnderline};return useSpan?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-btn","cds-btn--".concat(size),{"only-icon":onlyIcon,"is-disable":disabled},className,stateClassName,hierarchy&&"cds-btn--".concat(hierarchy)),ref:ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[leadingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{icon:leadingIcon,size:svgSize,color:iconColor}),!onlyIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"cds-btn__label",children:label}),trailingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{icon:trailingIcon,size:svgSize,color:iconColor}),children]})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ButtonBase,(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({href:href,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-btn","cds-btn--".concat(size),{"only-icon":onlyIcon},className,stateClassName,hierarchy&&"cds-btn--".concat(hierarchy)),disabled:disabled},props),{},{ref:ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[leadingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{icon:leadingIcon,size:svgSize,color:iconColor}),!onlyIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"cds-btn__label",children:label}),trailingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{icon:trailingIcon,size:svgSize,color:iconColor}),children]})}))}));try{ButtonBase.displayName="ButtonBase",ButtonBase.__docgenInfo={description:"",displayName:"ButtonBase",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#ButtonBase"]={docgenInfo:ButtonBase.__docgenInfo,name:"ButtonBase",path:"src/components/button/Button.tsx#ButtonBase"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{useSpan:{defaultValue:{value:"false"},description:"",name:"useSpan",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},fullSized:{defaultValue:null,description:"",name:"fullSized",required:!1,type:{name:"boolean"}},hierarchy:{defaultValue:null,description:"",name:"hierarchy",required:!1,type:{name:"enum",value:[{value:'"primary-red"'},{value:'"primary-blue"'},{value:'"tertiary-gray"'},{value:'"secondary-color"'},{value:'"secondary-gray"'},{value:'"tertiary-color"'},{value:'"link-gray"'},{value:'"link-color"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"string"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"string"}},onlyIcon:{defaultValue:{value:"false"},description:"",name:"onlyIcon",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xl"'},{value:'"2xl"'}]}},hasUnderline:{defaultValue:{value:"false"},description:"",name:"hasUnderline",required:!1,type:{name:"boolean"}},iconColor:{defaultValue:null,description:"",name:"iconColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"secondary-gray-blue-50"'},{value:'"currentColor"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"blue500"'},{value:'"blue600"'},{value:'"red500"'},{value:'"red600"'},{value:'"orange500"'},{value:'"orange600"'},{value:'"green500"'},{value:'"green600"'},{value:'"pink600"'},{value:'"yellow600"'},{value:'"violet600"'},{value:'"secondary-gray-blue-100"'},{value:'"secondary-gray-blue-200"'},{value:'"secondary-gray-blue-300"'},{value:'"secondary-gray-blue-400"'},{value:'"secondary-gray-blue-450"'},{value:'"secondary-gray-blue-500"'},{value:'"secondary-gray-blue-600"'},{value:'"secondary-gray-blue-700"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/contentDivider/ContentDivider.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{W:function(){return ContentDivider}});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),ContentDivider=function ContentDivider(_ref){var styleType=_ref.styleType,className=_ref.className,children=_ref.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("cds-content-divider","cds-content-divider--".concat(styleType),className),children:children})};try{ContentDivider.displayName="ContentDivider",ContentDivider.__docgenInfo={description:"",displayName:"ContentDivider",props:{styleType:{defaultValue:null,description:"",name:"styleType",required:!0,type:{name:"enum",value:[{value:'"single-line"'},{value:'"dual-line"'},{value:'"background-fill"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/contentDivider/ContentDivider.tsx#ContentDivider"]={docgenInfo:ContentDivider.__docgenInfo,name:"ContentDivider",path:"src/components/contentDivider/ContentDivider.tsx#ContentDivider"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/logo/Logo.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{T:function(){return Logo}});var _Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),process=__webpack_require__("../../node_modules/process/browser.js"),_excluded=["useSpan","isSimple","type","mainUrl","label","className","hierarchy","useMobileCi","isServiceNameDisplayed"],Logo=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function(_ref,ref){var _ref$useSpan=_ref.useSpan,useSpan=void 0!==_ref$useSpan&&_ref$useSpan,isSimple=_ref.isSimple,_ref$type=_ref.type,type=void 0===_ref$type?"commerce":_ref$type,mainUrl=_ref.mainUrl,label=_ref.label,className=_ref.className,_ref$hierarchy=_ref.hierarchy,hierarchy=void 0===_ref$hierarchy?"black":_ref$hierarchy,_ref$useMobileCi=_ref.useMobileCi,useMobileCi=void 0!==_ref$useMobileCi&&_ref$useMobileCi,_ref$isServiceNameDis=_ref.isServiceNameDisplayed,isServiceNameDisplayed=void 0===_ref$isServiceNameDis||_ref$isServiceNameDis,props=(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),ciClassName=["cds-logo__anchor","cds-logo__ci-".concat(hierarchy),{"is-static":!useMobileCi&&(isSimple||"commerce"===type)},{"is-mobile-ci":useMobileCi}];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},props),{},{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("cds-logo",className),ref:ref,children:[useSpan?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default().apply(void 0,ciClassName),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"a11y",children:"nhn commerce 홈으로 이동"})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default().apply(void 0,ciClassName),href:"".concat(process.env.NEXT_PUBLIC_DOMAIN_WWW_COMMERCE),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"a11y",children:"nhn commerce 홈으로 이동"})}),Boolean(type&&!useMobileCi&&isServiceNameDisplayed&&!isSimple)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("cds-logo__anchor","commerce"!==type?"cds-logo__".concat(type):""),href:mainUrl,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"a11y",children:label})})]}))}));try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{type:{defaultValue:{value:"commerce"},description:"",name:"type",required:!1,type:{name:"LogoType"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},isSimple:{defaultValue:null,description:"",name:"isSimple",required:!1,type:{name:"boolean"}},useMobileCi:{defaultValue:{value:"false"},description:"",name:"useMobileCi",required:!1,type:{name:"boolean"}},isServiceNameDisplayed:{defaultValue:{value:"true"},description:"",name:"isServiceNameDisplayed",required:!1,type:{name:"boolean"}},useSpan:{defaultValue:{value:"false"},description:"",name:"useSpan",required:!1,type:{name:"boolean"}},hierarchy:{defaultValue:{value:"black"},description:"",name:"hierarchy",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},mainUrl:{defaultValue:null,description:"",name:"mainUrl",required:!0,type:{name:"HeaderProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/logo/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"src/components/logo/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}},"./src/sections/header/HeaderSection.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{S:function(){return HeaderSection}});var _Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),ui_src_components_button_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/button/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_excluded=["actions","subHeading","heading","description","buttons","tab","alignMent","className","elementId","darkMode","isMdSize"],HeaderSection=function HeaderSection(_ref){var _ref$actions=_ref.actions,actions=void 0===_ref$actions?"false":_ref$actions,subHeading=_ref.subHeading,heading=_ref.heading,description=_ref.description,buttons=_ref.buttons,tab=_ref.tab,_ref$alignMent=_ref.alignMent,alignMent=void 0===_ref$alignMent?"center":_ref$alignMent,className=_ref.className,elementId=_ref.elementId,_ref$darkMode=_ref.darkMode,darkMode=void 0!==_ref$darkMode&&_ref$darkMode,_ref$isMdSize=_ref.isMdSize,isMdSize=void 0!==_ref$isMdSize&&_ref$isMdSize,props=(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),hasSubHeading=subHeading?"has-sub-heading":"";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("article",(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("cds-header-section","cds-header-section--".concat(alignMent),isMdSize&&"cds-header-section--md",hasSubHeading,darkMode&&"dark",className),id:elementId},props),{},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"cds-header-section__inner",children:[heading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header",{children:[subHeading&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{className:"cds-header-section__sub-header",children:subHeading}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{className:"cds-header-section__header",children:heading})]}),description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{className:"cds-header-section__text",children:description}),Boolean(tab)&&tab,"Buttons"===actions&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"cds-header-section__buttons",children:null==buttons?void 0:buttons.map((function(button,index){var _button$size;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ui_src_components_button_Button__WEBPACK_IMPORTED_MODULE_1__.z,{size:null!==(_button$size=button.size)&&void 0!==_button$size?_button$size:"xl",hierarchy:button.hierarchy,trailingIcon:button.trailingIcon,label:button.label,href:button.link,target:button.linkTarget},index)}))})]})}))};try{HeaderSection.displayName="HeaderSection",HeaderSection.__docgenInfo={description:"",displayName:"HeaderSection",props:{actions:{defaultValue:{value:"false"},description:"",name:"actions",required:!1,type:{name:"enum",value:[{value:'"false"'},{value:'"Buttons"'}]}},alignMent:{defaultValue:{value:"center"},description:"",name:"alignMent",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"space-between"'}]}},subHeading:{defaultValue:null,description:"",name:"subHeading",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"",name:"heading",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"(ButtonProps & { link?: string; linkTarget?: Target; })[]"}},tab:{defaultValue:null,description:"",name:"tab",required:!1,type:{name:"Element"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},elementId:{defaultValue:null,description:"",name:"elementId",required:!1,type:{name:"string"}},darkMode:{defaultValue:{value:"false"},description:"",name:"darkMode",required:!1,type:{name:"boolean"}},isMdSize:{defaultValue:{value:"false"},description:"",name:"isMdSize",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sections/header/HeaderSection.tsx#HeaderSection"]={docgenInfo:HeaderSection.__docgenInfo,name:"HeaderSection",path:"src/sections/header/HeaderSection.tsx#HeaderSection"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);