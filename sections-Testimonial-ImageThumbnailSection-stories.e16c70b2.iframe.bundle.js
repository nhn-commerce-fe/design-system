/*! For license information please see sections-Testimonial-ImageThumbnailSection-stories.e16c70b2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkui=self.webpackChunkui||[]).push([[394],{"../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:function(){return _arrayLikeToArray}})},"../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"../../node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _unsupportedIterableToArray}});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"../../node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/sections/Testimonial/ImageThumbnailSection.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ImageThumbnailSection_stories}});var objectSpread2=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),slicedToArray=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),classnames=__webpack_require__("../../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("../../node_modules/react/index.js"),Button=__webpack_require__("./src/components/button/Button.tsx"),QuoteImagePanel=__webpack_require__("./src/components/button/QuoteImagePanel.tsx"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_excluded=["subTitle","title","description","image"],ImageThumbnailSection=function ImageThumbnailSection(_ref){var _ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label,_ref$thumbs=_ref.thumbs,thumbs=void 0===_ref$thumbs?[]:_ref$thumbs,_ref$moreButtonLocati=_ref.moreButtonLocation,moreButtonLocation=void 0===_ref$moreButtonLocati?"external":_ref$moreButtonLocati,_ref$perCount=_ref.perCount,perCount=void 0===_ref$perCount?8:_ref$perCount,thumbMoreHref=_ref.thumbMoreHref,_ref$target=_ref.target,target=void 0===_ref$target?"_blank":_ref$target,sectionId=_ref.sectionId,_ref$visibleMoreButto=_ref.visibleMoreButton,visibleMoreButton=void 0===_ref$visibleMoreButto||_ref$visibleMoreButto,sectionRef=(0,react.useRef)(null),_useState=(0,react.useState)(1),_useState2=(0,slicedToArray.Z)(_useState,2),openStep=_useState2[0],setOpenStep=_useState2[1],slicedThumbs=(0,react.useMemo)((function(){return visibleMoreButton?thumbs.slice(0,openStep*perCount):thumbs}),[thumbs,openStep,perCount,visibleMoreButton]),isLimited=slicedThumbs.length>=thumbs.length,showMoreButton=!!visibleMoreButton&&thumbs.length>perCount;return(0,jsx_runtime.jsxs)("section",{ref:sectionRef,id:sectionId,className:classnames_default()("cds-section-wrap","image-thumbnail-section"),children:[(0,jsx_runtime.jsxs)("div",{className:"image-thumbnail-section__content",children:[slicedThumbs.map((function(_ref2,index){var subTitle=_ref2.subTitle,title=_ref2.title,description=_ref2.description,image=_ref2.image,props=(0,objectWithoutProperties.Z)(_ref2,_excluded);return(0,jsx_runtime.jsx)(QuoteImagePanel.N,(0,objectSpread2.Z)({className:"image-thumbnail-section__panel",subTitle:subTitle,title:title,description:description,image:image},props),index)})),visibleMoreButton&&"internal"===moreButtonLocation&&(0,jsx_runtime.jsx)(QuoteImagePanel.N,{className:"image-thumbnail-section__panel",title:label,href:thumbMoreHref,target:target})]}),showMoreButton&&"external"===moreButtonLocation&&(0,jsx_runtime.jsx)(Button.z,{className:"image-thumbnail-section__more",label:isLimited?"닫기":label,size:"xl",hierarchy:"secondary-gray",onClick:isLimited?function handleMoreClose(){var _sectionRef$current;null===(_sectionRef$current=sectionRef.current)||void 0===_sectionRef$current||_sectionRef$current.scrollIntoView(),setOpenStep(1)}:function handleMore(){setOpenStep((function(prev){return prev+1}))}})]})};try{ImageThumbnailSection.displayName="ImageThumbnailSection",ImageThumbnailSection.__docgenInfo={description:"",displayName:"ImageThumbnailSection",props:{thumbs:{defaultValue:{value:"[]"},description:"",name:"thumbs",required:!1,type:{name:"QuoteImagePanelProps[]"}},perCount:{defaultValue:{value:"8"},description:"",name:"perCount",required:!1,type:{name:"number"}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},moreButtonLocation:{defaultValue:{value:"external"},description:"",name:"moreButtonLocation",required:!1,type:{name:"enum",value:[{value:'"internal"'},{value:'"external"'}]}},thumbMoreHref:{defaultValue:null,description:"",name:"thumbMoreHref",required:!1,type:{name:"string"}},target:{defaultValue:{value:"_blank"},description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}},sectionId:{defaultValue:null,description:"",name:"sectionId",required:!1,type:{name:"string"}},visibleMoreButton:{defaultValue:{value:"true"},description:"",name:"visibleMoreButton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sections/Testimonial/ImageThumbnailSection.tsx#ImageThumbnailSection"]={docgenInfo:ImageThumbnailSection.__docgenInfo,name:"ImageThumbnailSection",path:"src/sections/Testimonial/ImageThumbnailSection.tsx#ImageThumbnailSection"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,thumb6_namespaceObject=__webpack_require__.p+"54b91d9887ef1f93ed29.png",imageMock=Array(50).fill(null).map((function(){return{subTit:"2023",title:"소니스토어",desc:"디자인, 퍼블리싱, 개발",image:thumb6_namespaceObject,href:"/",target:"_blank"}})),ImageThumbnailSection_stories={title:"Section/Testimonial/Image Thumbnail",component:ImageThumbnailSection,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{thumbs:imageMock,label:"더보기 +",perCount:8}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    thumbs: imageMock,\n    label: '더보기 +',\n    perCount: 8\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/button/Button.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{X:function(){return ButtonBase},z:function(){return Button}});var _Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/svg/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_excluded=["href","children"],_excluded2=["useSpan","leadingIcon","trailingIcon","onlyIcon","href","label","hierarchy","disabled","className","fullSized","size","iconColor","hasUnderline","children"],ButtonBase=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,ref){var href=_ref.href,children=_ref.children,props=(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded),BaseComponent=href?"a":"button";return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseComponent,(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({href:href,ref:ref},props),children)})),Button=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref2,ref){var _ref2$useSpan=_ref2.useSpan,useSpan=void 0!==_ref2$useSpan&&_ref2$useSpan,leadingIcon=_ref2.leadingIcon,trailingIcon=_ref2.trailingIcon,_ref2$onlyIcon=_ref2.onlyIcon,onlyIcon=void 0!==_ref2$onlyIcon&&_ref2$onlyIcon,href=_ref2.href,label=_ref2.label,hierarchy=_ref2.hierarchy,disabled=_ref2.disabled,_ref2$className=_ref2.className,className=void 0===_ref2$className?"":_ref2$className,fullSized=_ref2.fullSized,_ref2$size=_ref2.size,size=void 0===_ref2$size?"lg":_ref2$size,iconColor=_ref2.iconColor,_ref2$hasUnderline=_ref2.hasUnderline,hasUnderline=void 0!==_ref2$hasUnderline&&_ref2$hasUnderline,children=_ref2.children,props=(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref2,_excluded2),svgSize=["sm","md","lg","xl"].includes(size)?20:24,stateClassName={"is-full":fullSized,"is-disable":disabled,"has-underline":hasUnderline};return useSpan?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-btn","cds-btn--".concat(size),{"only-icon":onlyIcon,"is-disable":disabled},className,stateClassName,hierarchy&&"cds-btn--".concat(hierarchy)),ref:ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[leadingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{icon:leadingIcon,size:svgSize,color:iconColor}),!onlyIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"cds-btn__label",children:label}),trailingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{icon:trailingIcon,size:svgSize,color:iconColor}),children]})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ButtonBase,(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({href:href,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("cds-btn","cds-btn--".concat(size),{"only-icon":onlyIcon},className,stateClassName,hierarchy&&"cds-btn--".concat(hierarchy)),disabled:disabled},props),{},{ref:ref,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[leadingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{icon:leadingIcon,size:svgSize,color:iconColor}),!onlyIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"cds-btn__label",children:label}),trailingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_svg_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{icon:trailingIcon,size:svgSize,color:iconColor}),children]})}))}));try{ButtonBase.displayName="ButtonBase",ButtonBase.__docgenInfo={description:"",displayName:"ButtonBase",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#ButtonBase"]={docgenInfo:ButtonBase.__docgenInfo,name:"ButtonBase",path:"src/components/button/Button.tsx#ButtonBase"})}catch(__react_docgen_typescript_loader_error){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{useSpan:{defaultValue:{value:"false"},description:"",name:"useSpan",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},fullSized:{defaultValue:null,description:"",name:"fullSized",required:!1,type:{name:"boolean"}},hierarchy:{defaultValue:null,description:"",name:"hierarchy",required:!1,type:{name:"enum",value:[{value:'"primary-red"'},{value:'"primary-blue"'},{value:'"tertiary-gray"'},{value:'"secondary-color"'},{value:'"secondary-gray"'},{value:'"tertiary-color"'},{value:'"link-gray"'},{value:'"link-color"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},leadingIcon:{defaultValue:null,description:"",name:"leadingIcon",required:!1,type:{name:"string"}},trailingIcon:{defaultValue:null,description:"",name:"trailingIcon",required:!1,type:{name:"string"}},onlyIcon:{defaultValue:{value:"false"},description:"",name:"onlyIcon",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xl"'},{value:'"2xl"'}]}},hasUnderline:{defaultValue:{value:"false"},description:"",name:"hasUnderline",required:!1,type:{name:"boolean"}},iconColor:{defaultValue:null,description:"",name:"iconColor",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"black"'},{value:'"secondary-gray-blue-50"'},{value:'"currentColor"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"gray500"'},{value:'"gray600"'},{value:'"gray700"'},{value:'"blue500"'},{value:'"blue600"'},{value:'"red500"'},{value:'"red600"'},{value:'"orange500"'},{value:'"orange600"'},{value:'"green500"'},{value:'"green600"'},{value:'"pink600"'},{value:'"yellow600"'},{value:'"violet600"'},{value:'"secondary-gray-blue-100"'},{value:'"secondary-gray-blue-200"'},{value:'"secondary-gray-blue-300"'},{value:'"secondary-gray-blue-400"'},{value:'"secondary-gray-blue-450"'},{value:'"secondary-gray-blue-500"'},{value:'"secondary-gray-blue-600"'},{value:'"secondary-gray-blue-700"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/button/QuoteImagePanel.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{N:function(){return QuoteImagePanel}});var _Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/button/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_excluded=["className","subTitle","title","description","image","target"],QuoteImagePanel=function QuoteImagePanel(_ref){var className=_ref.className,subTitle=_ref.subTitle,title=_ref.title,description=_ref.description,image=_ref.image,target=_ref.target,props=(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Button__WEBPACK_IMPORTED_MODULE_1__.X,(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("cds-quote-img-panel",className),target:target},props),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("cds-quote-img-panel__cover"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"cds-quote-img-panel__sub-title",children:subTitle}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("em",{className:"cds-quote-img-panel__title",children:title}),description]})}),image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{className:"cds-quote-img-panel__img",src:image,alt:""})]}))};try{QuoteImagePanel.displayName="QuoteImagePanel",QuoteImagePanel.__docgenInfo={description:"",displayName:"QuoteImagePanel",props:{subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/QuoteImagePanel.tsx#QuoteImagePanel"]={docgenInfo:QuoteImagePanel.__docgenInfo,name:"QuoteImagePanel",path:"src/components/button/QuoteImagePanel.tsx#QuoteImagePanel"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);