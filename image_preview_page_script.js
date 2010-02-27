var ip_zoomed = false;

var ip_showImagePreview = function(path){
	var image = document.getElementById('image_preview_image_tag');
  	image.setAttribute("src", path);
  	image.setAttribute("style", "cursor:pointer; margin-left:auto; margin-right:auto; max-width: 95%; max-height: 95%; text-align: center; display: block; position: relative; z-index:9999999;");
  	ip_displayModal();
  	return false;
}

var ip_hideModal = function(){
	var mask = document.getElementById("ip_mask");
	var modal = document.getElementById("ip_modal");
	var youtube_div = document.getElementById("youtube_preview_div_tag");
	var image = document.getElementById('image_preview_image_tag');
	
	youtube_div.innerHTML = "";
	image.style.display = "none";
	mask.style.display = "none";
	modal.style.display = "none";
	ip_zoomed = false;
}

var ip_showYoutubePreview = function(path){
	var youtube_div = document.getElementById('youtube_preview_div_tag');
	var modal = document.getElementById('ip_modal');
	var width = window.innerWidth * .7;
	var height = width * .6;
	var youtubeEmbed = "<object width='" + width + "' height='" + height + "'><param name='movie' value='" + path + "&fs=1&hd=1&autoplay=1'></param><param name='allowFullScreen' value='true'></param><param name='allowscriptaccess' value='always'></param>";
	youtubeEmbed += "<embed src='" + path + "&fs=1&hd=1&autoplay=1' type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true' width='" + width + "' height='" + height + "'></embed></object>";
	
	youtube_div.innerHTML = youtubeEmbed;
	
	modal.style.position = "fixed";
	ip_displayModal();
	return false;
}

var ip_displayModal = function(){
	var mask = document.getElementById('ip_mask');
	var modal = document.getElementById('ip_modal');
	mask.style.display = "block";
  	modal.style.display = "block";
  	modal.focus();
}

var ip_zoomImage = function(){
	var image = document.getElementById('image_preview_image_tag');
	var modal = document.getElementById('ip_modal');
	if(ip_zoomed == false){
		image.setAttribute("style", "cursor:pointer; margin-left:auto; margin-right:auto; text-align: center; display: block; position: absolute; z-index:9999999;");
		modal.style.position = "absolute";
		ip_zoomed = true;
	} else {
		image.setAttribute("style", "cursor:pointer; margin-left:auto; margin-right:auto; max-width: 95%; max-height: 95%; text-align: center; display: block; position: fixed; z-index:9999999;");
		modal.style.position = "fixed";
		ip_zoomed = false;
	}
}