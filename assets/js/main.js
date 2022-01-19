let age1 = document.getElementById("age1")
let age2 = document.getElementById("age2")
let diff = document.getElementById("diff")

function calc() {
    let result = 0;
    console.log(age1.value - age2.value);
    result = age1.value - age2.value;
    diff.innerHTML = result;
}
