"use strict";(self.webpackChunkdevshop=self.webpackChunkdevshop||[]).push([[552],{4513:function(e,a,r){r.d(a,{Z:function(){return u}});var t=r(2791),n=r(9434),o=r(4512),i="AddToCart_button_add__6r5yt",c="AddToCart_button_add_wrapper__F3cPV",s=r(184),d=function(e){var a=e.productId,r=(0,n.I0)();return(0,s.jsx)("button",{className:i,onClick:function(){return r((0,o.jX)(a))},children:(0,s.jsx)("div",{className:c,children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M11 9H13V6H16V4H13V1H11V4H8V6H11M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18M7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8Z"})})})})},u=t.memo(d)},4402:function(e,a,r){r.d(a,{Z:function(){return s}});var t=r(2791),n="Rating_rating__lMyzK",o="Rating_rating__stars__kKxvS",i=r(184),c=function(e){var a=e.rating,r=e.number,t=e.needNumber,c=function(e){return e>=1?(0,i.jsx)("img",{src:"/devShop/resources/images/star.png",alt:"one star"}):e>=.5?(0,i.jsx)("img",{src:"/devShop/resources/images/half-star.png",alt:"half star"}):(0,i.jsx)("img",{src:"/devShop/resources/images/unfilled-star.png",alt:"no star"})};return(0,i.jsxs)("div",{className:n,children:[(0,i.jsxs)("div",{className:o,children:[c(a),c(a-1),c(a-2),c(a-3),c(a-4)]}),t&&(0,i.jsx)("div",{className:"reviews_number",children:"".concat(r)})]})};c.defaultProps={number:1,rating:0,needNumber:!0};var s=t.memo(c)},1821:function(e,a,r){r.d(a,{Z:function(){return b}});var t=r(2791),n=r(1087),o=r(5198),i=r(4402),c=r(4513),s="GoodCard_goodCard__Bc00a",d="GoodCard_goodCard__link__UFjtn",u="GoodCard_goodCard__icon__antY3",l="GoodCard_goodCard__info__xSwSE",m="GoodCard_goodCard__product_name__fyWwn",p="GoodCard_goodCard__product_rating__MODXP",h="GoodCard_goodCard__product_prices__1mF-f",f="GoodCard_goodCard__product_now__Xk8YJ",g="GoodCard_goodCard__product_previous__s2tok",v=r(184),_=function(e){var a=e.data;return(0,v.jsxs)("div",{className:s,children:[(0,v.jsx)(n.rU,{to:"/shop/".concat(a.id),className:d,children:(0,v.jsx)("img",{src:"/devShop"+a.src,alt:a.name,className:u})}),(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("div",{className:m,children:(0,v.jsx)(n.rU,{to:"/shop/".concat(a.id),children:a.name.length>50?a.name.slice(0,47)+"...":a.name})}),(0,v.jsx)("div",{className:p,children:(0,v.jsx)(n.rU,{to:"/shop/".concat(a.id,"/reviews"),children:(0,v.jsx)(i.Z,{rating:(0,o.Y)(a.reviews,(function(e){return e.rating})),number:Object.getOwnPropertyNames(a.reviews).length})})}),(0,v.jsxs)("div",{className:h,children:[void 0!==a.previousPrice&&(0,v.jsx)("div",{className:g,children:"".concat(a.previousPrice).concat(a.currency)}),(0,v.jsx)("div",{className:f,children:"".concat(a.price).concat(a.currency)})]}),(0,v.jsx)(c.Z,{productId:a.id})]})]})},b=t.memo(_)},5198:function(e,a,r){r.d(a,{L:function(){return o},Y:function(){return i}});var t=r(9439),n=function(e,a,r){for(var t=[],n=0,o=0;n<e.length&&o<a.length;)r(e[n],a[o])>=0?(t.push(e[n]),n++):(t.push(a[o]),o++);for(;n<e.length;)t.push(e[n]),n++;for(;o<a.length;)t.push(a[o]),o++;return t},o=function e(a){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return 1};return a.length<=1?a:n(e(a.slice(0,Math.floor(a.length/2)),r),e(a.slice(Math.floor(a.length/2)),r),r)},i=function(e,a){for(var r=0,n=0,o=0,i=Object.entries(e);o<i.length;o++){r+=1,n+=a((0,t.Z)(i[o],2)[1])}return n/r}},4011:function(e,a){var r={"152ed03e955f4f9188e925d96b8ceb21":{id:"152ed03e955f4f9188e925d96b8ceb21",name:"MSI Nvidia GeForce RTX 4090",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Graphics card"},manufacturer:{name:"Manufacturer",value:"MSI"},release:{name:"Release date",value:"2022"}}},gpu:{title:"GPU characteristics",chars:{chipManufacturer:{name:"GPU manufacturer",value:"Nvidia"},series:{name:"GPU series",value:"RTX 40"},model:{name:"GPU model",value:"RTX 4090"}}}},type:"Component",element:"Graphics card",chipManufacturer:"Nvidia",series:"RTX 40",model:"RTX 4090",special:new Set(["new","sale"]),date:"2022-12-06",manufacturer:"MSI",description:"The NVIDIA GeForce RTX 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics. Experience ultra-high performance gaming, incredibly detailed virtual worlds with ray tracing, unprecedented productivity, and new ways to create. It\u2019s powered by the NVIDIA Ada Lovelace architecture and comes with 24 GB of G6X memory to deliver the ultimate experience for gamers and creators.",price:2200,previousPrice:2300,currency:"$",release:"2022",src:"/resources/images/products/msi-nvidia-geforce-rtx-4090.png",number:10,reviews:{aae57e5d1bb742028af240e84b5b1e65:{id:"aae57e5d1bb742028af240e84b5b1e65",title:"The Best GPU",author:"Marry",pros:"Powerful, good design",cons:"No",description:"Very good video card, although expensive.",rating:5}}},f758d6358c6b4551ad926bc25a24a3dc:{id:"f758d6358c6b4551ad926bc25a24a3dc",name:"Gigabyte Nvidia GeForce RTX 3070 Ti",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Graphics card"},manufacturer:{name:"Manufacturer",value:"Gigabyte"},release:{name:"Release date",value:"2021"}}},gpu:{title:"GPU characteristics",chars:{chipManufacturer:{name:"GPU manufacturer",value:"Nvidia"},series:{name:"GPU series",value:"RTX 30"},model:{name:"GPU model",value:"RTX 3070 Ti"}}}},type:"Component",element:"Graphics card",chipManufacturer:"Nvidia",series:"RTX",generation:"RTX 30",model:"3070 Ti",special:new Set(["new"]),date:"2022-10-17",manufacturer:"Gigabyte",description:"NVIDIA Ampere Streaming Multiprocessors 2nd Generation RT Cores 3rd Generation Tensor Cores Powered by GeForce RTX 3070 Ti Integrated with 8GB GDDR6X 256-bit memory interface WINDFORCE 3X Cooling System with alternate spinning fans RGB Fusion 2.0 Protection metal back plate 2x HDMI 2.1, 2x DisplayPort 1.4 Core Clock: 1830 MHz. Get the ultimate gaming performance with AORUS RTX 3070 Ti Graphics Cards.",price:1e3,currency:"$",release:"2021",src:"/resources/images/products/gigabyte-nvidia-geforce-rtx-3070-ti.jpg",number:5,reviews:{"1603fd45fa1a457792da577a7f1e19e6":{id:"1603fd45fa1a457792da577a7f1e19e6",title:"Normal Card",author:"Ivan",pros:"Low price",cons:"Bad quality",description:"The fan is rattling",rating:4}}},"4449ef5138c04b9fbfd54003ca987423":{id:"4449ef5138c04b9fbfd54003ca987423",name:"AMD Ryzen 5 5600X BOX",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Processor"},manufacturer:{name:"Manufacturer",value:"AMD"},release:{name:"Release date",value:"2020"}}},cpu:{title:"CPU characteristics",chars:{series:{name:"CPU series",value:"Ryzen 5000"},model:{name:"CPU model",value:"Ryzen 5 5600X"}}}},type:"Component",element:"Processor",series:"Ryzen",generation:"Ryzen 5000",model:"5600X",special:new Set(["new"]),date:"2020-12-07",manufacturer:"AMD",description:"Be unstoppable with the unprecedented speed of the world\u2019s best desktop processors. AMD Ryzen 5000 Series processors deliver the ultimate in high performance, whether you\u2019re playing the latest games, designing the next skyscraper or crunching scientific data. With AMD Ryzen, you\u2019re always in the lead.",price:230,currency:"$",release:"2020",src:"/resources/images/products/amd-ryzen-5-5600x-box.png",number:7,reviews:{ea36269cc5ad4124a906396e9e93232f:{id:"ea36269cc5ad4124a906396e9e93232f",title:"The Best CPU",author:"Mike",pros:"Good performance",cons:"No",description:"I think this is the best investment I have ever made in my computer. FPS increased by 1.5 times, and rendering by 2.",rating:5},c3245c7533ea493e9a864eb811f31654:{id:"c3245c7533ea493e9a864eb811f31654",date:"2022-01-20",title:"Great solution for PC",author:"Don",pros:"Cheap, good quality",cons:"No",description:"I took this processor with a great discount, it has been working for a year, no problems",rating:5}}},"945041436362491ab408b164fafa7a5d":{id:"945041436362491ab408b164fafa7a5d",name:"be quiet! Dark Power Pro 12 1500W",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Power Supply"},manufacturer:{name:"Manufacturer",value:"be quiet!"},release:{name:"Release date",value:"2022"}}},powerSupply:{title:"Power supply characteristics",chars:{series:{name:"Power supply series",value:"Dark Power Pro 12"},model:{name:"Power supply model",value:"Dark Power Pro 12 1500W"},certificate:{name:"Certificate",value:"80 PLUS Titanium"}}}},type:"Component",element:"Power supply",series:"Dark Power Pro 12",certificate:"80 PLUS Titanium",special:new Set(["new"]),date:"2021-09-05",manufacturer:"be quiet!",description:"The be quiet! Dark Power Pro 12 1500W offers 80 PLUS Titanium efficiency and world class performance due to fully digital control and frameless fan concept. The most technologically-advanced PSU be quiet! has ever built.",price:380,currency:"$",release:"2022",src:"/resources/images/products/be-quiet-dark-power-pro-12-1500w.png",number:10,reviews:{"0c5437d1fb094d6094ac4c60e8c63b5e":{id:"0c5437d1fb094d6094ac4c60e8c63b5e",title:"Perfect Power supply",author:"Mike",pros:"Powerful, cheap.",cons:"",description:"Good, quiet power supply< suitable for powerful builds",rating:5}}},"34376c67997a4cbca94d0a89f4f9a33a":{id:"34376c67997a4cbca94d0a89f4f9a33a",name:"PowerColor AMD Radeon RX 6600",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Graphics card"},manufacturer:{name:"Manufacturer",value:"PowerColor"},release:{name:"Release date",value:"2021"}}},gpu:{title:"GPU characteristics",chars:{chipManufacturer:{name:"GPU manufacturer",value:"AMD"},series:{name:"GPU series",value:"RX 6000"},model:{name:"GPU model",value:"RX 6600"}}}},type:"Component",element:"Graphics card",chipManufacturer:"AMD",series:"Radeon RX",generation:"RX 6000",model:"RX 6600",special:new Set(["new","sale"]),manufacturer:"PowerColor",description:"Powercolor Fighter Amd Radeon Rx 6600 Graphics Card With 8Gb Gddr6 Memory.",price:310,previousPrice:330,currency:"$",release:"2021",src:"/resources/images/products/powercolor-amd-radeon-rx-6600.png",number:2,reviews:{a9345f6bfc6c4443eb5873175d8536be9:{id:"a9345f6bfc6c4443eb5873175d8536be9",title:"Good video card",author:"Jake",pros:"Performance",cons:"Unstable",description:"Good performance except for some freezes",rating:5}}},"22b9c3ac926240a48fc8435cc8b702b0":{id:"22b9c3ac926240a48fc8435cc8b702b0",name:"ASUS AMD Radeon RX 6800 XT",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Graphics card"},manufacturer:{name:"Manufacturer",value:"ASUS"},release:{name:"Release date",value:"2020"}}},gpu:{title:"GPU characteristics",chars:{chipManufacturer:{name:"GPU manufacturer",value:"AMD"},series:{name:"GPU series",value:"RX 6000"},model:{name:"GPU model",value:"RX 6800 XT"}}}},type:"Component",element:"Graphics card",chipManufacturer:"AMD",series:"Radeon RX",generation:"RX 6000",model:"RX 6800 XT",special:new Set(["new"]),manufacturer:"ASUS",description:"The TUF GAMING Radeon\u2122 RX 6800 XT is a tenacious beast with a tough metal exterior, super-efficient cooling, and components that offer enhanced endurance.",price:1e3,currency:"$",release:"2020",src:"/resources/images/products/asus-amd-radeon-rx-6800-xt.png",number:4,reviews:{a9345f6bfc6c4443eb5873175d8536be9:{id:"a9345f6bfc6c4443eb5873175d8536be9",title:"Answer for Nvidia's videos cards",author:"Jake",pros:"Price, performance, design",cons:"No",description:"Great graphics card that outperforms nvidia graphics cards.",rating:5}}}};a.Z=r},5552:function(e,a,r){r.r(a),r.d(a,{default:function(){return G}});var t=r(2791),n=r(6907),o=r(8683),i=r(9439),c=r(4011),s=r(1821),d="ThemeGoods_themeGoods__Dg8D0",u="ThemeGoods_themeGoods__heading__kn0a2",l="ThemeGoods_themeGoods__name__N+QpM",m="ThemeGoods_themeGoods__list__lJg70",p="ThemeGoods_mover_left__NeKM8",h="ThemeGoods_mover_right__2AE9w",f="ThemeGoods_button_mover__kOpB-",g=r(1694),v=r.n(g),_=r(184);function b(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}var w=function(e){var a,r=e.name,n=(0,t.useRef)(),g=(0,t.useState)({position:0,scrollX:0,clientX:0,isMoving:!1,lastScrollX:0}),w=(0,i.Z)(g,2),y=w[0],P=w[1],x=Array.from(Object.entries(c.Z).filter((function(e){return e[1].special.has(r.toLowerCase())})).map((function(e){return e[1]}))),G=function(e){return window.matchMedia("(max-width: 600px)").matches?155*e:window.matchMedia("(max-width: 850px)").matches?0===e?-10:262*e-10:window.matchMedia("(max-width: 1250px)").matches?262*e:0!==e&&e===x.length-4?262*(e-1)+130:262*e},M=function(e){y.isMoving&&(P((0,o.Z)((0,o.Z)({},y),{},{isMoving:!1})),e.stopPropagation(),e.preventDefault())};return(0,t.useEffect)((function(){return document.addEventListener("mouseup",M),function(){document.removeEventListener("mouseup",M)}})),(0,_.jsxs)("div",{className:d,children:[(0,_.jsx)("div",{className:l,children:(0,_.jsx)("h3",{className:u,children:r})}),(0,_.jsx)("ul",{className:v()(m,"list"),ref:n,onMouseUp:M,onMouseDown:function(e){n&&n.current&&n.current===e.target&&!y.isMoving&&P((0,o.Z)((0,o.Z)({},y),{},{clientX:e.clientX,isMoving:!0}))},onMouseMove:function(e){if(b()&&n&&n.current&&n.current.contains(e.target)&&y.isMoving){var a=y.scrollX,r=y.clientX,t=a-e.clientX+r;n.current.scrollLeft=t,P((0,o.Z)((0,o.Z)({},y),{},{scrollX:t,clientX:e.clientX})),e.preventDefault()}},children:x.map((function(e){return(0,_.jsx)("li",{children:(0,_.jsx)(s.Z,{data:e})},e.id)}))}),!b()&&y.position>0&&(0,_.jsx)("div",{className:p,children:(0,_.jsx)("button",{onClick:function(){n.current.scrollTo({left:G(y.position-1),behavior:"smooth"}),P((0,o.Z)((0,o.Z)({},y),{},{scrollX:G(y.position-1),position:y.position-1}))},className:f,children:(0,_.jsx)("img",{src:"/devShop/resources/images/mover-left.png",alt:"move to the left"})})}),!b()&&(a=y.position,window.matchMedia("(max-width: 850px)").matches?x.length-2>a:window.matchMedia("(max-width: 1250px)").matches?x.length-3>a:x.length-4>a)&&(0,_.jsx)("div",{className:h,children:(0,_.jsx)("button",{onClick:function(){n.current.scrollTo({left:G(y.position+1),behavior:"smooth"}),P((0,o.Z)((0,o.Z)({},y),{},{scrollX:G(y.position+1),position:y.position+1}))},className:f,children:(0,_.jsx)("img",{src:"/devShop/resources/images/mover-right.png",alt:"move to the right"})})})]})},y=t.memo(w),P={homepage__heading:"HomePage_homepage__heading__o8Afk",homepage__intro:"HomePage_homepage__intro__uoKW3",homepage__intro_description:"HomePage_homepage__intro_description__HVaex"},x=function(){return(0,_.jsxs)(n.B6,{children:[(0,_.jsx)(n.ql,{children:(0,_.jsx)("title",{children:"devShop \u2013 Home"})}),(0,_.jsxs)("div",{className:P.homepage,children:[(0,_.jsxs)("div",{className:P.homepage__intro,children:[(0,_.jsx)("h2",{className:P.homepage__heading,children:"Welcome to devShop"}),(0,_.jsx)("div",{className:P.homepage__intro_description,children:"Here you can buy computer parts and accessories. We have a wide range and low prices."})]}),(0,_.jsx)(y,{name:"New"}),(0,_.jsx)(y,{name:"Sale"})]})]})},G=t.memo(x)}}]);
//# sourceMappingURL=552.2085e364.chunk.js.map