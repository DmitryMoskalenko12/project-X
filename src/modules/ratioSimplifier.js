const ratioSimplifier = () => {
    function calculate(){
        const a = parseFloat(document.querySelector('.ratio-simplifier__content1').value);
        const b = parseFloat(document.querySelector('.ratio-simplifier__content2').value);

        function getGcf(number1, number2)
        {
            if( number2 === 0 )
                return;
            const num =  Math.max(number1,number2);
            const result = 1;
            for (let i = num; i >= 1; i--)
            {
                if (number1 % i === 0 && number2 % i === 0)
                {
                    return i;
                }
            }
            return result;
        }
        
        if(!isNaN(a) && !isNaN(b))
        {
            const gcf = getGcf(a,b);
            const ratio1 = a/gcf;
            const ratio2 = b/gcf;
            document.querySelector('.ratio-simplifier__result').innerHTML = ratio1 + ":" + ratio2;
        }
    }

    document.querySelector(".ratio-simplifier__content1").addEventListener('keyup', () => {
       calculate();
    });

    document.querySelector(".ratio-simplifier__content2").addEventListener('keyup', () => {
        calculate();
     });
}

export default ratioSimplifier;