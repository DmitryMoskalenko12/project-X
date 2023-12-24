const cylindreVolume = () => {
    function calculate()
{
		let radius_input=parseFloat(document.querySelector('.cylinder-volume__radius').value);
		let height_input=parseFloat(document.querySelector('.cylinder-volume__height').value);
		let result;
		let e = document.querySelector(".cylinder-volume__unit");
		let unit = e.options[e.selectedIndex].value;
	
        function toDecimal(x) {  
            let f = parseFloat(x);  
            if (!isNaN(f)) {  
               f = Math.round(x*100000)/100000;  
               return f;   
            }  
         } 
         
         let cubicFoot;
         let cubicInches;
         let cubicYards;
         let cubicCm;

		if(!isNaN(height_input)&&!isNaN(radius_input))
		{
			if(unit=="feet")
			{
				cubicFoot = Math.PI * radius_input * radius_input * height_input;
				cubicInches = cubicFoot * 1728;
				cubicYards = cubicFoot/27;
				cubicCm = cubicFoot * 28316.8466;
			}
			else if(unit == "inches")
			{
				
				cubicInches = Math.PI * radius_input * radius_input * height_input;
				cubicFoot = cubicInches / 1728;
				cubicYards = cubicFoot/27;
				cubicCm = cubicFoot * 28316.8466;
			}
			else if(unit == "cm")
			{
				cubicCm = Math.PI * radius_input * radius_input * height_input;
				cubicFoot = cubicCm / 28316.8466;
				cubicInches = cubicFoot * 1728;
				cubicYards = cubicFoot/27;
			}
			else
			{
				cubicYards = Math.PI * radius_input * radius_input * height_input;
				cubicFoot = cubicYards * 27;
				cubicCm = cubicFoot* 28316.8466;
				cubicInches = cubicFoot * 1728;
			}
			document.querySelector('.cylinder-volume__cubic-foot').innerHTML = toDecimal(cubicFoot);
			document.querySelector('.cylinder-volume__cubic-inches').innerHTML = toDecimal(cubicInches);
			document.querySelector('.cylinder-volume__cubic-yards').innerHTML = toDecimal(cubicYards);
			document.querySelector('.cylinder-volume__cubic-cm').innerHTML = toDecimal(cubicCm);
		}
		else
		{
			document.querySelector('.cylinder-volume__cubic-foot').innerHTML ="";
			document.querySelector('.cylinder-volume__cubic-inches').innerHTML = "";
			document.querySelector('.cylinder-volume__cubic-yards').innerHTML = "";
			document.querySelector('.cylinder-volume__cubic-cm').innerHTML = "";
		}
}

document.querySelector('.cylinder-volume__unit').addEventListener('onchange', () => {
    calculate();
});

document.querySelector('.cylinder-volume__radius').addEventListener('keyup', () => {
    calculate();
});

document.querySelector('.cylinder-volume__height').addEventListener('keyup', () => {
    calculate();
});

}

export default cylindreVolume;