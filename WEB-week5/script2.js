function f(event){
	const image1= document.getElementById("bigImage");
	image1.querySelector('img').src=event.currentTarget.src;

}
for(var i=0; i<document.querySelector("#carousel").querySelectorAll('img').length; i++){
	document.querySelector("#carousel").querySelectorAll('img')[i].addEventListener('click', f);
}