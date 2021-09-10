(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[18],{1001:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ue}));var a,r,c,i,s,o,l,d,b,u,j,p,x,h,m=n(12),O=n(39),f=n(72),g=n(0),v=n(36),y=n(99),k=n(10),w=n.n(k),S=n(82),C=n(32),T=n(7),F=n(703),P=n(220),L=n(85),N=n(139),B=n(100),D=n(704),R=n(11),A=n(98),E=n(705),I=n(219),U=n(231),q=n(328),H=n(750),z=n(674),M=n(132),V=n(751),G=n(73),K=n(752),Q=n(710),J=n(13),W=T.e.div(a||(a=Object(f.a)(["\n  margin-top: 24px;\n"]))),X=Object(T.e)(C.G)(r||(r=Object(f.a)(["\n  font-weight: 400;\n"]))),Y=function(e){var t=e.bscScanAddress,n=e.removed,a=e.totalValueFormatted,r=e.lpLabel,c=e.addLiquidityUrl,i=Object(A.b)().t,s="Deposit",o=c;return-1===r.indexOf("-")&&(s="Buy",o=G.c.concat("/#/swap?inputCurrency=BUSD&outputCurrency=OBERON&exactAmount=1")),Object(J.jsxs)(W,{children:[!n&&Object(J.jsxs)(C.y,{justifyContent:"space-between",children:[Object(J.jsxs)(C.R,{children:[s,":"]}),Object(J.jsx)(X,{href:o,children:i("%symbol%",{symbol:r})})]}),Object(J.jsxs)(C.y,{justifyContent:"space-between",children:[Object(J.jsxs)(C.R,{children:[i("Total staked"),":"]}),Object(J.jsx)(C.R,{children:a})]}),Object(J.jsx)(X,{href:t,children:"View Contract"})]})},$=n(2),_=n.n($),Z=n(15),ee=n(708),te=n(218),ne=n(138),ae=n(675),re=function(e){var t=e.bounty,n=e.pid,a=e.callFee,r=e.remainingTimeString,c=Object(S.c)().account,i=Object(g.useState)(!1),s=Object(O.a)(i,2),o=s[0],l=s[1],d=Object(ee.c)(n).onReward,b=Object(L.g)(),u=Object(te.c)(t),j=u.toLocaleString(),p=u?new w.a(u).multipliedBy(b).toNumber():0,x=Object(ne.a)(),h=x.toastSuccess,m=x.toastError,f=function(){return Object(J.jsxs)("div",{style:{textAlign:"left"},children:[Object(J.jsx)(C.R,{mb:"16px",style:{lineHeight:1.3},children:"The bounty is given as a reward for providing a service for the users of the current vault."}),Object(J.jsx)(C.R,{mb:"16px",style:{lineHeight:1.3},children:"Whenever you successfully claim the bounty, you are also activating the current vault\u2019s compounding function for everyone having staked in the vault."}),Object(J.jsx)(C.R,{bold:!0,style:{lineHeight:1.3},children:"Bounty Value"}),Object(J.jsxs)(C.R,{style:{lineHeight:1.3},children:[Object(J.jsxs)("strong",{children:[parseInt(a)/100,"%"]})," of the current vault\u2019s pending yield"]}),Object(J.jsx)(C.R,{style:{lineHeight:1.3},children:Object(J.jsx)("em",{style:{display:"block",marginTop:"1em"},children:"The bounty button becomes enabled only when the timer in it runs out!"})})]})},v=Object(C.cb)(Object(J.jsx)(f,{}),{placement:"bottom",trigger:"click",tooltipOffset:[0,4]}),y=v.tooltipVisible,k=v.targetRef,T=v.tooltip;return Object(J.jsxs)(C.y,{mb:"8px",justifyContent:"space-between",alignItems:"center",style:{position:"relative",borderBottom:"1px solid #f0f0f0",padding:"10px 20px",marginLeft:"-25px",marginRight:"-25px",top:"-22px",marginBottom:"-5px"},children:[Object(J.jsx)("div",{style:{position:"absolute",left:"20px",top:"15px"},children:Object(J.jsx)("span",{ref:k,children:Object(J.jsx)(C.B,{color:"textSubtle",style:{cursor:"pointer",position:"relative",top:"5px",marginRight:"3px"}})})}),y&&T,Object(J.jsxs)("div",{style:{textAlign:"left",paddingLeft:"30px"},children:[Object(J.jsx)(C.R,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"OBERON"}),Object(J.jsx)(C.R,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:"Bounty"})]}),Object(J.jsxs)(C.z,{color:"text",children:[Number.isNaN(parseFloat(j))?0:j,Object(J.jsx)(ae.a,{value:p},p)]}),Object(J.jsx)("div",{children:Object(J.jsx)(C.j,{scale:"sm",disabled:Number.isNaN(u)||"0h 00m"!==r||0===u||!c||o,style:{display:"block",width:"100%"},onClick:Object(Z.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,d();case 4:e.sent?h("Confirmed transaction"):m("Error","Please try again. Confirm the transaction and make sure you are paying enough gas!"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),l(!1),m("Error",null===e.t0||void 0===e.t0?void 0:e.t0.message);case 12:return e.prev=12,l(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])}))),children:"0h 00m"===r?"Claim":r})})]})},ce=Object(T.e)(C.y)(c||(c=Object(f.a)(["\n  svg {\n    margin-right: 4px;\n  }\n"]))),ie=function(e){var t=e.lpLabel,n=e.tokenSymbol,a=e.isPromotedVault,r=n.replace(/\sLP/i,"").split("-").map((function(e){return e.toLowerCase()})),c=Object(O.a)(r,2),i=c[0],s=c[1];return Object(J.jsxs)(ce,{justifyContent:"space-between",alignItems:"center",mb:"12px",style:{marginBottom:a?"12px":"18px"},children:[Object(J.jsx)(C.D,{src:"/images/tokens/".concat(i,".png"),alt:i,width:48,height:48}),s&&Object(J.jsx)("div",{style:{display:"inline-block",width:"48px",height:"48px",position:"absolute",left:"80px"},children:Object(J.jsx)(C.D,{src:"/images/tokens/".concat(s,".png"),alt:s,width:48,height:48})}),Object(J.jsx)(C.y,{flexDirection:"column",alignItems:"flex-end",children:Object(J.jsx)(C.z,{mb:"4px",children:t.split(" ")[0]})})]})},se=n(17),oe=n(101),le=n(680),de=n(687),be=n(673),ue=n(678),je=n(706),pe=n(707),xe=n(692),he=n(684),me=function(e){var t=e.max,n=e.onConfirm,a=e.onDismiss,r=e.tokenName,c=void 0===r?"":r,i=e.addLiquidityUrl,s=e.depositFee,o=void 0===s?0:s,l=Object(ne.a)(),d=l.toastSuccess,b=l.toastError,u=Object(g.useState)(""),j=Object(O.a)(u,2),p=j[0],x=j[1],h=Object(g.useState)(!1),m=Object(O.a)(h,2),f=m[0],v=m[1],y=Object(A.b)().t,k=Object(g.useMemo)((function(){return Object(te.e)(t,-1===c.indexOf("LP")&&R.a[c].decimals||18)}),[t,c]),S=new w.a(p),T=new w.a(k),F=Object(g.useCallback)((function(e){o>0&&(document.getElementById("depositFee").innerHTML=(Number.isNaN(parseFloat(e.currentTarget.value))?0:parseFloat(e.currentTarget.value)*o/100).toString()),e.currentTarget.validity.valid&&x(e.currentTarget.value.replace(/,/g,"."))}),[x,o]),P=Object(g.useCallback)((function(){x(k)}),[k,x]);return Object(J.jsxs)(C.J,{title:"Stake".concat(c.indexOf("-")>-1?" LP":""," tokens"),onDismiss:a,children:[Object(J.jsx)(he.a,{value:p,onSelectMax:P,onChange:F,max:k,symbol:c,addLiquidityUrl:i,inputTitle:y("Stake"),depositFee:o}),Object(J.jsxs)(xe.a,{children:[Object(J.jsx)(C.j,{variant:"secondary",onClick:a,width:"100%",disabled:f,children:y("Cancel")}),Object(J.jsx)(C.j,{width:"100%",disabled:f||!S.isFinite()||S.eq(0)||S.gt(T),onClick:Object(Z.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,n(p,-1===c.indexOf("LP")&&R.a[c].decimals||18);case 4:null!==e.sent?d("Confirmed transaction"):b("Error","Please try again. Confirm the transaction and make sure you are paying enough gas!"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),v(!1),b("Error",null===e.t0||void 0===e.t0?void 0:e.t0.message);case 12:return e.prev=12,v(!1),e.finish(12);case 15:a();case 16:case"end":return e.stop()}}),e,null,[[1,8,12,15]])}))),children:y(f?"Pending Confirmation":"Confirm")})]}),Object(J.jsx)(C.G,{href:i,style:{alignSelf:"center",marginTop:"20px",marginBottom:"-5px"},children:y("Get %symbol%",{symbol:c})})]})},Oe=function(e){var t=e.onConfirm,n=e.onDismiss,a=e.max,r=e.tokenName,c=void 0===r?"":r,i=e.canHarvest,s=Object(ne.a)(),o=s.toastSuccess,l=s.toastError,d=Object(g.useState)(""),b=Object(O.a)(d,2),u=b[0],j=b[1],p=Object(g.useState)(!1),x=Object(O.a)(p,2),h=x[0],m=x[1],f=Object(A.b)().t,v=Object(g.useMemo)((function(){return Object(te.e)(a,-1===c.indexOf("LP")&&R.a[c].decimals||18)}),[a,c]),y=new w.a(u),k=new w.a(v),S=Object(g.useCallback)((function(e){i>0&&(document.getElementById("depositFee").innerHTML=(Number.isNaN(parseFloat(e.currentTarget.value))?0:parseFloat(e.currentTarget.value)*i/100).toString()),e.currentTarget.validity.valid&&j(e.currentTarget.value.replace(/,/g,"."))}),[j,i]),T=Object(g.useCallback)((function(){j(v)}),[v,j]);return Object(J.jsxs)(C.J,{title:f("Unstake LP tokens"),onDismiss:n,children:[Object(J.jsx)(he.a,{onSelectMax:T,onChange:S,value:u,max:v,symbol:c,inputTitle:f("Unstake"),depositFee:i}),i>0&&Object(J.jsxs)(C.R,{fontSize:"14px",style:{marginTop:"12px",marginBottom:"-10px",marginLeft:"10px",color:"#AAAAAA"},children:["A ",Object(J.jsxs)("u",{children:[i,"% unstaking fee"]})," will be applied because you are unstaking early."]}),Object(J.jsxs)(xe.a,{children:[Object(J.jsx)(C.j,{variant:"secondary",onClick:n,width:"100%",disabled:h,children:f("Cancel")}),Object(J.jsx)(C.j,{disabled:h||!y.isFinite()||y.eq(0)||y.gt(k),onClick:Object(Z.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,t(u,-1===c.indexOf("LP")&&R.a[c].decimals||18);case 4:null!==e.sent?o("Confirmed transaction"):l("Error","Please try again. Confirm the transaction and make sure you are paying enough gas!"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),m(!1),l("Error",null===e.t0||void 0===e.t0?void 0:e.t0.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:n();case 16:case"end":return e.stop()}}),e,null,[[1,8,12,15]])}))),width:"100%",children:f(h?"Pending Confirmation":"Confirm")})]})]})},fe=T.e.div(i||(i=Object(f.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),ge=function(e){var t=e.stakedBalance,n=e.maxBalance,a=e.pricePerShare,r=e.tokenBalance,c=e.tokenName,i=e.pid,s=e.addLiquidityUrl,o=e.lpPrice,l=e.depositFee,d=e.canHarvest,b=Object(je.c)(i).onStake,u=Object(pe.c)(i,I.a.utils.formatEther(a.toNumber()?a.toString():0),I.a.utils.formatEther(n.toNumber()?n.toString():0)).onUnstake,j=Object(v.g)(),p=2,x=Object(te.c)(t,-1===c.indexOf("LP")&&R.a[c].decimals||18);x>0&&x<1&&(p=x.toFixed(18).match(/^[0.]+/)[0].length);var h=x.toFixed(p),m=Object(C.bb)(Object(J.jsx)(me,{max:r,onConfirm:b,tokenName:c,addLiquidityUrl:s,depositFee:l})),f=Object(O.a)(m,1)[0],g=Object(C.bb)(Object(J.jsx)(Oe,{max:t,onConfirm:u,tokenName:c,canHarvest:d})),y=Object(O.a)(g,1)[0];return Object(J.jsxs)(C.y,{justifyContent:"space-between",alignItems:"center",children:[Object(J.jsxs)(C.z,{color:"text",style:{textAlign:"left"},children:[Object(J.jsx)(ue.a,{bold:!0,fontSize:"20px",decimals:p,value:h}),Object(J.jsx)(ae.a,{value:o*x},o*x)]}),t.eq(0)?Object(J.jsxs)(C.j,{onClick:f,disabled:["history","archived"].some((function(e){return j.pathname.includes(e)})),style:{marginTop:"2px"},children:["Stake",c.indexOf("-")>-1?" LP":" ".concat(c)]}):Object(J.jsxs)(fe,{children:[Object(J.jsx)(C.C,{variant:"tertiary",onClick:y,mr:"6px",style:{marginTop:"2px"},children:Object(J.jsx)(C.I,{color:"primary",width:"14px"})}),Object(J.jsx)(C.C,{variant:"tertiary",onClick:f,disabled:["history","archived"].some((function(e){return j.pathname.includes(e)})),style:{marginTop:"2px"},children:Object(J.jsx)(C.a,{color:"primary",width:"14px"})})]})]})},ve=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:18,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,r=Object(te.c)(t,n),c=new w.a(e.multipliedBy(r)),i=Object(te.c)(c,n),s=Object(te.d)(new w.a(i),n),o=Object(te.e)(c,n,a);return{cakeAsNumberBalance:i,cakeAsBigNumber:s,cakeAsDisplayBalance:o}},ye=T.e.div(s||(s=Object(f.a)(["\n  padding-top: 16px;\n"]))),ke=function(e){var t=e.vault,n=e.account,a=e.addLiquidityUrl,r=e.lpPrice,c=e.canHarvest,i=Object(A.b)().t,s=Object(g.useState)(!1),o=Object(O.a)(s,2),l=o[0],d=o[1],b=t.pid,u=t.lpAddresses,j=t.userData||{},p=j.allowance,x=void 0===p?0:p,h=j.tokenBalance,m=void 0===h?0:h,f=j.stakedBalance,v=void 0===f?0:f,y=j.lastUserAction,k=void 0===y?0:y,S=new w.a(x),T=new w.a(m),F=new w.a(v),P=new w.a(k),L=new w.a(t.getPricePerFullShare),N=Object(se.a)(u),B=t.lpSymbol.toUpperCase(),D=n&&S&&S.isGreaterThan(0),R=Object(le.a)(),E=ve(F,L).cakeAsBigNumber,I=Object(oe.a)(N,R),U=Object(de.g)(I,b).onApprove,q=Object(ne.a)(),H=q.toastSuccess,z=q.toastError,M=Object(g.useCallback)(Object(Z.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.prev=1,e.next=4,U();case 4:e.sent?H("Contract Approved","You can now stake!"):z("Error","Please try again. Confirm the transaction and make sure you are paying enough gas!"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),d(!1),z("Error",null===e.t0||void 0===e.t0?void 0:e.t0.message);case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])}))),[U,d,H,z]),V=function(e,t,n,a,r){var c=e&&t&&t.gt(0)&&n&&n.gt(0),i=ve(n,a).cakeAsBigNumber.minus(t),s=i.gte(0)?parseFloat(Object(te.e)(i,18,3)):0,o=i.times(r);return{hasAutoEarnings:c,autoCakeToDisplay:s,autoUsdToDisplay:o.gte(0)?parseFloat(Object(te.e)(o,18,3)):0}}(n,P,F,L,r),G=V.hasAutoEarnings,K=V.autoCakeToDisplay,Q=V.autoUsdToDisplay;return Object(J.jsxs)(ye,{children:[n&&Object(J.jsxs)(C.y,{children:[Object(J.jsx)(C.R,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:B}),Object(J.jsx)(C.R,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:"Earned"})]}),n&&Object(J.jsxs)(C.z,{color:G?"text":"textDisabled",style:{textAlign:"left",marginBottom:".5em",lineHeight:"1.1"},children:[Object(J.jsx)(ue.a,{bold:!0,fontSize:"20px",decimals:K>0?3:0,value:K}),Object(J.jsx)(ae.a,{value:Q,decimals:Q>0?3:0},Q)]}),Object(J.jsxs)(C.y,{children:[Object(J.jsx)(C.R,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:B}),Object(J.jsx)(C.R,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:i("Staked (COMPOUNDING)")})]}),n?D?Object(J.jsx)(ge,{stakedBalance:E,maxBalance:F,tokenBalance:T,pricePerShare:L,tokenName:B,pid:b,addLiquidityUrl:a,lpPrice:r,depositFee:parseFloat(t.depositFee),canHarvest:c}):Object(J.jsx)(C.j,{isLoading:l,endIcon:l?Object(J.jsx)(C.d,{spin:!0,color:"currentColor"}):null,disabled:l,onClick:M,width:"100%",style:{marginTop:"2px"},children:"Approve Contract"}):Object(J.jsx)(be.a,{mt:"8px",width:"100%"})]})},we=n(709),Se=function(e){var t=e.lpLabel,n=e.cakePrice,a=e.apr,r=e.addLiquidityUrl,c=Object(A.b)().t,i=Object(C.bb)(Object(J.jsx)(we.a,{linkLabel:c("Get %symbol%",{symbol:t}),tokenPrice:n.toNumber(),apr:a,linkHref:r,compoundFrequency:3,performanceFee:0})),s=Object(O.a)(i,1)[0];return Object(J.jsx)(C.C,{onClick:function(e){e.stopPropagation(),s()},variant:"text",scale:"sm",ml:"4px",children:Object(J.jsx)(C.m,{width:"18px"})})},Ce=T.e.div(o||(o=Object(f.a)(["\n  background: linear-gradient(45deg, rgb(255, 0, 0) 0%, rgb(255, 154, 0) 10%, rgb(208, 222, 33) 20%, rgb(79, 220, 74) 30%, rgb(63, 218, 216) 40%, rgb(47, 201, 226) 50%, rgb(28, 127, 238) 60%, rgb(95, 21, 242) 70%, rgb(186, 12, 248) 80%, rgb(251, 7, 217) 90%, rgb(255, 0, 0) 100%) 0% 0% / 300% 300%;\n  background-size: 400% 400%;\n  border-radius: 32px;\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  bottom: -4px;\n  left: -3px;\n  z-index: -1;\n"]))),Te=T.e.div(l||(l=Object(f.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: ",";\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background}),(function(e){var t=e.theme;return e.isPromotedVault?"31px":t.radii.card})),Fe=T.e.div(d||(d=Object(f.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Pe=T.e.div(b||(b=Object(f.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),Le=function(e){var t=e.vault,n=e.removed,a=e.cakePrice,r=e.account,c=e.started,i=Object(A.b)().t,s=Object(g.useState)(!1),o=Object(O.a)(s,2),l=o[0],d=o[1],b=t.lpSymbol&&t.lpSymbol.toUpperCase(),u=a.toNumber(),j=1e3/u,p=Object(Q.a)({amountEarned:Object(Q.b)({numberOfDays:365,farmApr:t.apr,tokenPrice:u,roundingDecimals:2,compoundFrequency:3,performanceFee:0}),amountInvested:j}),x=p&&p.toLocaleString("en-US",{maximumFractionDigits:0});p&&p>9e5&&(x="GALACTIC ");var h=parseFloat(I.a.utils.formatEther(t.userData.stakedBalance))>0,m=Object(K.a)({quoteTokenAddress:t.quoteToken.address,tokenAddress:t.token.address}),f="".concat(G.a,"/").concat(m),v=t.lpAddresses[56],y=0,k=0,S=0,T=new w.a(t.userData.nextHarvestUntil).toString(),F="0h 00m",P=0;void 0!==T&&((y=parseInt(T)+parseInt(t.withdrawFeePeriod)-Math.ceil(+new Date/1e3))<0||Number.isNaN(y)?y=0:P=parseFloat(t.withdrawFee),k=Math.floor(y/3600),S=Math.ceil((y-3600*k)/60),F=k.toString().concat("h ").concat(S.toString().padStart(2,"0")).concat("m"));var L="0h 00m";void 0!==t.callHarvestUntil&&(((y=parseInt(t.callHarvestUntil)-Math.ceil(+new Date/1e3))<0||Number.isNaN(y))&&(y=0),k=Math.floor(y/3600),S=Math.ceil((y-3600*k)/60),L=k.toString().concat("h ").concat(S.toString().padStart(2,"0")).concat("m"));var N=t.totalDepositedLPs?"$".concat((t.totalDepositedLPs*t.lpPrice).toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})):"-",B=Object(C.cb)(Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)(C.R,{style:{lineHeight:1.3},children:["Applies if unstaking within ",parseInt(t.withdrawFeePeriod)/60/60,"\xa0hours after staking. Unstaking ",Object(J.jsx)("strong",{children:"*after*"})," those ",parseInt(t.withdrawFeePeriod)/60/60,"\xa0hours will ",Object(J.jsx)("strong",{children:"*not*"})," incur a fee. ",Object(J.jsx)("br",{}),"Timer resets every time you stake into the vault."]})}),{placement:"top-start",trigger:"click"}),D=B.targetRef,E=B.tooltip,U=B.tooltipVisible,q=t.token===R.a.OBERON||t.quoteToken===R.a.OBERON;return Object(J.jsxs)(Te,{isPromotedVault:q,children:[Object(J.jsx)(re,{bounty:t.calculateHarvestRewards,pid:t.pid,callFee:t.callFee,remainingTimeString:L}),q&&Object(J.jsx)(Ce,{}),Object(J.jsx)(ie,{lpLabel:b,tokenSymbol:t.lpSymbol,isPromotedVault:q}),!n&&Object(J.jsxs)(C.y,{justifyContent:"space-between",alignItems:"center",children:[Object(J.jsxs)(C.R,{children:[i("APY"),":"]}),Object(J.jsx)(C.R,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apr?Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(Se,{lpLabel:b,addLiquidityUrl:f,cakePrice:a,apr:t.apr}),x,"%"]}):Object(J.jsx)(C.P,{height:24,width:80})})]}),Object(J.jsxs)(C.y,{justifyContent:"space-between",children:[Object(J.jsxs)(C.R,{children:[i("Earn"),":"]}),Object(J.jsx)(C.R,{bold:!0,children:b})]}),Object(J.jsxs)(C.y,{justifyContent:"space-between",children:[Object(J.jsx)(C.R,{children:"Deposit Fee:"}),Object(J.jsxs)(C.R,{bold:!0,children:[t.depositFee,"%"]})]}),t.withdrawFeePeriod&&Object(J.jsxs)(C.y,{justifyContent:"space-between",children:[Object(J.jsxs)(C.R,{children:[U&&E,Object(J.jsx)("span",{ref:D,children:Object(J.jsx)(C.B,{color:"textSubtle",style:{cursor:"pointer",position:"relative",top:"5px",marginRight:"3px"}})}),t.withdrawFee,"% unstaking fee until:"]}),void 0!==r&&c&&h&&Object(J.jsx)(C.R,{bold:!0,style:{position:"relative",top:"2px"},children:F}),(void 0===r&&c||void 0!==r&&c&&!h)&&Object(J.jsxs)(C.R,{bold:!0,style:{position:"relative",top:"2px"},children:[parseInt(t.withdrawFeePeriod)/60/60," Hours"]}),!c&&Object(J.jsx)(C.R,{bold:!0,style:{position:"relative",top:"2px"},children:"Not started"})]}),Object(J.jsx)(ke,{vault:t,account:r,addLiquidityUrl:f,lpPrice:t.lpPrice,canHarvest:P}),Object(J.jsx)(Fe,{}),Object(J.jsx)(V.a,{onClick:function(){return d(!l)},expanded:l}),Object(J.jsx)(Pe,{expanded:l,children:Object(J.jsx)(Y,{removed:n,bscScanAddress:"https://bscscan.com/address/".concat(t.contractAddress[56]),infoAddress:"https://pancakeswap.info/pair/".concat(v),totalValueFormatted:N,lpLabel:b,addLiquidityUrl:f})})]})},Ne=n(117),Be=function(e){var t,n=e.hasStakeInFinishedVaults,a=Object(v.h)().url;switch(Object(v.g)().pathname){case"/vaults":t=0;break;case"/vaults/history":t=1;break;case"/vaults/archived":t=2;break;default:t=0}return Object(J.jsx)(De,{children:Object(J.jsxs)(C.k,{activeIndex:t,scale:"sm",variant:"subtle",children:[Object(J.jsx)(C.l,{as:Ne.a,to:"".concat(a),children:"Active"}),Object(J.jsx)(C.L,{show:n,children:Object(J.jsx)(C.l,{as:Ne.a,to:"".concat(a,"/history"),children:"Inactive"})})]})})},De=T.e.div(u||(u=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  a {\n    padding-left: 12px;\n    padding-right: 12px;\n  }\n\n  "," {\n    margin-left: 16px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Re=T.e.div(j||(j=Object(f.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  justify-content: space-between;\n  flex-direction: column;\n  margin-bottom: 32px;\n\n  "," {\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding: 16px 0;\n    margin-bottom: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.xs})),Ae=T.e.div(p||(p=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),C.R),Ee=T.e.div(x||(x=Object(f.a)(["\n  flex-wrap: wrap;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  width: 100%;\n\n  > div {\n    padding: 8px 0px;\n  }\n\n  "," {\n    justify-content: flex-start;\n    width: auto;\n\n    > div {\n      padding: 0;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),Ie=T.e.div(h||(h=Object(f.a)(["\n    font-size: 20px;\n    text-align: center;\n    padding: 1em;\n    margin: 15px auto;\n    background: ",";\n    color: ",";\n    border-radius: 35px;\n    a {\n        color: ","\n    }\n"])),(function(e){return e.theme.isDark?"linear-gradient(90deg, rgba(109,89,122,1) 80%, rgba(0,0,0,0) 100%)":"linear-gradient(90deg, rgba(31,199,212,1) 50%, rgba(255,255,255,0) 100%)"}),(function(e){return e.theme.isDark?e.theme.colors.text:"#FFF"}),(function(e){return e.theme.isDark?e.theme.colors.warning:e.theme.colors.text})),Ue=function(){var e=Object(v.h)().path,t=Object(v.g)().pathname,n=Object(A.b)().t,a=Object(L.h)().data,r=Object(L.g)(),c=Object(g.useState)(""),i=Object(O.a)(c,1)[0],s=Object(S.c)().account,o=Object(g.useState)("hot"),l=Object(O.a)(o,1)[0],d=Object(L.d)(),b=Object(y.b)(),u=Object(N.a)().fastRefresh;Object(g.useEffect)((function(){s&&b(Object(B.e)(s))}),[s,b,u]);var j=t.includes("archived"),p=t.includes("history"),x=!p&&!j,h=Object(g.useState)(!x),f=Object(O.a)(h,2),k=f[0],T=f[1];Object(g.useEffect)((function(){T(!x)}),[x]),Object(g.useEffect)((function(){b(Object(M.d)(j)),j&&(b(Object(M.c)()),s&&b(Object(B.e)(s)))}),[j,b,s]);var V=a.filter((function(e){return"0X"!==e.multiplier&&!Object(q.a)(e.pid)})),G=a.filter((function(e){return"0X"===e.multiplier&&!Object(q.a)(e.pid)})),K=a.filter((function(e){return Object(q.a)(e.pid)})),Q=V.filter((function(e){return e.userData&&new w.a(e.userData.stakedBalance).isGreaterThan(0)})),W=G.filter((function(e){return e.userData&&new w.a(e.userData.stakedBalance).isGreaterThan(0)})),X=K.filter((function(e){return e.userData&&new w.a(e.userData.stakedBalance).isGreaterThan(0)})),Y=Object(D.a)().toString(),$=(new Date).getTime()/1e3>parseInt(R.a.OBERON.projectLink),_=Object(g.useCallback)((function(e){var t=e.map((function(e){if(!e.lpTotalInQuoteToken||!d)return e;var t=e.token===e.quoteToken?d[e.token.symbol]:(parseFloat(e.quoteTokenReserve)*d[e.quoteToken.symbol]+parseFloat(e.tokenReserve)*d[e.token.symbol])/parseFloat("string"===typeof e.lpTotalSupply?e.lpTotalSupply:I.a.utils.formatEther(e.lpTotalSupply.toString())),n=x?Object(E.b)(e.poolWeight,new w.a(d.OBERON),new w.a(parseFloat(e.staked)*t),""!==Y?Y:void 0):0,a=new w.a(e.lpTotalInQuoteToken).times(d[e.quoteToken.symbol]);return Object(m.a)(Object(m.a)({},e),{},{apr:n,lpPrice:t,liquidity:a})}));if(i){var n=Object(H.a)(i.toLowerCase());t=t.filter((function(e){return Object(H.a)(e.lpSymbol.toLowerCase()).includes(n)}))}return t}),[d,i,x,Y]),Z=Object(g.useRef)(null),ee=Object(g.useState)(12),te=Object(O.a)(ee,2),ne=te[0],ae=te[1],re=Object(g.useState)(!1),ce=Object(O.a)(re,2),ie=ce[0],se=ce[1],oe=Object(g.useMemo)((function(){var e=[];return x&&(e=_(k?Q:V)),p&&(e=_(k?W:G)),j&&(e=_(k?X:K)),function(e){switch(l){case"apr":return Object(U.orderBy)(e,(function(e){return e.apr}),"desc");case"multiplier":return Object(U.orderBy)(e,(function(e){return e.multiplier?Number(e.multiplier.slice(0,-1)):0}),"desc");case"liquidity":return Object(U.orderBy)(e,(function(e){return Number(e.liquidity)}),"desc");default:return e}}(e).slice(0,ne)}),[l,V,_,G,K,x,p,j,X,W,k,Q,ne]);Object(g.useEffect)((function(){ie||(new IntersectionObserver((function(e){Object(O.a)(e,1)[0].isIntersecting&&ae((function(e){return e+12}))}),{rootMargin:"0px",threshold:1}).observe(Z.current),se(!0))}),[oe,ie]);return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(z.a,{children:Object(J.jsx)(C.z,{scale:"lg",color:"text",style:{textAlign:"center"},children:"Stake LPs and tokens to earn staked and have it autocompounded for you"})}),Object(J.jsxs)(P.a,{style:{paddingTop:"1em"},children:[!$&&Object(J.jsxs)(Ie,{children:["Vaults start ",Object(J.jsx)("a",{href:"https://www.timeanddate.com/countdown/generic?iso=".concat(new Date(1e3*parseInt(R.a.OBERON.projectLink)).toISOString(),"&font=sanserif&p0=1440&csz=1&msg=OBERON vaults start"),target:"_blank",rel:"noreferrer",children:new Date(1e3*parseInt(R.a.OBERON.projectLink)).toUTCString()})]}),Object(J.jsx)(Re,{children:Object(J.jsxs)(Ee,{style:{marginLeft:"auto",marginRight:"auto",marginBottom:"1em"},children:[Object(J.jsxs)(Ae,{children:[Object(J.jsx)(C.V,{checked:k,onChange:function(){return T(!k)},scale:"sm"}),Object(J.jsxs)(C.R,{children:[" ",n("Staked only")]})]}),Object(J.jsx)(Be,{hasStakeInFinishedVaults:W.length>0})]})}),Object(J.jsx)("div",{children:Object(J.jsxs)(F.a,{children:[Object(J.jsx)(v.a,{exact:!0,path:"".concat(e),children:oe.map((function(e){return Object(J.jsx)(Le,{vault:e,cakePrice:r,account:s,started:$,removed:!1},e.pid)}))}),Object(J.jsx)(v.a,{exact:!0,path:"".concat(e,"/history"),children:oe.map((function(e){return Object(J.jsx)(Le,{vault:e,cakePrice:r,account:s,removed:!0},e.pid)}))}),Object(J.jsx)(v.a,{exact:!0,path:"".concat(e,"/archived"),children:oe.map((function(e){return Object(J.jsx)(Le,{vault:e,cakePrice:r,account:s,removed:!0},e.pid)}))})]})}),Object(J.jsx)("div",{ref:Z})]})]})}}}]);