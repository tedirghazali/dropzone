(function(c,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(c=typeof globalThis<"u"?globalThis:c||self,e(c.TedirDropZone={},c.Vue))})(this,function(c,e){"use strict";/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var m=function(a){a===void 0&&(a=0);var r="",n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",t=String(Math.abs(new Date().valueOf()));Number(a)>=1&&(r+=String(Number(a)+1));for(var l=0;l<t.length;l++)r+=n.charAt(Math.floor(Math.random()*n.length)),r+=t.charAt(l);return r};const _={class:"dropZone"},v=["id","accept"],g=["onDrop"],b=["for"],Z=[e.createStaticVNode('<svg width="10em" height="10em" viewBox="0 0 16 12" class="dropZoneImage" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-v-40def0a8><path fill-rule="evenodd" d="m 8.0274054,0.49415269 a 5.53,5.53 0 0 0 -3.594,1.34200001 c -0.766,0.66 -1.321,1.52 -1.464,2.383 -1.676,0.37 -2.94199993,1.83 -2.94199993,3.593 0,2.048 1.70799993,3.6820003 3.78099993,3.6820003 h 8.9059996 c 1.815,0 3.313,-1.43 3.313,-3.2270003 0,-1.636 -1.242,-2.969 -2.834,-3.194 -0.243,-2.58 -2.476,-4.57900001 -5.1659996,-4.57900001 z m 2.3539996,5.14600001 -1.9999996,-2 a 0.5,0.5 0 0 0 -0.708,0 l -2,2 a 0.5006316,0.5006316 0 1 0 0.708,0.708 l 1.146,-1.147 v 3.793 a 0.5,0.5 0 0 0 1,0 v -3.793 l 1.146,1.147 a 0.5006316,0.5006316 0 0 0 0.7079996,-0.708 z" data-v-40def0a8></path></svg><div class="dropZoneBody" data-v-40def0a8><p data-v-40def0a8><strong class="dropZoneTitle fg-inherit" data-v-40def0a8>Drag and drop files to upload</strong></p><p data-v-40def0a8><small class="dropZoneText" data-v-40def0a8>Your files will be added automatically</small></p><button type="button" class="button" data-v-40def0a8>or select files</button></div>',2)],w=e.defineComponent({__name:"DropZone",props:{modelValue:{default:[]},accept:{default:"*"},base64:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:r}){const n=a,t=e.ref([]),l=e.ref(null),f=m(),u=p=>{const o=p.target.files||p.dataTransfer.files||l.value.files;for(let d=0;d<o.length;d++){const s=o[d];if(n.base64){const i=new FileReader;i.onload=()=>{s.base64=i.result,t.value.unshift(s)},i.readAsDataURL(s)}else t.value.unshift(s)}r("update:modelValue",t.value)};return(p,o)=>(e.openBlock(),e.createElementBlock("div",_,[e.createElementVNode("input",{type:"file",id:"dropZoneFile-"+e.unref(f),class:"dropZoneFile",ref_key:"dropZoneFile",ref:l,onChange:u,multiple:"",accept:a.accept},null,40,v),e.createElementVNode("div",{class:"dropZoneWrap",onDragenter:o[0]||(o[0]=e.withModifiers(()=>{},["prevent"])),onDragover:o[1]||(o[1]=e.withModifiers(()=>{},["prevent"])),onDrop:e.withModifiers(u,["prevent"])},[e.createElementVNode("label",{for:"dropZoneFile-"+e.unref(f),class:"dropZoneLabel"},Z,8,b)],40,g)]))}}),N="",h=(a,r)=>{const n=a.__vccOpts||a;for(const[t,l]of r)n[t]=l;return n},y=h(w,[["__scopeId","data-v-40def0a8"]]),V={class:"dropZone"},x=["id"],D=["onDrop"],B=["for"],T=["src","alt"],F=e.createStaticVNode('<svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" fill="currentColor" class="dropZoneImage my-10px" viewBox="0 0 16 16" data-v-396e7c0a><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" data-v-396e7c0a></path><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" data-v-396e7c0a></path></svg><div class="dropZoneBody" data-v-396e7c0a><p data-v-396e7c0a><strong class="dropZoneTitle fg-inherit" data-v-396e7c0a>Drag and drop thumbnail</strong></p><p data-v-396e7c0a><small class="dropZoneText" data-v-396e7c0a>Your thumbnail will be shown here</small></p><button type="button" class="button" data-v-396e7c0a>or select thumbnail</button></div>',2),k=e.defineComponent({__name:"ThumbBox",props:{modelValue:{default:{}}},emits:["update:modelValue"],setup(a,{emit:r}){const n=a,t=e.ref(n.modelValue||{}),l=e.ref(null),f=m();e.watch(()=>n.modelValue,()=>{t.value=n.modelValue});const u=p=>{const o=p.target.files||p.dataTransfer.files||l.value.files;for(let d=0;d<o.length;d++){const s=o[d],i=new FileReader;i.onload=()=>{s.base64=i.result,t.value=s},i.readAsDataURL(s)}r("update:modelValue",t.value)};return(p,o)=>{var d,s,i;return e.openBlock(),e.createElementBlock("div",V,[e.createElementVNode("input",{type:"file",id:"dropZoneThumbnail-"+e.unref(f),class:"dropZoneFile",ref_key:"dropZoneFile",ref:l,onChange:u,accept:"image/*"},null,40,x),e.createElementVNode("div",{class:e.normalizeClass(["dropZoneWrap",(d=t.value)!=null&&d.base64?"bd-none":""]),onDragenter:o[0]||(o[0]=e.withModifiers(()=>{},["prevent"])),onDragover:o[1]||(o[1]=e.withModifiers(()=>{},["prevent"])),onDrop:e.withModifiers(u,["prevent"])},[e.createElementVNode("label",{for:"dropZoneThumbnail-"+e.unref(f),class:e.normalizeClass(["dropZoneLabel",(s=t.value)!=null&&s.base64?"py-0px":""])},[(i=t.value)!=null&&i.base64?(e.openBlock(),e.createElementBlock("img",{key:0,src:t.value.base64,class:"objectFit-fill w-100pct",alt:t.value.name},null,8,T)):(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[F],64))],10,B)],42,D)])}}}),C="",M=h(k,[["__scopeId","data-v-396e7c0a"]]);c.DropZone=y,c.ThumbBox=M,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
