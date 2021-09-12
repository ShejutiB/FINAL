
function Calculation() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const monthlyInt = document.getElementById("monthlyInt").value;
    const yearlyFee = document.getElementById("yearlyFee").value;
    const monthlyFee = yearlyFee / 12.0;


    let value;
    if (age > 50 && yearlyFee > 20000) {
        value = yearlyFee * 1.20;
    } else if (age > 30 && (monthlyFee > 250 || monthlyInt > 250)) {
        value = yearlyFee * 1.15;
    } else {
        value = yearlyFee;
    }
    value = "Incentive Amount = ".concat(value);