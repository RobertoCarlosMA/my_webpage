import{F as be,O as f,R as T,q as y,A,o,c,s as h,G as L,H as k,I as v,B as w,n as b,y as p,x as E,J as U,L as D,Z as P,M as d,N as ie,U as B,P as j,v as C,Q as M,S as z,T as H,C as S,V as ne,e as ge,W as se,X as R,z as $,r as Ie,b as ye,l as ve,w as ee,E as ke,K as O,m as xe}from"./index-4e3fd7e1.js";import{u as V,s as Ce}from"./general-0a05f354.js";import{_ as Le}from"./_plugin-vue_export-helper-c27b6911.js";var N=be(),ae={name:"Menuitem",inheritAttrs:!1,emits:["item-click"],props:{item:null,template:null,exact:null,id:null,focusedOptionId:null},methods:{getItemProp(e,t){return e&&e.item?f.getItemValue(e.item[t]):void 0},onItemActionClick(e,t){t&&t(e)},onItemClick(e){const t=this.getItemProp(this.item,"command");t&&t({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},containerClass(){return["p-menuitem",this.item.class,{"p-focus":this.id===this.focusedOptionId,"p-disabled":this.disabled()}]},linkClass(e){return["p-menuitem-link",{"router-link-active":e&&e.isActive,"router-link-active-exact":this.exact&&e&&e.isExactActive}]},visible(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label(){return typeof this.item.label=="function"?this.item.label():this.item.label}},directives:{ripple:T}};const we=["id","aria-label","aria-disabled"],Ee=["href","onClick"],Pe={class:"p-menuitem-text"},_e=["href","target"],Se={class:"p-menuitem-text"};function Ae(e,t,n,s,a,i){const u=y("router-link"),m=A("ripple");return i.visible()?(o(),c("li",{key:0,id:n.id,class:b(i.containerClass()),role:"menuitem",style:D(n.item.style),"aria-label":i.label(),"aria-disabled":i.disabled()},[h("div",{class:"p-menuitem-content",onClick:t[0]||(t[0]=r=>i.onItemClick(r))},[n.template?(o(),k(U(n.template),{key:1,item:n.item},null,8,["item"])):(o(),c(L,{key:0},[n.item.to&&!i.disabled()?(o(),k(u,{key:0,to:n.item.to,custom:""},{default:v(({navigate:r,href:l,isActive:g,isExactActive:I})=>[w((o(),c("a",{href:l,class:b(i.linkClass({isActive:g,isExactActive:I})),tabindex:"-1","aria-hidden":"true",onClick:_=>i.onItemActionClick(_,r)},[n.item.icon?(o(),c("span",{key:0,class:b(["p-menuitem-icon",n.item.icon])},null,2)):p("",!0),h("span",Pe,E(i.label()),1)],10,Ee)),[[m]])]),_:1},8,["to"])):w((o(),c("a",{key:1,href:n.item.url,class:b(i.linkClass()),target:n.item.target,tabindex:"-1","aria-hidden":"true"},[n.item.icon?(o(),c("span",{key:0,class:b(["p-menuitem-icon",n.item.icon])},null,2)):p("",!0),h("span",Se,E(i.label()),1)],10,_e)),[[m]])],64))])],14,we)):p("",!0)}ae.render=Ae;var le={name:"Menu",inheritAttrs:!1,emits:["show","hide","focus","blur"],props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:String,default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},exact:{type:Boolean,default:!0},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},data(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&P.clear(this.container),this.container=null},methods:{itemClick(e){const t=e.item;this.disabled(t)||(t.command&&t.command(e),t.to&&e.navigate&&e.navigate(e.originalEvent),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},onListFocus(e){this.focused=!0,this.popup||(this.selectedOptionIndex!==-1?(this.changeFocusedOptionIndex(this.selectedOptionIndex),this.selectedOptionIndex=-1):this.changeFocusedOptionIndex(0)),this.$emit("focus",e)},onListBlur(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(d.focus(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey(e){const t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()},onArrowUpKey(e){if(e.altKey&&this.popup)d.focus(this.target),this.hide(),e.preventDefault();else{const t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()}},onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey(e){this.changeFocusedOptionIndex(d.find(this.container,"li.p-menuitem:not(.p-disabled)").length-1),e.preventDefault()},onEnterKey(e){const t=d.findSingle(this.list,`li[id="${`${this.focusedOptionIndex}`}"]`),n=t&&d.findSingle(t,".p-menuitem-link");this.popup&&d.focus(this.target),n?n.click():t&&t.click(),e.preventDefault()},onSpaceKey(e){this.onEnterKey(e)},findNextOptionIndex(e){const n=[...d.find(this.container,"li.p-menuitem:not(.p-disabled)")].findIndex(s=>s.id===e);return n>-1?n+1:0},findPrevOptionIndex(e){const n=[...d.find(this.container,"li.p-menuitem:not(.p-disabled)")].findIndex(s=>s.id===e);return n>-1?n-1:0},changeFocusedOptionIndex(e){const t=d.find(this.container,"li.p-menuitem:not(.p-disabled)");let n=e>=t.length?t.length-1:e<0?0:e;this.focusedOptionIndex=t[n].getAttribute("id")},toggle(e){this.overlayVisible?this.hide():this.show(e)},show(e){this.overlayVisible=!0,this.target=e.currentTarget},hide(){this.overlayVisible=!1,this.target=null},onEnter(e){this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&P.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&(d.focus(this.list),this.changeFocusedOptionIndex(0)),this.$emit("show")},onLeave(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&P.clear(e)},alignOverlay(){d.absolutePosition(this.container,this.target),this.container.style.minWidth=d.getOuterWidth(this.target)+"px"},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{const t=this.container&&!this.container.contains(e.target),n=!(this.target&&(this.target===e.target||this.target.contains(e.target)));this.overlayVisible&&t&&n?this.hide():!this.popup&&t&&n&&(this.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new ie(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!d.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label},separatorClass(e){return["p-menuitem-separator",e.class]},onOverlayClick(e){N.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef(e){this.container=e},listRef(e){this.list=e}},computed:{containerClass(){return["p-menu p-component",{"p-menu-overlay":this.popup,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},id(){return this.$attrs.id||B()},focusedOptionId(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:ae,Portal:j}};const Ke=["id"],De=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],Oe=["id"];function ze(e,t,n,s,a,i){const u=y("PVMenuitem"),m=y("Portal");return o(),k(m,{appendTo:n.appendTo,disabled:!n.popup},{default:v(()=>[C(H,{name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},{default:v(()=>[!n.popup||a.overlayVisible?(o(),c("div",z({key:0,ref:i.containerRef,id:i.id,class:i.containerClass},e.$attrs,{onClick:t[3]||(t[3]=(...r)=>i.onOverlayClick&&i.onOverlayClick(...r))}),[h("ul",{ref:i.listRef,id:i.id+"_list",class:"p-menu-list p-reset",role:"menu",tabindex:n.tabindex,"aria-activedescendant":a.focused?i.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:t[0]||(t[0]=(...r)=>i.onListFocus&&i.onListFocus(...r)),onBlur:t[1]||(t[1]=(...r)=>i.onListBlur&&i.onListBlur(...r)),onKeydown:t[2]||(t[2]=(...r)=>i.onListKeyDown&&i.onListKeyDown(...r))},[(o(!0),c(L,null,M(n.model,(r,l)=>(o(),c(L,{key:i.label(r)+l.toString()},[r.items&&i.visible(r)&&!r.separator?(o(),c(L,{key:0},[r.items?(o(),c("li",{key:0,id:i.id+"_"+l,class:"p-submenu-header",role:"none"},[S(e.$slots,"item",{item:r},()=>[ne(E(i.label(r)),1)])],8,Oe)):p("",!0),(o(!0),c(L,null,M(r.items,(g,I)=>(o(),c(L,{key:g.label+l+"_"+I},[i.visible(g)&&!g.separator?(o(),k(u,{key:0,id:i.id+"_"+l+"_"+I,item:g,template:e.$slots.item,exact:n.exact,focusedOptionId:i.focusedOptionId,onItemClick:i.itemClick},null,8,["id","item","template","exact","focusedOptionId","onItemClick"])):i.visible(g)&&g.separator?(o(),c("li",{key:"separator"+l+I,class:b(i.separatorClass(r)),style:D(g.style),role:"separator"},null,6)):p("",!0)],64))),128))],64)):i.visible(r)&&r.separator?(o(),c("li",{key:"separator"+l.toString(),class:b(i.separatorClass(r)),style:D(r.style),role:"separator"},null,6)):(o(),k(u,{key:i.label(r)+l.toString(),id:i.id+"_"+l,item:r,template:e.$slots.item,exact:n.exact,focusedOptionId:i.focusedOptionId,onItemClick:i.itemClick},null,8,["id","item","template","exact","focusedOptionId","onItemClick"]))],64))),128))],40,De)],16,Ke)):p("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo","disabled"])}function Fe(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&s.firstChild?s.insertBefore(a,s.firstChild):s.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var Be=`
.p-menu-overlay {
    position: absolute;
    top: 0;
    left: 0;
}
.p-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-menu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-menu .p-menuitem-text {
    line-height: 1;
}
`;Fe(Be);le.render=ze;var re={name:"MenubarSub",emits:["item-mouseenter","item-click"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},template:{type:Function,default:null},exact:{type:Boolean,default:!0},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId(e){return`${this.menuId}_${e.key}`},getItemKey(e){return this.getItemId(e)},getItemProp(e,t,n){return e&&e.item?f.getItemValue(e.item[t],n):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemActive(e){return this.activeItemPath.some(t=>t.key===e.key)},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemFocused(e){return this.focusedItemId===this.getItemId(e)},isItemGroup(e){return f.isNotEmpty(e.items)},onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemActionClick(e,t){t&&t(e)},getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length},getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1},getItemClass(e){return["p-menuitem",this.getItemProp(e,"class"),{"p-menuitem-active p-highlight":this.isItemActive(e),"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)}]},getItemActionClass(e,t){return["p-menuitem-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},getItemIconClass(e){return["p-menuitem-icon",this.getItemProp(e,"icon")]},getSeparatorItemClass(e){return["p-menuitem-separator",this.getItemProp(e,"class")]},getSubmenuIcon(){return["p-submenu-icon pi",{"pi-angle-right":!this.root,"pi-angle-down":this.root}]}},computed:{containerClass(){return{"p-submenu-list":!this.root,"p-menubar-root-list":this.root}}},directives:{ripple:T}};const Te=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset"],He=["onClick","onMouseenter"],Ve=["href","onClick"],Ne={class:"p-menuitem-text"},Me=["href","target"],Re={class:"p-menuitem-text"},Ue=["id"];function je(e,t,n,s,a,i){const u=y("router-link"),m=y("MenubarSub",!0),r=A("ripple");return o(),c("ul",null,[(o(!0),c(L,null,M(n.items,(l,g)=>(o(),c(L,{key:i.getItemKey(l)},[i.isItemVisible(l)&&!i.getItemProp(l,"separator")?(o(),c("li",{key:0,id:i.getItemId(l),style:D(i.getItemProp(l,"style")),class:b(i.getItemClass(l)),role:"menuitem","aria-label":i.getItemLabel(l),"aria-disabled":i.isItemDisabled(l)||void 0,"aria-expanded":i.isItemGroup(l)?i.isItemActive(l):void 0,"aria-haspopup":i.isItemGroup(l)&&!i.getItemProp(l,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(g)},[h("div",{class:"p-menuitem-content",onClick:I=>i.onItemClick(I,l),onMouseenter:I=>i.onItemMouseEnter(I,l)},[n.template?(o(),k(U(n.template),{key:1,item:l.item},null,8,["item"])):(o(),c(L,{key:0},[i.getItemProp(l,"to")&&!i.isItemDisabled(l)?(o(),k(u,{key:0,to:i.getItemProp(l,"to"),custom:""},{default:v(({navigate:I,href:_,isActive:x,isExactActive:K})=>[w((o(),c("a",{href:_,class:b(i.getItemActionClass(l,{isActive:x,isExactActive:K})),tabindex:"-1","aria-hidden":"true",onClick:F=>i.onItemActionClick(F,I)},[i.getItemProp(l,"icon")?(o(),c("span",{key:0,class:b(i.getItemIconClass(l))},null,2)):p("",!0),h("span",Ne,E(i.getItemLabel(l)),1)],10,Ve)),[[r]])]),_:2},1032,["to"])):w((o(),c("a",{key:1,href:i.getItemProp(l,"url"),class:b(i.getItemActionClass(l)),target:i.getItemProp(l,"target"),tabindex:"-1","aria-hidden":"true"},[i.getItemProp(l,"icon")?(o(),c("span",{key:0,class:b(i.getItemIconClass(l))},null,2)):p("",!0),h("span",Re,E(i.getItemLabel(l)),1),i.getItemProp(l,"items")?(o(),c("span",{key:1,class:b(i.getSubmenuIcon())},null,2)):p("",!0)],10,Me)),[[r]])],64))],40,He),i.isItemVisible(l)&&i.isItemGroup(l)?(o(),k(m,{key:0,menuId:n.menuId,role:"menu",class:"p-submenu-list",focusedItemId:n.focusedItemId,items:l.items,mobileActive:n.mobileActive,activeItemPath:n.activeItemPath,template:n.template,exact:n.exact,level:n.level+1,onItemClick:t[0]||(t[0]=I=>e.$emit("item-click",I)),onItemMouseenter:t[1]||(t[1]=I=>e.$emit("item-mouseenter",I))},null,8,["menuId","focusedItemId","items","mobileActive","activeItemPath","template","exact","level"])):p("",!0)],14,Te)):p("",!0),i.isItemVisible(l)&&i.getItemProp(l,"separator")?(o(),c("li",{key:1,id:i.getItemId(l),style:D(i.getItemProp(l,"style")),class:b(i.getSeparatorItemClass(l)),role:"separator"},null,14,Ue)):p("",!0)],64))),128))])}re.render=je;var oe={name:"Menubar",emits:["focus","blur"],props:{model:{type:Array,default:null},exact:{type:Boolean,default:!0},buttonProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},data(){return{mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1}},watch:{activeItemPath(e){f.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,beforeUnmount(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.container&&P.clear(this.container),this.container=null},methods:{getItemProp(e,t){return e?f.getItemValue(e[t]):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemGroup(e){return f.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator(e){return this.getItemProp(e,"separator")},getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup(e){return e&&f.isNotEmpty(e.items)},toggle(e){this.mobileActive?(this.mobileActive=!1,P.clear(this.menubar),this.hide()):(this.mobileActive=!0,P.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()},show(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},d.focus(this.menubar)},hide(e,t){this.mobileActive&&setTimeout(()=>{d.focus(this.$refs.menubutton)},0),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},t&&d.focus(this.menubar),this.dirty=!1},onFocus(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown(e){const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&f.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange(e){const{processedItem:t,isFocus:n}=e;if(f.isEmpty(t))return;const{index:s,key:a,level:i,parentKey:u,items:m}=t,r=f.isNotEmpty(m),l=this.activeItemPath.filter(g=>g.parentKey!==u&&g.parentKey!==a);r&&l.push(t),this.focusedItemInfo={index:s,level:i,parentKey:u},this.activeItemPath=l,r&&(this.dirty=!0),n&&d.focus(this.menubar)},onItemClick(e){const{originalEvent:t,processedItem:n}=e,s=this.isProccessedItemGroup(n),a=f.isEmpty(n.parent);if(this.isSelected(n)){const{index:u,key:m,level:r,parentKey:l}=n;this.activeItemPath=this.activeItemPath.filter(g=>m!==g.key&&m.startsWith(g.key)),this.focusedItemInfo={index:u,level:r,parentKey:l},this.dirty=!a,d.focus(this.menubar)}else if(s)this.onItemChange(e);else{const u=a?n:this.activeItemPath.find(m=>m.parentKey==="");this.hide(t),this.changeFocusedItemIndex(t,u?u.index:-1),this.mobileActive=!1,d.focus(this.menubar)}},onItemMouseEnter(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)},menuButtonClick(e){this.toggle(e)},menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey(e){const t=this.visibleItems[this.focusedItemInfo.index];if(t?f.isEmpty(t.parent):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowRightKey(e));else{const s=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,s),e.preventDefault()}},onArrowUpKey(e){const t=this.visibleItems[this.focusedItemInfo.index];if(f.isEmpty(t.parent)){if(this.isProccessedItemGroup(t)){this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key};const a=this.findLastItemIndex();this.changeFocusedItemIndex(e,a)}}else{const s=this.activeItemPath.find(a=>a.key===t.parentKey);if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:s?s.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(a=>a.parentKey!==this.focusedItemInfo.parentKey);else{const a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a)}}e.preventDefault()},onArrowLeftKey(e){const t=this.visibleItems[this.focusedItemInfo.index],n=t?this.activeItemPath.find(s=>s.key===t.parentKey):null;if(n)this.onItemChange({originalEvent:e,processedItem:n}),this.activeItemPath=this.activeItemPath.filter(s=>s.parentKey!==this.focusedItemInfo.parentKey),e.preventDefault();else{const s=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,s),e.preventDefault()}},onArrowRightKey(e){const t=this.visibleItems[this.focusedItemInfo.index];if(t?this.activeItemPath.find(s=>s.key===t.parentKey):null)this.isProccessedItemGroup(t)&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowDownKey(e));else{const s=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,s),e.preventDefault()}},onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey(e){if(this.focusedItemInfo.index!==-1){const t=d.findSingle(this.menubar,`li[id="${`${this.focusedItemId}`}"]`),n=t&&d.findSingle(t,".p-menuitem-link");n?n.click():t&&t.click();const s=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(s)&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey(e){this.onEnterKey(e)},onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo.index=this.findFirstFocusedItemIndex(),e.preventDefault()},onTabKey(e){if(this.focusedItemInfo.index!==-1){const t=this.visibleItems[this.focusedItemInfo.index];!this.isProccessedItemGroup(t)&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{const t=this.menubar!==e.target&&!this.menubar.contains(e.target),n=this.mobileActive&&this.$refs.menubutton!==e.target&&!this.$refs.menubutton.contains(e.target);t&&(n?this.mobileActive=!1:this.hide())},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener(){this.resizeListener||(this.resizeListener=e=>{d.isTouchDevice()||this.hide(e,!0),this.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)},isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected(e){return this.activeItemPath.some(t=>t.key===e.key)},findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))},findLastItemIndex(){return f.findLastIndex(this.visibleItems,e=>this.isValidItem(e))},findNextItemIndex(e){const t=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(n=>this.isValidItem(n)):-1;return t>-1?t+e+1:e},findPrevItemIndex(e){const t=e>0?f.findLastIndex(this.visibleItems.slice(0,e),n=>this.isValidItem(n)):-1;return t>-1?t:e},findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))},findFirstFocusedItemIndex(){const e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex(){const e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let n=-1,s=!1;return this.focusedItemInfo.index!==-1?(n=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(a=>this.isItemMatched(a)),n=n===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(a=>this.isItemMatched(a)):n+this.focusedItemInfo.index):n=this.visibleItems.findIndex(a=>this.isItemMatched(a)),n!==-1&&(s=!0),n===-1&&this.focusedItemInfo.index===-1&&(n=this.findFirstFocusedItemIndex()),n!==-1&&this.changeFocusedItemIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),s},changeFocusedItemIndex(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView(e=-1){const t=e!==-1?`${this.id}_${e}`:this.focusedItemId,n=d.findSingle(this.menubar,`li[id="${t}"]`);n&&n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems(e,t=0,n={},s=""){const a=[];return e&&e.forEach((i,u)=>{const m=(s!==""?s+"_":"")+u,r={item:i,index:u,level:t,key:m,parent:n,parentKey:s};r.items=this.createProcessedItems(i.items,t+1,r,m),a.push(r)}),a},containerRef(e){this.container=e},menubarRef(e){this.menubar=e?e.$el:void 0}},computed:{containerClass(){return["p-menubar p-component",{"p-menubar-mobile-active":this.mobileActive}]},processedItems(){return this.createProcessedItems(this.model||[])},visibleItems(){const e=this.activeItemPath.find(t=>t.key===this.focusedItemInfo.parentKey);return e?e.items:this.processedItems},id(){return this.$attrs.id||B()},focusedItemId(){return this.focusedItemInfo.index!==-1?`${this.id}${f.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:""}_${this.focusedItemInfo.index}`:null}},components:{MenubarSub:re}};const Ge={key:0,class:"p-menubar-start"},Ze=["aria-haspopup","aria-expanded","aria-controls","aria-label"],Ye=h("i",{class:"pi pi-bars"},null,-1),Xe=[Ye],We={key:2,class:"p-menubar-end"};function qe(e,t,n,s,a,i){const u=y("MenubarSub");return o(),c("div",{ref:i.containerRef,class:b(i.containerClass)},[e.$slots.start?(o(),c("div",Ge,[S(e.$slots,"start")])):p("",!0),n.model&&n.model.length>0?(o(),c("a",z({key:1,ref:"menubutton",role:"button",tabindex:"0",class:"p-menubar-button","aria-haspopup":!!(n.model.length&&n.model.length>0),"aria-expanded":a.mobileActive,"aria-controls":i.id,"aria-label":e.$primevue.config.locale.aria.navigation,onClick:t[0]||(t[0]=m=>i.menuButtonClick(m)),onKeydown:t[1]||(t[1]=m=>i.menuButtonKeydown(m))},n.buttonProps),Xe,16,Ze)):p("",!0),C(u,{ref:i.menubarRef,id:i.id,class:"p-menubar-root-list",role:"menubar",items:i.processedItems,template:e.$slots.item,root:!0,mobileActive:a.mobileActive,tabindex:"0","aria-activedescendant":a.focused?i.focusedItemId:void 0,menuId:i.id,focusedItemId:a.focused?i.focusedItemId:void 0,activeItemPath:a.activeItemPath,exact:n.exact,level:0,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter},null,8,["id","items","template","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","exact","aria-labelledby","aria-label","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),e.$slots.end?(o(),c("div",We,[S(e.$slots,"end")])):p("",!0)],2)}function Je(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&s.firstChild?s.insertBefore(a,s.firstChild):s.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var Qe=`
.p-menubar {
    display: flex;
    align-items: center;
}
.p-menubar ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-menubar .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-menubar .p-menuitem-text {
    line-height: 1;
}
.p-menubar .p-menuitem {
    position: relative;
}
.p-menubar-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.p-menubar-root-list > li ul {
    display: none;
    z-index: 1;
}
.p-menubar-root-list > .p-menuitem-active > .p-submenu-list {
    display: block;
}
.p-menubar .p-submenu-list {
    display: none;
    position: absolute;
    z-index: 1;
}
.p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list {
    display: block;
    left: 100%;
    top: 0;
}
.p-menubar .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
}
.p-menubar .p-menubar-end {
    margin-left: auto;
    align-self: center;
}
.p-menubar-button {
    display: none;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    text-decoration: none;
}
`;Je(Qe);oe.render=qe;function $e(e,t){const{onFocusIn:n,onFocusOut:s}=t.value||{};e.$_pfocustrap_mutationobserver=new MutationObserver(a=>{a.forEach(i=>{if(i.type==="childList"&&!e.contains(document.activeElement)){const u=m=>{const r=d.isFocusableElement(m)?m:d.getFirstFocusableElement(m);return f.isNotEmpty(r)?r:u(m.nextSibling)};d.focus(u(i.nextSibling))}})}),e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_mutationobserver.observe(e,{childList:!0}),e.$_pfocustrap_focusinlistener=a=>n&&n(a),e.$_pfocustrap_focusoutlistener=a=>s&&s(a),e.addEventListener("focusin",e.$_pfocustrap_focusinlistener),e.addEventListener("focusout",e.$_pfocustrap_focusoutlistener)}function te(e){e.$_pfocustrap_mutationobserver&&e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_focusinlistener&&e.removeEventListener("focusin",e.$_pfocustrap_focusinlistener)&&(e.$_pfocustrap_focusinlistener=null),e.$_pfocustrap_focusoutlistener&&e.removeEventListener("focusout",e.$_pfocustrap_focusoutlistener)&&(e.$_pfocustrap_focusoutlistener=null)}function et(e,t){const{autoFocusSelector:n="",firstFocusableSelector:s="",autoFocus:a=!1}=t.value||{};let i=d.getFirstFocusableElement(e,`[autofocus]:not(.p-hidden-focusable)${n}`);a&&!i&&(i=d.getFirstFocusableElement(e,`:not(.p-hidden-focusable)${s}`)),d.focus(i)}function tt(e){const{currentTarget:t,relatedTarget:n}=e,s=n===t.$_pfocustrap_lasthiddenfocusableelement?d.getFirstFocusableElement(t.parentElement,`:not(.p-hidden-focusable)${t.$_pfocustrap_focusableselector}`):t.$_pfocustrap_lasthiddenfocusableelement;d.focus(s)}function it(e){const{currentTarget:t,relatedTarget:n}=e,s=n===t.$_pfocustrap_firsthiddenfocusableelement?d.getLastFocusableElement(t.parentElement,`:not(.p-hidden-focusable)${t.$_pfocustrap_focusableselector}`):t.$_pfocustrap_firsthiddenfocusableelement;d.focus(s)}function nt(e,t){const{tabIndex:n=0,firstFocusableSelector:s="",lastFocusableSelector:a=""}=t.value||{},i=r=>{const l=document.createElement("span");return l.classList="p-hidden-accessible p-hidden-focusable",l.tabIndex=n,l.setAttribute("aria-hidden","true"),l.setAttribute("role","presentation"),l.addEventListener("focus",r),l},u=i(tt),m=i(it);u.$_pfocustrap_lasthiddenfocusableelement=m,u.$_pfocustrap_focusableselector=s,m.$_pfocustrap_firsthiddenfocusableelement=u,m.$_pfocustrap_focusableselector=a,e.prepend(u),e.append(m)}const G={mounted(e,t){const{disabled:n}=t.value||{};n||(nt(e,t),$e(e,t),et(e,t))},updated(e,t){const{disabled:n}=t.value||{};n&&te(e)},unmounted(e){te(e)}};var de={name:"OverlayPanel",inheritAttrs:!1,emits:["show","hide"],props:{dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!1},appendTo:{type:String,default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null}},data(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler(e){e?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,beforeUnmount(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&P.clear(this.container),this.overlayEventListener&&(N.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{toggle(e,t){this.visible?this.hide():this.show(e,t)},show(e,t){this.visible=!0,this.eventTarget=e.currentTarget,this.target=t||e.currentTarget},hide(){this.visible=!1,d.focus(this.target)},onContentClick(){this.selfClick=!0},onEnter(e){this.container.setAttribute(this.attributeSelector,""),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&P.set("overlay",e,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=t=>{this.container.contains(t.target)&&(this.selfClick=!0)},this.focus(),N.on("overlay-click",this.overlayEventListener),this.$emit("show")},onLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),N.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave(e){this.autoZIndex&&P.clear(e)},alignOverlay(){d.absolutePosition(this.container,this.target);const e=d.getOffset(this.container),t=d.getOffset(this.target);let n=0;e.left<t.left&&(n=t.left-e.left),this.container.style.setProperty("--overlayArrowLeft",`${n}px`),e.top<t.top&&d.addClass(this.container,"p-overlaypanel-flipped")},onContentKeydown(e){e.code==="Escape"&&this.hide()},onButtonKeydown(e){switch(e.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":e.preventDefault()}},focus(){let e=this.container.querySelector("[autofocus]");e&&e.focus()},bindOutsideClickListener(){!this.outsideClickListener&&d.isClient()&&(this.outsideClickListener=e=>{this.visible&&!this.selfClick&&!this.isTargetClicked(e)&&(this.visible=!1),this.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new ie(this.target,()=>{this.visible&&(this.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.visible&&!d.isTouchDevice()&&(this.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked(e){return this.eventTarget&&(this.eventTarget===e.target||this.eventTarget.contains(e.target))},containerRef(e){this.container=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-overlaypanel[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick(e){N.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{containerClass(){return["p-overlaypanel p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},attributeSelector(){return B()},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:G,ripple:T},components:{Portal:j}};const st=["aria-modal"],at=["aria-label"],lt=h("span",{class:"p-overlaypanel-close-icon pi pi-times"},null,-1),rt=[lt];function ot(e,t,n,s,a,i){const u=y("Portal"),m=A("ripple"),r=A("focustrap");return o(),k(u,{appendTo:n.appendTo},{default:v(()=>[C(H,{name:"p-overlaypanel",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},{default:v(()=>[a.visible?w((o(),c("div",z({key:0,ref:i.containerRef,role:"dialog",class:i.containerClass,"aria-modal":a.visible,onClick:t[5]||(t[5]=(...l)=>i.onOverlayClick&&i.onOverlayClick(...l))},e.$attrs),[h("div",{class:"p-overlaypanel-content",onClick:t[0]||(t[0]=(...l)=>i.onContentClick&&i.onContentClick(...l)),onMousedown:t[1]||(t[1]=(...l)=>i.onContentClick&&i.onContentClick(...l)),onKeydown:t[2]||(t[2]=(...l)=>i.onContentKeydown&&i.onContentKeydown(...l))},[S(e.$slots,"default")],32),n.showCloseIcon?w((o(),c("button",{key:0,class:"p-overlaypanel-close p-link","aria-label":i.closeAriaLabel,type:"button",autofocus:"",onClick:t[3]||(t[3]=(...l)=>i.hide&&i.hide(...l)),onKeydown:t[4]||(t[4]=(...l)=>i.onButtonKeydown&&i.onButtonKeydown(...l))},rt,40,at)),[[m]]):p("",!0)],16,st)),[[r]]):p("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])]),_:3},8,["appendTo"])}function dt(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&s.firstChild?s.insertBefore(a,s.firstChild):s.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var ct=`
.p-overlaypanel {
    position: absolute;
    margin-top: 10px;
    top: 0;
    left: 0;
}
.p-overlaypanel-flipped {
    margin-top: 0;
    margin-bottom: 10px;
}
.p-overlaypanel-close {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}

/* Animation */
.p-overlaypanel-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}
.p-overlaypanel-leave-to {
    opacity: 0;
}
.p-overlaypanel-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}
.p-overlaypanel-leave-active {
    transition: opacity 0.1s linear;
}
.p-overlaypanel:after,
.p-overlaypanel:before {
    bottom: 100%;
    left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}
.p-overlaypanel:after {
    border-width: 8px;
    margin-left: -8px;
}
.p-overlaypanel:before {
    border-width: 10px;
    margin-left: -10px;
}
.p-overlaypanel-flipped:after,
.p-overlaypanel-flipped:before {
    bottom: auto;
    top: 100%;
}
.p-overlaypanel.p-overlaypanel-flipped:after {
    border-bottom-color: transparent;
}
.p-overlaypanel.p-overlaypanel-flipped:before {
    border-bottom-color: transparent;
}
`;dt(ct);de.render=ot;var ce={name:"Avatar",emits:["error"],props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},methods:{onError(){this.$emit("error")}},computed:{containerClass(){return["p-avatar p-component",{"p-avatar-image":this.image!=null,"p-avatar-circle":this.shape==="circle","p-avatar-lg":this.size==="large","p-avatar-xl":this.size==="xlarge"}]},iconClass(){return["p-avatar-icon",this.icon]}}};const ut=["aria-labelledby","aria-label"],mt={key:0,class:"p-avatar-text"},ht=["src"];function ft(e,t,n,s,a,i){return o(),c("div",{class:b(i.containerClass),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},[S(e.$slots,"default",{},()=>[n.label?(o(),c("span",mt,E(n.label),1)):n.icon?(o(),c("span",{key:1,class:b(i.iconClass)},null,2)):n.image?(o(),c("img",{key:2,src:n.image,onError:t[0]||(t[0]=(...u)=>i.onError&&i.onError(...u))},null,40,ht)):p("",!0)])],10,ut)}function pt(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&s.firstChild?s.insertBefore(a,s.firstChild):s.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var bt=`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
}
.p-avatar.p-avatar-image {
    background-color: transparent;
}
.p-avatar.p-avatar-circle {
    border-radius: 50%;
}
.p-avatar-circle img {
    border-radius: 50%;
}
.p-avatar .p-avatar-icon {
    font-size: 1rem;
}
.p-avatar img {
    width: 100%;
    height: 100%;
}
`;pt(bt);ce.render=ft;var ue={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","after-hide","maximize","unmaximize","dragend"],props:{header:{type:null,default:null},footer:{type:null,default:null},visible:{type:Boolean,default:!1},modal:{type:Boolean,default:null},contentStyle:{type:null,default:null},contentClass:{type:String,default:null},contentProps:{type:null,default:null},rtl:{type:Boolean,default:null},maximizable:{type:Boolean,default:!1},dismissableMask:{type:Boolean,default:!1},closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"},closeIcon:{type:String,default:"pi pi-times"},maximizeIcon:{type:String,default:"pi pi-window-maximize"},minimizeIcon:{type:String,default:"pi pi-window-minimize"},closeButtonProps:{type:null,default:null},_instance:null},provide(){return{dialogRef:ge(()=>this._instance)}},data(){return{containerVisible:this.visible,maximized:!1,focusable:!1}},documentKeydownListener:null,container:null,mask:null,content:null,headerContainer:null,footerContainer:null,maximizableButton:null,closeButton:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask&&this.autoZIndex&&P.clear(this.mask),this.container=null,this.mask=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(e){e.setAttribute(this.attributeSelector,"")},onEnter(){this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners(),this.autoZIndex&&P.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal)},onBeforeLeave(){this.modal&&d.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide"),this.focusable=!1},onAfterLeave(){this.autoZIndex&&P.clear(this.mask),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners(),this.$emit("after-hide")},onMaskClick(e){this.dismissableMask&&this.closable&&this.modal&&this.mask===e.target&&this.close()},focus(){const e=n=>n.querySelector("[autofocus]");let t=this.$slots.footer&&e(this.footerContainer);t||(t=this.$slots.header&&e(this.headerContainer),t||(t=this.$slots.default&&e(this.content),t||(t=e(this.container)))),t&&(this.focusable=!0,t.focus())},maximize(e){this.maximized?(this.maximized=!1,this.$emit("unmaximize",e)):(this.maximized=!0,this.$emit("maximize",e)),this.modal||(this.maximized?d.addClass(document.body,"p-overflow-hidden"):d.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&d.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&d.removeClass(document.body,"p-overflow-hidden")},onKeyDown(e){e.code==="Escape"&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const t=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return t?`p-dialog-${t}`:""},containerRef(e){this.container=e},maskRef(e){this.mask=e},contentRef(e){this.content=e},headerContainerRef(e){this.headerContainer=e},footerContainerRef(e){this.footerContainer=e},maximizableRef(e){this.maximizableButton=e},closeButtonRef(e){this.closeButton=e},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e="";for(let t in this.breakpoints)e+=`
                        @media screen and (max-width: ${t}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[t]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(e){d.hasClass(e.target,"p-dialog-header-icon")||d.hasClass(e.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",d.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=e=>{if(this.dragging){let t=d.getOuterWidth(this.container),n=d.getOuterHeight(this.container),s=e.pageX-this.lastPageX,a=e.pageY-this.lastPageY,i=this.container.getBoundingClientRect(),u=i.left+s,m=i.top+a,r=d.getViewport();this.container.style.position="fixed",this.keepInViewport?(u>=this.minX&&u+t<r.width&&(this.lastPageX=e.pageX,this.container.style.left=u+"px"),m>=this.minY&&m+n<r.height&&(this.lastPageY=e.pageY,this.container.style.top=m+"px")):(this.lastPageX=e.pageX,this.container.style.left=u+"px",this.lastPageY=e.pageY,this.container.style.top=m+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=e=>{this.dragging&&(this.dragging=!1,d.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",e))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon",{[this.maximizeIcon]:!this.maximized,[this.minimizeIcon]:this.maximized}]},ariaId(){return B()},ariaLabelledById(){return this.header!=null||this.$attrs["aria-labelledby"]!==null?this.ariaId+"_header":null},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},attributeSelector(){return B()},contentStyleClass(){return["p-dialog-content",this.contentClass]}},directives:{ripple:T,focustrap:G},components:{Portal:j}};const gt=["aria-labelledby","aria-modal"],It=["id"],yt={class:"p-dialog-header-icons"},vt=["autofocus","tabindex"],kt=["autofocus","aria-label"];function xt(e,t,n,s,a,i){const u=y("Portal"),m=A("ripple"),r=A("focustrap");return o(),k(u,{appendTo:n.appendTo},{default:v(()=>[a.containerVisible?(o(),c("div",{key:0,ref:i.maskRef,class:b(i.maskClass),onClick:t[3]||(t[3]=(...l)=>i.onMaskClick&&i.onMaskClick(...l))},[C(H,{name:"p-dialog",onBeforeEnter:i.onBeforeEnter,onEnter:i.onEnter,onBeforeLeave:i.onBeforeLeave,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},{default:v(()=>[n.visible?w((o(),c("div",z({key:0,ref:i.containerRef,class:i.dialogClass,role:"dialog","aria-labelledby":i.ariaLabelledById,"aria-modal":n.modal},e.$attrs),[n.showHeader?(o(),c("div",{key:0,ref:i.headerContainerRef,class:"p-dialog-header",onMousedown:t[2]||(t[2]=(...l)=>i.initDrag&&i.initDrag(...l))},[S(e.$slots,"header",{},()=>[n.header?(o(),c("span",{key:0,id:i.ariaLabelledById,class:"p-dialog-title"},E(n.header),9,It)):p("",!0)]),h("div",yt,[n.maximizable?w((o(),c("button",{key:0,ref:i.maximizableRef,autofocus:a.focusable,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:t[0]||(t[0]=(...l)=>i.maximize&&i.maximize(...l)),type:"button",tabindex:n.maximizable?"0":"-1"},[h("span",{class:b(i.maximizeIconClass)},null,2)],8,vt)),[[m]]):p("",!0),n.closable?w((o(),c("button",z({key:1,ref:i.closeButtonRef,autofocus:a.focusable,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:t[1]||(t[1]=(...l)=>i.close&&i.close(...l)),"aria-label":i.closeAriaLabel,type:"button"},n.closeButtonProps),[h("span",{class:b(["p-dialog-header-close-icon",n.closeIcon])},null,2)],16,kt)),[[m]]):p("",!0)])],544)):p("",!0),h("div",z({ref:i.contentRef,class:i.contentStyleClass,style:n.contentStyle},n.contentProps),[S(e.$slots,"default")],16),n.footer||e.$slots.footer?(o(),c("div",{key:1,ref:i.footerContainerRef,class:"p-dialog-footer"},[S(e.$slots,"footer",{},()=>[ne(E(n.footer),1)])],512)):p("",!0)],16,gt)),[[r,{disabled:!n.modal}]]):p("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):p("",!0)]),_:3},8,["appendTo"])}function Ct(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&s.firstChild?s.insertBefore(a,s.firstChild):s.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var Lt=`
.p-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}
.p-dialog-mask.p-component-overlay {
    pointer-events: auto;
}
.p-dialog {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    max-height: 90%;
    transform: scale(1);
}
.p-dialog-content {
    overflow-y: auto;
}
.p-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
}
.p-dialog-footer {
    flex-shrink: 0;
}
.p-dialog .p-dialog-header-icons {
    display: flex;
    align-items: center;
}
.p-dialog .p-dialog-header-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Fluid */
.p-fluid .p-dialog-footer .p-button {
    width: auto;
}

/* Animation */
/* Center */
.p-dialog-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

/* Top, Bottom, Left, Right, Top* and Bottom* */
.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: 0.75rem;
    transform: translate3d(0px, 0px, 0px);
}
.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    transition: all 0.3s ease-out;
}
.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    transform: translate3d(0px, -100%, 0px);
}
.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    transform: translate3d(0px, 100%, 0px);
}
.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    transform: translate3d(-100%, 0px, 0px);
}
.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
}
.p-dialog-maximized .p-dialog-content {
    flex-grow: 1;
}

/* Position */
.p-dialog-left {
    justify-content: flex-start;
}
.p-dialog-right {
    justify-content: flex-end;
}
.p-dialog-top {
    align-items: flex-start;
}
.p-dialog-topleft {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-dialog-topright {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-dialog-bottom {
    align-items: flex-end;
}
.p-dialog-bottomleft {
    justify-content: flex-start;
    align-items: flex-end;
}
.p-dialog-bottomright {
    justify-content: flex-end;
    align-items: flex-end;
}
.p-confirm-dialog .p-dialog-content {
    display: flex;
    align-items: center;
}
`;Ct(Lt);ue.render=xt;var me={name:"Sidebar",inheritAttrs:!1,emits:["update:visible","show","hide"],props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeIcon:{type:String,default:"pi pi-times"},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0}},container:null,content:null,headerContainer:null,closeButton:null,outsideClickListener:null,data(){return{maskVisible:!1}},watch:{visible(e){this.maskVisible=e||this.maskVisible}},beforeUnmount(){this.container&&this.autoZIndex&&P.clear(this.container),this.unbindOutsideClickListener(),this.container=null},methods:{hide(){this.$emit("update:visible",!1),this.unbindOutsideClickListener(),this.blockScroll&&d.removeClass(document.body,"p-overflow-hidden")},onEnter(){this.$emit("show"),this.autoZIndex&&P.set("modal",this.$refs.mask,this.baseZIndex||this.$primevue.config.zIndex.modal),this.maskVisible=!0,this.focus()},onLeave(){d.addClass(this.$refs.mask,"p-component-overlay-leave"),this.$emit("hide"),this.unbindOutsideClickListener()},onAfterLeave(){this.autoZIndex&&P.clear(this.mask),this.maskVisible=!1},onAfterEnter(){this.bindOutsideClickListener(),this.blockScroll&&d.addClass(document.body,"p-overflow-hidden")},focus(){const e=n=>n.querySelector("[autofocus]");let t=this.$slots.default&&e(this.content);t||(t=this.$slots.header&&e(this.headerContainer),t||(t=e(this.container))),t&&t.focus()},onKeydown(e){e.code==="Escape"&&this.hide()},onMaskClick(e){this.dismissable&&this.modal&&this.$refs.mask===e.target&&this.hide()},containerRef(e){this.container=e},contentRef(e){this.content=e},headerContainerRef(e){this.headerContainer=e},closeButtonRef(e){this.closeButton=e},getPositionClass(){const t=["left","right","top","bottom"].find(n=>n===this.position);return t?`p-sidebar-${t}`:""},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{!this.modal&&this.isOutsideClicked(e)&&this.dismissable&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},isOutsideClicked(e){return this.container&&!this.container.contains(e.target)}},computed:{containerClass(){return["p-sidebar p-component",{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1,"p-sidebar-full":this.fullScreen}]},fullScreen(){return this.position==="full"},closeAriaLabel(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},maskClasses(){return["p-sidebar-mask",this.getPositionClass(),{"p-component-overlay p-component-overlay-enter":this.modal,"p-sidebar-mask-scrollblocker":this.blockScroll,"p-sidebar-visible":this.maskVisible,"p-sidebar-full":this.fullScreen}]}},directives:{focustrap:G,ripple:T},components:{Portal:j}};const wt=["aria-modal"],Et={key:0,class:"p-sidebar-header-content"},Pt=["aria-label"];function _t(e,t,n,s,a,i){const u=y("Portal"),m=A("ripple"),r=A("focustrap");return o(),k(u,null,{default:v(()=>[h("div",{ref:"mask",style:{},class:b(i.maskClasses),onMousedown:t[2]||(t[2]=(...l)=>i.onMaskClick&&i.onMaskClick(...l))},[C(H,{name:"p-sidebar",onAfterEnter:i.onAfterEnter,onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave,appear:""},{default:v(()=>[n.visible?w((o(),c("div",z({key:0,ref:i.containerRef,class:i.containerClass,role:"complementary","aria-modal":n.modal,onKeydown:t[1]||(t[1]=(...l)=>i.onKeydown&&i.onKeydown(...l))},e.$attrs),[h("div",{ref:i.headerContainerRef,class:"p-sidebar-header"},[e.$slots.header?(o(),c("div",Et,[S(e.$slots,"header")])):p("",!0),n.showCloseIcon?w((o(),c("button",{key:1,ref:i.closeButtonRef,autofocus:"",type:"button",class:"p-sidebar-close p-sidebar-icon p-link","aria-label":i.closeAriaLabel,onClick:t[0]||(t[0]=(...l)=>i.hide&&i.hide(...l))},[h("span",{class:b(["p-sidebar-close-icon",n.closeIcon])},null,2)],8,Pt)),[[m]]):p("",!0)],512),h("div",{ref:i.contentRef,class:"p-sidebar-content"},[S(e.$slots,"default")],512)],16,wt)),[[r]]):p("",!0)]),_:3},8,["onAfterEnter","onEnter","onLeave","onAfterLeave"])],34)]),_:3})}function St(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&s.firstChild?s.insertBefore(a,s.firstChild):s.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var At=`
.p-sidebar-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    background-color: transparent;
    transition-property: background-color;
}
.p-sidebar-visible {
    display: flex;
}
.p-sidebar-mask.p-component-overlay {
    pointer-events: auto;
}
.p-sidebar {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: relative;
    transition: transform 0.3s;
}
.p-sidebar-content {
    overflow-y: auto;
    flex-grow: 1;
}
.p-sidebar-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-shrink: 0;
}
.p-sidebar-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}
.p-sidebar-full .p-sidebar {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
}

/* Animation */
/* Center */
.p-sidebar-left .p-sidebar-enter-from,
.p-sidebar-left .p-sidebar-leave-to {
    transform: translateX(-100%);
}
.p-sidebar-right .p-sidebar-enter-from,
.p-sidebar-right .p-sidebar-leave-to {
    transform: translateX(100%);
}
.p-sidebar-top .p-sidebar-enter-from,
.p-sidebar-top .p-sidebar-leave-to {
    transform: translateY(-100%);
}
.p-sidebar-bottom .p-sidebar-enter-from,
.p-sidebar-bottom .p-sidebar-leave-to {
    transform: translateY(100%);
}
.p-sidebar-full .p-sidebar-enter-from,
.p-sidebar-full .p-sidebar-leave-to {
    opacity: 0;
}
.p-sidebar-full .p-sidebar-enter-active,
.p-sidebar-full .p-sidebar-leave-active {
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Position */
.p-sidebar-left {
    justify-content: flex-start;
}
.p-sidebar-right {
    justify-content: flex-end;
}
.p-sidebar-top {
    align-items: flex-start;
}
.p-sidebar-bottom {
    align-items: flex-end;
}

/* Size */
.p-sidebar-left .p-sidebar {
    width: 20rem;
    height: 100%;
}
.p-sidebar-right .p-sidebar {
    width: 20rem;
    height: 100%;
}
.p-sidebar-top .p-sidebar {
    height: 10rem;
    width: 100%;
}
.p-sidebar-bottom .p-sidebar {
    height: 10rem;
    width: 100%;
}
.p-sidebar-left .p-sidebar-sm,
.p-sidebar-right .p-sidebar-sm {
    width: 20rem;
}
.p-sidebar-left .p-sidebar-md,
.p-sidebar-right .p-sidebar-md {
    width: 40rem;
}
.p-sidebar-left .p-sidebar-lg,
.p-sidebar-right .p-sidebar-lg {
    width: 60rem;
}
.p-sidebar-top .p-sidebar-sm,
.p-sidebar-bottom .p-sidebar-sm {
    height: 10rem;
}
.p-sidebar-top .p-sidebar-md,
.p-sidebar-bottom .p-sidebar-md {
    height: 20rem;
}
.p-sidebar-top .p-sidebar-lg,
.p-sidebar-bottom .p-sidebar-lg {
    height: 30rem;
}
.p-sidebar-left .p-sidebar-view,
.p-sidebar-right .p-sidebar-view,
.p-sidebar-top .p-sidebar-view,
.p-sidebar-bottom .p-sidebar-view {
    width: 100%;
    height: 100%;
}
.p-sidebar-left .p-sidebar-content,
.p-sidebar-right .p-sidebar-content,
.p-sidebar-top .p-sidebar-content,
.p-sidebar-bottom .p-sidebar-content {
    width: 100%;
    height: 100%;
}
@media screen and (max-width: 64em) {
.p-sidebar-left .p-sidebar-lg,
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-md {
        width: 20rem;
}
}
`;St(At);me.render=_t;var he={name:"PanelMenuSub",emits:["item-toggle"],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},template:{type:Function,default:null},activeItemPath:{type:Object,default:null},exact:{type:Boolean,default:!0}},methods:{getItemId(e){return`${this.panelId}_${e.key}`},getItemKey(e){return this.getItemId(e)},getItemProp(e,t,n){return e&&e.item?f.getItemValue(e.item[t],n):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemActive(e){return this.activeItemPath.some(t=>t.key===e.key)},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemFocused(e){return this.focusedItemId===this.getItemId(e)},isItemGroup(e){return f.isNotEmpty(e.items)},onItemClick(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-toggle",{processedItem:t,expanded:!this.isItemActive(t)})},onItemToggle(e){this.$emit("item-toggle",e)},onItemActionClick(e,t){t&&t(e)},getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length},getAriaPosInset(e){return e-this.items.slice(0,e).filter(t=>this.isItemVisible(t)&&this.getItemProp(t,"separator")).length+1},getItemClass(e){return["p-menuitem",this.getItemProp(e,"class"),{"p-focus":this.isItemFocused(e),"p-disabled":this.isItemDisabled(e)}]},getItemActionClass(e,t){return["p-menuitem-link",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},getItemIconClass(e){return["p-menuitem-icon",this.getItemProp(e,"icon")]},getItemToggleIconClass(e){return["p-submenu-icon",this.isItemActive(e)?"pi pi-fw pi-chevron-down":"pi pi-fw pi-chevron-right"]},getSeparatorItemClass(e){return["p-menuitem-separator",this.getItemProp(e,"class")]}},directives:{ripple:T}};const Kt={class:"p-submenu-list"},Dt=["id","aria-label","aria-expanded","aria-level","aria-setsize","aria-posinset"],Ot=["onClick"],zt=["href","onClick"],Ft={class:"p-menuitem-text"},Bt=["href","target"],Tt={class:"p-menuitem-text"},Ht={class:"p-toggleable-content"};function Vt(e,t,n,s,a,i){const u=y("router-link"),m=y("PanelMenuSub",!0),r=A("ripple");return o(),c("ul",Kt,[(o(!0),c(L,null,M(n.items,(l,g)=>(o(),c(L,{key:i.getItemKey(l)},[i.isItemVisible(l)&&!i.getItemProp(l,"separator")?(o(),c("li",{key:0,id:i.getItemId(l),style:D(i.getItemProp(l,"style")),class:b(i.getItemClass(l)),role:"treeitem","aria-label":i.getItemLabel(l),"aria-expanded":i.isItemGroup(l)?i.isItemActive(l):void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(g)},[h("div",{class:"p-menuitem-content",onClick:I=>i.onItemClick(I,l)},[n.template?(o(),k(U(n.template),{key:1,item:l.item},null,8,["item"])):(o(),c(L,{key:0},[i.getItemProp(l,"to")&&!i.isItemDisabled(l)?(o(),k(u,{key:0,to:i.getItemProp(l,"to"),custom:""},{default:v(({navigate:I,href:_,isActive:x,isExactActive:K})=>[w((o(),c("a",{href:_,class:b(i.getItemActionClass(l,{isActive:x,isExactActive:K})),tabindex:"-1","aria-hidden":"true",onClick:F=>i.onItemActionClick(F,I)},[i.getItemProp(l,"icon")?(o(),c("span",{key:0,class:b(i.getItemIconClass(l))},null,2)):p("",!0),h("span",Ft,E(i.getItemLabel(l)),1)],10,zt)),[[r]])]),_:2},1032,["to"])):w((o(),c("a",{key:1,href:i.getItemProp(l,"url"),class:b(i.getItemActionClass(l)),target:i.getItemProp(l,"target"),tabindex:"-1","aria-hidden":"true"},[i.isItemGroup(l)?(o(),c("span",{key:0,class:b(i.getItemToggleIconClass(l))},null,2)):p("",!0),i.getItemProp(l,"icon")?(o(),c("span",{key:1,class:b(i.getItemIconClass(l))},null,2)):p("",!0),h("span",Tt,E(i.getItemLabel(l)),1)],10,Bt)),[[r]])],64))],8,Ot),C(H,{name:"p-toggleable-content"},{default:v(()=>[w(h("div",Ht,[i.isItemVisible(l)&&i.isItemGroup(l)?(o(),k(m,{key:0,id:i.getItemId(l)+"_list",role:"group",panelId:n.panelId,focusedItemId:n.focusedItemId,items:l.items,level:n.level+1,template:n.template,activeItemPath:n.activeItemPath,exact:n.exact,onItemToggle:i.onItemToggle},null,8,["id","panelId","focusedItemId","items","level","template","activeItemPath","exact","onItemToggle"])):p("",!0)],512),[[se,i.isItemActive(l)]])]),_:2},1024)],14,Dt)):p("",!0),i.isItemVisible(l)&&i.getItemProp(l,"separator")?(o(),c("li",{key:1,style:D(i.getItemProp(l,"style")),class:b(i.getSeparatorItemClass(l)),role:"separator"},null,6)):p("",!0)],64))),128))])}he.render=Vt;var fe={name:"PanelMenuList",emits:["item-toggle","header-focus"],props:{panelId:{type:String,default:null},items:{type:Array,default:null},template:{type:Function,default:null},expandedKeys:{type:Object,default:null},exact:{type:Boolean,default:!0}},searchTimeout:null,searchValue:null,data(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys(e){this.autoUpdateActiveItemPath(e)}},mounted(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp(e,t){return e&&e.item?f.getItemValue(e.item[t]):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},isItemActive(e){return this.activeItemPath.some(t=>t.key===e.parentKey)},isItemGroup(e){return f.isNotEmpty(e.items)},onFocus(e){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(e,e.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur(){this.focused=!1,this.focusedItem=null,this.searchValue=""},onKeyDown(e){const t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&f.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onArrowDownKey(e){const t=f.isNotEmpty(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:t,focusOnNext:!0}),e.preventDefault()},onArrowUpKey(e){const t=f.isNotEmpty(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:t,selfCheck:!0}),e.preventDefault()},onArrowLeftKey(e){f.isNotEmpty(this.focusedItem)&&(this.activeItemPath.some(n=>n.key===this.focusedItem.key)?this.activeItemPath=this.activeItemPath.filter(n=>n.key!==this.focusedItem.key):this.focusedItem=f.isNotEmpty(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,e.preventDefault())},onArrowRightKey(e){f.isNotEmpty(this.focusedItem)&&(this.isItemGroup(this.focusedItem)&&(this.activeItemPath.some(s=>s.key===this.focusedItem.key)?this.onArrowDownKey(e):(this.activeItemPath=this.activeItemPath.filter(s=>s.parentKey!==this.focusedItem.parentKey),this.activeItemPath.push(this.focusedItem))),e.preventDefault())},onHomeKey(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()},onEndKey(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()},onEnterKey(e){if(f.isNotEmpty(this.focusedItem)){const t=d.findSingle(this.$el,`li[id="${`${this.focusedItemId}`}"]`),n=t&&d.findSingle(t,".p-menuitem-link");n?n.click():t&&t.click()}e.preventDefault()},onSpaceKey(e){this.onEnterKey(e)},onItemToggle(e){const{processedItem:t,expanded:n}=e;this.expandedKeys?this.$emit("item-toggle",{item:t.item,expanded:n}):(this.activeItemPath=this.activeItemPath.filter(s=>s.parentKey!==t.parentKey),n&&this.activeItemPath.push(t)),this.focusedItem=t,d.focus(this.$el)},isElementInPanel(e,t){const n=e.currentTarget.closest(".p-panelmenu-panel");return n&&n.contains(t)},isItemMatched(e){return this.isValidItem(e)&&this.getItemLabel(e).toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale))},isVisibleItem(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)},isValidItem(e){return!!e&&!this.isItemDisabled(e)},findFirstItem(){return this.visibleItems.find(e=>this.isValidItem(e))},findLastItem(){return f.findLast(this.visibleItems,e=>this.isValidItem(e))},findNextItem(e){const t=this.visibleItems.findIndex(s=>s.key===e.key);return(t<this.visibleItems.length-1?this.visibleItems.slice(t+1).find(s=>this.isValidItem(s)):void 0)||e},findPrevItem(e){const t=this.visibleItems.findIndex(s=>s.key===e.key);return(t>0?f.findLast(this.visibleItems.slice(0,t),s=>this.isValidItem(s)):void 0)||e},searchItems(e,t){this.searchValue=(this.searchValue||"")+t;let n=null,s=!1;if(f.isNotEmpty(this.focusedItem)){const a=this.visibleItems.findIndex(i=>i.key===this.focusedItem.key);n=this.visibleItems.slice(a).find(i=>this.isItemMatched(i)),n=f.isEmpty(n)?this.visibleItems.slice(0,a).find(i=>this.isItemMatched(i)):n}else n=this.visibleItems.find(a=>this.isItemMatched(a));return f.isNotEmpty(n)&&(s=!0),f.isEmpty(n)&&f.isEmpty(this.focusedItem)&&(n=this.findFirstItem()),f.isNotEmpty(n)&&this.changeFocusedItem({originalEvent:e,processedItem:n,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),s},changeFocusedItem(e){const{originalEvent:t,processedItem:n,focusOnNext:s,selfCheck:a,allowHeaderFocus:i=!0}=e;f.isNotEmpty(this.focusedItem)&&this.focusedItem.key!==n.key?(this.focusedItem=n,this.scrollInView()):i&&this.$emit("header-focus",{originalEvent:t,focusOnNext:s,selfCheck:a})},scrollInView(){const e=d.findSingle(this.$el,`li[id="${`${this.focusedItemId}`}"]`);e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"start"})},autoUpdateActiveItemPath(e){this.activeItemPath=Object.entries(e||{}).reduce((t,[n,s])=>{if(s){const a=this.findProcessedItemByItemKey(n);a&&t.push(a)}return t},[])},findProcessedItemByItemKey(e,t,n=0){if(t=t||n===0&&this.processedItems,!t)return null;for(let s=0;s<t.length;s++){const a=t[s];if(this.getItemProp(a,"key")===e)return a;const i=this.findProcessedItemByItemKey(e,a.items,n+1);if(i)return i}},createProcessedItems(e,t=0,n={},s=""){const a=[];return e&&e.forEach((i,u)=>{const m=(s!==""?s+"_":"")+u,r={item:i,index:u,level:t,key:m,parent:n,parentKey:s};r.items=this.createProcessedItems(i.items,t+1,r,m),a.push(r)}),a},flatItems(e,t=[]){return e&&e.forEach(n=>{this.isVisibleItem(n)&&(t.push(n),this.flatItems(n.items,t))}),t}},computed:{processedItems(){return this.createProcessedItems(this.items||[])},visibleItems(){return this.flatItems(this.processedItems)},focusedItemId(){return f.isNotEmpty(this.focusedItem)?`${this.panelId}_${this.focusedItem.key}`:null}},components:{PanelMenuSub:he}};function Nt(e,t,n,s,a,i){const u=y("PanelMenuSub");return o(),k(u,{id:n.panelId+"_list",class:"p-panelmenu-root-list",role:"tree",tabindex:-1,"aria-activedescendant":a.focused?i.focusedItemId:void 0,panelId:n.panelId,focusedItemId:a.focused?i.focusedItemId:void 0,items:i.processedItems,template:n.template,activeItemPath:a.activeItemPath,exact:n.exact,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemToggle:i.onItemToggle},null,8,["id","aria-activedescendant","panelId","focusedItemId","items","template","activeItemPath","exact","onFocus","onBlur","onKeydown","onItemToggle"])}fe.render=Nt;var pe={name:"PanelMenu",emits:["update:expandedKeys","panel-open","panel-close"],props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},exact:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},data(){return{activeItem:null}},methods:{getItemProp(e,t){return e?f.getItemValue(e[t]):void 0},getItemLabel(e){return this.getItemProp(e,"label")},isItemActive(e){return this.expandedKeys?this.expandedKeys[this.getItemProp(e,"key")]:f.equals(e,this.activeItem)},isItemVisible(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled(e){return this.getItemProp(e,"disabled")},getPanelId(e){return`${this.id}_${e}`},getPanelKey(e){return this.getPanelId(e)},getHeaderId(e){return`${this.getPanelId(e)}_header`},getContentId(e){return`${this.getPanelId(e)}_content`},onHeaderClick(e,t){if(this.isItemDisabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.changeActiveItem(e,t),d.focus(e.currentTarget)},onHeaderKeyDown(e,t){switch(e.code){case"ArrowDown":this.onHeaderArrowDownKey(e);break;case"ArrowUp":this.onHeaderArrowUpKey(e);break;case"Home":this.onHeaderHomeKey(e);break;case"End":this.onHeaderEndKey(e);break;case"Enter":case"Space":this.onHeaderEnterKey(e,t);break}},onHeaderArrowDownKey(e){const t=d.hasClass(e.currentTarget,"p-highlight")?d.findSingle(e.currentTarget.nextElementSibling,".p-panelmenu-root-list"):null;t?d.focus(t):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()},onHeaderArrowUpKey(e){const t=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),n=d.hasClass(t,"p-highlight")?d.findSingle(t.nextElementSibling,".p-panelmenu-root-list"):null;n?d.focus(n):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()},onHeaderHomeKey(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()},onHeaderEndKey(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()},onHeaderEnterKey(e,t){const n=d.findSingle(e.currentTarget,".p-panelmenu-header-action");n?n.click():this.onHeaderClick(e,t),e.preventDefault()},onHeaderActionClick(e,t){t&&t(e)},findNextHeader(e,t=!1){const n=t?e:e.nextElementSibling,s=d.findSingle(n,".p-panelmenu-header");return s?d.hasClass(s,"p-disabled")?this.findNextHeader(s.parentElement):s:null},findPrevHeader(e,t=!1){const n=t?e:e.previousElementSibling,s=d.findSingle(n,".p-panelmenu-header");return s?d.hasClass(s,"p-disabled")?this.findPrevHeader(s.parentElement):s:null},findFirstHeader(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader(e){const{originalEvent:t,focusOnNext:n,selfCheck:s}=e,a=t.currentTarget.closest(".p-panelmenu-panel"),i=s?d.findSingle(a,".p-panelmenu-header"):n?this.findNextHeader(a):this.findPrevHeader(a);i?this.changeFocusedHeader(t,i):n?this.onHeaderHomeKey(t):this.onHeaderEndKey(t)},changeActiveItem(e,t,n=!1){if(!this.isItemDisabled(t)){const s=this.isItemActive(t),a=s?"panel-close":"panel-open";this.activeItem=n?t:this.activeItem&&f.equals(t,this.activeItem)?null:t,this.changeExpandedKeys({item:t,expanded:!s}),this.$emit(a,{originalEvent:e,item:t})}},changeExpandedKeys({item:e,expanded:t=!1}){if(this.expandedKeys){let n={...this.expandedKeys};t?n[e.key]=!0:delete n[e.key],this.$emit("update:expandedKeys",n)}},changeFocusedHeader(e,t){t&&d.focus(t)},getPanelClass(e){return["p-panelmenu-panel",this.getItemProp(e,"class")]},getHeaderClass(e){return["p-panelmenu-header",this.getItemProp(e,"headerClass"),{"p-highlight":this.isItemActive(e),"p-disabled":this.isItemDisabled(e)}]},getHeaderActionClass(e,t){return["p-panelmenu-header-action",{"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},getHeaderIconClass(e){return["p-menuitem-icon",this.getItemProp(e,"icon")]},getHeaderToggleIconClass(e){return["p-submenu-icon",this.isItemActive(e)?"pi pi-chevron-down":"pi pi-chevron-right"]}},computed:{id(){return this.$attrs.id||B()}},components:{PanelMenuList:fe}};const Mt=["id"],Rt=["id","tabindex","aria-label","aria-expanded","aria-controls","aria-disabled","onClick","onKeydown"],Ut={class:"p-panelmenu-header-content"},jt=["href","onClick"],Gt={class:"p-menuitem-text"},Zt=["href"],Yt={class:"p-menuitem-text"},Xt=["id","aria-labelledby"],Wt={key:0,class:"p-panelmenu-content"};function qt(e,t,n,s,a,i){const u=y("router-link"),m=y("PanelMenuList");return o(),c("div",{id:i.id,class:"p-panelmenu p-component"},[(o(!0),c(L,null,M(n.model,(r,l)=>(o(),c(L,{key:i.getPanelKey(l)},[i.isItemVisible(r)?(o(),c("div",{key:0,style:D(i.getItemProp(r,"style")),class:b(i.getPanelClass(r))},[h("div",{id:i.getHeaderId(l),class:b(i.getHeaderClass(r)),tabindex:i.isItemDisabled(r)?-1:n.tabindex,role:"button","aria-label":i.getItemLabel(r),"aria-expanded":i.isItemActive(r),"aria-controls":i.getContentId(l),"aria-disabled":i.isItemDisabled(r),onClick:g=>i.onHeaderClick(g,r),onKeydown:g=>i.onHeaderKeyDown(g,r)},[h("div",Ut,[e.$slots.item?(o(),k(U(e.$slots.item),{key:1,item:r},null,8,["item"])):(o(),c(L,{key:0},[i.getItemProp(r,"to")&&!i.isItemDisabled(r)?(o(),k(u,{key:0,to:i.getItemProp(r,"to"),custom:""},{default:v(({navigate:g,href:I,isActive:_,isExactActive:x})=>[h("a",{href:I,class:b(i.getHeaderActionClass(r,{isActive:_,isExactActive:x})),tabindex:-1,onClick:K=>i.onHeaderActionClick(K,g)},[i.getItemProp(r,"icon")?(o(),c("span",{key:0,class:b(i.getHeaderIconClass(r))},null,2)):p("",!0),h("span",Gt,E(i.getItemLabel(r)),1)],10,jt)]),_:2},1032,["to"])):(o(),c("a",{key:1,href:i.getItemProp(r,"url"),class:b(i.getHeaderActionClass(r)),tabindex:-1},[i.getItemProp(r,"items")?(o(),c("span",{key:0,class:b(i.getHeaderToggleIconClass(r))},null,2)):p("",!0),i.getItemProp(r,"icon")?(o(),c("span",{key:1,class:b(i.getHeaderIconClass(r))},null,2)):p("",!0),h("span",Yt,E(i.getItemLabel(r)),1)],10,Zt))],64))])],42,Rt),C(H,{name:"p-toggleable-content"},{default:v(()=>[w(h("div",{id:i.getContentId(l),class:"p-toggleable-content",role:"region","aria-labelledby":i.getHeaderId(l)},[i.getItemProp(r,"items")?(o(),c("div",Wt,[C(m,{panelId:i.getPanelId(l),items:i.getItemProp(r,"items"),template:e.$slots.item,expandedKeys:n.expandedKeys,onItemToggle:i.changeExpandedKeys,onHeaderFocus:i.updateFocusedHeader,exact:n.exact},null,8,["panelId","items","template","expandedKeys","onItemToggle","onHeaderFocus","exact"])])):p("",!0)],8,Xt),[[se,i.isItemActive(r)]])]),_:2},1024)],6)):p("",!0)],64))),128))],8,Mt)}function Jt(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&s.firstChild?s.insertBefore(a,s.firstChild):s.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var Qt=`
.p-panelmenu .p-panelmenu-header-action {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
}
.p-panelmenu .p-panelmenu-header-action:focus {
    z-index: 1;
}
.p-panelmenu .p-submenu-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-panelmenu .p-menuitem-link {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    overflow: hidden;
}
.p-panelmenu .p-menuitem-text {
    line-height: 1;
}
`;Jt(Qt);pe.render=qt;class $t{static Info(t="",n=""){V().toast.add({severity:R.INFO,summary:t,detail:n,life:3e3})}static Success(t="",n=""){V().toast.add({severity:R.SUCCESS,summary:t,detail:n,life:3e3})}static Warn(t="",n=""){V().toast.add({severity:R.WARN,summary:t,detail:n,life:3e3})}static Error(t="",n=""){V().toast.add({severity:R.ERROR,summary:t,detail:n,life:3e3})}}const ei={components:{Menubar:oe,OverlayPanel:de,Dialog:ue,router:$,Sidebar:me,Button:Ce,Menu:le,Avatar:ce,PanelMenu:pe},setup(){const e=V(),t=Ie(null),n=ye({visibleSideBar:!1,sideNavMenu:[],navBarPanelMenu:[],currentUser:e.user});ve(()=>{i().then(()=>{setTimeout(()=>{a()},300)})}),ee(()=>e.user,I=>{n.currentUser=I}),ee(()=>$.currentRoute.value.path,()=>{s()});function s(){n.visibleSideBar=!1}function a(){n.navBarPanelMenu.push({label:e.language.ms015,command:()=>{g()}})}async function i(){var x,K,F,Z,Y,X,W,q,J,Q;const I=sessionStorage.getItem(ke.KEY_APPMAPPING);if(!I)return;const _=JSON.parse(Buffer.from(I,"base64"));(x=_.web)!=null&&x.viewable&&((Z=(F=(K=_.web)==null?void 0:K.context)==null?void 0:F.display)!=null&&Z.viewable&&n.sideNavMenu.push({label:e.language.ms017,icon:"pi pi-stop",to:`/${O.MAIN}/${O.DISPLAY}`}),(W=(X=(Y=_.web)==null?void 0:Y.context)==null?void 0:X.sysconfig)!=null&&W.viewable&&n.sideNavMenu.push({label:e.language.ms016,icon:"pi pi-user",to:`/${O.MAIN}/${O.SYSCONFIG}`}),(Q=(J=(q=_.web)==null?void 0:q.context)==null?void 0:J.inspection)!=null&&Q.viewable&&n.sideNavMenu.push({label:e.language.ms018,icon:"pi pi-search",to:`/${O.MAIN}/${O.INSPECTION}`}))}function u(){n.visibleSideBar=!0}function m(I){t.value.toggle(I)}function r(){e.SetToast(xe())}function l(){if(e.ValidSession()){r();return}$t.Info(e.language.ms021,e.language.ms020),g()}function g(){e.AuthLogOut()}return l(),{LogOut:g,data:n,ToggleNavbarMenuPanel:m,storeGral:e,navbarPanel:t,ShowSideBar:u,KEY_ROUTE_NAME:O}}},ti=h("div",null,[h("div",null,[h("img",{src:"https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png",alt:""})])],-1),ii={class:"d-flex flex-row d-none d-sm-flex"},ni={class:"d-flex"},si={class:"d-flex flex-column"},ai={class:"text-truncate"},li={class:"text-truncate"},ri={class:"my-auto ms-5"},oi={class:"d-block d-sm-none"},di=h("i",{class:"pi pi-align-justify"},null,-1);function ci(e,t,n,s,a,i){const u=y("Avatar"),m=y("Menu"),r=y("OverlayPanel"),l=y("Button"),g=y("Menubar"),I=y("PanelMenu"),_=y("Sidebar");return o(),c("div",null,[h("main",null,[C(g,null,{start:v(()=>[ti]),end:v(()=>[h("div",ii,[h("div",ni,[h("div",{onClick:t[0]||(t[0]=x=>s.ToggleNavbarMenuPanel(x))},[C(u,{label:"U",class:"me-2",shape:"circle",type:"button",size:"large",style:{"background-color":"#9c27b0",color:"#ffffff"}})]),h("div",si,[h("span",ai,E(s.data.currentUser.firstname??"admin"),1),h("span",li,E(s.data.currentUser.secondname??"admin"),1)]),h("i",{type:"button",onClick:t[1]||(t[1]=x=>s.ToggleNavbarMenuPanel(x)),class:"ms-1 bi bi-chevron-down icon-topbar fs-3 text-white"})]),h("div",ri,[h("span",{style:{cursor:"pointer"},onClick:t[2]||(t[2]=(...x)=>s.LogOut&&s.LogOut(...x)),class:""},E(s.storeGral.language.ms015),1)]),C(r,{ref:"navbarPanel",class:"p-overlaypanel_menu"},{default:v(()=>[C(m,{model:s.data.navBarPanelMenu},null,8,["model"])]),_:1},512)]),h("div",oi,[C(l,{class:"menu-mobile p-button-text",onClick:s.ShowSideBar},{default:v(()=>[di]),_:1},8,["onClick"])])]),_:1}),h("div",null,[C(_,{visible:s.data.visibleSideBar,"onUpdate:visible":t[3]||(t[3]=x=>s.data.visibleSideBar=x),showCloseIcon:!0,dismissable:!0,modal:!0,baseZIndex:0},{default:v(()=>[C(I,{id:"sidenav-menu",model:s.data.sideNavMenu},null,8,["model"])]),_:1},8,["visible"])])])])}const fi=Le(ei,[["render",ci]]);export{fi as default};
