export default function formatMoney(amount, decimalCount = 0, decimal = ".", thousands = ",") {

    //decimalCount = 2 ==> có 2 số 0 sau dấu .
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
};
// document.getElementById("b").addEventListener("click", event => {
//     document.getElementById("x").innerText = "Result was: " + formatMoney(document.getElementById("d").value);
// });

// <label>Insert your amount: <input id="d" type="text" placeholder="Cash amount" /></label>
// <br />
// <button id="b">Get Output</button>
// <p id="x">(press button to get output)</p>
