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
    var operatorText = $("#operator");

    // Assign on click functionality to number buttons
    btn1.on('click', function() {
        firstNumberText.append('1')
    })
    btn2.on('click', function() {
        firstNumberText.append('2')
    })
    btn3.on('click', function() {
        firstNumberText.append('3')
    })
    btn4.on('click', function() {
        firstNumberText.append('4')
    })
    btn5.on('click', function() {
        firstNumberText.append('5')
    })
    btn6.on('click', function() {
        firstNumberText.append('6')
    })
    btn7.on('click', function() {
        firstNumberText.append('7')
    })
    btn8.on('click', function() {
        firstNumberText.append('8')
    })
    btn9.on('click', function() {
        firstNumberText.append('9')
    })
    btn0.on('click', function() {
        firstNumberText.append('0')
    })

    // Assign on click functionality to operator buttons
    btnPlus.on('click', function() {
        operatorText.text('+')
    })

    btnMinus.on('click', function() {
        operatorText.text('-')
    })

    btnDivide.on('click', function() {
        operatorText.text('÷')
    })

    btnMultiply.on('click', function() {
        operatorText.text('x')
    })

    btnPower.on('click', function() {
        operatorText.text('^')
    })

    btnClear.on('click', function() {
        
    })

    btnEqual.on('click', function() {
        
    })

    // If operator is present, then add numbers to secondNumberText
    // If operator is NOT present, then add numbers to firstNumberText
    
})