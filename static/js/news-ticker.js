function applyStyles(obj, styles) {
	var property;
	var styleLength = Object.keys(styles).length;
	for (var i = 0; i < styleLength; i++) {
		property = Object.keys(styles)[i];
		obj.style[property] = styles[property];
	}
}

function extend(object1, object2) {
	for (var attrname in object2) {
		object1[attrname] = object2[attrname];
	}
	return object1;
}

function startTicker(id, param) {
	var tickerBox = document.getElementById(id);
	var defaultParam = { speed: 5, delay: 500, rotate: true };
	var extendedParam = extend(defaultParam, param);
	applyStyles(tickerBox, { overflow: "hidden", 'min-height': '40px' });
	var ul = tickerBox.getElementsByTagName("ul");
	var li = ul[0].getElementsByTagName("li");
	applyStyles(ul[0], { padding: 0, margin: 0, position: 'relative', 'list-style-type': 'none' });
	for (i = 0; i < li.length; i++) {
		applyStyles(li[i], { position: 'absolute', 'white-space': 'nowrap', display: 'none' });
	}

	var li_index = 0;
	var trans_width = tickerBox.offsetWidth;
	var chunk_width = 1;

	var iterateTickerElement = function(trans_width) {
		li[li_index].style.left = trans_width + "px";
		li[li_index].style.display = '';
		var t = setInterval(function() {
			if (parseInt(li[li_index].style.left) > -li[li_index].offsetWidth) {
				li[li_index].style.left = parseInt(li[li_index].style.left) - chunk_width + "px";
			} else {
				clearInterval(t);
				trans_width = tickerBox.offsetWidth;
				li_index++;
				if (li_index == li.length && extendedParam.rotate == true) {
					li_index = 0;
					iterateTickerElement(trans_width);
				} else if (li_index < li.length) {
					setTimeout(function() { iterateTickerElement(trans_width); }, extendedParam.delay);
				}
			}
		}, extendedParam.speed);
		tickerBox.onmouseover = function() {
			clearInterval(t);
		}
		tickerBox.onmouseout = function() {
			iterateTickerElement(parseInt(li[li_index].style.left));
		}
	}
	iterateTickerElement(trans_width);
}



newsurl = 'http://127.0.0.1:5000/getNews';

newsDiv = d3.select("#ticker-box")
list = newsDiv.select("ul")

d3.json(newsurl).then(function(data) {
  for (i=0; i<data.length; i++){
    list.append("li").html(data[i]);

  }

  
  startTicker('ticker-box', {speed:7, delay:0 });
  
});
