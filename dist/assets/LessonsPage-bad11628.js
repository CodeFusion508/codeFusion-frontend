import{z as y,_ as S,m as v,i,r as d,o as e,c as n,b as l,F as r,A as p,a as s,t as c,y as f,p as w,e as b}from"./index-b701a59a.js";import{g as x,u as k}from"./daysStore-a054eeaf.js";const _=y("sprints",{actions:{async getSprints(){const t=await x();this.sprints=t}},state:()=>({sprints:[]})});const B={computed:{...v(_,["sprints"])},async created(){await this.getSprints()},methods:{...i(k,["setDaysBySprintUuid"]),...i(_,["getSprints"]),changeRouteLessons(t){this.setDaysBySprintUuid(t),this.$router.push({name:"lessons-day"})}}},L=t=>(w("data-v-50dc3161"),t=t(),b(),t),$={class:"text-center mt-3 fw-light fst-italic text-white"},A={class:"row g-0 text-center"},C={class:"card bg-dark-subtle border-0 shadow-sm"},D={class:"card-body"},I={class:"card-title text-white"},z=L(()=>s("hr",null,null,-1)),F={class:"card-text text-white truncate-text-line"},N=["onClick"];function P(t,R,U,V,E,u){const h=d("nav-bar"),m=d("nav-footer");return e(),n(r,null,[l(h),(e(!0),n(r,null,p(t.sprints,(j,o)=>(e(),n("div",{key:o},[s("h3",$," Sección "+c(o.split("_")[1]),1),s("div",A,[(e(!0),n(r,null,p(t.sprints[o],(a,g)=>(e(),n("div",{key:g,class:f(["col-12 px-2 my-3",t.sprints.length<=3?"col-sm":"col-sm-3"])},[s("div",C,[s("div",D,[s("h5",I,c(a.title),1),z,s("p",F,c(a.desc),1),s("button",{class:"btn gradient-purple text-white",onClick:q=>u.changeRouteLessons(a.uuid)}," Aprende ",8,N)])])],2))),128))])]))),128)),l(m)],64)}const J=S(B,[["render",P],["__scopeId","data-v-50dc3161"]]);export{J as default};
