(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[753,580,642,185],{8808:function(e,l,a){Promise.resolve().then(a.bind(a,8398))},1639:function(e,l,a){"use strict";var t=a(7437),n=a(1065),r=a(1021),s=a(3503),i=a(703);l.Z=e=>{let{movie:l,className:a,ImagePath:o,loading:c="lazy",quality:u=75,enableBlur:p}=e;return(0,t.jsxs)(r.Link,{href:"/phim/"+l.slug,className:(0,n.cn)(" bg-black block p-[5px] mx-[2px] my-[5px] relative cursor-pointer hover:opacity-[80%] ",a),rel:"preload",children:[(0,t.jsx)("div",{className:"relative h-[calc(100%-25px)] w-full",children:(0,t.jsx)(i.default,{src:o+l.thumb_url,fill:!0,rel:"preload",loading:c,placeholder:p&&l.blurImage?"blur":"empty",blurDataURL:l.blurImage,quality:u,alt:"thumbnail "+l.name,className:"transform object-cover  brightness-90 transition group-hover:brightness-110",sizes:"(max-width: 640px) 200px, (max-width: 1280px) 200px,250px"})}),(0,t.jsx)("p",{className:"truncate px-[3p] py-[5px] text-sm text-center text-[#cc8d4c] font-bold",children:l.name}),(0,t.jsx)("div",{className:"absolute top-3  left-3 px-[12px]  border-[3px] border-double bg-[#383838] border-[#5a5a5a]",children:(0,t.jsx)("span",{className:"text-[#cac9c9] font-bold text-sm",children:(0,s.jF)(null==l?void 0:l.episode_current,null==l?void 0:l.episode_total)})})]})}},8398:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return x}});var t=a(7437),n=a(2265),r=a(3751),s=a(4906),i=a(3503),o=a(7907),c=a(6843),u=a(1021),p=a(1065),d=e=>{let{className:l}=e;return(0,t.jsx)("div",{className:(0,p.cn)(" bg-black block p-[5px] mx-[2px] my-[5px] relative w-full h-[250px] ",l),children:(0,t.jsx)("div",{className:"relative h-full first-line:w-full animate-pulse  bg-white/10"})})},m=()=>(0,t.jsx)("div",{className:" p-[10px] grid grid-cols-5  gap-x-[10px] rounded-[8px]  w-full bg-[#404040]",children:Array.from({length:25}).map((e,l)=>(0,t.jsx)(d,{className:" h-60 md:h-80"},l))}),x=e=>{var l,a,p;let{searchParams:d,initialData:x,titleId:g}=e,[h,v]=n.useState(!1),f=(0,u.useRouter)(),b=(0,o.usePathname)();return(0,n.useEffect)(()=>{v(!1)},[null==x?void 0:null===(l=x.pagination)||void 0===l?void 0:l.currentPage]),h?(0,t.jsx)(m,{}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Z,{quality:50,enableBlur:!0,movies:x}),(0,t.jsx)(r.Z,{onPageClick:e=>{let l=(0,i.B2)(d,"page",(e.selected+1).toString());(0,c.F)(g),f.push("".concat(b,"?").concat(l),{scroll:!1})},totalPage:Math.ceil(null!==(p=null==x?void 0:null===(a=x.pagination)||void 0===a?void 0:a.totalPages)&&void 0!==p?p:0)})]})}},4906:function(e,l,a){"use strict";var t=a(7437);a(2265);var n=a(1639);l.Z=e=>{let{movies:l,enableBlur:a=!1,quality:r}=e;return(null==l?void 0:l.items)?(0,t.jsx)("div",{className:" p-[10px] grid grid-cols-6  gap-x-[10px] rounded  w-full bg-[#404040]",children:l.items.map((e,s)=>(0,t.jsx)(n.Z,{quality:r,enableBlur:a,movie:e,ImagePath:l.pathImage,className:"w-full h-60 md:h-72"},e._id))}):null}},3751:function(e,l,a){"use strict";a.d(l,{Z:function(){return g}});var t=a(7437);a(911);var n=a(482),r=a.n(n),s=a(2821),i=a(2265),o=a(3161),c=a(8009),u=a(1021),p=e=>{let{totalPage:l}=e,[a,n]=i.useState(),r=(0,u.useRouter)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.I,{type:"number",max:9999,"aria-label":"pagination-search",value:a,onChange:e=>n(e.target.value),onKeyDown:e=>["e",".",",","-","+"].includes(e.key)&&e.preventDefault(),className:"!outline-none flex-1 bg-transparent ml-3 w-auto max-w-[40px] text-title   ",placeholder:"Nhập"}),(0,t.jsx)(o.W1,{className:"w-4 h-4 text-title hover:text-mainColor mx-3 cursor-pointer",onClick:()=>{if(a&&parseInt(null!=a?a:1)<=l){var e;let l=new URLSearchParams;l.set("page",a.toString()),r.push("/?".concat(l.toString()),{scroll:!1}),null===(e=document.getElementById("MovieListTitle"))||void 0===e||e.scrollIntoView({behavior:"smooth"})}else c.default.error("Trang kh\xf4ng tồn tại");n(void 0)},fill:"currentColor"})]})},d=a(9874),m=a(7472),x=a(7907),g=e=>{let{totalPage:l,onPageClick:a}=e,n=(0,x.useSearchParams)();return(0,t.jsxs)("div",{className:"flex text-sm  bg-[#585858] mx-auto my-[10px] overflow-hidden w-fit items-center rounded shadow-sm justify-center",children:[(0,t.jsx)(r(),{nextLabel:(0,t.jsx)(d.Z,{className:"h-5 w-5","aria-hidden":"true"}),onPageChange:a,pageRangeDisplayed:3,marginPagesDisplayed:2,pageCount:l,previousLabel:(0,t.jsx)(m.Z,{className:"h-5 w-5","aria-hidden":"true"}),pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"active",forcePage:parseInt(n.get("page")||"1")-1,renderOnZeroPageCount:null}),0!==l&&(0,t.jsx)(p,{totalPage:l})]})}},3503:function(e,l,a){"use strict";a.d(l,{B2:function(){return n},jF:function(){return t},mr:function(){return r}});let t=(e,l)=>["Full","Trailer"].includes(e||"")?e:["Ho\xe0n Tất","Ho\xe0n tất","ho\xe0n tất"].some(l=>l===(null==e?void 0:e.slice(0,8)))?e.replaceAll("Ho\xe0n Tất","").replaceAll("Ho\xe0n tất","").replaceAll("ho\xe0n tất","").replaceAll("(","").replaceAll(")",""):(e+"/"+l).replaceAll("Tập","").replaceAll("tập","").replaceAll("t\xe2p","").replaceAll("Đang cập nhật","??"),n=(e,l,a)=>{let t=new URLSearchParams(e);return t.set(l,a),t.toString()},r=e=>{let l=Math.floor(e%6e4/1e3);return"".concat(Math.floor(e/6e4),":").concat(l<10?"0".concat(l):l)}},6843:function(e,l,a){"use strict";a.d(l,{F:function(){return t}});let t=e=>{var l,a,t;let n=null===(a=document)||void 0===a?void 0:null===(l=a.getElementById("header-app"))||void 0===l?void 0:l.classList;null==n||n.add("auto-scroll"),null===(t=document.getElementById(e))||void 0===t||t.scrollIntoView({behavior:"smooth"})}},911:function(){}},function(e){e.O(0,[576,129,9,485,68,178,122,971,69,744],function(){return e(e.s=8808)}),_N_E=e.O()}]);