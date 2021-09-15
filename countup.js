"use strict";var __assign=function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},CountUp=function(){function CountUp(target,endVal,options){var _this=this;this.target=target,this.endVal=endVal,this.options=options,this.version="2.0.4",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(timestamp){_this.startTime||(_this.startTime=timestamp);var progress=timestamp-_this.startTime;_this.remaining=_this.duration-progress,_this.useEasing?_this.countDown?_this.frameVal=_this.startVal-_this.easingFn(progress,0,_this.startVal-_this.endVal,_this.duration):_this.frameVal=_this.easingFn(progress,_this.startVal,_this.endVal-_this.startVal,_this.duration):_this.countDown?_this.frameVal=_this.startVal-(_this.startVal-_this.endVal)*(progress/_this.duration):_this.frameVal=_this.startVal+(_this.endVal-_this.startVal)*(progress/_this.duration),_this.countDown?_this.frameVal=_this.frameVal<_this.endVal?_this.endVal:_this.frameVal:_this.frameVal=_this.frameVal>_this.endVal?_this.endVal:_this.frameVal,_this.frameVal=Math.round(_this.frameVal*_this.decimalMult)/_this.decimalMult,_this.printValue(_this.frameVal),progress<_this.duration?_this.rAF=requestAnimationFrame(_this.count):null!==_this.finalEndVal?_this.update(_this.finalEndVal):_this.callback&&_this.callback()},this.formatNumber=function(num){var result,x,x1,x2,x3,neg=num<0?"-":"";if(result=Math.abs(num).toFixed(_this.options.decimalPlaces),x1=(x=(result+="").split("."))[0],x2=1<x.length?_this.options.decimal+x[1]:"",_this.options.useGrouping){x3="";for(var i=0,len=x1.length;i<len;++i)0!==i&&i%3==0&&(x3=_this.options.separator+x3),x3=x1[len-i-1]+x3;x1=x3}return _this.options.numerals&&_this.options.numerals.length&&(x1=x1.replace(/[0-9]/g,function(w){return _this.options.numerals[+w]}),x2=x2.replace(/[0-9]/g,function(w){return _this.options.numerals[+w]})),neg+_this.options.prefix+x1+x2+_this.options.suffix},this.easeOutExpo=function(t,b,c,d){return c*(1-Math.pow(2,-10*t/d))*1024/1023+b},this.options=__assign({},this.defaults,options),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(endVal),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof target?document.getElementById(target):target,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return CountUp.prototype.determineDirectionAndSmartEasing=function(){var end=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>end;var animateAmount=end-this.startVal;if(Math.abs(animateAmount)>this.options.smartEasingThreshold){this.finalEndVal=end;var up=this.countDown?1:-1;this.endVal=end+up*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=end,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},CountUp.prototype.start=function(callback){this.error||(this.callback=callback,0<this.duration?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},CountUp.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},CountUp.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},CountUp.prototype.update=function(newEndVal){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(newEndVal),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},CountUp.prototype.printValue=function(val){var result=this.formattingFn(val);"INPUT"===this.el.tagName?this.el.value=result:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=result:this.el.innerHTML=result},CountUp.prototype.ensureNumber=function(n){return"number"==typeof n&&!isNaN(n)},CountUp.prototype.validateValue=function(value){var newValue=Number(value);return this.ensureNumber(newValue)?newValue:(this.error="[CountUp] invalid start or end value: "+value,null)},CountUp.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},CountUp}();