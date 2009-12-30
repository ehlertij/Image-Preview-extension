var showImagePreview = function(path){
  var image = document.getElementById('image_preview_image_tag');
  var mask = document.getElementById('ip_mask');
  var modal = document.getElementById('ip_modal');
  
  image.setAttribute("src", path);
  
  mask.style.display = "block";
  modal.style.display = "block";
  //document.body.style.overflow = 'hidden';
  return false;
}

var hideImagePreview = function(){
	var mask = document.getElementById("ip_mask");
	var modal = document.getElementById("ip_modal");
	
	mask.style.display = "none";
	modal.style.display = "none";
	//document.body.style.overflow = 'auto';
}