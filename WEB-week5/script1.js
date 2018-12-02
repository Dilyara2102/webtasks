function clickMe(){
	const s1 = document.querySelector("#s11");
	const s2 = document.querySelector("#s12");
	const s3 = document.querySelector("#s13");
	const s4 = document.querySelector("#s21");
	const s5 = document.querySelector("#s22");
	const s6 = document.querySelector("#s23");
	const s7 = document.querySelector("#s31");
	const s8 = document.querySelector("#s32");
	const s9 = document.querySelector("#s33");
	
	let sum1 = (parseInt(s2.value)*parseInt(s6.value)*parseInt(s7.value))+(parseInt(s4.value)*parseInt(s8.value)*parseInt(s3.value))-(parseInt(s1.value)*parseInt(s2.value)*parseInt(s9.value));
	let sum2 = (parseInt(s8.value)*parseInt(s6.value)*parseInt(s1.value))+(parseInt(s4.value)*parseInt(s2.value)*parseInt(s9.value))-(parseInt(s7.value)*parseInt(s5.value)*parseInt(s3.value));
	let det=sum1-sum2;
	let res = document.querySelector("#result");
	document.querySelector("#result").textContent=det;
	console.log(det);
}
document.querySelector("#determinant").addEventListener('click',clickMe);