//get dom
var 
	cueerntImageDom = document.getElementById("currentImage");
	previewImageDom = document.querySelectorAll(".previewImage img");
	previewImageGroupDom = document.querySelector(".previewImage");
	
//click callback(previewImageGroupDom)
function preImageClick(e) {
	// imageOpacity init
	previewImageDom.forEach(e => {
		e.style.opacity=1;
	});
	// src replace, change imageOpacity, add dynamicFade, dynamicFade init
	cueerntImageDom.src = e.target.src;
	e.target.style.opacity=0.4;
	cueerntImageDom.classList.add("dynamic-fade");
	setTimeout(() =>cueerntImageDom.classList.remove("dynamic-fade"),500);
}


//imageOpacity save
previewImageDom[0].style.opacity=0.4;

// clickListener
previewImageGroupDom.addEventListener('click', (e) => preImageClick(e));




