function webretroEmbed(node, path, queries) {
	var frame = document.createElement("iframe");
	frame.style = "border: none; display: block; width: 100%; height: 100%;";
	
	// change rom path to absolute if it isn't already
	if (autodetect.rom) {
		var link = document.createElement("a");
		link.href = (/^(https?:)?\/\//i).test(autodetect.rom) ? autodetect.rom : "/roms" + queries.rom;
		autodetect.rom = link.href;
	}
	
	frame.src = path + "?" + Object.entries(queries).map(i => i.map(i => i && encodeURIComponent(i))).map(i => i[1] ? i.join("=") : i[0]).join("&");
	node.appendChild(frame);
	
	return frame;
}