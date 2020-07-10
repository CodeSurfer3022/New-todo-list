!function(e){var t={};function o(n){if(t[n])return t[n].exports;var d=t[n]={i:n,l:!1,exports:{}};return e[n].call(d.exports,d,d.exports,o),d.l=!0,d.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)o.d(n,d,function(t){return e[t]}.bind(null,d));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const n=function(){const e=[];return{add:function(t){e.push(t)},remove:function(t){let o=e.findIndex(e=>e.getName()===t);e[o].getTodos().forEach(e=>d.remove(e.getTitle())),e.splice(o,1)},getProject:function(t){return e.find(e=>e.getName()===t)},getList:function(){return e}}}(),d=function(){const e=[];return{add:function(t){e.push(t)},remove:function(t){let o=e.findIndex(e=>e.getTitle()===t);e.splice(o,1)},getTodo:function(t){return e.find(e=>e.getTitle()===t)},getList:function(){return e}}}();function r(e,t,o,d="Home"){let r,c=e,l=t,s=o,i=d,u=[],a=!1;function p(e){if(i===e)return;console.log(i);let t=n.getProject(i);console.log(t.getTodos());let o=t.getTodos().findIndex(e=>e.getTitle()===c);console.log(o),t.getTodos().splice(o,1),i=e;let d=n.getProject(i);d.getTodos().push(this),console.log(d.getTodos())}return{edit:function(e,t,o,n){c=e,l=t,s=o,p(n)},moveToProject:p,addNotes:function(e){r=e},reschedule:function(e){l=e},setPriority:function(e){s=e},addToChecklist:function(e){u.push(e)},markAsCompleted:function(){console.log(u),u.every(e=>e.isCompleted())?(a=!0,console.log(`marked ${this} as completed`)):console.log("please complete all todos in checklist before marking the todo as complete")},getTitle:function(){return c},getNotes:function(){return r},getDueDate:function(){return l},getPriority:function(){return s},getProjectName:function(){return i},getCheckList:function(){return u},isCompleted:function(){return a},getTodo:function(){return{title:c,notes:r,dueDate:l,priority:s,projectName:i,checkList:u,completed:a}}}}const c=document.querySelector("#todos"),l={renderProjectHeading(e){console.log(e);const t=document.createElement("h2");t.classList.add("todo-heading"),t.textContent=e,c.appendChild(t)},renderAddTodo(){const e=document.createElement("div");e.classList.add("add-todo");const t=document.createElement("p");t.classList.add("todo-plus"),t.textContent="+",e.appendChild(t);const o=document.createElement("p");o.classList.add("todo-text"),o.textContent="Add todo",e.appendChild(o),c.appendChild(e)},render(e){const t=c.querySelector(".add-todo");console.log("todo is rendering"),console.log(e),console.log(c);let o=document.createElement("div");o.classList.add("todo");let n=document.createElement("p");n.classList.add("todo-circle"),n.textContent="o",o.appendChild(n);let d=document.createElement("h3");d.classList.add("todo-name"),d.textContent=e.getTitle(),o.appendChild(d);let r=document.createElement("p");r.classList.add("todo-options"),r.textContent="...",o.appendChild(r),c.insertBefore(o,t)}},s=document.querySelector("#projects");function i(){let e=document.createElement("div");return e.classList.add("dropdown"),e.appendChild(function(){let e=document.createElement("p");return e.classList.add("project-options"),e.classList.add("dropbtn"),e.textContent="...",e.addEventListener("click",u.renderOptions),e}()),e.appendChild(function(){let e=document.createElement("div");return e.classList.add("dropdown-content"),e.id="myDropdown",e.appendChild(function(){let e=document.createElement("p");return e.classList.add("edit-project"),e.textContent="Edit Project",e}()),e.appendChild(function(){let e=document.createElement("p");return e.classList.add("delete-project"),e.textContent="Delete Project",e}()),e.appendChild(function(){let e=document.createElement("p");return e.classList.add("project-notes"),e.textContent="Add notes",e}()),e}()),e}const u={render(e){console.log("project is rendering"),console.log(e);let t=document.createElement("div");t.classList.add("project"),t.appendChild(function(){let e=document.createElement("p");return e.classList.add("project-circle"),e.textContent="o",e}()),t.appendChild(function(e){let t=document.createElement("h3");return t.classList.add("project-name"),t.textContent=e,t}(e.getName())),t.appendChild(i()),s.appendChild(t)},selectProject(e){console.log("todos of current project are rendering"),l.renderProjectHeading(e.getName()),l.renderAddTodo(),e.getTodos().forEach(e=>l.render(e))},renderOptions(){console.log("ok");const e=s.querySelector("#myDropdown");console.log(e),e.classList.toggle("show")}};function a(e){if(!e.target.matches(".dropbtn")){let e=document.querySelectorAll(".dropdown-content");for(let t of e)t.classList.contains("show")&&t.classList.remove("show")}}var p=function(){window.addEventListener("click",a)};let g=function(e){let t,o=e;const n=[];return{edit:function(e){o=e},addNotes:function(e){t=e},addTodo:function(e){n.push(e)},getName:function(){return o},getNotes:function(){return t},getTodos:function(){return n},getProject:function(){return{name:o,todos:n}}}}("Home");g.addNotes("this is a default project"),n.add(g),u.render(g);let m=r("todo1","today","high");m.addNotes("this is notes"),m.setPriority("low"),d.add(m),console.log(m.getPriority()),console.log(d.getList()),console.log(d.getTodo("todo1")),g.addTodo(m),u.selectProject(g),m.edit("todo2","tomorrow","high","Home"),console.log(d.getTodo("todo2")),console.log(g.getTodos()),m.moveToProject("Home"),console.log(g.getTodos()),m.reschedule("today");let f=r("todo2","do todo","today","misc");m.addToChecklist(f),console.log(d.getTodo("todo2")),console.log("output for mark"),m.markAsCompleted(),f.markAsCompleted(),m.markAsCompleted(),console.log(m.getTodo());let h=m.getTodo().checkList;console.log(h[0].getTodo()),console.log("trying to remove project from projectList"),console.log(n.getList()),console.log(d.getList()),n.remove("Home"),console.log(d.getList()),console.log(n.getList()),g.edit("Bome"),p()}]);