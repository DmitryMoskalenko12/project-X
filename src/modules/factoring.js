const factoring = () => {
    function calculate() {
        let x = parseFloat(document.querySelector('.factoring__content').value);

        if (!isNaN(x)) {
            let factors = factor(x);
            document.querySelector('.factoring__result').innerHTML = factors;
        }
    }
    function factor(num) {
        let result = "";
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                result = result + i + ",";
                count++;
            }
        }
        if (count > 0) {

            result = result.substring(0, result.length - 1);
        }

        return result;
    }

    document.querySelector('.factoring__content').addEventListener('keyup', () => {
        calculate();
    })
}

export default factoring;