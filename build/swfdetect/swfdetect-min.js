YAHOO.namespace("util");(function(){var A=0;var B=YAHOO.env.ua;var C="ShockwaveFlash";if(B.gecko||B.webkit||B.opera){if((mF=navigator.mimeTypes["application/x-shockwave-flash"])){if((eP=mF.enabledPlugin)){var G=[];G=eP.description.replace(/\s[rd]/g,".").replace(/[A-Za-z\s]+/g,"").split(".");A=parseFloat(G[0]+"."+G[2]);}}}else{if(B.ie){try{var D=new ActiveXObject(C+"."+C+".6");D.AllowScriptAccess="always";}catch(F){if(D!=null){A=6;}}if(A==0){try{var E=new ActiveXObject(C+"."+C);var G=[];G=E.GetVariable("$version").replace(/[A-Za-z\s]+/g,"").split(",");A=parseFloat(G[0]+"."+G[2]);}catch(F){}}}}B.flash=A;YAHOO.util.SWFDetect={getFlashVersion:function(){return A;},isFlashVersionAtLeast:function(H){return(A>=H);}};})();YAHOO.register("swfdetect",YAHOO.util.SWFDetect,{version:"2.7.0",build:"1796"});YAHOO.register("swfdetect",YAHOO.widget.SWFDetect,{version:"@VERSION@",build:"@BUILD@"});