const areaOfCircle = () => {
    const v1 =  document.querySelector('.area-of-circle__v1');
    const btn = document.querySelector('.area-of-circle__btn');
    const result = document.querySelector('.area-of-circle__result');

const areaofacircleRadio = document.querySelector('.area-of-circle__area-circle');
const radiusofthecircleRadio = document.querySelector('.area-of-circle__radius-area');

let areaofacircle;
const PI = Math.PI;
let radiusofthecircle = v1; 

const variable1 = document.querySelector('.area-of-circle__label');

areaofacircleRadio.addEventListener('click', function() {
  variable1.textContent = 'Radius of the circle';
  radiusofthecircle = v1;
  result.textContent = '';
});

radiusofthecircleRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of a circle';
  areaofacircle = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaofacircleRadio.checked)
    result.textContent = `Area of a circle = ${computeAreaofacircle().toFixed(5)}`;

  else if(radiusofthecircleRadio.checked)
    result.textContent = `Radius of the circle = ${computeRadiusofthecircle().toFixed(5)}`;
})

function computeAreaofacircle() {
  return PI * Math.pow(Number(radiusofthecircle.value), 2);
}

function computeRadiusofthecircle() {
  return Math.sqrt(Number(areaofacircle.value) / PI);
}
}

export default areaOfCircle;