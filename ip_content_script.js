var parsePage = function(){
	var found;
	var re = /.(png|jpg|jpeg|gif|bmp)$/i
	var anchors = document.getElementsByTagName("a");
	for (var i = 0; i < anchors.length; ++i) {
	  var child = anchors[i];
	  if (child.href.match(re)) {
		var imagePath = child.href;
		child.setAttribute('onclick', 'return showImagePreview("' + imagePath + '")');
		found = true;
	  }
	}
	if(found){
		var script = document.createElement('script');
		script.src = chrome.extension.getURL("image_preview_page_script.js");
		script.type = "text/javascript";
		document.body.appendChild(script);

		/*var cssLink = document.createElement('link');
		cssLink.setAttribute("rel", "stylesheet");
		cssLink.setAttribute("type", "text/css");
		cssLink.setAttribute("href", chrome.extension.getURL("image_preview.css"));
		document.getElementsByTagName("head")[0].appendChild(cssLink);
		*/
		var mask = document.createElement('div');
		mask.setAttribute("id", "ip_mask");
		mask.setAttribute("style", "position:fixed; z-index:9000000; left: 0px; top: 0px; height: 100%; width: 100%; background-color:#000; display:none; opacity: 0.75;");
		mask.setAttribute("onclick", "javascript:hideImagePreview()");

		var modal = document.createElement('div');
		modal.setAttribute("id", "ip_modal");
		modal.setAttribute("style", "position:fixed; margin-left:auto; width: 100%; height: 100%; top: 0px; padding: 30px 0px; margin-right:auto; display:none; z-index:9999999;");
		modal.setAttribute("onclick", "javascript:hideImagePreview()");

		var image = document.createElement('img');
		image.setAttribute('id', 'image_preview_image_tag');
		image.setAttribute("style", "margin-left:auto; margin-right:auto; max-width: 95%; max-height: 95%; text-align: center; display: block; position: relative;");
		image.setAttribute("align", "middle");

		modal.appendChild(image);
		document.body.appendChild(mask);
		document.body.appendChild(modal);
	}
}

parsePage();