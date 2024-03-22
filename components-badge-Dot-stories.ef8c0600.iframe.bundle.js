/*! For license information please see components-badge-Dot-stories.ef8c0600.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkui=self.webpackChunkui||[]).push([[6880],{"../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"../../node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"../../node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/badge/Dot.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),meta={title:"Component/Dot",component:__webpack_require__("./src/components/badge/Dot.tsx").o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"]},color:{control:"select",options:["neutral","error","warning","success","blue","violet"]}}};__webpack_exports__.default=meta;var Default={args:{color:"neutral",size:"sm"}};Default.parameters=(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Default.parameters),{},{docs:(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_Users_hanseungcheol_Desktop_project_commerce_front_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {\n    color: 'neutral',\n    size: 'sm'\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/badge/Dot.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{o:function(){return Dot}});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),Dot=function Dot(_ref){var color=_ref.color,_ref$size=_ref.size,size=void 0===_ref$size?"md":_ref$size,className=_ref.className;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("cds-dot","cds-dot--".concat(size),"cds-dot--".concat(color),className)})};try{Dot.displayName="Dot",Dot.__docgenInfo={description:"",displayName:"Dot",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'Omit<BadgeColor, "pink" | "disable">'}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'Omit<Size, "xl" | "2xl">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/badge/Dot.tsx#Dot"]={docgenInfo:Dot.__docgenInfo,name:"Dot",path:"src/components/badge/Dot.tsx#Dot"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);