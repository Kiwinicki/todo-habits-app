(this["webpackJsonptodo-habits-app"]=this["webpackJsonptodo-habits-app"]||[]).push([[0],[,,,function(e,t){e.exports=Object.freeze({MAX_HP:50,LVL:[{REQUIRED_EXP:5},{REQUIRED_EXP:15},{REQUIRED_EXP:30},{REQUIRED_EXP:55},{REQUIRED_EXP:75},{REQUIRED_EXP:95},{REQUIRED_EXP:125},{REQUIRED_EXP:145},{REQUIRED_EXP:170},{REQUIRED_EXP:200},{REQUIRED_EXP:245}],TASK_DIFFICULTY:{EASY:1,MEDIUM:2,HARD:3},TASK_TYPE:{TODO:"TODO",SCHEDULE:"SCHEDULE",HABIT:"HABIT"},PLAYER_REDUCER:{CHANGE_EXP:"EXP",CHANGE_HP:"HP"},TASK_REDUCER:{ADD_TASK:"ADD TASK",REMOVE_TASK:"REMOVE TASK",FILTER_TASK:"filter",EDIT_TASK:"EDIT TASK",SET_ACTIVE_CATEGORY:"ACTIVE CATEGORY"},COMPLITED_TASKS:{SUCCESS:"SUCCESS",FAIL:"FAIL"},LOCAL_STORAGE_REDUCER:{UPDATE_VISIT_DATE:"UPDATE VISIT TIME",SET_COMPLITED_TASKS:"COMPLITED TASKS",LAST_VISIT_DATE:"LAST VISIT DATE",DAYS_STREAK:"DAYS STREAK",MAX_DAYS_STREAK:"MAX DAYS STREAK",PLAYER_DATA:"PLAYER DATA"}})},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(19),r=a.n(n),i=a(11),l=a(6),o=a(4),d=a(59),j=a(5),u=a(3),b=a(0),O=function(e,t){var a=u.PLAYER_REDUCER.CHANGE_EXP,c=u.PLAYER_REDUCER.CHANGE_HP;switch(t.type){case a:var s=e.exp+t.value,n=e.lvl,r=e.hp;return s>u.LVL[e.lvl-1].REQUIRED_EXP&&(n++,s-=e.exp,r=u.MAX_HP),Object(j.a)(Object(j.a)({},e),{},{exp:s,lvl:n,hp:r});case c:return e.hp+t.value<=0?Object(j.a)(Object(j.a)({},e),{},{hp:u.MAX_HP,lvl:1,exp:0}):Object(j.a)(Object(j.a)({},e),{},{hp:e.hp+t.value});default:throw new Error("Unhandled action type: ".concat(t.type))}},_={name:"Guest",exp:20,lvl:4,hp:20},h=Object(c.createContext)(["default value from PlayerContext"]);h.displayName="PlayerContext";var E=function(e){var t=e.children,a=Object(c.useReducer)(O,JSON.parse(localStorage.getItem(u.LOCAL_STORAGE_REDUCER.PLAYER_DATA))||_),s=Object(o.a)(a,2),n=s[0],r=s[1];return localStorage.setItem(u.LOCAL_STORAGE_REDUCER.PLAYER_DATA,JSON.stringify(n)),Object(b.jsx)(h.Provider,{value:[n,r],children:t})},f=a(7),T=a(18),x=u.TASK_REDUCER.ADD_TASK,S=u.TASK_REDUCER.REMOVE_TASK,p=u.TASK_REDUCER.EDIT_TASK,m=u.TASK_REDUCER.SET_ACTIVE_CATEGORY,C=u.TASK_REDUCER.FILTER_TASK,A=u.TASK_TYPE.TODO,R=u.TASK_TYPE.HABIT,g=u.TASK_TYPE.SCHEDULE,v=u.COMPLITED_TASKS.SUCCESS,D=u.COMPLITED_TASKS.FAIL,k=u.LOCAL_STORAGE_REDUCER.SET_COMPLITED_TASKS,N=function(e,t){switch(t.type){case x:var a=t.value;return e.length>0?a.id=e[e.length-1].id+1:a.id=1,[].concat(Object(T.a)(e),[a]);case S:return e.filter((function(e){return e.id!==t.value.id}));case C:return t.filter;case p:var c=e.findIndex((function(e){return e.id===t.value.id})),s=Object(T.a)(e);return s[c]=t.value,s;case m:if(Object.values(u.TASK_TYPE).includes(t.value))return t.value;throw new Error("Unhandled task type ".concat(t.value));case k:return Object(j.a)(Object(j.a)({},e),{},Object(f.a)({},t.value,e[t.value]+1));default:throw new Error("Unhandled action type: ".concat(t.type))}},I=Object(c.createContext)(["default value from TaskContext"]);I.displayName="TasksContext";var L=function(e){var t,a,s=e.children,n=Object(c.useReducer)(N,JSON.parse(localStorage.getItem(A))||[]),r=Object(o.a)(n,2),i=r[0],l=r[1],d=Object(c.useReducer)(N,JSON.parse(localStorage.getItem(g))||[]),j=Object(o.a)(d,2),u=j[0],O=j[1],_=Object(c.useReducer)(N,JSON.parse(localStorage.getItem(R))||[]),h=Object(o.a)(_,2),E=h[0],T=h[1],x=Object(c.useReducer)(N,""),S=Object(o.a)(x,2),p=S[0],L=S[1],y=Object(c.useReducer)(N,A),P=Object(o.a)(y,2),K=P[0],U=P[1],Y=Object(c.useReducer)(N,JSON.parse(localStorage.getItem(k))||(t={},Object(f.a)(t,v,0),Object(f.a)(t,D,0),t)),H=Object(o.a)(Y,2),M=H[0],X=H[1];return localStorage.setItem(A,JSON.stringify(i)),localStorage.setItem(g,JSON.stringify(u)),localStorage.setItem(R,JSON.stringify(E)),localStorage.setItem(k,JSON.stringify(M)),Object(b.jsx)(I.Provider,{value:(a={},Object(f.a)(a,A,[i,l]),Object(f.a)(a,g,[u,O]),Object(f.a)(a,R,[E,T]),Object(f.a)(a,C,[p,L]),Object(f.a)(a,m,[K,U]),Object(f.a)(a,k,[M,X]),a),children:s})},y=(a(28),function(e){var t=e.children,a=e.handleClick,c=e.type,s=void 0===c?"button":c,n=e.addClass,r=void 0===n?void 0:n;return Object(b.jsx)("button",{className:"button ".concat(r||""),type:s,onClick:a&&function(e){return a(e)},children:t})}),P=Object(c.createContext)("default value from MenuToggleContext");P.displayName="ToggleMenuContext";var K=function(e){var t=e.children,a=Object(c.useState)(false),s=Object(o.a)(a,2),n=s[0],r=s[1];return Object(b.jsx)(P.Provider,{value:[n,function(){return r((function(e){return!e}))}],children:t})},U=a(58),Y=(a(29),function(e){var t=e.addClass,a=void 0===t?"":t,s=Object(c.useContext)(P),n=Object(o.a)(s,2),r=(n[0],n[1]);return Object(b.jsx)(y,{addClass:"hamburger-btn button--borderless ".concat(a),handleClick:function(){return r()},children:Object(b.jsx)(U.a,{className:"hamburger-btn__icon"})})}),H=(a(32),function(e){var t=e.children,a=e.addClass,c=void 0===a?"":a;return Object(b.jsx)("header",{className:"page-header ".concat(c),children:t})}),M=(a(33),function(e){var t=e.radius,a=e.stroke,c=e.progressPerc,s=e.children,n=e.addClass,r=2*t*Math.PI,i=r-c/100*r;return Object(b.jsxs)("svg",{width:"64",height:"64",className:"progress-ring ".concat(n||""),children:[Object(b.jsx)("circle",{className:"progress-ring__circle progress-ring__circle--bg",strokeWidth:a,r:t-a/2,cx:t,cy:t}),Object(b.jsx)("circle",{className:"progress-ring__circle progress-ring__circle--indicator",strokeWidth:a,strokeDasharray:"".concat(r," ").concat(r),strokeDashoffset:i,r:t-a/2,cx:t,cy:t}),Object(b.jsx)("text",{className:"progress-ring__text",x:"50%",y:"50%",children:s})]})}),X=(a(34),function(e){var t=e.addClass,a=e.percent;return Object(b.jsx)("div",{className:"progress-bar ".concat(t||""),children:Object(b.jsx)("div",{className:"progress-bar__inner",style:{width:"".concat(a,"%")}})})}),F=function(e,t){var a=null;return 100===(a=t>1?e/u.LVL[t-1].REQUIRED_EXP*100:100*e)&&(a=0),a},G=(a(35),function(e){var t=e.type,a=void 0===t?"text":t,c=e.value,s=e.addClass,n=e.placeholder,r=void 0===n?null:n,i=e.name,l=void 0===i?null:i,o=e.handleChange,d=e.validation,u=Object(j.a)(Object(j.a)(Object(j.a)({type:a,name:l,value:c},r&&{placeholder:r}),o&&{onChange:function(e){return o(e)}}),{},{className:"input-".concat(a," ").concat(s||"")});return Object(b.jsx)("input",Object(j.a)(Object(j.a)({},u),d))}),w=(a(36),function(e){var t=e.children,a=e.addClass;return Object(b.jsx)("label",{className:"label ".concat(a||""),children:t})}),V=function(e){var t=e.type,a=void 0===t?"text":t,c=e.value,s=e.name,n=void 0===s?null:s,r=e.labelClass,i=e.inputClass,l=e.placeholder,o=void 0===l?null:l,d=e.handleChange,j=e.validation,u=e.register,O=e.children;return Object(b.jsxs)(w,{addClass:r,children:[O,Object(b.jsx)(G,{type:a,name:n,value:c,addClass:i,placeholder:o,handleChange:d,validation:j,register:u})]})},J=(a(37),function(e){var t=e.addClass,a=e.formToggler,s=e.handleSubmit,n=e.handleReset,r={required:!0},i=Object(o.a)(a,2),l=i[0],d=i[1],O={title:"",difficulty:null,id:null},_=Object(c.useState)(O),h=Object(o.a)(_,2),E=h[0],f=h[1],T=Object.values(u.TASK_DIFFICULTY);return Object(b.jsxs)("form",{className:"task-form ".concat(l?"":"task-form--hidden"," ").concat(t||""),onSubmit:function(e){e.preventDefault(),s(E),f(O),d()},onReset:function(){f(O),void 0!==n&&n(),d()},children:[Object(b.jsx)(V,{type:"text",name:"title",handleChange:function(e){f((function(t){return Object(j.a)(Object(j.a)({},t),{},{title:e.target.value})}))},value:E.title,validation:r,labelClass:"task-form__title",children:"Title:"}),Object(b.jsx)("p",{children:"Difficulty: "}),Object(b.jsxs)("div",{className:"task-form__inner",children:[T.map((function(e,t){return Object(b.jsx)(V,{type:"radio",value:e,name:"difficulty",handleChange:function(e){f((function(t){return Object(j.a)(Object(j.a)({},t),{},{difficulty:parseInt(e.target.value)})}))},validation:r,inputClass:"input--as-btn",labelClass:"label--as-btn ".concat(E.difficulty==e?"label--as-btn--checked":""),children:["Easy","Medium","Hard"][t]},t)})),Object(b.jsx)(y,{type:"submit",addClass:"button__submit",children:"Submit"}),Object(b.jsx)(y,{type:"reset",addClass:"button__reset",children:"Cancel"})]})]})}),Q=a(2),B=a.n(Q),q=function(e){var t=Object(c.useState)(e),a=Object(o.a)(t,2),s=a[0],n=a[1];return[s,function(){return n((function(e){return!e}))}]};q.propTypes={initState:B.a.bool.isRequired};var z=q,W=(a(38),function(){var e=Object(c.useContext)(h),t=Object(o.a)(e,1)[0],a=t.name,s=t.exp,n=t.lvl,r=t.hp,i=u.TASK_REDUCER.SET_ACTIVE_CATEGORY,l=u.TASK_REDUCER.ADD_TASK,j=Object(c.useContext)(I),O=Object(o.a)(j[i],2),_=O[0],E=(O[1],Object(c.useContext)(I)),f=Object(o.a)(E[_],2),T=(f[0],f[1]),x=z(!1),S=Object(o.a)(x,2),p=S[0],m=S[1],C=F(s,n);return Object(b.jsxs)(H,{addClass:"home-header",children:[Object(b.jsx)(Y,{addClass:"home-header__menu-btn"}),Object(b.jsx)("h1",{className:"home-header__player-name",children:a}),Object(b.jsxs)("div",{className:"home-header__lvl-progress",children:[Object(b.jsx)(M,{radius:32,stroke:8,progressPerc:C,children:n}),Object(b.jsx)("p",{className:"home-header__label",children:"".concat(s,"/").concat(u.LVL[n-1].REQUIRED_EXP," EXP")})]}),Object(b.jsxs)("div",{className:"home-header__hp-bar",children:[Object(b.jsx)(X,{percent:r/u.MAX_HP*100}),Object(b.jsx)("p",{className:"home-header__label",children:"".concat(r,"/").concat(u.MAX_HP," HP")})]}),Object(b.jsx)(y,{handleClick:function(){return m()},addClass:"button--borderless home-header__add-task-btn ".concat(p?"home-header__add-task-btn--hidden":""),children:Object(b.jsx)(d.a,{className:"home-header__plus-icon"})}),Object(b.jsx)(J,{formToggler:[p,m],addClass:"home-header__form",handleSubmit:function(e){var t=e.title,a=e.difficulty;T({type:l,value:{title:t,difficulty:a,id:null}})}})]})}),Z=a(60),$=a(61),ee=(a(39),function(){u.TASK_REDUCER.FILTER_TASK;var e=Object(c.useContext)(I),t=Object(o.a)(e[u.TASK_REDUCER.FILTER_TASK],2),a=t[0],s=t[1],n=z(!0),r=Object(o.a)(n,2),i=r[0],l=r[1];return Object(b.jsxs)("form",{className:"search-task ".concat(i?"search-task--hidden":""),onSubmit:function(e){e.preventDefault()},children:[Object(b.jsx)(G,{type:"text",addClass:"input-text--light search-task__input ".concat(i?"search-task__input--hidden":""),value:a,handleChange:function(e){s({type:u.TASK_REDUCER.FILTER_TASK,filter:e.target.value})},placeholder:"start searching..."}),Object(b.jsx)(y,{addClass:"button--borderless",handleClick:function(){l(),i||s({type:u.TASK_REDUCER.FILTER_TASK,filter:""})},children:i?Object(b.jsx)(Z.a,{className:"search-task__search-icon"}):Object(b.jsx)($.a,{className:"search-task__search-icon"})})]})}),te={root:null,rootMargin:"0px",threshold:.5},ae=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:te;Object(c.useEffect)((function(){var c=new IntersectionObserver((function(e){e.forEach(t)}),a);e.forEach((function(e){c.observe(e)}))}),[])};ae.propTypes={refArr:B.a.arrayOf(B.a.string).isRequired,callback:B.a.func.isRequired,options:B.a.object};var ce=ae,se=function(e,t){if(""!==e){var a=t.filter((function(t){return-1!==t.title.indexOf(e)}));return a.length>0?a:null}return t.length>0?t:null},ne=a(62),re=a(63),ie=a(64),le=a(65),oe=a(66),de=(a(40),function(e){for(var t=e.taskType,a=e.task,s=a.id,n=a.title,r=a.difficulty,i=e.task,l=e.dispatchTask,O=u.TASK_TYPE.TODO,_=u.TASK_TYPE.SCHEDULE,E=u.LOCAL_STORAGE_REDUCER.SET_COMPLITED_TASKS,f=u.COMPLITED_TASKS.FAIL,T=u.COMPLITED_TASKS.SUCCESS,x=u.TASK_REDUCER.EDIT_TASK,S=Object(c.useContext)(h),p=Object(o.a)(S,2),m=(p[0],p[1]),C=Object(c.useContext)(I),A=Object(o.a)(C[E],2),R=(A[0],A[1]),g=z(!1),v=Object(o.a)(g,2),D=v[0],k=v[1],N=z(!1),L=Object(o.a)(N,2),P=L[0],K=L[1],U=[],Y=0;Y<r;Y++)U.push(Object(b.jsx)(ne.a,{},Y));var H=function(){l({type:u.TASK_REDUCER.REMOVE_TASK,value:i})};return Object(b.jsxs)("div",{className:"task task--".concat(t),children:[Object(b.jsx)(y,{addClass:"task__btn task__btn--left",handleClick:function(){m({type:u.PLAYER_REDUCER.CHANGE_EXP,value:r}),R({type:E,value:T}),t===O&&H()},children:t===O||_?Object(b.jsx)(re.a,{className:"task__icon"}):Object(b.jsx)(d.a,{className:"task__icon"})}),Object(b.jsxs)("div",{className:"task__info",children:[Object(b.jsxs)("div",{onClick:function(){return K()},children:[Object(b.jsx)("h3",{className:"task__title",children:n}),Object(b.jsx)("div",{className:"task__difficulty",children:U})]}),Object(b.jsxs)("div",{className:"task__options-bar ".concat(P?"task__options-bar--expanded":""),children:[Object(b.jsx)(y,{handleClick:function(){return H()},addClass:"task-form__options-btn",children:Object(b.jsx)(ie.a,{})}),Object(b.jsx)(y,{handleClick:function(){return k()},addClass:"task-form__options-btn",children:Object(b.jsx)(le.a,{})})]}),Object(b.jsx)(J,{formToggler:[D,k],addClass:"task-form--light task-form--column",handleSubmit:function(e){""!==e.title&&null!==e.difficulty&&l({type:x,value:Object(j.a)(Object(j.a)({},e),{},{id:s})})},handleReset:K})]}),t!==O&&Object(b.jsx)(y,{addClass:"task__btn task__btn--right",handleClick:function(){m({type:u.PLAYER_REDUCER.CHANGE_HP,value:-r}),R({type:E,value:f})},children:t===_?Object(b.jsx)($.a,{className:"task__icon"}):Object(b.jsx)(oe.a,{className:"task__icon"})})]})}),je=(a(41),Object(c.forwardRef)((function(e,t){var a=e.taskType,s=Object(c.useContext)(I),n=Object(o.a)(s[a],2),r=n[0],i=n[1],l=Object(o.a)(s.filter,2),d=l[0],j=(l[1],se(d,r));return Object(b.jsx)("div",{className:"task-list","data-task-type":a,ref:t,children:j?j.map((function(e){return Object(b.jsx)(de,{taskType:a,task:e,dispatchTask:i},e.id)})):Object(b.jsx)("p",{className:"task-list__no-tasks",children:"No tasks"})})}))),ue=(a(42),function(e){var t=e.taskListsRefs,a=Object(c.useContext)(I),s=Object(o.a)(a[u.TASK_REDUCER.SET_ACTIVE_CATEGORY],2),n=(s[0],s[1]);return ce(t.current,(function(e){if(e.intersectionRatio>.5){var t=e.target.getAttribute("data-task-type");n({type:u.TASK_REDUCER.SET_ACTIVE_CATEGORY,value:t})}})),Object(b.jsxs)("div",{className:"task-categories",children:[Object(b.jsx)(je,{taskType:u.TASK_TYPE.TODO,ref:function(e){return t.current[0]=e}}),Object(b.jsx)(je,{taskType:u.TASK_TYPE.SCHEDULE,ref:function(e){return t.current[1]=e}}),Object(b.jsx)(je,{taskType:u.TASK_TYPE.HABIT,ref:function(e){return t.current[2]=e}})]})}),be=a(67),Oe=a(68),_e=a(69),he=function(e){document.querySelector(".task-categories").scrollTo({top:0,left:e.offsetLeft,behavior:"smooth"})},Ee=(a(43),function(e){var t=e.taskListsRefs,a=Object(c.useContext)(I),s=Object(o.a)(a[u.TASK_REDUCER.SET_ACTIVE_CATEGORY],2),n=s[0],r=(s[1],function(e){return"categories-nav__btn ".concat(e===n?"categories-nav__btn--active":"")});return Object(b.jsxs)("div",{className:"categories-nav",children:[Object(b.jsxs)(y,{addClass:r(u.TASK_TYPE.TODO),handleClick:function(){return he(t.current[0])},children:[Object(b.jsx)(be.a,{className:"categories-nav__icon"}),Object(b.jsx)("p",{className:"categories-nav__name",children:"To do's"})]}),Object(b.jsxs)(y,{addClass:r(u.TASK_TYPE.SCHEDULE),handleClick:function(){return he(t.current[1])},children:[Object(b.jsx)(Oe.a,{className:"categories-nav__icon"}),Object(b.jsx)("p",{className:"categories-nav__name",children:"Schedules"})]}),Object(b.jsxs)(y,{addClass:r(u.TASK_TYPE.HABIT),handleClick:function(){return he(t.current[2])},children:[Object(b.jsx)(_e.a,{className:"categories-nav__icon"}),Object(b.jsx)("p",{className:"categories-nav__name",children:"Habits"})]})]})});var fe,Te=function(){var e=Object(c.useRef)([]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(W,{}),Object(b.jsx)(ee,{}),Object(b.jsx)(ue,{taskListsRefs:e}),Object(b.jsx)(Ee,{taskListsRefs:e})]})},xe=a(20),Se=function(e){"string"==typeof e&&console.log(e);var t=new Date(e.getFullYear(),0,0),a=e-t+60*(t.getTimezoneOffset()-e.getTimezoneOffset())*1e3;return Math.floor(a/864e5)},pe=u.LOCAL_STORAGE_REDUCER.LAST_VISIT_DATE,me=u.LOCAL_STORAGE_REDUCER.DAYS_STREAK,Ce=u.LOCAL_STORAGE_REDUCER.MAX_DAYS_STREAK,Ae=u.LOCAL_STORAGE_REDUCER.UPDATE_VISIT_DATE,Re=function(e,t){switch(t.type){case Ae:Se(new Date);return Object(j.a)(Object(j.a)({},e),{},Object(f.a)({},Ce,e[me]>=e[Ce]&&(e[Ce]=e[me])))}},ge=Object(c.createContext)("default value from LocalStorageContext");ge.displayName="LocalStorageContext";var ve=(fe={},Object(f.a)(fe,pe,Se(new Date)),Object(f.a)(fe,me,JSON.parse(localStorage.getItem(pe))+1===Se(new Date)?JSON.parse(localStorage.getItem(me))+1:0),Object(f.a)(fe,Ce,JSON.parse(localStorage.getItem(Ce))||0),fe),De=function(e){var t=e.children,a=Object(c.useReducer)(Re,ve),s=Object(o.a)(a,2),n=s[0],r=s[1];return localStorage.setItem(pe,JSON.stringify(n[pe])),localStorage.setItem(me,JSON.stringify(n[me])),localStorage.setItem(Ce,JSON.stringify(n[Ce])),Object(b.jsx)(ge.Provider,{value:[n,r],children:t})},ke=(a(44),function(e){var t=e.chartSlices,a=e.addClass,c=void 0===a?"":a,s=t.map((function(e,t,a){return"".concat(e.color," ").concat(0===t?0:a[t-1].perc/100,"turn ").concat(e.perc/100,"turn")}));return Object(b.jsx)("div",{className:"pie-chart ".concat(c),style:{backgroundImage:"conic-gradient(".concat(s.join(", "),")")}})}),Ne=(a(45),function(e){var t=e.children,a=e.addClass,c=void 0===a?"":a;return Object(b.jsx)("main",{className:"page-main ".concat(c),children:t})}),Ie=(a(46),function(e){var t=e.mainContent,a=e.pageTitle,c=e.addMainClass,s=void 0===c?"":c,n=e.addHeaderClass,r=void 0===n?"":n;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(H,{addClass:"template__header ".concat(r),children:[Object(b.jsx)(Y,{addClass:"template__menu-btn"}),Object(b.jsx)("h1",{className:"template__page-title",children:a})]}),Object(b.jsx)(Ne,{addClass:"template__content ".concat(s),children:t})]})}),Le=(a(47),u.COMPLITED_TASKS.SUCCESS),ye=u.COMPLITED_TASKS.FAIL,Pe=u.TASK_TYPE.TODO,Ke=u.TASK_TYPE.SCHEDULE,Ue=u.TASK_TYPE.HABIT;var Ye=function(){var e,t=Object(c.useContext)(I),a=Object(o.a)(t[u.LOCAL_STORAGE_REDUCER.SET_COMPLITED_TASKS],2),s=a[0],n=(a[1],Object(o.a)(t[Pe],2)),r=n[0],i=(n[1],Object(o.a)(t[Ke],2)),l=i[0],d=(i[1],Object(o.a)(t[Ue],2)),j=d[0],O=(d[1],Object(c.useContext)(h)),_=Object(o.a)(O,2),E=_[0],f=(_[1],Object(c.useContext)(ge)),T=Object(o.a)(f,2),x=T[0],S=(T[1],s[ye]+s[Le]),p=s[ye]/S*100,m=s[Le]/S*100,C=0,A=Object(xe.a)(u.LVL);try{for(A.s();!(e=A.n()).done;){C+=e.value.REQUIRED_EXP}}catch(R){A.e(R)}finally{A.f()}return C+=E.exp,Object(b.jsx)(Ie,{pageTitle:"Statistics",mainContent:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"stats-page__heading",children:"PLAYER"}),Object(b.jsxs)("p",{children:["Current level: ",E.lvl]}),Object(b.jsxs)("p",{children:["Current exp points: ",E.exp]}),Object(b.jsxs)("p",{children:["All time exp points: ",C]}),Object(b.jsx)("h2",{className:"stats-page__heading",children:"TASKS"}),0!==S?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(ke,{addClass:"stats-page__pie-chart",chartSlices:[{color:"green",perc:m},{color:"red",perc:p}]}),Object(b.jsxs)("p",{className:"stats-page__label",children:[Object(b.jsx)("span",{className:"stats-page__legend stats-page__legend--red"}),"failed tasks (",p.toFixed(),"%) /",Object(b.jsx)("span",{className:"stats-page__legend stats-page__legend--green"}),"successful tasks (",m.toFixed(),"%)"]})]}):Object(b.jsx)("p",{children:"No tasks complited. Complite some tasks to see statistic"}),Object(b.jsx)("h3",{children:"currently active tasks: "}),Object(b.jsxs)("p",{children:["TODO's: ",r.length," tasks"]}),Object(b.jsxs)("p",{children:["Schedules: ",l.length," tasks"]}),Object(b.jsxs)("p",{children:["Habits: ",j.length," tasks"]}),Object(b.jsx)("h2",{className:"stats-page__heading",children:"DAYS STREAK"}),Object(b.jsxs)("p",{children:["current days streak: ",x[u.LOCAL_STORAGE_REDUCER.DAYS_STREAK]," ","days"]}),Object(b.jsxs)("p",{children:["longest days streak:"," ",x[u.LOCAL_STORAGE_REDUCER.MAX_DAYS_STREAK]," days"]})]})})};function He(){return Object(b.jsx)("div",{children:"rewards"})}function Me(){return Object(b.jsx)("div",{children:"settings"})}a(48);function Xe(){return Object(b.jsx)(Ie,{pageTitle:"About app",mainContent:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"about-page__heading",children:"Hi, I'm Dawid and this is my first React app."}),Object(b.jsx)("h3",{className:"about-page__heading",children:"Used technologies: "}),Object(b.jsxs)("ul",{className:"about-page__list",children:[Object(b.jsx)("li",{className:"about-page__list-item",children:"React:"}),Object(b.jsxs)("ul",{className:"about-page__list",children:[Object(b.jsx)("li",{className:"about-page__list-item",children:"functional components"}),Object(b.jsx)("li",{className:"about-page__list-item",children:"react hooks"}),Object(b.jsx)("li",{className:"about-page__list-item",children:"contexts"})]}),Object(b.jsx)("li",{className:"about-page__list-item",children:"ES6+"}),Object(b.jsx)("li",{className:"about-page__list-item",children:"SASS"})]})]})})}a(49);var Fe=function(){var e=Object(c.useContext)(P),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(b.jsxs)("div",{className:"side-menu ".concat(a?"side-menu--open":""),children:[Object(b.jsx)("div",{className:"side-menu__bg ".concat(a?"side-menu__bg--open":"")}),Object(b.jsxs)("nav",{className:"side-menu__app-menu ".concat(a?"side-menu__app-menu--open":""),children:[Object(b.jsx)(y,{handleClick:function(){return s()},addClass:"button--borderless side-menu__close-menu-btn",children:Object(b.jsx)($.a,{className:"side-menu__close-icon"})}),Object(b.jsxs)("ul",{className:"side-menu__list",children:[Object(b.jsx)("li",{className:"side-menu__item",onClick:function(){return s()},children:Object(b.jsx)(i.b,{to:"/",className:"side-menu__link",children:"Home"})}),Object(b.jsx)("li",{className:"side-menu__item",onClick:function(){return s()},children:Object(b.jsx)(i.b,{to:"/stats",className:"side-menu__link",children:"Statistic"})}),Object(b.jsx)("li",{className:"side-menu__item",onClick:function(){return s()},children:Object(b.jsx)(i.b,{to:"/about",className:"side-menu__link",children:"About app"})})]})]})]})},Ge=function(){return Object(b.jsx)(De,{children:Object(b.jsx)(E,{children:Object(b.jsx)(L,{children:Object(b.jsx)(K,{children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(Fe,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/stats",children:Object(b.jsx)(Ye,{})}),Object(b.jsx)(l.a,{path:"/rewards",children:Object(b.jsx)(He,{})}),Object(b.jsx)(l.a,{path:"/settings",children:Object(b.jsx)(Me,{})}),Object(b.jsx)(l.a,{path:"/about",children:Object(b.jsx)(Xe,{})}),Object(b.jsx)(l.a,{path:"/",children:Object(b.jsx)(Te,{})})]})]})})})})})},we=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};a(56);r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(Ge,{})}),document.getElementById("root")),we()}],[[57,1,2]]]);
//# sourceMappingURL=main.bbf6dfd3.chunk.js.map