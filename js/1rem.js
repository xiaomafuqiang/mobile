;+function(base, doc, win){ // base 

	var rootEl = doc.documentElement;
	var metaEl = doc.querySelector('meta[name=viewport]');
	var deviceRatio;
	var pixelwidth = rootEl.clientWidth;
	// confirm  test metaEl okay;
	// or create one for set Attr;
	if(!metaEl) {
		metaEl = doc.createElement('meta');
		metaEl.setAttribute('name', 'viewport');
		doc.head.appendChild(metaEl);
	}

	 function ins(){
		deviceRatio = win.devicePixelRatio;

		scale = 1 / deviceRatio;
		// pixelwidth = rootEl.clientWidth;
		pixelwidth = win.screen.width;
		console.log(pixelwidth / base);
		rootEl.style.fontSize = pixelwidth * deviceRatio / base + 'px';
		console.log(rootEl.style.fontSize);
		rootEl.dataset.dpr = deviceRatio;
		metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
		console.log(deviceRatio, pixelwidth);
		console.log(scale);
	}
	ins();
	win.onresize = ins;

}(750, document, window);
