!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var o,i,u,a,f,c,l=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,f=setTimeout(O,t),s?y(e):a}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=u}function O(){var e=p();if(h(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?g(n,u-(e-l)):n}(e))}function w(e){return f=void 0,v&&o?y(e):(o=i=void 0,a)}function T(){var e=p(),n=h(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(O,t),y(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=S(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(S(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},T.flush=function(){return void 0===f?a:w(p())},T}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=a.test(t);return r||f.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var j="feedback-form-state",h={},O=document.querySelector(".feedback-form"),w=document.querySelector("input"),T=document.querySelector("textarea");O.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem(j,JSON.stringify(h))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),console.log(localStorage.getItem(j)),localStorage.removeItem(j),e.target.reset()})),function(){var e=localStorage.getItem(j),t={};try{t=JSON.parse(e)}catch(e){console.log(e.name),console.log(e.message)}t.email&&(w.value=t.email);t.message&&(T.value=t.message)}()}();
//# sourceMappingURL=03-feedback.e534508f.js.map