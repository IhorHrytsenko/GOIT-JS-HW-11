parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yCUT":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function n(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}var s={days:document.querySelector("span[data-value=days]"),hours:document.querySelector("span[data-value=hours]"),mins:document.querySelector("span[data-value=mins]"),secs:document.querySelector("span[data-value=secs]")},i=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1e3;e(this,t),this.day=n,this.hour=s,this.minutes=i,this.seconds=a,this.startDate=new Date,this.endDate=new Date,this.deltaTime=this.endDate-this.startDate,this.MINUS=o}return n(t,[{key:"timeComponent",value:function(){return{days:Math.floor(this.deltaTime/864e5),hours:Math.floor(this.deltaTime%864e5/36e5),mins:Math.floor(this.deltaTime%36e5/6e4),secs:Math.floor(this.deltaTime%6e4/1e3)}}},{key:"setTimerDay",value:function(e){return this.endDate.setDate(this.startDate.getDate()+e)}},{key:"setTimerHours",value:function(e){return this.endDate.setHours(this.startDate.getHours()+e)}},{key:"setTimerMinutes",value:function(e){return this.endDate.setMinutes(this.startDate.getMinutes()+e)}},{key:"setTimerSeconds",value:function(e){return this.endDate.setSeconds(this.startDate.getSeconds()+e)}},{key:"setTime",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.day,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.hour,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.minutes,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.seconds;return this.setTimerDay(e),this.setTimerHours(t),this.setTimerMinutes(n),this.setTimerSeconds(s),this.deltaTime=this.endDate.getTime()-this.startDate.getTime()}},{key:"changeDeltaTime",value:function(){return this.deltaTime-=this.MINUS}}]),t}(),a=new i(0,5,0,5,1e3);a.setTime();var o=setInterval(function(){0!==a.deltaTime&&(a.changeDeltaTime(),s.days.textContent=a.timeComponent(a.deltaTime).days,s.hours.textContent=a.timeComponent(a.deltaTime).hours,s.mins.textContent=a.timeComponent(a.deltaTime).mins,s.secs.textContent=a.timeComponent(a.deltaTime).secs),0===a.deltaTime&&(s.days.textContent="Finish!",s.hours.textContent="Finish!",s.mins.textContent="Finish!",s.secs.textContent="Finish!",clearInterval(o))},1e3);
},{}]},{},["yCUT"], null)
//# sourceMappingURL=/GOIT-JS-HW-11/timer.acc6d667.js.map