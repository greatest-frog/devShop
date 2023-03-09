"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[349],{4349:function(e,t,c){c.r(t),c.d(t,{default:function(){return x}});var n=c(9439),a=c(4942),r=c(390),s=c(1069),i=c(5400),l=c(2559),o=function(e){var t=e.amount,c=e.max,n=e.itemId,a=e.setAmount;return(0,l.jsxs)("div",{className:"counter",children:[(0,l.jsx)("button",{className:"btn_counter-minus",disabled:1===t,onClick:function(){return a(n,t-1)},children:"-"}),(0,l.jsx)("input",{type:"number",name:"itemAmount",min:1,max:c,value:t,onChange:function(e){var t=parseInt(e.target.value);isNaN(t)?a(n,t):a(n,t<1?1:t>c?c:t)}}),(0,l.jsx)("button",{className:"btn_counter-plus",disabled:t===c,onClick:function(){return a(n,t+1)},children:"+"})]})},u=function(e){var t=e.itemData,c=e.cartData,n=e.setAmount,a=e.deleteItem,r=e.selected,s=e.changeSelect,u=c.amount;return(0,l.jsxs)("div",{className:"cart-item",children:[(0,l.jsx)("input",{type:"checkbox",name:"cartItem",value:t.id,checked:r,onChange:function(){return s(t.id)}}),(0,l.jsx)(i.rU,{to:"/shop/".concat(t.id),children:(0,l.jsx)("img",{src:"/devShop"+t.src,alt:"".concat(t.name)})}),(0,l.jsxs)("div",{className:"cart-item_info",children:[(0,l.jsx)(i.rU,{to:"/shop/".concat(t.id),children:(0,l.jsx)("h3",{className:"cart-item_name",children:t.name})}),(0,l.jsxs)("div",{className:"cart-item_info__tools",children:[(0,l.jsx)("button",{className:"btn_delete",onClick:function(){return a(t.id)},children:"Delete"}),(0,l.jsx)(o,{amount:u,max:t.number,itemId:t.id,setAmount:n})]})]}),(0,l.jsxs)("div",{className:"cart-item_buy-info",children:[(0,l.jsx)("div",{className:"cart-item_price",children:"".concat(t.price," ").concat(t.currency)}),(0,l.jsx)("div",{className:"cart-item_available",children:t.number>0?"Available: ".concat(t.number," pcs"):"Not available"})]})]})},m=r.memo(u,(function(e,t){return e.changeSelect===t.changeSelect&&e.deleteItem===t.deleteItem&&e.itemData===t.itemData&&e.selected===t.selected&&e.setAmount===t.setAmount&&e.cartData.amount===t.cartData.amount&&e.cartData.active===t.active&&e.cartData.id===t.cartData.id})),d=function(e){var t=e.amount,c=e.sum,n=e.currency;return(0,l.jsxs)("div",{className:"cart_checkout",children:[(0,l.jsxs)("div",{className:"checkout_total",children:[(0,l.jsx)("div",{className:"checkout_total_title",children:"Total:"}),(0,l.jsxs)("div",{className:"checkout_total_info",children:[(0,l.jsx)("div",{className:"total_amount",children:"".concat(t,t>1?" items":" item")}),(0,l.jsx)("div",{className:"total_price",children:"".concat(c," ").concat(n)})]})]}),(0,l.jsx)("button",{className:"btn_checkout",children:"Checkout"})]})},h=r.memo(d),v=c(545),j=function(e){var t=e.cart,c=e.setCart,o=e.goods,u=(0,r.useRef)();u.current=t;var d=(0,r.useCallback)((function(e,t){c(Object.assign({},u.current,(0,a.Z)({},e,{id:e,amount:t,active:u.current[e].active})))}),[c]),j=(0,r.useCallback)((function(e){var t=u.current,n=(t[e],t.newCart);c(n)}),[c]),x=(0,r.useCallback)((function(e){c(Object.assign({},u.current,(0,a.Z)({},e,{id:e,amount:u.current[e].amount,active:!u.current[e].active})))}),[c]),f=(0,r.useCallback)((function(){for(var e=0,t=0,c=Object.entries(u.current);t<c.length;t++){var a=(0,n.Z)(c[t],2)[1];a.active&&(e+=a.amount)}return e}),[]),b=(0,r.useCallback)((function(){for(var e=0,t=0,c=Object.entries(u.current);t<c.length;t++){var a=(0,n.Z)(c[t],2),r=a[0],s=a[1];s.active&&(e+=s.amount*o[r].price)}return e}),[o]);return Object.keys(t).length?(0,l.jsxs)(s.B6,{children:[(0,l.jsx)(s.ql,{children:(0,l.jsx)("title",{children:"Cart \u2013 devShop"})}),(0,l.jsxs)("div",{className:"cart",children:[(0,l.jsx)("h2",{children:"Cart"}),(0,l.jsxs)("div",{className:"cart_window",children:[(0,l.jsx)("ul",{className:"cart_items list",children:(0,v.UI)(t,(function(e){return(0,l.jsx)("li",{className:"cart_items_item",children:(0,l.jsx)(m,{cartData:e,itemData:o[e.id],setAmount:d,deleteItem:j,selected:e.active,changeSelect:x})},e.id)}))}),(0,l.jsx)(h,{amount:f(),sum:b(),currency:"$"})]})]})]}):(0,l.jsxs)(s.B6,{children:[(0,l.jsx)(s.ql,{children:(0,l.jsx)("title",{children:"Cart \u2013 devShop"})}),(0,l.jsxs)("div",{className:"empty-cart",children:[(0,l.jsx)("h3",{children:"Your cart is empty now."}),(0,l.jsxs)("div",{className:"to_shop",children:["You can choose something"," ",(0,l.jsx)(i.rU,{to:"/shop",className:"to_shop_link",children:"here"}),"."]})]})]})},x=r.memo(j)},545:function(e,t,c){c.d(t,{UI:function(){return r},Y8:function(){return s},hX:function(){return a}});var n=c(9439),a=function(e,t){for(var c={},a=0,r=Object.entries(e);a<r.length;a++){var s=(0,n.Z)(r[a],2),i=s[0],l=s[1];t(l)&&(c[i]=l)}return c},r=function(e,t){for(var c=[],a=0,r=Object.entries(e);a<r.length;a++){var s=(0,n.Z)(r[a],2),i=s[0],l=s[1];c.push(t(l,i))}return c},s=function(e,t){for(var c=0,a=0,r=0,s=Object.entries(e);r<s.length;r++){c+=1,a+=t((0,n.Z)(s[r],2)[1])}return a/c}}}]);
//# sourceMappingURL=349.8264c384.chunk.js.map