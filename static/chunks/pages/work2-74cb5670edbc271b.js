(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{4400:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work2",function(){return r(207)}])},8418:function(e,s,r){"use strict";function n(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var r=[],n=!0,t=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(r.push(c.value),!s||r.length!==s);n=!0);}catch(a){t=!0,i=a}finally{try{n||null==l.return||l.return()}finally{if(t)throw i}}return r}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}s.default=void 0;var t,i=(t=r(7294))&&t.__esModule?t:{default:t},c=r(6273),l=r(387),a=r(7190);var o={};function d(e,s,r,n){if(e&&c.isLocalURL(s)){e.prefetch(s,r,n).catch((function(e){0}));var t=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;o[s+"%"+r+(t?"%"+t:"")]=!0}}var u=function(e){var s,r=!1!==e.prefetch,t=l.useRouter(),u=i.default.useMemo((function(){var s=n(c.resolveHref(t,e.href,!0),2),r=s[0],i=s[1];return{href:r,as:e.as?c.resolveHref(t,e.as):i||r}}),[t,e.href,e.as]),h=u.href,f=u.as,m=e.children,j=e.replace,v=e.shallow,x=e.scroll,p=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var g=(s=i.default.Children.only(m))&&"object"===typeof s&&s.ref,N=n(a.useIntersection({rootMargin:"200px"}),2),w=N[0],y=N[1],b=i.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);i.default.useEffect((function(){var e=y&&r&&c.isLocalURL(h),s="undefined"!==typeof p?p:t&&t.locale,n=o[h+"%"+f+(s?"%"+s:"")];e&&!n&&d(t,h,f,{locale:s})}),[f,h,y,p,r,t]);var M={ref:b,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,r,n,t,i,l,a){("A"!==e.currentTarget.nodeName||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==l&&n.indexOf("#")>=0&&(l=!1),s[t?"replace":"push"](r,n,{shallow:i,locale:a,scroll:l}))}(e,t,h,f,j,v,x,p)},onMouseEnter:function(e){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),c.isLocalURL(h)&&d(t,h,f,{priority:!0})}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var k="undefined"!==typeof p?p:t&&t.locale,E=t&&t.isLocaleDomain&&c.getDomainLocale(f,k,t&&t.locales,t&&t.domainLocales);M.href=E||c.addBasePath(c.addLocale(f,k,t&&t.defaultLocale))}return i.default.cloneElement(s,M)};s.default=u},7190:function(e,s,r){"use strict";function n(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var r=[],n=!0,t=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(r.push(c.value),!s||r.length!==s);n=!0);}catch(a){t=!0,i=a}finally{try{n||null==l.return||l.return()}finally{if(t)throw i}}return r}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootMargin,r=e.disabled||!c,a=t.useRef(),o=n(t.useState(!1),2),d=o[0],u=o[1],h=t.useCallback((function(e){a.current&&(a.current(),a.current=void 0),r||d||e&&e.tagName&&(a.current=function(e,s,r){var n=function(e){var s=e.rootMargin||"",r=l.get(s);if(r)return r;var n=new Map,t=new IntersectionObserver((function(e){e.forEach((function(e){var s=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;s&&r&&s(r)}))}),e);return l.set(s,r={id:s,observer:t,elements:n}),r}(r),t=n.id,i=n.observer,c=n.elements;return c.set(e,s),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),l.delete(t))}}(e,(function(e){return e&&u(e)}),{rootMargin:s}))}),[r,s,d]);return t.useEffect((function(){if(!c&&!d){var e=i.requestIdleCallback((function(){return u(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),[h,d]};var t=r(7294),i=r(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map},8063:function(e,s){"use strict";s.Z=function(){var e,s=document.querySelectorAll(".gallery"),r=document.querySelector(".filtering"),n=document.querySelectorAll(".filtering");if(s.length>=1&&s.forEach((function(s){e=new Isotope(s,{itemSelector:".items"})})),r){r.addEventListener("click",(function(s){if(matchesSelector(s.target,"span")){var r=s.target.getAttribute("data-filter");r=r,e.arrange({filter:r})}}));for(var t=0,i=n.length;t<i;t++){var c=n[t];c.addEventListener("click",(function(e){matchesSelector(e.target,"span")}))}}}},7068:function(e,s,r){"use strict";var n=r(5893);r(7294);s.Z=function(e){var s=e.title,r=e.content,t=e.center;return(0,n.jsx)("header",{className:"work-header bg-img valign",style:{backgroundImage:"url(/assets/img/patern.png)"},children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row ".concat(t?"justify-content-center":""),children:(0,n.jsx)("div",{className:"col-lg-9",children:(0,n.jsxs)("div",{className:"cont ".concat(t?"text-center":""),children:[(0,n.jsx)("h2",{children:"object"==typeof s?(0,n.jsxs)(n.Fragment,{children:[s.first," ",(0,n.jsx)("br",{})," ",s.second]}):s}),(0,n.jsx)("p",{children:r})]})})})})})}},843:function(e,s,r){"use strict";var n=r(5893),t=r(7294),i=r(1696),c=r(1690),l=r(9008);s.Z=function(e){var s=e.children,r=e.logoClassText,a=t.useRef(null),o=t.useRef(null);return t.useEffect((function(){var e=a.current,s=o.current;window.pageYOffset>300?e.classList.add("nav-scroll"):e.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?(e.classList.add("nav-scroll"),s.setAttribute("src","/assets/img/logo-light.png")):(e.classList.remove("nav-scroll"),s.setAttribute("src","/assets/img/logo-light.png"))}))}),[a]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"stylesheet",href:"/assets/css/style.css"})}),(0,n.jsx)(i.Z,{navbarRef:a,logoRef:o,logoClass:r}),s,(0,n.jsx)(c.Z,{})]})}},207:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return d}});var n=r(5893),t=r(7294),i=r(843),c=r(7068),l=r(1664),a=r(8063),o=function(){return t.useEffect((function(){setTimeout((function(){window.Isotope&&(0,a.Z)()}),1e3)}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("section",{className:"works filter-img three-col section-padding",children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"filtering text-center mb-30",children:(0,n.jsxs)("div",{className:"filter",children:[(0,n.jsx)("span",{"data-filter":"*",className:"active",children:"All"}),(0,n.jsx)("span",{"data-filter":".interior",children:"Interior"}),(0,n.jsx)("span",{"data-filter":".theaters",children:"Theaters"}),(0,n.jsx)("span",{"data-filter":".residential",children:"Residential"})]})}),(0,n.jsxs)("div",{className:"row gallery",children:[(0,n.jsx)("div",{className:"col-lg-4 col-md-6 items theaters",children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"/assets/img/works/col/2.jpg",alt:""})}),(0,n.jsxs)("div",{className:"cont",children:[(0,n.jsx)("h5",{children:(0,n.jsx)(l.default,{href:"/project-details",children:"Modern Townhouse"})}),(0,n.jsx)("span",{children:"Architecture"}),(0,n.jsx)("span",{children:"Modern"})]})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-md-6 items residential interior",children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"/assets/img/works/col/1.jpg",alt:""})}),(0,n.jsxs)("div",{className:"cont",children:[(0,n.jsx)("h5",{children:(0,n.jsx)(l.default,{href:"/project-details",children:"Modern Townhouse"})}),(0,n.jsx)("span",{children:"Architecture"}),(0,n.jsx)("span",{children:"Modern"})]})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-md-6 items interior",children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"/assets/img/works/col/5.jpg",alt:""})}),(0,n.jsxs)("div",{className:"cont",children:[(0,n.jsx)("h5",{children:(0,n.jsx)(l.default,{href:"/project-details",children:"Modern Townhouse"})}),(0,n.jsx)("span",{children:"Architecture"}),(0,n.jsx)("span",{children:"Modern"})]})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-md-6 items residential",children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"/assets/img/works/col/3.jpg",alt:""})}),(0,n.jsxs)("div",{className:"cont",children:[(0,n.jsx)("h5",{children:(0,n.jsx)(l.default,{href:"/project-details",children:"Modern Townhouse"})}),(0,n.jsx)("span",{children:"Architecture"}),(0,n.jsx)("span",{children:"Modern"})]})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-md-6 items theaters",children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"/assets/img/works/col/4.jpg",alt:""})}),(0,n.jsxs)("div",{className:"cont",children:[(0,n.jsx)("h5",{children:(0,n.jsx)(l.default,{href:"/project-details",children:"Modern Townhouse"})}),(0,n.jsx)("span",{children:"Architecture"}),(0,n.jsx)("span",{children:"Modern"})]})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-md-6 items residential",children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"/assets/img/works/col/6.jpg",alt:""})}),(0,n.jsxs)("div",{className:"cont",children:[(0,n.jsx)("h5",{children:(0,n.jsx)(l.default,{href:"/project-details",children:"Modern Townhouse"})}),(0,n.jsx)("span",{children:"Architecture"}),(0,n.jsx)("span",{children:"Modern"})]})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-md-6 items residential interior",children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"/assets/img/works/col/1.jpg",alt:""})}),(0,n.jsxs)("div",{className:"cont",children:[(0,n.jsx)("h5",{children:(0,n.jsx)(l.default,{href:"/project-details",children:"Modern Townhouse"})}),(0,n.jsx)("span",{children:"Architecture"}),(0,n.jsx)("span",{children:"Modern"})]})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-md-6 items interior",children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"/assets/img/works/col/5.jpg",alt:""})}),(0,n.jsxs)("div",{className:"cont",children:[(0,n.jsx)("h5",{children:(0,n.jsx)(l.default,{href:"/project-details",children:"Modern Townhouse"})}),(0,n.jsx)("span",{children:"Architecture"}),(0,n.jsx)("span",{children:"Modern"})]})]})}),(0,n.jsx)("div",{className:"col-lg-4 col-md-6 items residential",children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)("img",{src:"/assets/img/works/col/3.jpg",alt:""})}),(0,n.jsxs)("div",{className:"cont",children:[(0,n.jsx)("h5",{children:(0,n.jsx)(l.default,{href:"/project-details",children:"Modern Townhouse"})}),(0,n.jsx)("span",{children:"Architecture"}),(0,n.jsx)("span",{children:"Modern"})]})]})})]})]})})})},d=function(){return t.useEffect((function(){document.querySelector("body").classList.add("index3")}),[]),(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(c.Z,{center:!0,title:{first:"Architecture is a visual art,",second:"and the building speak for themeselves"},content:"Architecture bibendum pharetra eleifend. Suspendisse vel volutpat purus, sit amet bibendum nisl. Cras mollis turpis a ipsum ultes, nec condimentum ipsum consequat. Mauris vitae consequat nibh, vitae interdum mi."}),(0,n.jsx)(o,{})]})}},1664:function(e,s,r){e.exports=r(8418)}},function(e){e.O(0,[613,774,888,179],(function(){return s=4400,e(e.s=s);var s}));var s=e.O();_N_E=s}]);