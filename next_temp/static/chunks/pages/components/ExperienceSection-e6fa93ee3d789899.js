(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[434],{4792:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/ExperienceSection",function(){return t(6094)}])},5265:function(e,n,t){"use strict";t.r(n);var i=t(5893),s=t(7294),a=t(5867),r=function(e){var n=e.company,t=e.position,r=e.date,l=e.description,o=e.skills,c=(0,s.useRef)(null),d=(0,s.useState)(0),p=d[0],u=d[1],x=(0,s.useState)(0),f=x[0],m=x[1],h=function(e){if(c.current){var n,t=c.current.getBoundingClientRect(),i=t.width,s=t.height,a=(e.clientX-t.left)*32.5;u(-(((e.clientY-t.top)*32.5/s-16.25)*1)),m(a/i-16.25)}},b=function(){c.current&&(u(0),m(0))};return(0,i.jsxs)(a.E.div,{ref:c,onMouseMove:h,onMouseLeave:b,style:{transformStyle:"preserve-3d",boxShadow:"0px 5px 10px rgba(0, 0, 0, 0.1)"},animate:{rotateX:p,rotateY:f},whileHover:{scale:1.05},className:"text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1",children:[(0,i.jsx)("h3",{className:"text-lg font-medium pt-8 pb-2 text-blue-600 border-b-2 border-blue-600",children:n}),(0,i.jsx)("h4",{className:"py-4 text-blue-600 text-2xl font-semibold border-b-2 border-blue-600",children:t}),(0,i.jsx)("h4",{className:"py-4 text-gray-600 font-medium",children:(0,i.jsx)("span",{className:"text-blue-600",children:r})}),(0,i.jsx)("p",{className:"py-2",children:l}),(0,i.jsx)("div",{className:"flex flex-wrap gap-2 mt-3",children:o.map(function(e,n){return(0,i.jsx)("p",{className:"text-gray-800 py-1 inline-flex items-center justify-center rounded-full bg-blue-200 px-3",children:e},n)})})]})};r.defaultProps={skills:[]},n.default=r},6094:function(e,n,t){"use strict";t.r(n);var i=t(5893);t(7294);var s=t(5867),a=t(5265),r=function(e){var n=e.experienceInView;return(0,i.jsx)(s.E.section,{className:"relative overflow-hidden",initial:{opacity:0,y:20},animate:{opacity:n?1:0,y:n?0:20},transition:{duration:.5},children:(0,i.jsxs)("div",{className:"mt-20",children:[(0,i.jsx)("div",{className:"text-center",children:(0,i.jsx)(s.E.div,{className:"text-center",whileHover:{scale:1.05},transition:{duration:.3},children:(0,i.jsx)("h3",{className:"text-4xl md:text-6xl font-semibold",children:(0,i.jsx)("span",{style:{fontSize:"2rem"},children:"Experience"})})})}),(0,i.jsxs)("div",{className:"lg:flex gap-10",children:[(0,i.jsx)(a.default,{company:"Champions Insurance",position:"Systems Developer",date:"2023 - Present",description:"Participated in building a web application for a leading insurance company, with a focus on user experience and design.",skills:["Angular","HTML","CSS","JS","TS","Spring Boot","Mysql"]}),(0,i.jsx)(a.default,{company:"App Cake Hong Kong",position:"Software Developer",date:"2022 - 2023",description:"Participated in building web applications for clients, with a focus on user experience, accessibility, and design.",skills:["Angular","HTML","CSS","JS","TS","Spring Boot","React","Next JS"]}),(0,i.jsx)(a.default,{company:"ZUPCO",position:"IT internship",date:"2022 - 2023",description:"Participated in networking , security and building web applications for the company, maintaining software for the company.",skills:["Angular","HTML","CSS","JS","TS",".Net","Mysql","Springboot"]})]})]})})};n.default=r}},function(e){e.O(0,[867,774,888,179],function(){return e(e.s=4792)}),_N_E=e.O()}]);