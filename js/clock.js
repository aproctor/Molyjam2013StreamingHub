// Anytime Anywhere Web Page Clock Generator
// Clock Script Generated at
// http://www.rainbow.arch.scriptmania.com/tools/clock

function tS(){ x=new Date(tN().getUTCFullYear(),tN().getUTCMonth(),tN().getUTCDate(),tN().getUTCHours(),tN().getUTCMinutes(),tN().getUTCSeconds()); x.setTime(x.getTime()); return x; }
function tN(){ return new Date(); }
function lZ(x){ return (x>9)?x:'0'+x; }
function tH(x){ if(x==0){ x=12; } return (x>12)?x-=12:x; }
function y2(x){ x=(x<500)?x+1900:x; return String(x).substring(2,4) }
function dT(timeElId){
    timeElId = timeElId || 'tP';

    var timeEl = document.getElementById(timeElId);
    if(!timeEl){
      document.write('<font size=2 face=Arial><b><span id="'+timeElId+'">'+eval(oT)+'</span></b></font>');
      timeEl = document.getElementById(timeElId);
    }
    timeEl.innerHTML=eval(oT);
    setTimeout('dT("'+timeElId+'")',1000);
}
function aP(x){ return (x>11)?'pm':'am'; }
var dN=new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat'),mN=new Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'),fr=0,oT="dN[tS().getDay()]+' '+tS().getDate()+' '+mN[tS().getMonth()]+' '+y2(tS().getYear())+' '+':'+':'+' '+tH(tS().getHours())+':'+lZ(tS().getMinutes())+':'+lZ(tS().getSeconds())+' '+aP(tS().getHours())";
