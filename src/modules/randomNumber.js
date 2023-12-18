const randomNumber = () => {
    function calculate() {
        let min = parseFloat(document.querySelector('.random-number__between').value);
        let max = parseFloat(document.querySelector('.random-number__and').value);
    
        if(!isNaN(min) && !isNaN(max))
        { 
            if(max >= min){
                let result = Math.floor(Math.random() * (max - min + 1) ) + min;
                document.querySelector('.random-number__result').innerHTML = result;
            }
        }
    }

    document.querySelector('.random-number__between').addEventListener('keyup', () => {
        calculate();
    });

    document.querySelector('.random-number__and').addEventListener('keyup', () => {
        calculate();
    });

    document.querySelector('.random-number__generate').addEventListener('click', () => {
        calculate();
    });
}

export default randomNumber;