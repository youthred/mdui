/*! For license information please see index.65f43715.js.LICENSE.txt */
(()=>{"use strict";function t(t,e,s,i){var o,r=arguments.length,n=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var h=t.length-1;h>=0;h--)(o=t[h])&&(n=(r<3?o(n):r>3?o(e,s,n):o(e,s))||n);return r>3&&n&&Object.defineProperty(e,s,n),n}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;class r{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&o.set(e,t))}return t}toString(){return this.cssText}}const n=(t,i)=>{if(s)t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)}},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:a,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,$=globalThis,m=$.trustedTypes,_=m?m.emptyScript:"",f=$.reactiveElementPolyfillSupport,v=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},A=(t,e)=>!c(t,e),y={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:A};Symbol.metadata??=Symbol("metadata"),$.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=a(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const r=i?.call(this);o.call(this,e),this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return n(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:g).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=i,this[i]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??A)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[v("elementProperties")]=new Map,b[v("finalized")]=new Map,f?.({ReactiveElement:b}),($.reactiveElementVersions??=[]).push("2.0.4");const E=globalThis,w=E.trustedTypes,S=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,x="?"+P,U=`<${x}>`,M=document,H=()=>M.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,N=t=>O(t)||"function"==typeof t?.[Symbol.iterator],z="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,k=/>/g,L=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,W=/"/g,B=/^(?:script|style|textarea|title)$/i,I=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),V=I(1),K=(I(2),I(3),Symbol.for("lit-noChange")),q=Symbol.for("lit-nothing"),F=new WeakMap,G=M.createTreeWalker(M,129);function J(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Y=(t,e)=>{const s=t.length-1,i=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=R;for(let e=0;e<s;e++){const s=t[e];let h,c,l=-1,a=0;for(;a<s.length&&(n.lastIndex=a,c=n.exec(s),null!==c);)a=n.lastIndex,n===R?"!--"===c[1]?n=j:void 0!==c[1]?n=k:void 0!==c[2]?(B.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=L):void 0!==c[3]&&(n=L):n===L?">"===c[0]?(n=o??R,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,h=c[1],n=void 0===c[3]?L:'"'===c[3]?W:D):n===W||n===D?n=L:n===j||n===k?n=R:(n=L,o=void 0);const d=n===L&&t[e+1].startsWith("/>")?" ":"";r+=n===R?s+U:l>=0?(i.push(h),s.slice(0,l)+C+s.slice(l)+P+d):s+P+(-2===l?e:d)}return[J(t,r+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const n=t.length-1,h=this.parts,[c,l]=Y(t,e);if(this.el=Z.createElement(c,s),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=G.nextNode())&&h.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(C)){const e=l[r++],s=i.getAttribute(t).split(P),n=/([.?@])?(.*)/.exec(e);h.push({type:1,index:o,name:n[2],strings:s,ctor:"."===n[1]?st:"?"===n[1]?it:"@"===n[1]?ot:et}),i.removeAttribute(t)}else t.startsWith(P)&&(h.push({type:6,index:o}),i.removeAttribute(t));if(B.test(i.tagName)){const t=i.textContent.split(P),e=t.length-1;if(e>0){i.textContent=w?w.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],H()),G.nextNode(),h.push({type:2,index:++o});i.append(t[e],H())}}}else if(8===i.nodeType)if(i.data===x)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(P,t+1));)h.push({type:7,index:o}),t+=P.length-1}o++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function Q(t,e,s=t,i){if(e===K)return e;let o=void 0!==i?s._$Co?.[i]:s._$Cl;const r=T(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=o:s._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??M).importNode(e,!0);G.currentNode=i;let o=G.nextNode(),r=0,n=0,h=s[0];for(;void 0!==h;){if(r===h.index){let e;2===h.type?e=new tt(o,o.nextSibling,this,t):1===h.type?e=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(e=new rt(o,this,t)),this._$AV.push(e),h=s[++n]}r!==h?.index&&(o=G.nextNode(),r++)}return G.currentNode=M,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),T(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==K&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):N(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Z.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new X(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new Z(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new tt(this.O(H()),this.O(H()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(void 0===o)t=Q(this,t,e,0),r=!T(t)||t!==this._$AH&&t!==K,r&&(this._$AH=t);else{const i=t;let n,h;for(t=o[0],n=0;n<o.length-1;n++)h=Q(this,i[s+n],e,n),h===K&&(h=this._$AH[n]),r||=!T(h)||h!==this._$AH[n],h===q?t=q:t!==q&&(t+=(h??"")+o[n+1]),this._$AH[n]=h}r&&!i&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class ot extends et{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??q)===K)return;const s=this._$AH,i=t===q&&s!==q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==q&&(s===q||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const nt=E.litHtmlPolyfillSupport;nt?.(Z,tt),(E.litHtmlVersions??=[]).push("3.2.1");class ht extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new tt(e.insertBefore(H(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}ht._$litElement$=!0,ht.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ht});const ct=globalThis.litElementPolyfillSupport;ct?.({LitElement:ht});(globalThis.litElementVersions??=[]).push("4.1.1");const lt=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new r(s,t,i)})`:host{display:inline-block;width:1em;height:1em;line-height:1;font-size:1.5rem}`,at=2,dt=t=>(...e)=>({_$litDirective$:t,values:e});class pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class ut extends pt{constructor(t){if(super(t),this.it=q,t.type!==at)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===q||null==t)return this._t=void 0,this.it=t;if(t===K)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ut.directiveName="unsafeHTML",ut.resultType=1;dt(ut);class $t extends ut{}$t.directiveName="unsafeSVG",$t.resultType=2;const mt=dt($t);let _t=class extends ht{render(){return V`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">${mt('<path d="M8 5v14l11-7z"/>')}</svg>`}};_t.styles=lt,_t=t([(t=>(e,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})("mdui-icon-play-arrow")],_t);const ft=window.mdui.$,vt=window.ace,gt=["html","css","javascript"];new class{constructor(){this.dom=void 0,this.editors=void 0,this.isLiveMode=void 0,vt.require("ace/ext/language_tools"),this.dom={$document:ft(document),$body:ft("body"),$preview:ft(".preview"),$editor:ft(".editor"),$controls:ft(".controls"),$control:{html:ft(".control-html"),css:ft(".control-css"),javascript:ft(".control-javascript"),run:ft(".control-run"),drag:ft(".control-drag"),liveMode:ft('.control-live-mode input[type="checkbox"]')},$codes:ft(".code"),$code:{html:ft(".code-html"),css:ft(".code-css"),javascript:ft(".code-javascript")}},this.editors={html:{ace:vt.edit("ace-html"),visible:!0},css:{ace:vt.edit("ace-css"),visible:!0},javascript:{ace:vt.edit("ace-javascript"),visible:!0}},this.resizeEditor(),Object.keys(this.editors).forEach((t=>{const e=this.editors[t].ace;e.setTheme("ace/theme/chrome"),e.getSession().setMode(`ace/mode/${t}`),e.getSession().setTabSize(2),e.getSession().setUseSoftTabs(!0),e.setOptions({enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0}),e.setShowPrintMargin(!1),e.setFontSize(14),e.renderer.setShowGutter(!1),e.resize(!0)})),this.bindHotKey(),gt.forEach((t=>{this.dom.$control[t].hasClass("control-active")?this.showCode(t):this.hideCode(t)})),this.isLiveMode=this.dom.$control.liveMode[0].checked,this.bindLiveMode(),this.bindDragEditor(),ft(window).on("resize",(()=>{this.resizeEditor()})),gt.forEach((t=>{this.dom.$control[t].on("click",(()=>{this.toggleCode(t)}))})),this.dom.$control.run.on("click",(()=>{this.run()})),this.dom.$control.liveMode.on("click",(()=>{this.toggleLiveMode()})),this.run()}bindHotKey(){this.dom.$document.on("keydown",(t=>{t.ctrlKey&&"Enter"===t.code&&(t.preventDefault(),this.run())}))}bindLiveMode(){Object.values(this.editors).forEach((t=>{t.ace.on("change",ft.throttle((()=>{this.isLiveMode&&this.run()}),500))}))}bindDragEditor(){this.dom.$control.drag.on("mousedown",(t=>{const e=this.dom.$editor[0].offsetTop,s=t.clientY-e;document.onmousemove=t=>{t.preventDefault();const e=t.clientY-s;e+this.dom.$controls.outerHeight()+40<this.dom.$body.outerHeight()&&e>=36&&this.resizeEditor(e)},document.onmouseup=()=>{document.onmousemove=null}}))}resizeEditor(t){const e=this.dom.$body.outerHeight();void 0===t&&(t=e/2);const s=t,i=e-t,o=this.dom.$controls.outerHeight();this.dom.$preview.outerHeight(s),this.dom.$editor.outerHeight(i),this.dom.$codes.get().forEach((t=>{ft(t).outerHeight(i-o)})),Object.values(this.editors).forEach((t=>{t.ace.resize()}))}setCodeWidth(t){this.dom.$code.html.outerWidth(t),this.dom.$code.css.outerWidth(t),this.dom.$code.javascript.outerWidth(t)}resizeCode(){let t=0;switch(this.editors.html.visible&&t++,this.editors.css.visible&&t++,this.editors.javascript.visible&&t++,t){case 1:this.setCodeWidth("100%");break;case 2:this.setCodeWidth("50%");break;case 3:this.setCodeWidth("33.333333%")}this.editors.html.visible&&this.editors.html.ace.resize(),this.editors.css.visible&&this.editors.css.ace.resize(),this.editors.javascript.visible&&this.editors.javascript.ace.resize()}showCode(t){this.dom.$control[t].addClass("control-active"),this.dom.$code[t].show(),this.editors[t].ace.resize(),this.editors[t].visible=!0,this.resizeCode()}hideCode(t){this.dom.$control[t].removeClass("control-active"),this.dom.$code[t].hide(),this.editors[t].visible=!1,this.resizeCode()}toggleCode(t){this.dom.$control[t].hasClass("control-active")?this.hideCode(t):this.showCode(t)}toggleLiveMode(){this.dom.$control.liveMode[0].checked=this.isLiveMode=!this.isLiveMode}run(){const t=this.editors.html.ace.getValue(),e=this.editors.css.ace.getValue(),s=this.editors.javascript.ace.getValue();ft(".preview iframe").remove(),this.dom.$preview.html('<iframe sandbox="allow-modals allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts" name="iframe" frameborder="0"></iframe>');const i=this.dom.$preview.find("iframe"),o=i[0].contentDocument||i[0].contentWindow.document;o.open(),o.write(`${t}<style>${e}</style><script>${s}<\/script>`),o.close()}}})();