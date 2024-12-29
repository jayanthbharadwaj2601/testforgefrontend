import './polyfills.server.mjs';
import{A as ge,C as he,D as _e,E as L,F as be,G as Ce,H as ve,K as ye,O as xe,Q as T,R as Ee,a as F,b as M,c as C,d as v,e as b,f as g,g as G,h as A,i as l,j as u,k as O,l as I,m as h,n as S,o as y,p as x,q as X,r as V,s as N,x as me}from"./chunk-Q3NF32CC.mjs";import{h as p}from"./chunk-5XUXGTUW.mjs";var Se=["user","model","function","system"];var z=function(e){return e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.OTHER="OTHER",e}(z||{});var E=class extends Error{constructor(n){super(`[GoogleGenerativeAI Error]: ${n}`)}},D=class extends E{constructor(n,t){super(n),this.response=t}},te=class extends E{constructor(n,t,i,o){super(n),this.status=t,this.statusText=i,this.errorDetails=o}},k=class extends E{};var Fe="https://generativelanguage.googleapis.com",Le="v1beta",Be="0.21.0",Qe="genai-js",Q=function(e){return e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents",e}(Q||{}),ue=class{constructor(n,t,i,o,s){this.model=n,this.task=t,this.apiKey=i,this.stream=o,this.requestOptions=s}toString(){var n,t;let i=((n=this.requestOptions)===null||n===void 0?void 0:n.apiVersion)||Le,s=`${((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||Fe}/${i}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}};function Je(e){let n=[];return e?.apiClient&&n.push(e.apiClient),n.push(`${Qe}/${Be}`),n.join(" ")}function qe(e){return p(this,null,function*(){var n;let t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",Je(e.requestOptions)),t.append("x-goog-api-key",e.apiKey);let i=(n=e.requestOptions)===null||n===void 0?void 0:n.customHeaders;if(i){if(!(i instanceof Headers))try{i=new Headers(i)}catch(o){throw new k(`unable to convert customHeaders value ${JSON.stringify(i)} to Headers: ${o.message}`)}for(let[o,s]of i.entries()){if(o==="x-goog-api-key")throw new k(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new k(`Header name ${o} can only be set using the apiClient field`);t.append(o,s)}}return t})}function Ge(e,n,t,i,o,s){return p(this,null,function*(){let r=new ue(e,n,t,i,s);return{url:r.toString(),fetchOptions:Object.assign(Object.assign({},$e(s)),{method:"POST",headers:yield qe(r),body:o})}})}function $(a,c,d,_,j){return p(this,arguments,function*(e,n,t,i,o,s={},r=fetch){let{url:f,fetchOptions:w}=yield Ge(e,n,t,i,o,s);return Ve(f,w,r)})}function Ve(i,o){return p(this,arguments,function*(e,n,t=fetch){let s;try{s=yield t(e,n)}catch(r){Ke(r,e)}return s.ok||(yield Ye(s,e)),s})}function Ke(e,n){let t=e;throw e instanceof te||e instanceof k||(t=new E(`Error fetching from ${n.toString()}: ${e.message}`),t.stack=e.stack),t}function Ye(e,n){return p(this,null,function*(){let t="",i;try{let o=yield e.json();t=o.error.message,o.error.details&&(t+=` ${JSON.stringify(o.error.details)}`,i=o.error.details)}catch{}throw new te(`Error fetching from ${n.toString()}: [${e.status} ${e.statusText}] ${t}`,e.status,e.statusText,i)})}function $e(e){let n={};if(e?.signal!==void 0||e?.timeout>=0){let t=new AbortController;e?.timeout>=0&&setTimeout(()=>t.abort(),e.timeout),e?.signal&&e.signal.addEventListener("abort",()=>{t.abort()}),n.signal=t.signal}return n}function de(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),ee(e.candidates[0]))throw new D(`${H(e)}`,e);return We(e)}else if(e.promptFeedback)throw new D(`Text not available. ${H(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),ee(e.candidates[0]))throw new D(`${H(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),we(e)[0]}else if(e.promptFeedback)throw new D(`Function call not available. ${H(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),ee(e.candidates[0]))throw new D(`${H(e)}`,e);return we(e)}else if(e.promptFeedback)throw new D(`Function call not available. ${H(e)}`,e)},e}function We(e){var n,t,i,o;let s=[];if(!((t=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||t===void 0)&&t.parts)for(let r of(o=(i=e.candidates)===null||i===void 0?void 0:i[0].content)===null||o===void 0?void 0:o.parts)r.text&&s.push(r.text),r.executableCode&&s.push("\n```"+r.executableCode.language+`
`+r.executableCode.code+"\n```\n"),r.codeExecutionResult&&s.push("\n```\n"+r.codeExecutionResult.output+"\n```\n");return s.length>0?s.join(""):""}function we(e){var n,t,i,o;let s=[];if(!((t=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||t===void 0)&&t.parts)for(let r of(o=(i=e.candidates)===null||i===void 0?void 0:i[0].content)===null||o===void 0?void 0:o.parts)r.functionCall&&s.push(r.functionCall);if(s.length>0)return s}var Ze=[z.RECITATION,z.SAFETY,z.LANGUAGE];function ee(e){return!!e.finishReason&&Ze.includes(e.finishReason)}function H(e){var n,t,i;let o="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)o+="Response was blocked",!((n=e.promptFeedback)===null||n===void 0)&&n.blockReason&&(o+=` due to ${e.promptFeedback.blockReason}`),!((t=e.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((i=e.candidates)===null||i===void 0)&&i[0]){let s=e.candidates[0];ee(s)&&(o+=`Candidate was blocked due to ${s.finishReason}`,s.finishMessage&&(o+=`: ${s.finishMessage}`))}return o}function K(e){return this instanceof K?(this.v=e,this):new K(e)}function Xe(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(e,n||[]),o,s=[];return o={},r("next"),r("throw"),r("return"),o[Symbol.asyncIterator]=function(){return this},o;function r(f){i[f]&&(o[f]=function(w){return new Promise(function(m,R){s.push([f,w,m,R])>1||a(f,w)})})}function a(f,w){try{c(i[f](w))}catch(m){j(s[0][3],m)}}function c(f){f.value instanceof K?Promise.resolve(f.value.v).then(d,_):j(s[0][2],f)}function d(f){a("next",f)}function _(f){a("throw",f)}function j(f,w){f(w),s.shift(),s.length&&a(s[0][0],s[0][1])}}var Oe=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function ze(e){let n=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=nt(n),[i,o]=t.tee();return{stream:tt(i),response:et(o)}}function et(e){return p(this,null,function*(){let n=[],t=e.getReader();for(;;){let{done:i,value:o}=yield t.read();if(i)return de(ot(n));n.push(o)}})}function tt(e){return Xe(this,arguments,function*(){let t=e.getReader();for(;;){let{value:i,done:o}=yield K(t.read());if(o)break;yield yield K(de(i))}})}function nt(e){let n=e.getReader();return new ReadableStream({start(i){let o="";return s();function s(){return n.read().then(({value:r,done:a})=>{if(a){if(o.trim()){i.error(new E("Failed to parse stream"));return}i.close();return}o+=r;let c=o.match(Oe),d;for(;c;){try{d=JSON.parse(c[1])}catch{i.error(new E(`Error parsing JSON response: "${c[1]}"`));return}i.enqueue(d),o=o.substring(c[0].length),c=o.match(Oe)}return s()})}}})}function ot(e){let n=e[e.length-1],t={promptFeedback:n?.promptFeedback};for(let i of e){if(i.candidates)for(let o of i.candidates){let s=o.index;if(t.candidates||(t.candidates=[]),t.candidates[s]||(t.candidates[s]={index:o.index}),t.candidates[s].citationMetadata=o.citationMetadata,t.candidates[s].groundingMetadata=o.groundingMetadata,t.candidates[s].finishReason=o.finishReason,t.candidates[s].finishMessage=o.finishMessage,t.candidates[s].safetyRatings=o.safetyRatings,o.content&&o.content.parts){t.candidates[s].content||(t.candidates[s].content={role:o.content.role||"user",parts:[]});let r={};for(let a of o.content.parts)a.text&&(r.text=a.text),a.functionCall&&(r.functionCall=a.functionCall),a.executableCode&&(r.executableCode=a.executableCode),a.codeExecutionResult&&(r.codeExecutionResult=a.codeExecutionResult),Object.keys(r).length===0&&(r.text=""),t.candidates[s].content.parts.push(r)}}i.usageMetadata&&(t.usageMetadata=i.usageMetadata)}return t}function Ne(e,n,t,i){return p(this,null,function*(){let o=yield $(n,Q.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(t),i);return ze(o)})}function Ae(e,n,t,i){return p(this,null,function*(){let s=yield(yield $(n,Q.GENERATE_CONTENT,e,!1,JSON.stringify(t),i)).json();return{response:de(s)}})}function Te(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function Y(e){let n=[];if(typeof e=="string")n=[{text:e}];else for(let t of e)typeof t=="string"?n.push({text:t}):n.push(t);return it(n)}function it(e){let n={role:"user",parts:[]},t={role:"function",parts:[]},i=!1,o=!1;for(let s of e)"functionResponse"in s?(t.parts.push(s),o=!0):(n.parts.push(s),i=!0);if(i&&o)throw new E("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!i&&!o)throw new E("No content is provided for sending chat message.");return i?n:t}function st(e,n){var t;let i={model:n?.model,generationConfig:n?.generationConfig,safetySettings:n?.safetySettings,tools:n?.tools,toolConfig:n?.toolConfig,systemInstruction:n?.systemInstruction,cachedContent:(t=n?.cachedContent)===null||t===void 0?void 0:t.name,contents:[]},o=e.generateContentRequest!=null;if(e.contents){if(o)throw new k("CountTokensRequest must have one of contents or generateContentRequest, not both.");i.contents=e.contents}else if(o)i=Object.assign(Object.assign({},i),e.generateContentRequest);else{let s=Y(e);i.contents=[s]}return{generateContentRequest:i}}function Ie(e){let n;return e.contents?n=e:n={contents:[Y(e)]},e.systemInstruction&&(n.systemInstruction=Te(e.systemInstruction)),n}function rt(e){return typeof e=="string"||Array.isArray(e)?{content:Y(e)}:e}var Re=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],at={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function ct(e){let n=!1;for(let t of e){let{role:i,parts:o}=t;if(!n&&i!=="user")throw new E(`First content should be with role 'user', got ${i}`);if(!Se.includes(i))throw new E(`Each item should include role field. Got ${i} but valid roles are: ${JSON.stringify(Se)}`);if(!Array.isArray(o))throw new E("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new E("Each Content should have at least one part");let s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let a of o)for(let c of Re)c in a&&(s[c]+=1);let r=at[i];for(let a of Re)if(!r.includes(a)&&s[a]>0)throw new E(`Content with role '${i}' can't contain '${a}' part`);n=!0}}var Me="SILENT_ERROR",pe=class{constructor(n,t,i,o={}){this.model=t,this.params=i,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,i?.history&&(ct(i.history),this._history=i.history)}getHistory(){return p(this,null,function*(){return yield this._sendPromise,this._history})}sendMessage(i){return p(this,arguments,function*(n,t={}){var o,s,r,a,c,d;yield this._sendPromise;let _=Y(n),j={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(r=this.params)===null||r===void 0?void 0:r.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(c=this.params)===null||c===void 0?void 0:c.systemInstruction,cachedContent:(d=this.params)===null||d===void 0?void 0:d.cachedContent,contents:[...this._history,_]},f=Object.assign(Object.assign({},this._requestOptions),t),w;return this._sendPromise=this._sendPromise.then(()=>Ae(this._apiKey,this.model,j,f)).then(m=>{var R;if(m.response.candidates&&m.response.candidates.length>0){this._history.push(_);let Z=Object.assign({parts:[],role:"model"},(R=m.response.candidates)===null||R===void 0?void 0:R[0].content);this._history.push(Z)}else{let Z=H(m.response);Z&&console.warn(`sendMessage() was unsuccessful. ${Z}. Inspect response object for details.`)}w=m}),yield this._sendPromise,w})}sendMessageStream(i){return p(this,arguments,function*(n,t={}){var o,s,r,a,c,d;yield this._sendPromise;let _=Y(n),j={safetySettings:(o=this.params)===null||o===void 0?void 0:o.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(r=this.params)===null||r===void 0?void 0:r.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(c=this.params)===null||c===void 0?void 0:c.systemInstruction,cachedContent:(d=this.params)===null||d===void 0?void 0:d.cachedContent,contents:[...this._history,_]},f=Object.assign(Object.assign({},this._requestOptions),t),w=Ne(this._apiKey,this.model,j,f);return this._sendPromise=this._sendPromise.then(()=>w).catch(m=>{throw new Error(Me)}).then(m=>m.response).then(m=>{if(m.candidates&&m.candidates.length>0){this._history.push(_);let R=Object.assign({},m.candidates[0].content);R.role||(R.role="model"),this._history.push(R)}else{let R=H(m);R&&console.warn(`sendMessageStream() was unsuccessful. ${R}. Inspect response object for details.`)}}).catch(m=>{m.message!==Me&&console.error(m)}),w})}};function lt(e,n,t,i){return p(this,null,function*(){return(yield $(n,Q.COUNT_TOKENS,e,!1,JSON.stringify(t),i)).json()})}function ut(e,n,t,i){return p(this,null,function*(){return(yield $(n,Q.EMBED_CONTENT,e,!1,JSON.stringify(t),i)).json()})}function pt(e,n,t,i){return p(this,null,function*(){let o=t.requests.map(r=>Object.assign(Object.assign({},r),{model:n}));return(yield $(n,Q.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),i)).json()})}var ne=class{constructor(n,t,i={}){this.apiKey=n,this._requestOptions=i,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=Te(t.systemInstruction),this.cachedContent=t.cachedContent}generateContent(i){return p(this,arguments,function*(n,t={}){var o;let s=Ie(n),r=Object.assign(Object.assign({},this._requestOptions),t);return Ae(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},s),r)})}generateContentStream(i){return p(this,arguments,function*(n,t={}){var o;let s=Ie(n),r=Object.assign(Object.assign({},this._requestOptions),t);return Ne(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(o=this.cachedContent)===null||o===void 0?void 0:o.name},s),r)})}startChat(n){var t;return new pe(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},n),this._requestOptions)}countTokens(i){return p(this,arguments,function*(n,t={}){let o=st(n,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),t);return lt(this.apiKey,this.model,o,s)})}embedContent(i){return p(this,arguments,function*(n,t={}){let o=rt(n),s=Object.assign(Object.assign({},this._requestOptions),t);return ut(this.apiKey,this.model,o,s)})}batchEmbedContents(i){return p(this,arguments,function*(n,t={}){let o=Object.assign(Object.assign({},this._requestOptions),t);return pt(this.apiKey,this.model,n,o)})}};var B=class{constructor(n){this.apiKey=n}getGenerativeModel(n,t){if(!n.model)throw new E("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ne(this.apiKey,n,t)}getGenerativeModelFromCachedContent(n,t,i){if(!n.name)throw new k("Cached content must contain a `name` field.");if(!n.model)throw new k("Cached content must contain a `model` field.");let o=["model","systemInstruction"];for(let r of o)if(t?.[r]&&n[r]&&t?.[r]!==n[r]){if(r==="model"){let a=t.model.startsWith("models/")?t.model.replace("models/",""):t.model,c=n.model.startsWith("models/")?n.model.replace("models/",""):n.model;if(a===c)continue}throw new k(`Different value for "${r}" specified in modelParams (${t[r]}) and cachedContent (${n[r]})`)}let s=Object.assign(Object.assign({},t),{model:n.model,tools:n.tools,toolConfig:n.toolConfig,systemInstruction:n.systemInstruction,cachedContent:n});return new ne(this.apiKey,s,i)}};var oe=class e{title="testapp";a;constructor(){this.a=[]}execute(){return p(this,null,function*(){let t=new B("AIzaSyAtI4yLa-bZtGu5XRm6Tyxy9Jtphl8uNOE").getGenerativeModel({model:"gemini-1.5-flash"}),i=yield fetch("https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg").then(c=>c.arrayBuffer()),o="can you give me a simple gate exam problem in json format?the json should have following attributes: Question , option a,option b,option c,option d,correct option. Just provide the json as response,no need of other explanatio.Also make sure that you dont attach any markdown text with the response.I want the response in plain text format.also ensure that the question is not part of one of these questions:";for(let c=0;c<this.a.length;c++)o+=" "+this.a[c];let s=yield t.generateContent(o),r=s.response.text().slice(0,s.response.text().length-1),a=JSON.parse(r);this.a.push(a.Question),console.log(a.Question)})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-root"]],standalone:!0,features:[N],decls:1,vars:0,template:function(t,i){t&1&&O(0,"router-outlet")},dependencies:[xe]})};var P=class e{username;password;constructor(){this.username=" ",this.password=" "}static \u0275fac=function(t){return new(t||e)};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})};var J=class e{exam;topic;count;score;total;difficulty;constructor(){this.exam=" ",this.topic=" ",this.count=0,this.score=0,this.total=0,this.difficulty=" "}static \u0275fac=function(t){return new(t||e)};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})};var q=class e{Questions;constructor(){}static \u0275fac=function(t){return new(t||e)};static \u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"})};function dt(e,n){if(e&1&&(l(0,"p"),x(1),u()),e&2){let t=S(2);b(),X(t.question)}}function ft(e,n){if(e&1){let t=I();l(0,"button",9),h("click",function(){C(t);let o=S(2);return v(o.reveal_result("a"))}),x(1),u()}if(e&2){let t=S(2);b(),V("a. ",t.oa,"")}}function mt(e,n){if(e&1){let t=I();l(0,"button",9),h("click",function(){C(t);let o=S(2);return v(o.reveal_result("b"))}),x(1),u()}if(e&2){let t=S(2);b(),V("b. ",t.ob,"")}}function gt(e,n){if(e&1){let t=I();l(0,"button",9),h("click",function(){C(t);let o=S(2);return v(o.reveal_result("c"))}),x(1),u()}if(e&2){let t=S(2);b(),V("c. ",t.oc,"")}}function ht(e,n){if(e&1){let t=I();l(0,"button",9),h("click",function(){C(t);let o=S(2);return v(o.reveal_result("d"))}),x(1),u()}if(e&2){let t=S(2);b(),V("d. ",t.od,"")}}function _t(e,n){if(e&1&&(l(0,"div",5),G(1,dt,2,1,"p",6),l(2,"div",7),G(3,ft,2,1,"button",8)(4,mt,2,1,"button",8),u(),l(5,"div",7),G(6,gt,2,1,"button",8)(7,ht,2,1,"button",8),u()()),e&2){let t=S();b(),A("ngIf",t.flag==!0),b(2),A("ngIf",t.flag==!0),b(),A("ngIf",t.flag==!0),b(2),A("ngIf",t.flag==!0),b(),A("ngIf",t.flag==!0)}}function bt(e,n){if(e&1&&(l(0,"p",10),x(1),u()),e&2){let t=S();b(),X(t.result)}}function Ct(e,n){if(e&1){let t=I();l(0,"button",11),h("click",function(){C(t);let o=S();return v(o.execute())}),x(1,"next"),u()}}function vt(e,n){if(e&1&&(l(0,"p",10),x(1),u()),e&2){let t=S();b(),X(t.result1)}}function yt(e,n){if(e&1){let t=I();l(0,"button",11),h("click",function(){C(t);let o=S();return v(o.go_back())}),x(1,"home"),u()}}var ie=class e{constructor(n,t,i,o,s){this.user=n;this.http=t;this.exam=i;this.router=o;this.questions=s;this.a=s.Questions,this.oa=" ",this.ob=" ",this.oc=" ",this.od=" ",this.ca=" ",this.flag=!1,this.flag1=!1,this.question=" ",this.result=" ",this.result1=" ",this.flag2=!1,this.prompt="can you give me a simple"+this.exam.exam+" exam "+this.exam.topic+" of "+this.exam.difficulty+" difficulty.problem in json format?the json should have following attributes: Question , option_a,option_b,option_c,option_d,correct_option. Just provide the json as response,no need of other explanatio.Also make sure that you dont attach any markdown text with the response.I want the response in plain text format.also ensure that the question is not part of one of these questions:";for(let r=0;r<this.a.length;r++)this.prompt+=" "+this.a[r];this.execute()}title="testapp";a;question;oa;ob;oc;od;ca;prompt;flag;flag1;flag2;result;result1;go_back(){this.router.navigateByUrl("/generate_test")}reveal_result(n){this.result="the correct option is "+this.ca,n==this.ca&&(this.exam.score+=1),this.exam.count-=1,this.flag1=!0}execute(){return p(this,null,function*(){if(this.exam.count==0)this.result1="you scored "+String(this.exam.score)+"/"+String(this.exam.total)+" marks",this.flag2=!0,this.flag=!1,this.flag1=!1,this.exam.score=0,this.exam.total=0;else{let t=new B("AIzaSyAtI4yLa-bZtGu5XRm6Tyxy9Jtphl8uNOE").getGenerativeModel({model:"gemini-1.5-flash"}),i=yield fetch("https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg").then(_=>_.arrayBuffer()),o=yield t.generateContent(this.prompt),s=o.response.text().slice(0,o.response.text().length-1),r=o.response.text();console.log(o.response.text());let a=" ",c=0;for(let _=0;_<r.length&&(r[_]=="{"&&(c+=1),c>0&&(a+=r[_]),!(r[_]=="}"&&(c-=1,c==0)));_++);console.log("lol "+a);let d=JSON.parse(a);this.a.push(d.Question),console.log(d),this.question=d.Question,this.oa=d.option_a,this.ob=d.option_b,this.oc=d.option_c,this.od=d.option_d,this.ca=d.correct_option,this.prompt+=" "+this.question,this.flag=!0,this.flag1=!1,this.http.post("https://testforgebackend-production.up.railway.app/postquestion",{Question:this.question,username:this.user.username},{observe:"response"}).subscribe(_=>{console.log(_.body)}),console.log(this.oa)}})}static \u0275fac=function(t){return new(t||e)(g(P),g(L),g(J),g(T),g(q))};static \u0275cmp=M({type:e,selectors:[["app-homepage"]],standalone:!0,features:[N],decls:7,vars:5,consts:[["src","https://previews.dropbox.com/p/thumb/ACiMFDdq8mo4kegZ3DrrPQpyRSpDOnM5eFC1hQnJUfkyIsaoEIGM6YyI2nIFUblwbEurrWiPpS9dswbsV9OTkz1DUvKZJA6B2bf__JGYimU_IJ5RQ-g0Q6EvZOiZvQkJN0JjSlBizi3LKCq5QJJSBtkSX3idnMWvGqODx9K7Rn0oCRDb9JqhUsYX12TMfd8EHMQe4PHckuo6MgQj_x_JERlMOtAlzRPkoS-G-yiDiwaNNtxiLPWzBydQ5cV9fqXQvnNbrSPBsxwJNdcZK6ModMRvPHVbOmPQ7YwviuiMeDifMnA0mpBuWlPtKjMP8rx42qM/p.jpeg","width","100px","height","100px",1,"img1"],[1,"container"],["class","container1",4,"ngIf"],["class","input1",4,"ngIf"],["class","button2",3,"click",4,"ngIf"],[1,"container1"],[4,"ngIf"],[1,"container2"],["class","button1",3,"click",4,"ngIf"],[1,"button1",3,"click"],[1,"input1"],[1,"button2",3,"click"]],template:function(t,i){t&1&&(O(0,"img",0),l(1,"div",1),G(2,_t,8,5,"div",2)(3,bt,2,1,"p",3)(4,Ct,2,0,"button",4)(5,vt,2,1,"p",3)(6,yt,2,0,"button",4),u()),t&2&&(b(2),A("ngIf",i.flag==!0),b(),A("ngIf",i.flag1==!0),b(),A("ngIf",i.flag==!0),b(),A("ngIf",i.flag2==!0),b(),A("ngIf",i.flag2==!0))},dependencies:[_e,he],styles:[".container1[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;border-radius:10px;border-style:none;padding:2%;box-shadow:5px 5px 5px gray;background-color:#0c8189;position:relative;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:500;color:#fff}body[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:500}.button1[_ngcontent-%COMP%]{color:#fff;background-color:#084f54;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;border-radius:10px;padding:2%;border-style:none;font-weight:500}.button2[_ngcontent-%COMP%]{color:#fff;background-color:#084f54;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;border-radius:10px;padding:2%;border-style:none;font-weight:500;width:10%}.input1[_ngcontent-%COMP%]{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:500}.container2[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:5%}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.img1[_ngcontent-%COMP%]{border-style:none;border-radius:10px;box-shadow:2px 2px 2px #343333}"]})};var re=class e{constructor(n,t){this.exam=n;this.router=t}generate_test(n,t,i,o){this.exam.exam=n,this.exam.topic=t,this.exam.count=Number(i),this.exam.difficulty=o,this.exam.total=this.exam.count,this.router.navigateByUrl("/test")}static \u0275fac=function(t){return new(t||e)(g(J),g(T))};static \u0275cmp=M({type:e,selectors:[["app-homepage1"]],standalone:!0,features:[N],decls:12,vars:0,consts:[["question",""],["topic",""],["count",""],["difficulty",""],[1,"container2"],["src","https://previews.dropbox.com/p/thumb/ACiMFDdq8mo4kegZ3DrrPQpyRSpDOnM5eFC1hQnJUfkyIsaoEIGM6YyI2nIFUblwbEurrWiPpS9dswbsV9OTkz1DUvKZJA6B2bf__JGYimU_IJ5RQ-g0Q6EvZOiZvQkJN0JjSlBizi3LKCq5QJJSBtkSX3idnMWvGqODx9K7Rn0oCRDb9JqhUsYX12TMfd8EHMQe4PHckuo6MgQj_x_JERlMOtAlzRPkoS-G-yiDiwaNNtxiLPWzBydQ5cV9fqXQvnNbrSPBsxwJNdcZK6ModMRvPHVbOmPQ7YwviuiMeDifMnA0mpBuWlPtKjMP8rx42qM/p.jpeg",1,"img1"],[1,"container1"],["type","text","placeholder","Enter the exam",1,"input1"],["type","text","placeholder","Enter the topic",1,"input1"],["type","number","placeholder","enter no. of questions",1,"input1"],["type","text","placeholder","enter difficulty",1,"input1"],["type","button","value","Begin",1,"button1",3,"click"]],template:function(t,i){if(t&1){let o=I();l(0,"div",4),O(1,"img",5),u(),l(2,"div",6),O(3,"input",7,0)(5,"input",8,1)(7,"input",9,2)(9,"input",10,3),l(11,"input",11),h("click",function(){C(o);let r=y(4),a=y(6),c=y(8),d=y(10);return v(i.generate_test(r.value,a.value,c.value,d.value))}),u()()}},styles:[".container1[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:20%;gap:10px;border-radius:10px;border-style:none;padding:2%;box-shadow:5px 5px 5px gray;background-color:#0c8189;position:relative;left:35%}.input1[_ngcontent-%COMP%]{padding:4%;border-radius:10px;border-style:none}.button1[_ngcontent-%COMP%]{color:#fff;background-color:#084f54;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;border-radius:10px;padding:2%;border-style:none;font-weight:500}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1px}.container2[_ngcontent-%COMP%]{position:relative;left:41.5%;width:20%}.img1[_ngcontent-%COMP%]{width:50%}"]})};var ae=class e{constructor(n){this.router=n}login(){this.router.navigateByUrl("login")}signup(){this.router.navigateByUrl("signup")}static \u0275fac=function(t){return new(t||e)(g(T))};static \u0275cmp=M({type:e,selectors:[["app-home"]],standalone:!0,features:[N],decls:7,vars:0,consts:[[1,"container2"],["src","https://previews.dropbox.com/p/thumb/ACiMFDdq8mo4kegZ3DrrPQpyRSpDOnM5eFC1hQnJUfkyIsaoEIGM6YyI2nIFUblwbEurrWiPpS9dswbsV9OTkz1DUvKZJA6B2bf__JGYimU_IJ5RQ-g0Q6EvZOiZvQkJN0JjSlBizi3LKCq5QJJSBtkSX3idnMWvGqODx9K7Rn0oCRDb9JqhUsYX12TMfd8EHMQe4PHckuo6MgQj_x_JERlMOtAlzRPkoS-G-yiDiwaNNtxiLPWzBydQ5cV9fqXQvnNbrSPBsxwJNdcZK6ModMRvPHVbOmPQ7YwviuiMeDifMnA0mpBuWlPtKjMP8rx42qM/p.jpeg",1,"img1"],[1,"container1"],[1,"button1",3,"click"]],template:function(t,i){t&1&&(l(0,"div",0),O(1,"img",1),u(),l(2,"div",2)(3,"button",3),h("click",function(){return i.login()}),x(4,"Login"),u(),l(5,"button",3),h("click",function(){return i.signup()}),x(6,"Signup"),u()())},styles:[".container1[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:20%;gap:10px;border-radius:10px;border-style:none;padding:2%;box-shadow:5px 5px 5px gray;background-color:#0c8189;position:relative;left:35%}.input1[_ngcontent-%COMP%]{padding:4%;border-radius:10px;border-style:none}.button1[_ngcontent-%COMP%]{color:#fff;background-color:#084f54;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;border-radius:10px;padding:2%;border-style:none;font-weight:500}.container2[_ngcontent-%COMP%]{position:relative;left:41.5%;width:20%}.img1[_ngcontent-%COMP%]{width:50%}"]})};var ce=class e{constructor(n,t,i,o){this.user=n;this.http=t;this.router=i;this.questions=o}resp;login(n,t){this.http.post("https://testforgebackend-production.up.railway.app/login",{username:n,password:t},{observe:"response"}).subscribe(i=>{this.resp=i.body,this.resp.username!=null?(this.user.username=this.resp.username,this.user.password=this.resp.password):(this.user.username=" ",this.user.password=" "),console.log(this.resp)})}login1(){this.user.username!=" "&&this.user.password!=" "&&(this.http.post("https://testforgebackend-production.up.railway.app/getquestions",{username:this.user.username,password:this.user.password},{observe:"response"}).subscribe(n=>{this.questions.Questions=n.body}),this.router.navigateByUrl("generate_test"))}static \u0275fac=function(t){return new(t||e)(g(P),g(L),g(T),g(q))};static \u0275cmp=M({type:e,selectors:[["app-login"]],standalone:!0,features:[N],decls:10,vars:0,consts:[["username",""],["password",""],[1,"container"],[1,"container2"],["src","https://previews.dropbox.com/p/thumb/ACiMFDdq8mo4kegZ3DrrPQpyRSpDOnM5eFC1hQnJUfkyIsaoEIGM6YyI2nIFUblwbEurrWiPpS9dswbsV9OTkz1DUvKZJA6B2bf__JGYimU_IJ5RQ-g0Q6EvZOiZvQkJN0JjSlBizi3LKCq5QJJSBtkSX3idnMWvGqODx9K7Rn0oCRDb9JqhUsYX12TMfd8EHMQe4PHckuo6MgQj_x_JERlMOtAlzRPkoS-G-yiDiwaNNtxiLPWzBydQ5cV9fqXQvnNbrSPBsxwJNdcZK6ModMRvPHVbOmPQ7YwviuiMeDifMnA0mpBuWlPtKjMP8rx42qM/p.jpeg",1,"img1"],[1,"container1"],["type","text","placeholder","username",1,"input1",3,"keyup"],["type","password","placeholder","password",1,"input1",3,"keyup"],[1,"button1",3,"click"]],template:function(t,i){if(t&1){let o=I();l(0,"div",2)(1,"div",3),O(2,"img",4),u(),l(3,"div",5)(4,"input",6,0),h("keyup",function(){C(o);let r=y(5),a=y(7);return v(i.login(r.value,a.value))}),u(),l(6,"input",7,1),h("keyup",function(){C(o);let r=y(5),a=y(7);return v(i.login(r.value,a.value))}),u(),l(8,"button",8),h("click",function(){return C(o),v(i.login1())}),x(9,"Login"),u()()()}},styles:[".container1[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:20%;gap:10px;border-radius:10px;border-style:none;padding:2%;box-shadow:5px 5px 5px gray;background-color:#0c8189;position:relative;left:35%}.container2[_ngcontent-%COMP%]{position:relative;left:41.5%;width:20%}.img1[_ngcontent-%COMP%]{width:50%}.input1[_ngcontent-%COMP%]{padding:4%;border-radius:10px;border-style:none}.button1[_ngcontent-%COMP%]{color:#fff;background-color:#084f54;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;border-radius:10px;padding:2%;border-style:none;font-weight:500}"]})};var le=class e{constructor(n,t,i){this.http=n;this.router=t;this.user=i}resp;signup1(n,t){this.http.post("https://testforgebackend-production.up.railway.app/getuser",{username:n,password:t},{observe:"response"}).subscribe(i=>{this.resp=i.body,this.resp.username!=null?(this.user.username=this.resp.username,this.user.password=this.resp.password):(this.user.username=" ",this.user.password=" "),console.log(this.resp)})}signup(n,t){this.user.username==" "&&(this.user.username=n,this.user.password=t,this.http.post("https://testforgebackend-production.up.railway.app/signup",{username:this.user.username,password:this.user.password},{observe:"response"}).subscribe(i=>{this.resp=i.body,console.log(this.resp)}),this.router.navigateByUrl("generate_test"))}static \u0275fac=function(t){return new(t||e)(g(L),g(T),g(P))};static \u0275cmp=M({type:e,selectors:[["app-signup"]],standalone:!0,features:[N],decls:9,vars:0,consts:[["username",""],["password",""],[1,"container2"],["src","https://previews.dropbox.com/p/thumb/ACiMFDdq8mo4kegZ3DrrPQpyRSpDOnM5eFC1hQnJUfkyIsaoEIGM6YyI2nIFUblwbEurrWiPpS9dswbsV9OTkz1DUvKZJA6B2bf__JGYimU_IJ5RQ-g0Q6EvZOiZvQkJN0JjSlBizi3LKCq5QJJSBtkSX3idnMWvGqODx9K7Rn0oCRDb9JqhUsYX12TMfd8EHMQe4PHckuo6MgQj_x_JERlMOtAlzRPkoS-G-yiDiwaNNtxiLPWzBydQ5cV9fqXQvnNbrSPBsxwJNdcZK6ModMRvPHVbOmPQ7YwviuiMeDifMnA0mpBuWlPtKjMP8rx42qM/p.jpeg",1,"img1"],[1,"container1"],["type","text","placeholder","username",1,"input1",3,"keyup"],["type","password","placeholder","password",1,"input1",3,"keyup"],[1,"button1",3,"click"]],template:function(t,i){if(t&1){let o=I();l(0,"div",2),O(1,"img",3),u(),l(2,"div",4)(3,"input",5,0),h("keyup",function(){C(o);let r=y(4),a=y(6);return v(i.signup1(r.value,a.value))}),u(),l(5,"input",6,1),h("keyup",function(){C(o);let r=y(4),a=y(6);return v(i.signup1(r.value,a.value))}),u(),l(7,"button",7),h("click",function(){C(o);let r=y(4),a=y(6);return v(i.signup(r.value,a.value))}),x(8,"Signup"),u()()}},styles:[".container1[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:20%;gap:10px;border-radius:10px;border-style:none;padding:2%;box-shadow:5px 5px 5px gray;background-color:#0c8189;position:relative;left:35%}.input1[_ngcontent-%COMP%]{padding:4%;border-radius:10px;border-style:none}.button1[_ngcontent-%COMP%]{color:#fff;background-color:#084f54;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;border-radius:10px;padding:2%;border-style:none;font-weight:500}.container2[_ngcontent-%COMP%]{position:relative;left:41.5%;width:20%}.img1[_ngcontent-%COMP%]{width:50%}"]})};var Ue=[{path:"test",component:ie},{path:"generate_test",component:re},{path:"",component:ae},{path:"login",component:ce},{path:"signup",component:le}];var Pe={providers:[me({eventCoalescing:!0}),Ee(Ue),ve(),be()]};var xt={providers:[ye()]},je=ge(Pe,xt);var Et=()=>Ce(oe,je),an=Et;export{an as a};
