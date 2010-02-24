var ip_showImagePreview = function(path){
	var image = document.getElementById('image_preview_image_tag');
  	image.setAttribute("src", path);
  	ip_displayModal();
  	return false;
}

var ip_hideModal = function(){
	var mask = document.getElementById("ip_mask");
	var modal = document.getElementById("ip_modal");
	var youtube_div = document.getElementById("youtube_preview_div_tag");
	
	youtube_div.innerHTML = "";
	mask.style.display = "none";
	modal.style.display = "none";
}

var ip_showYoutubePreview = function(path){
	var youtube_div = document.getElementById('youtube_preview_div_tag');
	var youtubeEmbed = "<object width='560' height='340'><param name='movie' value='" + path + "&fs=1'></param><param name='allowFullScreen' value='true'></param><param name='allowscriptaccess' value='always'></param>";
	youtubeEmbed += "<embed src='" + path + "&fs=1' type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true' width='560' height='340'></embed></object>";
	
	youtube_div.innerHTML = youtubeEmbed;
	
	ip_displayModal();
	return false;
}

var ip_displayModal = function(){
	var mask = document.getElementById('ip_mask');
	var modal = document.getElementById('ip_modal');
	mask.style.display = "block";
  	modal.style.display = "block";
}