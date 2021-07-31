(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),o=a.n(c),l=(a(85),a(10)),i=a(8),u=a(4),s=a(9),m=a(3);function d(e,t,a){return new Promise((function(n,r){var c,o,l,i=window.indexedDB.open("shop-shop",1);i.onupgradeneeded=function(e){var t=i.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},i.onerror=function(e){console.log("There was an error")},i.onsuccess=function(r){switch(c=i.result,o=c.transaction(e,"readwrite"),l=o.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":l.put(a),n(a);break;case"get":var u=l.getAll();u.onsuccess=function(){n(u.result)};break;case"delete":l.delete(a._id);break;default:console.log("No valid method")}o.oncomplete=function(){c.close()}}}))}var p,f,E,b,g,h=function(e){var t=Object(s.c)((function(e){return e})),a=Object(s.b)(),n=t.cart,c=e.image,o=e.name,i=e._id,u=e.price,p=e.quantity;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(l.b,{to:"/products/".concat(i)},r.a.createElement("img",{alt:o,src:"/images/".concat(c)}),r.a.createElement("p",null,o)),r.a.createElement("div",null,r.a.createElement("div",null,p," ",function(e,t){return 1===t?e:e+"s"}("item",p)," in stock"),r.a.createElement("span",null,"$",u)),r.a.createElement("button",{onClick:function(){var t=n.find((function(e){return e._id===i}));t?(a({type:"UPDATE_CART_QUANTITY",_id:i,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),d("cart","put",Object(m.a)(Object(m.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:"ADD_TO_CART",product:Object(m.a)(Object(m.a)({},e),{},{purchaseQuantity:1})}),d("cart","put",Object(m.a)(Object(m.a)({},e),{},{purchaseQuantity:1})))}},"Add to cart"))},O=a(21),v=Object(u.gql)(p||(p=Object(O.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),y=(Object(u.gql)(f||(f=Object(O.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(u.gql)(E||(E=Object(O.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),j=Object(u.gql)(b||(b=Object(O.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),w=Object(u.gql)(g||(g=Object(O.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),_=a(43),T=a.n(_);var k=function(){var e=Object(s.c)((function(e){return e})),t=Object(s.b)(),a=e.currentCategory,c=Object(u.useQuery)(v),o=c.loading,l=c.data;return Object(n.useEffect)((function(){l?(t({type:"UPDATE_PRODUCTS",products:l.products}),l.products.forEach((function(e){d("products","put",e)}))):o||d("products","get").then((function(e){t({type:"UPDATE_PRODUCTS",products:e})}))}),[l,o,t]),r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Products:"),e.products.length?r.a.createElement("div",{className:"flex-row"},(a?e.products.filter((function(e){return e.category._id===a})):e.products).map((function(e){return r.a.createElement(h,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any products yet!"),o?r.a.createElement("img",{src:T.a,alt:"loading"}):null)};var N=function(){var e=Object(s.c)((function(e){return e})),t=Object(s.b)(),a=e.categories,c=Object(u.useQuery)(y),o=c.loading,l=c.data;return Object(n.useEffect)((function(){l?(t({type:"UPDATE_CATEGORIES",categories:l.categories}),l.categories.forEach((function(e){d("categories","put",e)}))):o||d("categories","get").then((function(e){t({type:"UPDATE_CATEGORIES",categories:e})}))}),[l,o,t]),r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),a.map((function(e){return r.a.createElement("button",{key:e._id,onClick:function(){var a;a=e._id,t({type:"UPDATE_CURRENT_CATEGORY",currentCategory:a})}},e.name)})))},C=a(18),A=a.n(C),x=a(24),R=a(23),D=a(17),S=function(e){var t=e.item,a=(Object(s.c)((function(e){return e})),Object(s.b)());return r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),r.a.createElement("div",null,r.a.createElement("div",null,t.name,", $",t.price),r.a.createElement("div",null,r.a.createElement("span",null,"Qty:"),r.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(a({type:"REMOVE_FROM_CART",_id:t._id}),d("cart","delete",Object(m.a)({},t))):(a({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(n)}),d("cart","put",Object(m.a)(Object(m.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),r.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){a({type:"REMOVE_FROM_CART",_id:e._id}),d("cart","delete",Object(m.a)({},e))}(t)}},"\ud83d\uddd1\ufe0f"))))},P=a(67),U=a(68),I=a(52),Q=a.n(I),$=new(function(){function e(){Object(P.a)(this,e)}return Object(U.a)(e,[{key:"getProfile",value:function(){return Q()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Q()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),q=(a(99),a(69)),F=Object(q.a)("pk_test_TYooMQauvdEDq54NiTphI7jx"),L=function(){var e=Object(s.c)((function(e){return e})),t=Object(s.b)(),a=Object(u.useLazyQuery)(w),c=Object(D.a)(a,2),o=c[0],l=c[1].data;function i(){t({type:"TOGGLE_CART"})}return Object(n.useEffect)((function(){function a(){return(a=Object(R.a)(A.a.mark((function e(){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("cart","get");case 2:a=e.sent,t({type:"ADD_MULTIPLE_TO_CART",products:Object(x.a)(a)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.cart.length||function(){a.apply(this,arguments)}()}),[e.cart.length,t]),Object(n.useEffect)((function(){l&&F.then((function(e){e.redirectToCheckout({sessionId:l.checkout.session})}))}),[l]),e.cartOpen?r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"close",onClick:i},"[close]"),r.a.createElement("h2",null,"Shopping Cart"),e.cart.length?r.a.createElement("div",null,e.cart.map((function(e){return r.a.createElement(S,{key:e._id,item:e})})),r.a.createElement("div",{className:"flex-row space-between"},r.a.createElement("strong",null,"Total: $",function(){var t=0;return e.cart.forEach((function(e){t+=e.price*e.purchaseQuantity})),t.toFixed(2)}()),$.loggedIn()?r.a.createElement("button",{onClick:function(){var t=[];e.cart.forEach((function(e){for(var a=0;a<e.purchaseQuantity;a++)t.push(e._id)})),o({variables:{products:t}})}},"Checkout"):r.a.createElement("span",null,"(log in to check out"))):r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"You haven't added anything to your cart yet!")):r.a.createElement("div",{className:"cart-closed",onClick:i},r.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"))},M=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(N,null),r.a.createElement(k,null),r.a.createElement(L,null))};var G=function(){var e=Object(s.c)((function(e){return e})),t=Object(s.b)(),a=Object(i.f)().id,c=Object(n.useState)({}),o=Object(D.a)(c,2),p=o[0],f=o[1],E=Object(u.useQuery)(v),b=E.loading,g=E.data,h=e.products,O=e.cart;return Object(n.useEffect)((function(){h.length?f(h.find((function(e){return e._id===a}))):g?(t({type:"UPDATE_PRODUCTS",products:g.products}),g.products.forEach((function(e){d("products","put",e)}))):b||d("products","get").then((function(e){t({type:"UPDATE_PRODUCTS",products:e})}))}),[h,g,b,t,a]),r.a.createElement(r.a.Fragment,null,p&&O?r.a.createElement("div",{className:"container my-1"},r.a.createElement(l.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,p.name),r.a.createElement("p",null,p.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",p.price," ",r.a.createElement("button",{onClick:function(){var e=O.find((function(e){return e._id===a}));e?(t({type:"UPDATE_CART_QUANTITY",_id:a,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),d("cart","put",Object(m.a)(Object(m.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(t({type:"ADD_TO_CART",product:Object(m.a)(Object(m.a)({},p),{},{purchaseQuantity:1})}),d("cart","put",Object(m.a)(Object(m.a)({},p),{},{purchaseQuantity:1})))}},"Add to Cart"),r.a.createElement("button",{disabled:!O.find((function(e){return e._id===p._id})),onClick:function(){t({type:"REMOVE_FROM_CART",_id:p._id}),d("cart","delete",Object(m.a)({},p))}},"Remove from Cart")),r.a.createElement("img",{src:"/images/".concat(p.image),alt:p.name})):null,b?r.a.createElement("img",{src:T.a,alt:"loading"}):null,r.a.createElement(L,null))};var Y,W,B,H=function(e){return r.a.createElement("span",Object.assign({},e,{role:"button",tabIndex:"0"}),"\u2717")},V=function(){return r.a.createElement("div",null,r.a.createElement(H,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},z=a(29),J=Object(u.gql)(Y||(Y=Object(O.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),K=Object(u.gql)(W||(W=Object(O.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),X=Object(u.gql)(B||(B=Object(O.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var Z=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(D.a)(t,2),c=a[0],o=a[1],i=Object(u.useMutation)(J),s=Object(D.a)(i,2),d=s[0],p=s[1].error,f=function(){var e=Object(R.a)(A.a.mark((function e(t){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,$.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target,a=t.name,n=t.value;o(Object(m.a)(Object(m.a)({},c),{},Object(z.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(l.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:f},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:E})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:E})),p?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var ee=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(D.a)(t,2),c=a[0],o=a[1],i=Object(u.useMutation)(X),s=Object(D.a)(i,1)[0],d=function(){var e=Object(R.a)(A.a.mark((function e(t){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,s({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,$.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.target,a=t.name,n=t.value;o(Object(m.a)(Object(m.a)({},c),{},Object(z.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(l.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:d},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:p})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var te=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),r.a.createElement("nav",null,$.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(l.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return $.logout()}},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(l.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(l.b,{to:"/login"},"Login")))))};var ae=function(){var e=Object(u.useMutation)(K),t=Object(D.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(R.a)(A.a.mark((function e(){var a,n,r,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("cart","get");case 2:if(a=e.sent,!(n=a.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:r=e.sent,c=r.data,c.addOrder.products.forEach((function(e){d("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),r.a.createElement("div",null,r.a.createElement(H,null,r.a.createElement("h1",null,"Success!"),r.a.createElement("h2",null,"Thank you for your purchase!"),r.a.createElement("h2",null,"You will now be redirected to the home page")))};var ne=function(){var e,t=Object(u.useQuery)(j).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(l.b,{to:"/"},"\u2190 Back to Products"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var a=e._id,n=e.image,c=e.name,o=e.price;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(l.b,{to:"/products/".concat(a)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",o)))}))))}))):null))},re=a(70),ce={products:[],carts:[],cartOpen:!1,categories:[],currentCategory:""},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PRODUCTS":return Object(m.a)(Object(m.a)({},e),{},{products:Object(x.a)(t.products)});case"UPDATE_CATEGORIES":return Object(m.a)(Object(m.a)({},e),{},{categories:Object(x.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(m.a)(Object(m.a)({},e),{},{currentCategory:t.currentCategory});case"ADD_TO_CART":return Object(m.a)(Object(m.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(x.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(m.a)(Object(m.a)({},e),{},{cart:[].concat(Object(x.a)(e.cart),Object(x.a)(t.products))});case"REMOVE_FROM_CART":var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(m.a)(Object(m.a)({},e),{},{cartOpen:a.length>0,cart:a});case"UPDATE_CART_QUANTITY":return Object(m.a)(Object(m.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"CLEAR_CART":return Object(m.a)(Object(m.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(m.a)(Object(m.a)({},e),{},{cartOpen:!e.cartOpen});default:return e}};var le=oe,ie=Object(re.a)(le),ue=new u.ApolloClient({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"});var se=function(){return r.a.createElement(u.ApolloProvider,{client:ue},r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(s.a,{store:ie},r.a.createElement(te,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:M}),r.a.createElement(i.a,{exact:!0,path:"/login",component:Z}),r.a.createElement(i.a,{exact:!0,path:"/signup",component:ee}),r.a.createElement(i.a,{exact:!0,path:"/success",component:ae}),r.a.createElement(i.a,{exact:!0,path:"/orderHistory",component:ne}),r.a.createElement(i.a,{exact:!0,path:"/products/:id",component:G}),r.a.createElement(i.a,{component:V}))))))},me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function de(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");me?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):de(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):de(t,e)}))}}()},43:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"},80:function(e,t,a){e.exports=a(100)},85:function(e,t,a){},99:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.3ef0ebed.chunk.js.map