function sum(a, b) {
    let sm = a + b;
    result.innerText = sm;
}

function minus(a, b) {
    let min = a - b;
    result.innerText = min;
}

document.querySelector('.pls').addEventListener('click', function (e) {
    e.preventDefault();
    let a = parseInt(document.querySelector('.num1').value);
    let b = parseInt(document.querySelector('.num2').value);
    sum(a, b);
});

document.getElementsByClassName('minus')[0].addEventListener('click', function (ev) {
    ev.preventDefault();

    let a = parseInt(document.querySelector('.num1').value);
    let b = parseInt(document.querySelector('.num2').value);
    minus(a, b);
});

function validation(a, b) {
    if(a === b)
        return false;

    return true;
}