var santa = new Object();

santa.small_path = 'santa.swf';
santa.small_width = '1920';
santa.small_height = '154';


function sizeup987(){
	document.getElementById('jcornerBig').style.top = '0px';
	document.getElementById('jcornerSmall').style.top = '-1000px';
}

function sizedown987(){
	document.getElementById("jcornerSmall").style.top = "0px";
	document.getElementById("jcornerBig").style.top = "-1000px";
}

santa.putObjects = function () {
// <jcornerSmall>
document.write('<div id="jcornerSmall" style="position:fixed;width:'+ santa.small_width +'px;height:'+ santa.small_height +'px;z-index:10;left:50px;top:50px;">');
// object
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
document.write(' codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0"');
document.write(' id="jcornerSmallObject" width="'+santa.small_width+'" height="'+santa.small_height+'">');
// object params
document.write(' <param name="allowScriptAccess" value="always"/> ');
document.write(' <param name="movie" value="'+ santa.small_path +'?'+ santa.small_params +'"/>');
document.write(' <param name="wmode" value="transparent" />');
document.write(' <param name="quality" value="high" /> ');
document.write(' <param name="FlashVars" value="'+santa.small_params+'"/>');
// embed
document.write('<embed src="'+ santa.small_path + '?' + santa.small_params +'" name="jcornerSmallObject" wmode="transparent" quality="high" width="'+ santa.small_width +'" height="'+ santa.small_height +'" flashvars="'+ santa.small_params +'" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>');
document.write('</object></div>');
document.write('</script>');
// </jcornerSmall>
// <jcornerBig>
document.write('<div id="jcornerBig" style="position:fixed;width:'+ santa.big_width +'px;height:'+ santa.big_height +'px;z-index:99999;left:0px;top:0px;">');
// object
document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
document.write(' codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0"');
document.write(' id="jcornerBigObject" width="'+ santa.big_width +'" height="'+ santa.big_height +'">');
// object params
document.write(' <param name="allowScriptAccess" value="always"/> ');
document.write(' <param name="movie" value="'+ santa.big_path +'?'+ santa.big_params +'"/>');
document.write(' <param name="wmode" value="transparent"/>');
document.write(' <param name="quality" value="high" /> ');
document.write(' <param name="FlashVars" value="'+ santa.big_params +'"/>');
// embed
document.write('<embed src="'+ santa.big_path + '?' + santa.big_params +'" id="jcornerBigEmbed" name="jcornerBigObject" wmode="transparent" quality="high" width="'+ santa.big_width +'" height="'+ santa.big_height +'" flashvars="'+ santa.big_params +'" swliveconnect="true" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>');
document.write('</object></div>');
// </jcornerBig>
setTimeout('document.getElementById("jcornerBig").style.top = "-1000px";',1000);
}
santa.putObjects();