const circumference = () => {
    function calculate(){
        const x = parseFloat(document.querySelector('.circumference__radius').value);
        if(!isNaN(x))
        {
            let result = Math.PI*2*x;
            document.querySelector('.circumference__result').innerHTML = result;
        }
    }

    document.querySelector('.circumference__radius').addEventListener('keyup', () => {
        calculate();
    });
}

export default circumference;