const pythagoras = () => {
    function validateForm() {
        const x = document.getElementById("sideA").value;
        const y = document.getElementById("sideB").value;
        const z = document.getElementById("hypo").value;
        let result1 = Math.sqrt(x * x + y * y);
        let result2 = Math.sqrt(z * z - x * x);
        let result3 = Math.sqrt(z * z - y * y);
        
        if (z == "") {
            document.getElementById("hypo").value = `${result1}`
        }
        else if (x == "") {
            document.getElementById("sideA").value = `${result3}`
        }
        else if (y == "") {
            document.getElementById("sideB").value = `${result2}`
        }
        else {
            alert("One field must be empty")
        }
    }

    document.querySelector('.pythagoras__submit').addEventListener('submit', (e) => {
        e.preventDefault()
        validateForm();
    })
}

export default pythagoras;