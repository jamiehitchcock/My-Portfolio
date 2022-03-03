//select the input and outputs
const input = document.querySelector("#input");
const output = document.querySelector("#output");

//function to convert number into roman numeral
function convertToRoman() {
    //take the value of the input as an integer
    let num = parseInt(input.value);
    //array of roman numerals
    let romanNumerals = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I",
    }
    //read through array taking the largest number first
    const highestRoman = Object.keys(romanNumerals).reverse();
    let result = "";
    //add the roman numeral to result and take away the number value from total
    highestRoman.forEach(key => {
        while (num >= key) {
            result += romanNumerals[key];
            num -= key;
        }
    })
    //display result
    output.innerHTML = result;
}

//execute function when value is entered into input textbox
input.addEventListener("input", (e) => {
    convertToRoman();
});




