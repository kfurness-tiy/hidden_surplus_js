!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/app/",e(0)}([function(t,e,n){"use strict";n(10),n(1),n(2),n(4),n(3)},function(t,e){"use strict";function n(){console.log("peanut butter"),firebase.auth().signInWithPopup(m).then(function(t){console.log("jelly");t.credential.accessToken;g=t.user,i(),o(g.uid,g.displayName,g.email)}).catch(function(t){t.code,t.message,t.email,t.credential})}function o(t,e,n){firebase.database().ref("users/"+t).set({name:e,email:n})}function i(){$("#logIn").hide(),$("#signInNav").hide(),$("#form").show(),$("#signOutNav").show(),$("#welcomeUser").html("Hello, "+g.displayName+". <br/> Fill out the form below to do some good!")}function a(){firebase.auth().signOut().then(function(){$("#form").hide(),$("#signOutNav").hide(),$("#formSubmitMsg").hide(),$("#signInNav").show(),$("#logIn").show(),$("#signOutMsg").show(),$("#signOutMsg").html("Your have successfully logged out."),document.getElementById("doGoodForm").reset()},function(t){$("#signOutMsg").html("We were not able to log you out. Please try again.")})}function r(){var t=document.getElementById("name").value,e=Number(document.getElementById("amount").value),n=document.getElementById("donateTo").value,o=document.getElementById("gaveUp").value;return""===t||""===e||isNaN(e)||""===n||""===o?""===t?(alert("Please fill in your name."),!1):""===e||isNaN(e)?(alert("Please put in a number for the amount donated."),!1):""===n?(alert("Please fill in where you donated to."),!1):""===o?(alert("Please fill in what you gave up."),!1):(alert("It looks like some fields were not filled in correctly. Please try again."),!1):(p(),!1)}function s(){$("#formSubmitMsg").show(),$("#form").hide()}function l(){document.getElementById("doGoodForm").reset(),$("#form").show(),$("#formSubmitMsg").hide()}function d(t){var e=t,n=f.push().key,o="new_donation_"+h.push().key,i={},a={};i["doGood/"+n]=e,a["users/"+g.uid+"/"+o]=e,c.update(i),c.update(a)}function p(){var t=new Date,e={name:document.getElementById("name").value,amount:Number(document.getElementById("amount").value),donateTo:document.getElementById("donateTo").value,gaveUp:document.getElementById("gaveUp").value,selectWhat:document.getElementById("selectWhat").value,selectWhere:document.getElementById("selectWhere").value,showNameInfo:$("input[name=showInfo]:checked").val(),postTime:t.getTime(),userId:g.uid,userName:g.displayName};d(e),s()}var u={apiKey:"AIzaSyAxBPqozNv7Ra_Kn8m9E0l2BWUjMhm_pfI",authDomain:"hidden-surplus-js.firebaseapp.com",databaseURL:"https://hidden-surplus-js.firebaseio.com",storageBucket:"hidden-surplus-js.appspot.com",messagingSenderId:"393536735786"};firebase.initializeApp(u);var c=firebase.database().ref(),f=c.child("doGood"),h=c.child("users");$(document).ready(function(){$("#form").hide(),$("#signOutNav").hide(),$("#signOutMsg").hide(),$("#formSubmitMsg").hide()});var g,m=new firebase.auth.GoogleAuthProvider;$(".signIn").click(n),$(".signOut").click(a),$("#submitForm").click(r),$("#showAnotherForm").click(l)},function(t,e){"use strict";var n=firebase.database().ref(),o=n.child("doGood");o.on("value",function(t){function e(){function t(t){var e=Math.round(Math.random()*(t-2*r+5)+r);return e}var e=d3.select("body").select(".scatter");e.empty()||e.remove();var n=.4*$(window).height(),i=.75*$(window).innerWidth(),a=d3.select("#svg").append("svg").classed("scatter",!0),r=(a.attr("width",i),a.attr("height",n),12),s=a.append("g"),l=d3.select("body").append("div").classed("tooltip",!0).style("opacity","0").style("position","absolute"),d=new Date,p=d.getTime(),u=864e5,c=p-u,f=d3.scaleOrdinal().range(["rgb(30,156,150)","rgb(115,191,184)","rgb(59,102,112)","rgb(158,157,154)","rgb(80,163,153)"]),h=d3.scaleOrdinal().range(["rgba(30,156,150,0.2)","rgba(115,191,184,0.2)","rgba(59,102,112,0.2)","rgba(158,157,154,0.2)","rgba(80,163,153,0.2)"]),g=function(t,e,n,i){i.style.fill="rgb(51,51,51)",d3.select(i).attr("r",15).classed("growRad",!0),l.style("opacity","5").style("left",d3.event.pageX+"px").style("top",d3.event.pageY+"px"),d3.select(".tooltip").classed("hidden",!1),l.html(function(){return"true"===o[e].showNameInfo?'<span class="dispAmount"> $'+o[e].amount+'</span><br/><span class="dispTo"> donated to </span> <br/> <span class="dispToText"> '+o[e].donateTo+'</span><hr/><span class="dispTo">'+o[e].name+' gave up <br/></span><span class="dispToText">'+o[e].gaveUp+"</span>":'<span class="dispAmount"> $'+o[e].amount+'</span><br/><span class="dispTo"> donated to </span><br/><span class="dispToText">'+o[e].donateTo+'</span><hr/><span class="dispTo"> Anonymous gave up <br/></span><span class="dispToText">'+o[e].gaveUp+"</span><br/>"})},m=function(t,e,n,o){d3.select(".tooltip").classed("hidden",!0),d3.select(o).attr("r",12).classed("growRad",!1),$(o).hasClass("newer")?o.style.fill=f(e):o.style.fill=h(e)};s.selectAll("circle").data(o).enter().append("circle").attr("cx",function(e){return t(i)}).attr("cy",function(e){return t(n)}).attr("r",r).attr("class",function(t){return c<=t.postTime?"newer":"older"}).style("fill",function(t,e){return $(this).hasClass("newer")?f(e):h(e)}).on("mouseover",function(t,e,n){var o=this;g(t,e,n,o)}).on("touchstart",function(t,e,n){var o=this;g(t,e,n,o)}).on("mouseout",function(t,e,n){var o=this;m(t,e,n,o)}).on("touchend",function(t,e,n){var o=this;m(t,e,n,o)})}var n=t.val(),o=Object.values(n),i=0;o.map(function(t,e,n){return i+=t.amount}),document.getElementById("totalAmounts").innerHTML="$"+i.toFixed(2),$(window).resize(e),d3.select(window).on("resize",e),e()})},function(t,e){"use strict";var n=firebase.database().ref(),o=n.child("doGood");o.on("value",function(t){function e(){function e(){var t=[];l.map(function(e,n){t.push(e.total)});var e=Math.max.apply(Math,t);return e}var n=d3.select("body").select(".bar");n.empty()||n.remove();var o=["Food/Beverage","Beauty","Clothing/Accesories","Enertainment","Service","Other"],i=t.val(),a=Object.values(i),r=[];a.map(function(t){r.push(t.selectWhat)});var s=function(){var t=["food","beauty","clothing","entertainment","service","product"],e=new Array;return t.map(function(t,n){var i=0;r.map(function(e){t===e&&(i+=1)});var a={category:o[n],total:i};e.push(a)}),e},l=s(),d=d3.scaleOrdinal().range(["rgba(30,156,150,0.4)","rgba(115,191,184,0.4)","rgba(59,102,112,0.4)","rgba(158,157,154,0.4)","rgba(80,163,153,0.4)","rgba(121,121,121,0.4)"]),p=d3.scaleOrdinal().range(["rgb(30,156,150)","rgb(115,191,184)","rgb(59,102,112)","rgb(158,157,154)","rgb(80,163,153)","rgb(121,121,121)"]),u=(e(),function(){return $(window).innerWidth()>752?.3*$(window).innerWidth():.75*$(window).innerWidth()}),c=function(){return $(window).innerWidth()>752?.3*$(window).innerWidth():.5*$(window).innerWidth()},f=d3.select("body").append("div").attr("class","tooltipBar").style("opacity","0").style("position","absolute"),h=d3.scaleBand().domain(o).range([0,u()]).paddingInner(.1176),g=(d3.axisBottom(h),d3.select("#whatDonateChartDiv").append("svg").classed("bar",!0).attr("height",c()).attr("width",u())),m=function(t,e,n,o){o.style.fill=p(e),f.style("opacity","5").style("left",d3.event.pageX-50+"px").style("top",d3.event.pageY-70+"px"),d3.select(".tooltipBar").classed("hidden",!1),f.html('<span class="totalBarDisp">'+t.total+' donations</span> <br/> <span class="fromDisp"> from </span> <br/> <span class="categoryDisp">'+t.category+"</span>")},b=function(t,e,n,o){o.style.fill=d(e),d3.select(".tooltipBar").classed("hidden",!0)};g.selectAll("rect").data(l).enter().append("rect").attr("height",function(t){return 15*t.total}).attr("width",function(t,e){var n=Math.floor(u()/6-5);return n}).attr("x",function(t,e){return u()/6*e}).attr("y",function(t,e){return c()-20-15*t.total}).attr("fill",function(t,e){return d(e)}).on("mouseover",function(t,e,n){var o=this;m(t,e,n,o)}).on("touchstart",function(t,e,n){var o=this;m(t,e,n,o)}).on("mouseout",function(t,e,n){var o=this;b(t,e,n,o)}).on("touchend",function(t,e,n){var o=this;b(t,e,n,o)})}$(window).resize(e),d3.select(window).on("resize",e),e()})},function(t,e){"use strict";var n=firebase.database().ref(),o=n.child("doGood");o.on("value",function(t){function e(){function e(){var t=["charity","family","school","fundraiser","other"],e=new Array;return t.map(function(t,n,o){var i=["Charity","Family/Friend","School","Fundraiser","Other"],a=0;s.map(function(e){t===e&&(a+=1)});var l={category:i[n],total:a,pieTotal:r.length};e.push(l)}),e}function n(t){g.append("text").data(function(){return Object.values(t)}).attr("text-anchor","middle").attr("dominant-baseline","middle").style("fill","black").text(function(t,e){var n=Math.floor(t.total/t.pieTotal*100);return t.category+" "+n+"%"})}function o(){g.selectAll("text").style("visibility","hidden")}var i=d3.select("body").select(".pie");i.empty()||i.remove();var a=t.val(),r=Object.values(a),s=[];r.map(function(t,e,n){s.push(t.selectWhere)});var l=function(){return $(window).innerWidth()>752?.3*$(window).innerWidth():.75*$(window).innerWidth()},d=function(){return $(window).innerWidth()>752?.3*$(window).innerWidth():.75*$(window).innerWidth()},p=Math.min(l(),d())/2.5,u=80,c=d3.scaleOrdinal().range(["rgba(30,156,150,0.4)","rgba(115,191,184,0.4)","rgba(59,102,112,0.4)","rgba(158,157,154,0.4)","rgba(80,163,153,0.4)","rgba(121,121,121,0.4)"]),f=d3.scaleOrdinal().range(["rgb(30,156,150)","rgb(115,191,184)","rgb(59,102,112)","rgb(158,157,154)","rgb(80,163,153)","rgb(121,121,121)"]),h=e(),g=d3.select("#whereDonateChartDiv").append("svg").classed("pie",!0).attr("width",l()).attr("height",d()).append("g").attr("transform","translate("+l()/2+","+d()/2+")"),m=d3.arc().innerRadius(p-u).outerRadius(p),b=d3.pie().value(function(t){return t.total}).sort(null),v=function(t,e,o,i){i.style.fill=f(e),d3.select(i).transition().attr("d",m.innerRadius(.5*p).outerRadius(1.05*p)),n(t)},x=function(t,e,n,i){i.style.fill=c(e),d3.select(i).transition().attr("d",m.innerRadius(p-u).outerRadius(p)),o(t)};g.selectAll("path").data(b(h)).enter().append("path").attr("d",m).attr("fill",function(t,e){return c(e)}).on("mouseover",function(t,e,n){v(t,e,n,this)}).on("touchstart",function(t,e,n){v(t,e,n,this)}).on("mouseout",function(t,e,n){var o=this;x(t,e,n,o)}).on("touchend",function(t,e,n){var o=this;x(t,e,n,o)}),g.append("circle").attr("r",.6*p).style("fill","white")}$(window).resize(e),d3.select(window).on("resize",e),e()})},function(t,e,n){e=t.exports=n(6)(),e.push([t.id,'@font-face{font-family:Lato;src:font-files("./Lato-Light.ttf")}*{font-family:Lato,sans-serif;font-weight:300;color:#333;margin:0}body,html{height:100%}p{font-size:16px;line-height:160%}button{border-radius:4px;background-color:#72bfb8;border:none;width:160px;height:45px}button,i{color:#fff}i{margin-right:6px}.container-fluid{margin-right:0;margin-left:0;padding-right:0;padding-left:0}.title{font-size:26px}.wrapper{min-height:100%;margin-bottom:-58px}.wrapper:after{content:"";display:block}.site-footer,.wrapper:after{height:58px}header{display:flex;justify-content:space-between;align-items:center}header .logo{display:inline-block;padding:8px 0}header nav{display:inline-block;vertical-align:middle;text-align:right}header ul{margin-bottom:0}header li{display:inline-block;padding:1em}header a{color:#333}header a:hover{color:#72bfb8;font-weight:bolder}header button{height:32px;width:93px;font-family:Maitree,serif}.jumbotronDiv{display:flex;height:550px;flex-direction:column;justify-content:center;align-items:center;background-position:50%;background-image:url('+n(8)+');background-repeat:no-repeat;text-align:center}.jumbotronDiv button{font-size:18px}.jumbotronDiv p{color:#fff;font-size:55px;font-weight:500}.jumbotronDiv .line{font-weight:lighter;line-height:1;text-align:center}.jumbotronDiv .line span{display:inline-block;position:relative;color:#fff;font-weight:lighter;margin:10px}.jumbotronDiv .line span:after,.jumbotronDiv .line span:before{content:"";position:absolute;height:35px;border-bottom:2px solid hsla(0,0%,100%,.4);top:0;width:140px}.jumbotronDiv .line span:before{right:100%;margin-right:20px}.jumbotronDiv .line span:after{left:100%;margin-left:20px}#toggleButton{background-color:#72bfb8;padding:5px}#about{text-align:center;display:flex;flex-direction:column;align-items:center}#about .title{color:#3b6670;margin-top:44px;margin-bottom:22px}#about p{margin-bottom:10px;max-width:700px}#about p a{color:#3b6670}#about p a:hover{color:#72bfb8}#about p:last-child{margin-bottom:44px}.doGoodSection{display:flex;flex-direction:column;justify-content:center;align-items:center;height:550px;background-image:url('+n(7)+');background-repeat:no-repeat;background-position:50%;text-align:center}#form .title,#form h2{color:#fff}#form h2{font-weight:300}#form div{margin:auto}#form label{color:#fff;font-size:16px;font-weight:300}#form .typeInput input{height:40px;margin:5px 1vw;width:25vw;font-size:18px;padding:10px}#form button{margin:10px}#form select{height:30px;background:#fff;font-size:16px}#form .signOut{background-color:#9e9d9a}#form .signOut:hover{background-color:#737372}#form .dropdown{display:inline-block;margin:20px 6vw}#form .inline{display:inline-block;margin:10px;color:#fff}.dash{line-height:1;margin-top:10px}.dash span{display:inline-block;position:relative;color:#fff;font-weight:500}.dash span:after,.dash span:before{content:"";position:absolute;height:15px;border-bottom:2px solid hsla(0,0%,100%,.4);top:0;width:120px}.dash span:before{right:100%;margin-right:15px}.dash span:after{left:100%;margin-left:15px}#formSubmitMsg h3,#formSubmitMsg p,#logIn h2,#logIn h3,#logIn p{color:#fff}#logIn p{margin:15px}#logIn button{margin:30px;font-size:16px}#logIn #signOutMsg{font-weight:300}#contributions{display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:1271px;margin:auto;background:linear-gradient(90deg,#d1d1d1 0,#faf7fa 29%,#faf7fa 70%,#d1d1d1)}#contributions .title{margin-top:40px;color:#3b6670}#contributions svg{margin-bottom:15vh;max-width:1200px}.tooltip{background-color:hsla(0,0%,99%,.6);border:1px solid hsla(0,2%,82%,.3);padding:5px;min-width:150px;margin:3px auto;text-align:center;color:#000}.tooltip .dispAmount{font-size:24px}.tooltip .dispTo{font-size:12px;font-style:italic}.tooltip .dispToText{font-size:16px}.tooltip hr{margin:3px;border:1px solid rgba(59,102,112,.4)}.tooltip.hidden{display:none}.totalAmounts{max-width:1656px;text-align:center;padding:15px;background-color:#50a399}.totalAmounts p{font-weight:300;color:#fff;text-transform:uppercase;margin-bottom:0;font-size:22px}.totalAmounts #totalAmounts{font-size:36px;font-weight:500;margin-bottom:0}#donations h3{margin-top:44px;color:#3b6670}#donations .hoverMsg{font-style:italic;font-size:14px;margin-top:10px}.tooltipBar{font-size:16px;text-align:center;background-color:hsla(0,0%,99%,.8);border:1px solid hsla(0,2%,82%,.3)}.tooltipBar .hidden{display:none}.tooltipBar .fromDisp{font-style:italic;font-size:14px}.growRad{stroke-width:5;stroke:#50a399}.donate{margin-bottom:20px}#whereDonateChartDiv text{font-size:16px}svg.bar{padding-bottom:10px;margin-bottom:10px}g.hideAxis line,g.hideAxis path{display:none}footer{background-color:#3b6670;max-width:1656px;margin:auto}footer div{padding:10px 0}button:hover{background-color:#58948e}a:hover{text-decoration:none}@media (max-width:992px){header .logo{width:275px;padding:8px 0}nav ul{padding:0}nav li{font-size:12px;padding:3px}}@media (max-width:767px){nav{float:right}header,nav ul li{display:block}}@media (max-width:700px){.jumbotronDiv{background-size:cover}.jumbotronDiv p{font-size:35px}.jumbotronDiv .line span:after,.jumbotronDiv .line span:before{height:22px;width:70px}#form .typeInput input{display:block;margin:10px auto;width:auto}#doGood{background-size:cover;height:auto}}@media (max-width:600px){#doGood{background-color:#3b6670;background-size:cover;height:auto}}@media (max-width:480px){.line span:after,.line span:before{display:none}.title{font-size:22px}#form .dash span:after,#form .dash span:before{width:60px}}@media (max-width:410px){header .logo{width:200px;padding:8px 0}nav button{width:80px}}@media (max-width:379px){h3:first-child{margin-top:25px}.dash{margin-top:7px}}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(o[a]=!0)}for(i=0;i<e.length;i++){var r=e[i];"number"==typeof r[0]&&o[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},function(t,e,n){t.exports=n.p+"src/app/img/doGood.jpg?92a58ccf3e"},function(t,e,n){t.exports=n.p+"src/app/img/jumbotrong.jpg?066520fbba"},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=f[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(d(o.parts[a],e))}else{for(var r=[],a=0;a<o.parts.length;a++)r.push(d(o.parts[a],e));f[o.id]={id:o.id,refs:1,parts:r}}}}function i(t){for(var e=[],n={},o=0;o<t.length;o++){var i=t[o],a=i[0],r=i[1],s=i[2],l=i[3],d={css:r,media:s,sourceMap:l};n[a]?n[a].parts.push(d):e.push(n[a]={id:a,parts:[d]})}return e}function a(t,e){var n=m(),o=x[x.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),x.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function r(t){t.parentNode.removeChild(t);var e=x.indexOf(t);e>=0&&x.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",a(t,e),e}function l(t){var e=document.createElement("link");return e.rel="stylesheet",a(t,e),e}function d(t,e){var n,o,i;if(e.singleton){var a=v++;n=b||(b=s(e)),o=p.bind(null,n,a,!1),i=p.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(e),o=c.bind(null,n),i=function(){r(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=u.bind(null,n),i=function(){r(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}function p(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=y(e,i);else{var a=document.createTextNode(i),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}function u(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function c(t,e){var n=e.css,o=e.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}var f={},h=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},g=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,v=0,x=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=g()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=i(t);return o(n,e),function(t){for(var a=[],r=0;r<n.length;r++){var s=n[r],l=f[s.id];l.refs--,a.push(l)}if(t){var d=i(t);o(d,e)}for(var r=0;r<a.length;r++){var l=a[r];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete f[l.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var o=n(5);"string"==typeof o&&(o=[[t.id,o,""]]);n(9)(o,{});o.locals&&(t.exports=o.locals)}]);