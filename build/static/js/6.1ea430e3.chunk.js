webpackJsonp([6],{284:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),l=n.n(o),s=n(17),u=n(485),c=function(){function e(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(a)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p={id:"ID",name:"Marca",plate:"Matr\xedcula",registered:"Data registo",status:"Estado"},m=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),d(t,[{key:"render",value:function(){var e=this,t=u.a.find(function(t){return t.id.toString()===e.props.match.params.id}),n=t?Object.entries(t):[["id",l.a.createElement("span",null,l.a.createElement("i",{className:"text-muted icon-ban"})," Ve\xedculo n\xe3o encontrado")]];return l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(s._7,null,l.a.createElement(s.u,{lg:8},l.a.createElement(s.i,null,l.a.createElement(s.n,null,l.a.createElement("strong",null,l.a.createElement("i",{className:"icon-info pr-1"}),"Informa\xe7\xf5es do ve\xedculo : ",this.props.match.params.id)),l.a.createElement(s.j,null,l.a.createElement(s._10,{responsive:!0,striped:!0,hover:!0},l.a.createElement("tbody",null,n.map(function(e){var t=c(e,2),n=t[0],r=t[1];return l.a.createElement("tr",{key:n},l.a.createElement("td",null,p[n]+":"),l.a.createElement("td",null,l.a.createElement("strong",null,r)))}))))))))}}]),t}(o.Component);t.default=m},485:function(e,t,n){"use strict";var r=[{id:1,name:"Chrysler",plate:"32-AA-35",registered:"2018/01/01",status:"Ativo"},{id:2,name:"Mini Cooper",plate:"12-BE-35",registered:"2018/02/01",status:"Vendido"},{id:3,name:"Renault Clio IV",plate:"34-65-WI",registered:"2018/02/01",status:"Inativo"},{id:4,name:"Ford Transit",plate:"11-IA-56",registered:"2018/03/01",status:"Pendente"},{id:5,name:"Opel Corsa",plate:"67-AL-32",registered:"2018/01/21",status:"Ativo"},{id:6,name:"BMW M3",plate:"10-MN-50",registered:"2018/01/01",status:"Ativo"},{id:7,name:"Fiat 500",plate:"45-EQ-80",registered:"2018/02/01",status:"Vendido"},{id:8,name:"Renault ZOE",plate:"04-43-TT",registered:"2018/02/01",status:"Inativo"},{id:9,name:"Honda Prius",plate:"13-TN-46",registered:"2018/03/01",status:"Pendente"},{id:12,name:"Nissan Almera",plate:"89-88-ER",registered:"2018/02/01",status:"Banido"},{id:13,name:"Renault M\xe9gane",plate:"99-TU-15",registered:"2018/02/01",status:"Inativo"},{id:14,name:"Renault Talisman",plate:"80-12-AA",registered:"2018/03/01",status:"Pendente"}];t.a=r}});
//# sourceMappingURL=6.1ea430e3.chunk.js.map