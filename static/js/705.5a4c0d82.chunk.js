"use strict";(self.webpackChunkdevshop=self.webpackChunkdevshop||[]).push([[705],{4513:function(e,r,a){a.d(r,{Z:function(){return u}});var c=a(2791),n=a(9434),t=a(4512),i="AddToCart_button_add__6r5yt",s="AddToCart_button_add_wrapper__F3cPV",o=a(184),d=function(e){var r=e.productId,a=(0,n.I0)();return(0,o.jsx)("button",{className:i,onClick:function(){return a((0,t.jX)(r))},children:(0,o.jsx)("div",{className:s,children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{d:"M11 9H13V6H16V4H13V1H11V4H8V6H11M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18M7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8Z"})})})})},u=c.memo(d)},4402:function(e,r,a){a.d(r,{Z:function(){return o}});var c=a(2791),n="Rating_rating__lMyzK",t="Rating_rating__stars__kKxvS",i=a(184),s=function(e){var r=e.rating,a=e.number,c=e.needNumber,s=function(e){return e>=1?(0,i.jsx)("img",{src:"/devShop/resources/images/star.png",alt:"one star"}):e>=.5?(0,i.jsx)("img",{src:"/devShop/resources/images/half-star.png",alt:"half star"}):(0,i.jsx)("img",{src:"/devShop/resources/images/unfilled-star.png",alt:"no star"})};return(0,i.jsxs)("div",{className:n,children:[(0,i.jsxs)("div",{className:t,children:[s(r),s(r-1),s(r-2),s(r-3),s(r-4)]}),c&&(0,i.jsx)("div",{className:"reviews_number",children:"".concat(a)})]})};s.defaultProps={number:1,rating:0,needNumber:!0};var o=c.memo(s)},1821:function(e,r,a){a.d(r,{Z:function(){return w}});var c=a(2791),n=a(1087),t=a(5198),i=a(4402),s=a(4513),o="GoodCard_goodCard__Bc00a",d="GoodCard_goodCard__link__UFjtn",u="GoodCard_goodCard__icon__antY3",l="GoodCard_goodCard__info__xSwSE",p="GoodCard_goodCard__product_name__fyWwn",h="GoodCard_goodCard__product_rating__MODXP",m="GoodCard_goodCard__product_prices__1mF-f",v="GoodCard_goodCard__product_now__Xk8YJ",f="GoodCard_goodCard__product_previous__s2tok",g=a(184),_=function(e){var r=e.data;return(0,g.jsxs)("div",{className:o,children:[(0,g.jsx)(n.rU,{to:"/shop/".concat(r.id),className:d,children:(0,g.jsx)("img",{src:"/devShop"+r.src,alt:r.name,className:u})}),(0,g.jsxs)("div",{className:l,children:[(0,g.jsx)("div",{className:p,children:(0,g.jsx)(n.rU,{to:"/shop/".concat(r.id),children:r.name.length>50?r.name.slice(0,47)+"...":r.name})}),(0,g.jsx)("div",{className:h,children:(0,g.jsx)(n.rU,{to:"/shop/".concat(r.id,"/reviews"),children:(0,g.jsx)(i.Z,{rating:(0,t.Y)(r.reviews,(function(e){return e.rating})),number:Object.getOwnPropertyNames(r.reviews).length})})}),(0,g.jsxs)("div",{className:m,children:[void 0!==r.previousPrice&&(0,g.jsx)("div",{className:f,children:"".concat(r.previousPrice).concat(r.currency)}),(0,g.jsx)("div",{className:v,children:"".concat(r.price).concat(r.currency)})]}),(0,g.jsx)(s.Z,{productId:r.id})]})]})},w=c.memo(_)},5198:function(e,r,a){a.d(r,{L:function(){return t},Y:function(){return i}});var c=a(9439),n=function(e,r,a){for(var c=[],n=0,t=0;n<e.length&&t<r.length;)a(e[n],r[t])>=0?(c.push(e[n]),n++):(c.push(r[t]),t++);for(;n<e.length;)c.push(e[n]),n++;for(;t<r.length;)c.push(r[t]),t++;return c},t=function e(r){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return 1};return r.length<=1?r:n(e(r.slice(0,Math.floor(r.length/2)),a),e(r.slice(Math.floor(r.length/2)),a),a)},i=function(e,r){for(var a=0,n=0,t=0,i=Object.entries(e);t<i.length;t++){a+=1,n+=r((0,c.Z)(i[t],2)[1])}return n/a}},4011:function(e,r){var a={"152ed03e955f4f9188e925d96b8ceb21":{id:"152ed03e955f4f9188e925d96b8ceb21",name:"MSI Nvidia GeForce RTX 4090",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Graphics card"},manufacturer:{name:"Manufacturer",value:"MSI"},release:{name:"Release date",value:"2022"}}},gpu:{title:"GPU characteristics",chars:{chipManufacturer:{name:"GPU manufacturer",value:"Nvidia"},series:{name:"GPU series",value:"RTX 40"},model:{name:"GPU model",value:"RTX 4090"}}}},type:"Component",element:"Graphics card",chipManufacturer:"Nvidia",series:"RTX 40",model:"RTX 4090",special:new Set(["new","sale"]),date:"2022-12-06",manufacturer:"MSI",description:"The NVIDIA GeForce RTX 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics. Experience ultra-high performance gaming, incredibly detailed virtual worlds with ray tracing, unprecedented productivity, and new ways to create. It\u2019s powered by the NVIDIA Ada Lovelace architecture and comes with 24 GB of G6X memory to deliver the ultimate experience for gamers and creators.",price:2200,previousPrice:2300,currency:"$",release:"2022",src:"/resources/images/products/msi-nvidia-geforce-rtx-4090.png",number:10,reviews:{aae57e5d1bb742028af240e84b5b1e65:{id:"aae57e5d1bb742028af240e84b5b1e65",title:"The Best GPU",author:"Marry",pros:"Powerful, good design",cons:"No",description:"Very good video card, although expensive.",rating:5}}},f758d6358c6b4551ad926bc25a24a3dc:{id:"f758d6358c6b4551ad926bc25a24a3dc",name:"Gigabyte Nvidia GeForce RTX 3070 Ti",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Graphics card"},manufacturer:{name:"Manufacturer",value:"Gigabyte"},release:{name:"Release date",value:"2021"}}},gpu:{title:"GPU characteristics",chars:{chipManufacturer:{name:"GPU manufacturer",value:"Nvidia"},series:{name:"GPU series",value:"RTX 30"},model:{name:"GPU model",value:"RTX 3070 Ti"}}}},type:"Component",element:"Graphics card",chipManufacturer:"Nvidia",series:"RTX",generation:"RTX 30",model:"3070 Ti",special:new Set(["new"]),date:"2022-10-17",manufacturer:"Gigabyte",description:"NVIDIA Ampere Streaming Multiprocessors 2nd Generation RT Cores 3rd Generation Tensor Cores Powered by GeForce RTX 3070 Ti Integrated with 8GB GDDR6X 256-bit memory interface WINDFORCE 3X Cooling System with alternate spinning fans RGB Fusion 2.0 Protection metal back plate 2x HDMI 2.1, 2x DisplayPort 1.4 Core Clock: 1830 MHz. Get the ultimate gaming performance with AORUS RTX 3070 Ti Graphics Cards.",price:1e3,currency:"$",release:"2021",src:"/resources/images/products/gigabyte-nvidia-geforce-rtx-3070-ti.jpg",number:5,reviews:{"1603fd45fa1a457792da577a7f1e19e6":{id:"1603fd45fa1a457792da577a7f1e19e6",title:"Normal Card",author:"Ivan",pros:"Low price",cons:"Bad quality",description:"The fan is rattling",rating:4}}},"4449ef5138c04b9fbfd54003ca987423":{id:"4449ef5138c04b9fbfd54003ca987423",name:"AMD Ryzen 5 5600X BOX",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Processor"},manufacturer:{name:"Manufacturer",value:"AMD"},release:{name:"Release date",value:"2020"}}},cpu:{title:"CPU characteristics",chars:{series:{name:"CPU series",value:"Ryzen 5000"},model:{name:"CPU model",value:"Ryzen 5 5600X"}}}},type:"Component",element:"Processor",series:"Ryzen",generation:"Ryzen 5000",model:"5600X",special:new Set(["new"]),date:"2020-12-07",manufacturer:"AMD",description:"Be unstoppable with the unprecedented speed of the world\u2019s best desktop processors. AMD Ryzen 5000 Series processors deliver the ultimate in high performance, whether you\u2019re playing the latest games, designing the next skyscraper or crunching scientific data. With AMD Ryzen, you\u2019re always in the lead.",price:230,currency:"$",release:"2020",src:"/resources/images/products/amd-ryzen-5-5600x-box.png",number:7,reviews:{ea36269cc5ad4124a906396e9e93232f:{id:"ea36269cc5ad4124a906396e9e93232f",title:"The Best CPU",author:"Mike",pros:"Good performance",cons:"No",description:"I think this is the best investment I have ever made in my computer. FPS increased by 1.5 times, and rendering by 2.",rating:5},c3245c7533ea493e9a864eb811f31654:{id:"c3245c7533ea493e9a864eb811f31654",date:"2022-01-20",title:"Great solution for PC",author:"Don",pros:"Cheap, good quality",cons:"No",description:"I took this processor with a great discount, it has been working for a year, no problems",rating:5}}},"945041436362491ab408b164fafa7a5d":{id:"945041436362491ab408b164fafa7a5d",name:"be quiet! Dark Power Pro 12 1500W",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Power Supply"},manufacturer:{name:"Manufacturer",value:"be quiet!"},release:{name:"Release date",value:"2022"}}},powerSupply:{title:"Power supply characteristics",chars:{series:{name:"Power supply series",value:"Dark Power Pro 12"},model:{name:"Power supply model",value:"Dark Power Pro 12 1500W"},certificate:{name:"Certificate",value:"80 PLUS Titanium"}}}},type:"Component",element:"Power supply",series:"Dark Power Pro 12",certificate:"80 PLUS Titanium",special:new Set(["new"]),date:"2021-09-05",manufacturer:"be quiet!",description:"The be quiet! Dark Power Pro 12 1500W offers 80 PLUS Titanium efficiency and world class performance due to fully digital control and frameless fan concept. The most technologically-advanced PSU be quiet! has ever built.",price:380,currency:"$",release:"2022",src:"/resources/images/products/be-quiet-dark-power-pro-12-1500w.png",number:10,reviews:{"0c5437d1fb094d6094ac4c60e8c63b5e":{id:"0c5437d1fb094d6094ac4c60e8c63b5e",title:"Perfect Power supply",author:"Mike",pros:"Powerful, cheap.",cons:"",description:"Good, quiet power supply< suitable for powerful builds",rating:5}}},"34376c67997a4cbca94d0a89f4f9a33a":{id:"34376c67997a4cbca94d0a89f4f9a33a",name:"PowerColor AMD Radeon RX 6600",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Graphics card"},manufacturer:{name:"Manufacturer",value:"PowerColor"},release:{name:"Release date",value:"2021"}}},gpu:{title:"GPU characteristics",chars:{chipManufacturer:{name:"GPU manufacturer",value:"AMD"},series:{name:"GPU series",value:"RX 6000"},model:{name:"GPU model",value:"RX 6600"}}}},type:"Component",element:"Graphics card",chipManufacturer:"AMD",series:"Radeon RX",generation:"RX 6000",model:"RX 6600",special:new Set(["new","sale"]),manufacturer:"PowerColor",description:"Powercolor Fighter Amd Radeon Rx 6600 Graphics Card With 8Gb Gddr6 Memory.",price:310,previousPrice:330,currency:"$",release:"2021",src:"/resources/images/products/powercolor-amd-radeon-rx-6600.png",number:2,reviews:{a9345f6bfc6c4443eb5873175d8536be9:{id:"a9345f6bfc6c4443eb5873175d8536be9",title:"Good video card",author:"Jake",pros:"Performance",cons:"Unstable",description:"Good performance except for some freezes",rating:5}}},"22b9c3ac926240a48fc8435cc8b702b0":{id:"22b9c3ac926240a48fc8435cc8b702b0",name:"ASUS AMD Radeon RX 6800 XT",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Graphics card"},manufacturer:{name:"Manufacturer",value:"ASUS"},release:{name:"Release date",value:"2020"}}},gpu:{title:"GPU characteristics",chars:{chipManufacturer:{name:"GPU manufacturer",value:"AMD"},series:{name:"GPU series",value:"RX 6000"},model:{name:"GPU model",value:"RX 6800 XT"}}}},type:"Component",element:"Graphics card",chipManufacturer:"AMD",series:"Radeon RX",generation:"RX 6000",model:"RX 6800 XT",special:new Set(["new"]),manufacturer:"ASUS",description:"The TUF GAMING Radeon\u2122 RX 6800 XT is a tenacious beast with a tough metal exterior, super-efficient cooling, and components that offer enhanced endurance.",price:1e3,currency:"$",release:"2020",src:"/resources/images/products/asus-amd-radeon-rx-6800-xt.png",number:4,reviews:{a9345f6bfc6c4443eb5873175d8536be9:{id:"a9345f6bfc6c4443eb5873175d8536be9",title:"Answer for Nvidia's videos cards",author:"Jake",pros:"Price, performance, design",cons:"No",description:"Great graphics card that outperforms nvidia graphics cards.",rating:5}}}};r.Z=a},4705:function(e,r,a){a.r(r),a.d(r,{default:function(){return U}});var c=a(9439),n=a(2791),t=a(6907),i=a(4011),s=a(5198),o=a(1821),d=a(1087),u=a(4402),l=a(4513),p="GoodLine_goodLine__eISRu",h="GoodLine_goodLine__icon__sVJ9R",m="GoodLine_goodLine__info__xy--f",v="GoodLine_goodLine__product_name__brhJd",f="GoodLine_goodLine__product_rating__JzXeY",g="GoodLine_goodLine__product_prices__STKKq",_="GoodLine_goodLine__product_previous__gUM+A",w="GoodLine_goodLine__button_wrapper__R21TD",x=a(184),b=function(e){var r=e.data;return(0,x.jsxs)("div",{className:p,children:[(0,x.jsx)(d.rU,{to:"/shop/".concat(r.id),className:"good-line_photo-link",children:(0,x.jsx)("img",{src:"/devShop"+r.src,alt:r.name,className:h})}),(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)("div",{className:v,children:(0,x.jsx)(d.rU,{to:"/shop/".concat(r.id),children:r.name.length>60?r.name.slice(0,57)+"...":r.name})}),(0,x.jsx)("div",{className:f,children:(0,x.jsx)(d.rU,{to:"/shop/".concat(r.id,"/reviews"),children:(0,x.jsx)(u.Z,{rating:(0,s.Y)(r.reviews,(function(e){return e.rating})),number:Object.getOwnPropertyNames(r.reviews).length})})}),(0,x.jsxs)("div",{className:g,children:[void 0!==r.previousPrice&&(0,x.jsx)("div",{className:_,children:"".concat(r.previousPrice).concat(r.currency)}),(0,x.jsx)("div",{className:"goodLine__product_now",children:"".concat(r.price).concat(r.currency)})]}),(0,x.jsx)("div",{className:w,children:(0,x.jsx)(l.Z,{productId:r.id})})]})]})},y=n.memo(b),j="Shop_shop__info__Le2c7",C="Shop_shop__info_line__MdvqX",P="Shop_shop__tools__vurDS",M="Shop_button_formChange__Etcmc",G="Shop_button_formChange__svgWrapper__mNJ40",R="Shop_cards__toxNe",N="Shop_lines__cdSIY",S=a(1694),L=a.n(S),T=function(){for(var e=[],r=0,a=Object.entries(i.Z);r<a.length;r++){var c=a[r];e.push(c[1])}return e}(),H={featured:function(){return 1},byDate:function(e,r){if(e.date&&r.date){var a=new Date(e.date),c=new Date(r.date);return a.getTime()-c.getTime()}return e.date?1:r.date?-1:0},toHigh:function(e,r){return e.price&&r.price?r.price-e.price:e.price?1:r.price?-1:0},toLow:function(e,r){return e.price&&r.price?e.price-r.price:e.price?1:r.price?-1:0},byReview:function(e,r){if(e.reviews&&r.reviews){var a=(0,s.Y)(e.reviews,(function(e){return e.rating})),c=(0,s.Y)(r.reviews,(function(e){return e.rating}));return a===c?Object.getOwnPropertyNames(e.reviews).length-Object.getOwnPropertyNames(r.reviews).length:a-c}return e.reviews?1:r.reviews?-1:0}},X=function(){var e=(0,n.useState)("cards"),r=(0,c.Z)(e,2),a=r[0],i=r[1],d=(0,n.useState)("featured"),u=(0,c.Z)(d,2),l=u[0],p=u[1],h=(0,n.useState)(0),m=(0,c.Z)(h,2),v=m[0],f=m[1],g=(0,n.useState)([]),_=(0,c.Z)(g,2),w=_[0],b=_[1],S=function(e){var r=e.target.documentElement;r.scrollHeight-r.scrollTop-window.innerHeight<100&&T.length>8*v&&f((function(e){return e+1}))};return(0,n.useEffect)((function(){return document.addEventListener("scroll",S),function(){document.removeEventListener("scroll",S)}}),[]),(0,n.useEffect)((function(){b(T.slice(0,8*(v+1)))}),[v]),(0,x.jsxs)(t.B6,{children:[(0,x.jsx)(t.ql,{children:(0,x.jsx)("title",{children:"Items \u2013 devShop"})}),(0,x.jsxs)("div",{className:"shop",children:[(0,x.jsx)("h2",{children:"Shop"}),(0,x.jsx)("div",{className:j,children:(0,x.jsxs)("div",{className:C,children:[(0,x.jsx)("h3",{children:"Items"}),(0,x.jsxs)("div",{className:P,children:[(0,x.jsxs)("select",{id:"sorting",value:l,onChange:function(e){return p(e.target.value)},children:[(0,x.jsx)("option",{value:"featured",children:"Featured"}),(0,x.jsx)("option",{value:"toHigh",children:"Price: Low to High"}),(0,x.jsx)("option",{value:"toLow",children:"Price: High to Low"}),(0,x.jsx)("option",{value:"byReview",children:"Avg. Customer Review"}),(0,x.jsx)("option",{value:"byDate",children:"Newest Arrivals"})]}),(0,x.jsxs)("button",{onClick:function(){i("cards"===a?"lines":"cards")},className:M,children:["cards"===a&&(0,x.jsx)("div",{className:G,children:(0,x.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 40 40",children:[(0,x.jsxs)("g",{children:[(0,x.jsx)("path",{d:"M7.04,11.5c-0.85,0-1.54-0.69-1.54-1.54V7.04c0-0.85,0.69-1.54,1.54-1.54h25.93c0.85,0,1.54,0.69,1.54,1.54v2.93 c0,0.85-0.69,1.54-1.54,1.54H7.04z"}),(0,x.jsx)("path",{d:"M32.96,6C33.53,6,34,6.47,34,7.04v2.93c0,0.57-0.47,1.04-1.04,1.04H7.04C6.47,11,6,10.53,6,9.96V7.04C6,6.47,6.47,6,7.04,6 H32.96 M32.96,5H7.04C5.91,5,5,5.91,5,7.04v2.93C5,11.09,5.91,12,7.04,12h25.93C34.09,12,35,11.09,35,9.96V7.04 C35,5.91,34.09,5,32.96,5L32.96,5z"})]}),(0,x.jsxs)("g",{children:[(0,x.jsx)("path",{d:"M7.04,23c-0.85,0-1.54-0.69-1.54-1.54v-2.93C5.5,17.69,6.19,17,7.04,17h25.93c0.85,0,1.54,0.69,1.54,1.54v2.93 c0,0.85-0.69,1.54-1.54,1.54H7.04z"}),(0,x.jsx)("path",{d:"M32.96,17.5c0.57,0,1.04,0.47,1.04,1.04v2.93c0,0.57-0.47,1.04-1.04,1.04H7.04C6.47,22.5,6,22.03,6,21.46v-2.93 c0-0.57,0.47-1.04,1.04-1.04H32.96 M32.96,16.5H7.04C5.91,16.5,5,17.41,5,18.54v2.93c0,1.12,0.91,2.04,2.04,2.04h25.93 c1.12,0,2.04-0.91,2.04-2.04v-2.93C35,17.41,34.09,16.5,32.96,16.5L32.96,16.5z"})]}),(0,x.jsxs)("g",{children:[(0,x.jsx)("path",{d:"M7.04,34.5c-0.85,0-1.54-0.69-1.54-1.54v-2.93c0-0.85,0.69-1.54,1.54-1.54h25.93c0.85,0,1.54,0.69,1.54,1.54v2.93 c0,0.85-0.69,1.54-1.54,1.54H7.04z"}),(0,x.jsx)("path",{d:"M32.96,29c0.57,0,1.04,0.47,1.04,1.04v2.93c0,0.57-0.47,1.04-1.04,1.04H7.04C6.47,34,6,33.53,6,32.96v-2.93 C6,29.47,6.47,29,7.04,29H32.96 M32.96,28H7.04C5.91,28,5,28.91,5,30.04v2.93C5,34.09,5.91,35,7.04,35h25.93 c1.12,0,2.04-0.91,2.04-2.04v-2.93C35,28.91,34.09,28,32.96,28L32.96,28z"})]})]})}),"lines"===a&&(0,x.jsx)("div",{className:G,children:(0,x.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 40 40",children:[(0,x.jsxs)("g",{children:[(0,x.jsx)("path",{d:"M6.79,16.75c-0.85,0-1.54-0.69-1.54-1.54V6.79c0-0.85,0.69-1.54,1.54-1.54h8.43c0.85,0,1.54,0.69,1.54,1.54v8.43 c0,0.85-0.69,1.54-1.54,1.54H6.79z"}),(0,x.jsx)("path",{d:"M15.21,5.75c0.57,0,1.04,0.47,1.04,1.04v8.43c0,0.57-0.47,1.04-1.04,1.04H6.79c-0.57,0-1.04-0.47-1.04-1.04V6.79 c0-0.57,0.47-1.04,1.04-1.04H15.21 M15.21,4.75H6.79c-1.12,0-2.04,0.91-2.04,2.04v8.43c0,1.12,0.91,2.04,2.04,2.04h8.43 c1.12,0,2.04-0.91,2.04-2.04V6.79C17.25,5.66,16.34,4.75,15.21,4.75L15.21,4.75z"})]}),(0,x.jsxs)("g",{children:[(0,x.jsx)("path",{d:"M24.29,16.75c-0.85,0-1.54-0.69-1.54-1.54V6.79c0-0.85,0.69-1.54,1.54-1.54h8.43c0.85,0,1.54,0.69,1.54,1.54v8.43 c0,0.85-0.69,1.54-1.54,1.54H24.29z"}),(0,x.jsx)("path",{d:"M32.71,5.75c0.57,0,1.04,0.47,1.04,1.04v8.43c0,0.57-0.47,1.04-1.04,1.04h-8.43c-0.57,0-1.04-0.47-1.04-1.04V6.79 c0-0.57,0.47-1.04,1.04-1.04H32.71 M32.71,4.75h-8.43c-1.12,0-2.04,0.91-2.04,2.04v8.43c0,1.12,0.91,2.04,2.04,2.04h8.43 c1.12,0,2.04-0.91,2.04-2.04V6.79C34.75,5.66,33.84,4.75,32.71,4.75L32.71,4.75z"})]}),(0,x.jsxs)("g",{children:[(0,x.jsx)("path",{d:"M24.29,34.25c-0.85,0-1.54-0.69-1.54-1.54v-8.43c0-0.85,0.69-1.54,1.54-1.54h8.43c0.85,0,1.54,0.69,1.54,1.54v8.43 c0,0.85-0.69,1.54-1.54,1.54H24.29z"}),(0,x.jsx)("path",{d:"M32.71,23.25c0.57,0,1.04,0.47,1.04,1.04v8.43c0,0.57-0.47,1.04-1.04,1.04h-8.43c-0.57,0-1.04-0.47-1.04-1.04v-8.43 c0-0.57,0.47-1.04,1.04-1.04H32.71 M32.71,22.25h-8.43c-1.12,0-2.04,0.91-2.04,2.04v8.43c0,1.12,0.91,2.04,2.04,2.04h8.43 c1.12,0,2.04-0.91,2.04-2.04v-8.43C34.75,23.16,33.84,22.25,32.71,22.25L32.71,22.25z"})]}),(0,x.jsxs)("g",{children:[(0,x.jsx)("path",{d:"M6.79,34.25c-0.85,0-1.54-0.69-1.54-1.54v-8.43c0-0.85,0.69-1.54,1.54-1.54h8.43c0.85,0,1.54,0.69,1.54,1.54v8.43 c0,0.85-0.69,1.54-1.54,1.54H6.79z"}),(0,x.jsx)("path",{d:"M15.21,23.25c0.57,0,1.04,0.47,1.04,1.04v8.43c0,0.57-0.47,1.04-1.04,1.04H6.79c-0.57,0-1.04-0.47-1.04-1.04v-8.43 c0-0.57,0.47-1.04,1.04-1.04H15.21 M15.21,22.25H6.79c-1.12,0-2.04,0.91-2.04,2.04v8.43c0,1.12,0.91,2.04,2.04,2.04h8.43 c1.12,0,2.04-0.91,2.04-2.04v-8.43C17.25,23.16,16.34,22.25,15.21,22.25L15.21,22.25z"})]})]})})]})]})]})}),(0,x.jsxs)("ul",{className:L()("cards"===a?R:N,"list"),children:["cards"===a&&(0,s.L)(w,H[l]).map((function(e){return(0,x.jsx)("li",{children:(0,x.jsx)(o.Z,{data:e})},e.id)})),"lines"===a&&(0,s.L)(w,H[l]).map((function(e){return(0,x.jsx)("li",{children:(0,x.jsx)(y,{data:e})},e.id)}))]})]})]})},U=n.memo(X)}}]);
//# sourceMappingURL=705.5a4c0d82.chunk.js.map