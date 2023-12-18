const mmToInches = () => {
    function calculateByinches()
{
	let inches = parseFloat(document.querySelector('.mm-to-inches__inches').value);
	if( !isNaN(inches))
	{		
		let mm = inches/0.39370*10;
		let meters = inches/39.370*10;
		let feet = inches*0.083333*10;
		let yards = inches*0.027778*10;
		let miles= inches*0.000015783*10;
		let kilometers = inches/39370*10;
	   document.querySelector(".mm-to-inches__meters").innerHTML= (meters).toFixed(6);
	   document.querySelector(".mm-to-inches__feet").innerHTML=(feet).toFixed(6);
	   document.querySelector(".mm-to-inches__yards").innerHTML=(yards).toFixed(6);
	   document.querySelector(".mm-to-inches__kilometers").innerHTML= (kilometers).toFixed(6);
	   document.querySelector(".mm-to-inches__miles").innerHTML=(miles).toFixed(6);
	   document.querySelector(".mm-to-inches__inches1").innerHTML= inches;
	   document.querySelector(".mm-to-inches__mm1").innerHTML= (mm).toFixed(6);
	   document.querySelector('.mm-to-inches__mm').value = (mm).toFixed(5);
	} else {
	   document.querySelector(".mm-to-inches__meters").innerHTML= "";
	   document.querySelector(".mm-to-inches__feet").innerHTML="";
	   document.querySelector(".mm-to-inches__yards").innerHTML="";
	   document.querySelector(".mm-to-inches__kilometers").innerHTML= "";
	   document.querySelector(".mm-to-inches__miles").innerHTML="";
	   document.querySelector(".mm-to-inches__inches1").innerHTML= "";
	   document.querySelector(".mm-to-inches__mm1").innerHTML= "";
	   document.querySelector('.mm-to-inches__mm').value = "";
	}
}

document.querySelector('.mm-to-inches__inches').addEventListener('keyup', () => {
    calculateByinches();
});

function calculateByMm()
{
	 let mm = parseFloat(document.querySelector('.mm-to-inches__mm').value);
	 if( !isNaN(mm))
	 {
		 let inches = mm * 0.39370/10;
		 let meters = mm/100/10;
		 let feet = mm*0.032808/10;
		 let yards = mm*0.010936/10;
		 let kilometers = mm/100000/10;
		 let miles = mm * 0.0000062137/10;

	   document.querySelector(".mm-to-inches__meters").innerHTML=(meters).toFixed(6);
	   document.querySelector(".mm-to-inches__feet").innerHTML=(feet).toFixed(6);
	   document.querySelector(".mm-to-inches__yards").innerHTML=(yards).toFixed(6);
	   document.querySelector(".mm-to-inches__kilometers").innerHTML=(kilometers).toFixed(6);
	   document.querySelector(".mm-to-inches__miles").innerHTML=(miles).toFixed(6);
	   document.querySelector(".mm-to-inches__inches1").innerHTML= (inches).toFixed(6);
	   document.querySelector(".mm-to-inches__mm1").innerHTML= mm;
	   document.querySelector('.mm-to-inches__inches').value=(inches).toFixed(5);
	} else {
	   document.querySelector(".mm-to-inches__meters").innerHTML= "";
	   document.querySelector(".mm-to-inches__feet").innerHTML="";
	   document.querySelector(".mm-to-inches__yards").innerHTML="";
	   document.querySelector(".mm-to-inches__kilometers").innerHTML= "";
	   document.querySelector(".mm-to-inches__miles").innerHTML="";
	   document.querySelector(".mm-to-inches__inches1").innerHTML= "";
	   document.querySelector(".mm-to-inches__mm1").innerHTML= "";
	   document.querySelector('.mm-to-inches__inches').value = "";
	}
}

document.querySelector('.mm-to-inches__mm').addEventListener('keyup', () => {
    calculateByMm();
});

}

export default mmToInches;