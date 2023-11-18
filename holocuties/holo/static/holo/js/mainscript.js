//ARROWS
let button = document.querySelector(".soundbut");
let arrbut = document.querySelectorAll(".arrbut");
let audio = document.querySelectorAll(".sound");
let img = document.querySelectorAll(".img");
let pic = document.querySelectorAll(".pic");
let cont = document.querySelectorAll(".contcont")
let i = 0;
let cou = 0;
let scount = document.querySelectorAll(".scount");
let c = audio.length - 1;
let cat = document.querySelector(".cat");
let len = localStorage.length;
let main = document.querySelector(".maintag");

//Вывод чисел

for (var k = 0; k < len; k++) {
	r = localStorage.key(k);
	m = localStorage.getItem(r);

	let tAll = document.querySelectorAll(".sjsid");
	tAll.forEach(function(item, t, tAll) {
		let sc = document.querySelectorAll(".scount");
		if (item.textContent === r) {
			sc.forEach(function(item, s, sc) {
				if (s === t) item.textContent = m;
			});
		};
	});
};

//ARROWS: IMGSWITCH

cont.forEach(function(item, i, cont) {
	if (i < 1) item.hidden = false;
});

arrbut[0].onclick = function() {
	i-=1;
	if (i<0) {
		i=c;
		cont[0].hidden = true;
		cont[i].hidden = false;
	} else{
		cont[i+1].hidden = true;
		cont[i].hidden = false;
	};
};

arrbut[1].onclick = function() {
	i+=1;
	if (i>c) {
		i=0;
		cont[c].hidden = true;
		cont[0].hidden = false;
	} else{
		cont[i-1].hidden = true;
		cont[i].hidden = false;
	};
};

//ARROWS: AUDIOPLAY

button.onclick = function() {

	var al = [
		new Audio(audio[i].src),
		new Audio(audio[i].src),
		new Audio(audio[i].src),
		new Audio(audio[i].src),
	];

	var random = Math.floor(Math.random() * 4);
	au = al[random];

	au.play();

	cou = parseInt(scount[i].textContent);
	cou+=1;
	let j = document.querySelectorAll(".sjsid")
	localStorage.setItem(j[i].textContent, cou);
	cou = 0;
	len = localStorage.length;

	for (var k = 0; k < len; k++) {
		r = localStorage.key(k);
		m = localStorage.getItem(r);

		let tAll = document.querySelectorAll(".sjsid");
		tAll.forEach(function(item, t, tAll) {
			let sc = document.querySelectorAll(".scount");
			if (item.textContent === r) {
				sc.forEach(function(item, s, sc) {
					if (s === t) item.textContent = m;
				});
			};
		});
	};

	//ANIMATION

	var id = null;

	var elem = document.createElement("img");
	elem.src = img[i].src;
	elem.style.position = "absolute";
	elem.style.right = "-510px";
	elem.style.top = 180 + "px";
	elem.style.width = "300px";

	document.body.appendChild(elem);

	var pos = -510;
	var limit = window.innerWidth + 510;
	clearInterval(id);
	id = setInterval(frame, 12);
	function frame() {
		if (pos >= limit) {
			clearInterval(id);
			elem.remove()
		} else {
			pos += 20;
			elem.style.right = pos + 'px';
		}
	}
};

//EXIT
let but = document.querySelector(".exit");
let wind = document.querySelector(".menuwin");
let mbut = document.querySelector(".menu");

mbut.onclick = function() {
	wind.hidden = false;
	mbut.style = 'top: -1000px;';
};

but.onclick = function() {
	wind.hidden = true;
	mbut.style = 'top: 8px;';
};