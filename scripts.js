window.onload = function() {
	var m = document.getElementById("menu");
	m.addEventListener("click", openCloseMenu);
}

function openCloseMenu() {
	var s = document.getElementById("sidebar");
	var c = document.getElementById("content");
	var s_style = window.getComputedStyle(s);
	var s_display = s_style.getPropertyValue('display');
	if (s_display == "none") {
		c.style.top = "150px"
		s.style.display = "block";
	}
	else {
		s.style.display = "none";
		c.style.top = "50px"
	}
}
