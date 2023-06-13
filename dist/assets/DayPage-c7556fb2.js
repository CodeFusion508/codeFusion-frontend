import{i as f,h as b,_ as v,o as n,c as o,a as e,t as i,F as m,A as g,p as k,e as w,m as T,r as _,b as h,y as $,x as L}from"./index-b701a59a.js";import{u as p}from"./daysStore-a054eeaf.js";const D={props:{index:{type:Number,default:()=>0},listTask:{type:Array,default:()=>[]},day:{type:Object,default:()=>({})}},methods:{...f(b,["setUuidContent"]),changeRouter(t="",a=""){this.setUuidContent(a),this.$router.push({name:t})},getRouterPath(t=[]){switch(t[1]){case"Problems":return"content-problems";case"Video":return"content-video";case"Text":return"content-text";case"Quiz":return"content-quiz";default:throw{message:"The label not found"}}}}},B=t=>(k("data-v-edfdeab1"),t=t(),w(),t),S={class:"card border-0 shadow-sm"},P={class:"card-body"},U={class:"card-title text-center py-3"},V={class:"text-center"},I=B(()=>e("hr",{class:"hr hr-blurry"},null,-1)),N={class:"timeline"},R={class:"d-flex justify-content-end"},z={class:"col-sm-4 col-12"},A=["onClick"];function E(t,a,l,x,c,d){return n(),o("main",null,[e("div",S,[e("div",P,[e("h6",U,[e("h4",null,"Día "+i(l.index+1),1),e("h3",V,i(l.day.desc),1),I]),e("div",null,[e("ul",N,[(n(!0),o(m,null,g(l.listTask,(s,u)=>(n(),o("li",{key:u,class:"event"},[e("div",null,[e("h3",null,i(s.title),1),e("p",null,i(s.desc),1),e("label",null,"Earn "+i(s.exp)+" experience",1),e("div",R,[e("div",z,[e("button",{class:"btn btn-primary form-control",onClick:y=>d.changeRouter(d.getRouterPath(s.labels),s.uuid)}," Ver selección ",8,A)])])])]))),128))])])])])])}const F=v(D,[["render",E],["__scopeId","data-v-edfdeab1"]]);const M={components:{"time-line":F},data(){return{indexContent:0,layoutTimeLine:!1}},computed:{...T(p,["days","result","sprintUuid"])},async created(){this.sprintUuid===""&&this.$router.push({name:"lessons"}),await this.getDaysByModule(),this.days.length>=1&&await this.getContent(this.days[this.indexContent].uuid,0)},methods:{...f(p,["getDaysByModule","getByContent"]),async getContent(t,a){this.layoutTimeLine=!1,this.indexContent=a,await this.getByContent(t),this.layoutTimeLine=!0}}},q={class:"container mt-5"},O={class:"row"},Q={class:"col-sm-12 col-md-12 col-lg-12 col-12 pb-3"},j={class:"row justify-content-between"},G=["onClick"],H={key:0,class:"col-md-12 col-sm-12 col-lg-12 col-12"};function J(t,a,l,x,c,d){const s=_("nav-bar"),u=_("time-line"),y=_("nav-footer");return n(),o(m,null,[h(s),e("div",q,[e("div",O,[e("div",Q,[e("div",j,[(n(!0),o(m,null,g(t.days,(C,r)=>(n(),o("div",{key:r,class:"col-sm px-3"},[e("div",{class:$(["content-item-day d-flex justify-content-center align-items-center",c.indexContent===r?"content-activated":""]),onClick:K=>d.getContent(C.uuid,r)},[e("h6",null,"Día "+i(r+1),1)],10,G)]))),128))])]),c.layoutTimeLine?(n(),o("div",H,[h(u,{index:c.indexContent,"list-task":t.result,day:t.days[c.indexContent]},null,8,["index","list-task","day"])])):L("",!0)])]),h(y)],64)}const Y=v(M,[["render",J]]);export{Y as default};
