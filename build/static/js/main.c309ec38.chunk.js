(this["webpackJsonpdegree-helper-front"]=this["webpackJsonpdegree-helper-front"]||[]).push([[0],{72:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(11),o=a.n(i),r=a(30),s=a.n(r),l=a(55),u=a(19),j=a(50),d=a(48),m=a(90),h=a(57);function p(e,t){var a=function(e,t){var a={};if(void 0===e||"All Courses"===e)a=t;else{a[e]=t[e];for(var n=a[e].prerequisiteCourseCodes.slice();n.length>0;){var c=n.pop();a[c]=t[c];for(var i=t[c].prerequisiteCourseCodes,o=i.length,r=0;r<o;r++)n.push(i[r])}}return a}(e,t),n=function(e){var t={1:[],2:[],3:[],4:[]};for(var a in e){var n=a[3];"r"===n&&console.log(a),t[n].push(a)}return t}(a),c=[],i=0,o=0;for(var r in n){for(var s=n[r],l=n[r].length,u=0;u<l;u++)i>7&&(i=0,o++),c.push({id:s[u],type:"input",connectable:!1,data:{label:s[u]},position:{x:25+175*i,y:25+100*o}}),i++;o++}for(var j in a)for(var d=a[j].prerequisiteCourseCodes,m=d.length,h=0;h<m;h++)c.push({id:"e"+d[h]+"-"+j,source:d[h],target:j,animated:!0,arrowHeadType:"arrowclosed",sourcePosition:"top",targetPosition:"bottom"});return c}a(72);var x=a(2);function b(e){return Object(x.jsxs)(m.a,Object(j.a)(Object(j.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(x.jsx)(m.a.Header,{closeButton:!0,children:Object(x.jsx)(m.a.Title,{id:"contained-modal-title-vcenter",children:e.modalTitle})}),Object(x.jsx)(m.a.Body,{children:e.modalDescription.split("\n").map((function(e){return Object(x.jsxs)("p",{children:[" ",e]})}))}),Object(x.jsx)(m.a.Footer,{children:Object(x.jsx)(h.a,{onClick:e.onHide,children:"Close"})})]}))}function O(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(""),r=Object(u.a)(o,2),s=r[0],l=r[1],j=Object(n.useState)(""),m=Object(u.a)(j,2),h=m[0],O=m[1],v=function(t){if(void 0!==t.srcElement){var a=t.srcElement.innerText,n=e.courseDataDictionary[a].courseName,c=e.courseDataDictionary[a].courseDescription;O(c),l(n),i(!0)}},C=p(e.course,e.courseDataDictionary);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(b,{show:c,onHide:function(){return i(!1)},modalTitle:s,modalDescription:h}),Object(x.jsxs)("div",{className:"courseGraph",children:[Object(x.jsx)("div",{className:"currentCourseLabel",children:void 0===e.course||"All Courses"===e.course?"All Courses":"("+e.course+") "+e.courseDataDictionary[e.course].courseName}),Object(x.jsx)(d.b,{children:Object(x.jsx)(d.c,{elements:C,onElementClick:v,children:Object(x.jsx)(d.a,{})})})]})]})}var v=a(23);a(76);function C(){return Object(x.jsx)("div",{children:Object(x.jsxs)("ul",{className:"instructions",children:[Object(x.jsx)("li",{children:"Select a department and optionally a course from the drop down menus"}),Object(x.jsxs)("li",{children:["Control the prerequisite graph using the controls in the bottom left corner, or by scrolling / panning with your mouse. If the graph is not displayed correctly, recenter it using the fullscreen button  ",Object(x.jsx)(v.c,{className:"fullscreenIcon"})]}),Object(x.jsx)("li",{children:"You can drag the course nodes around to get a better view of the edges"}),Object(x.jsx)("li",{children:"Click on a course to display the course name and description"})]})})}var f=a(91),g=a(92),N=a(89),y=a(88),D=a(31),S=a(52),A=a(9),q=a(51),E=a(49),I=a(58),w=a(59),T=a(60),F=a(53),H=a(61),P=a(62),k=a(63),L=[{title:"Anthropology",path:"/Anthropology",icon:Object(x.jsx)(q.a,{}),cName:"nav-text"},{title:"Astronomy",path:"/Astronomy",icon:Object(x.jsx)(q.b,{}),cName:"nav-text"},{title:"Biology",path:"/Biology",icon:Object(x.jsx)(A.p,{}),cName:"nav-text"},{title:"Biomedical Communications",path:"/BiomedicalCommunications",icon:Object(x.jsx)(A.l,{}),cName:"nav-text"},{title:"Chemistry",path:"/ComputerScience",icon:Object(x.jsx)(A.f,{}),cName:"nav-text"},{title:"Cinema Studies",path:"/CinemaStudies",icon:Object(x.jsx)(E.c,{}),cName:"nav-text"},{title:"Classical Civilization",path:"/ClassicalCivilization",icon:Object(x.jsx)(A.a,{}),cName:"nav-text"},{title:"Communication, Culture, Information and Technology",path:"/CommunicationCultureAndInformationTechnology",icon:Object(x.jsx)(A.n,{}),cName:"nav-text"},{title:"Computer Science",path:"/ComputerScience",icon:Object(x.jsx)(v.a,{}),cName:"nav-text"},{title:"Criminology, Law and Society",path:"/CriminologyLawAndSociety",icon:Object(x.jsx)(v.b,{}),cName:"nav-text"},{title:"Diaspora and Transnational Studies",path:"/DiasporaAndTransNationalStudies",icon:Object(x.jsx)(I.a,{}),cName:"nav-text"},{title:"Drama",path:"/Drama",icon:Object(x.jsx)(A.h,{}),cName:"nav-text"},{title:"Earth Science",path:"/EarthScience",icon:Object(x.jsx)(A.i,{}),cName:"nav-text"},{title:"Economics",path:"/Economics",icon:Object(x.jsx)(E.a,{}),cName:"nav-text"},{title:"Education Studies",path:"/EducationStudies",icon:Object(x.jsx)(A.r,{}),cName:"nav-text"},{title:"English",path:"/English",icon:Object(x.jsx)(A.e,{}),cName:"nav-text"},{title:"Environment",path:"/Environment",icon:Object(x.jsx)(A.o,{}),cName:"nav-text"},{title:"Environmental Geoscience",path:"/EnvironmentalGeoscience",icon:Object(x.jsx)(w.a,{}),cName:"nav-text"},{title:"Fine Art History",path:"/FineArtHistory",icon:Object(x.jsx)(A.m,{}),cName:"nav-text"},{title:"Fine Art Studio",path:"/FineArtStudio",icon:Object(x.jsx)(E.b,{}),cName:"nav-text"},{title:"Forensic Science",path:"/ForensicScience",icon:Object(x.jsx)(A.g,{}),cName:"nav-text"},{title:"French",path:"/French",icon:Object(x.jsx)(S.a,{}),cName:"nav-text"},{title:"Geography",path:"/Geography",icon:Object(x.jsx)(D.d,{}),cName:"nav-text"},{title:"History",path:"/History",icon:Object(x.jsx)(A.b,{}),cName:"nav-text"},{title:"History of Religions",path:"/HistoryOfReligions",icon:Object(x.jsx)(D.b,{}),cName:"nav-text"},{title:"Institute for Management and Innovation",path:"/InstituteForManagementAndInnovation",icon:Object(x.jsx)(T.a,{}),cName:"nav-text"},{title:"Institute for the Study of University Pedagogy (ISUP)",path:"/InstituteForTheStudyOfUniversityPedagogy",icon:Object(x.jsx)(D.e,{}),cName:"nav-text"},{title:"Italian",path:"/Italian",icon:Object(x.jsx)(F.b,{}),cName:"nav-text"},{title:"Language Studies",path:"/LanguageStudies",icon:Object(x.jsx)(A.q,{}),cName:"nav-text"},{title:"Language Teaching and Learning: French and Italian (HBA)",path:"/LanguageTeaching",icon:Object(x.jsx)(D.a,{}),cName:"nav-text"},{title:"Linguistics",path:"/Linguistics",icon:Object(x.jsx)(v.d,{}),cName:"nav-text"},{title:"Management",path:"/Management",icon:Object(x.jsx)(F.a,{}),cName:"nav-text"},{title:"Mathematics",path:"/Mathematics",icon:Object(x.jsx)(S.b,{}),cName:"nav-text"},{title:"Philosophy",path:"/Philosophy",icon:Object(x.jsx)(A.k,{}),cName:"nav-text"},{title:"Physics",path:"/Physics",icon:Object(x.jsx)(A.d,{}),cName:"nav-text"},{title:"Political Science",path:"/PoliticalScience",icon:Object(x.jsx)(D.c,{}),cName:"nav-text"},{title:"Psychology",path:"/Psychology",icon:Object(x.jsx)(v.e,{}),cName:"nav-text"},{title:"Sociology",path:"/Sociology",icon:Object(x.jsx)(H.a,{}),cName:"nav-text"},{title:"South Asian Humanities",path:"/SouthAsianHumanities",icon:Object(x.jsx)(A.c,{}),cName:"nav-text"},{title:"Statistics",path:"/Statistics",icon:Object(x.jsx)(P.a,{}),cName:"nav-text"},{title:"Visual Culture and Communication",path:"/VisualCultureAndCommunication",icon:Object(x.jsx)(A.j,{}),cName:"nav-text"},{title:"Women and Gender Studies",path:"/WomenAndGenderStudies",icon:Object(x.jsx)(k.a,{}),cName:"nav-text"}];a(77),a(78);function B(e){var t=e.courseDataDictionary,a=[{courseCode:"All Courses",courseName:"All Courses"}];for(var n in t)a.push({courseCode:n,courseName:t[n].courseName});return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(f.a,{expand:"lg",bg:"dark",variant:"dark",className:"navbar-colors",children:[Object(x.jsx)(f.a.Brand,{className:"title",children:"UTM Course Explorer"}),Object(x.jsx)(f.a.Toggle,{"aria-controls":"department"}),Object(x.jsx)(f.a.Toggle,{"aria-controls":"course"}),Object(x.jsxs)(g.a,{className:"mr-auto",children:[Object(x.jsx)(f.a.Collapse,{id:"department",children:Object(x.jsx)(N.a,{title:"Department",id:"basic-nav-dropdown",children:Object(x.jsx)(y.a,{className:"nav-dropdown navbar-colors",children:L.map((function(t){return Object(x.jsxs)(N.a.Item,{onClick:function(){e.setDepartmentName({departmentName:t.title}),e.setCourse({course:"All Courses"})},children:[Object(x.jsx)("span",{className:"icon",children:t.icon}),Object(x.jsx)("span",{children:t.title})]},t.title)}))})})}),Object(x.jsx)(f.a.Collapse,{id:"course",children:Object(x.jsx)(g.a,{className:"mr-auto",children:Object(x.jsx)(N.a,{title:"Course",id:"basic-nav-dropdown",children:Object(x.jsx)(y.a,{className:"nav-dropdown navbar-colors",children:a.map((function(t){return Object(x.jsx)(N.a.Item,{onClick:function(){e.setCourse({course:t.courseCode})},children:"("+t.courseCode+") "+t.courseName},t.courseCode)}))})})})})]})]})})}function M(e,t,a,n){var c=e[a].prerequisiteCourseCodes,i=c.length;if(t===a)return!0;for(var o=0;o<i;o++){if(o!==n)if(M(e,t,c[o],o))return!0}return!1}a(82);function _(){var e=Object(n.useState)("Home"),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)("All Courses"),o=Object(u.a)(i,2),r=o[0],j=o[1],d=Object(n.useState)({}),m=Object(u.a)(d,2),h=m[0],p=m[1],b=Object(n.useState)({}),v=Object(u.a)(b,2),f=v[0],g=v[1];return Object(n.useEffect)((function(){fetch("/api",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a)}).then(function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:a=e.sent,p(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[a]),Object(n.useEffect)((function(){!function(e){var t=0,a={};if(void 0!==e.courseData)for(var n=e.courseData.length;t<n;t++){var c=e.courseData[t];c.course_code in a||(a[c.course_code]={courseName:c.name,courseCode:c.course_code,courseDescription:c.all_course_info,prerequisiteCourseCodes:[]})}if(void 0!==e.prerequisiteData){var i=e.prerequisiteData.length;for(t=0;t<i;t++){var o=e.prerequisiteData[t];o.prerequisiteCourseCode in a||(a[o.prerequisiteCourseCode]={courseName:o.name,courseCode:o.prerequisiteCourseCode,courseDescription:o.all_course_info,prerequisiteCourseCodes:[]}),a[o.course_code].prerequisiteCourseCodes.push(o.prerequisiteCourseCode)}}for(var r in a)for(var s=a[r].prerequisiteCourseCodes,l=s.length,u=0;u<l;u++)M(a,s[u],r,u)&&(s.splice(u,1),u--,l--);e.setCourseDataDictionary(a)}({courseData:h.courseData,prerequisiteData:h.prerequisiteData,corequisiteData:h.corequisiteData,setCourseDataDictionary:g})}),[h]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(B,{setDepartmentName:c,setCourse:j,courseDataDictionary:f}),Object(x.jsx)("div",{className:"currentDepartmentLabel",children:a.departmentName}),"Home"===a?Object(x.jsx)(C,{}):Object(x.jsx)(O,{courseDataDictionary:f,departmentName:a.departmentName,course:r.course})]})}o.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(_,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.c309ec38.chunk.js.map