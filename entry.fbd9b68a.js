parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"p2Eo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.$=((e,o=document.body)=>{var t;return null!==(t=o.querySelector(e))&&void 0!==t?t:void 0}),exports.$$=((e,o=document.body)=>[...o.querySelectorAll(e)]),exports.ready=(()=>new Promise(e=>document.addEventListener("DOMContentLoaded",e,{once:!0}))),exports.wait_frame=(()=>new Promise(requestAnimationFrame)),exports.download=((e,o="")=>{const t=document.createElement("a");t.style.display="none",t.target="_blank",t.download=o,t.href=e,document.body.append(t),t.click(),t.remove()});
},{}],"lFNe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fst=(t=>t[0]),exports.snd=(t=>t[1]),exports.last=(t=>t[t.length-1]),exports.range=((t,e,r=1)=>{const o=[];let s=t;for(;s<=e;)o.push(s),s+=r;return o}),exports.enumerate=(t=>t.map((t,e)=>[e,t])),exports.map=((t,e)=>e.map(t)),exports.flat_map=((t,e)=>e.flatMap(t)),exports.compact_map=((t,e)=>{const r=[];for(const o of e){const e=t(o);void 0!==e&&r.push(e)}return r}),exports.filter=((t,e)=>e.filter(t)),exports.reduce=((t,e,r)=>r.reduce(t,e)),exports.count=((t,e)=>exports.reduce((e,r)=>e+(t(r)?1:0),0,e)),exports.count_by=((t,e)=>exports.reduce((e,r)=>e+t(r),0,e)),exports.zip=((t,e)=>{const r=Math.min(t.length,e.length),o=[];for(const s in exports.range(0,r-1))o.push([t[s],e[s]]);return o}),exports.find_by=((t,e)=>e.find(t)),exports.sort_by=((t,e)=>{return[...e].sort((e,r)=>t(e)-t(r))}),exports.sort_by_keys=((t,e)=>{return[...e].sort((e,r)=>{const o=exports.zip(t(e),t(r));for(const[t,s]of o)if(t!==s)return t-s;return 0})}),exports.unique_by=((t,e)=>{const r=new Set,o=[];for(const s of e){const e=t(s);r.has(e)||o.push(s),r.add(e)}return o}),exports.any=((t,e)=>e.some(t)),exports.all=((t,e)=>e.every(t)),exports.take=((t,e)=>e.filter((e,r)=>r<t)),exports.drop=((t,e)=>e.filter((e,r)=>r>=t)),exports.chunk=((t,e)=>{const r=[];for(const[o,s]of exports.enumerate(e))o%t==0&&r.push([]),exports.last(r).push(s);return r}),exports.join=((t,e)=>e.join(t)),exports.partition=((t,e)=>{var r;const o=Object.create(null);for(const s of e){const e=t(s);(null!==(r=o[e])&&void 0!==r?r:o[e]=[]).push(s)}return o}),exports.generate=((t,e)=>{const r=[];for(const o of exports.range(1,e))r.push(t());return r});
},{}],"DQgq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.id=(e=>e),exports.str=(e=>e.toString()),exports.future=(()=>{let e=void 0,r=void 0;return{promise:new Promise((t,o)=>{e=(e=>t(e)),r=(e=>o(e))}),resolve:e,reject:r}}),exports.sleep=(e=>new Promise(r=>setTimeout(r,e))),exports.counter=(()=>(e=>()=>e+=1)(0)),exports.timer=(()=>{let e=performance.now();return()=>{const r=e;return(e=performance.now())-r}});
},{}],"dcoe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=require("./list");exports.float=((t,o)=>Math.random()*(o-t)+t),exports.int=((t,o)=>Math.floor(Math.random()*(o-t+1))+t),exports.choice=(t=>t[exports.int(0,t.length-1)]),exports.choices=((o,e)=>{const r=[];for(const s of t.range(1,o))r.push(exports.choice(e));return r}),exports.shuffle=(t=>{const o=[...t];for(let e=o.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[o[e],o[t]]=[o[t],o[e]]}return o});
},{"./list":"lFNe"}],"H8YH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Render=(e=>(t={},...r)=>{const s=t.txt?{...t,textContent:t.txt}:t,{style:a={},dataset:n={},...p}=s,o=r.filter(e=>e),i=(t=>()=>{if(t)return t;const r=t=document.createElement(e);return Object.entries(p).map(([e,t])=>r[e]=t),Object.entries(a).map(([e,t])=>r.style[e]=t),Object.entries(n).map(([e,t])=>r.dataset[e]=t),o.map(e=>r.append(e())),r})(void 0);return Object.assign(i,{tagName:e,props:s,children:o})});const e=(e,t)=>{const r=e(),{style:s={},dataset:a={},...n}=e.props,{style:p={},dataset:o={},...i}=t.props;Object.entries(n).map(([e])=>void 0===i[e]&&(r[e]=void 0)),Object.entries(i).map(([e,t])=>n[e]!==t&&(r[e]=t)),Object.entries(s).map(([e])=>void 0===p[e]&&r.style.removeProperty(e)),Object.entries(p).map(([e,t])=>s[e]!==t&&(r.style[e]=t)),Object.entries(a).map(([e])=>void 0===o[e]&&Reflect.deleteProperty(r.dataset,e)),Object.entries(o).map(([e,t])=>a[e]!==t&&(r.dataset[e]=t))},t=(e,t)=>[...Array(Math.max(e.length,t.length)).keys()].map((r,s)=>[e[s],t[s]]),r=(s,a)=>{e(s,a);const n=s(),p=t(s.children,a.children).map(([e,t])=>e&&!t?e().remove():!e&&t?(n.append(t()),t):e.tagName!==t.tagName?(e().replaceWith(t()),t):r(e,t)).filter(e=>e);return Object.assign(s,{props:a.props,children:p})};exports.NewRNode=((e,t={},...r)=>Object.assign(()=>e,{tagName:e.tagName,props:t,children:r.filter(e=>e)})),exports.NewMountPoint=(e=>{let t=exports.NewRNode(e);return(...s)=>t=r(t,exports.NewRNode(e,{},...s))});
},{}],"iJnK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./list");exports.cn=((...t)=>{const s=[];for(const e of t)if("string"==typeof e)s.push(e);else for(const[t,o]of Object.entries(e))o&&s.push(t);return e.join(" ",s)});
},{"./list":"lFNe"}],"KzVc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./noact");exports.a=e.Render("a"),exports.abbr=e.Render("abbr"),exports.acronym=e.Render("acronym"),exports.address=e.Render("address"),exports.applet=e.Render("applet"),exports.area=e.Render("area"),exports.article=e.Render("article"),exports.aside=e.Render("aside"),exports.audio=e.Render("audio"),exports.b=e.Render("b"),exports.base=e.Render("base"),exports.basefont=e.Render("basefont"),exports.bdi=e.Render("bdi"),exports.bdo=e.Render("bdo"),exports.bgsound=e.Render("bgsound"),exports.big=e.Render("big"),exports.blink=e.Render("blink"),exports.blockquote=e.Render("blockquote"),exports.body=e.Render("body"),exports.br=e.Render("br"),exports.button=e.Render("button"),exports.canvas=e.Render("canvas"),exports.caption=e.Render("caption"),exports.center=e.Render("center"),exports.cite=e.Render("cite"),exports.code=e.Render("code"),exports.col=e.Render("col"),exports.colgroup=e.Render("colgroup"),exports.command=e.Render("command"),exports.content=e.Render("content"),exports.data=e.Render("data"),exports.datalist=e.Render("datalist"),exports.dd=e.Render("dd"),exports.del=e.Render("del"),exports.details=e.Render("details"),exports.dfn=e.Render("dfn"),exports.dialog=e.Render("dialog"),exports.dir=e.Render("dir"),exports.div=e.Render("div"),exports.dl=e.Render("dl"),exports.dt=e.Render("dt"),exports.element=e.Render("element"),exports.em=e.Render("em"),exports.embed=e.Render("embed"),exports.fieldset=e.Render("fieldset"),exports.figcaption=e.Render("figcaption"),exports.figure=e.Render("figure"),exports.font=e.Render("font"),exports.footer=e.Render("footer"),exports.form=e.Render("form"),exports.frame=e.Render("frame"),exports.frameset=e.Render("frameset"),exports.h1=e.Render("h1"),exports.h2=e.Render("h2"),exports.h3=e.Render("h3"),exports.h4=e.Render("h4"),exports.h5=e.Render("h5"),exports.h6=e.Render("h6"),exports.head=e.Render("head"),exports.header=e.Render("header"),exports.hgroup=e.Render("hgroup"),exports.hr=e.Render("hr"),exports.html=e.Render("html"),exports.i=e.Render("i"),exports.iframe=e.Render("iframe"),exports.image=e.Render("image"),exports.img=e.Render("img"),exports.input=e.Render("input"),exports.ins=e.Render("ins"),exports.isindex=e.Render("isindex"),exports.kbd=e.Render("kbd"),exports.keygen=e.Render("keygen"),exports.label=e.Render("label"),exports.legend=e.Render("legend"),exports.li=e.Render("li"),exports.link=e.Render("link"),exports.listing=e.Render("listing"),exports.main=e.Render("main"),exports.map=e.Render("map"),exports.mark=e.Render("mark"),exports.marquee=e.Render("marquee"),exports.menu=e.Render("menu"),exports.menuitem=e.Render("menuitem"),exports.meta=e.Render("meta"),exports.meter=e.Render("meter"),exports.multicol=e.Render("multicol"),exports.nav=e.Render("nav"),exports.nextid=e.Render("nextid"),exports.nobr=e.Render("nobr"),exports.noembed=e.Render("noembed"),exports.noframes=e.Render("noframes"),exports.noscript=e.Render("noscript"),exports.object=e.Render("object"),exports.ol=e.Render("ol"),exports.optgroup=e.Render("optgroup"),exports.option=e.Render("option"),exports.output=e.Render("output"),exports.p=e.Render("p"),exports.param=e.Render("param"),exports.picture=e.Render("picture"),exports.plaintext=e.Render("plaintext"),exports.pre=e.Render("pre"),exports.progress=e.Render("progress"),exports.q=e.Render("q"),exports.rb=e.Render("rb"),exports.rp=e.Render("rp"),exports.rt=e.Render("rt"),exports.rtc=e.Render("rtc"),exports.ruby=e.Render("ruby"),exports.s=e.Render("s"),exports.samp=e.Render("samp"),exports.script=e.Render("script"),exports.section=e.Render("section"),exports.select=e.Render("select"),exports.shadow=e.Render("shadow"),exports.slot=e.Render("slot"),exports.small=e.Render("small"),exports.source=e.Render("source"),exports.spacer=e.Render("spacer"),exports.span=e.Render("span"),exports.strike=e.Render("strike"),exports.strong=e.Render("strong"),exports.style=e.Render("style"),exports.sub=e.Render("sub"),exports.summary=e.Render("summary"),exports.sup=e.Render("sup"),exports.table=e.Render("table"),exports.tbody=e.Render("tbody"),exports.td=e.Render("td"),exports.template=e.Render("template"),exports.textarea=e.Render("textarea"),exports.tfoot=e.Render("tfoot"),exports.th=e.Render("th"),exports.thead=e.Render("thead"),exports.time=e.Render("time"),exports.title=e.Render("title"),exports.tr=e.Render("tr"),exports.track=e.Render("track"),exports.tt=e.Render("tt"),exports.u=e.Render("u"),exports.ul=e.Render("ul"),exports.video=e.Render("video"),exports.wbr=e.Render("wbr"),exports.xmp=e.Render("xmp");
},{"./noact":"H8YH"}],"BwW8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=require("nda/dist/isomorphic/dom"),e=require("../../../src/noact-elements");exports.Readme=(({})=>e.section({id:"readme",className:t.cn("lightly-bordered")},e.div({id:"readme-header",className:t.cn("px-6","py-1")},e.h4({className:"mp-0"},e.i({className:"fas fa-book"}),e.span({txt:" README.md"}))),e.div({id:"readme-body",className:t.cn("px-6","pt-1")},e.h1({},e.a({href:"https://ms-jpq.github.io/noact"},e.strike({txt:"Re"}),e.span({txt:"Noact"}))),e.hr(),e.p({txt:"Noact is a minimal self-rendering Virtual DOM library."}),e.ul({},e.li({},e.b({txt:"Declarative:"}),e.span({txt:"Pretty much like React, without the JSX compilation of course, hence the name."})),e.li({},e.b({txt:"Type safe:"}),e.span({txt:"Noact is completely typesafe, which means you get"}),e.a({txt:"static type checking",href:"https://github.com/ms-jpq/Noact/blob/master/_assets/auto_complete.gif"}),e.span({txt:"for free!"})),e.li({},e.b({txt:"Simple:"}),e.a({txt:"Only 60 lines",href:"https://github.com/ms-jpq/Noact/blob/master/src/noact.ts"}),e.span({txt:"of type declarations & rendering code. (and 10ish lines of code-gen code)"}))),e.hr(),e.h2({txt:"How it feels to write Noact"}),e.img({className:"img-responsive",src:"https://raw.githubusercontent.com/ms-jpq/Noact/master/_assets/demo.gif"}),e.p({},e.b({txt:"- Explosions -"})),e.p({},e.span({txt:"Even has support for"}),e.b({txt:"style auto complete"})),e.img({className:"img-responsive",src:"https://raw.githubusercontent.com/ms-jpq/Noact/master/_assets/type_demo.png"}),e.hr(),e.h2({txt:"Source code"}),e.ul({},e.li({},e.a({txt:"Rendering Engine",href:"https://github.com/ms-jpq/noact/tree/master/src"})),e.li({},e.a({txt:"This Page",href:"https://github.com/ms-jpq/noact/tree/master/example"}))))));
},{"nda/dist/isomorphic/dom":"iJnK","../../../src/noact-elements":"KzVc"}],"IfIQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.non_empty=(e=>""!==(null!=e?e:""));
},{}],"er62":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../../../../src/noact-elements"),t=require("nda/dist/isomorphic/dom"),o=require("nda/dist/isomorphic/validation");exports.TodoInput=(({oninput:n,idx:a})=>{const i=`todo-input-${a}`;return e.div({className:t.cn("todo-input","px-6","lab-inp-btn")},e.label({htmlFor:i,txt:"I need to:"}),e.div({className:t.cn("input-group","d-flex","flex-row")},e.input({id:i,className:"flex-grow-1",placeholder:"...",onchange:({target:e})=>{const t=e,{value:a}=t;o.non_empty(a)&&n(a),t.value=""}}),e.button({className:t.cn("clickable","flex-shrink-1")},e.i({className:"fas fa-reply"}))))});
},{"../../../../src/noact-elements":"KzVc","nda/dist/isomorphic/dom":"iJnK","nda/dist/isomorphic/validation":"IfIQ"}],"Zdet":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../../../../src/noact-elements"),s=require("nda/dist/isomorphic/dom"),c=require("nda/dist/isomorphic/list");exports.TodoListing=(({ontoggle:o,onremove:t,items:a})=>e.div({className:s.cn("todo-listing","px-6")},e.ol({},...c.map(c=>e.li({className:s.cn("d-grid","grid-col","ac-baseline","ji-start","border-top-solid","border-thin","pt-4","py-1")},e.div({className:s.cn("todo-message","clickable"),onclick:()=>o(c)},e.i({className:s.cn("clickable","todo"===c.status?"far fa-check-square":"fas fa-check-square")}),e.span({txt:c.message})),e.button({className:s.cn("clickable","border-clear","js-end","font-w900"),txt:"×",onclick:()=>t(c)})),a))));
},{"../../../../src/noact-elements":"KzVc","nda/dist/isomorphic/dom":"iJnK","nda/dist/isomorphic/list":"lFNe"}],"mXUh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../../../../src/noact-elements"),t=require("nda/dist/isomorphic/dom");exports.TodoSelect=(({onselect:o,viewing:c})=>e.div({className:t.cn("todo-select","px-6","mt-4")},e.button({className:t.cn({active:"todo"===c}),onclick:()=>o("todo")},e.h4({txt:"Remaining"})),e.button({className:t.cn({active:"done"===c}),onclick:()=>o("done")},e.h4({txt:"Done"})),e.button({className:t.cn({active:"all"===c}),onclick:()=>o("all")},e.h4({txt:"Showall"}))));
},{"../../../../src/noact-elements":"KzVc","nda/dist/isomorphic/dom":"iJnK"}],"iKYQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("nda/dist/isomorphic/dom"),o=require("../../../../src/noact-elements"),t=require("./00_input"),i=require("./02_listing"),s=require("./01_select");exports.Todo=(({oninput:n,onselect:c,ontoggle:d,onremove:r,viewing:l,items:a,idx:m,todo_sections:p,still_todo_count:u})=>o.section({className:e.cn("todo","lightly-bordered")},o.div({className:e.cn("todo-header","d-grid","grid-col","jc-space-between","ai-baseline","px-6")},o.h2({className:e.cn("todo-title","mb-0"),txt:"TODO"}),o.p({className:e.cn("todo-meta","text-right"),txt:`${m} of ${p} synchronized`})),t.TodoInput({oninput:n,idx:m}),s.TodoSelect({onselect:c,viewing:l}),i.TodoListing({ontoggle:d,onremove:r,items:a}),o.p({className:e.cn("todo-info","px-6","my-1"),txt:`${u} items left`})));
},{"nda/dist/isomorphic/dom":"iJnK","../../../../src/noact-elements":"KzVc","./00_input":"er62","./02_listing":"Zdet","./01_select":"mXUh"}],"QjaO":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),e=[1,100],exports.MIN_TODOS=e[0],exports.MAX_TODOS=e[1];
},{}],"VEPL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("nda/dist/isomorphic/dom"),t=require("nda/dist/isomorphic/prelude"),r=require("../../../src/noact-elements"),n=require("../state");exports.Benchmark=(({})=>r.output({className:"benchmark-output"})),exports.BenchmarkControl=(({on_new_bench:a,onrandom:c,todo_sections:i})=>{return r.section({id:"benchmark-control",className:e.cn("d-grid","ai-centre","jc-space-between","lightly-bordered","px-6","py-2","row-gap-1","col-gap-4")},r.h2({id:"benchmark-title",txt:"Benchmark"}),r.div({id:"benchmark-input",className:e.cn("d-flex","ai-baseline","flex-wrap")},r.label({htmlFor:"benchmark-input-input",txt:`Put in ${n.MIN_TODOS}-${n.MAX_TODOS}:`}),r.div({className:e.cn("input-group","d-flex","flex-grow-1")},r.input({id:"benchmark-input-input",type:"number",className:e.cn("flex-grow-1","text-right"),min:t.str(n.MIN_TODOS),max:t.str(n.MAX_TODOS),value:t.str(i),onchange:({target:e})=>{const{value:t}=e;a(parseInt(t))}}),r.button({className:e.cn("clickable","border-thin","flex-shrink-1"),txt:"Random",onclick:c}))),exports.Benchmark({}))});
},{"nda/dist/isomorphic/dom":"iJnK","nda/dist/isomorphic/prelude":"DQgq","../../../src/noact-elements":"KzVc","../state":"QjaO"}],"dY1R":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const o=require("nda/dist/isomorphic/dom"),e=require("../../../src/noact-elements"),n=require("nda/dist/isomorphic/list"),t=require("../components/readme"),i=require("../components/todo/todo"),r=require("../components/benchmark");exports.Body=(({todo_sections:s,viewing:c,items:d,on_new_bench:m,onrandom:a,oninput:l,ontoggle:u,onremove:_,onselect:p,still_todo_count:g})=>e.main({className:o.cn("d-grid","row-gap-8")},t.Readme({}),r.BenchmarkControl({todo_sections:s,on_new_bench:m,onrandom:a}),...n.map(o=>i.Todo({idx:o,viewing:c,items:d,oninput:l,onremove:_,onselect:p,ontoggle:u,todo_sections:s,still_todo_count:g}),n.range(1,s))));
},{"nda/dist/isomorphic/dom":"iJnK","../../../src/noact-elements":"KzVc","nda/dist/isomorphic/list":"lFNe","../components/readme":"BwW8","../components/todo/todo":"iKYQ","../components/benchmark":"VEPL"}],"xj3X":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../../../src/noact-elements");exports.Footer=(({})=>e.footer({},e.p({className:"text-centre"},e.span({txt:"© "}),e.a({txt:"ms-jpq",href:"https://ms-jpq.github.io"}))));
},{"../../../src/noact-elements":"KzVc"}],"bhQh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("../components/benchmark"),r=require("nda/dist/isomorphic/dom"),t=require("../../../src/noact-elements");exports.Header=(({})=>t.header({className:r.cn("d-grid","text-centre","ji-centre","lightly-bordered","py-8")},t.h1({className:"font-w500",txt:"This Page is Rendered Using Noact"}),e.Benchmark({})));
},{"../components/benchmark":"VEPL","nda/dist/isomorphic/dom":"iJnK","../../../src/noact-elements":"KzVc"}],"RczK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./body"),t=require("nda/dist/isomorphic/dom"),r=require("../../../src/noact-elements"),o=require("nda/dist/isomorphic/list"),s=require("./footer"),i=require("./header"),a=(e,t,r)=>{switch(e){case"all":return!0;case"todo":return r.last_update>t||"todo"===r.status;case"done":return r.last_update>t||"done"===r.status}};exports.Page=(({last_view_update:d,header:u,body:n,footer:c})=>{const l=o.filter(e=>a(n.viewing,d,e),n.items);return r.div({id:"container",className:t.cn("d-grid","mx-auto","mt-12","row-gap-12")},i.Header(u),e.Body({...n,items:l}),s.Footer(c))});
},{"./body":"dY1R","nda/dist/isomorphic/dom":"iJnK","../../../src/noact-elements":"KzVc","nda/dist/isomorphic/list":"lFNe","./footer":"xj3X","./header":"bhQh"}],"vR93":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t=require("nda/dist/browser/dom"),e=require("nda/dist/isomorphic/list"),s=require("nda/dist/isomorphic/prelude"),o=require("nda/dist/isomorphic/rand"),a=require("../../src/noact"),i=require("./layout/page"),n=require("./state"),d=s.counter(),r=a.NewMountPoint(document.body),u=t=>{switch(t){case"todo":return 1;case"done":return 2;default:throw new Error("invaild status")}},c=t=>e.sort_by_keys(t=>[u(t.status),t.last_update],t),m=c(e.map(t=>({...t,id:d(),last_update:d()}),o.shuffle([{message:"Printer ran out of juice again",status:"todo"},{message:"Something about neighbour's cat",status:"todo"},{message:"Go to bed before 1AM",status:"todo"},{message:"Craig owes me money?",status:"todo"},{message:"👋Hire me👋",status:"todo"},{message:"Draw a prefect circle",status:"todo"},{message:"Take out trash",status:"done"},{message:"Ask Jenny for penny",status:"done"},{message:"Get groceries",status:"done"},{message:"Download Mob Psycho",status:"done"}]))),w={todo_sections:1,viewing:{view:"todo",last_update:Date.now()},items:m},_=t=>{switch(t){case"todo":return"done";case"done":return"todo";default:throw new Error("invaild status")}},g=async e=>{const o=s.timer();e(),await t.wait_frame();const a=Math.round(o()),i=t.$$("*").length,n=t.$$(".benchmark-output");for(const t of n)t.value=`rendered ${i} elements in ${a}ms`},l=({todo_sections:t,viewing:s,items:a})=>{const u=e.count(t=>"todo"===t.status,a),m={todo_sections:t,viewing:s.view,items:a,onrandom:()=>l({items:a,viewing:s,todo_sections:o.int(n.MIN_TODOS,n.MAX_TODOS)}),on_new_bench:t=>{const e=Math.min(n.MAX_TODOS,Math.max(n.MIN_TODOS,t));l({todo_sections:e,items:a,viewing:s})},oninput:e=>{const o={status:"todo",id:d(),last_update:Date.now(),message:e},i=[...a,o];l({todo_sections:t,items:i,viewing:s})},ontoggle:o=>{const i=e.map(t=>({...t,status:t.id===o.id?_(t.status):t.status,last_update:t.id===o.id?Date.now():t.last_update}),a);l({todo_sections:t,items:i,viewing:s})},onremove:o=>{const i=e.filter(t=>t.id!==o.id,a);l({todo_sections:t,items:i,viewing:s})},onselect:e=>{e!==s.view&&l({todo_sections:t,items:c(a),viewing:{view:e,last_update:Date.now()}})},still_todo_count:u},w={last_view_update:s.last_update,header:{},body:m,footer:{}};g(()=>r(i.Page(w)))};l(w);
},{"nda/dist/browser/dom":"p2Eo","nda/dist/isomorphic/list":"lFNe","nda/dist/isomorphic/prelude":"DQgq","nda/dist/isomorphic/rand":"dcoe","../../src/noact":"H8YH","./layout/page":"RczK","./state":"QjaO"}]},{},["vR93"], null)
//# sourceMappingURL=/noact-page/entry.fbd9b68a.js.map