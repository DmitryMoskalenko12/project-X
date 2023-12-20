const triangleCalculator = () => {
    function calculate()
{
		let result;
		const e = document.querySelector(".triangle-calculator__unit");
		const unit = e.options[e.selectedIndex].value;
		const side_b = parseFloat(document.querySelector('.triangle-calculator__side-b').value);
		const angle_y = parseFloat(document.querySelector('.triangle-calculator__angle-y').value);
		const angle_x = parseFloat(document.querySelector('.triangle-calculator__angle-x').value);
		const side_a = parseFloat(document.querySelector('.triangle-calculator__side-a').value);
		const side_c = parseFloat(document.querySelector('.triangle-calculator__side-c').value);
		let side_a_result;
		let side_b_result;
		let side_c_result;
		let angle_x_result;
		let angle_y_result;
		let area_result;
		let perimeter_result;

        function toDecimalDigital(amount, digits){
            return amount.toLocaleString(undefined, {
                                  minimumFractionDigits: 0,
                                  maximumFractionDigits: digits
                                });
            }

	if(unit=="sideAB")
	{
			document.getElementById('side_a_display').style.visibility = "visible";
			document.getElementById('side_b_display').style.visibility = "visible";
			document.getElementById('angle_x_display').style.visibility = "collapse";
			document.getElementById('angle_y_display').style.visibility = "collapse";
			document.getElementById('side_c_display').style.visibility = "collapse";
			document.getElementById('side_a_result_display').style.visibility = "collapse";
			document.getElementById('side_b_result_display').style.visibility = "collapse";
			document.getElementById('side_c_result_display').style.visibility = "visible";
			document.getElementById('angle_x_result_display').style.visibility = "visible";
			document.getElementById('angle_y_result_display').style.visibility = "visible";
		
		if(!isNaN(side_b)&&!isNaN(side_a))
		{
			side_c_result=Math.sqrt((side_a)*(side_a)+(side_b)*(side_b));
			area_result=(side_a*side_b)/2;
			perimeter_result=side_c_result+side_a+side_b;
			angle_x_result = Math.atan(side_a/side_b)*180/Math.PI;
			angle_y_result = 90-angle_x_result;
			document.querySelector('.triangle-calculator__side-c-result').innerHTML = toDecimalDigital(side_c_result,2);
			document.querySelector('.triangle-calculator__area-result').innerHTML = toDecimalDigital(area_result,2);
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML = toDecimalDigital(angle_x_result,2)+"&deg;";
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML = toDecimalDigital(angle_y_result,2)+"&deg;";
			document.querySelector('.triangle-calculator__perimeter').innerHTML = toDecimalDigital(perimeter_result,2);
		}
		else
		{
			document.querySelector('.triangle-calculator__side-c-result').innerHTML = "";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML = "";
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML ="";
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML = "";
		}
		
		if(angle_x_result==90||angle_y_result==90)
		{
			document.querySelector('.triangle-calculator__side-c-result').innerHTML = "";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML = "";
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML ="Not a valid value";
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML = "Not a valid value";
		}
		
	}
	else if(unit=="sideAC")
	{
			document.querySelector('side_b_display').style.visibility = "collapse";
			document.querySelector('angle_x_display').style.visibility = "collapse";
			document.querySelector('angle_y_display').style.visibility = "collapse";
			document.querySelector('side_a_display').style.visibility = "visible";
			document.querySelector('side_c_display').style.visibility = "visible";
			document.querySelector('side_a_result_display').style.visibility = "collapse";
			document.querySelector('side_b_result_display').style.visibility = "visible";
			document.querySelector('side_c_result_display').style.visibility = "collapse";
			document.querySelector('angle_x_result_display').style.visibility = "visible";
			document.querySelector('angle_y_result_display').style.visibility = "visible";
		
		if(!isNaN(side_a)&&!isNaN(side_c))
		{
			side_b_result=Math.sqrt((side_c)*(side_c)-(side_a)*(side_a));
			area_result=(side_a*side_b_result)/2;
			perimeter_result=side_a+side_c+side_b_result;
			angle_x_result = Math.atan(side_a/side_b_result)*180/Math.PI;
			angle_y_result = 90-angle_x_result;
			document.querySelector('.triangle-calculator__side-b-result').innerHTML = toDecimalDigital(side_b_result,2);
			document.querySelector('.triangle-calculator__area-result').innerHTML = toDecimalDigital(area_result,2);
			document.querySelector('.triangle-calculator__perimeter').innerHTML = toDecimalDigital(perimeter_result,2);
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML = toDecimalDigital(angle_x_result,2)+"&deg;";
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML = toDecimalDigital(angle_y_result,2)+"&deg;";
		}
		else
		{
			document.querySelector('.triangle-calculator__side-b-result').innerHTML = "";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML = "";
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML = "";
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML ="";
		}
		if(side_a>=side_c)
		{
			document.querySelector('.triangle-calculator__side-b-result').innerHTML = "Hypotenuse should be longer than a leg"
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML = "";
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML = "";
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML ="";
		}
		if(angle_x_result==90||angle_y_result==90)
		{
			document.querySelector('.triangle-calculator__side-b-result').innerHTML = "";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML = "";
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML ="Not a valid value";
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML = "Not a valid value";
		}
		
	}
	else if(unit=="sideBC")
	{
			document.getElementById('side_b_display').style.visibility = "visible";
			document.getElementById('side_c_display').style.visibility = "visible";
			document.getElementById('angle_x_display').style.visibility = "collapse";
			document.getElementById('angle_y_display').style.visibility = "collapse";
			document.getElementById('side_a_display').style.visibility = "collapse";
			document.getElementById('side_a_result_display').style.visibility = "visible";
			document.getElementById('side_b_result_display').style.visibility = "collapse";
			document.getElementById('side_c_result_display').style.visibility = "collapse";
			document.getElementById('angle_x_result_display').style.visibility = "visible";
			document.getElementById('angle_y_result_display').style.visibility = "visible";
		
		if(!isNaN(side_b)&&!isNaN(side_c))
		{
			side_a_result=Math.sqrt((side_c)*(side_c)-(side_b)*(side_b));
			area_result=(side_a_result*side_b)/2;
			perimeter_result=side_c+side_a_result+side_b;
			angle_x_result = Math.atan(side_a_result/side_b)*180/Math.PI;
			angle_y_result = 90-angle_x_result;
			document.querySelector('.triangle-calculator__side-a-result').innerHTML = toDecimalDigital(side_a_result,2);
			document.querySelector('.triangle-calculator__area-result').innerHTML = toDecimalDigital(area_result,2);
			document.querySelector('.triangle-calculator__perimeter').innerHTML = toDecimalDigital(perimeter_result,2);
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML = toDecimalDigital(angle_x_result,2)+"&deg;";
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML = toDecimalDigital(angle_y_result,2)+"&deg;";
		}
		else
		{
			document.querySelector('.triangle-calculator__side-a-result').innerHTML = "";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML = "";
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML = "";
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML ="";
		}
			if(side_b>=side_c)
		{
			document.querySelector('.triangle-calculator__side-a-result').innerHTML = "Hypotenuse should be longer than a leg"
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML = "";
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML = "";
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML ="";
		}
		if(angle_x_result==90||angle_y_result==90)
		{
			document.querySelector('.triangle-calculator__side-a-result').innerHTML = "";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML = "";
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML ="Not a valid value";
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML = "Not a valid value";
		}
		
	} 
	else if(unit=="angleXlegA")
	{
			document.getElementById('side_b_display').style.visibility = "collapse";
			document.getElementById('side_a_display').style.visibility = "visible";
			document.getElementById('angle_y_display').style.visibility = "collapse";
			document.getElementById('angle_x_display').style.visibility = "visible";
			document.getElementById('side_c_display').style.visibility = "collapse";
			document.getElementById('side_a_result_display').style.visibility = "collapse";
			document.getElementById('side_b_result_display').style.visibility = "visible";
			document.getElementById('side_c_result_display').style.visibility = "visible";
			document.getElementById('angle_x_result_display').style.visibility = "collapse";
			document.getElementById('angle_y_result_display').style.visibility = "visible";
			
		if(!isNaN(side_a)&&!isNaN(angle_x))
		{
			side_b_result=side_a/Math.tan(angle_x*Math.PI/180);
			side_c_result=side_a/Math.sin(angle_x*Math.PI/180);
			angle_y_result=90-angle_x;
			area_result = side_a*side_b_result/2;
			perimeter_result=side_a+side_b_result+side_c_result;
			document.querySelector('.triangle-calculator__side-b-result').innerHTML = toDecimalDigital(side_b_result,2);
			document.querySelector('.triangle-calculator__area-result').innerHTML = toDecimalDigital(area_result,2);
			document.querySelector('.triangle-calculator__perimeter').innerHTML = toDecimalDigital(perimeter_result,2);
			document.querySelector('.triangle-calculator__side-c-result').innerHTML = toDecimalDigital(side_c_result,2);
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML = toDecimalDigital(angle_y_result,2)+"&deg;";
		}
		else
		{
			document.querySelector('.triangle-calculator__side-b-result').innerHTML = "";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML = "";
			document.querySelector('.triangle-calculator__side-c-result').innerHTML = "";
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML = "";
		}
		
		if(angle_x>=90)
		{
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML = "Angle X can't be larger than 90"+"&deg;";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "Not a valid value";
			document.querySelector('.triangle-calculator__perimeter').innerHTML ="Not a valid value";
			document.querySelector('.triangle-calculator__side-c-result').innerHTML ="Not a valid value";
			document.querySelector('.triangle-calculator__side-b-result').innerHTML ="Not a valid value";
		}
	
	}
	else if(unit=="angleYlegA")
	{
		
			document.getElementById('side_b_display').style.visibility = "collapse";
			document.getElementById('angle_x_display').style.visibility = "collapse";
			document.getElementById('angle_y_display').style.visibility = "visible";
			document.getElementById('side_c_display').style.visibility = "collapse";
			document.getElementById('side_a_display').style.visibility = "visible";
			document.getElementById('side_a_result_display').style.visibility = "collapse";
			document.getElementById('side_b_result_display').style.visibility = "visible";
			document.getElementById('side_c_result_display').style.visibility = "visible";
			document.getElementById('angle_x_result_display').style.visibility = "visible";
			document.getElementById('angle_y_result_display').style.visibility = "collapse";

		if(!isNaN(side_a)&&!isNaN(angle_y))
		{
			angle_x_result=90-angle_y;
			side_b_result=side_a/Math.tan(angle_x_result*Math.PI/180);
			side_c_result=side_a/Math.sin(angle_x_result*Math.PI/180);
			area_result = side_a*side_b_result/2;
			perimeter_result=side_a+side_b_result+side_c_result;
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML = toDecimalDigital(angle_x_result,2)+"&deg;";
			document.querySelector('.triangle-calculator__side-b-result').innerHTML = toDecimalDigital(side_b_result,2);
			document.querySelector('.triangle-calculator__area-result').innerHTML = toDecimalDigital(area_result,2);
			document.querySelector('.triangle-calculator__perimeter').innerHTML = toDecimalDigital(perimeter_result,2);
			document.querySelector('.triangle-calculator__side-c-result').innerHTML = toDecimalDigital(side_c_result,2);
			
		}
		else
		{
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML = "";
			document.querySelector('.triangle-calculator__side-b-result').innerHTML = "";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML = "";
			document.querySelector('.triangle-calculator__side-c-result').innerHTML ="";
		}
		
		if(angle_y>=90)
		{
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML = "Angle Y can't be larger than 90"+"&deg;";
			document.querySelector('.triangle-calculator__side-b-result').innerHTML = "";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML = "";
			document.querySelector('.triangle-calculator__side-c-result').innerHTML ="";
		}
	}
	else if(unit=="angleXlegC")
	{
			document.getElementById('side_b_display').style.visibility = "collapse";
			document.getElementById('side_c_display').style.visibility = "visible";
			document.getElementById('angle_x_display').style.visibility = "visible";
			document.getElementById('angle_y_display').style.visibility = "collapse";
			document.getElementById('side_a_display').style.visibility = "collapse";
			document.getElementById('side_a_result_display').style.visibility = "visible";
			document.getElementById('side_b_result_display').style.visibility = "visible";
			document.getElementById('side_c_result_display').style.visibility = "collapse";
			document.getElementById('angle_x_result_display').style.visibility = "collapse";
			document.getElementById('angle_y_result_display').style.visibility = "visible";

		if(!isNaN(side_c)&&!isNaN(angle_x))
		{
			angle_y_result=90-angle_x;
			side_a_result=side_c*Math.sin(angle_x*Math.PI/180);
			side_b_result=side_c*Math.cos(angle_x*Math.PI/180);
			area_result = side_a_result*side_b_result/2;
			perimeter_result=side_a_result+side_b_result+side_c;
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML = toDecimalDigital(angle_y_result,2)+"&deg;";
			document.querySelector('.triangle-calculator__side-b-result').innerHTML = toDecimalDigital(side_b_result,2);
			document.querySelector('.triangle-calculator__area-result').innerHTML = toDecimalDigital(area_result,2);
			document.querySelector('.triangle-calculator__perimeter').innerHTML = toDecimalDigital(perimeter_result,2);
			document.querySelector('.triangle-calculator__side-a-result').innerHTML = toDecimalDigital(side_a_result,2);
			
		}
		else
		{
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML = "";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML ="";
			document.querySelector('.triangle-calculator__side-a-result').innerHTML ="";
			document.querySelector('.triangle-calculator__side-b-result').innerHTML ="";
		}
		if(angle_x>=90)
		{
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML = "Angle X can't be larger than 90"+"&deg;";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML ="";
			document.querySelector('.triangle-calculator__side-a-result').innerHTML ="";
			document.querySelector('.triangle-calculator__side-b-result').innerHTML ="";
		}
			
	}
	else if(unit=="angleXlegB")
	{	
			document.getElementById('side_b_display').style.visibility = "visible";
			document.getElementById('angle_x_display').style.visibility = "visible";
			document.getElementById('angle_y_display').style.visibility = "collapse";
			document.getElementById('side_c_display').style.visibility = "collapse";
			document.getElementById('side_a_display').style.visibility = "collapse";
			document.getElementById('side_a_result_display').style.visibility = "visible";
			document.getElementById('side_b_result_display').style.visibility = "collapse";
			document.getElementById('side_c_result_display').style.visibility = "visible";
			document.getElementById('angle_x_result_display').style.visibility = "collapse";
			document.getElementById('angle_y_result_display').style.visibility = "visible";

		if(!isNaN(side_b)&&!isNaN(angle_x))
		{
			angle_y_result=90-angle_x;
			side_a_result=side_b/Math.tan(angle_y_result*Math.PI/180);
			side_c_result=side_b/Math.sin(angle_y_result*Math.PI/180);
			area_result = side_a_result*side_b/2;
			perimeter_result=side_a_result+side_b+side_c_result;
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML = toDecimalDigital(angle_y_result,2)+"&deg;";
			document.querySelector('.triangle-calculator__side-c-result').innerHTML = toDecimalDigital(side_c_result,2);
			document.querySelector('.triangle-calculator__area-result').innerHTML = toDecimalDigital(area_result,2);
			document.querySelector('.triangle-calculator__perimeter').innerHTML = toDecimalDigital(perimeter_result,2);
			document.querySelector('.triangle-calculator__side-a-result').innerHTML = toDecimalDigital(side_a_result,2);
		}
		else
		{
			
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML = "";
			document.querySelector('.triangle-calculator__side-c-result').innerHTML = "";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML ="";
			document.querySelector('.triangle-calculator__side-a-result').innerHTML = "";
		}
		if(angle_x>=90)
		{
			document.querySelector('.triangle-calculator__angle-y-result').innerHTML = "Angle X can't be larger than 90"+"&deg;";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML ="";
			document.querySelector('.triangle-calculator__side-a-result').innerHTML ="";
			document.querySelector('.triangle-calculator__side-c-result').innerHTML ="";
		}
		
	}
	else if(unit=="angleYlegB")
	{
			document.getElementById('side_b_display').style.visibility = "visible";
			document.getElementById('angle_x_display').style.visibility = "collapse";
			document.getElementById('angle_y_display').style.visibility = "visible";
			document.getElementById('side_c_display').style.visibility = "collapse";
			document.getElementById('side_a_display').style.visibility = "collapse";
			document.getElementById('side_a_result_display').style.visibility = "visible";
			document.getElementById('side_b_result_display').style.visibility = "collapse";
			document.getElementById('side_c_result_display').style.visibility = "visible";
			document.getElementById('angle_x_result_display').style.visibility = "visible";
			document.getElementById('angle_y_result_display').style.visibility = "collapse";

		if(!isNaN(side_b)&&!isNaN(angle_y))
		{
			angle_x_result=90-angle_y;
			side_a_result=side_b*Math.tan(angle_x_result*Math.PI/180);
			side_c_result=Math.sqrt(side_a_result*side_a_result+side_b*side_b);
			area_result = side_a_result*side_b/2;
			perimeter_result=side_a_result+side_b+side_c_result;
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML = toDecimalDigital(angle_x_result,2)+"&deg;";
			document.querySelector('.triangle-calculator__side-c-result').innerHTML = toDecimalDigital(side_c_result,2);
			document.querySelector('.triangle-calculator__area-result').innerHTML = toDecimalDigital(area_result,2);
			document.querySelector('.triangle-calculator__perimeter').innerHTML = toDecimalDigital(perimeter_result,2);
			document.querySelector('.triangle-calculator__side-a-result').innerHTML = toDecimalDigital(side_a_result,2);
		}
		else
		{
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML = "";
			document.querySelector('.triangle-calculator__side-c-result').innerHTML = "";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML ="";
			document.querySelector('.triangle-calculator__side-a-result').innerHTML = "";
		}
		if(angle_y>=90)
		{
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML = "Angle Y can't be larger than 90"+"&deg;";
			document.querySelector('.triangle-calculator__side-a-result').innerHTML = "";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML = "";
			document.querySelector('.triangle-calculator__side-c-result').innerHTML ="";
		}
		
		
	}
	else if(unit=="angleYlegC")
	{
			document.getElementById('side_b_display').style.visibility = "collapse";
			document.getElementById('angle_x_display').style.visibility = "collapse";
			document.getElementById('side_c_display').style.visibility = "visible";
			document.getElementById('angle_y_display').style.visibility = "visible";
			document.getElementById('side_a_display').style.visibility = "collapse";
			document.getElementById('side_a_result_display').style.visibility = "visible";
			document.getElementById('side_b_result_display').style.visibility = "visible";
			document.getElementById('side_c_result_display').style.visibility = "collapse";
			document.getElementById('angle_x_result_display').style.visibility = "visible";
			document.getElementById('angle_y_result_display').style.visibility = "collapse";

		if(!isNaN(side_c)&&!isNaN(angle_y))
		{
			angle_x_result=90-angle_y;
			side_a_result=side_c*Math.sin(angle_x_result*Math.PI/180);
			side_b_result=side_c*Math.cos(angle_x_result*Math.PI/180);
			area_result = side_a_result*side_b_result/2;
			perimeter_result=side_a_result+side_b_result+side_c;
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML = toDecimalDigital(angle_x_result,2)+"&deg;";
			document.querySelector('.triangle-calculator__side-b-result').innerHTML = toDecimalDigital(side_b_result,2);
			document.querySelector('.triangle-calculator__area-result').innerHTML = toDecimalDigital(area_result,2);
			document.querySelector('.triangle-calculator__perimeter').innerHTML = toDecimalDigital(perimeter_result,2);
			document.querySelector('.triangle-calculator__side-a-result').innerHTML = toDecimalDigital(side_a_result,2);
		}
		else
		{
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML = "";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML ="";
			document.querySelector('.triangle-calculator__side-a-result').innerHTML ="";
			document.querySelector('.triangle-calculator__side-b-result').innerHTML ="";
		}
		if(angle_y>=90)
		{
			document.querySelector('.triangle-calculator__angle-x-result').innerHTML = "Angle Y can't be larger than 90"+"&deg;";
			document.querySelector('.triangle-calculator__side-b-result').innerHTML = "";
			document.querySelector('.triangle-calculator__area-result').innerHTML = "";
			document.querySelector('.triangle-calculator__perimeter').innerHTML = "";
			document.querySelector('.triangle-calculator__side-a-result').innerHTML ="";
		}
	}
}

document.querySelector('.triangle-calculator__unit').addEventListener('click', () => {
    calculate();
});

document.querySelector('.triangle-calculator__calculate').addEventListener('click', () => {
    calculate();
});

}

export default triangleCalculator;