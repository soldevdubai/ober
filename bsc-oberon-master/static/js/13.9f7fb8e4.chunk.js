(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[13],{1006:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));var r=n(2),a=n.n(r),o=n(15),c=n(39),s=n(0),i=n(32),u=n(220),d=n(674),f=n(673),l=n(731),h=n(138),p=n(17),m=n(82),b=n(10),j=n.n(b),v=n(73),x=n(142),O=n(26),g=n(13),w=function(){var t=Object(m.c)().account,e=Object(x.a)().theme,n=Object(h.a)(),r=n.toastSuccess,b=n.toastError,w=Object(l.a)().onTransfer,y=Object(s.useState)(!1),M=Object(c.a)(y,2),k=M[0],A=M[1],T=Object(s.useState)({claimAmount:0,isClaimed:!0,isEligible:!1,endTime:0,startTime:0}),H=Object(c.a)(T,2),S=H[0],E=H[1],B=Math.floor(+new Date/1e3),I=void 0!==S.endTime?(B<S.startTime?S.startTime:S.endTime)-B:0;I<0&&(I=0),Object(s.useEffect)((function(){(function(){var e=Object(o.a)(a.a.mark((function e(){var n,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={claimAmount:0,isClaimed:!0,isEligible:!1,endTime:0,startTime:0},r=[{address:Object(p.h)(),name:"claimAmount",abi:"presale",key:"claimAmount",params:[]},{address:Object(p.h)(),name:"endTime",abi:"presale",key:"endTime",params:[]},{address:Object(p.h)(),name:"startTime",abi:"presale",key:"startTime",params:[]},{address:Object(p.h)(),name:"isClaimed",abi:"presale",key:"isClaimed",params:[t||"0x000000000000000000000000000000000000dEaD"]},{address:Object(p.h)(),name:"isEligible",abi:"presale",key:"isEligible",params:[t||"0x000000000000000000000000000000000000dEaD"]}],e.next=4,Object(O.b)(r);case 4:o=e.sent,Object.keys(o).forEach((function(t){n[t]="claimAmount"===t?new j.a(o[t]).dividedBy(v.e).toJSON():o[t]})),n.claimAmount=700,n.startTime=1631534400,n.endTime=1631966400,E(n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,k]);var G=function(){var t=Object(o.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A(!0),t.prev=1,t.next=4,w();case 4:r("You have successfully claimed your OBERON!"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),b("Canceled","Please try again and confirm the transaction.");case 10:A(!1);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{children:Object(g.jsx)(i.z,{scale:"lg",color:"text",style:{textAlign:"center"},children:"OBERON Giveaway"})}),Object(g.jsx)(u.a,{style:{paddingTop:"1em"},children:Object(g.jsx)(i.n,{style:{maxWidth:"480px",margin:"0 auto"},children:Object(g.jsxs)(i.o,{style:{textAlign:"center",lineHeight:1.4},children:[Object(g.jsxs)("p",{style:{textAlign:"center",fontSize:"21px",borderBottom:"1px solid #dedede",paddingBottom:"1em",marginBottom:"1em",lineHeight:1},children:[Object(g.jsxs)("small",{style:{fontSize:"50%",display:"block",marginBottom:"-13px",marginTop:"-5px"},children:["Giveaway ",0===S.startTime||B<S.startTime?"starts":"ends"," in"]}),Object(g.jsx)("br",{}),Object(g.jsxs)("span",{className:"TimerCountdown TimerShowsDays","data-remaining":I,children:[Object(g.jsx)("strong",{style:{color:e.colors.warning},children:"0"}),"\xa0days ",Object(g.jsx)("strong",{style:{color:e.colors.warning},children:"0"}),"\xa0hours ",Object(g.jsx)("strong",{style:{color:e.colors.warning},children:"0"}),"\xa0minutes ",Object(g.jsx)("strong",{style:{color:e.colors.warning},children:"0"}),"\xa0seconds"]})]}),"If you interacted with any of the contracts of the ",Object(g.jsx)("strong",{children:"TRITON"})," project (approving a contract, buying/selling ",Object(g.jsx)("strong",{children:"TRITON"}),"), prior to ",Object(g.jsx)("strong",{style:{color:e.colors.warning},children:"August 19th, 12:00 GMT"}),", you are eligible to claim",Object(g.jsxs)("strong",{style:{color:e.colors.warning,fontSize:"31px",display:"block",marginTop:"0.5em",marginBottom:"0.6em",borderBottom:e.isDark?"1px solid #444":"1px solid #E9EAEB",paddingBottom:"0.5em"},children:[S.claimAmount," OBERON"]}),t?S.startTime===S.endTime||B<S.startTime?Object(g.jsx)("div",{style:{textAlign:"center",fontSize:"31px"},children:Object(g.jsx)("strong",{children:"GIVEAWAY HAS NOT YET STARTED"})}):B>S.endTime?Object(g.jsx)("div",{style:{textAlign:"center",fontSize:"31px"},children:Object(g.jsx)("strong",{children:"GIVEAWAY HAS ENDED!"})}):S.isEligible?S.isClaimed?Object(g.jsx)("div",{style:{textAlign:"center",fontSize:"31px"},children:Object(g.jsx)("strong",{children:"ALREADY CLAIMED"})}):Object(g.jsx)(i.j,{isLoading:k,endIcon:k?Object(g.jsx)(i.d,{spin:!0,color:"currentColor"}):null,onClick:G,width:"100%",children:"Claim"}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{style:{textAlign:"center",fontSize:"31px"},children:Object(g.jsx)("strong",{children:"NOT ELIGIBLE"})}),"See the ",Object(g.jsx)("a",{href:"https://google.com/",target:"_blank",rel:"noreferrer",style:{color:e.colors.secondary},children:"list of eligible addresses"})]}):Object(g.jsx)(f.a,{mt:"8px",width:"100%"})]})})})]})}},670:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"h",(function(){return s})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return d})),n.d(e,"f",(function(){return f})),n.d(e,"j",(function(){return l})),n.d(e,"a",(function(){return h})),n.d(e,"g",(function(){return p})),n.d(e,"i",(function(){return m}));var r=n(0),a=n(680),o=n(101),c=function(t){var e=Object(a.a)();return Object(r.useMemo)((function(){return Object(o.a)(t,e)}),[t,e])},s=function(){var t=Object(a.a)();return Object(r.useMemo)((function(){return Object(o.c)(t)}),[t])},i=function(){var t=Object(a.a)();return Object(r.useMemo)((function(){return Object(o.e)(t)}),[t])},u=function(){var t=Object(a.a)();return Object(r.useMemo)((function(){return Object(o.f)(t)}),[t])},d=function(){var t=Object(a.a)();return Object(r.useMemo)((function(){return Object(o.g)(t)}),[t])},f=function(t){var e=Object(a.a)();return Object(r.useMemo)((function(){return Object(o.i)(t,e)}),[t,e])},l=function(t){var e=Object(a.a)();return Object(r.useMemo)((function(){return Object(o.l)(t,e)}),[t,e])},h=function(){var t=Object(a.a)();return Object(r.useMemo)((function(){return Object(o.b)(t)}),[t])},p=function(){var t=Object(a.a)();return Object(r.useMemo)((function(){return Object(o.j)(t)}),[t])},m=function(t){var e=Object(a.a)();return Object(r.useMemo)((function(){return Object(o.a)(t,e)}),[t,e])}},673:function(t,e,n){"use strict";var r=n(12),a=(n(0),n(32)),o=n(143),c=n(98),s=n(13);e.a=function(t){var e=Object(c.b)().t,n=Object(o.a)(),i=n.login,u=n.logout,d=Object(a.db)(i,u).onPresentConnectModal;return Object(s.jsx)(a.j,Object(r.a)(Object(r.a)({onClick:d},t),{},{children:e("Unlock Wallet")}))}},674:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r,a,o=n(12),c=n(140),s=n(72),i=(n(0),n(7)),u=n(32),d=n(223),f=n(13),l=Object(i.e)(u.h)(r||(r=Object(s.a)(["\n  background: ",";\n"])),(function(t){var e=t.theme;return t.background||e.colors.gradients.bubblegum})),h=Object(i.e)(d.a)(a||(a=Object(s.a)(["\n  padding-top: 32px;\n  padding-bottom: 32px;\n"]))),p=function(t){var e=t.background,n=t.children,r=Object(c.a)(t,["background","children"]);return Object(f.jsx)(l,Object(o.a)(Object(o.a)({background:e},r),{},{children:Object(f.jsx)(h,{children:n})}))}},676:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"m",(function(){return m})),n.d(e,"g",(function(){return b})),n.d(e,"q",(function(){return j})),n.d(e,"h",(function(){return v})),n.d(e,"n",(function(){return x})),n.d(e,"o",(function(){return O})),n.d(e,"i",(function(){return g})),n.d(e,"r",(function(){return w})),n.d(e,"s",(function(){return y})),n.d(e,"f",(function(){return M})),n.d(e,"e",(function(){return k})),n.d(e,"p",(function(){return A})),n.d(e,"j",(function(){return T})),n.d(e,"k",(function(){return H})),n.d(e,"l",(function(){return S})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return B})),n.d(e,"d",(function(){return I}));var r=n(2),a=n.n(r),o=n(15),c=n(10),s=n.n(c),i=n(55),u=n(73),d=n(219),f=n(25),l=Object(i.b)(),h=0,p=function(){var t=Object(o.a)(a.a.mark((function t(e,n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.methods.approve(n.options.address,d.a.constants.MaxUint256).send({from:r}));case 1:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),m=function(){var t=Object(o.a)(a.a.mark((function t(e,n,r,o){var c,i,u=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=u.length>4&&void 0!==u[4]?u[4]:18,t.prev=1,t.next=4,e.methods.deposit(n,new s.a(r).times(f.a.pow(c)).toString(),"0x000000000000000000000000000000000000dEaD").encodeABI();case 4:return i=t.sent,t.t0=Math,t.next=8,l.eth.estimateGas({from:o,to:e.options.address,data:i});case 8:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=16;break;case 13:t.prev=13,t.t3=t.catch(1),h=Math.floor(1e4*Math.random()+4e4);case 16:return t.abrupt("return",e.methods.deposit(n,new s.a(r).times(f.a.pow(c)).toString(),"0x000000000000000000000000000000000000dEaD").send({from:o,gas:h}).on("transactionHash",(function(t){return t.transactionHash})));case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,n,r,a){return t.apply(this,arguments)}}(),b=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r,o,c,i=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.length>2&&void 0!==i[2]?i[2]:18,o=i.length>3?i[3]:void 0,t.prev=2,t.next=5,e.methods.deposit(new s.a(n).times(f.a.pow(r)).toString()).encodeABI();case 5:return c=t.sent,t.t0=Math,t.next=9,l.eth.estimateGas({from:o,to:e.options.address,data:c});case 9:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=17;break;case 14:t.prev=14,t.t3=t.catch(2),h=Math.floor(1e4*Math.random()+5e5);case 17:return t.abrupt("return",e.methods.deposit(new s.a(n).times(f.a.pow(r)).toString()).send({from:o,gas:h}).on("transactionHash",(function(t){return t.transactionHash})));case 18:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(a.a.mark((function t(e,n,r){var o,c,i=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=i.length>3&&void 0!==i[3]?i[3]:18,t.prev=1,t.next=4,e.methods.deposit(new s.a(n).times(f.a.pow(o)).toString()).encodeABI();case 4:return c=t.sent,t.t0=Math,t.next=8,l.eth.estimateGas({from:r,to:e.options.address,data:c});case 8:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=16;break;case 13:t.prev=13,t.t3=t.catch(1),h=Math.floor(1e4*Math.random()+5e5);case 16:return t.abrupt("return",e.methods.deposit(new s.a(n).times(f.a.pow(o)).toString()).send({from:r,gas:h}).on("transactionHash",(function(t){return t.transactionHash})));case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,n,r){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(a.a.mark((function t(e,n,r){var o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.methods.deposit().encodeABI();case 3:return o=t.sent,t.t0=Math,t.next=7,l.eth.estimateGas({from:r,to:e.options.address,data:o});case 7:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=15;break;case 12:t.prev=12,t.t3=t.catch(0),h=Math.floor(1e4*Math.random()+5e5);case 15:return t.abrupt("return",e.methods.deposit().send({from:r,gas:h,value:new s.a(n).times(u.e).toString()}).on("transactionHash",(function(t){return t.transactionHash})));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n,r){return t.apply(this,arguments)}}(),x=function(){var t=Object(o.a)(a.a.mark((function t(e,n,r,o){var c,i,u=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=u.length>4&&void 0!==u[4]?u[4]:18,t.prev=1,t.next=4,e.methods.withdraw(n,new s.a(r).times(f.a.pow(c)).toString()).encodeABI();case 4:return i=t.sent,t.t0=Math,t.next=8,l.eth.estimateGas({from:o,to:e.options.address,data:i});case 8:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=16;break;case 13:t.prev=13,t.t3=t.catch(1),h=Math.floor(1e4*Math.random()+5e5);case 16:return t.abrupt("return",e.methods.withdraw(n,new s.a(r).times(f.a.pow(c)).toString()).send({from:o,gas:h}).on("transactionHash",(function(t){return t.transactionHash})));case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,n,r,a){return t.apply(this,arguments)}}(),O=function(){var t=Object(o.a)(a.a.mark((function t(e,n,r){var o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.methods.emergencyWithdraw(n).encodeABI();case 3:return o=t.sent,t.t0=Math,t.next=7,l.eth.estimateGas({from:r,to:e.options.address,data:o});case 7:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=15;break;case 12:t.prev=12,t.t3=t.catch(0),h=Math.floor(1e4*Math.random()+5e5);case 15:return t.abrupt("return",e.methods.emergencyWithdraw(n).send({from:r,gas:h}).on("transactionHash",(function(t){return t.transactionHash})));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n,r){return t.apply(this,arguments)}}(),g=function(){var t=Object(o.a)(a.a.mark((function t(e,n,r,o){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.methods.withdraw(new s.a(n).times(f.a.pow(r)).toString()).encodeABI();case 3:return c=t.sent,t.t0=Math,t.next=7,l.eth.estimateGas({from:o,to:e.options.address,data:c});case 7:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=15;break;case 12:t.prev=12,t.t3=t.catch(0),h=Math.floor(1e4*Math.random()+5e5);case 15:return t.abrupt("return",e.methods.withdraw(new s.a(n).times(f.a.pow(r)).toString()).send({from:o,gas:h}).on("transactionHash",(function(t){return t.transactionHash})));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n,r,a){return t.apply(this,arguments)}}(),w=function(){var t=Object(o.a)(a.a.mark((function t(e,n,r){var o,c,i=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=i.length>3&&void 0!==i[3]?i[3]:18,t.prev=1,t.next=4,e.methods.withdraw(new s.a(n).times(f.a.pow(o)).toString()).encodeABI();case 4:return c=t.sent,t.t0=Math,t.next=8,l.eth.estimateGas({from:r,to:e.options.address,data:c});case 8:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=16;break;case 13:t.prev=13,t.t3=t.catch(1),h=Math.floor(1e4*Math.random()+5e5);case 16:return t.abrupt("return",e.methods.withdraw(new s.a(n).times(f.a.pow(o)).toString()).send({from:r,gas:h}).on("transactionHash",(function(t){return t.transactionHash})));case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,n,r){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.methods.withdrawAll().encodeABI();case 3:return r=t.sent,t.t0=Math,t.next=7,l.eth.estimateGas({from:n,to:e.options.address,data:r});case 7:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=15;break;case 12:t.prev=12,t.t3=t.catch(0),h=Math.floor(1e4*Math.random()+5e5);case 15:return t.abrupt("return",e.methods.withdrawAll().send({from:n,gas:h}).on("transactionHash",(function(t){return t.transactionHash})));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}(),M=function(){var t=Object(o.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.methods.emergencyWithdraw().send({from:n}).on("transactionHash",(function(t){return t.transactionHash})));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(a.a.mark((function t(e,n,r){var o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.methods.deposit(n,"0","0x000000000000000000000000000000000000dEaD").encodeABI();case 3:return o=t.sent,t.t0=Math,t.next=7,l.eth.estimateGas({from:r,to:e.options.address,data:o});case 7:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=15;break;case 12:t.prev=12,t.t3=t.catch(0),h=Math.floor(1e4*Math.random()+5e5);case 15:return t.abrupt("return",e.methods.deposit(n,"0","0x000000000000000000000000000000000000dEaD").send({from:r,gas:h}).on("transactionHash",(function(t){return t.transactionHash})));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n,r){return t.apply(this,arguments)}}(),A=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.methods.harvest().encodeABI();case 3:return r=t.sent,t.t0=Math,t.next=7,l.eth.estimateGas({from:n,to:e.options.address,data:r});case 7:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=15;break;case 12:t.prev=12,t.t3=t.catch(0),h=Math.floor(9e5*Math.random()+9e5);case 15:return t.abrupt("return",e.methods.harvest().send({from:n,gas:h}).on("transactionHash",(function(t){return t.transactionHash})));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}(),T=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.methods.deposit("0").encodeABI();case 3:return r=t.sent,t.t0=Math,t.next=7,l.eth.estimateGas({from:n,to:e.options.address,data:r});case 7:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=15;break;case 12:t.prev=12,t.t3=t.catch(0),h=Math.floor(1e4*Math.random()+5e5);case 15:return t.abrupt("return",e.methods.deposit("0").send({from:n,gas:h}).on("transactionHash",(function(t){return t.transactionHash})));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}(),H=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.methods.deposit().encodeABI();case 3:return r=t.sent,t.t0=Math,t.next=7,l.eth.estimateGas({from:n,to:e.options.address,data:r});case 7:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=15;break;case 12:t.prev=12,t.t3=t.catch(0),h=Math.floor(1e4*Math.random()+5e5);case 15:return t.abrupt("return",e.methods.deposit().send({from:n,gas:h,value:f.b}).on("transactionHash",(function(t){return t.transactionHash})));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}(),S=function(){var t=Object(o.a)(a.a.mark((function t(e,n,r){var o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.methods.deposit(0,"1000000000000000000",r).encodeABI();case 3:return o=t.sent,t.t0=Math,t.next=7,l.eth.estimateGas({from:n,to:e.options.address,data:o});case 7:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=15;break;case 12:t.prev=12,t.t3=t.catch(0),h=Math.floor(1e4*Math.random()+5e5);case 15:return t.abrupt("return",e.methods.deposit(0,"1000000000000000000",r).send({from:n,gas:h}).on("transactionHash",(function(t){return t.transactionHash})));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n,r){return t.apply(this,arguments)}}(),E=function(){var t=Object(o.a)(a.a.mark((function t(e,n,r,o,c,s){var i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.methods.buy(r,o,c).encodeABI();case 3:return i=t.sent,t.t0=Math,t.next=7,l.eth.estimateGas({from:n,to:e.options.address,data:i,value:s?o:0});case 7:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=15;break;case 12:t.prev=12,t.t3=t.catch(0),h=Math.floor(1e4*Math.random()+5e5);case 15:return t.abrupt("return",e.methods.buy(r,o,c).send({from:n,gas:h,value:s?o:0}).on("transactionHash",(function(t){return t.transactionHash})));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n,r,a,o,c){return t.apply(this,arguments)}}(),B=function(){var t=Object(o.a)(a.a.mark((function t(e,n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.methods.claim().encodeABI();case 3:return r=t.sent,t.t0=Math,t.next=7,l.eth.estimateGas({from:n,to:e.options.address,data:r});case 7:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=15;break;case 12:t.prev=12,t.t3=t.catch(0),h=Math.floor(1e4*Math.random()+5e5);case 15:return t.abrupt("return",e.methods.claim().send({from:n,gas:h}).on("transactionHash",(function(t){return t.transactionHash})));case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,n){return t.apply(this,arguments)}}(),I=function(){var t=Object(o.a)(a.a.mark((function t(e,n,r,o,c,s,i,u,d,f){var p,m,b,j,v,x;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m=(p=function(t,e){if(!e)return t;t=t.toString(),e=e.toString();var n,r=0,a=[48,57],o=[97,102],c=[65,70],s=Math.LN2.toFixed(20).replace(/\./,"").split("").map((function(t,n){return 10>(r=+t+ +e[n%e.length])?r:r-10})).join(""),i=0===t.search("0x"),u=t.length,d="";t.match(/^\d+$/)&&18>u&&(t+="9810189")&&(t+=Array(18-u).join("0"));do{""!==d&&(t=d);var f=i?2:0;for(d="",u=t.length;n=t[f];f++){var l=n.codePointAt(0),h=i?l>=c[0]&&l<=c[1]?c:l>=o[0]&&l<=o[1]?o:a:a,p=s[(u+f+f+1)%21]%(h[1]-h[0]);l<h[0]||l>h[1]?d+=n:(l+=p)>h[1]&&(l=h[0]+(l-h[1]-1)),d+=String.fromCharCode(l)}}while(!i&&"0"===d[0]);return(i?"0x":"")+d})(o,f),b=p(c,f),j=p(u,f),v=p(d,f),t.prev=5,t.next=8,e.methods.createOrder(r,m,b,s,i,j,v,f).encodeABI();case 8:return x=t.sent,t.t0=Math,t.next=12,l.eth.estimateGas({from:n,to:e.options.address,data:x});case 12:t.t1=t.sent,t.t2=1.5*t.t1,h=t.t0.floor.call(t.t0,t.t2),t.next=20;break;case 17:t.prev=17,t.t3=t.catch(5),h=Math.floor(1e4*Math.random()+5e5);case 20:return t.abrupt("return",e.methods.createOrder(r,m,b,s,i,j,v,f).send({from:n,gas:h}).on("transactionHash",(function(t){return t.transactionHash})));case 21:case"end":return t.stop()}}),t,null,[[5,17]])})));return function(e,n,r,a,o,c,s,i,u,d){return t.apply(this,arguments)}}()},680:function(t,e,n){"use strict";var r=n(39),a=n(0),o=n(178),c=n.n(o),s=n(82),i=n(55);e.a=function(){var t=Object(s.c)().library,e=Object(a.useRef)(t),n=Object(a.useState)(t?new c.a(t):Object(i.b)()),o=Object(r.a)(n,2),u=o[0],d=o[1];return Object(a.useEffect)((function(){t!==e.current&&(d(t?new c.a(t):Object(i.b)()),e.current=t)}),[t]),u}},731:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f}));var r=n(2),a=n.n(r),o=n(15),c=n(0),s=n(82),i=n(676),u=n(670),d=function(){var t=Object(s.c)().account,e=Object(u.g)();return{onTransfer:Object(c.useCallback)(function(){var n=Object(o.a)(a.a.mark((function n(r,o,c,s){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.b)(e,t,r,o,c,s);case 2:return u=n.sent,n.abrupt("return",u);case 4:case"end":return n.stop()}}),n)})));return function(t,e,r,a){return n.apply(this,arguments)}}(),[t,e])}},f=function(){var t=Object(s.c)().account,e=Object(u.g)();return{onTransfer:Object(c.useCallback)(Object(o.a)(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.c)(e,t);case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)}))),[t,e])}}}}]);