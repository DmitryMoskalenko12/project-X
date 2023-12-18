const marginCalculator = () => {
    function calculate(id, val) {
        let cost = parseFloat(document.querySelector('.margin-calculator__cost').value);
        let markup = parseFloat(document.querySelector('.margin-calculator__markup').value);
        let revenue = parseFloat(document.querySelector('.margin-calculator__revenue').value);
        let profit = parseFloat(document.querySelector('.margin-calculator__profit').value);

        let value = parseFloat(val);

        function convertToMoney(amount){
            return amount.toLocaleString(undefined, {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2
                                });
            }

        if (!isNaN(value)) {
            if (id == "cost") {
                if (!isNaN(markup)) {
                    revenue = markup / 100 * cost + cost;
                    profit = revenue - cost;
                    document.querySelector('.margin-calculator__revenue').value = convertToMoney(revenue);
                    document.querySelector('.margin-calculator__profit').value = convertToMoney(profit);
                } else if (!isNaN(revenue)) {
                    markup = (revenue - cost) / cost * 100;
                    profit = revenue - cost;
                    document.querySelector('.margin-calculator__markup').value = convertToMoney(markup);
                    document.querySelector('.margin-calculator__profit').value = convertToMoney(profit);
                } else if (!isNaN(profit)) {
                    markup = profit / cost * 100;
                    revenue = markup / 100 * cost + cost;
                    document.querySelector('.margin-calculator__markup').value = convertToMoney(markup);
                    document.querySelector('.margin-calculator__revenue').value = convertToMoney(revenue);
                }
            } else if (id == "markup") {
                if (!isNaN(cost)) {
                    revenue = markup / 100 * cost + cost;
                    profit = revenue - cost;
                    document.querySelector('.margin-calculator__revenue').value = convertToMoney(revenue);
                    document.querySelector('.margin-calculator__profit').value = convertToMoney(profit);
                } else if (!isNaN(revenue)) {
                    cost = revenue / (markup / 100 + 1);
                    profit = revenue - cost;
                    document.querySelector('.margin-calculator__cost').value = convertToMoney(cost);
                    document.querySelector('.margin-calculator__profit').value = convertToMoney(profit);
                } else if (!isNaN(profit)) {
                    cost = profit * 100 / markup;
                    revenue = markup / 100 * cost + cost;
                    document.querySelector('.margin-calculator__cost').value = convertToMoney(cost);
                    document.querySelector('.margin-calculator__revenue').value = convertToMoney(revenue);
                }
            } else if (id == "revenue") {
                if (!isNaN(cost)) {
                    markup = (revenue - cost) / cost * 100;
                    profit = revenue - cost;
                    document.querySelector('.margin-calculator__markup').value = convertToMoney(markup);
                    document.querySelector('.margin-calculator__profit').value = convertToMoney(profit);
                } else if (!isNaN(markup)) {
                    cost = revenue / (markup / 100 + 1);
                    profit = revenue - cost;
                    document.querySelector('.margin-calculator__cost').value = convertToMoney(cost);
                    document.querySelector('.margin-calculator__profit').value = convertToMoney(profit);
                } else if (!isNaN(profit)) {
                    cost = revenue - profit;
                    markup = (revenue - cost) / cost * 100;
                    document.querySelector('.margin-calculator__cost').value = convertToMoney(cost);
                    document.querySelector('.margin-calculator__markup').value = convertToMoney(markup);
                }
            } else if (id == "profit") {
                if (!isNaN(cost)) {
                    markup = profit / cost * 100;
                    revenue = markup / 100 * cost + cost;
                    document.querySelector('.margin-calculator__markup').value = convertToMoney(markup);
                    document.querySelector('.margin-calculator__revenue').value = convertToMoney(revenue);
                } else if (!isNaN(markup)) {
                    cost = profit * 100 / markup;
                    revenue = markup / 100 * cost + cost;
                    document.querySelector('.margin-calculator__cost').value = convertToMoney(cost);
                    document.querySelector('.margin-calculator__revenue').value = convertToMoney(revenue);
                } else if (!isNaN(profit)) {
                    cost = revenue - profit;
                    markup = (revenue - cost) / cost * 100;
                    document.querySelector('.margin-calculator__cost').value = convertToMoney(cost);
                    document.querySelector('.margin-calculator__markup').value = convertToMoney(markup);
                }
            }

            if (!isNaN(revenue) && !isNaN(profit)) {
                let margin = profit / revenue * 100;
                document.querySelector('.margin-calculator__result').innerHTML = convertToMoney(margin) + "%";
            }
        }
    }

    document.querySelector('.margin-calculator__cost').addEventListener('keyup', (e) => {
      calculate('cost', e.target.value);
    });

    document.querySelector('.margin-calculator__markup').addEventListener('keyup', (e) => {
        calculate('markup', e.target.value);
      });

    document.querySelector('.margin-calculator__revenue').addEventListener('keyup', (e) => {
        calculate('revenue', e.target.value);
    });

    document.querySelector('.margin-calculator__profit').addEventListener('keyup', (e) => {
        calculate('profit', e.target.value);
    });
}

export default marginCalculator;