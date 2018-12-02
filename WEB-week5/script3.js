function clickMe(){ 
	var table = document.getElementById("students"); 
	var rowCount = table.rows.length; 
	var row = table.insertRow(rowCount); 
	var name = document.getElementById("name"); 
	var surname = document.getElementById("surname"); 
	var faculty = document.getElementById("faculty"); 
	var opt = document.querySelector("option"); 
	
	opt.style.setProperty("font-weight", "bold");

		var cell1 = row.insertCell(0); 
		var cell2 = row.insertCell(1); 
		var cell3 = row.insertCell(2); 
	cell1.innerHTML=name.value; 
	cell2.innerHTML=surname.value; 
	cell3.innerHTML=faculty.value; 
		
} 

document.getElementById("addStudent").addEventListener('click',clickMe);