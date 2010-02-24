var parsePage = function(){
	var found;
	var image_re = /(.png|.jpg|.jpeg|.gif|.bmp)$/i
	var youtube_re = /(?:\S+?youtube\S+watch\S+v=?[A-Za-z0-9_-]{11})/i
	var googleimages_re = /imgres(?:\S+imgurl=)/i
	var wiki_re = /\/File:/i
	
	var anchors = document.getElementsByTagName("a");
	for (var i = 0; i < anchors.length; ++i) {
	  var child = anchors[i];
	  if (child.href.match(image_re) && !child.href.match(wiki_re)) {
		var imagePath = child.href;
		child.setAttribute('onclick', 'return ip_showImagePreview("' + imagePath + '")');
		found = true;
	  } else if (child.href.match(youtube_re)) {
	  	var youtubePath = "http://www.youtube.com/v/";
	  	var start = child.href.indexOf('v=') + 2;
	  	
	  	if(child.href.indexOf('&', start) != -1){
	  		var end = child.href.indexOf('&', start) - start;
	  		youtubePath += child.href.substr(start,end);
  		} else {
  			youtubePath += child.href.substr(start);
  		}
	  	child.setAttribute('onclick', 'return ip_showYoutubePreview("' + youtubePath + '")');
	  	found = true;
	  } else if (child.href.match(googleimages_re)){
		var start = child.href.indexOf('imgurl=') + 7;
		var imagePath = "";
		if(child.href.indexOf('&', start) != -1){
			var end = child.href.indexOf('&', start) - start;
			imagePath = child.href.substr(start, end);
		} else {
			imagePath = child.href.substr(start);
		}
		child.setAttribute('onclick', 'return ip_showImagePreview("' + imagePath + '")');
		found = true;
	  }
	}
	if(found){
		var script = document.createElement('script');
		script.src = chrome.extension.getURL("image_preview_page_script.js");
		script.type = "text/javascript";
		document.body.appendChild(script);

		var mask = document.createElement('div');
		mask.setAttribute("id", "ip_mask");
		mask.setAttribute("style", "position:fixed; z-index:9000000; left: 0px; top: 0px; height: 100%; width: 100%; background-color:#000; display:none; opacity: 0.75;");
		mask.setAttribute("onclick", "javascript:ip_hideModal()");

		var modal = document.createElement('div');
		modal.setAttribute("id", "ip_modal");
		modal.setAttribute("style", "position:fixed; margin-left:auto; width: 100%; height: 100%; top: 0px; padding: 30px 0px; margin-right:auto; display:none; z-index:9999999;");
		modal.setAttribute("onclick", "javascript:ip_hideModal()");

		var image = document.createElement('img');
		image.setAttribute('id', 'image_preview_image_tag');
		image.setAttribute("style", "margin-left:auto; margin-right:auto; max-width: 95%; max-height: 95%; text-align: center; display: block; position: relative;");
		image.setAttribute("align", "middle");

		var youtube = document.createElement('div');
		youtube.setAttribute('id', 'youtube_preview_div_tag');
		youtube.setAttribute("align", "middle");

		modal.appendChild(image);
		modal.appendChild(youtube);
		document.body.appendChild(mask);
		document.body.appendChild(modal);
	}
}

parsePage();