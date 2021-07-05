(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{18:function(e,n,t){},19:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),s=t(11),o=t.n(s),r=(t(18),t(12)),i=t(6),l=t(2),b=t(3),u=t(5),h=t(4),j=(t(19),t(0)),d=function(e){Object(u.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=n.call.apply(n,[this].concat(c))).handleIncrement=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){console.log("habit : ".concat(this.props.habit.name," mounted"))}},{key:"componentWillUnmount",value:function(){console.log("habit : ".concat(this.props.habit.name," will unmount"))}},{key:"render",value:function(){var e=this.props.habit,n=e.name,t=e.count;return Object(j.jsxs)("li",{className:"habit",children:[Object(j.jsx)("span",{className:"habit-name",children:n}),Object(j.jsx)("span",{className:"habit-count",children:t}),Object(j.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(j.jsx)("i",{className:"fas fa-plus-square"})}),Object(j.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(j.jsx)("i",{className:"fas fa-minus-square"})}),Object(j.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(j.jsx)("i",{className:"fas fa-trash"})})]})}}]),t}(a.PureComponent),m=Object(a.memo)((function(e){var n=c.a.createRef();return Object(j.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault();var a=n.current.value;a&&e.onAdd(a),n.current.value=""},children:[Object(j.jsx)("input",{ref:n,type:"text",className:"add-input",placeholder:"Habit"}),Object(j.jsx)("button",{className:"add-button",children:"Add"})]})})),p=function(e){Object(u.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=n.call.apply(n,[this].concat(c))).handleIncrement=function(n){e.props.onIncrement(n)},e.handleDecrement=function(n){e.props.onDecrement(n)},e.handleDelete=function(n){e.props.onDelete(n)},e.handleAdd=function(n){e.props.onAdd(n)},e.handleReset=function(n){e.props.onReset(n)},e}return Object(b.a)(t,[{key:"render",value:function(){var e=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{onAdd:this.handleAdd}),Object(j.jsx)("ul",{children:this.props.habits.map((function(n){return Object(j.jsx)(d,{habit:n,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete,onReset:e.handleReset},n.id)}))}),Object(j.jsx)("button",{className:"reset",onClick:this.props.onReset,children:Object(j.jsx)("i",{className:"fas fa-power-off"})})]})}}]),t}(a.Component),f=function(e){Object(u.a)(t,e);var n=Object(h.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(b.a)(t,[{key:"render",value:function(){return console.log("Navbar"),Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("i",{className:"navbar-logo fas fa-user-friends"}),Object(j.jsx)("span",{className:"navbar-name",children:"Habit Tracker"}),Object(j.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})}}]),t}(a.PureComponent),O=(a.Component,t(21),t(13)),x=function(e){var n=Object(a.useState)(0),t=Object(O.a)(n,2),c=t[0],s=t[1],o=Object(a.useRef)(),r=Object(a.useCallback)((function(){console.log("handling increment"),s(c+1)})),i=Object(a.useCallback)((function(){console.log("handling decrement"),s(c-1)}));return Object(a.useEffect)((function(){console.log("mounted and updated! ".concat(c))}),[c]),Object(j.jsxs)("li",{className:"habit",children:[Object(j.jsx)("span",{ref:o,className:"habit-name",children:"Reading"}),Object(j.jsx)("span",{className:"habit-count",children:c}),Object(j.jsx)("button",{className:"habit-button habit-increase",onClick:r,children:Object(j.jsx)("i",{className:"fas fa-plus-square"})}),Object(j.jsx)("button",{className:"habit-button habit-decrease",onClick:i,children:Object(j.jsx)("i",{className:"fas fa-minus-square"})})]})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.28c872d8.chunk.js.map