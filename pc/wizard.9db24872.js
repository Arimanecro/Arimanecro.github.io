import{S as p,i as w,s as z,b as h,f as g,g as k,d as m,h as d,k as u,a as y,m as S,n as f,c as b,z as v}from"./chunks/index.7b44501a.js";import{C as A}from"./chunks/wizard-context.fb9f883a.js";/* empty css                              */function C(t){let i,n,a,s,c;return{c(){i=h("div"),this.h()},l(e){i=g(e,"DIV",{class:!0,style:!0}),k(i).forEach(m),this.h()},h(){d(i,"class",n=u(`wizard_${r} wizard_${t[0].action} wizard_${r}_${t[0].action}`)+" svelte-1qewxlo"),d(i,"style",a=`animation: ${t[2][t[0].action]};animation-direction: normal;animation-fill-mode: forwards;`)},m(e,l){y(e,i,l),t[5](i),s||(c=S(i,"animationend",t[3]),s=!0)},p(e,[l]){l&1&&n!==(n=u(`wizard_${r} wizard_${e[0].action} wizard_${r}_${e[0].action}`)+" svelte-1qewxlo")&&d(i,"class",n),l&1&&a!==(a=`animation: ${e[2][e[0].action]};animation-direction: normal;animation-fill-mode: forwards;`)&&d(i,"style",a)},i:f,o:f,d(e){e&&m(i),t[5](null),s=!1,c()}}}var q=t=>t.sort(()=>Math.random()-.5),r=q(["fire","ice"])[0];function E(t,i,n){let a,s;b(t,A,o=>n(4,s=o));var c,e={appearing:"wizard_appearance 0.4s steps(4)",idle:`wizard_${r}_idle 0.65s steps(5) infinite`,attack:`wizard_${r}_attack 0.5s steps(5)`},l=o=>{if(o.animationName=="wizard_appearance"&&n(0,a={...a,action:"idle"}),o.animationName==`wizard_${r}_attack`)return n(0,a={...a,action:"idle",count:n(0,++a.count,a)})};function _(o){v[o?"unshift":"push"](()=>{c=o,n(1,c)})}return t.$$.update=()=>{t.$$.dirty&17&&(s.turnOffAnimation||(s.wizardStatus=="attack"&&!a.count?n(0,a.action="attack",a):s.wizardStatus=="attack"&&a.count?n(0,a.action="idle",a):s.wizardStatus=="idle"&&a.count&&n(0,a.count=0,a)))},n(0,a={action:"appearing",count:0}),[a,c,e,l,s,_]}class M extends p{constructor(i){super(),w(this,i,E,C,z,{})}}export{M as default};
