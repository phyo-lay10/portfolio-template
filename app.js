function toggleMenu() {
	document.getElementById('navbar-menu').classList.toggle('active');

	let btn = document.getElementById('toggler-btn');

	if(btn.innerHTML == `<i class="fa-solid fa-bars"></i>`) {
		btn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
	} else {
		btn.innerHTML = `<i class="fa-solid fa-bars"></i>`
	}
}

window.onscroll = function() {
	let nav = document.getElementById('nav');

	if(window.pageYOffset > 50) {
		nav.classList.add('bg')
	} else {
		nav.classList.remove('bg')
	}
}



