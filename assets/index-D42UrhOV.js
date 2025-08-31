(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Sl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},ss=[],sn=()=>{},op=()=>!1,ma=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Pl=t=>t.startsWith("onUpdate:"),yt=Object.assign,Cl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},by=Object.prototype.hasOwnProperty,Re=(t,e)=>by.call(t,e),ie=Array.isArray,is=t=>Li(t)==="[object Map]",Rs=t=>Li(t)==="[object Set]",Nh=t=>Li(t)==="[object Date]",de=t=>typeof t=="function",We=t=>typeof t=="string",fn=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",ap=t=>(De(t)||de(t))&&de(t.then)&&de(t.catch),cp=Object.prototype.toString,Li=t=>cp.call(t),Ry=t=>Li(t).slice(8,-1),lp=t=>Li(t)==="[object Object]",kl=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ri=Sl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Sy=/-(\w)/g,qt=ga(t=>t.replace(Sy,(e,n)=>n?n.toUpperCase():"")),Py=/\B([A-Z])/g,Br=ga(t=>t.replace(Py,"-$1").toLowerCase()),_a=ga(t=>t.charAt(0).toUpperCase()+t.slice(1)),dc=ga(t=>t?`on${_a(t)}`:""),Xn=(t,e)=>!Object.is(t,e),Ro=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},up=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Bo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Oh;const ya=()=>Oh||(Oh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vl(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?Dy(r):Vl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||De(t))return t}const Cy=/;(?![^(]*\))/g,ky=/:([^]+)/,Vy=/\/\*[^]*?\*\//g;function Dy(t){const e={};return t.replace(Vy,"").split(Cy).forEach(n=>{if(n){const r=n.split(ky);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Dr(t){let e="";if(We(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Dr(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ny="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Oy=Sl(Ny);function hp(t){return!!t||t===""}function xy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Nr(t[r],e[r]);return n}function Nr(t,e){if(t===e)return!0;let n=Nh(t),r=Nh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=fn(t),r=fn(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?xy(t,e):!1;if(n=De(t),r=De(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const c=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!Nr(t[a],e[a]))return!1}}return String(t)===String(e)}function Dl(t,e){return t.findIndex(n=>Nr(n,e))}const fp=t=>!!(t&&t.__v_isRef===!0),Ea=t=>We(t)?t:t==null?"":ie(t)||De(t)&&(t.toString===cp||!de(t.toString))?fp(t)?Ea(t.value):JSON.stringify(t,dp,2):String(t),dp=(t,e)=>fp(e)?dp(t,e.value):is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[pc(r,i)+" =>"]=s,n),{})}:Rs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>pc(n))}:fn(e)?pc(e):De(e)&&!ie(e)&&!lp(e)?String(e):e,pc=(t,e="")=>{var n;return fn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dt;class pp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=dt,!e&&dt&&(this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=dt;try{return dt=this,e()}finally{dt=n}}}on(){++this._on===1&&(this.prevScope=dt,dt=this)}off(){this._on>0&&--this._on===0&&(dt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function mp(t){return new pp(t)}function gp(){return dt}function My(t,e=!1){dt&&dt.cleanups.push(t)}let Ve;const mc=new WeakSet;class _p{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,dt&&dt.active&&dt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,mc.has(this)&&(mc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ep(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,xh(this),vp(this);const e=Ve,n=Gt;Ve=this,Gt=!0;try{return this.fn()}finally{Tp(this),Ve=e,Gt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)xl(e);this.deps=this.depsTail=void 0,xh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?mc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Uc(this)&&this.run()}get dirty(){return Uc(this)}}let yp=0,si,ii;function Ep(t,e=!1){if(t.flags|=8,e){t.next=ii,ii=t;return}t.next=si,si=t}function Nl(){yp++}function Ol(){if(--yp>0)return;if(ii){let e=ii;for(ii=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;si;){let e=si;for(si=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function vp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Tp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),xl(r),Ly(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Uc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(wp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function wp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ei)||(t.globalVersion=Ei,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Uc(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=Gt;Ve=t,Gt=!0;try{vp(t);const s=t.fn(t._value);(e.version===0||Xn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,Gt=r,Tp(t),t.flags&=-3}}function xl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)xl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ly(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Gt=!0;const Ip=[];function Sn(){Ip.push(Gt),Gt=!1}function Pn(){const t=Ip.pop();Gt=t===void 0?!0:t}function xh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let Ei=0;class Fy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ml{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ve||!Gt||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new Fy(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,Ap(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,Ei++,this.notify(e)}notify(e){Nl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ol()}}}function Ap(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ap(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const jo=new WeakMap,Pr=Symbol(""),Bc=Symbol(""),vi=Symbol("");function mt(t,e,n){if(Gt&&Ve){let r=jo.get(t);r||jo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ml),s.map=r,s.key=n),s.track()}}function Tn(t,e,n,r,s,i){const a=jo.get(t);if(!a){Ei++;return}const c=l=>{l&&l.trigger()};if(Nl(),e==="clear")a.forEach(c);else{const l=ie(t),h=l&&kl(n);if(l&&n==="length"){const f=Number(r);a.forEach((p,m)=>{(m==="length"||m===vi||!fn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),h&&c(a.get(vi)),e){case"add":l?h&&c(a.get("length")):(c(a.get(Pr)),is(t)&&c(a.get(Bc)));break;case"delete":l||(c(a.get(Pr)),is(t)&&c(a.get(Bc)));break;case"set":is(t)&&c(a.get(Pr));break}}Ol()}function Uy(t,e){const n=jo.get(t);return n&&n.get(e)}function Qr(t){const e=Ae(t);return e===t?e:(mt(e,"iterate",vi),Bt(t)?e:e.map(ot))}function va(t){return mt(t=Ae(t),"iterate",vi),t}const By={__proto__:null,[Symbol.iterator](){return gc(this,Symbol.iterator,ot)},concat(...t){return Qr(this).concat(...t.map(e=>ie(e)?Qr(e):e))},entries(){return gc(this,"entries",t=>(t[1]=ot(t[1]),t))},every(t,e){return yn(this,"every",t,e,void 0,arguments)},filter(t,e){return yn(this,"filter",t,e,n=>n.map(ot),arguments)},find(t,e){return yn(this,"find",t,e,ot,arguments)},findIndex(t,e){return yn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return yn(this,"findLast",t,e,ot,arguments)},findLastIndex(t,e){return yn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return yn(this,"forEach",t,e,void 0,arguments)},includes(...t){return _c(this,"includes",t)},indexOf(...t){return _c(this,"indexOf",t)},join(t){return Qr(this).join(t)},lastIndexOf(...t){return _c(this,"lastIndexOf",t)},map(t,e){return yn(this,"map",t,e,void 0,arguments)},pop(){return Ws(this,"pop")},push(...t){return Ws(this,"push",t)},reduce(t,...e){return Mh(this,"reduce",t,e)},reduceRight(t,...e){return Mh(this,"reduceRight",t,e)},shift(){return Ws(this,"shift")},some(t,e){return yn(this,"some",t,e,void 0,arguments)},splice(...t){return Ws(this,"splice",t)},toReversed(){return Qr(this).toReversed()},toSorted(t){return Qr(this).toSorted(t)},toSpliced(...t){return Qr(this).toSpliced(...t)},unshift(...t){return Ws(this,"unshift",t)},values(){return gc(this,"values",ot)}};function gc(t,e,n){const r=va(t),s=r[e]();return r!==t&&!Bt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const jy=Array.prototype;function yn(t,e,n,r,s,i){const a=va(t),c=a!==t&&!Bt(t),l=a[e];if(l!==jy[e]){const p=l.apply(t,i);return c?ot(p):p}let h=n;a!==t&&(c?h=function(p,m){return n.call(this,ot(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const f=l.call(a,h,r);return c&&s?s(f):f}function Mh(t,e,n,r){const s=va(t);let i=n;return s!==t&&(Bt(t)?n.length>3&&(i=function(a,c,l){return n.call(this,a,c,l,t)}):i=function(a,c,l){return n.call(this,a,ot(c),l,t)}),s[e](i,...r)}function _c(t,e,n){const r=Ae(t);mt(r,"iterate",vi);const s=r[e](...n);return(s===-1||s===!1)&&Ul(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Ws(t,e,n=[]){Sn(),Nl();const r=Ae(t)[e].apply(t,n);return Ol(),Pn(),r}const $y=Sl("__proto__,__v_isRef,__isVue"),bp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fn));function qy(t){fn(t)||(t=String(t));const e=Ae(this);return mt(e,"has",t),e.hasOwnProperty(t)}class Rp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Zy:kp:i?Cp:Pp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ie(e);if(!s){let l;if(a&&(l=By[n]))return l;if(n==="hasOwnProperty")return qy}const c=Reflect.get(e,n,He(e)?e:r);return(fn(n)?bp.has(n):$y(n))||(s||mt(e,"get",n),i)?c:He(c)?a&&kl(n)?c:c.value:De(c)?s?Dp(c):Fi(c):c}}class Sp extends Rp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=or(i);if(!Bt(r)&&!or(r)&&(i=Ae(i),r=Ae(r)),!ie(e)&&He(i)&&!He(r))return l||(i.value=r),!0}const a=ie(e)&&kl(n)?Number(n)<e.length:Re(e,n),c=Reflect.set(e,n,r,He(e)?e:s);return e===Ae(s)&&(a?Xn(r,i)&&Tn(e,"set",n,r):Tn(e,"add",n,r)),c}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Tn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!fn(n)||!bp.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",ie(e)?"length":Pr),Reflect.ownKeys(e)}}class Hy extends Rp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const zy=new Sp,Ky=new Hy,Wy=new Sp(!0);const jc=t=>t,mo=t=>Reflect.getPrototypeOf(t);function Gy(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),a=is(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),f=n?jc:e?$o:ot;return!e&&mt(i,"iterate",l?Bc:Pr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function go(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Qy(t,e){const n={get(s){const i=this.__v_raw,a=Ae(i),c=Ae(s);t||(Xn(s,c)&&mt(a,"get",s),mt(a,"get",c));const{has:l}=mo(a),h=e?jc:t?$o:ot;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&mt(Ae(s),"iterate",Pr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Ae(i),c=Ae(s);return t||(Xn(s,c)&&mt(a,"has",s),mt(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=Ae(c),h=e?jc:t?$o:ot;return!t&&mt(l,"iterate",Pr),c.forEach((f,p)=>s.call(i,h(f),h(p),a))}};return yt(n,t?{add:go("add"),set:go("set"),delete:go("delete"),clear:go("clear")}:{add(s){!e&&!Bt(s)&&!or(s)&&(s=Ae(s));const i=Ae(this);return mo(i).has.call(i,s)||(i.add(s),Tn(i,"add",s,s)),this},set(s,i){!e&&!Bt(i)&&!or(i)&&(i=Ae(i));const a=Ae(this),{has:c,get:l}=mo(a);let h=c.call(a,s);h||(s=Ae(s),h=c.call(a,s));const f=l.call(a,s);return a.set(s,i),h?Xn(i,f)&&Tn(a,"set",s,i):Tn(a,"add",s,i),this},delete(s){const i=Ae(this),{has:a,get:c}=mo(i);let l=a.call(i,s);l||(s=Ae(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&Tn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,a=s.clear();return i&&Tn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Gy(s,t,e)}),n}function Ll(t,e){const n=Qy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const Jy={get:Ll(!1,!1)},Yy={get:Ll(!1,!0)},Xy={get:Ll(!0,!1)};const Pp=new WeakMap,Cp=new WeakMap,kp=new WeakMap,Zy=new WeakMap;function eE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tE(t){return t.__v_skip||!Object.isExtensible(t)?0:eE(Ry(t))}function Fi(t){return or(t)?t:Fl(t,!1,zy,Jy,Pp)}function Vp(t){return Fl(t,!1,Wy,Yy,Cp)}function Dp(t){return Fl(t,!0,Ky,Xy,kp)}function Fl(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=tE(t);if(i===0)return t;const a=s.get(t);if(a)return a;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Zn(t){return or(t)?Zn(t.__v_raw):!!(t&&t.__v_isReactive)}function or(t){return!!(t&&t.__v_isReadonly)}function Bt(t){return!!(t&&t.__v_isShallow)}function Ul(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Bl(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&up(t,"__v_skip",!0),t}const ot=t=>De(t)?Fi(t):t,$o=t=>De(t)?Dp(t):t;function He(t){return t?t.__v_isRef===!0:!1}function $e(t){return Np(t,!1)}function nE(t){return Np(t,!0)}function Np(t,e){return He(t)?t:new rE(t,e)}class rE{constructor(e,n){this.dep=new Ml,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:ot(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Bt(e)||or(e);e=r?e:Ae(e),Xn(e,n)&&(this._rawValue=e,this._value=r?e:ot(e),this.dep.trigger())}}function Kt(t){return He(t)?t.value:t}const sE={get:(t,e,n)=>e==="__v_raw"?t:Kt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return He(s)&&!He(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Op(t){return Zn(t)?t:new Proxy(t,sE)}function iE(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=aE(t,n);return e}class oE{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Uy(Ae(this._object),this._key)}}function aE(t,e,n){const r=t[e];return He(r)?r:new oE(t,e,n)}class cE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ml(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ei-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Ep(this,!0),!0}get value(){const e=this.dep.track();return wp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lE(t,e,n=!1){let r,s;return de(t)?r=t:(r=t.get,s=t.set),new cE(r,s,n)}const _o={},qo=new WeakMap;let br;function uE(t,e=!1,n=br){if(n){let r=qo.get(n);r||qo.set(n,r=[]),r.push(t)}}function hE(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=n,h=K=>s?K:Bt(K)||s===!1||s===0?wn(K,1):wn(K);let f,p,m,y,R=!1,V=!1;if(He(t)?(p=()=>t.value,R=Bt(t)):Zn(t)?(p=()=>h(t),R=!0):ie(t)?(V=!0,R=t.some(K=>Zn(K)||Bt(K)),p=()=>t.map(K=>{if(He(K))return K.value;if(Zn(K))return h(K);if(de(K))return l?l(K,2):K()})):de(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Sn();try{m()}finally{Pn()}}const K=br;br=f;try{return l?l(t,3,[y]):t(y)}finally{br=K}}:p=sn,e&&s){const K=p,te=s===!0?1/0:s;p=()=>wn(K(),te)}const D=gp(),$=()=>{f.stop(),D&&D.active&&Cl(D.effects,f)};if(i&&e){const K=e;e=(...te)=>{K(...te),$()}}let N=V?new Array(t.length).fill(_o):_o;const L=K=>{if(!(!(f.flags&1)||!f.dirty&&!K))if(e){const te=f.run();if(s||R||(V?te.some((Ee,A)=>Xn(Ee,N[A])):Xn(te,N))){m&&m();const Ee=br;br=f;try{const A=[te,N===_o?void 0:V&&N[0]===_o?[]:N,y];N=te,l?l(e,3,A):e(...A)}finally{br=Ee}}}else f.run()};return c&&c(L),f=new _p(p),f.scheduler=a?()=>a(L,!1):L,y=K=>uE(K,!1,f),m=f.onStop=()=>{const K=qo.get(f);if(K){if(l)l(K,4);else for(const te of K)te();qo.delete(f)}},e?r?L(!0):N=f.run():a?a(L.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function wn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,He(t))wn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)wn(t[r],e,n);else if(Rs(t)||is(t))t.forEach(r=>{wn(r,e,n)});else if(lp(t)){for(const r in t)wn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&wn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ui(t,e,n,r){try{return r?t(...r):t()}catch(s){Ta(s,e,n)}}function dn(t,e,n,r){if(de(t)){const s=Ui(t,e,n,r);return s&&ap(s)&&s.catch(i=>{Ta(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(dn(t[i],e,n,r));return s}}function Ta(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ce;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){Sn(),Ui(i,null,10,[t,l,h]),Pn();return}}fE(t,n,s,r,a)}function fE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const wt=[];let en=-1;const os=[];let Hn=null,Yr=0;const xp=Promise.resolve();let Ho=null;function wa(t){const e=Ho||xp;return t?e.then(this?t.bind(this):t):e}function dE(t){let e=en+1,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=Ti(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function jl(t){if(!(t.flags&1)){const e=Ti(t),n=wt[wt.length-1];!n||!(t.flags&2)&&e>=Ti(n)?wt.push(t):wt.splice(dE(e),0,t),t.flags|=1,Mp()}}function Mp(){Ho||(Ho=xp.then(Fp))}function pE(t){ie(t)?os.push(...t):Hn&&t.id===-1?Hn.splice(Yr+1,0,t):t.flags&1||(os.push(t),t.flags|=1),Mp()}function Lh(t,e,n=en+1){for(;n<wt.length;n++){const r=wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Lp(t){if(os.length){const e=[...new Set(os)].sort((n,r)=>Ti(n)-Ti(r));if(os.length=0,Hn){Hn.push(...e);return}for(Hn=e,Yr=0;Yr<Hn.length;Yr++){const n=Hn[Yr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Hn=null,Yr=0}}const Ti=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Fp(t){try{for(en=0;en<wt.length;en++){const e=wt[en];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ui(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;en<wt.length;en++){const e=wt[en];e&&(e.flags&=-2)}en=-1,wt.length=0,Lp(),Ho=null,(wt.length||os.length)&&Fp()}}let kt=null,Up=null;function zo(t){const e=kt;return kt=t,Up=t&&t.type.__scopeId||null,e}function $l(t,e=kt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Wh(-1);const i=zo(e);let a;try{a=t(...s)}finally{zo(i),r._d&&Wh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function as(t,e){if(kt===null)return t;const n=Sa(kt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Ce]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&wn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ir(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(Sn(),dn(l,n,8,[t.el,c,t,e]),Pn())}}const mE=Symbol("_vte"),gE=t=>t.__isTeleport,_E=Symbol("_leaveCb");function ql(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ql(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Nn(t,e){return de(t)?yt({name:t.name},e,{setup:t}):t}function Bp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function oi(t,e,n,r,s=!1){if(ie(t)){t.forEach((R,V)=>oi(R,e&&(ie(e)?e[V]:e),n,r,s));return}if(ai(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&oi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Sa(r.component):r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Ce?c.refs={}:c.refs,p=c.setupState,m=Ae(p),y=p===Ce?op:R=>Re(m,R);if(h!=null&&h!==l){if(We(h))f[h]=null,y(h)&&(p[h]=null);else if(He(h)){h.value=null;const R=e;R.k&&(f[R.k]=null)}}if(de(l))Ui(l,c,12,[a,f]);else{const R=We(l),V=He(l);if(R||V){const D=()=>{if(t.f){const $=R?y(l)?p[l]:f[l]:l.value;if(s)ie($)&&Cl($,i);else if(ie($))$.includes(i)||$.push(i);else if(R)f[l]=[i],y(l)&&(p[l]=f[l]);else{const N=[i];l.value=N,t.k&&(f[t.k]=N)}}else R?(f[l]=a,y(l)&&(p[l]=a)):V&&(l.value=a,t.k&&(f[t.k]=a))};a?(D.id=-1,Ct(D,n)):D()}}}ya().requestIdleCallback;ya().cancelIdleCallback;const ai=t=>!!t.type.__asyncLoader,jp=t=>t.type.__isKeepAlive;function yE(t,e){$p(t,"a",e)}function EE(t,e){$p(t,"da",e)}function $p(t,e,n=_t){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ia(e,r,n),n){let s=n.parent;for(;s&&s.parent;)jp(s.parent.vnode)&&vE(r,e,n,s),s=s.parent}}function vE(t,e,n,r){const s=Ia(e,t,r,!0);qp(()=>{Cl(r[e],s)},n)}function Ia(t,e,n=_t,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Sn();const c=Bi(n),l=dn(e,n,t,a);return c(),Pn(),l});return r?s.unshift(i):s.push(i),i}}const On=t=>(e,n=_t)=>{(!Ai||t==="sp")&&Ia(t,(...r)=>e(...r),n)},TE=On("bm"),Hl=On("m"),wE=On("bu"),IE=On("u"),AE=On("bum"),qp=On("um"),bE=On("sp"),RE=On("rtg"),SE=On("rtc");function PE(t,e=_t){Ia("ec",t,e)}const CE="components";function zl(t,e){return VE(CE,t,!0,e)||t}const kE=Symbol.for("v-ndc");function VE(t,e,n=!0,r=!1){const s=kt||_t;if(s){const i=s.type;{const c=Ev(i,!1);if(c&&(c===e||c===qt(e)||c===_a(qt(e))))return i}const a=Fh(s[t]||i[t],e)||Fh(s.appContext[t],e);return!a&&r?i:a}}function Fh(t,e){return t&&(t[e]||t[qt(e)]||t[_a(qt(e))])}function DE(t,e,n,r){let s;const i=n,a=ie(t);if(a||We(t)){const c=a&&Zn(t);let l=!1,h=!1;c&&(l=!Bt(t),h=or(t),t=va(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?h?$o(ot(t[f])):ot(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const $c=t=>t?hm(t)?Sa(t):$c(t.parent):null,ci=yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$c(t.parent),$root:t=>$c(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>zp(t),$forceUpdate:t=>t.f||(t.f=()=>{jl(t.update)}),$nextTick:t=>t.n||(t.n=wa.bind(t.proxy)),$watch:t=>ev.bind(t)}),yc=(t,e)=>t!==Ce&&!t.__isScriptSetup&&Re(t,e),NE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const y=a[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(yc(r,e))return a[e]=1,r[e];if(s!==Ce&&Re(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Re(h,e))return a[e]=3,i[e];if(n!==Ce&&Re(n,e))return a[e]=4,n[e];qc&&(a[e]=0)}}const f=ci[e];let p,m;if(f)return e==="$attrs"&&mt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ce&&Re(n,e))return a[e]=4,n[e];if(m=l.config.globalProperties,Re(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return yc(s,e)?(s[e]=n,!0):r!==Ce&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:a}},c){let l,h;return!!(n[c]||t!==Ce&&c[0]!=="$"&&Re(t,c)||yc(e,c)||(l=i[0])&&Re(l,c)||Re(r,c)||Re(ci,c)||Re(s.config.globalProperties,c)||(h=a.__cssModules)&&h[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Uh(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let qc=!0;function OE(t){const e=zp(t),n=t.proxy,r=t.ctx;qc=!1,e.beforeCreate&&Bh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:y,updated:R,activated:V,deactivated:D,beforeDestroy:$,beforeUnmount:N,destroyed:L,unmounted:K,render:te,renderTracked:Ee,renderTriggered:A,errorCaptured:_,serverPrefetch:E,expose:I,inheritAttrs:b,components:S,directives:T,filters:et}=e;if(h&&xE(h,r,null),a)for(const le in a){const me=a[le];de(me)&&(r[le]=me.bind(n))}if(s){const le=s.call(n,n);De(le)&&(t.data=Fi(le))}if(qc=!0,i)for(const le in i){const me=i[le],St=de(me)?me.bind(n,n):de(me.get)?me.get.bind(n,n):sn,Ht=!de(me)&&de(me.set)?me.set.bind(n):sn,Nt=Lt({get:St,set:Ht});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:Le=>Nt.value=Le})}if(c)for(const le in c)Hp(c[le],r,n,le);if(l){const le=de(l)?l.call(n):l;Reflect.ownKeys(le).forEach(me=>{So(me,le[me])})}f&&Bh(f,t,"c");function ke(le,me){ie(me)?me.forEach(St=>le(St.bind(n))):me&&le(me.bind(n))}if(ke(TE,p),ke(Hl,m),ke(wE,y),ke(IE,R),ke(yE,V),ke(EE,D),ke(PE,_),ke(SE,Ee),ke(RE,A),ke(AE,N),ke(qp,K),ke(bE,E),ie(I))if(I.length){const le=t.exposed||(t.exposed={});I.forEach(me=>{Object.defineProperty(le,me,{get:()=>n[me],set:St=>n[me]=St,enumerable:!0})})}else t.exposed||(t.exposed={});te&&t.render===sn&&(t.render=te),b!=null&&(t.inheritAttrs=b),S&&(t.components=S),T&&(t.directives=T),E&&Bp(t)}function xE(t,e,n=sn){ie(t)&&(t=Hc(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=jt(s.from||r,s.default,!0):i=jt(s.from||r):i=jt(s),He(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Bh(t,e,n){dn(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hp(t,e,n,r){let s=r.includes(".")?sm(n,r):()=>n[r];if(We(t)){const i=e[t];de(i)&&cs(s,i)}else if(de(t))cs(s,t.bind(n));else if(De(t))if(ie(t))t.forEach(i=>Hp(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&cs(s,i,t)}}function zp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Ko(l,h,a,!0)),Ko(l,e,a)),De(e)&&i.set(e,l),l}function Ko(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ko(t,i,n,!0),s&&s.forEach(a=>Ko(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=ME[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const ME={data:jh,props:$h,emits:$h,methods:Js,computed:Js,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Js,directives:Js,watch:FE,provide:jh,inject:LE};function jh(t,e){return e?t?function(){return yt(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function LE(t,e){return Js(Hc(t),Hc(e))}function Hc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Js(t,e){return t?yt(Object.create(null),t,e):e}function $h(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:yt(Object.create(null),Uh(t),Uh(e??{})):e}function FE(t,e){if(!t)return e;if(!e)return t;const n=yt(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function Kp(){return{app:null,config:{isNativeTag:op,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let UE=0;function BE(t,e){return function(r,s=null){de(r)||(r=yt({},r)),s!=null&&!De(s)&&(s=null);const i=Kp(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:UE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Tv,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&de(f.install)?(a.add(f),f.install(h,...p)):de(f)&&(a.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,m){if(!l){const y=h._ceVNode||Xe(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,f,m),l=!0,h._container=f,f.__vue_app__=h,Sa(y.component)}},onUnmount(f){c.push(f)},unmount(){l&&(dn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Cr;Cr=h;try{return f()}finally{Cr=p}}};return h}}let Cr=null;function So(t,e){if(_t){let n=_t.provides;const r=_t.parent&&_t.parent.provides;r===n&&(n=_t.provides=Object.create(r)),n[t]=e}}function jt(t,e,n=!1){const r=um();if(r||Cr){let s=Cr?Cr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function jE(){return!!(um()||Cr)}const Wp={},Gp=()=>Object.create(Wp),Qp=t=>Object.getPrototypeOf(t)===Wp;function $E(t,e,n,r=!1){const s={},i=Gp();t.propsDefaults=Object.create(null),Jp(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:Vp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function qE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=Ae(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Aa(t.emitsOptions,m))continue;const y=e[m];if(l)if(Re(i,m))y!==i[m]&&(i[m]=y,h=!0);else{const R=qt(m);s[R]=zc(l,c,R,y,t,!1)}else y!==i[m]&&(i[m]=y,h=!0)}}}else{Jp(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Re(e,p)&&((f=Br(p))===p||!Re(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=zc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&Tn(t.attrs,"set","")}function Jp(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(ri(l))continue;const h=e[l];let f;s&&Re(s,f=qt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:Aa(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=Ae(n),h=c||Ce;for(let f=0;f<i.length;f++){const p=i[f];n[p]=zc(s,l,p,h[p],t,!Re(h,p))}}return a}function zc(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=Re(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&de(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Bi(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Br(n))&&(r=!0))}return r}const HE=new WeakMap;function Yp(t,e,n=!1){const r=n?HE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!de(t)){const f=p=>{l=!0;const[m,y]=Yp(p,e,!0);yt(a,m),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return De(t)&&r.set(t,ss),ss;if(ie(i))for(let f=0;f<i.length;f++){const p=qt(i[f]);qh(p)&&(a[p]=Ce)}else if(i)for(const f in i){const p=qt(f);if(qh(p)){const m=i[f],y=a[p]=ie(m)||de(m)?{type:m}:yt({},m),R=y.type;let V=!1,D=!0;if(ie(R))for(let $=0;$<R.length;++$){const N=R[$],L=de(N)&&N.name;if(L==="Boolean"){V=!0;break}else L==="String"&&(D=!1)}else V=de(R)&&R.name==="Boolean";y[0]=V,y[1]=D,(V||Re(y,"default"))&&c.push(p)}}const h=[a,c];return De(t)&&r.set(t,h),h}function qh(t){return t[0]!=="$"&&!ri(t)}const Kl=t=>t==="_"||t==="_ctx"||t==="$stable",Wl=t=>ie(t)?t.map(rn):[rn(t)],zE=(t,e,n)=>{if(e._n)return e;const r=$l((...s)=>Wl(e(...s)),n);return r._c=!1,r},Xp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Kl(s))continue;const i=t[s];if(de(i))e[s]=zE(s,i,r);else if(i!=null){const a=Wl(i);e[s]=()=>a}}},Zp=(t,e)=>{const n=Wl(e);t.slots.default=()=>n},em=(t,e,n)=>{for(const r in e)(n||!Kl(r))&&(t[r]=e[r])},KE=(t,e,n)=>{const r=t.slots=Gp();if(t.vnode.shapeFlag&32){const s=e._;s?(em(r,e,n),n&&up(r,"_",s,!0)):Xp(e,r)}else e&&Zp(t,e)},WE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ce;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:em(s,e,n):(i=!e.$stable,Xp(e,s)),a=e}else e&&(Zp(t,e),a={default:1});if(i)for(const c in s)!Kl(c)&&a[c]==null&&delete s[c]},Ct=av;function GE(t){return QE(t)}function QE(t,e){const n=ya();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:y=sn,insertStaticContent:R}=t,V=(v,w,P,x=null,U=null,M=null,W=void 0,H=null,q=!!w.dynamicChildren)=>{if(v===w)return;v&&!Gs(v,w)&&(x=O(v),Le(v,U,M,!0),v=null),w.patchFlag===-2&&(q=!1,w.dynamicChildren=null);const{type:j,ref:re,shapeFlag:Q}=w;switch(j){case ba:D(v,w,P,x);break;case ar:$(v,w,P,x);break;case vc:v==null&&N(w,P,x,W);break;case nn:S(v,w,P,x,U,M,W,H,q);break;default:Q&1?te(v,w,P,x,U,M,W,H,q):Q&6?T(v,w,P,x,U,M,W,H,q):(Q&64||Q&128)&&j.process(v,w,P,x,U,M,W,H,q,X)}re!=null&&U?oi(re,v&&v.ref,M,w||v,!w):re==null&&v&&v.ref!=null&&oi(v.ref,null,M,v,!0)},D=(v,w,P,x)=>{if(v==null)r(w.el=c(w.children),P,x);else{const U=w.el=v.el;w.children!==v.children&&h(U,w.children)}},$=(v,w,P,x)=>{v==null?r(w.el=l(w.children||""),P,x):w.el=v.el},N=(v,w,P,x)=>{[v.el,v.anchor]=R(v.children,w,P,x,v.el,v.anchor)},L=({el:v,anchor:w},P,x)=>{let U;for(;v&&v!==w;)U=m(v),r(v,P,x),v=U;r(w,P,x)},K=({el:v,anchor:w})=>{let P;for(;v&&v!==w;)P=m(v),s(v),v=P;s(w)},te=(v,w,P,x,U,M,W,H,q)=>{w.type==="svg"?W="svg":w.type==="math"&&(W="mathml"),v==null?Ee(w,P,x,U,M,W,H,q):E(v,w,U,M,W,H,q)},Ee=(v,w,P,x,U,M,W,H)=>{let q,j;const{props:re,shapeFlag:Q,transition:ee,dirs:ce}=v;if(q=v.el=a(v.type,M,re&&re.is,re),Q&8?f(q,v.children):Q&16&&_(v.children,q,null,x,U,Ec(v,M),W,H),ce&&Ir(v,null,x,"created"),A(q,v,v.scopeId,W,x),re){for(const pe in re)pe!=="value"&&!ri(pe)&&i(q,pe,null,re[pe],M,x);"value"in re&&i(q,"value",null,re.value,M),(j=re.onVnodeBeforeMount)&&Zt(j,x,v)}ce&&Ir(v,null,x,"beforeMount");const se=JE(U,ee);se&&ee.beforeEnter(q),r(q,w,P),((j=re&&re.onVnodeMounted)||se||ce)&&Ct(()=>{j&&Zt(j,x,v),se&&ee.enter(q),ce&&Ir(v,null,x,"mounted")},U)},A=(v,w,P,x,U)=>{if(P&&y(v,P),x)for(let M=0;M<x.length;M++)y(v,x[M]);if(U){let M=U.subTree;if(w===M||om(M.type)&&(M.ssContent===w||M.ssFallback===w)){const W=U.vnode;A(v,W,W.scopeId,W.slotScopeIds,U.parent)}}},_=(v,w,P,x,U,M,W,H,q=0)=>{for(let j=q;j<v.length;j++){const re=v[j]=H?zn(v[j]):rn(v[j]);V(null,re,w,P,x,U,M,W,H)}},E=(v,w,P,x,U,M,W)=>{const H=w.el=v.el;let{patchFlag:q,dynamicChildren:j,dirs:re}=w;q|=v.patchFlag&16;const Q=v.props||Ce,ee=w.props||Ce;let ce;if(P&&Ar(P,!1),(ce=ee.onVnodeBeforeUpdate)&&Zt(ce,P,w,v),re&&Ir(w,v,P,"beforeUpdate"),P&&Ar(P,!0),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&f(H,""),j?I(v.dynamicChildren,j,H,P,x,Ec(w,U),M):W||me(v,w,H,null,P,x,Ec(w,U),M,!1),q>0){if(q&16)b(H,Q,ee,P,U);else if(q&2&&Q.class!==ee.class&&i(H,"class",null,ee.class,U),q&4&&i(H,"style",Q.style,ee.style,U),q&8){const se=w.dynamicProps;for(let pe=0;pe<se.length;pe++){const ve=se[pe],tt=Q[ve],nt=ee[ve];(nt!==tt||ve==="value")&&i(H,ve,tt,nt,U,P)}}q&1&&v.children!==w.children&&f(H,w.children)}else!W&&j==null&&b(H,Q,ee,P,U);((ce=ee.onVnodeUpdated)||re)&&Ct(()=>{ce&&Zt(ce,P,w,v),re&&Ir(w,v,P,"updated")},x)},I=(v,w,P,x,U,M,W)=>{for(let H=0;H<w.length;H++){const q=v[H],j=w[H],re=q.el&&(q.type===nn||!Gs(q,j)||q.shapeFlag&198)?p(q.el):P;V(q,j,re,null,x,U,M,W,!0)}},b=(v,w,P,x,U)=>{if(w!==P){if(w!==Ce)for(const M in w)!ri(M)&&!(M in P)&&i(v,M,w[M],null,U,x);for(const M in P){if(ri(M))continue;const W=P[M],H=w[M];W!==H&&M!=="value"&&i(v,M,H,W,U,x)}"value"in P&&i(v,"value",w.value,P.value,U)}},S=(v,w,P,x,U,M,W,H,q)=>{const j=w.el=v?v.el:c(""),re=w.anchor=v?v.anchor:c("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:ce}=w;ce&&(H=H?H.concat(ce):ce),v==null?(r(j,P,x),r(re,P,x),_(w.children||[],P,re,U,M,W,H,q)):Q>0&&Q&64&&ee&&v.dynamicChildren?(I(v.dynamicChildren,ee,P,U,M,W,H),(w.key!=null||U&&w===U.subTree)&&tm(v,w,!0)):me(v,w,P,re,U,M,W,H,q)},T=(v,w,P,x,U,M,W,H,q)=>{w.slotScopeIds=H,v==null?w.shapeFlag&512?U.ctx.activate(w,P,x,W,q):et(w,P,x,U,M,W,q):It(v,w,q)},et=(v,w,P,x,U,M,W)=>{const H=v.component=pv(v,x,U);if(jp(v)&&(H.ctx.renderer=X),mv(H,!1,W),H.asyncDep){if(U&&U.registerDep(H,ke,W),!v.el){const q=H.subTree=Xe(ar);$(null,q,w,P),v.placeholder=q.el}}else ke(H,v,w,P,U,M,W)},It=(v,w,P)=>{const x=w.component=v.component;if(iv(v,w,P))if(x.asyncDep&&!x.asyncResolved){le(x,w,P);return}else x.next=w,x.update();else w.el=v.el,x.vnode=w},ke=(v,w,P,x,U,M,W)=>{const H=()=>{if(v.isMounted){let{next:Q,bu:ee,u:ce,parent:se,vnode:pe}=v;{const lt=nm(v);if(lt){Q&&(Q.el=pe.el,le(v,Q,W)),lt.asyncDep.then(()=>{v.isUnmounted||H()});return}}let ve=Q,tt;Ar(v,!1),Q?(Q.el=pe.el,le(v,Q,W)):Q=pe,ee&&Ro(ee),(tt=Q.props&&Q.props.onVnodeBeforeUpdate)&&Zt(tt,se,Q,pe),Ar(v,!0);const nt=zh(v),Ot=v.subTree;v.subTree=nt,V(Ot,nt,p(Ot.el),O(Ot),v,U,M),Q.el=nt.el,ve===null&&ov(v,nt.el),ce&&Ct(ce,U),(tt=Q.props&&Q.props.onVnodeUpdated)&&Ct(()=>Zt(tt,se,Q,pe),U)}else{let Q;const{el:ee,props:ce}=w,{bm:se,m:pe,parent:ve,root:tt,type:nt}=v,Ot=ai(w);Ar(v,!1),se&&Ro(se),!Ot&&(Q=ce&&ce.onVnodeBeforeMount)&&Zt(Q,ve,w),Ar(v,!0);{tt.ce&&tt.ce._def.shadowRoot!==!1&&tt.ce._injectChildStyle(nt);const lt=v.subTree=zh(v);V(null,lt,P,x,v,U,M),w.el=lt.el}if(pe&&Ct(pe,U),!Ot&&(Q=ce&&ce.onVnodeMounted)){const lt=w;Ct(()=>Zt(Q,ve,lt),U)}(w.shapeFlag&256||ve&&ai(ve.vnode)&&ve.vnode.shapeFlag&256)&&v.a&&Ct(v.a,U),v.isMounted=!0,w=P=x=null}};v.scope.on();const q=v.effect=new _p(H);v.scope.off();const j=v.update=q.run.bind(q),re=v.job=q.runIfDirty.bind(q);re.i=v,re.id=v.uid,q.scheduler=()=>jl(re),Ar(v,!0),j()},le=(v,w,P)=>{w.component=v;const x=v.vnode.props;v.vnode=w,v.next=null,qE(v,w.props,x,P),WE(v,w.children,P),Sn(),Lh(v),Pn()},me=(v,w,P,x,U,M,W,H,q=!1)=>{const j=v&&v.children,re=v?v.shapeFlag:0,Q=w.children,{patchFlag:ee,shapeFlag:ce}=w;if(ee>0){if(ee&128){Ht(j,Q,P,x,U,M,W,H,q);return}else if(ee&256){St(j,Q,P,x,U,M,W,H,q);return}}ce&8?(re&16&&At(j,U,M),Q!==j&&f(P,Q)):re&16?ce&16?Ht(j,Q,P,x,U,M,W,H,q):At(j,U,M,!0):(re&8&&f(P,""),ce&16&&_(Q,P,x,U,M,W,H,q))},St=(v,w,P,x,U,M,W,H,q)=>{v=v||ss,w=w||ss;const j=v.length,re=w.length,Q=Math.min(j,re);let ee;for(ee=0;ee<Q;ee++){const ce=w[ee]=q?zn(w[ee]):rn(w[ee]);V(v[ee],ce,P,null,U,M,W,H,q)}j>re?At(v,U,M,!0,!1,Q):_(w,P,x,U,M,W,H,q,Q)},Ht=(v,w,P,x,U,M,W,H,q)=>{let j=0;const re=w.length;let Q=v.length-1,ee=re-1;for(;j<=Q&&j<=ee;){const ce=v[j],se=w[j]=q?zn(w[j]):rn(w[j]);if(Gs(ce,se))V(ce,se,P,null,U,M,W,H,q);else break;j++}for(;j<=Q&&j<=ee;){const ce=v[Q],se=w[ee]=q?zn(w[ee]):rn(w[ee]);if(Gs(ce,se))V(ce,se,P,null,U,M,W,H,q);else break;Q--,ee--}if(j>Q){if(j<=ee){const ce=ee+1,se=ce<re?w[ce].el:x;for(;j<=ee;)V(null,w[j]=q?zn(w[j]):rn(w[j]),P,se,U,M,W,H,q),j++}}else if(j>ee)for(;j<=Q;)Le(v[j],U,M,!0),j++;else{const ce=j,se=j,pe=new Map;for(j=se;j<=ee;j++){const rt=w[j]=q?zn(w[j]):rn(w[j]);rt.key!=null&&pe.set(rt.key,j)}let ve,tt=0;const nt=ee-se+1;let Ot=!1,lt=0;const Ln=new Array(nt);for(j=0;j<nt;j++)Ln[j]=0;for(j=ce;j<=Q;j++){const rt=v[j];if(tt>=nt){Le(rt,U,M,!0);continue}let xt;if(rt.key!=null)xt=pe.get(rt.key);else for(ve=se;ve<=ee;ve++)if(Ln[ve-se]===0&&Gs(rt,w[ve])){xt=ve;break}xt===void 0?Le(rt,U,M,!0):(Ln[xt-se]=j+1,xt>=lt?lt=xt:Ot=!0,V(rt,w[xt],P,null,U,M,W,H,q),tt++)}const Os=Ot?YE(Ln):ss;for(ve=Os.length-1,j=nt-1;j>=0;j--){const rt=se+j,xt=w[rt],Xi=w[rt+1],Hr=rt+1<re?Xi.el||Xi.placeholder:x;Ln[j]===0?V(null,xt,P,Hr,U,M,W,H,q):Ot&&(ve<0||j!==Os[ve]?Nt(xt,P,Hr,2):ve--)}}},Nt=(v,w,P,x,U=null)=>{const{el:M,type:W,transition:H,children:q,shapeFlag:j}=v;if(j&6){Nt(v.component.subTree,w,P,x);return}if(j&128){v.suspense.move(w,P,x);return}if(j&64){W.move(v,w,P,X);return}if(W===nn){r(M,w,P);for(let Q=0;Q<q.length;Q++)Nt(q[Q],w,P,x);r(v.anchor,w,P);return}if(W===vc){L(v,w,P);return}if(x!==2&&j&1&&H)if(x===0)H.beforeEnter(M),r(M,w,P),Ct(()=>H.enter(M),U);else{const{leave:Q,delayLeave:ee,afterLeave:ce}=H,se=()=>{v.ctx.isUnmounted?s(M):r(M,w,P)},pe=()=>{M._isLeaving&&M[_E](!0),Q(M,()=>{se(),ce&&ce()})};ee?ee(M,se,pe):pe()}else r(M,w,P)},Le=(v,w,P,x=!1,U=!1)=>{const{type:M,props:W,ref:H,children:q,dynamicChildren:j,shapeFlag:re,patchFlag:Q,dirs:ee,cacheIndex:ce}=v;if(Q===-2&&(U=!1),H!=null&&(Sn(),oi(H,null,P,v,!0),Pn()),ce!=null&&(w.renderCache[ce]=void 0),re&256){w.ctx.deactivate(v);return}const se=re&1&&ee,pe=!ai(v);let ve;if(pe&&(ve=W&&W.onVnodeBeforeUnmount)&&Zt(ve,w,v),re&6)Xt(v.component,P,x);else{if(re&128){v.suspense.unmount(P,x);return}se&&Ir(v,null,w,"beforeUnmount"),re&64?v.type.remove(v,w,P,X,x):j&&!j.hasOnce&&(M!==nn||Q>0&&Q&64)?At(j,w,P,!1,!0):(M===nn&&Q&384||!U&&re&16)&&At(q,w,P),x&&Fe(v)}(pe&&(ve=W&&W.onVnodeUnmounted)||se)&&Ct(()=>{ve&&Zt(ve,w,v),se&&Ir(v,null,w,"unmounted")},P)},Fe=v=>{const{type:w,el:P,anchor:x,transition:U}=v;if(w===nn){Mn(P,x);return}if(w===vc){K(v);return}const M=()=>{s(P),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(v.shapeFlag&1&&U&&!U.persisted){const{leave:W,delayLeave:H}=U,q=()=>W(P,M);H?H(v.el,M,q):q()}else M()},Mn=(v,w)=>{let P;for(;v!==w;)P=m(v),s(v),v=P;s(w)},Xt=(v,w,P)=>{const{bum:x,scope:U,job:M,subTree:W,um:H,m:q,a:j}=v;Hh(q),Hh(j),x&&Ro(x),U.stop(),M&&(M.flags|=8,Le(W,v,w,P)),H&&Ct(H,w),Ct(()=>{v.isUnmounted=!0},w)},At=(v,w,P,x=!1,U=!1,M=0)=>{for(let W=M;W<v.length;W++)Le(v[W],w,P,x,U)},O=v=>{if(v.shapeFlag&6)return O(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const w=m(v.anchor||v.el),P=w&&w[mE];return P?m(P):w};let J=!1;const G=(v,w,P)=>{v==null?w._vnode&&Le(w._vnode,null,null,!0):V(w._vnode||null,v,w,null,null,null,P),w._vnode=v,J||(J=!0,Lh(),Lp(),J=!1)},X={p:V,um:Le,m:Nt,r:Fe,mt:et,mc:_,pc:me,pbc:I,n:O,o:t};return{render:G,hydrate:void 0,createApp:BE(G)}}function Ec({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ar({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function JE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function tm(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=zn(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&tm(a,c)),c.type===ba&&c.patchFlag!==-1&&(c.el=a.el),c.type===ar&&!c.el&&(c.el=a.el)}}function YE(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function nm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:nm(e)}function Hh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const XE=Symbol.for("v-scx"),ZE=()=>jt(XE);function cs(t,e,n){return rm(t,e,n)}function rm(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:a}=n,c=yt({},n),l=e&&r||!e&&i!=="post";let h;if(Ai){if(i==="sync"){const y=ZE();h=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=sn,y.resume=sn,y.pause=sn,y}}const f=_t;c.call=(y,R,V)=>dn(y,f,R,V);let p=!1;i==="post"?c.scheduler=y=>{Ct(y,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(y,R)=>{R?y():jl(y)}),c.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const m=hE(t,e,c);return Ai&&(h?h.push(m):l&&m()),m}function ev(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?sm(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const a=Bi(this),c=rm(s,i.bind(r),n);return a(),c}function sm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const tv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${qt(e)}Modifiers`]||t[`${Br(e)}Modifiers`];function nv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),a=i&&tv(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>We(f)?f.trim():f)),a.number&&(s=n.map(Bo)));let c,l=r[c=dc(e)]||r[c=dc(qt(e))];!l&&i&&(l=r[c=dc(Br(e))]),l&&dn(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,dn(h,t,6,s)}}function im(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!de(t)){const l=h=>{const f=im(h,e,!0);f&&(c=!0,yt(a,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(De(t)&&r.set(t,null),null):(ie(i)?i.forEach(l=>a[l]=null):yt(a,i),De(t)&&r.set(t,a),a)}function Aa(t,e){return!t||!ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Br(e))||Re(t,e))}function zh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:f,props:p,data:m,setupState:y,ctx:R,inheritAttrs:V}=t,D=zo(t);let $,N;try{if(n.shapeFlag&4){const K=s||r,te=K;$=rn(h.call(te,K,f,p,y,m,R)),N=c}else{const K=e;$=rn(K.length>1?K(p,{attrs:c,slots:a,emit:l}):K(p,null)),N=e.props?c:rv(c)}}catch(K){li.length=0,Ta(K,t,1),$=Xe(ar)}let L=$;if(N&&V!==!1){const K=Object.keys(N),{shapeFlag:te}=L;K.length&&te&7&&(i&&K.some(Pl)&&(N=sv(N,i)),L=ps(L,N,!1,!0))}return n.dirs&&(L=ps(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&ql(L,n.transition),$=L,zo(D),$}const rv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ma(n))&&((e||(e={}))[n]=t[n]);return e},sv=(t,e)=>{const n={};for(const r in t)(!Pl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function iv(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Kh(r,a,h):!!a;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(a[m]!==r[m]&&!Aa(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Kh(r,a,h):!0:!!a;return!1}function Kh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Aa(n,i))return!0}return!1}function ov({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const om=t=>t.__isSuspense;function av(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):pE(t)}const nn=Symbol.for("v-fgt"),ba=Symbol.for("v-txt"),ar=Symbol.for("v-cmt"),vc=Symbol.for("v-stc"),li=[];let Vt=null;function Me(t=!1){li.push(Vt=t?null:[])}function cv(){li.pop(),Vt=li[li.length-1]||null}let wi=1;function Wh(t,e=!1){wi+=t,t<0&&Vt&&e&&(Vt.hasOnce=!0)}function am(t){return t.dynamicChildren=wi>0?Vt||ss:null,cv(),wi>0&&Vt&&Vt.push(t),t}function je(t,e,n,r,s,i){return am(ue(t,e,n,r,s,i,!0))}function cm(t,e,n,r,s){return am(Xe(t,e,n,r,s,!0))}function Wo(t){return t?t.__v_isVNode===!0:!1}function Gs(t,e){return t.type===e.type&&t.key===e.key}const lm=({key:t})=>t??null,Po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||He(t)||de(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function ue(t,e=null,n=null,r=0,s=null,i=t===nn?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lm(e),ref:e&&Po(e),scopeId:Up,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kt};return c?(Gl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=We(n)?8:16),wi>0&&!a&&Vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Vt.push(l),l}const Xe=lv;function lv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===kE)&&(t=ar),Wo(t)){const c=ps(t,e,!0);return n&&Gl(c,n),wi>0&&!i&&Vt&&(c.shapeFlag&6?Vt[Vt.indexOf(t)]=c:Vt.push(c)),c.patchFlag=-2,c}if(vv(t)&&(t=t.__vccOpts),e){e=uv(e);let{class:c,style:l}=e;c&&!We(c)&&(e.class=Dr(c)),De(l)&&(Ul(l)&&!ie(l)&&(l=yt({},l)),e.style=Vl(l))}const a=We(t)?1:om(t)?128:gE(t)?64:De(t)?4:de(t)?2:0;return ue(t,e,n,r,s,a,i,!0)}function uv(t){return t?Ul(t)||Qp(t)?yt({},t):t:null}function ps(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=t,h=e?hv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&lm(h),ref:e&&e.ref?n&&i?ie(i)?i.concat(Po(e)):[i,Po(e)]:Po(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==nn?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ps(t.ssContent),ssFallback:t.ssFallback&&ps(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ql(f,l.clone(f)),f}function Ii(t=" ",e=0){return Xe(ba,null,t,e)}function Ra(t="",e=!1){return e?(Me(),cm(ar,null,t)):Xe(ar,null,t)}function rn(t){return t==null||typeof t=="boolean"?Xe(ar):ie(t)?Xe(nn,null,t.slice()):Wo(t)?zn(t):Xe(ba,null,String(t))}function zn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ps(t)}function Gl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Gl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Qp(e)?e._ctx=kt:s===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),r&64?(n=16,e=[Ii(e)]):n=8);t.children=e,t.shapeFlag|=n}function hv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Dr([e.class,r.class]));else if(s==="style")e.style=Vl([e.style,r.style]);else if(ma(s)){const i=e[s],a=r[s];a&&i!==a&&!(ie(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Zt(t,e,n,r=null){dn(t,e,7,[n,r])}const fv=Kp();let dv=0;function pv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||fv,i={uid:dv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new pp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yp(r,s),emitsOptions:im(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=nv.bind(null,i),t.ce&&t.ce(i),i}let _t=null;const um=()=>_t||kt;let Go,Kc;{const t=ya(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Go=e("__VUE_INSTANCE_SETTERS__",n=>_t=n),Kc=e("__VUE_SSR_SETTERS__",n=>Ai=n)}const Bi=t=>{const e=_t;return Go(t),t.scope.on(),()=>{t.scope.off(),Go(e)}},Gh=()=>{_t&&_t.scope.off(),Go(null)};function hm(t){return t.vnode.shapeFlag&4}let Ai=!1;function mv(t,e=!1,n=!1){e&&Kc(e);const{props:r,children:s}=t.vnode,i=hm(t);$E(t,r,i,e),KE(t,s,n||e);const a=i?gv(t,e):void 0;return e&&Kc(!1),a}function gv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,NE);const{setup:r}=n;if(r){Sn();const s=t.setupContext=r.length>1?yv(t):null,i=Bi(t),a=Ui(r,t,0,[t.props,s]),c=ap(a);if(Pn(),i(),(c||t.sp)&&!ai(t)&&Bp(t),c){if(a.then(Gh,Gh),e)return a.then(l=>{Qh(t,l)}).catch(l=>{Ta(l,t,0)});t.asyncDep=a}else Qh(t,a)}else fm(t)}function Qh(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Op(e)),fm(t)}function fm(t,e,n){const r=t.type;t.render||(t.render=r.render||sn);{const s=Bi(t);Sn();try{OE(t)}finally{Pn(),s()}}}const _v={get(t,e){return mt(t,"get",""),t[e]}};function yv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,_v),slots:t.slots,emit:t.emit,expose:e}}function Sa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Op(Bl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ci)return ci[n](t)},has(e,n){return n in e||n in ci}})):t.proxy}function Ev(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function vv(t){return de(t)&&"__vccOpts"in t}const Lt=(t,e)=>lE(t,e,Ai);function dm(t,e,n){const r=arguments.length;return r===2?De(e)&&!ie(e)?Wo(e)?Xe(t,null,[e]):Xe(t,e):Xe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Wo(n)&&(n=[n]),Xe(t,e,n))}const Tv="3.5.19";/**
* @vue/runtime-dom v3.5.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wc;const Jh=typeof window<"u"&&window.trustedTypes;if(Jh)try{Wc=Jh.createPolicy("vue",{createHTML:t=>t})}catch{}const pm=Wc?t=>Wc.createHTML(t):t=>t,wv="http://www.w3.org/2000/svg",Iv="http://www.w3.org/1998/Math/MathML",vn=typeof document<"u"?document:null,Yh=vn&&vn.createElement("template"),Av={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?vn.createElementNS(wv,t):e==="mathml"?vn.createElementNS(Iv,t):n?vn.createElement(t,{is:n}):vn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>vn.createTextNode(t),createComment:t=>vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Yh.innerHTML=pm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Yh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bv=Symbol("_vtc");function Rv(t,e,n){const r=t[bv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Xh=Symbol("_vod"),Sv=Symbol("_vsh"),Pv=Symbol(""),Cv=/(^|;)\s*display\s*:/;function kv(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Co(r,c,"")}else for(const a in e)n[a]==null&&Co(r,a,"");for(const a in n)a==="display"&&(i=!0),Co(r,a,n[a])}else if(s){if(e!==n){const a=r[Pv];a&&(n+=";"+a),r.cssText=n,i=Cv.test(n)}}else e&&t.removeAttribute("style");Xh in t&&(t[Xh]=i?r.display:"",t[Sv]&&(r.display="none"))}const Zh=/\s*!important$/;function Co(t,e,n){if(ie(n))n.forEach(r=>Co(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Vv(t,e);Zh.test(n)?t.setProperty(Br(r),n.replace(Zh,""),"important"):t[r]=n}}const ef=["Webkit","Moz","ms"],Tc={};function Vv(t,e){const n=Tc[e];if(n)return n;let r=qt(e);if(r!=="filter"&&r in t)return Tc[e]=r;r=_a(r);for(let s=0;s<ef.length;s++){const i=ef[s]+r;if(i in t)return Tc[e]=i}return e}const tf="http://www.w3.org/1999/xlink";function nf(t,e,n,r,s,i=Oy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(tf,e.slice(6,e.length)):t.setAttributeNS(tf,e,n):n==null||i&&!hp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":fn(n)?String(n):n)}function rf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?pm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=hp(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function In(t,e,n,r){t.addEventListener(e,n,r)}function Dv(t,e,n,r){t.removeEventListener(e,n,r)}const sf=Symbol("_vei");function Nv(t,e,n,r,s=null){const i=t[sf]||(t[sf]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Ov(e);if(r){const h=i[e]=Lv(r,s);In(t,c,h,l)}else a&&(Dv(t,c,a,l),i[e]=void 0)}}const of=/(?:Once|Passive|Capture)$/;function Ov(t){let e;if(of.test(t)){e={};let r;for(;r=t.match(of);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Br(t.slice(2)),e]}let wc=0;const xv=Promise.resolve(),Mv=()=>wc||(xv.then(()=>wc=0),wc=Date.now());function Lv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;dn(Fv(r,n.value),e,5,[r])};return n.value=t,n.attached=Mv(),n}function Fv(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const af=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Uv=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Rv(t,r,a):e==="style"?kv(t,n,r):ma(e)?Pl(e)||Nv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bv(t,e,r,a))?(rf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&nf(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!We(r))?rf(t,qt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),nf(t,e,r,a))};function Bv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&af(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return af(e)&&We(n)?!1:e in t}const cr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>Ro(e,n):e};function jv(t){t.target.composing=!0}function cf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $t=Symbol("_assign"),bi={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[$t]=cr(s);const i=r||s.props&&s.props.type==="number";In(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Bo(c)),t[$t](c)}),n&&In(t,"change",()=>{t.value=t.value.trim()}),e||(In(t,"compositionstart",jv),In(t,"compositionend",cf),In(t,"change",cf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[$t]=cr(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Bo(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},$v={deep:!0,created(t,e,n){t[$t]=cr(n),In(t,"change",()=>{const r=t._modelValue,s=ms(t),i=t.checked,a=t[$t];if(ie(r)){const c=Dl(r,s),l=c!==-1;if(i&&!l)a(r.concat(s));else if(!i&&l){const h=[...r];h.splice(c,1),a(h)}}else if(Rs(r)){const c=new Set(r);i?c.add(s):c.delete(s),a(c)}else a(mm(t,i))})},mounted:lf,beforeUpdate(t,e,n){t[$t]=cr(n),lf(t,e,n)}};function lf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ie(e))s=Dl(e,r.props.value)>-1;else if(Rs(e))s=e.has(r.props.value);else{if(e===n)return;s=Nr(e,mm(t,!0))}t.checked!==s&&(t.checked=s)}const qv={created(t,{value:e},n){t.checked=Nr(e,n.props.value),t[$t]=cr(n),In(t,"change",()=>{t[$t](ms(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[$t]=cr(r),e!==n&&(t.checked=Nr(e,r.props.value))}},Hv={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Rs(e);In(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?Bo(ms(a)):ms(a));t[$t](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,wa(()=>{t._assigning=!1})}),t[$t]=cr(r)},mounted(t,{value:e}){uf(t,e)},beforeUpdate(t,e,n){t[$t]=cr(n)},updated(t,{value:e}){t._assigning||uf(t,e)}};function uf(t,e){const n=t.multiple,r=ie(e);if(!(n&&!r&&!Rs(e))){for(let s=0,i=t.options.length;s<i;s++){const a=t.options[s],c=ms(a);if(n)if(r){const l=typeof c;l==="string"||l==="number"?a.selected=e.some(h=>String(h)===String(c)):a.selected=Dl(e,c)>-1}else a.selected=e.has(c);else if(Nr(ms(a),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ms(t){return"_value"in t?t._value:t.value}function mm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Gc={created(t,e,n){yo(t,e,n,null,"created")},mounted(t,e,n){yo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){yo(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){yo(t,e,n,r,"updated")}};function zv(t,e){switch(t){case"SELECT":return Hv;case"TEXTAREA":return bi;default:switch(e){case"checkbox":return $v;case"radio":return qv;default:return bi}}}function yo(t,e,n,r,s){const a=zv(t.tagName,n.props&&n.props.type)[s];a&&a(t,e,n,r)}const Kv=["ctrl","shift","alt","meta"],Wv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Kv.some(n=>t[`${n}Key`]&&!e.includes(n))},Gv=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let a=0;a<e.length;a++){const c=Wv[e[a]];if(c&&c(s,e))return}return t(s,...i)}))},Qv=yt({patchProp:Uv},Av);let hf;function Jv(){return hf||(hf=GE(Qv))}const Yv=((...t)=>{const e=Jv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Zv(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Xv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Xv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Zv(t){return We(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Xr=typeof document<"u";function gm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function eT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&gm(t.default)}const be=Object.assign;function Ic(t,e){const n={};for(const r in e){const s=e[r];n[r]=Jt(s)?s.map(t):t(s)}return n}const ui=()=>{},Jt=Array.isArray,_m=/#/g,tT=/&/g,nT=/\//g,rT=/=/g,sT=/\?/g,ym=/\+/g,iT=/%5B/g,oT=/%5D/g,Em=/%5E/g,aT=/%60/g,vm=/%7B/g,cT=/%7C/g,Tm=/%7D/g,lT=/%20/g;function Ql(t){return encodeURI(""+t).replace(cT,"|").replace(iT,"[").replace(oT,"]")}function uT(t){return Ql(t).replace(vm,"{").replace(Tm,"}").replace(Em,"^")}function Qc(t){return Ql(t).replace(ym,"%2B").replace(lT,"+").replace(_m,"%23").replace(tT,"%26").replace(aT,"`").replace(vm,"{").replace(Tm,"}").replace(Em,"^")}function hT(t){return Qc(t).replace(rT,"%3D")}function fT(t){return Ql(t).replace(_m,"%23").replace(sT,"%3F")}function dT(t){return t==null?"":fT(t).replace(nT,"%2F")}function Ri(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const pT=/\/$/,mT=t=>t.replace(pT,"");function Ac(t,e,n="/"){let r,s={},i="",a="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),a=e.slice(c,e.length)),r=ET(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:Ri(a)}}function gT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ff(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _T(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&gs(e.matched[r],n.matched[s])&&wm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!yT(t[n],e[n]))return!1;return!0}function yT(t,e){return Jt(t)?df(t,e):Jt(e)?df(e,t):t===e}function df(t,e){return Jt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ET(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Si;(function(t){t.pop="pop",t.push="push"})(Si||(Si={}));var hi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(hi||(hi={}));function vT(t){if(!t)if(Xr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mT(t)}const TT=/^[^#]+#/;function wT(t,e){return t.replace(TT,"#")+e}function IT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Pa=()=>({left:window.scrollX,top:window.scrollY});function AT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=IT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function pf(t,e){return(history.state?history.state.position-e:-1)+t}const Jc=new Map;function bT(t,e){Jc.set(t,e)}function RT(t){const e=Jc.get(t);return Jc.delete(t),e}let ST=()=>location.protocol+"//"+location.host;function Im(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),ff(l,"")}return ff(n,t)+r+s}function PT(t,e,n,r){let s=[],i=[],a=null;const c=({state:m})=>{const y=Im(t,location),R=n.value,V=e.value;let D=0;if(m){if(n.value=y,e.value=m,a&&a===R){a=null;return}D=V?m.position-V.position:0}else r(y);s.forEach($=>{$(n.value,R,{delta:D,type:Si.pop,direction:D?D>0?hi.forward:hi.back:hi.unknown})})};function l(){a=n.value}function h(m){s.push(m);const y=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return i.push(y),y}function f(){const{history:m}=window;m.state&&m.replaceState(be({},m.state,{scroll:Pa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function mf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Pa():null}}function CT(t){const{history:e,location:n}=window,r={value:Im(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:ST()+t+l;try{e[f?"replaceState":"pushState"](h,"",m),s.value=h}catch(y){console.error(y),n[f?"replace":"assign"](m)}}function a(l,h){const f=be({},e.state,mf(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=be({},s.value,e.state,{forward:l,scroll:Pa()});i(f.current,f,!0);const p=be({},mf(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:a}}function kT(t){t=vT(t);const e=CT(t),n=PT(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=be({location:"",base:t,go:r,createHref:wT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function VT(t){return typeof t=="string"||t&&typeof t=="object"}function Am(t){return typeof t=="string"||typeof t=="symbol"}const bm=Symbol("");var gf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(gf||(gf={}));function _s(t,e){return be(new Error,{type:t,[bm]:!0},e)}function En(t,e){return t instanceof Error&&bm in t&&(e==null||!!(t.type&e))}const _f="[^/]+?",DT={sensitive:!1,strict:!1,start:!0,end:!0},NT=/[.+*?^${}()[\]/\\]/g;function OT(t,e){const n=be({},DT,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let y=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(NT,"\\$&"),y+=40;else if(m.type===1){const{value:R,repeatable:V,optional:D,regexp:$}=m;i.push({name:R,repeatable:V,optional:D});const N=$||_f;if(N!==_f){y+=10;try{new RegExp(`(${N})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${R}" (${N}): `+K.message)}}let L=V?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;p||(L=D&&h.length<2?`(?:/${L})`:"/"+L),D&&(L+="?"),s+=L,y+=20,D&&(y+=-8),V&&(y+=-20),N===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(a),p={};if(!f)return null;for(let m=1;m<f.length;m++){const y=f[m]||"",R=i[m-1];p[R.name]=y&&R.repeatable?y.split("/"):y}return p}function l(h){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of m)if(y.type===0)f+=y.value;else if(y.type===1){const{value:R,repeatable:V,optional:D}=y,$=R in h?h[R]:"";if(Jt($)&&!V)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const N=Jt($)?$.join("/"):$;if(!N)if(D)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=N}}return f||"/"}return{re:a,score:r,keys:i,parse:c,stringify:l}}function xT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Rm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=xT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(yf(r))return 1;if(yf(s))return-1}return s.length-r.length}function yf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const MT={type:0,value:""},LT=/[a-zA-Z0-9_]/;function FT(t){if(!t)return[[]];if(t==="/")return[[MT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${h}": ${y}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),a()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:LT.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function UT(t,e,n){const r=OT(FT(t.path),n),s=be(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function BT(t,e){const n=[],r=new Map;e=wf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,y){const R=!y,V=vf(p);V.aliasOf=y&&y.record;const D=wf(e,p),$=[V];if("alias"in p){const K=typeof p.alias=="string"?[p.alias]:p.alias;for(const te of K)$.push(vf(be({},V,{components:y?y.record.components:V.components,path:te,aliasOf:y?y.record:V})))}let N,L;for(const K of $){const{path:te}=K;if(m&&te[0]!=="/"){const Ee=m.record.path,A=Ee[Ee.length-1]==="/"?"":"/";K.path=m.record.path+(te&&A+te)}if(N=UT(K,m,D),y?y.alias.push(N):(L=L||N,L!==N&&L.alias.push(N),R&&p.name&&!Tf(N)&&a(p.name)),Sm(N)&&l(N),V.children){const Ee=V.children;for(let A=0;A<Ee.length;A++)i(Ee[A],N,y&&y.children[A])}y=y||N}return L?()=>{a(L)}:ui}function a(p){if(Am(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function c(){return n}function l(p){const m=qT(p,n);n.splice(m,0,p),p.record.name&&!Tf(p)&&r.set(p.record.name,p)}function h(p,m){let y,R={},V,D;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw _s(1,{location:p});D=y.record.name,R=be(Ef(m.params,y.keys.filter(L=>!L.optional).concat(y.parent?y.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),p.params&&Ef(p.params,y.keys.map(L=>L.name))),V=y.stringify(R)}else if(p.path!=null)V=p.path,y=n.find(L=>L.re.test(V)),y&&(R=y.parse(V),D=y.record.name);else{if(y=m.name?r.get(m.name):n.find(L=>L.re.test(m.path)),!y)throw _s(1,{location:p,currentLocation:m});D=y.record.name,R=be({},m.params,p.params),V=y.stringify(R)}const $=[];let N=y;for(;N;)$.unshift(N.record),N=N.parent;return{name:D,path:V,params:R,matched:$,meta:$T($)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Ef(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function vf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:jT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function jT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Tf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $T(t){return t.reduce((e,n)=>be(e,n.meta),{})}function wf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function qT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Rm(t,e[i])<0?r=i:n=i+1}const s=HT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function HT(t){let e=t;for(;e=e.parent;)if(Sm(e)&&Rm(t,e)===0)return e}function Sm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function zT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ym," "),a=i.indexOf("="),c=Ri(a<0?i:i.slice(0,a)),l=a<0?null:Ri(i.slice(a+1));if(c in e){let h=e[c];Jt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function If(t){let e="";for(let n in t){const r=t[n];if(n=hT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Jt(r)?r.map(i=>i&&Qc(i)):[r&&Qc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function KT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Jt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const WT=Symbol(""),Af=Symbol(""),Ca=Symbol(""),Jl=Symbol(""),Yc=Symbol("");function Qs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Kn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(_s(4,{from:n,to:e})):m instanceof Error?l(m):VT(m)?l(_s(2,{from:e,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function bc(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const c in a.components){let l=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(gm(l)){const f=(l.__vccOpts||l)[e];f&&i.push(Kn(f,n,r,a,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${a.path}"`);const p=eT(f)?f.default:f;a.mods[c]=f,a.components[c]=p;const y=(p.__vccOpts||p)[e];return y&&Kn(y,n,r,a,c,s)()}))}}return i}function bf(t){const e=jt(Ca),n=jt(Jl),r=Lt(()=>{const l=Kt(t.to);return e.resolve(l)}),s=Lt(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(gs.bind(null,f));if(m>-1)return m;const y=Rf(l[h-2]);return h>1&&Rf(f)===y&&p[p.length-1].path!==y?p.findIndex(gs.bind(null,l[h-2])):m}),i=Lt(()=>s.value>-1&&XT(n.params,r.value.params)),a=Lt(()=>s.value>-1&&s.value===n.matched.length-1&&wm(n.params,r.value.params));function c(l={}){if(YT(l)){const h=e[Kt(t.replace)?"replace":"push"](Kt(t.to)).catch(ui);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Lt(()=>r.value.href),isActive:i,isExactActive:a,navigate:c}}function GT(t){return t.length===1?t[0]:t}const QT=Nn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:bf,setup(t,{slots:e}){const n=Fi(bf(t)),{options:r}=jt(Ca),s=Lt(()=>({[Sf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Sf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&GT(e.default(n));return t.custom?i:dm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),JT=QT;function YT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function XT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Jt(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Rf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sf=(t,e,n)=>t??e??n,ZT=Nn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=jt(Yc),s=Lt(()=>t.route||r.value),i=jt(Af,0),a=Lt(()=>{let h=Kt(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=Lt(()=>s.value.matched[a.value]);So(Af,Lt(()=>a.value+1)),So(WT,c),So(Yc,s);const l=$e();return cs(()=>[l.value,c.value,t.name],([h,f,p],[m,y,R])=>{f&&(f.instances[p]=h,y&&y!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),h&&f&&(!y||!gs(f,y)||!m)&&(f.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Pf(n.default,{Component:m,route:h});const y=p.props[f],R=y?y===!0?h.params:typeof y=="function"?y(h):y:null,D=dm(m,be({},R,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Pf(n.default,{Component:D,route:h})||D}}});function Pf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ew=ZT;function tw(t){const e=BT(t.routes,t),n=t.parseQuery||zT,r=t.stringifyQuery||If,s=t.history,i=Qs(),a=Qs(),c=Qs(),l=nE(jn);let h=jn;Xr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ic.bind(null,O=>""+O),p=Ic.bind(null,dT),m=Ic.bind(null,Ri);function y(O,J){let G,X;return Am(O)?(G=e.getRecordMatcher(O),X=J):X=O,e.addRoute(X,G)}function R(O){const J=e.getRecordMatcher(O);J&&e.removeRoute(J)}function V(){return e.getRoutes().map(O=>O.record)}function D(O){return!!e.getRecordMatcher(O)}function $(O,J){if(J=be({},J||l.value),typeof O=="string"){const P=Ac(n,O,J.path),x=e.resolve({path:P.path},J),U=s.createHref(P.fullPath);return be(P,x,{params:m(x.params),hash:Ri(P.hash),redirectedFrom:void 0,href:U})}let G;if(O.path!=null)G=be({},O,{path:Ac(n,O.path,J.path).path});else{const P=be({},O.params);for(const x in P)P[x]==null&&delete P[x];G=be({},O,{params:p(P)}),J.params=p(J.params)}const X=e.resolve(G,J),we=O.hash||"";X.params=f(m(X.params));const v=gT(r,be({},O,{hash:uT(we),path:X.path})),w=s.createHref(v);return be({fullPath:v,hash:we,query:r===If?KT(O.query):O.query||{}},X,{redirectedFrom:void 0,href:w})}function N(O){return typeof O=="string"?Ac(n,O,l.value.path):be({},O)}function L(O,J){if(h!==O)return _s(8,{from:J,to:O})}function K(O){return A(O)}function te(O){return K(be(N(O),{replace:!0}))}function Ee(O){const J=O.matched[O.matched.length-1];if(J&&J.redirect){const{redirect:G}=J;let X=typeof G=="function"?G(O):G;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=N(X):{path:X},X.params={}),be({query:O.query,hash:O.hash,params:X.path!=null?{}:O.params},X)}}function A(O,J){const G=h=$(O),X=l.value,we=O.state,v=O.force,w=O.replace===!0,P=Ee(G);if(P)return A(be(N(P),{state:typeof P=="object"?be({},we,P.state):we,force:v,replace:w}),J||G);const x=G;x.redirectedFrom=J;let U;return!v&&_T(r,X,G)&&(U=_s(16,{to:x,from:X}),Nt(X,X,!0,!1)),(U?Promise.resolve(U):I(x,X)).catch(M=>En(M)?En(M,2)?M:Ht(M):me(M,x,X)).then(M=>{if(M){if(En(M,2))return A(be({replace:w},N(M.to),{state:typeof M.to=="object"?be({},we,M.to.state):we,force:v}),J||x)}else M=S(x,X,!0,w,we);return b(x,X,M),M})}function _(O,J){const G=L(O,J);return G?Promise.reject(G):Promise.resolve()}function E(O){const J=Mn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(O):O()}function I(O,J){let G;const[X,we,v]=nw(O,J);G=bc(X.reverse(),"beforeRouteLeave",O,J);for(const P of X)P.leaveGuards.forEach(x=>{G.push(Kn(x,O,J))});const w=_.bind(null,O,J);return G.push(w),At(G).then(()=>{G=[];for(const P of i.list())G.push(Kn(P,O,J));return G.push(w),At(G)}).then(()=>{G=bc(we,"beforeRouteUpdate",O,J);for(const P of we)P.updateGuards.forEach(x=>{G.push(Kn(x,O,J))});return G.push(w),At(G)}).then(()=>{G=[];for(const P of v)if(P.beforeEnter)if(Jt(P.beforeEnter))for(const x of P.beforeEnter)G.push(Kn(x,O,J));else G.push(Kn(P.beforeEnter,O,J));return G.push(w),At(G)}).then(()=>(O.matched.forEach(P=>P.enterCallbacks={}),G=bc(v,"beforeRouteEnter",O,J,E),G.push(w),At(G))).then(()=>{G=[];for(const P of a.list())G.push(Kn(P,O,J));return G.push(w),At(G)}).catch(P=>En(P,8)?P:Promise.reject(P))}function b(O,J,G){c.list().forEach(X=>E(()=>X(O,J,G)))}function S(O,J,G,X,we){const v=L(O,J);if(v)return v;const w=J===jn,P=Xr?history.state:{};G&&(X||w?s.replace(O.fullPath,be({scroll:w&&P&&P.scroll},we)):s.push(O.fullPath,we)),l.value=O,Nt(O,J,G,w),Ht()}let T;function et(){T||(T=s.listen((O,J,G)=>{if(!Xt.listening)return;const X=$(O),we=Ee(X);if(we){A(be(we,{replace:!0,force:!0}),X).catch(ui);return}h=X;const v=l.value;Xr&&bT(pf(v.fullPath,G.delta),Pa()),I(X,v).catch(w=>En(w,12)?w:En(w,2)?(A(be(N(w.to),{force:!0}),X).then(P=>{En(P,20)&&!G.delta&&G.type===Si.pop&&s.go(-1,!1)}).catch(ui),Promise.reject()):(G.delta&&s.go(-G.delta,!1),me(w,X,v))).then(w=>{w=w||S(X,v,!1),w&&(G.delta&&!En(w,8)?s.go(-G.delta,!1):G.type===Si.pop&&En(w,20)&&s.go(-1,!1)),b(X,v,w)}).catch(ui)}))}let It=Qs(),ke=Qs(),le;function me(O,J,G){Ht(O);const X=ke.list();return X.length?X.forEach(we=>we(O,J,G)):console.error(O),Promise.reject(O)}function St(){return le&&l.value!==jn?Promise.resolve():new Promise((O,J)=>{It.add([O,J])})}function Ht(O){return le||(le=!O,et(),It.list().forEach(([J,G])=>O?G(O):J()),It.reset()),O}function Nt(O,J,G,X){const{scrollBehavior:we}=t;if(!Xr||!we)return Promise.resolve();const v=!G&&RT(pf(O.fullPath,0))||(X||!G)&&history.state&&history.state.scroll||null;return wa().then(()=>we(O,J,v)).then(w=>w&&AT(w)).catch(w=>me(w,O,J))}const Le=O=>s.go(O);let Fe;const Mn=new Set,Xt={currentRoute:l,listening:!0,addRoute:y,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:V,resolve:$,options:t,push:K,replace:te,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:a.add,afterEach:c.add,onError:ke.add,isReady:St,install(O){const J=this;O.component("RouterLink",JT),O.component("RouterView",ew),O.config.globalProperties.$router=J,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Kt(l)}),Xr&&!Fe&&l.value===jn&&(Fe=!0,K(s.location).catch(we=>{}));const G={};for(const we in jn)Object.defineProperty(G,we,{get:()=>l.value[we],enumerable:!0});O.provide(Ca,J),O.provide(Jl,Vp(G)),O.provide(Yc,l);const X=O.unmount;Mn.add(O),O.unmount=function(){Mn.delete(O),Mn.size<1&&(h=jn,T&&T(),T=null,l.value=jn,Fe=!1,le=!1),X()}}};function At(O){return O.reduce((J,G)=>J.then(()=>E(G)),Promise.resolve())}return Xt}function nw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const c=e.matched[a];c&&(t.matched.find(h=>gs(h,c))?r.push(c):n.push(c));const l=t.matched[a];l&&(e.matched.find(h=>gs(h,l))||s.push(l))}return[n,r,s]}function Yl(){return jt(Ca)}function rw(t){return jt(Jl)}const sw=()=>{};var Cf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},iw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Cm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,y=h&63;l||(y=64,a||(m=64)),r.push(n[f],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new ow;const m=i<<2|c>>4;if(r.push(m),h!==64){const y=c<<4&240|h>>2;if(r.push(y),p!==64){const R=h<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ow extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aw=function(t){const e=Pm(t);return Cm.encodeByteArray(e,!0)},Qo=function(t){return aw(t).replace(/\./g,"")},km=function(t){try{return Cm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=()=>cw().__FIREBASE_DEFAULTS__,uw=()=>{if(typeof process>"u"||typeof Cf>"u")return;const t=Cf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&km(t[1]);return e&&JSON.parse(e)},ka=()=>{try{return sw()||lw()||uw()||hw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vm=t=>ka()?.emulatorHosts?.[t],fw=t=>{const e=Vm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dm=()=>ka()?.config,Nm=t=>ka()?.[`_${t}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Om(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Qo(JSON.stringify(n)),Qo(JSON.stringify(a)),""].join(".")}const fi={};function mw(){const t={prod:[],emulator:[]};for(const e of Object.keys(fi))fi[e]?t.emulator.push(e):t.prod.push(e);return t}function gw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let kf=!1;function xm(t,e){if(typeof window>"u"||typeof document>"u"||!Ss(window.location.host)||fi[t]===e||fi[t]||kf)return;fi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=mw().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{kf=!0,a()},m}function f(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=gw(r),y=n("text"),R=document.getElementById(y)||document.createElement("span"),V=n("learnmore"),D=document.getElementById(V)||document.createElement("a"),$=n("preprendIcon"),N=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const L=m.element;c(L),f(D,V);const K=h();l(N,$),L.append(N,R,D,K),document.body.appendChild(L)}i?(R.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _w(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function yw(){const t=ka()?.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ew(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ww(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Iw(){return!yw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Aw(){try{return typeof indexedDB=="object"}catch{return!1}}function bw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Rw,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Sw(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new xn(s,c,r)}}function Sw(t,e){return t.replace(Pw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Pw=/\{\$([^}]+)}/g;function Cw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Or(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Vf(i)&&Vf(a)){if(!Or(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Vf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ys(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kw(t,e){const n=new Vw(t,e);return n.subscribe.bind(n)}class Vw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Dw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Rc),s.error===void 0&&(s.error=Rc),s.complete===void 0&&(s.complete=Rc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xw(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ow(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ow(t){return t===Rr?void 0:t}function xw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Lw={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Fw=ge.INFO,Uw={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Bw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Uw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xl{constructor(e){this.name=e,this._logLevel=Fw,this._logHandler=Bw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const jw=(t,e)=>e.some(n=>t instanceof n);let Df,Nf;function $w(){return Df||(Df=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qw(){return Nf||(Nf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mm=new WeakMap,Xc=new WeakMap,Lm=new WeakMap,Sc=new WeakMap,Zl=new WeakMap;function Hw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(er(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Mm.set(n,t)}).catch(()=>{}),Zl.set(e,t),e}function zw(t){if(Xc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Xc.set(t,e)}let Zc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kw(t){Zc=t(Zc)}function Ww(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pc(this),e,...n);return Lm.set(r,e.sort?e.sort():[e]),er(r)}:qw().includes(t)?function(...e){return t.apply(Pc(this),e),er(Mm.get(this))}:function(...e){return er(t.apply(Pc(this),e))}}function Gw(t){return typeof t=="function"?Ww(t):(t instanceof IDBTransaction&&zw(t),jw(t,$w())?new Proxy(t,Zc):t)}function er(t){if(t instanceof IDBRequest)return Hw(t);if(Sc.has(t))return Sc.get(t);const e=Gw(t);return e!==t&&(Sc.set(t,e),Zl.set(e,t)),e}const Pc=t=>Zl.get(t);function Qw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=er(a);return r&&a.addEventListener("upgradeneeded",l=>{r(er(a.result),l.oldVersion,l.newVersion,er(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Jw=["get","getKey","getAll","getAllKeys","count"],Yw=["put","add","delete","clear"],Cc=new Map;function Of(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cc.get(e))return Cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Yw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Jw.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Cc.set(e,i),i}Kw(t=>({...t,get:(e,n,r)=>Of(e,n)||t.get(e,n,r),has:(e,n)=>!!Of(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zw(t){return t.getComponent()?.type==="VERSION"}const el="@firebase/app",xf="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Xl("@firebase/app"),eI="@firebase/app-compat",tI="@firebase/analytics-compat",nI="@firebase/analytics",rI="@firebase/app-check-compat",sI="@firebase/app-check",iI="@firebase/auth",oI="@firebase/auth-compat",aI="@firebase/database",cI="@firebase/data-connect",lI="@firebase/database-compat",uI="@firebase/functions",hI="@firebase/functions-compat",fI="@firebase/installations",dI="@firebase/installations-compat",pI="@firebase/messaging",mI="@firebase/messaging-compat",gI="@firebase/performance",_I="@firebase/performance-compat",yI="@firebase/remote-config",EI="@firebase/remote-config-compat",vI="@firebase/storage",TI="@firebase/storage-compat",wI="@firebase/firestore",II="@firebase/ai",AI="@firebase/firestore-compat",bI="firebase",RI="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="[DEFAULT]",SI={[el]:"fire-core",[eI]:"fire-core-compat",[nI]:"fire-analytics",[tI]:"fire-analytics-compat",[sI]:"fire-app-check",[rI]:"fire-app-check-compat",[iI]:"fire-auth",[oI]:"fire-auth-compat",[aI]:"fire-rtdb",[cI]:"fire-data-connect",[lI]:"fire-rtdb-compat",[uI]:"fire-fn",[hI]:"fire-fn-compat",[fI]:"fire-iid",[dI]:"fire-iid-compat",[pI]:"fire-fcm",[mI]:"fire-fcm-compat",[gI]:"fire-perf",[_I]:"fire-perf-compat",[yI]:"fire-rc",[EI]:"fire-rc-compat",[vI]:"fire-gcs",[TI]:"fire-gcs-compat",[wI]:"fire-fst",[AI]:"fire-fst-compat",[II]:"fire-vertex","fire-js":"fire-js",[bI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Map,PI=new Map,nl=new Map;function Mf(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ys(t){const e=t.name;if(nl.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;nl.set(e,t);for(const n of Jo.values())Mf(n,t);for(const n of PI.values())Mf(n,t);return!0}function eu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new ji("app","Firebase",CI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=RI;function Fm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:tl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw tr.create("bad-app-name",{appName:String(s)});if(n||(n=Dm()),!n)throw tr.create("no-options");const i=Jo.get(s);if(i){if(Or(n,i.options)&&Or(r,i.config))return i;throw tr.create("duplicate-app",{appName:s})}const a=new Mw(s);for(const l of nl.values())a.addComponent(l);const c=new kI(n,r,a);return Jo.set(s,c),c}function Um(t=tl){const e=Jo.get(t);if(!e&&t===tl&&Dm())return Fm();if(!e)throw tr.create("no-app",{appName:t});return e}function nr(t,e,n){let r=SI[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(a.join(" "));return}ys(new xr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="firebase-heartbeat-database",DI=1,Pi="firebase-heartbeat-store";let kc=null;function Bm(){return kc||(kc=Qw(VI,DI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Pi)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),kc}async function NI(t){try{const n=(await Bm()).transaction(Pi),r=await n.objectStore(Pi).get(jm(t));return await n.done,r}catch(e){if(e instanceof xn)Cn.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e?.message});Cn.warn(n.message)}}}async function Lf(t,e){try{const r=(await Bm()).transaction(Pi,"readwrite");await r.objectStore(Pi).put(e,jm(t)),await r.done}catch(n){if(n instanceof xn)Cn.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n?.message});Cn.warn(r.message)}}}function jm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=1024,xI=30;class MI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ff();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>xI){const s=UI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Cn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ff(),{heartbeatsToSend:n,unsentEntries:r}=LI(this._heartbeatsCache.heartbeats),s=Qo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Cn.warn(e),""}}}function Ff(){return new Date().toISOString().substring(0,10)}function LI(t,e=OI){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Uf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Uf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Aw()?bw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await NI(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Lf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Uf(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}function UI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t){ys(new xr("platform-logger",e=>new Xw(e),"PRIVATE")),ys(new xr("heartbeat",e=>new MI(e),"PRIVATE")),nr(el,xf,t),nr(el,xf,"esm2020"),nr("fire-js","")}BI("");var jI="firebase",$I="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr(jI,$I,"app");function $m(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qI=$m,qm=new ji("auth","Firebase",$m());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=new Xl("@firebase/auth");function HI(t,...e){Yo.logLevel<=ge.WARN&&Yo.warn(`Auth (${Ps}): ${t}`,...e)}function ko(t,...e){Yo.logLevel<=ge.ERROR&&Yo.error(`Auth (${Ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw tu(t,...e)}function on(t,...e){return tu(t,...e)}function Hm(t,e,n){const r={...qI(),[e]:n};return new ji("auth","Firebase",r).create(e,{appName:t.name})}function Rn(t){return Hm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qm.create(t,...e)}function oe(t,e,...n){if(!t)throw tu(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ko(e),new Error(e)}function kn(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){return typeof self<"u"&&self.location?.href||""}function zI(){return Bf()==="http:"||Bf()==="https:"}function Bf(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zI()||vw()||"connection"in navigator)?navigator.onLine:!0}function WI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=_w()||Tw()}get(){return KI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JI=new qi(3e4,6e4);function mr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function gr(t,e,n,r,s={}){return Km(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=$i({key:t.config.apiKey,...a}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...i};return Ew()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Ss(t.emulatorConfig.host)&&(h.credentials="include"),zm.fetch()(await Wm(t,t.config.apiHost,n,c),h)})}async function Km(t,e,n){t._canInitEmulator=!1;const r={...GI,...e};try{const s=new XI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Eo(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Eo(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw Eo(t,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Hm(t,f,h);Yt(t,f)}}catch(s){if(s instanceof xn)throw s;Yt(t,"network-request-failed",{message:String(s)})}}async function Hi(t,e,n,r,s={}){const i=await gr(t,e,n,r,s);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Wm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?nu(t.config,s):`${t.config.apiScheme}://${s}`;return QI.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function YI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),JI.get())})}}function Eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}function jf(t){return t!==void 0&&t.enterprise!==void 0}class ZI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function e0(t,e){return gr(t,"GET","/v2/recaptchaConfig",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(t,e){return gr(t,"POST","/v1/accounts:delete",e)}async function Xo(t,e){return gr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function n0(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),s=ru(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:di(Vc(s.auth_time)),issuedAtTime:di(Vc(s.iat)),expirationTime:di(Vc(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Vc(t){return Number(t)*1e3}function ru(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const s=km(n);return s?JSON.parse(s):(ko("Failed to decode base64 JWT payload"),null)}catch(s){return ko("Caught error parsing JWT payload as JSON",s?.toString()),null}}function $f(t){const e=ru(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&r0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function r0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t){const e=t.auth,n=await t.getIdToken(),r=await Ci(t,Xo(e,{idToken:n}));oe(r?.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=s.providerUserInfo?.length?Gm(s.providerUserInfo):[],a=o0(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!a?.length,h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sl(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function i0(t){const e=Ze(t);await Zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function o0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Gm(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(t,e){const n=await Km(t,{},async()=>{const r=$i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await Wm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Ss(t.emulatorConfig.host)&&(l.credentials="include"),zm.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function c0(t,e){return gr(t,"POST","/v2/accounts:revokeToken",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$f(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=$f(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await a0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new ls;return r&&(oe(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ls,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new s0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ci(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return n0(this,e)}reload(){return i0(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Zo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(Rn(this.auth));const e=await this.getIdToken();return await Ci(this,t0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:y,providerData:R,stsTokenManager:V}=n;oe(p&&V,e,"internal-error");const D=ls.fromJSON(this.name,V);oe(typeof p=="string",e,"internal-error"),$n(r,e.name),$n(s,e.name),oe(typeof m=="boolean",e,"internal-error"),oe(typeof y=="boolean",e,"internal-error"),$n(i,e.name),$n(a,e.name),$n(c,e.name),$n(l,e.name),$n(h,e.name),$n(f,e.name);const $=new Wt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:D,createdAt:h,lastLoginAt:f});return R&&Array.isArray(R)&&($.providerData=R.map(N=>({...N}))),l&&($._redirectEventId=l),$}static async _fromIdTokenResponse(e,n,r=!1){const s=new ls;s.updateFromServerResponse(n);const i=new Wt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Zo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Gm(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,c=new ls;c.updateFromIdToken(r);const l=new Wt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new sl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=new Map;function bn(t){kn(t instanceof Function,"Expected a class definition");let e=qf.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qm.type="NONE";const Hf=Qm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Vo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Vo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Xo(this.auth,{idToken:e}).catch(()=>{});return n?Wt._fromGetAccountInfoResponse(this.auth,n,e):null}return Wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new us(bn(Hf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||bn(Hf);const a=Vo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const m=await Xo(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Wt._fromGetAccountInfoResponse(e,m,f)}else p=Wt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new us(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new us(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tg(e))return"Blackberry";if(ng(e))return"Webos";if(Ym(e))return"Safari";if((e.includes("chrome/")||Xm(e))&&!e.includes("edge/"))return"Chrome";if(eg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Jm(t=Et()){return/firefox\//i.test(t)}function Ym(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xm(t=Et()){return/crios\//i.test(t)}function Zm(t=Et()){return/iemobile/i.test(t)}function eg(t=Et()){return/android/i.test(t)}function tg(t=Et()){return/blackberry/i.test(t)}function ng(t=Et()){return/webos/i.test(t)}function su(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function l0(t=Et()){return su(t)&&!!window.navigator?.standalone}function u0(){return ww()&&document.documentMode===10}function rg(t=Et()){return su(t)||eg(t)||ng(t)||tg(t)||/windows phone/i.test(t)||Zm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t,e=[]){let n;switch(t){case"Browser":n=zf(Et());break;case"Worker":n=`${zf(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0(t,e={}){return gr(t,"GET","/v2/passwordPolicy",mr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=6;class p0{constructor(e){const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??d0,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kf(this),this.idTokenSubscription=new Kf(this),this.beforeStateQueue=new h0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bn(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await us.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Xo(this,{idToken:e}),r=await Wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Ft(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===a)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Zo(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(Rn(this));const n=e?Ze(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f0(this),n=new p0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await c0(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bn(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&HI(`Error while retrieving App Check token: ${e.error}`),e?.token}}function jr(t){return Ze(t)}class Kf{constructor(e){this.auth=e,this.observer=null,this.addObserver=kw(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function g0(t){Va=t}function ig(t){return Va.loadJS(t)}function _0(){return Va.recaptchaEnterpriseScript}function y0(){return Va.gapiScript}function E0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class v0{constructor(){this.enterprise=new T0}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class T0{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const w0="recaptcha-enterprise",og="NO_RECAPTCHA";class I0{constructor(e){this.type=w0,this.auth=jr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{e0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new ZI(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;jf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(og)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new v0().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!n&&jf(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=_0();l.length!==0&&(l+=c),ig(l).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function Wf(t,e,n,r=!1,s=!1){const i=new I0(t);let a;if(s)a=og;else try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function il(t,e,n,r,s){if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Wf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Wf(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A0(t,e){const n=eu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Or(i,e??{}))return s;Yt(s,"already-initialized")}return n.initialize({options:e})}function b0(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(bn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function R0(t,e,n){const r=jr(t);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ag(e),{host:a,port:c}=S0(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(Or(h,r.config.emulator)&&Or(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ss(a)?(Om(`${i}//${a}${l}`),xm("Auth",!0)):P0()}function ag(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function S0(t){const e=ag(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Gf(a)}}}function Gf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function P0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function C0(t,e){return gr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k0(t,e){return Hi(t,"POST","/v1/accounts:signInWithPassword",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V0(t,e){return Hi(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}async function D0(t,e){return Hi(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends iu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ki(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ki(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return il(e,n,"signInWithPassword",k0);case"emailLink":return V0(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return il(e,r,"signUpPassword",C0);case"emailLink":return D0(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t,e){return Hi(t,"POST","/v1/accounts:signInWithIdp",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="http://localhost";class Mr extends iu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const a=new Mr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return hs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hs(e,n)}buildRequest(){const e={requestUri:N0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function x0(t){const e=Ys(Xs(t)).link,n=e?Ys(Xs(e)).deep_link_id:null,r=Ys(Xs(t)).deep_link_id;return(r?Ys(Xs(r)).link:null)||r||n||e||t}class ou{constructor(e){const n=Ys(Xs(e)),r=n.apiKey??null,s=n.oobCode??null,i=O0(n.mode??null);oe(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=x0(e);try{return new ou(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(){this.providerId=Cs.PROVIDER_ID}static credential(e,n){return ki._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ou.parseLink(n);return oe(r,"argument-error"),ki._fromEmailAndCode(e,r.code,r.tenantId)}}Cs.PROVIDER_ID="password";Cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends cg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends zi{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends zi{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends zi{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jn.credential(n,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M0(t,e){return Hi(t,"POST","/v1/accounts:signUp",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Wt._fromIdTokenResponse(e,r,s),a=Qf(r);return new Lr({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qf(r);return new Lr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends xn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ea.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ea(e,n,r,s)}}function lg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ea._fromErrorAndOperation(t,i,e,r):i})}async function L0(t,e,n=!1){const r=await Ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Lr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject(Rn(r));const s="reauthenticate";try{const i=await Ci(t,lg(r,s,e,t),n);oe(i.idToken,r,"internal-error");const a=ru(i.idToken);oe(a,r,"internal-error");const{sub:c}=a;return oe(t.uid===c,r,"user-mismatch"),Lr._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ug(t,e,n=!1){if(Ft(t.app))return Promise.reject(Rn(t));const r="signIn",s=await lg(t,r,e),i=await Lr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function U0(t,e){return ug(jr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hg(t){const e=jr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function B0(t,e,n){if(Ft(t.app))return Promise.reject(Rn(t));const r=jr(t),a=await il(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",M0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&hg(t),l}),c=await Lr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function j0(t,e,n){return Ft(t.app)?Promise.reject(Rn(t)):U0(Ze(t),Cs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hg(t),r})}function $0(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function q0(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}function fg(t,e,n,r){return Ze(t).onAuthStateChanged(e,n,r)}function H0(t){return Ze(t).signOut()}const ta="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ta,"1"),this.storage.removeItem(ta),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=1e3,K0=10;class pg extends dg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);u0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,K0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},z0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pg.type="LOCAL";const W0=pg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg extends dg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mg.type="SESSION";const gg=mg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Da(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await G0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Da.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=au("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function J0(t){an().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function Y0(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function X0(){return navigator?.serviceWorker?.controller||null}function Z0(){return _g()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="firebaseLocalStorageDb",eA=1,na="firebaseLocalStorage",Eg="fbase_key";class Ki{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Na(t,e){return t.transaction([na],e?"readwrite":"readonly").objectStore(na)}function tA(){const t=indexedDB.deleteDatabase(yg);return new Ki(t).toPromise()}function ol(){const t=indexedDB.open(yg,eA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(na,{keyPath:Eg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(na)?e(r):(r.close(),await tA(),e(await ol()))})})}async function Jf(t,e,n){const r=Na(t,!0).put({[Eg]:e,value:n});return new Ki(r).toPromise()}async function nA(t,e){const n=Na(t,!1).get(e),r=await new Ki(n).toPromise();return r===void 0?null:r.value}function Yf(t,e){const n=Na(t,!0).delete(e);return new Ki(n).toPromise()}const rA=800,sA=3;class vg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ol(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _g()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Da._getInstance(Z0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Y0(),!this.activeServiceWorker)return;this.sender=new Q0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||X0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ol();return await Jf(e,ta,"1"),await Yf(e,ta),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Na(s,!1).getAll();return new Ki(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vg.type="LOCAL";const iA=vg;new qi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(t,e){return e?bn(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends iu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aA(t){return ug(t.auth,new cu(t),t.bypassAuthState)}function cA(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),F0(n,new cu(t),t.bypassAuthState)}async function lA(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),L0(n,new cu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aA;case"linkViaPopup":case"linkViaRedirect":return lA;case"reauthViaPopup":case"reauthViaRedirect":return cA;default:Yt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=new qi(2e3,1e4);class rs extends Tg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uA.get())};e()}}rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA="pendingRedirect",Do=new Map;class fA extends Tg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Do.get(this.auth._key());if(!e){try{const r=await dA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Do.set(this.auth._key(),e)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dA(t,e){const n=gA(e),r=mA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function pA(t,e){Do.set(t._key(),e)}function mA(t){return bn(t._redirectPersistence)}function gA(t){return Vo(hA,t.config.apiKey,t.name)}async function _A(t,e,n=!1){if(Ft(t.app))return Promise.reject(Rn(t));const r=jr(t),s=oA(r,e),a=await new fA(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=600*1e3;class EA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!wg(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(on(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xf(e))}saveEventToCache(e){this.cachedEventUids.add(Xf(e)),this.lastProcessedEventTime=Date.now()}}function Xf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wg({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function vA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e={}){return gr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IA=/^https?/;async function AA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TA(t);for(const n of e)try{if(bA(n))return}catch{}Yt(t,"unauthorized-domain")}function bA(t){const e=rl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!IA.test(n))return!1;if(wA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA=new qi(3e4,6e4);function Zf(){const t=an().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SA(t){return new Promise((e,n)=>{function r(){Zf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zf(),n(on(t,"network-request-failed"))},timeout:RA.get()})}if(an().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(an().gapi?.load)r();else{const s=E0("iframefcb");return an()[s]=()=>{gapi.load?r():n(on(t,"network-request-failed"))},ig(`${y0()}?onload=${s}`).catch(i=>n(i))}}).catch(e=>{throw No=null,e})}let No=null;function PA(t){return No=No||SA(t),No}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA=new qi(5e3,15e3),kA="__/auth/iframe",VA="emulator/auth/iframe",DA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OA(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nu(e,VA):`https://${t.config.authDomain}/${kA}`,r={apiKey:e.apiKey,appName:t.name,v:Ps},s=NA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$i(r).slice(1)}`}async function xA(t){const e=await PA(t),n=an().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:OA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=on(t,"network-request-failed"),c=an().setTimeout(()=>{i(a)},CA.get());function l(){an().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LA=500,FA=600,UA="_blank",BA="http://localhost";class ed{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jA(t,e,n,r=LA,s=FA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...MA,width:r.toString(),height:s.toString(),top:i,left:a},h=Et().toLowerCase();n&&(c=Xm(h)?UA:n),Jm(h)&&(e=e||BA,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[y,R])=>`${m}${y}=${R},`,"");if(l0(h)&&c!=="_self")return $A(e||"",c),new ed(null);const p=window.open(e||"",c,f);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new ed(p)}function $A(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA="__/auth/handler",HA="emulator/auth/handler",zA=encodeURIComponent("fac");async function td(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ps,eventId:s};if(e instanceof cg){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Cw(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof zi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${zA}=${encodeURIComponent(l)}`:"";return`${KA(t)}?${$i(c).slice(1)}${h}`}function KA({config:t}){return t.emulator?nu(t,HA):`https://${t.authDomain}/${qA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="webStorageSupport";class WA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gg,this._completeRedirectFn=_A,this._overrideRedirectResult=pA}async _openPopup(e,n,r,s){kn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await td(e,n,r,rl(),s);return jA(e,i,au())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await td(e,n,r,rl(),s);return J0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(kn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xA(e),r=new EA(e);return n.register("authEvent",s=>(oe(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dc,{type:Dc},s=>{const i=s?.[0]?.[Dc];i!==void 0&&n(!!i),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rg()||Ym()||su()}}const GA=WA;var nd="@firebase/auth",rd="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YA(t){ys(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;oe(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sg(t)},h=new m0(r,s,i,l);return b0(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ys(new xr("auth-internal",e=>{const n=jr(e.getProvider("auth").getImmediate());return(r=>new QA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(nd,rd,JA(t)),nr(nd,rd,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=300,ZA=Nm("authIdTokenMaxAge")||XA;let sd=null;const eb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZA)return;const s=n?.token;sd!==s&&(sd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tb(t=Um()){const e=eu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=A0(t,{popupRedirectResolver:GA,persistence:[iA,W0,gg]}),r=Nm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=eb(i.toString());q0(n,a,()=>a(n.currentUser)),$0(n,c=>a(c))}}const s=Vm("auth");return s&&R0(n,`http://${s}`),n}function nb(){return document.getElementsByTagName("head")?.[0]??document}g0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",nb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YA("Browser");var id=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rr,Ig;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function E(){}E.prototype=_.prototype,A.D=_.prototype,A.prototype=new E,A.prototype.constructor=A,A.C=function(I,b,S){for(var T=Array(arguments.length-2),et=2;et<arguments.length;et++)T[et-2]=arguments[et];return _.prototype[b].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,E){E||(E=0);var I=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)I[b]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(b=0;16>b;++b)I[b]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=A.g[0],E=A.g[1],b=A.g[2];var S=A.g[3],T=_+(S^E&(b^S))+I[0]+3614090360&4294967295;_=E+(T<<7&4294967295|T>>>25),T=S+(b^_&(E^b))+I[1]+3905402710&4294967295,S=_+(T<<12&4294967295|T>>>20),T=b+(E^S&(_^E))+I[2]+606105819&4294967295,b=S+(T<<17&4294967295|T>>>15),T=E+(_^b&(S^_))+I[3]+3250441966&4294967295,E=b+(T<<22&4294967295|T>>>10),T=_+(S^E&(b^S))+I[4]+4118548399&4294967295,_=E+(T<<7&4294967295|T>>>25),T=S+(b^_&(E^b))+I[5]+1200080426&4294967295,S=_+(T<<12&4294967295|T>>>20),T=b+(E^S&(_^E))+I[6]+2821735955&4294967295,b=S+(T<<17&4294967295|T>>>15),T=E+(_^b&(S^_))+I[7]+4249261313&4294967295,E=b+(T<<22&4294967295|T>>>10),T=_+(S^E&(b^S))+I[8]+1770035416&4294967295,_=E+(T<<7&4294967295|T>>>25),T=S+(b^_&(E^b))+I[9]+2336552879&4294967295,S=_+(T<<12&4294967295|T>>>20),T=b+(E^S&(_^E))+I[10]+4294925233&4294967295,b=S+(T<<17&4294967295|T>>>15),T=E+(_^b&(S^_))+I[11]+2304563134&4294967295,E=b+(T<<22&4294967295|T>>>10),T=_+(S^E&(b^S))+I[12]+1804603682&4294967295,_=E+(T<<7&4294967295|T>>>25),T=S+(b^_&(E^b))+I[13]+4254626195&4294967295,S=_+(T<<12&4294967295|T>>>20),T=b+(E^S&(_^E))+I[14]+2792965006&4294967295,b=S+(T<<17&4294967295|T>>>15),T=E+(_^b&(S^_))+I[15]+1236535329&4294967295,E=b+(T<<22&4294967295|T>>>10),T=_+(b^S&(E^b))+I[1]+4129170786&4294967295,_=E+(T<<5&4294967295|T>>>27),T=S+(E^b&(_^E))+I[6]+3225465664&4294967295,S=_+(T<<9&4294967295|T>>>23),T=b+(_^E&(S^_))+I[11]+643717713&4294967295,b=S+(T<<14&4294967295|T>>>18),T=E+(S^_&(b^S))+I[0]+3921069994&4294967295,E=b+(T<<20&4294967295|T>>>12),T=_+(b^S&(E^b))+I[5]+3593408605&4294967295,_=E+(T<<5&4294967295|T>>>27),T=S+(E^b&(_^E))+I[10]+38016083&4294967295,S=_+(T<<9&4294967295|T>>>23),T=b+(_^E&(S^_))+I[15]+3634488961&4294967295,b=S+(T<<14&4294967295|T>>>18),T=E+(S^_&(b^S))+I[4]+3889429448&4294967295,E=b+(T<<20&4294967295|T>>>12),T=_+(b^S&(E^b))+I[9]+568446438&4294967295,_=E+(T<<5&4294967295|T>>>27),T=S+(E^b&(_^E))+I[14]+3275163606&4294967295,S=_+(T<<9&4294967295|T>>>23),T=b+(_^E&(S^_))+I[3]+4107603335&4294967295,b=S+(T<<14&4294967295|T>>>18),T=E+(S^_&(b^S))+I[8]+1163531501&4294967295,E=b+(T<<20&4294967295|T>>>12),T=_+(b^S&(E^b))+I[13]+2850285829&4294967295,_=E+(T<<5&4294967295|T>>>27),T=S+(E^b&(_^E))+I[2]+4243563512&4294967295,S=_+(T<<9&4294967295|T>>>23),T=b+(_^E&(S^_))+I[7]+1735328473&4294967295,b=S+(T<<14&4294967295|T>>>18),T=E+(S^_&(b^S))+I[12]+2368359562&4294967295,E=b+(T<<20&4294967295|T>>>12),T=_+(E^b^S)+I[5]+4294588738&4294967295,_=E+(T<<4&4294967295|T>>>28),T=S+(_^E^b)+I[8]+2272392833&4294967295,S=_+(T<<11&4294967295|T>>>21),T=b+(S^_^E)+I[11]+1839030562&4294967295,b=S+(T<<16&4294967295|T>>>16),T=E+(b^S^_)+I[14]+4259657740&4294967295,E=b+(T<<23&4294967295|T>>>9),T=_+(E^b^S)+I[1]+2763975236&4294967295,_=E+(T<<4&4294967295|T>>>28),T=S+(_^E^b)+I[4]+1272893353&4294967295,S=_+(T<<11&4294967295|T>>>21),T=b+(S^_^E)+I[7]+4139469664&4294967295,b=S+(T<<16&4294967295|T>>>16),T=E+(b^S^_)+I[10]+3200236656&4294967295,E=b+(T<<23&4294967295|T>>>9),T=_+(E^b^S)+I[13]+681279174&4294967295,_=E+(T<<4&4294967295|T>>>28),T=S+(_^E^b)+I[0]+3936430074&4294967295,S=_+(T<<11&4294967295|T>>>21),T=b+(S^_^E)+I[3]+3572445317&4294967295,b=S+(T<<16&4294967295|T>>>16),T=E+(b^S^_)+I[6]+76029189&4294967295,E=b+(T<<23&4294967295|T>>>9),T=_+(E^b^S)+I[9]+3654602809&4294967295,_=E+(T<<4&4294967295|T>>>28),T=S+(_^E^b)+I[12]+3873151461&4294967295,S=_+(T<<11&4294967295|T>>>21),T=b+(S^_^E)+I[15]+530742520&4294967295,b=S+(T<<16&4294967295|T>>>16),T=E+(b^S^_)+I[2]+3299628645&4294967295,E=b+(T<<23&4294967295|T>>>9),T=_+(b^(E|~S))+I[0]+4096336452&4294967295,_=E+(T<<6&4294967295|T>>>26),T=S+(E^(_|~b))+I[7]+1126891415&4294967295,S=_+(T<<10&4294967295|T>>>22),T=b+(_^(S|~E))+I[14]+2878612391&4294967295,b=S+(T<<15&4294967295|T>>>17),T=E+(S^(b|~_))+I[5]+4237533241&4294967295,E=b+(T<<21&4294967295|T>>>11),T=_+(b^(E|~S))+I[12]+1700485571&4294967295,_=E+(T<<6&4294967295|T>>>26),T=S+(E^(_|~b))+I[3]+2399980690&4294967295,S=_+(T<<10&4294967295|T>>>22),T=b+(_^(S|~E))+I[10]+4293915773&4294967295,b=S+(T<<15&4294967295|T>>>17),T=E+(S^(b|~_))+I[1]+2240044497&4294967295,E=b+(T<<21&4294967295|T>>>11),T=_+(b^(E|~S))+I[8]+1873313359&4294967295,_=E+(T<<6&4294967295|T>>>26),T=S+(E^(_|~b))+I[15]+4264355552&4294967295,S=_+(T<<10&4294967295|T>>>22),T=b+(_^(S|~E))+I[6]+2734768916&4294967295,b=S+(T<<15&4294967295|T>>>17),T=E+(S^(b|~_))+I[13]+1309151649&4294967295,E=b+(T<<21&4294967295|T>>>11),T=_+(b^(E|~S))+I[4]+4149444226&4294967295,_=E+(T<<6&4294967295|T>>>26),T=S+(E^(_|~b))+I[11]+3174756917&4294967295,S=_+(T<<10&4294967295|T>>>22),T=b+(_^(S|~E))+I[2]+718787259&4294967295,b=S+(T<<15&4294967295|T>>>17),T=E+(S^(b|~_))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+S&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var E=_-this.blockSize,I=this.B,b=this.h,S=0;S<_;){if(b==0)for(;S<=E;)s(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<_;)if(I[b++]=A.charCodeAt(S++),b==this.blockSize){s(this,I),b=0;break}}else for(;S<_;)if(I[b++]=A[S++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var E=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=E&255,E/=256;for(this.u(A),A=Array(16),_=E=0;4>_;++_)for(var I=0;32>I;I+=8)A[E++]=this.g[_]>>>I&255;return A};function i(A,_){var E=c;return Object.prototype.hasOwnProperty.call(E,A)?E[A]:E[A]=_(A)}function a(A,_){this.h=_;for(var E=[],I=!0,b=A.length-1;0<=b;b--){var S=A[b]|0;I&&S==_||(E[b]=S,I=!1)}this.g=E}var c={};function l(A){return-128<=A&&128>A?i(A,function(_){return new a([_|0],0>_?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return D(h(-A));for(var _=[],E=1,I=0;A>=E;I++)_[I]=A/E|0,E*=4294967296;return new a(_,0)}function f(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return D(f(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(_,8)),I=p,b=0;b<A.length;b+=8){var S=Math.min(8,A.length-b),T=parseInt(A.substring(b,b+S),_);8>S?(S=h(Math.pow(_,S)),I=I.j(S).add(h(T))):(I=I.j(E),I=I.add(h(T)))}return I}var p=l(0),m=l(1),y=l(16777216);t=a.prototype,t.m=function(){if(V(this))return-D(this).m();for(var A=0,_=1,E=0;E<this.g.length;E++){var I=this.i(E);A+=(0<=I?I:4294967296+I)*_,_*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(R(this))return"0";if(V(this))return"-"+D(this).toString(A);for(var _=h(Math.pow(A,6)),E=this,I="";;){var b=K(E,_).g;E=$(E,b.j(_));var S=((0<E.g.length?E.g[0]:E.h)>>>0).toString(A);if(E=b,R(E))return S+I;for(;6>S.length;)S="0"+S;I=S+I}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function R(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function V(A){return A.h==-1}t.l=function(A){return A=$(this,A),V(A)?-1:R(A)?0:1};function D(A){for(var _=A.g.length,E=[],I=0;I<_;I++)E[I]=~A.g[I];return new a(E,~A.h).add(m)}t.abs=function(){return V(this)?D(this):this},t.add=function(A){for(var _=Math.max(this.g.length,A.g.length),E=[],I=0,b=0;b<=_;b++){var S=I+(this.i(b)&65535)+(A.i(b)&65535),T=(S>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);I=T>>>16,S&=65535,T&=65535,E[b]=T<<16|S}return new a(E,E[E.length-1]&-2147483648?-1:0)};function $(A,_){return A.add(D(_))}t.j=function(A){if(R(this)||R(A))return p;if(V(this))return V(A)?D(this).j(D(A)):D(D(this).j(A));if(V(A))return D(this.j(D(A)));if(0>this.l(y)&&0>A.l(y))return h(this.m()*A.m());for(var _=this.g.length+A.g.length,E=[],I=0;I<2*_;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<A.g.length;b++){var S=this.i(I)>>>16,T=this.i(I)&65535,et=A.i(b)>>>16,It=A.i(b)&65535;E[2*I+2*b]+=T*It,N(E,2*I+2*b),E[2*I+2*b+1]+=S*It,N(E,2*I+2*b+1),E[2*I+2*b+1]+=T*et,N(E,2*I+2*b+1),E[2*I+2*b+2]+=S*et,N(E,2*I+2*b+2)}for(I=0;I<_;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=_;I<2*_;I++)E[I]=0;return new a(E,0)};function N(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function L(A,_){this.g=A,this.h=_}function K(A,_){if(R(_))throw Error("division by zero");if(R(A))return new L(p,p);if(V(A))return _=K(D(A),_),new L(D(_.g),D(_.h));if(V(_))return _=K(A,D(_)),new L(D(_.g),_.h);if(30<A.g.length){if(V(A)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var E=m,I=_;0>=I.l(A);)E=te(E),I=te(I);var b=Ee(E,1),S=Ee(I,1);for(I=Ee(I,2),E=Ee(E,2);!R(I);){var T=S.add(I);0>=T.l(A)&&(b=b.add(E),S=T),I=Ee(I,1),E=Ee(E,1)}return _=$(A,b.j(_)),new L(b,_)}for(b=p;0<=A.l(_);){for(E=Math.max(1,Math.floor(A.m()/_.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),S=h(E),T=S.j(_);V(T)||0<T.l(A);)E-=I,S=h(E),T=S.j(_);R(S)&&(S=m),b=b.add(S),A=$(A,T)}return new L(b,A)}t.A=function(A){return K(this,A).h},t.and=function(A){for(var _=Math.max(this.g.length,A.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)&A.i(I);return new a(E,this.h&A.h)},t.or=function(A){for(var _=Math.max(this.g.length,A.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)|A.i(I);return new a(E,this.h|A.h)},t.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),E=[],I=0;I<_;I++)E[I]=this.i(I)^A.i(I);return new a(E,this.h^A.h)};function te(A){for(var _=A.g.length+1,E=[],I=0;I<_;I++)E[I]=A.i(I)<<1|A.i(I-1)>>>31;return new a(E,A.h)}function Ee(A,_){var E=_>>5;_%=32;for(var I=A.g.length-E,b=[],S=0;S<I;S++)b[S]=0<_?A.i(S+E)>>>_|A.i(S+E+1)<<32-_:A.i(S+E);return new a(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ig=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,rr=a}).apply(typeof id<"u"?id:typeof self<"u"?self:typeof window<"u"?window:{});var vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ag,Zs,bg,Oo,al,Rg,Sg,Pg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof vo=="object"&&vo];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var C=o[g];if(!(C in d))break e;d=d[C]}o=o[o.length-1],g=d[o],u=u(g),u!=g&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,g=!1,C={next:function(){if(!g&&d<o.length){var k=d++;return{value:u(k,o[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function m(o,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function y(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function R(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,C,k){for(var z=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)z[Pe-2]=arguments[Pe];return u.prototype[C].apply(g,z)}}function V(o){const u=o.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=o[g];return d}return[]}function D(o,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const C=o.length||0,k=g.length||0;o.length=C+k;for(let z=0;z<k;z++)o[C+z]=g[z]}else o.push(g)}}class ${constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function N(o){return/^[\s\xa0]*$/.test(o)}function L(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var te=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function Ee(o,u,d){for(const g in o)u.call(d,o[g],g,o)}function A(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function _(o){const u={};for(const d in o)u[d]=o[d];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)o[d]=g[d];for(let k=0;k<E.length;k++)d=E[k],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function b(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function S(o){c.setTimeout(()=>{throw o},0)}function T(){var o=St;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class et{constructor(){this.h=this.g=null}add(u,d){const g=It.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var It=new $(()=>new ke,o=>o.reset());class ke{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let le,me=!1,St=new et,Ht=()=>{const o=c.Promise.resolve(void 0);le=()=>{o.then(Nt)}};var Nt=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(d){S(d)}var u=It;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}me=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var Mn=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return o})();function Xt(o,u){if(Fe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(te){e:{try{K(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:At[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Xt.aa.h.call(this)}}R(Xt,Fe);var At={2:"touch",3:"pen",4:"mouse"};Xt.prototype.h=function(){Xt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),J=0;function G(o,u,d,g,C){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=C,this.key=++J,this.da=this.fa=!1}function X(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function we(o){this.src=o,this.g={},this.h=0}we.prototype.add=function(o,u,d,g,C){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var z=w(o,u,g,C);return-1<z?(u=o[z],d||(u.fa=!1)):(u=new G(u,this.src,k,!!g,C),u.fa=d,o.push(u)),u};function v(o,u){var d=u.type;if(d in o.g){var g=o.g[d],C=Array.prototype.indexOf.call(g,u,void 0),k;(k=0<=C)&&Array.prototype.splice.call(g,C,1),k&&(X(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function w(o,u,d,g){for(var C=0;C<o.length;++C){var k=o[C];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==g)return C}return-1}var P="closure_lm_"+(1e6*Math.random()|0),x={};function U(o,u,d,g,C){if(Array.isArray(u)){for(var k=0;k<u.length;k++)U(o,u[k],d,g,C);return null}return d=ce(d),o&&o[O]?o.K(u,d,h(g)?!!g.capture:!1,C):M(o,u,d,!1,g,C)}function M(o,u,d,g,C,k){if(!u)throw Error("Invalid event type");var z=h(C)?!!C.capture:!!C,Pe=Q(o);if(Pe||(o[P]=Pe=new we(o)),d=Pe.add(u,d,g,z,k),d.proxy)return d;if(g=W(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)Mn||(C=z),C===void 0&&(C=!1),o.addEventListener(u.toString(),g,C);else if(o.attachEvent)o.attachEvent(j(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function W(){function o(d){return u.call(o.src,o.listener,d)}const u=re;return o}function H(o,u,d,g,C){if(Array.isArray(u))for(var k=0;k<u.length;k++)H(o,u[k],d,g,C);else g=h(g)?!!g.capture:!!g,d=ce(d),o&&o[O]?(o=o.i,u=String(u).toString(),u in o.g&&(k=o.g[u],d=w(k,d,g,C),-1<d&&(X(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete o.g[u],o.h--)))):o&&(o=Q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=w(u,d,g,C)),(d=-1<o?u[o]:null)&&q(d))}function q(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[O])v(u.i,o);else{var d=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(d,g,o.capture):u.detachEvent?u.detachEvent(j(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Q(u))?(v(d,o),d.h==0&&(d.src=null,u[P]=null)):X(o)}}}function j(o){return o in x?x[o]:x[o]="on"+o}function re(o,u){if(o.da)o=!0;else{u=new Xt(u,this);var d=o.listener,g=o.ha||o.src;o.fa&&q(o),o=d.call(g,u)}return o}function Q(o){return o=o[P],o instanceof we?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(u){return o.handleEvent(u)}),o[ee])}function se(){Le.call(this),this.i=new we(this),this.M=this,this.F=null}R(se,Le),se.prototype[O]=!0,se.prototype.removeEventListener=function(o,u,d,g){H(this,o,u,d,g)};function pe(o,u){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Fe(u,o);else if(u instanceof Fe)u.target=u.target||o;else{var C=u;u=new Fe(g,o),I(u,C)}if(C=!0,d)for(var k=d.length-1;0<=k;k--){var z=u.g=d[k];C=ve(z,g,!0,u)&&C}if(z=u.g=o,C=ve(z,g,!0,u)&&C,C=ve(z,g,!1,u)&&C,d)for(k=0;k<d.length;k++)z=u.g=d[k],C=ve(z,g,!1,u)&&C}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],g=0;g<d.length;g++)X(d[g]);delete o.g[u],o.h--}}this.F=null},se.prototype.K=function(o,u,d,g){return this.i.add(String(o),u,!1,d,g)},se.prototype.L=function(o,u,d,g){return this.i.add(String(o),u,!0,d,g)};function ve(o,u,d,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,k=0;k<u.length;++k){var z=u[k];if(z&&!z.da&&z.capture==d){var Pe=z.listener,st=z.ha||z.src;z.fa&&v(o.i,z),C=Pe.call(st,g)!==!1&&C}}return C&&!g.defaultPrevented}function tt(o,u,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function nt(o){o.g=tt(()=>{o.g=null,o.i&&(o.i=!1,nt(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ot extends Le{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:nt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lt(o){Le.call(this),this.h=o,this.g={}}R(lt,Le);var Ln=[];function Os(o){Ee(o.g,function(u,d){this.g.hasOwnProperty(d)&&q(u)},o),o.g={}}lt.prototype.N=function(){lt.aa.N.call(this),Os(this)},lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rt=c.JSON.stringify,xt=c.JSON.parse,Xi=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Hr(){}Hr.prototype.h=null;function $u(o){return o.h||(o.h=o.i())}function qu(){}var xs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Za(){Fe.call(this,"d")}R(Za,Fe);function ec(){Fe.call(this,"c")}R(ec,Fe);var Er={},Hu=null;function Zi(){return Hu=Hu||new se}Er.La="serverreachability";function zu(o){Fe.call(this,Er.La,o)}R(zu,Fe);function Ms(o){const u=Zi();pe(u,new zu(u))}Er.STAT_EVENT="statevent";function Ku(o,u){Fe.call(this,Er.STAT_EVENT,o),this.stat=u}R(Ku,Fe);function vt(o){const u=Zi();pe(u,new Ku(u,o))}Er.Ma="timingevent";function Wu(o,u){Fe.call(this,Er.Ma,o),this.size=u}R(Wu,Fe);function Ls(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Fs(){this.g=!0}Fs.prototype.xa=function(){this.g=!1};function ny(o,u,d,g,C,k){o.info(function(){if(o.g)if(k)for(var z="",Pe=k.split("&"),st=0;st<Pe.length;st++){var Ie=Pe[st].split("=");if(1<Ie.length){var ut=Ie[0];Ie=Ie[1];var ht=ut.split("_");z=2<=ht.length&&ht[1]=="type"?z+(ut+"="+Ie+"&"):z+(ut+"=redacted&")}}else z=null;else z=k;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+d+`
`+z})}function ry(o,u,d,g,C,k,z){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+d+`
`+k+" "+z})}function zr(o,u,d,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+iy(o,d)+(g?" "+g:"")})}function sy(o,u){o.info(function(){return"TIMEOUT: "+u})}Fs.prototype.info=function(){};function iy(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var k=C[0];if(k!="noop"&&k!="stop"&&k!="close")for(var z=1;z<C.length;z++)C[z]=""}}}}return rt(d)}catch{return u}}var eo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tc;function to(){}R(to,Hr),to.prototype.g=function(){return new XMLHttpRequest},to.prototype.i=function(){return{}},tc=new to;function Fn(o,u,d,g){this.j=o,this.i=u,this.l=d,this.R=g||1,this.U=new lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qu}function Qu(){this.i=null,this.g="",this.h=!1}var Ju={},nc={};function rc(o,u,d){o.L=1,o.v=io(gn(u)),o.m=d,o.P=!0,Yu(o,null)}function Yu(o,u){o.F=Date.now(),no(o),o.A=gn(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),hh(d.i,"t",g),o.C=0,d=o.j.J,o.h=new Qu,o.g=Ch(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Ot(m(o.Y,o,o.g),o.O)),u=o.U,d=o.g,g=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(Ln[0]=C.toString()),C=Ln);for(var k=0;k<C.length;k++){var z=U(d,C[k],g||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ms(),ny(o.i,o.u,o.A,o.l,o.R,o.m)}Fn.prototype.ca=function(o){o=o.target;const u=this.M;u&&_n(o)==3?u.j():this.Y(o)},Fn.prototype.Y=function(o){try{if(o==this.g)e:{const ht=_n(this.g);var u=this.g.Ba();const Gr=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||yh(this.g)))){this.J||ht!=4||u==7||(u==8||0>=Gr?Ms(3):Ms(2)),sc(this);var d=this.g.Z();this.X=d;t:if(Xu(this)){var g=yh(this.g);o="";var C=g.length,k=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vr(this),Us(this);var z="";break t}this.h.i=new c.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(k&&u==C-1)});g.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,ry(this.i,this.u,this.A,this.l,this.R,ht,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,st=this.g;if((Pe=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(Pe)){var Ie=Pe;break t}}Ie=null}if(d=Ie)zr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ic(this,d);else{this.o=!1,this.s=3,vt(12),vr(this),Us(this);break e}}if(this.P){d=!0;let zt;for(;!this.J&&this.C<z.length;)if(zt=oy(this,z),zt==nc){ht==4&&(this.s=4,vt(14),d=!1),zr(this.i,this.l,null,"[Incomplete Response]");break}else if(zt==Ju){this.s=4,vt(15),zr(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else zr(this.i,this.l,zt,null),ic(this,zt);if(Xu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||z.length!=0||this.h.h||(this.s=1,vt(16),d=!1),this.o=this.o&&d,!d)zr(this.i,this.l,z,"[Invalid Chunked Response]"),vr(this),Us(this);else if(0<z.length&&!this.W){this.W=!0;var ut=this.j;ut.g==this&&ut.ba&&!ut.M&&(ut.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),hc(ut),ut.M=!0,vt(11))}}else zr(this.i,this.l,z,null),ic(this,z);ht==4&&vr(this),this.o&&!this.J&&(ht==4?bh(this.j,this):(this.o=!1,no(this)))}else Iy(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),vr(this),Us(this)}}}catch{}finally{}};function Xu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function oy(o,u){var d=o.C,g=u.indexOf(`
`,d);return g==-1?nc:(d=Number(u.substring(d,g)),isNaN(d)?Ju:(g+=1,g+d>u.length?nc:(u=u.slice(g,g+d),o.C=g+d,u)))}Fn.prototype.cancel=function(){this.J=!0,vr(this)};function no(o){o.S=Date.now()+o.I,Zu(o,o.I)}function Zu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ls(m(o.ba,o),u)}function sc(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Fn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(sy(this.i,this.A),this.L!=2&&(Ms(),vt(17)),vr(this),this.s=2,Us(this)):Zu(this,this.S-o)};function Us(o){o.j.G==0||o.J||bh(o.j,o)}function vr(o){sc(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Os(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function ic(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||oc(d.h,o))){if(!o.K&&oc(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ho(d),lo(d);else break e;uc(d),vt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ls(m(d.Za,d),6e3));if(1>=nh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else wr(d,11)}else if((o.K||d.g==o)&&ho(d),!N(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let Ie=C[u];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const ut=Ie[3];ut!=null&&(d.la=ut,d.j.info("VER="+d.la));const ht=Ie[4];ht!=null&&(d.Aa=ht,d.j.info("SVER="+d.Aa));const Gr=Ie[5];Gr!=null&&typeof Gr=="number"&&0<Gr&&(g=1.5*Gr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const zt=o.g;if(zt){const po=zt.g?zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(po){var k=g.h;k.g||po.indexOf("spdy")==-1&&po.indexOf("quic")==-1&&po.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(ac(k,k.h),k.h=null))}if(g.D){const fc=zt.g?zt.g.getResponseHeader("X-HTTP-Session-Id"):null;fc&&(g.ya=fc,Ne(g.I,g.D,fc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var z=o;if(g.qa=Ph(g,g.J?g.ia:null,g.W),z.K){rh(g.h,z);var Pe=z,st=g.L;st&&(Pe.I=st),Pe.B&&(sc(Pe),no(Pe)),g.g=z}else Ih(g);0<d.i.length&&uo(d)}else Ie[0]!="stop"&&Ie[0]!="close"||wr(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?wr(d,7):lc(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}Ms(4)}catch{}}var ay=class{constructor(o,u){this.g=o,this.map=u}};function eh(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function th(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function nh(o){return o.h?1:o.g?o.g.size:0}function oc(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ac(o,u){o.g?o.g.add(u):o.h=u}function rh(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}eh.prototype.cancel=function(){if(this.i=sh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function sh(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return V(o.i)}function cy(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],d=o.length,g=0;g<d;g++)u.push(o[g]);return u}u=[],d=0;for(g in o)u[d++]=o[g];return u}function ly(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const g in o)u[d++]=g;return u}}}function ih(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=ly(o),g=cy(o),C=g.length,k=0;k<C;k++)u.call(void 0,g[k],d&&d[k],o)}var oh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uy(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),C=null;if(0<=g){var k=o[d].substring(0,g);C=o[d].substring(g+1)}else k=o[d];u(k,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Tr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Tr){this.h=o.h,ro(this,o.j),this.o=o.o,this.g=o.g,so(this,o.s),this.l=o.l;var u=o.i,d=new $s;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),ah(this,d),this.m=o.m}else o&&(u=String(o).match(oh))?(this.h=!1,ro(this,u[1]||"",!0),this.o=Bs(u[2]||""),this.g=Bs(u[3]||"",!0),so(this,u[4]),this.l=Bs(u[5]||"",!0),ah(this,u[6]||"",!0),this.m=Bs(u[7]||"")):(this.h=!1,this.i=new $s(null,this.h))}Tr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(js(u,ch,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(js(u,ch,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(js(d,d.charAt(0)=="/"?dy:fy,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",js(d,my)),o.join("")};function gn(o){return new Tr(o)}function ro(o,u,d){o.j=d?Bs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function so(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function ah(o,u,d){u instanceof $s?(o.i=u,gy(o.i,o.h)):(d||(u=js(u,py)),o.i=new $s(u,o.h))}function Ne(o,u,d){o.i.set(u,d)}function io(o){return Ne(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Bs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function js(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,hy),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function hy(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ch=/[#\/\?@]/g,fy=/[#\?:]/g,dy=/[#\?]/g,py=/[#\?@]/g,my=/#/g;function $s(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Un(o){o.g||(o.g=new Map,o.h=0,o.i&&uy(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=$s.prototype,t.add=function(o,u){Un(this),this.i=null,o=Kr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function lh(o,u){Un(o),u=Kr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function uh(o,u){return Un(o),u=Kr(o,u),o.g.has(u)}t.forEach=function(o,u){Un(this),this.g.forEach(function(d,g){d.forEach(function(C){o.call(u,C,g,this)},this)},this)},t.na=function(){Un(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const C=o[g];for(let k=0;k<C.length;k++)d.push(u[g])}return d},t.V=function(o){Un(this);let u=[];if(typeof o=="string")uh(this,o)&&(u=u.concat(this.g.get(Kr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return Un(this),this.i=null,o=Kr(this,o),uh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function hh(o,u,d){lh(o,u),0<d.length&&(o.i=null,o.g.set(Kr(o,u),V(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const k=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var C=k;z[g]!==""&&(C+="="+encodeURIComponent(String(z[g]))),o.push(C)}}return this.i=o.join("&")};function Kr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function gy(o,u){u&&!o.j&&(Un(o),o.i=null,o.g.forEach(function(d,g){var C=g.toLowerCase();g!=C&&(lh(this,g),hh(this,C,d))},o)),o.j=u}function _y(o,u){const d=new Fs;if(c.Image){const g=new Image;g.onload=y(Bn,d,"TestLoadImage: loaded",!0,u,g),g.onerror=y(Bn,d,"TestLoadImage: error",!1,u,g),g.onabort=y(Bn,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=y(Bn,d,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function yy(o,u){const d=new Fs,g=new AbortController,C=setTimeout(()=>{g.abort(),Bn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(k=>{clearTimeout(C),k.ok?Bn(d,"TestPingServer: ok",!0,u):Bn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Bn(d,"TestPingServer: error",!1,u)})}function Bn(o,u,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function Ey(){this.g=new Xi}function vy(o,u,d){const g=d||"";try{ih(o,function(C,k){let z=C;h(C)&&(z=rt(C)),u.push(g+k+"="+encodeURIComponent(z))})}catch(C){throw u.push(g+"type="+encodeURIComponent("_badmap")),C}}function oo(o){this.l=o.Ub||null,this.j=o.eb||!1}R(oo,Hr),oo.prototype.g=function(){return new ao(this.l,this.j)},oo.prototype.i=(function(o){return function(){return o}})({});function ao(o,u){se.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ao,se),t=ao.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Hs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function fh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?qs(this):Hs(this),this.readyState==3&&fh(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,qs(this))},t.Qa=function(o){this.g&&(this.response=o,qs(this))},t.ga=function(){this.g&&qs(this)};function qs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Hs(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Hs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function dh(o){let u="";return Ee(o,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function cc(o,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=dh(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Ne(o,u,d))}function Be(o){se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Be,se);var Ty=/^https?$/i,wy=["POST","PUT"];t=Be.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tc.g(),this.v=this.o?$u(this.o):$u(tc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){ph(this,k);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())d.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),C=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(wy,u,void 0))||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,z]of d)this.g.setRequestHeader(k,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_h(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){ph(this,k)}};function ph(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,mh(o),co(o)}function mh(o){o.A||(o.A=!0,pe(o,"complete"),pe(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,pe(this,"complete"),pe(this,"abort"),co(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),co(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?gh(this):this.bb())},t.bb=function(){gh(this)};function gh(o){if(o.h&&typeof a<"u"&&(!o.v[1]||_n(o)!=4||o.Z()!=2)){if(o.u&&_n(o)==4)tt(o.Ea,0,o);else if(pe(o,"readystatechange"),_n(o)==4){o.h=!1;try{const z=o.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=z===0){var C=String(o.D).match(oh)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!Ty.test(C?C.toLowerCase():"")}d=g}if(d)pe(o,"complete"),pe(o,"success");else{o.m=6;try{var k=2<_n(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",mh(o)}}finally{co(o)}}}}function co(o,u){if(o.g){_h(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||pe(o,"ready");try{d.onreadystatechange=g}catch{}}}function _h(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function _n(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),xt(u)}};function yh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Iy(o){const u={};o=(o.g&&2<=_n(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(N(o[g]))continue;var d=b(o[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[C]||[];u[C]=k,k.push(d)}A(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zs(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Eh(o){this.Aa=0,this.i=[],this.j=new Fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zs("baseRetryDelayMs",5e3,o),this.cb=zs("retryDelaySeedMs",1e4,o),this.Wa=zs("forwardChannelMaxRetries",2,o),this.wa=zs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new eh(o&&o.concurrentRequestLimit),this.Da=new Ey,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Eh.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,g){vt(0),this.W=o,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Ph(this,null,this.W),uo(this)};function lc(o){if(vh(o),o.G==3){var u=o.U++,d=gn(o.I);if(Ne(d,"SID",o.K),Ne(d,"RID",u),Ne(d,"TYPE","terminate"),Ks(o,d),u=new Fn(o,o.j,u),u.L=2,u.v=io(gn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Ch(u.j,null),u.g.ea(u.v)),u.F=Date.now(),no(u)}Sh(o)}function lo(o){o.g&&(hc(o),o.g.cancel(),o.g=null)}function vh(o){lo(o),o.u&&(c.clearTimeout(o.u),o.u=null),ho(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function uo(o){if(!th(o.h)&&!o.s){o.s=!0;var u=o.Ga;le||Ht(),me||(le(),me=!0),St.add(u,o),o.B=0}}function Ay(o,u){return nh(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ls(m(o.Ga,o,u),Rh(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new Fn(this,this.j,o);let k=this.o;if(this.S&&(k?(k=_(k),I(k,this.S)):k=this.S),this.m!==null||this.O||(C.H=k,k=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=wh(this,C,u),d=gn(this.I),Ne(d,"RID",o),Ne(d,"CVER",22),this.D&&Ne(d,"X-HTTP-Session-Id",this.D),Ks(this,d),k&&(this.O?u="headers="+encodeURIComponent(String(dh(k)))+"&"+u:this.m&&cc(d,this.m,k)),ac(this.h,C),this.Ua&&Ne(d,"TYPE","init"),this.P?(Ne(d,"$req",u),Ne(d,"SID","null"),C.T=!0,rc(C,d,null)):rc(C,d,u),this.G=2}}else this.G==3&&(o?Th(this,o):this.i.length==0||th(this.h)||Th(this))};function Th(o,u){var d;u?d=u.l:d=o.U++;const g=gn(o.I);Ne(g,"SID",o.K),Ne(g,"RID",d),Ne(g,"AID",o.T),Ks(o,g),o.m&&o.o&&cc(g,o.m,o.o),d=new Fn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=wh(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ac(o.h,d),rc(d,g,u)}function Ks(o,u){o.H&&Ee(o.H,function(d,g){Ne(u,g,d)}),o.l&&ih({},function(d,g){Ne(u,g,d)})}function wh(o,u,d){d=Math.min(o.i.length,d);var g=o.l?m(o.l.Na,o.l,o):null;e:{var C=o.i;let k=-1;for(;;){const z=["count="+d];k==-1?0<d?(k=C[0].g,z.push("ofs="+k)):k=0:z.push("ofs="+k);let Pe=!0;for(let st=0;st<d;st++){let Ie=C[st].g;const ut=C[st].map;if(Ie-=k,0>Ie)k=Math.max(0,C[st].g-100),Pe=!1;else try{vy(ut,z,"req"+Ie+"_")}catch{g&&g(ut)}}if(Pe){g=z.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,g}function Ih(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;le||Ht(),me||(le(),me=!0),St.add(u,o),o.v=0}}function uc(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ls(m(o.Fa,o),Rh(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Ah(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ls(m(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),lo(this),Ah(this))};function hc(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Ah(o){o.g=new Fn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=gn(o.qa);Ne(u,"RID","rpc"),Ne(u,"SID",o.K),Ne(u,"AID",o.T),Ne(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ne(u,"TO",o.ja),Ne(u,"TYPE","xmlhttp"),Ks(o,u),o.m&&o.o&&cc(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=io(gn(u)),d.m=null,d.P=!0,Yu(d,o)}t.Za=function(){this.C!=null&&(this.C=null,lo(this),uc(this),vt(19))};function ho(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function bh(o,u){var d=null;if(o.g==u){ho(o),hc(o),o.g=null;var g=2}else if(oc(o.h,u))d=u.D,rh(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;g=Zi(),pe(g,new Wu(g,d)),uo(o)}else Ih(o);else if(C=u.s,C==3||C==0&&0<u.X||!(g==1&&Ay(o,u)||g==2&&uc(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),C){case 1:wr(o,5);break;case 4:wr(o,10);break;case 3:wr(o,6);break;default:wr(o,2)}}}function Rh(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function wr(o,u){if(o.j.info("Error code "+u),u==2){var d=m(o.fb,o),g=o.Xa;const C=!g;g=new Tr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ro(g,"https"),io(g),C?_y(g.toString(),d):yy(g.toString(),d)}else vt(2);o.G=0,o.l&&o.l.sa(u),Sh(o),vh(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Sh(o){if(o.G=0,o.ka=[],o.l){const u=sh(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ka,u),D(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function Ph(o,u,d){var g=d instanceof Tr?gn(d):new Tr(d);if(g.g!="")u&&(g.g=u+"."+g.g),so(g,g.s);else{var C=c.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var k=new Tr(null);g&&ro(k,g),u&&(k.g=u),C&&so(k,C),d&&(k.l=d),g=k}return d=o.D,u=o.ya,d&&u&&Ne(g,d,u),Ne(g,"VER",o.la),Ks(o,g),g}function Ch(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Be(new oo({eb:d})):new Be(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kh(){}t=kh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function fo(){}fo.prototype.g=function(o,u){return new Pt(o,u)};function Pt(o,u){se.call(this),this.g=new Eh(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!N(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!N(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Wr(this)}R(Pt,se),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){lc(this.g)},Pt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=rt(o),o=d);u.i.push(new ay(u.Ya++,o)),u.G==3&&uo(u)},Pt.prototype.N=function(){this.g.l=null,delete this.j,lc(this.g),delete this.g,Pt.aa.N.call(this)};function Vh(o){Za.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}R(Vh,Za);function Dh(){ec.call(this),this.status=1}R(Dh,ec);function Wr(o){this.g=o}R(Wr,kh),Wr.prototype.ua=function(){pe(this.g,"a")},Wr.prototype.ta=function(o){pe(this.g,new Vh(o))},Wr.prototype.sa=function(o){pe(this.g,new Dh)},Wr.prototype.ra=function(){pe(this.g,"b")},fo.prototype.createWebChannel=fo.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,Pg=function(){return new fo},Sg=function(){return Zi()},Rg=Er,al={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eo.NO_ERROR=0,eo.TIMEOUT=8,eo.HTTP_ERROR=6,Oo=eo,Gu.COMPLETE="complete",bg=Gu,qu.EventType=xs,xs.OPEN="a",xs.CLOSE="b",xs.ERROR="c",xs.MESSAGE="d",se.prototype.listen=se.prototype.K,Zs=qu,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,Ag=Be}).apply(typeof vo<"u"?vo:typeof self<"u"?self:typeof window<"u"?window:{});const od="@firebase/firestore",ad="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Xl("@firebase/firestore");function Zr(){return Fr.logLevel}function Y(t,...e){if(Fr.logLevel<=ge.DEBUG){const n=e.map(lu);Fr.debug(`Firestore (${ks}): ${t}`,...n)}}function Vn(t,...e){if(Fr.logLevel<=ge.ERROR){const n=e.map(lu);Fr.error(`Firestore (${ks}): ${t}`,...n)}}function Es(t,...e){if(Fr.logLevel<=ge.WARN){const n=e.map(lu);Fr.warn(`Firestore (${ks}): ${t}`,...n)}}function lu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Cg(t,r,n)}function Cg(t,e,n){let r=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Vn(r),new Error(r)}function Se(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Cg(e,s,r)}function fe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(pt.UNAUTHENTICATED)))}shutdown(){}}class sb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class ib{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kr,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kr)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string",31837,{l:r}),new kg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new pt(e)}}class ob{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ab{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new ob(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(pt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class cd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new cd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new cd(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=lb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function cl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Nc(s)===Nc(i)?_e(s,i):Nc(s)?1:-1}return _e(t.length,e.length)}const ub=55296,hb=57343;function Nc(t){const e=t.charCodeAt(0);return e>=ub&&e<=hb}function vs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld="__name__";class tn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ae(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=tn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return _e(e.length,n.length)}static compareSegments(e,n){const r=tn.isNumericId(e),s=tn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?tn.extractNumericId(e).compare(tn.extractNumericId(n)):cl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rr.fromString(e.substring(4,e.length-2))}}class Oe extends tn{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Oe(n)}static emptyPath(){return new Oe([])}}const fb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends tn{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return fb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ld}static keyField(){return new at([ld])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Z(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new Z(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Oe.fromString(e))}static fromName(e){return new ne(Oe.fromString(e).popFirst(5))}static empty(){return new ne(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Oe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t,e,n){if(!n)throw new Z(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function db(t,e,n,r){if(e===!0&&r===!0)throw new Z(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ud(t){if(!ne.isDocumentKey(t))throw new Z(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hd(t){if(ne.isDocumentKey(t))throw new Z(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Dg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function hu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae(12329,{type:typeof t})}function sr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hu(t);throw new Z(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e){const n={typeString:t};return e&&(n.value=e),n}function Wi(t,e){if(!Dg(t))throw new Z(B.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Z(B.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=-62135596800,dd=1e6;class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*dd);return new xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<fd)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dd}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Wi(e,xe._jsonSchema))return new xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-fd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xe._jsonSchemaVersion="firestore/timestamp/1.0",xe._jsonSchema={type:Ke("string",xe._jsonSchemaVersion),seconds:Ke("number"),nanoseconds:Ke("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{static fromTimestamp(e){return new he(e)}static min(){return new he(new xe(0,0))}static max(){return new he(new xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=-1;function pb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new lr(s,ne.empty(),e)}function mb(t){return new lr(t.readTime,t.key,Vi)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(he.min(),ne.empty(),Vi)}static max(){return new lr(he.max(),ne.empty(),Vi)}}function gb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==_b)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):F.reject(n)}static resolve(e){return new F(((n,r)=>{n(e)}))}static reject(e){return new F(((n,r)=>{r(e)}))}static waitFor(e){return new F(((n,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&n()}),(l=>r(l)))})),a=!0,i===s&&n()}))}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next((s=>s?F.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new F(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next((f=>{a[h]=f,++c,c===i&&r(a)}),(f=>s(f)))}}))}static doWhile(e,n){return new F(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function Eb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ds(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Oa.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=-1;function xa(t){return t==null}function ra(t){return t===0&&1/t==-1/0}function vb(t){return typeof t=="number"&&Number.isInteger(t)&&!ra(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="";function Tb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=pd(e)),e=wb(t.get(n),e);return pd(e)}function wb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Ng:n+="";break;default:n+=i}}return n}function pd(t){return t+Ng+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _r(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Og(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new To(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new To(this.root,e,this.comparator,!1)}getReverseIterator(){return new To(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new To(this.root,e,this.comparator,!0)}}class To{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ae(27949);return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw ae(57766)}get value(){throw ae(16141)}get color(){throw ae(16727)}get left(){throw ae(29726)}get right(){throw ae(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gd(this.data.getIterator())}getIteratorFrom(e){return new gd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class gd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new Je(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new xg("Invalid base64 string: "+i):i}})(e);return new ct(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const Ib=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(Se(!!t,39018),typeof t=="string"){let e=0;const n=Ib.exec(t);if(Se(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hr(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="server_timestamp",Lg="__type__",Fg="__previous_value__",Ug="__local_write_time__";function du(t){return(t?.mapValue?.fields||{})[Lg]?.stringValue===Mg}function Ma(t){const e=t.mapValue.fields[Fg];return du(e)?Ma(e):e}function Di(t){const e=ur(t.mapValue.fields[Ug].timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n,r,s,i,a,c,l,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const sa="(default)";class Ni{constructor(e,n){this.projectId=e,this.database=n||sa}static empty(){return new Ni("","")}get isDefaultDatabase(){return this.database===sa}isEqual(e){return e instanceof Ni&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="__type__",bb="__max__",wo={mapValue:{}},jg="__vector__",ia="value";function fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?du(t)?4:Sb(t)?9007199254740991:Rb(t)?10:11:ae(28295,{value:t})}function pn(t,e){if(t===e)return!0;const n=fr(t);if(n!==fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Di(t).isEqual(Di(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=ur(s.timestampValue),c=ur(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return hr(s.bytesValue).isEqual(hr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=qe(s.doubleValue),c=qe(i.doubleValue);return a===c?ra(a)===ra(c):isNaN(a)&&isNaN(c)}return!1})(t,e);case 9:return vs(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(md(a)!==md(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!pn(a[l],c[l])))return!1;return!0})(t,e);default:return ae(52216,{left:t})}}function Oi(t,e){return(t.values||[]).find((n=>pn(n,e)))!==void 0}function Ts(t,e){if(t===e)return 0;const n=fr(t),r=fr(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=qe(i.integerValue||i.doubleValue),l=qe(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return _d(t.timestampValue,e.timestampValue);case 4:return _d(Di(t),Di(e));case 5:return cl(t.stringValue,e.stringValue);case 6:return(function(i,a){const c=hr(i),l=hr(a);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=_e(c[h],l[h]);if(f!==0)return f}return _e(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=_e(qe(i.latitude),qe(a.latitude));return c!==0?c:_e(qe(i.longitude),qe(a.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return yd(t.arrayValue,e.arrayValue);case 10:return(function(i,a){const c=i.fields||{},l=a.fields||{},h=c[ia]?.arrayValue,f=l[ia]?.arrayValue,p=_e(h?.values?.length||0,f?.values?.length||0);return p!==0?p:yd(h,f)})(t.mapValue,e.mapValue);case 11:return(function(i,a){if(i===wo.mapValue&&a===wo.mapValue)return 0;if(i===wo.mapValue)return 1;if(a===wo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=cl(l[p],f[p]);if(m!==0)return m;const y=Ts(c[l[p]],h[f[p]]);if(y!==0)return y}return _e(l.length,f.length)})(t.mapValue,e.mapValue);default:throw ae(23264,{he:n})}}function _d(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=ur(t),r=ur(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function yd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ts(n[s],r[s]);if(i)return i}return _e(n.length,r.length)}function ws(t){return ll(t)}function ll(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=ur(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return hr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return ne.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ll(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${ll(n.fields[a])}`;return s+"}"})(t.mapValue):ae(61005,{value:t})}function xo(t){switch(fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ma(t);return e?16+xo(e):16;case 5:return 2*t.stringValue.length;case 6:return hr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+xo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return _r(r.fields,((i,a)=>{s+=i.length+xo(a)})),s})(t.mapValue);default:throw ae(13486,{value:t})}}function ul(t){return!!t&&"integerValue"in t}function pu(t){return!!t&&"arrayValue"in t}function Ed(t){return!!t&&"nullValue"in t}function vd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mo(t){return!!t&&"mapValue"in t}function Rb(t){return(t?.mapValue?.fields||{})[Bg]?.stringValue===jg}function pi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return _r(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=pi(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pi(t.arrayValue.values[n]);return e}return{...t}}function Sb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===bb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pi(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=pi(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Mo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Mo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){_r(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Rt(pi(this.value))}}function $g(t){const e=[];return _r(t.fields,((n,r)=>{const s=new at([n]);if(Mo(r)){const i=$g(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new gt(e,0,he.min(),he.min(),he.min(),Rt.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,he.min(),he.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,he.min(),he.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n){this.position=e,this.inclusive=n}}function Td(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(a.referenceValue),n.key):r=Ts(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n="asc"){this.field=e,this.dir=n}}function Pb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{}class Ge extends qg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kb(e,n,r):n==="array-contains"?new Nb(e,r):n==="in"?new Ob(e,r):n==="not-in"?new xb(e,r):n==="array-contains-any"?new Mb(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Vb(e,r):new Db(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ts(n,this.value)):n!==null&&fr(this.value)===fr(n)&&this.matchesComparison(Ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mn extends qg{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new mn(e,n)}matches(e){return Hg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Hg(t){return t.op==="and"}function zg(t){return Cb(t)&&Hg(t)}function Cb(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function hl(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+ws(t.value);if(zg(t))return t.filters.map((e=>hl(e))).join(",");{const e=t.filters.map((n=>hl(n))).join(",");return`${t.op}(${e})`}}function Kg(t,e){return t instanceof Ge?(function(r,s){return s instanceof Ge&&r.op===s.op&&r.field.isEqual(s.field)&&pn(r.value,s.value)})(t,e):t instanceof mn?(function(r,s){return s instanceof mn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Kg(a,s.filters[c])),!0):!1})(t,e):void ae(19439)}function Wg(t){return t instanceof Ge?(function(n){return`${n.field.canonicalString()} ${n.op} ${ws(n.value)}`})(t):t instanceof mn?(function(n){return n.op.toString()+" {"+n.getFilters().map(Wg).join(" ,")+"}"})(t):"Filter"}class kb extends Ge{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class Vb extends Ge{constructor(e,n){super(e,"in",n),this.keys=Gg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class Db extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=Gg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Gg(t,e){return(e.arrayValue?.values||[]).map((n=>ne.fromName(n.referenceValue)))}class Nb extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pu(n)&&Oi(n.arrayValue,this.value)}}class Ob extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Oi(this.value.arrayValue,n)}}class xb extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(Oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Oi(this.value.arrayValue,n)}}class Mb extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Oi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Id(t,e=null,n=[],r=[],s=null,i=null,a=null){return new Lb(t,e,n,r,s,i,a)}function mu(t){const e=fe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>hl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),xa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>ws(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>ws(r))).join(",")),e.Te=n}return e.Te}function gu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Pb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wd(t.startAt,e.startAt)&&wd(t.endAt,e.endAt)}function fl(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Fb(t,e,n,r,s,i,a,c){return new La(t,e,n,r,s,i,a,c)}function _u(t){return new La(t)}function Ad(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ub(t){return t.collectionGroup!==null}function mi(t){const e=fe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Je(at.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new aa(i,r))})),n.has(at.keyField().canonicalString())||e.Ie.push(new aa(at.keyField(),r))}return e.Ie}function cn(t){const e=fe(t);return e.Ee||(e.Ee=Bb(e,mi(t))),e.Ee}function Bb(t,e){if(t.limitType==="F")return Id(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new aa(s.field,i)}));const n=t.endAt?new oa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new oa(t.startAt.position,t.startAt.inclusive):null;return Id(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function dl(t,e,n){return new La(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fa(t,e){return gu(cn(t),cn(e))&&t.limitType===e.limitType}function Qg(t){return`${mu(cn(t))}|lt:${t.limitType}`}function es(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Wg(s))).join(", ")}]`),xa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>ws(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>ws(s))).join(",")),`Target(${r})`})(cn(t))}; limitType=${t.limitType})`}function Ua(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of mi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=Td(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,mi(r),s)||r.endAt&&!(function(a,c,l){const h=Td(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,mi(r),s))})(t,e)}function jb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Jg(t){return(e,n)=>{let r=!1;for(const s of mi(t)){const i=$b(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function $b(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Ts(l,h):ae(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){_r(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Og(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=new Ue(ne.comparator);function Dn(){return qb}const Yg=new Ue(ne.comparator);function ei(...t){let e=Yg;for(const n of t)e=e.insert(n.key,n);return e}function Xg(t){let e=Yg;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Sr(){return gi()}function Zg(){return gi()}function gi(){return new $r((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Hb=new Ue(ne.comparator),zb=new Je(ne.comparator);function ye(...t){let e=zb;for(const n of t)e=e.add(n);return e}const Kb=new Je(_e);function Wb(){return Kb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ra(e)?"-0":e}}function e_(t){return{integerValue:""+t}}function Gb(t,e){return vb(e)?e_(e):yu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(){this._=void 0}}function Qb(t,e,n){return t instanceof ca?(function(s,i){const a={fields:{[Lg]:{stringValue:Mg},[Ug]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&du(i)&&(i=Ma(i)),i&&(a.fields[Fg]=i),{mapValue:a}})(n,e):t instanceof xi?n_(t,e):t instanceof Mi?r_(t,e):(function(s,i){const a=t_(s,i),c=bd(a)+bd(s.Ae);return ul(a)&&ul(s.Ae)?e_(c):yu(s.serializer,c)})(t,e)}function Jb(t,e,n){return t instanceof xi?n_(t,e):t instanceof Mi?r_(t,e):n}function t_(t,e){return t instanceof la?(function(r){return ul(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class ca extends Ba{}class xi extends Ba{constructor(e){super(),this.elements=e}}function n_(t,e){const n=s_(e);for(const r of t.elements)n.some((s=>pn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Mi extends Ba{constructor(e){super(),this.elements=e}}function r_(t,e){let n=s_(e);for(const r of t.elements)n=n.filter((s=>!pn(s,r)));return{arrayValue:{values:n}}}class la extends Ba{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function bd(t){return qe(t.integerValue||t.doubleValue)}function s_(t){return pu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Yb(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof xi&&s instanceof xi||r instanceof Mi&&s instanceof Mi?vs(r.elements,s.elements,pn):r instanceof la&&s instanceof la?pn(r.Ae,s.Ae):r instanceof ca&&s instanceof ca})(t.transform,e.transform)}class Xb{constructor(e,n){this.version=e,this.transformResults=n}}class Qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qt}static exists(e){return new Qt(void 0,e)}static updateTime(e){return new Qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ja{}function i_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Eu(t.key,Qt.none()):new Gi(t.key,t.data,Qt.none());{const n=t.data,r=Rt.empty();let s=new Je(at.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new yr(t.key,r,new Dt(s.toArray()),Qt.none())}}function Zb(t,e,n){t instanceof Gi?(function(s,i,a){const c=s.value.clone(),l=Sd(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(t,e,n):t instanceof yr?(function(s,i,a){if(!Lo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Sd(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(o_(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,n)}function _i(t,e,n,r){return t instanceof Gi?(function(i,a,c,l){if(!Lo(i.precondition,a))return c;const h=i.value.clone(),f=Pd(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof yr?(function(i,a,c,l){if(!Lo(i.precondition,a))return c;const h=Pd(i.fieldTransforms,l,a),f=a.data;return f.setAll(o_(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,a,c){return Lo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(t,e,n)}function eR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=t_(r.transform,s||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(r.field,i))}return n||null}function Rd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&vs(r,s,((i,a)=>Yb(i,a)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Gi extends ja{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class yr extends ja{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function o_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Sd(t,e,n){const r=new Map;Se(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Jb(a,c,n[s]))}return r}function Pd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,Qb(i,a,e))}return r}class Eu extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tR extends ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Zb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_i(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_i(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Zg();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=i_(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(he.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),ye())}isEqual(e){return this.batchId===e.batchId&&vs(this.mutations,e.mutations,((n,r)=>Rd(n,r)))&&vs(this.baseMutations,e.baseMutations,((n,r)=>Rd(n,r)))}}class vu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return Hb})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new vu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,Te;function iR(t){switch(t){case B.OK:return ae(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return ae(15467,{code:t})}}function a_(t){if(t===void 0)return Vn("GRPC error has no .code"),B.UNKNOWN;switch(t){case ze.OK:return B.OK;case ze.CANCELLED:return B.CANCELLED;case ze.UNKNOWN:return B.UNKNOWN;case ze.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case ze.INTERNAL:return B.INTERNAL;case ze.UNAVAILABLE:return B.UNAVAILABLE;case ze.UNAUTHENTICATED:return B.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case ze.NOT_FOUND:return B.NOT_FOUND;case ze.ALREADY_EXISTS:return B.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return B.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case ze.ABORTED:return B.ABORTED;case ze.OUT_OF_RANGE:return B.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return B.UNIMPLEMENTED;case ze.DATA_LOSS:return B.DATA_LOSS;default:return ae(39323,{code:t})}}(Te=ze||(ze={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=new rr([4294967295,4294967295],0);function Cd(t){const e=oR().encode(t),n=new Ig;return n.update(e),new Uint8Array(n.digest())}function kd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new rr([n,r],0),new rr([s,i],0)]}class Tu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ti(`Invalid padding: ${n}`);if(r<0)throw new ti(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ti(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ti(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=rr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(rr.fromNumber(r)));return s.compare(aR)===1&&(s=new rr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Cd(e),[r,s]=kd(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Tu(i,s,n);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const n=Cd(e),[r,s]=kd(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Qi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $a(he.min(),s,new Ue(_e),Dn(),ye())}}class Qi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Qi(r,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class c_{constructor(e,n){this.targetId=e,this.Ce=n}}class l_{constructor(e,n,r=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Vd{constructor(){this.ve=0,this.Fe=Dd(),this.Me=ct.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ye(),n=ye(),r=ye();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae(38017,{changeType:i})}})),new Qi(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Dd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Se(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class cR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Dn(),this.Je=Io(),this.He=Io(),this.Ye=new Ue(_e)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ae(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(fl(i))if(r===0){const a=new ne(i.path);this.et(n,a,gt.newNoDocument(a,he.min()))}else Se(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const c=this.ut(e),l=c?this.ct(c,e,a):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=hr(r).toUint8Array()}catch(l){if(l instanceof xg)return Es("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Tu(a,s,i)}catch(l){return Es(l instanceof ti?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&fl(c.target)){const l=new ne(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,gt.newNoDocument(l,e))}i.Be&&(n.set(a,i.ke()),i.qe())}}));let r=ye();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new $a(e,n,this.Ye,this.je,r);return this.je=Dn(),this.Je=Io(),this.He=Io(),this.Ye=new Ue(_e),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Vd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Je(_e),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Je(_e),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Vd),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Io(){return new Ue(ne.comparator)}function Dd(){return new Ue(ne.comparator)}const lR={asc:"ASCENDING",desc:"DESCENDING"},uR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hR={and:"AND",or:"OR"};class fR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pl(t,e){return t.useProto3Json||xa(e)?e:{value:e}}function ua(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function u_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dR(t,e){return ua(t,e.toTimestamp())}function ln(t){return Se(!!t,49232),he.fromTimestamp((function(n){const r=ur(n);return new xe(r.seconds,r.nanos)})(t))}function wu(t,e){return ml(t,e).canonicalString()}function ml(t,e){const n=(function(s){return new Oe(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function h_(t){const e=Oe.fromString(t);return Se(g_(e),10190,{key:e.toString()}),e}function gl(t,e){return wu(t.databaseId,e.path)}function Oc(t,e){const n=h_(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(d_(n))}function f_(t,e){return wu(t.databaseId,e)}function pR(t){const e=h_(t);return e.length===4?Oe.emptyPath():d_(e)}function _l(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function d_(t){return Se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Nd(t,e,n){return{name:gl(t,e),fields:n.value.mapValue.fields}}function mR(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ae(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(Se(f===void 0||typeof f=="string",58123),ct.fromBase64String(f||"")):(Se(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ct.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const f=h.code===void 0?B.UNKNOWN:a_(h.code);return new Z(f,h.message||"")})(a);n=new l_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Oc(t,r.document.name),i=ln(r.document.updateTime),a=r.document.createTime?ln(r.document.createTime):he.min(),c=new Rt({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Fo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Oc(t,r.document),i=r.readTime?ln(r.readTime):he.min(),a=gt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Fo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Oc(t,r.document),i=r.removedTargetIds||[];n=new Fo([],i,s,null)}else{if(!("filter"in e))return ae(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new sR(s,i),c=r.targetId;n=new c_(c,a)}}return n}function gR(t,e){let n;if(e instanceof Gi)n={update:Nd(t,e.key,e.value)};else if(e instanceof Eu)n={delete:gl(t,e.key)};else if(e instanceof yr)n={update:Nd(t,e.key,e.data),updateMask:bR(e.fieldMask)};else{if(!(e instanceof tR))return ae(16599,{Vt:e.type});n={verify:gl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof ca)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof xi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Mi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof la)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw ae(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:dR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae(27497)})(t,e.precondition)),n}function _R(t,e){return t&&t.length>0?(Se(e!==void 0,14353),t.map((n=>(function(s,i){let a=s.updateTime?ln(s.updateTime):ln(i);return a.isEqual(he.min())&&(a=ln(i)),new Xb(a,s.transformResults||[])})(n,e)))):[]}function yR(t,e){return{documents:[f_(t,e.path)]}}function ER(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=f_(t,s);const i=(function(h){if(h.length!==0)return m_(mn.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((f=>(function(m){return{field:ts(m.field),direction:wR(m.dir)}})(f)))})(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=pl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:n,parent:s}}function vR(t){let e=pR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Se(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=p_(p);return m instanceof mn&&zg(m)?m.getFilters():[m]})(n.where));let a=[];n.orderBy&&(a=(function(p){return p.map((m=>(function(R){return new aa(ns(R.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,xa(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,y=p.values||[];return new oa(y,m)})(n.startAt));let h=null;return n.endAt&&(h=(function(p){const m=!p.before,y=p.values||[];return new oa(y,m)})(n.endAt)),Fb(e,s,a,i,c,"F",l,h)}function TR(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function p_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ns(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ns(n.unaryFilter.field);return Ge.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ns(n.unaryFilter.field);return Ge.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ns(n.unaryFilter.field);return Ge.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ae(61313);default:return ae(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ge.create(ns(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ae(58110);default:return ae(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return mn.create(n.compositeFilter.filters.map((r=>p_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae(1026)}})(n.compositeFilter.op))})(t):ae(30097,{filter:t})}function wR(t){return lR[t]}function IR(t){return uR[t]}function AR(t){return hR[t]}function ts(t){return{fieldPath:t.canonicalString()}}function ns(t){return at.fromServerFormat(t.fieldPath)}function m_(t){return t instanceof Ge?(function(n){if(n.op==="=="){if(vd(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NAN"}};if(Ed(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vd(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NAN"}};if(Ed(n.value))return{unaryFilter:{field:ts(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(n.field),op:IR(n.op),value:n.value}}})(t):t instanceof mn?(function(n){const r=n.getFilters().map((s=>m_(s)));return r.length===1?r[0]:{compositeFilter:{op:AR(n.op),filters:r}}})(t):ae(54877,{filter:t})}function bR(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function g_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,r,s,i=he.min(),a=he.min(),c=ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.yt=e}}function SR(t){const e=vR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.Cn=new CR}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(lr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class CR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Je(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},__=41943040;class bt{static withCacheSize(e){return new bt(e,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.DEFAULT_COLLECTION_PERCENTILE=10,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bt.DEFAULT=new bt(__,bt.DEFAULT_COLLECTION_PERCENTILE,bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bt.DISABLED=new bt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Is(0)}static cr(){return new Is(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="LruGarbageCollector",kR=1048576;function Md([t,e],[n,r]){const s=_e(t,n);return s===0?_e(e,r):s}class VR{constructor(e){this.Ir=e,this.buffer=new Je(Md),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Md(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Y(xd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ds(n)?Y(xd,"Ignoring IndexedDB error during garbage collection: ",n):await Vs(n)}await this.Vr(3e5)}))}}class NR{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Oa.ce);const r=new VR(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Od)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Od):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,a,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),Zr()<=ge.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function OR(t,e){return new NR(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this.changes=new $r((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&_i(r.mutation,s,Dt.empty(),xe.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,ye()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=ye()){const s=Sr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let a=ei();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,ye())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{n.set(a,c)}))}))}computeViews(e,n,r,s){let i=Dn();const a=gi(),c=(function(){return gi()})();return n.forEach(((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof yr)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),_i(f.mutation,h,f.mutation.getFieldMask(),xe.now())):a.set(h.key,Dt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,f)=>a.set(h,f))),n.forEach(((h,f)=>c.set(h,new MR(f,a.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=gi();let s=new Ue(((a,c)=>a-c)),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Dt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||ye()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Zg();f.forEach((m=>{if(!i.has(m)){const y=i_(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return F.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(a){return ne.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ub(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Sr());let c=Vi,l=i;return a.next((h=>F.forEach(h,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,ye()))).next((f=>({batchId:c,changes:Xg(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next((r=>{let s=ei();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=ei();return this.indexManager.getCollectionParents(e,i).next((c=>F.forEach(c,(l=>{const h=(function(p,m){return new La(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((f=>{f.forEach(((p,m)=>{a=a.insert(p,m)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,gt.newInvalidDocument(f)))}));let c=ei();return a.forEach(((l,h)=>{const f=i.get(l);f!==void 0&&_i(f.mutation,h,Dt.empty(),xe.now()),Ua(n,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return F.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:ln(s.createTime)}})(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:SR(s.bundledQuery),readTime:ln(s.readTime)}})(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.overlays=new Ue(ne.comparator),this.qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return F.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Sr(),i=n.length+1,a=new ne(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ue(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Sr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Sr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=s)););return F.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new rR(n,r));let i=this.qr.get(n);i===void 0&&(i=ye(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(){this.Qr=new Je(Ye.$r),this.Ur=new Je(Ye.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new Ye(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new ne(new Oe([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ne(new Oe([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=ye();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const n=new Ye(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ne.comparator(e.key,n.key)||_e(e.Yr,n.Yr)}static Kr(e,n){return _e(e.Yr,n.Yr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Je(Ye.$r)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new nR(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new Ye(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(a)}lookupMutationBatch(e,n){return F.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?fu:this.tr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const c=this.Xr(a.Yr);i.push(c)})),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(_e);return n.forEach((s=>{const i=new Ye(s,0),a=new Ye(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(c=>{r=r.add(c.Yr)}))})),F.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const a=new Ye(new ne(i),0);let c=new Je(_e);return this.Zr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)}),a),F.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Se(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return F.forEach(n.mutations,(s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new Ye(n,0),s=this.Zr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.ri=e,this.docs=(function(){return new Ue(ne.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))})),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dn();const a=n.path,c=new ne(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||gb(mb(f),r)<=0||(s.has(f.key)||Ua(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae(9500)}ii(e,n){return F.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new qR(this)}getSize(e){return F.resolve(this.size)}}class qR extends xR{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),F.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.persistence=e,this.si=new $r((n=>mu(n)),gu),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.oi=0,this._i=new Iu,this.targetCount=0,this.ai=Is.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),F.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Is(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Pr(n),F.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),F.waitFor(i).next((()=>s))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n){this.ui={},this.overlays={},this.ci=new Oa(0),this.li=!1,this.li=!0,this.hi=new BR,this.referenceDelegate=e(this),this.Pi=new HR(this),this.indexManager=new PR,this.remoteDocumentCache=(function(s){return new $R(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new RR(n),this.Ii=new FR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new jR(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new zR(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return F.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class zR extends yb{constructor(e){super(),this.currentSequenceNumber=e}}class Au{constructor(e){this.persistence=e,this.Ri=new Iu,this.Vi=null}static mi(e){return new Au(e)}get fi(){if(this.Vi)return this.Vi;throw ae(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.fi,(r=>{const s=ne.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,he.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class ha{constructor(e,n){this.persistence=e,this.pi=new $r((r=>Tb(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=OR(this,n)}static mi(e,n){return new ha(e,n)}Ei(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return F.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?F.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,n).next((c=>{c||(r++,i.removeEntry(a,he.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=xo(e.data.value)),n}br(e,n,r){return F.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Iw()?8:Eb(Et())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new KR;return this.Ss(e,n,a).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,a,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(Zr()<=ge.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",es(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),F.resolve()):(Zr()<=ge.DEBUG&&Y("QueryEngine","Query:",es(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Zr()<=ge.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",es(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):F.resolve())}ys(e,n){if(Ad(n))return F.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=dl(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=ye(...i);return this.ps.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.Ds(n,c);return this.Cs(n,h,a,l.readTime)?this.ys(e,dl(n,null,"F")):this.vs(e,h,n,l)}))))})))))}ws(e,n,r,s){return Ad(n)||s.isEqual(he.min())?F.resolve(null):this.ps.getDocuments(e,r).next((i=>{const a=this.Ds(n,i);return this.Cs(n,a,r,s)?F.resolve(null):(Zr()<=ge.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),es(n)),this.vs(e,a,n,pb(s,Vi)).next((c=>c)))}))}Ds(e,n){let r=new Je(Jg(e));return n.forEach(((s,i)=>{Ua(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Zr()<=ge.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",es(n)),this.ps.getDocumentsMatchingQuery(e,n,lr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="LocalStore",GR=3e8;class QR{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ue(_e),this.xs=new $r((i=>mu(i)),gu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LR(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function JR(t,e,n,r){return new QR(t,e,n,r)}async function E_(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=ye();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((h=>({Ls:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function YR(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,f){const p=h.batch,m=p.keys();let y=F.resolve();return m.forEach((R=>{y=y.next((()=>f.getEntry(l,R))).next((V=>{const D=h.docVersions.get(R);Se(D!==null,48541),V.version.compareTo(D)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))}))})),y.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=ye();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function v_(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function XR(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p))));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(ct.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),(function(V,D,$){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=GR?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(m,y,f)&&c.push(n.Pi.updateTargetData(i,y))}));let l=Dn(),h=ye();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(ZR(i,a,e.documentUpdates).next((f=>{l=f.ks,h=f.qs}))),!r.isEqual(he.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next((p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return F.waitFor(c).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function ZR(t,e,n){let r=ye(),s=ye();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let a=Dn();return n.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):Y(Ru,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{ks:a,qs:s}}))}function eS(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=fu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function tS(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,F.resolve(s)):n.Pi.allocateTargetId(r).next((a=>(s=new Yn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function yl(t,e,n){const r=fe(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Ds(a))throw a;Y(Ru,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Ld(t,e,n){const r=fe(t);let s=he.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,f){const p=fe(l),m=p.xs.get(f);return m!==void 0?F.resolve(p.Ms.get(m)):p.Pi.getTargetData(h,f)})(r,a,cn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,n?s:he.min(),n?i:ye()))).next((c=>(nS(r,jb(e),c),{documents:c,Qs:i})))))}function nS(t,e,n){let r=t.Os.get(e)||he.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class Fd{constructor(){this.activeTargetIds=Wb()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rS{constructor(){this.Mo=new Fd,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Fd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="ConnectivityMonitor";class Bd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Y(Ud,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Y(Ud,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao=null;function El(){return Ao===null?Ao=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ao++,"0x"+Ao.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="RestConnection",iS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class oS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===sa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const a=El(),c=this.zo(e,n.toUriEncodedString());Y(xc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),f=Ss(h);return this.Jo(e,c,l,r,f).then((p=>(Y(xc,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Es(xc,`RPC '${e}' ${a} failed with error: `,p,"url: ",c,"request:",r),p}))}Ho(e,n,r,s,i,a){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ks})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=iS[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class cS extends oS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const a=El();return new Promise(((c,l)=>{const h=new Ag;h.setWithCredentials(!0),h.listenOnce(bg.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Oo.NO_ERROR:const p=h.getResponseJson();Y(ft,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),c(p);break;case Oo.TIMEOUT:Y(ft,`RPC '${e}' ${a} timed out`),l(new Z(B.DEADLINE_EXCEEDED,"Request time out"));break;case Oo.HTTP_ERROR:const m=h.getStatus();if(Y(ft,`RPC '${e}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let y=h.getResponseJson();Array.isArray(y)&&(y=y[0]);const R=y?.error;if(R&&R.status&&R.message){const V=(function($){const N=$.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(N)>=0?N:B.UNKNOWN})(R.status);l(new Z(V,R.message))}else l(new Z(B.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new Z(B.UNAVAILABLE,"Connection failed."));break;default:ae(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Y(ft,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(s);Y(ft,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",f,r,15)}))}T_(e,n,r){const s=El(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Pg(),c=Sg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Y(ft,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=a.createWebChannel(f,l);this.I_(p);let m=!1,y=!1;const R=new aS({Yo:D=>{y?Y(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(Y(ft,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Y(ft,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Zo:()=>p.close()}),V=(D,$,N)=>{D.listen($,(L=>{try{N(L)}catch(K){setTimeout((()=>{throw K}),0)}}))};return V(p,Zs.EventType.OPEN,(()=>{y||(Y(ft,`RPC '${e}' stream ${s} transport opened.`),R.o_())})),V(p,Zs.EventType.CLOSE,(()=>{y||(y=!0,Y(ft,`RPC '${e}' stream ${s} transport closed`),R.a_(),this.E_(p))})),V(p,Zs.EventType.ERROR,(D=>{y||(y=!0,Es(ft,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),R.a_(new Z(B.UNAVAILABLE,"The operation could not be completed")))})),V(p,Zs.EventType.MESSAGE,(D=>{if(!y){const $=D.data[0];Se(!!$,16349);const N=$,L=N?.error||N[0]?.error;if(L){Y(ft,`RPC '${e}' stream ${s} received error:`,L);const K=L.status;let te=(function(_){const E=ze[_];if(E!==void 0)return a_(E)})(K),Ee=L.message;te===void 0&&(te=B.INTERNAL,Ee="Unknown error status: "+K+" with message "+L.message),y=!0,R.a_(new Z(te,Ee)),p.close()}else Y(ft,`RPC '${e}' stream ${s} received:`,$),R.u_($)}})),V(c,Rg.STAT_EVENT,(D=>{D.stat===al.PROXY?Y(ft,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===al.NOPROXY&&Y(ft,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{R.__()}),0),R}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function Mc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t){return new fR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="PersistentStream";class w_{constructor(e,n,r,s,i,a,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new T_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new Z(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return Y(jd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(Y(jd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class lS extends w_{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=mR(this.serializer,e),r=(function(i){if(!("targetChange"in i))return he.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?he.min():a.readTime?ln(a.readTime):he.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=_l(this.serializer),n.addTarget=(function(i,a){let c;const l=a.target;if(c=fl(l)?{documents:yR(i,l)}:{query:ER(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=u_(i,a.resumeToken);const h=pl(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(he.min())>0){c.readTime=ua(i,a.snapshotVersion.toTimestamp());const h=pl(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=TR(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=_l(this.serializer),n.removeTarget=e,this.q_(n)}}class uS extends w_{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=_R(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=_l(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>gR(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{}class fS extends hS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,ml(n,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(B.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(e,ml(n,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Z(B.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class dS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Vn(n),this.aa=!1):Y("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="RemoteStore";class pS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{qr(this)&&(Y(Ur,"Restarting streams for network reachability change."),await(async function(l){const h=fe(l);h.Ea.add(4),await Ji(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Ha(h)})(this))}))})),this.Ra=new dS(r,s)}}async function Ha(t){if(qr(t))for(const e of t.da)await e(!0)}async function Ji(t){for(const e of t.da)await e(!1)}function I_(t,e){const n=fe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ku(n)?Cu(n):Ns(n).O_()&&Pu(n,e))}function Su(t,e){const n=fe(t),r=Ns(n);n.Ia.delete(e),r.O_()&&A_(n,e),n.Ia.size===0&&(r.O_()?r.L_():qr(n)&&n.Ra.set("Unknown"))}function Pu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ns(t).Y_(e)}function A_(t,e){t.Va.Ue(e),Ns(t).Z_(e)}function Cu(t){t.Va=new cR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ns(t).start(),t.Ra.ua()}function ku(t){return qr(t)&&!Ns(t).x_()&&t.Ia.size>0}function qr(t){return fe(t).Ea.size===0}function b_(t){t.Va=void 0}async function mS(t){t.Ra.set("Online")}async function gS(t){t.Ia.forEach(((e,n)=>{Pu(t,e)}))}async function _S(t,e){b_(t),ku(t)?(t.Ra.ha(e),Cu(t)):t.Ra.set("Unknown")}async function yS(t,e,n){if(t.Ra.set("Online"),e instanceof l_&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){Y(Ur,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fa(t,r)}else if(e instanceof Fo?t.Va.Ze(e):e instanceof c_?t.Va.st(e):t.Va.tt(e),!n.isEqual(he.min()))try{const r=await v_(t.localStore);n.compareTo(r)>=0&&await(function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ct.EMPTY_BYTE_STRING,f.snapshotVersion)),A_(i,l);const p=new Yn(f.target,l,h,f.sequenceNumber);Pu(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){Y(Ur,"Failed to raise snapshot:",r),await fa(t,r)}}async function fa(t,e,n){if(!Ds(e))throw e;t.Ea.add(1),await Ji(t),t.Ra.set("Offline"),n||(n=()=>v_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Y(Ur,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Ha(t)}))}function R_(t,e){return e().catch((n=>fa(t,n,e)))}async function za(t){const e=fe(t),n=dr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:fu;for(;ES(e);)try{const s=await eS(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,vS(e,s)}catch(s){await fa(e,s)}S_(e)&&P_(e)}function ES(t){return qr(t)&&t.Ta.length<10}function vS(t,e){t.Ta.push(e);const n=dr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function S_(t){return qr(t)&&!dr(t).x_()&&t.Ta.length>0}function P_(t){dr(t).start()}async function TS(t){dr(t).ra()}async function wS(t){const e=dr(t);for(const n of t.Ta)e.ea(n.mutations)}async function IS(t,e,n){const r=t.Ta.shift(),s=vu.from(r,e,n);await R_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await za(t)}async function AS(t,e){e&&dr(t).X_&&await(async function(r,s){if((function(a){return iR(a)&&a!==B.ABORTED})(s.code)){const i=r.Ta.shift();dr(r).B_(),await R_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await za(r)}})(t,e),S_(t)&&P_(t)}async function $d(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),Y(Ur,"RemoteStore received new credentials");const r=qr(n);n.Ea.add(3),await Ji(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Ha(n)}async function bS(t,e){const n=fe(t);e?(n.Ea.delete(2),await Ha(n)):e||(n.Ea.add(2),await Ji(n),n.Ra.set("Unknown"))}function Ns(t){return t.ma||(t.ma=(function(n,r,s){const i=fe(n);return i.sa(),new lS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:mS.bind(null,t),t_:gS.bind(null,t),r_:_S.bind(null,t),H_:yS.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),ku(t)?Cu(t):t.Ra.set("Unknown")):(await t.ma.stop(),b_(t))}))),t.ma}function dr(t){return t.fa||(t.fa=(function(n,r,s){const i=fe(n);return i.sa(),new uS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:TS.bind(null,t),r_:AS.bind(null,t),ta:wS.bind(null,t),na:IS.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await za(t)):(await t.fa.stop(),t.Ta.length>0&&(Y(Ur,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new Vu(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Du(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Ds(t))return new Z(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{static emptySet(e){return new fs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=ei(),this.sortedSet=new Ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.ga=new Ue(ne.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ae(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class As{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach((c=>{a.push({type:0,doc:c})})),new As(e,n,fs.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class SS{constructor(){this.queries=Hd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=Hd(),i.forEach(((a,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new Z(B.ABORTED,"Firestore shutting down"))}}function Hd(){return new $r((t=>Qg(t)),Fa)}async function PS(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new RS,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=Du(a,`Initialization of query '${es(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Nu(n)}async function CS(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function kS(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&Nu(n)}function VS(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Nu(t){t.Ca.forEach((e=>{e.next()}))}var vl,zd;(zd=vl||(vl={})).Ma="default",zd.Cache="cache";class DS{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new As(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==vl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.key=e}}class k_{constructor(e){this.key=e}}class NS{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ye(),this.mutatedKeys=ye(),this.eu=Jg(e),this.tu=new fs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new qd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),y=Ua(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),V=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let D=!1;m&&y?m.data.isEqual(y.data)?R!==V&&(r.track({type:3,doc:y}),D=!0):this.su(m,y)||(r.track({type:2,doc:y}),D=!0,(l&&this.eu(y,l)>0||h&&this.eu(y,h)<0)&&(c=!0)):!m&&y?(r.track({type:0,doc:y}),D=!0):m&&!y&&(r.track({type:1,doc:m}),D=!0,(l||h)&&(c=!0)),D&&(y?(a=a.add(y),i=V?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((f,p)=>(function(y,R){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae(20277,{Rt:D})}};return V(y)-V(R)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,a.length!==0||h?{snapshot:new As(this.query,e.tu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new qd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ye(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new k_(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new C_(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=ye();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return As.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ou="SyncEngine";class OS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xS{constructor(e){this.key=e,this.hu=!1}}class MS{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new $r((c=>Qg(c)),Fa),this.Iu=new Map,this.Eu=new Set,this.du=new Ue(ne.comparator),this.Au=new Map,this.Ru=new Iu,this.Vu={},this.mu=new Map,this.fu=Is.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function LS(t,e,n=!0){const r=M_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await V_(r,e,n,!0),s}async function FS(t,e){const n=M_(t);await V_(n,e,!0,!1)}async function V_(t,e,n,r){const s=await tS(t.localStore,cn(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await US(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&I_(t.remoteStore,s),c}async function US(t,e,n,r,s){t.pu=(p,m,y)=>(async function(V,D,$,N){let L=D.view.ru($);L.Cs&&(L=await Ld(V.localStore,D.query,!1).then((({documents:A})=>D.view.ru(A,L))));const K=N&&N.targetChanges.get(D.targetId),te=N&&N.targetMismatches.get(D.targetId)!=null,Ee=D.view.applyChanges(L,V.isPrimaryClient,K,te);return Wd(V,D.targetId,Ee.au),Ee.snapshot})(t,p,m,y);const i=await Ld(t.localStore,e,!0),a=new NS(e,i.Qs),c=a.ru(i.documents),l=Qi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);Wd(t,n,h.au);const f=new OS(e,n,a);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function BS(t,e,n){const r=fe(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!Fa(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await yl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Su(r.remoteStore,s.targetId),Tl(r,s.targetId)})).catch(Vs)):(Tl(r,s.targetId),await yl(r.localStore,s.targetId,!0))}async function jS(t,e){const n=fe(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Su(n.remoteStore,r.targetId))}async function $S(t,e,n){const r=QS(t);try{const s=await(function(a,c){const l=fe(a),h=xe.now(),f=c.reduce(((y,R)=>y.add(R.key)),ye());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let R=Dn(),V=ye();return l.Ns.getEntries(y,f).next((D=>{R=D,R.forEach((($,N)=>{N.isValidDocument()||(V=V.add($))}))})).next((()=>l.localDocuments.getOverlayedDocuments(y,R))).next((D=>{p=D;const $=[];for(const N of c){const L=eR(N,p.get(N.key).overlayedDocument);L!=null&&$.push(new yr(N.key,L,$g(L.value.mapValue),Qt.exists(!0)))}return l.mutationQueue.addMutationBatch(y,h,$,c)})).next((D=>{m=D;const $=D.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(y,D.batchId,$)}))})).then((()=>({batchId:m.batchId,changes:Xg(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.Vu[a.currentUser.toKey()];h||(h=new Ue(_e)),h=h.insert(c,l),a.Vu[a.currentUser.toKey()]=h})(r,s.batchId,n),await Yi(r,s.changes),await za(r.remoteStore)}catch(s){const i=Du(s,"Failed to persist write");n.reject(i)}}async function D_(t,e){const n=fe(t);try{const r=await XR(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=n.Au.get(i);a&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Se(a.hu,14607):s.removedDocuments.size>0&&(Se(a.hu,42227),a.hu=!1))})),await Yi(n,r,e)}catch(r){await Vs(r)}}function Kd(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=fe(a);l.onlineState=c;let h=!1;l.queries.forEach(((f,p)=>{for(const m of p.Sa)m.va(c)&&(h=!0)})),h&&Nu(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qS(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new Ue(ne.comparator);a=a.insert(i,gt.newNoDocument(i,he.min()));const c=ye().add(i),l=new $a(he.min(),new Map,new Ue(_e),a,c);await D_(r,l),r.du=r.du.remove(i),r.Au.delete(e),xu(r)}else await yl(r.localStore,e,!1).then((()=>Tl(r,e,n))).catch(Vs)}async function HS(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await YR(n.localStore,e);O_(n,r,null),N_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yi(n,s)}catch(s){await Vs(s)}}async function zS(t,e,n){const r=fe(t);try{const s=await(function(a,c){const l=fe(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(Se(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>l.localDocuments.getDocuments(h,f)))}))})(r.localStore,e);O_(r,e,n),N_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yi(r,s)}catch(s){await Vs(s)}}function N_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function O_(t,e,n){const r=fe(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Tl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||x_(t,r)}))}function x_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Su(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),xu(t))}function Wd(t,e,n){for(const r of n)r instanceof C_?(t.Ru.addReference(r.key,e),KS(t,r)):r instanceof k_?(Y(Ou,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||x_(t,r.key)):ae(19791,{wu:r})}function KS(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Y(Ou,"New document in limbo: "+n),t.Eu.add(r),xu(t))}function xu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ne(Oe.fromString(e)),r=t.fu.next();t.Au.set(r,new xS(n)),t.du=t.du.insert(n,r),I_(t.remoteStore,new Yn(cn(_u(n.path)),r,"TargetPurposeLimboResolution",Oa.ce))}}async function Yi(t,e,n){const r=fe(t),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{a.push(r.pu(l,e,n).then((h=>{if((h||n)&&r.isPrimaryClient){const f=h?!h.fromCache:n?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(h){s.push(h);const f=bu.As(l.targetId,h);i.push(f)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(l,h){const f=fe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>F.forEach(h,(m=>F.forEach(m.Es,(y=>f.persistence.referenceDelegate.addReference(p,m.targetId,y))).next((()=>F.forEach(m.ds,(y=>f.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))))))}catch(p){if(!Ds(p))throw p;Y(Ru,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const y=f.Ms.get(m),R=y.snapshotVersion,V=y.withLastLimboFreeSnapshotVersion(R);f.Ms=f.Ms.insert(m,V)}}})(r.localStore,i))}async function WS(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){Y(Ou,"User change. New user:",e.toKey());const r=await E_(n.localStore,e);n.currentUser=e,(function(i,a){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new Z(B.CANCELLED,a))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yi(n,r.Ls)}}function GS(t,e){const n=fe(t),r=n.Au.get(e);if(r&&r.hu)return ye().add(r.key);{let s=ye();const i=n.Iu.get(e);if(!i)return s;for(const a of i){const c=n.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function M_(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=D_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qS.bind(null,e),e.Pu.H_=kS.bind(null,e.eventManager),e.Pu.yu=VS.bind(null,e.eventManager),e}function QS(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zS.bind(null,e),e}class da{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return JR(this.persistence,new WR,e.initialUser,this.serializer)}Cu(e){return new y_(Au.mi,this.serializer)}Du(e){return new rS}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}da.provider={build:()=>new da};class JS extends da{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Se(this.persistence.referenceDelegate instanceof ha,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new DR(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?bt.withCacheSize(this.cacheSizeBytes):bt.DEFAULT;return new y_((r=>ha.mi(r,n)),this.serializer)}}class wl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Kd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=WS.bind(null,this.syncEngine),await bS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new SS})()}createDatastore(e){const n=qa(e.databaseInfo.databaseId),r=(function(i){return new cS(i)})(e.databaseInfo);return(function(i,a,c,l){return new fS(i,a,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,a,c){return new pS(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Kd(this.syncEngine,n,0)),(function(){return Bd.v()?new Bd:new sS})())}createSyncEngine(e,n){return(function(s,i,a,c,l,h,f){const p=new MS(s,i,a,c,l,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){await(async function(n){const r=fe(n);Y(Ur,"RemoteStore shutting down."),r.Ea.add(5),await Ji(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}wl.provider={build:()=>new wl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="FirestoreClient";class XS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=uu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{Y(pr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(Y(pr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Du(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Lc(t,e){t.asyncQueue.verifyOperationInProgress(),Y(pr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await E_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Gd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZS(t);Y(pr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>$d(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>$d(e.remoteStore,s))),t._onlineComponents=e}async function ZS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y(pr,"Using user provided OfflineComponentProvider");try{await Lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Es("Error using user provided cache. Falling back to memory cache: "+n),await Lc(t,new da)}}else Y(pr,"Using default OfflineComponentProvider"),await Lc(t,new JS(void 0));return t._offlineComponents}async function L_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y(pr,"Using user provided OnlineComponentProvider"),await Gd(t,t._uninitializedComponentsProvider._online)):(Y(pr,"Using default OnlineComponentProvider"),await Gd(t,new wl))),t._onlineComponents}function eP(t){return L_(t).then((e=>e.syncEngine))}async function Qd(t){const e=await L_(t),n=e.eventManager;return n.onListen=LS.bind(null,e.syncEngine),n.onUnlisten=BS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=FS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jS.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_="firestore.googleapis.com",Yd=!0;class Xd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Z(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=U_,this.ssl=Yd}else this.host=e.host,this.ssl=e.ssl??Yd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=__;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kR)throw new Z(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}db("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=F_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ka{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new rb;switch(r.type){case"firstParty":return new ab(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Jd.get(n);r&&(Y("ComponentProvider","Removing Datastore"),Jd.delete(n),r.terminate())})(this),Promise.resolve()}}function tP(t,e,n,r={}){t=sr(t,Ka);const s=Ss(e),i=t._getSettings(),a={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Om(`https://${c}`),xm("Firestore",!0)),i.host!==U_&&i.host!==c&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Or(l,a)&&(t._setSettings(l),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=pt.MOCK_USER;else{h=pw(r.mockUserToken,t._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Z(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new pt(p)}t._authCredentials=new sb(new kg(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wa(this.firestore,e,this._query)}}class Qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}toJSON(){return{type:Qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Wi(n,Qe._jsonSchema))return new Qe(e,r||null,new ne(Oe.fromString(n.referencePath)))}}Qe._jsonSchemaVersion="firestore/documentReference/1.0",Qe._jsonSchema={type:Ke("string",Qe._jsonSchemaVersion),referencePath:Ke("string")};class ir extends Wa{constructor(e,n,r){super(e,n,_u(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new ne(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function Zd(t,e,...n){if(t=Ze(t),Vg("collection","path",e),t instanceof Ka){const r=Oe.fromString(e,...n);return hd(r),new ir(t,null,r)}{if(!(t instanceof Qe||t instanceof ir))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return hd(r),new ir(t.firestore,null,r)}}function Il(t,e,...n){if(t=Ze(t),arguments.length===1&&(e=uu.newId()),Vg("doc","path",e),t instanceof Ka){const r=Oe.fromString(e,...n);return ud(r),new Qe(t,null,new ne(r))}{if(!(t instanceof Qe||t instanceof ir))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return ud(r),new Qe(t.firestore,t instanceof ir?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="AsyncQueue";class tp{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new T_(this,"async_queue_retry"),this._c=()=>{const r=Mc();r&&Y(ep,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new kr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ds(e))throw e;Y(ep,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Vn("INTERNAL UNHANDLED ERROR: ",np(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Vu.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&ae(47125,{Pc:np(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function np(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class bs extends Ka{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new tp,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tp(e),this._firestoreClient=void 0,await e}}}function nP(t,e){const n=typeof t=="object"?t:Um(),r=typeof t=="string"?t:sa,s=eu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=fw("firestore");i&&tP(s,...i)}return s}function B_(t){if(t._terminated)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||rP(t),t._firestoreClient}function rP(t){const e=t._freezeSettings(),n=(function(s,i,a,c){return new Ab(s,i,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,F_(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator)})(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new XS(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(s){const i=s?._online.build();return{_offline:s?._offline.build(i),_online:i}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ut(ct.fromBase64String(e))}catch(n){throw new Z(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ut(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ut._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Wi(e,Ut._jsonSchema))return Ut.fromBase64String(e.bytes)}}Ut._jsonSchemaVersion="firestore/bytes/1.0",Ut._jsonSchema={type:Ke("string",Ut._jsonSchemaVersion),bytes:Ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:un._jsonSchemaVersion}}static fromJSON(e){if(Wi(e,un._jsonSchema))return new un(e.latitude,e.longitude)}}un._jsonSchemaVersion="firestore/geoPoint/1.0",un._jsonSchema={type:Ke("string",un._jsonSchemaVersion),latitude:Ke("number"),longitude:Ke("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:hn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Wi(e,hn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new hn(e.vectorValues);throw new Z(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}hn._jsonSchemaVersion="firestore/vectorValue/1.0",hn._jsonSchema={type:Ke("string",hn._jsonSchemaVersion),vectorValues:Ke("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP=/^__.*__$/;class iP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Gi(e,this.data,n,this.fieldTransforms)}}class j_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new yr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae(40011,{Ac:t})}}class Lu{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Lu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){const n=this.path?.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return pa(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if($_(this.Ac)&&sP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class oP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qa(e)}Cc(e,n,r,s=!1){return new Lu({Ac:e,methodName:n,Dc:r,path:at.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function q_(t){const e=t._freezeSettings(),n=qa(t._databaseId);return new oP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function aP(t,e,n,r,s,i={}){const a=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Fu("Data must be an object, but it was:",a,r);const c=H_(r,a);let l,h;if(i.merge)l=new Dt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Al(e,p,n);if(!a.contains(m))throw new Z(B.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);K_(f,m)||f.push(m)}l=new Dt(f),h=a.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=a.fieldTransforms;return new iP(new Rt(c),l,h)}class Qa extends Mu{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qa}}function cP(t,e,n,r){const s=t.Cc(1,e,n);Fu("Data must be an object, but it was:",s,r);const i=[],a=Rt.empty();_r(r,((l,h)=>{const f=Uu(e,l,n);h=Ze(h);const p=s.yc(f);if(h instanceof Qa)i.push(f);else{const m=Ja(h,p);m!=null&&(i.push(f),a.set(f,m))}}));const c=new Dt(i);return new j_(a,c,s.fieldTransforms)}function lP(t,e,n,r,s,i){const a=t.Cc(1,e,n),c=[Al(e,r,n)],l=[s];if(i.length%2!=0)throw new Z(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Al(e,i[m])),l.push(i[m+1]);const h=[],f=Rt.empty();for(let m=c.length-1;m>=0;--m)if(!K_(h,c[m])){const y=c[m];let R=l[m];R=Ze(R);const V=a.yc(y);if(R instanceof Qa)h.push(y);else{const D=Ja(R,V);D!=null&&(h.push(y),f.set(y,D))}}const p=new Dt(h);return new j_(f,p,a.fieldTransforms)}function Ja(t,e){if(z_(t=Ze(t)))return Fu("Unsupported field value:",e,t),H_(t,e);if(t instanceof Mu)return(function(r,s){if(!$_(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=Ja(c,s.wc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Gb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:ua(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ua(s.serializer,i)}}if(r instanceof un)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ut)return{bytesValue:u_(s.serializer,r._byteString)};if(r instanceof Qe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof hn)return(function(a,c){return{mapValue:{fields:{[Bg]:{stringValue:jg},[ia]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return yu(c.serializer,h)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${hu(r)}`)})(t,e)}function H_(t,e){const n={};return Og(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_r(t,((r,s)=>{const i=Ja(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function z_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof un||t instanceof Ut||t instanceof Qe||t instanceof Mu||t instanceof hn)}function Fu(t,e,n){if(!z_(n)||!Dg(n)){const r=hu(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Al(t,e,n){if((e=Ze(e))instanceof Ga)return e._internalPath;if(typeof e=="string")return Uu(t,e);throw pa("Field path arguments must be of type string or ",t,!1,void 0,n)}const uP=new RegExp("[~\\*/\\[\\]]");function Uu(t,e,n){if(e.search(uP)>=0)throw pa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ga(...e.split("."))._internalPath}catch{throw pa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pa(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new Z(B.INVALID_ARGUMENT,c+t+l)}function K_(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(G_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hP extends W_{data(){return super.data()}}function G_(t,e){return typeof e=="string"?Uu(t,e):e instanceof Ga?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dP{convertValue(e,n="none"){switch(fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return _r(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){const n=e.fields?.[ia].arrayValue?.values?.map((r=>qe(r.doubleValue)));return new hn(n)}convertGeoPoint(e){return new un(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ma(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Di(e));default:return null}}convertTimestamp(e){const n=ur(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Se(g_(r),9688,{name:e});const s=new Ni(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class ni{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vr extends W_{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(G_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Vr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Vr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Vr._jsonSchema={type:Ke("string",Vr._jsonSchemaVersion),bundleSource:Ke("string","DocumentSnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class Uo extends Vr{data(e={}){return super.data(e)}}class ds{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ni(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Uo(this._firestore,this._userDataWriter,r.key,r,new ni(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new Uo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ni(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Uo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ni(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:mP(c.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ds._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=uu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function mP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae(61501,{type:t})}}ds._jsonSchemaVersion="firestore/querySnapshot/1.0",ds._jsonSchema={type:Ke("string",ds._jsonSchemaVersion),bundleSource:Ke("string","QuerySnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class Q_ extends dP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ut(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,n)}}function gP(t,e,n,...r){t=sr(t,Qe);const s=sr(t.firestore,bs),i=q_(s);let a;return a=typeof(e=Ze(e))=="string"||e instanceof Ga?lP(i,"updateDoc",t._key,e,n,r):cP(i,"updateDoc",t._key,e),Bu(s,[a.toMutation(t._key,Qt.exists(!0))])}function _P(t){return Bu(sr(t.firestore,bs),[new Eu(t._key,Qt.none())])}function yP(t,e){const n=sr(t.firestore,bs),r=Il(t),s=pP(t.converter,e);return Bu(n,[aP(q_(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Qt.exists(!1))]).then((()=>r))}function EP(t,...e){t=Ze(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||rp(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(rp(e[r])){const l=e[r];e[r]=l.next?.bind(l),e[r+1]=l.error?.bind(l),e[r+2]=l.complete?.bind(l)}let i,a,c;if(t instanceof Qe)a=sr(t.firestore,bs),c=_u(t._key.path),i={next:l=>{e[r]&&e[r](vP(a,t,l))},error:e[r+1],complete:e[r+2]};else{const l=sr(t,Wa);a=sr(l.firestore,bs),c=l._query;const h=new Q_(a);i={next:f=>{e[r]&&e[r](new ds(a,h,l,f))},error:e[r+1],complete:e[r+2]},fP(t._query)}return(function(h,f,p,m){const y=new YS(m),R=new DS(f,y,p);return h.asyncQueue.enqueueAndForget((async()=>PS(await Qd(h),R))),()=>{y.Nu(),h.asyncQueue.enqueueAndForget((async()=>CS(await Qd(h),R)))}})(B_(a),c,s,i)}function Bu(t,e){return(function(r,s){const i=new kr;return r.asyncQueue.enqueueAndForget((async()=>$S(await eP(r),s,i))),i.promise})(B_(t),e)}function vP(t,e,n){const r=n.docs.get(e._key),s=new Q_(t);return new Vr(t,s,e._key,r,new ni(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ks=s})(Ps),ys(new xr("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new bs(new ib(r.getProvider("auth-internal")),new cb(a,r.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Z(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(h.options.projectId,f)})(a,s),a);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),nr(od,ad,e),nr(od,ad,"esm2020")})();const TP={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0},J_=Fm(TP),Mt=tb(J_),bo=nP(J_),wP={class:"min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"},IP={class:"bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center"},AP={class:"flex items-center gap-2"},bP={key:0,xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 text-yellow-500",fill:"currentColor",viewBox:"0 0 20 20"},RP={key:1,xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 text-gray-200",fill:"currentColor",viewBox:"0 0 20 20"},SP={class:"p-6"},PP=Nn({__name:"App",setup(t){const e=$e(!1),n=$e(!1),r=rw(),s=Yl();Hl(()=>{const l=localStorage.getItem("darkMode");e.value=l==="true",i(),fg(Mt,h=>{n.value=!!h})}),cs(e,()=>{i(),localStorage.setItem("darkMode",e.value.toString())});function i(){e.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function a(){e.value=!e.value}async function c(){await H0(Mt),s.push("/login")}return(l,h)=>{const f=zl("router-view");return Me(),je("div",wP,[ue("header",IP,[h[2]||(h[2]=ue("h1",{class:"text-xl font-bold text-blue-600 dark:text-blue-400"}," To Do List ",-1)),ue("div",AP,[ue("button",{onClick:a,class:"p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center","aria-label":"Toggle dark mode"},[e.value?(Me(),je("svg",RP,[...h[1]||(h[1]=[ue("path",{d:"M17.293 13.293a8 8 0 11-10.586-10.586 8 8 0 0010.586 10.586z"},null,-1)])])):(Me(),je("svg",bP,[...h[0]||(h[0]=[ue("path",{d:"M10 3a1 1 0 011 1v1a1 1 0 11-2 0V4a1 1 0 011-1zM4.22 5.22a1 1 0 011.42 0l.7.7a1 1 0 11-1.42 1.42l-.7-.7a1 1 0 010-1.42zM3 10a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm7 7a1 1 0 011-1v-1a1 1 0 10-2 0v1a1 1 0 011 1zm6.78-2.78a1 1 0 010 1.42l-.7.7a1 1 0 01-1.42-1.42l.7-.7a1 1 0 011.42 0zM16 10a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-2.78-4.78a1 1 0 00-1.42-1.42l-.7.7a1 1 0 001.42 1.42l.7-.7zM6.22 14.78a1 1 0 00-1.42 0l-.7.7a1 1 0 101.42 1.42l.7-.7a1 1 0 000-1.42zM10 6a4 4 0 100 8 4 4 0 000-8z"},null,-1)])]))]),n.value&&Kt(r).name==="dashboard"?(Me(),je("button",{key:0,onClick:c,class:"h-10 px-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300"}," Logout ")):Ra("",!0)])]),ue("main",SP,[Xe(f)])])}}});/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Y_;const Ya=t=>Y_=t,X_=Symbol();function bl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var yi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(yi||(yi={}));function CP(){const t=mp(!0),e=t.run(()=>$e({}));let n=[],r=[];const s=Bl({install(i){Ya(s),s._a=i,i.provide(X_,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Z_=()=>{};function sp(t,e,n,r=Z_){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&gp()&&My(s),s}function Jr(t,...e){t.slice().forEach(n=>{n(...e)})}const kP=t=>t(),ip=Symbol(),Fc=Symbol();function Rl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];bl(s)&&bl(r)&&t.hasOwnProperty(n)&&!He(r)&&!Zn(r)?t[n]=Rl(s,r):t[n]=r}return t}const VP=Symbol();function DP(t){return!bl(t)||!Object.prototype.hasOwnProperty.call(t,VP)}const{assign:qn}=Object;function NP(t){return!!(He(t)&&t.effect)}function OP(t,e,n,r){const{state:s,actions:i,getters:a}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const f=iE(n.state.value[t]);return qn(f,i,Object.keys(a||{}).reduce((p,m)=>(p[m]=Bl(Lt(()=>{Ya(n);const y=n._s.get(t);return a[m].call(y,y)})),p),{}))}return l=ey(t,h,e,n,r,!0),l}function ey(t,e,n={},r,s,i){let a;const c=qn({actions:{}},n),l={deep:!0};let h,f,p=[],m=[],y;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),$e({});let V;function D(_){let E;h=f=!1,typeof _=="function"?(_(r.state.value[t]),E={type:yi.patchFunction,storeId:t,events:y}):(Rl(r.state.value[t],_),E={type:yi.patchObject,payload:_,storeId:t,events:y});const I=V=Symbol();wa().then(()=>{V===I&&(h=!0)}),f=!0,Jr(p,E,r.state.value[t])}const $=i?function(){const{state:E}=n,I=E?E():{};this.$patch(b=>{qn(b,I)})}:Z_;function N(){a.stop(),p=[],m=[],r._s.delete(t)}const L=(_,E="")=>{if(ip in _)return _[Fc]=E,_;const I=function(){Ya(r);const b=Array.from(arguments),S=[],T=[];function et(le){S.push(le)}function It(le){T.push(le)}Jr(m,{args:b,name:I[Fc],store:te,after:et,onError:It});let ke;try{ke=_.apply(this&&this.$id===t?this:te,b)}catch(le){throw Jr(T,le),le}return ke instanceof Promise?ke.then(le=>(Jr(S,le),le)).catch(le=>(Jr(T,le),Promise.reject(le))):(Jr(S,ke),ke)};return I[ip]=!0,I[Fc]=E,I},K={_p:r,$id:t,$onAction:sp.bind(null,m),$patch:D,$reset:$,$subscribe(_,E={}){const I=sp(p,_,E.detached,()=>b()),b=a.run(()=>cs(()=>r.state.value[t],S=>{(E.flush==="sync"?f:h)&&_({storeId:t,type:yi.direct,events:y},S)},qn({},l,E)));return I},$dispose:N},te=Fi(K);r._s.set(t,te);const A=(r._a&&r._a.runWithContext||kP)(()=>r._e.run(()=>(a=mp()).run(()=>e({action:L}))));for(const _ in A){const E=A[_];if(He(E)&&!NP(E)||Zn(E))i||(R&&DP(E)&&(He(E)?E.value=R[_]:Rl(E,R[_])),r.state.value[t][_]=E);else if(typeof E=="function"){const I=L(E,_);A[_]=I,c.actions[_]=E}}return qn(te,A),qn(Ae(te),A),Object.defineProperty(te,"$state",{get:()=>r.state.value[t],set:_=>{D(E=>{qn(E,_)})}}),r._p.forEach(_=>{qn(te,a.run(()=>_({store:te,app:r._a,pinia:r,options:c})))}),R&&i&&n.hydrate&&n.hydrate(te.$state,R),h=!0,f=!0,te}/*! #__NO_SIDE_EFFECTS__ */function xP(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(a,c){const l=jE();return a=a||(l?jt(X_,null):null),a&&Ya(a),a=Y_,a._s.has(t)||(s?ey(t,e,r,a):OP(t,r,a)),a._s.get(t)}return i.$id=t,i}const MP={class:"max-w-sm mx-auto mt-20 min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"},LP={class:"relative w-full mb-2"},FP=["type"],UP={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},BP={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},jP=["disabled"],$P={key:0,class:"text-red-500 mt-2"},qP={class:"mt-4 text-sm"},HP=Nn({__name:"LoginView",setup(t){const e=$e(""),n=$e(""),r=$e(""),s=Yl(),i=$e(null),a=$e(null),c=$e(!1),l={"auth/invalid-email":"Invalid email address.","auth/user-disabled":"This account has been disabled.","auth/missing-password":"Missing password.","auth/invalid-credential":"Incorrect password."};async function h(){try{await j0(Mt,e.value,n.value),s.push("/dashboard")}catch(y){console.error("Firebase login error:",y);const R=y.code||y.message;r.value=l[R]||"An unexpected error occurred."}}function f(y){(y.key==="Enter"||y.key==="ArrowDown")&&(y.preventDefault(),a.value?.focus())}function p(y){y.key==="ArrowUp"?(y.preventDefault(),i.value?.focus()):y.key==="Enter"&&(y.preventDefault(),h())}function m(){c.value=!c.value}return(y,R)=>{const V=zl("router-link");return Me(),je("div",MP,[R[6]||(R[6]=ue("h2",{class:"text-xl font-bold mb-4"},"Login",-1)),as(ue("input",{ref_key:"emailInput",ref:i,"onUpdate:modelValue":R[0]||(R[0]=D=>e.value=D),type:"email",placeholder:"Email",class:"border p-2 w-full mb-2 placeholder-gray-400 dark:placeholder-gray-500",onKeydown:f},null,544),[[bi,e.value]]),ue("div",LP,[as(ue("input",{ref_key:"passwordInput",ref:a,"onUpdate:modelValue":R[1]||(R[1]=D=>n.value=D),type:c.value?"text":"password",placeholder:"Password",class:"border p-2 w-full pr-10 rounded placeholder-gray-400 dark:placeholder-gray-500",onKeydown:p},null,40,FP),[[Gc,n.value]]),ue("button",{type:"button",onClick:m,"aria-label":"Toggle password visibility",class:"absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700 transition-all duration-200"},[ue("span",{class:Dr(["w-5 h-5 inline-block transition-all duration-300 ease-in-out",c.value?"scale-125 opacity-100":"scale-100 opacity-60"])},[c.value?(Me(),je("svg",BP,[...R[3]||(R[3]=[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1),ue("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"},null,-1)])])):(Me(),je("svg",UP,[...R[2]||(R[2]=[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 011.658-3.197M6.1 6.1l11.8 11.8M9.88 9.88a3 3 0 104.243 4.243"},null,-1)])]))],2)])]),ue("button",{onClick:h,disabled:!e.value||!n.value,class:"w-full px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"}," Login ",8,jP),r.value?(Me(),je("p",$P,Ea(r.value),1)):Ra("",!0),ue("p",qP,[R[5]||(R[5]=Ii(" Don’t have an account? ",-1)),Xe(V,{to:"/register",class:"text-blue-500 font-medium hover:underline transition-colors duration-200 dark:text-blue-400"},{default:$l(()=>[...R[4]||(R[4]=[Ii(" Register ",-1)])]),_:1})])])}}}),zP={class:"max-w-sm mx-auto mt-20 min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"},KP={class:"relative w-full mb-2"},WP=["type"],GP={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},QP={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},JP={class:"relative w-full mb-2"},YP=["type"],XP={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},ZP={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},eC=["disabled"],tC={key:0,class:"text-red-500 mt-2"},nC={class:"mt-4 text-sm"},rC=Nn({__name:"RegisterView",setup(t){const e=$e(""),n=$e(""),r=$e(""),s=$e(""),i=Yl(),a=$e(null),c=$e(null),l=$e(null),h=$e(!1),f=$e(!1),p={"auth/invalid-email":"Invalid email address.","auth/email-already-in-use":"This email already use.","auth/user-disabled":"This account has been disabled.","auth/missing-password":"Missing password.","auth/too-many-requests":"Too many attempts. Please try again later."};async function m(){if(n.value!==r.value){s.value="Passwords do not match";return}try{await B0(Mt,e.value,n.value),i.push("/dashboard")}catch(N){console.error("Firebase login error:",N);const L=N.code||"";s.value=p[L]||"An unexpected error occurred."}}function y(N){(N.key==="Enter"||N.key==="ArrowDown")&&(N.preventDefault(),c.value?.focus())}function R(N){N.key==="ArrowUp"?(N.preventDefault(),a.value?.focus()):(N.key==="Enter"||N.key==="ArrowDown")&&(N.preventDefault(),l.value?.focus())}function V(N){N.key==="ArrowUp"?(N.preventDefault(),c.value?.focus()):N.key==="Enter"&&(N.preventDefault(),m())}function D(){h.value=!h.value}function $(){f.value=!f.value}return(N,L)=>{const K=zl("router-link");return Me(),je("div",zP,[L[9]||(L[9]=ue("h2",{class:"text-xl font-bold mb-4"},"Register",-1)),as(ue("input",{ref_key:"emailInput",ref:a,"onUpdate:modelValue":L[0]||(L[0]=te=>e.value=te),type:"email",placeholder:"Email",class:"border p-2 w-full mb-2 placeholder-gray-400 dark:placeholder-gray-500",onKeydown:y},null,544),[[bi,e.value]]),ue("div",KP,[as(ue("input",{ref_key:"passwordInput",ref:c,"onUpdate:modelValue":L[1]||(L[1]=te=>n.value=te),type:h.value?"text":"password",placeholder:"Password",class:"border p-2 w-full mb-2 placeholder-gray-400 dark:placeholder-gray-500",onKeydown:R},null,40,WP),[[Gc,n.value]]),ue("button",{type:"button",onClick:D,"aria-label":"Toggle password visibility",class:"absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700 transition-all duration-200"},[ue("span",{class:Dr(["w-5 h-5 inline-block",h.value?"scale-125 opacity-100":"scale-100 opacity-60","transition-all duration-300 ease-in-out"])},[h.value?(Me(),je("svg",QP,[...L[4]||(L[4]=[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1),ue("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"},null,-1)])])):(Me(),je("svg",GP,[...L[3]||(L[3]=[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 011.658-3.197M6.1 6.1l11.8 11.8M9.88 9.88a3 3 0 104.243 4.243"},null,-1)])]))],2)])]),ue("div",JP,[as(ue("input",{ref_key:"confirmInput",ref:l,"onUpdate:modelValue":L[2]||(L[2]=te=>r.value=te),type:f.value?"text":"password",placeholder:"Confirm Password",class:"border p-2 w-full mb-2 placeholder-gray-400 dark:placeholder-gray-500",onKeydown:V},null,40,YP),[[Gc,r.value]]),ue("button",{type:"button",onClick:$,"aria-label":"Toggle password visibility",class:"absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700 transition-all duration-200"},[ue("span",{class:Dr(["w-5 h-5 inline-block",f.value?"scale-125 opacity-100":"scale-100 opacity-60","transition-all duration-300 ease-in-out"])},[f.value?(Me(),je("svg",ZP,[...L[6]||(L[6]=[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},null,-1),ue("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"},null,-1)])])):(Me(),je("svg",XP,[...L[5]||(L[5]=[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 011.658-3.197M6.1 6.1l11.8 11.8M9.88 9.88a3 3 0 104.243 4.243"},null,-1)])]))],2)])]),ue("button",{onClick:m,disabled:!e.value||!n.value||!r.value,class:"w-full px-4 py-2 rounded text-white bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"}," Register ",8,eC),s.value?(Me(),je("p",tC,Ea(s.value),1)):Ra("",!0),ue("p",nC,[L[8]||(L[8]=Ii(" Already have an account? ",-1)),Xe(K,{to:"/login",class:"text-blue-500 font-medium hover:underline transition-colors duration-200 dark:text-blue-400"},{default:$l(()=>[...L[7]||(L[7]=[Ii(" Login ",-1)])]),_:1})])])}}}),Xa=xP("task",{state:()=>({tasks:[],unsubscribe:null,loading:!0}),actions:{init(){this.loading=!0,fg(Mt,t=>{if(t){const e=Zd(bo,"users",t.uid,"tasks");this.unsubscribe=EP(e,n=>{this.tasks=n.docs.map(r=>({id:r.id,...r.data()})),this.loading=!1})}else this.tasks=[],this.loading=!1,this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)})},async addTask(t){Mt.currentUser&&await yP(Zd(bo,"users",Mt.currentUser.uid,"tasks"),{title:t,completed:!1})},async toggleTask(t,e){if(!Mt.currentUser)return;const n=Il(bo,"users",Mt.currentUser.uid,"tasks",t);await gP(n,{completed:e})},async deleteTask(t){if(!Mt.currentUser)return;const e=Il(bo,"users",Mt.currentUser.uid,"tasks",t);await _P(e)}}}),sC={class:"flex justify-between items-center bg-white dark:bg-gray-800 shadow rounded p-2 mb-2 transition-colors duration-300"},iC={class:"flex items-center"},oC=["checked"],aC=Nn({__name:"TaskItem",props:{task:{}},setup(t){const e=t,n=Xa();function r(){n.toggleTask(e.task.id,!e.task.completed)}function s(){n.deleteTask(e.task.id)}return(i,a)=>(Me(),je("li",sC,[ue("div",iC,[ue("input",{type:"checkbox",checked:e.task.completed,onChange:r,class:"mr-2"},null,40,oC),ue("span",{class:Dr({"line-through text-gray-400":e.task.completed,"text-gray-900 dark:text-gray-100":!e.task.completed})},Ea(e.task.title),3)]),ue("button",{onClick:s,class:"text-red-400 hover:text-red-500 dark:hover:text-red-300 transition duration-200 rounded inline-flex p-0 shadow-none hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.7)]",title:"Delete task"}," ❌ ")]))}}),cC={class:"transition-colors duration-300"},lC={key:0,class:"text-gray-700 dark:text-gray-300 mb-2"},uC={key:1},hC={key:2,class:"text-gray-600 dark:text-gray-400 mt-2"},fC=Nn({__name:"TaskList",setup(t){const e=Xa();return Hl(()=>{e.init()}),(n,r)=>(Me(),je("div",cC,[Kt(e).loading?(Me(),je("p",lC," Loading tasks... ")):(Me(),je("ul",uC,[(Me(!0),je(nn,null,DE(Kt(e).tasks,s=>(Me(),cm(aC,{key:s.id,task:s},null,8,["task"]))),128))])),!Kt(e).loading&&!Kt(e).tasks.length?(Me(),je("p",hC," No tasks yet. ")):Ra("",!0)]))}}),dC=["disabled"],pC=Nn({__name:"AddTaskForm",setup(t){const e=Xa(),n=$e("");async function r(){n.value.trim()&&(await e.addTask(n.value.trim()),n.value="")}return(s,i)=>(Me(),je("form",{onSubmit:Gv(r,["prevent"]),class:"flex gap-2 mb-4"},[as(ue("input",{"onUpdate:modelValue":i[0]||(i[0]=a=>n.value=a),type:"text",placeholder:"Enter a new task",class:"border p-2 w-full mb-2 placeholder-gray-400 dark:placeholder-gray-500"},null,512),[[bi,n.value]]),ue("button",{type:"submit",disabled:!n.value.trim(),class:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 h-full"}," Add ",8,dC)],32))}}),mC={class:"max-w-lg mx-auto mt-10"},gC=Nn({__name:"DashboardView",setup(t){return(e,n)=>(Me(),je("div",mC,[n[0]||(n[0]=ue("div",{class:"flex justify-between items-center mb-4"},[ue("h2",{class:"text-2xl font-bold"},"Your Tasks")],-1)),Xe(pC),Xe(fC)]))}}),_C=[{path:"/",redirect:"/login"},{path:"/login",component:HP,meta:{requiresGuest:!0}},{path:"/register",component:rC,meta:{requiresGuest:!0}},{path:"/dashboard",name:"dashboard",component:gC,meta:{requiresAuth:!0}}],ty=tw({history:kT(),routes:_C});ty.beforeEach((t,e,n)=>{const r=Mt.currentUser;t.meta.requiresAuth&&!r?n("/login"):t.meta.requiresGuest&&r?n("/dashboard"):n()});const ju=Yv(PP);ju.use(CP());ju.use(ty);const yC=Xa();yC.init();ju.mount("#app");
