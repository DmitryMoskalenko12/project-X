const moneyCounter = () => {
    function calculate(){
        let dollarBill100 = parseFloat(document.querySelector('.money-counter__100dl').value);
        let dollarBill50 = parseFloat(document.querySelector('.money-counter__50dl').value);
        let dollarBill20 = parseFloat(document.querySelector('.money-counter__20dl').value);
        let dollarBill10 = parseFloat(document.querySelector('.money-counter__10dl').value);
        let dollarBill5 = parseFloat(document.querySelector('.money-counter__5dl').value);
        let dollarBill1 = parseFloat(document.querySelector('.money-counter__1dl').value);
        let cent50 = parseFloat(document.querySelector('.money-counter__50cent').value);
        let cent25 = parseFloat(document.querySelector('.money-counter__25cent').value);
        let cent10 = parseFloat(document.querySelector('.money-counter__10cent').value);
        let cent5 = parseFloat(document.querySelector('.money-counter__5cent').value);
        let cent1 = parseFloat(document.querySelector('.money-counter__1cent').value);
        
        let isFilled = false;
        let totalMoney = 0;

        function convertToMoney(amount){
            return amount.toLocaleString(undefined, {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2
                                });
            }

        if(!isNaN(dollarBill100))
        {
            totalMoney = totalMoney + dollarBill100 * 100;
            isFilled = true;
        }
        if(!isNaN(dollarBill50))
        {
            totalMoney = totalMoney + dollarBill50 * 50;
            isFilled = true;
        }
        if(!isNaN(dollarBill20))
        {
            totalMoney = totalMoney + dollarBill20 * 20;
            isFilled = true;
        }
        if(!isNaN(dollarBill10))
        {
            totalMoney = totalMoney + dollarBill10 * 10;
            isFilled = true;
        }
        if(!isNaN(dollarBill5))
        {
            totalMoney = totalMoney + dollarBill5 * 5;
            isFilled = true;
        }
        if(!isNaN(dollarBill1))
        {
            totalMoney = totalMoney + dollarBill1 * 1;
            isFilled = true;
        }    
        
        if(!isNaN(cent50))
        {
            totalMoney = totalMoney + cent50 * 0.5;
            isFilled = true;
        }
        if(!isNaN(cent25))
        {
            totalMoney = totalMoney + cent25 * 0.25;
            isFilled = true;
        }
        if(!isNaN(cent10))
        {
            totalMoney = totalMoney + cent10 * 0.1;
            isFilled = true;
        }
        if(!isNaN(cent5))
        {
            totalMoney = totalMoney + cent5 * 0.05;
            isFilled = true;
        }
        if(!isNaN(cent1))
        {
            totalMoney = totalMoney + cent1 * 0.01;
            isFilled = true;
        }      
        
        if(isFilled)
        {
            document.querySelector('.money-counter__result').innerHTML = "$"+convertToMoney(totalMoney);
        }
    }

    document.querySelector('.money-counter__100dl').addEventListener('keyup', () => {
      calculate();
    });

    document.querySelector('.money-counter__50dl').addEventListener('keyup', () => {
        calculate();
    });

    document.querySelector('.money-counter__20dl').addEventListener('keyup', () => {
        calculate();
    });

    document.querySelector('.money-counter__10dl').addEventListener('keyup', () => {
        calculate();
    });

    document.querySelector('.money-counter__5dl').addEventListener('keyup', () => {
        calculate();
    });

    document.querySelector('.money-counter__1dl').addEventListener('keyup', () => {
        calculate();
    });

    document.querySelector('.money-counter__50cent').addEventListener('keyup', () => {
        calculate();
    });

    document.querySelector('.money-counter__25cent').addEventListener('keyup', () => {
        calculate();
    });

    document.querySelector('.money-counter__10cent').addEventListener('keyup', () => {
        calculate();
    });

    document.querySelector('.money-counter__5cent').addEventListener('keyup', () => {
        calculate();
    });

    document.querySelector('.money-counter__1cent').addEventListener('keyup', () => {
        calculate();
    });
    
}

export default moneyCounter;