(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(5),i=a.n(n),s=a(4),r=a(2),o=a(6),c=a(7),l=a(9),d=a(8),u=a(1),m=a.n(u),h=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),b=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],p=a(0),j=function(e){var t=e.user;return Object(p.jsxs)("div",{className:"user__name",style:{color:"red"},children:["name - ",void 0!==t?t.name:"no name"]})},y=function(e){var t=e.title,a=e.completed,n=e.user;return Object(p.jsxs)("li",{children:[Object(p.jsxs)("div",{children:["title - ",t]}),Object(p.jsxs)("div",{children:["completed - ",a?"true":"false"]}),Object(p.jsx)(j,{user:n}),Object(p.jsx)("hr",{})]})},g=function(e){var t=e.todos;return Object(p.jsx)("ul",{children:t.map((function(e){return Object(u.createElement)(y,Object(r.a)(Object(r.a)({},e),{},{key:e.id}))}))})},f=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={todos:b.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{user:h.find((function(t){return t.id===e.userId}))})})),userId:0,noTitleEntered:!1,noUserSelected:!1,title:""},e.addTodo=function(t){t.preventDefault(),0!==e.state.title.length?0!==e.state.userId?(e.setState((function(e){return{todos:[].concat(Object(s.a)(e.todos),[{userId:e.userId,id:Math.max.apply(Math,Object(s.a)(e.todos.map((function(e){return e.id}))))+1,title:e.title,completed:!1,user:h.find((function(t){return t.id===e.userId}))}])}})),e.setState({userId:0,title:""})):e.setState({noUserSelected:!0}):e.setState({noTitleEntered:!0})},e.handleTitle=function(t){return e.setState({title:t.target.value,noTitleEntered:!1})},e.handleSelect=function(t){return e.setState({userId:+t.target.value,noUserSelected:!1})},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Add todo form"}),Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"Users: "}),h.length]}),Object(p.jsxs)("form",{onSubmit:this.addTodo,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleTitle,placeholder:"title"}),Object(p.jsx)("span",{hidden:!this.state.noTitleEntered,style:{color:"red"},children:"Please enter the title"})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("select",{name:"user",value:this.state.userId,onChange:this.handleSelect,children:[Object(p.jsx)("option",{value:"0",children:"Choose a user"}),h.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.name})}))]}),Object(p.jsx)("span",{hidden:!this.state.noUserSelected,style:{color:"red"},children:"Please choose a user"})]}),Object(p.jsx)("button",{type:"submit",children:"Add"})]}),Object(p.jsx)(g,{todos:this.state.todos})]})}}]),a}(m.a.Component);i.a.render(Object(p.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.06a12726.chunk.js.map