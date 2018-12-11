function init()
{
	var btn=$("btnShot");
	var img=$("img");
	
	btn.onclick=Shot;
}

function Shot()
{
	var rnd=Math.floor((Math.random() * 8) + 1);
	img.src="gif/gif"+rnd+".gif";
}

window.onload=init;