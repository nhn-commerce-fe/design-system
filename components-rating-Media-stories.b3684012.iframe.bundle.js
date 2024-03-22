/*! For license information please see components-rating-Media-stories.b3684012.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[4854],{"../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"../../node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./src/components/rating/Media.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Media_stories}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,objectSpread2=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),StarRating=function StarRating(_ref){var count=_ref.count,total=_ref.total,startCount=count/total*100;return(0,jsx_runtime.jsxs)("span",{className:"cds-star-rating","data-count":count,children:[(0,jsx_runtime.jsxs)("span",{className:"a11y",children:["별점 ",total,"개중 ",count,"개"]}),(0,jsx_runtime.jsx)("span",{className:"cds-star-rating__count",style:{width:"".concat(startCount,"%")}})]})};try{StarRating.displayName="StarRating",StarRating.__docgenInfo={description:"",displayName:"StarRating",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/rating/StarRating.tsx#StarRating"]={docgenInfo:StarRating.__docgenInfo,name:"StarRating",path:"src/components/rating/StarRating.tsx#StarRating"})}catch(__react_docgen_typescript_loader_error){}var Media_stories={title:"Component/StarRating",component:StarRating,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},Default={args:{count:3,total:5}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    count: 3,\n    total: 5\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);