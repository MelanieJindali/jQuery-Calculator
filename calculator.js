$(document).ready(function() {
    var btn1 = $("#button-1");
    var btn2 = $("#button-2");
    var btn3 = $("#button-3");
    var btn4 = $("#button-4");
    var btn5 = $("#button-5");
    var btn6 = $("#button-6");
    var btn7 = $("#button-7");
    var btn8 = $("#button-8");
    var btn9 = $("#button-9");
    var btn0 = $("#button-0");
    var btnPlus = $("#button-plus");
    var btnMinus = $("#button-minus");
    var btnMultiply = $("#button-multiply");
    var btnDivide = $("#button-divide");
    var btnPower = $("#button-power");
    var btnEqual = $("#button-equal");
    var btnClear = $("#button-clear");
    var firstNumberText = $("#first-number");

    btn1.on('click', function() {
        firstNumberText.append('1')
    })
})