(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{173:function(e,a,n){"use strict";var t=n(0),c=n.n(t);n(32),n(174);a.a=function(e){var a=e.show?{display:"block"}:{display:"none"},n="";return n=e.score>0?"score-badge positive":e.score<0?"score-badge negative":"score-badge neutral",c.a.createElement("div",{className:n,style:a},c.a.createElement("span",{className:"score-icon"},c.a.createElement("img",{src:e.icon,alt:e.name,width:100,height:100})),c.a.createElement("h3",null,e.name),c.a.createElement("p",null,e.description))}},174:function(e,a,n){},182:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),o=n(173);a.default=function(e){var a=e.siteData||{},n=!1;0!==Object.keys(a).length&&a.constructor===Object&&a.wappalyzer.length&&a.wappalyzer.some(function(a){return a.name===e.badge.badge_name})&&(console.log(e.badge.badge_name+" FOUND"),e.updateScore(e.badge.badge_score,e.badge._id),n=!0);var t="https://www.wappalyzer.com/images/icons/"+e.badge.badge_icon;return c.a.createElement(o.a,{show:n,name:e.badge.badge_name,icon:t,description:e.badge.badge_description,score:e.badge.badge_score})}}}]);
//# sourceMappingURL=10.8f1f3c92.chunk.js.map