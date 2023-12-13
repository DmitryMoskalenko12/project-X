const heronsFormula = () => {
    function validateForm() {
        var side1 = Number(document.getElementById("side1").value);
        var side2 = Number(document.getElementById("side2").value);
        var side3 = Number(document.getElementById("side3").value);

        let s = (side1 + side2 + side3) / 2
        console.log(s)
        let Area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))
        console.log(Area)
        if (isNaN(Area)) {
            alert("Sum of Smallest Two Sides must be greater than the Largest Side")
        }
        else {
            Area = Math.round(Area * 100) / 100

            document.getElementById("resultDeriv").innerHTML = `<p style="color: black">The Area of the Triangle : <b>${Area} (unit)<sup>2</sup></b></p>`;
        }
    }

    document.querySelector('.herons-calculator__validate').addEventListener('click', () => {
        validateForm();
    })

}

export default heronsFormula;