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
    var secondNumberText = $("#second-number");

    // If operator is present, then add numbers to secondNumberText
    // If operator is NOT present, then add numbers to firstNumberText
    function firstOrSecond(value) {
        if (operatorText.text() === "") {
            firstNumberText.append(value);
            console.log("first number")
        }
        else {
            secondNumberText.append(value);
            console.log("second number")
            console.log(operatorText);
        }
    }

    // Assign on click functionality to number buttons
    btn1.on('click', function() {
        // firstNumberText.append('1')
        // Call function that appends whatever is passed into it to the display
        firstOrSecond(1);
    })
    btn2.on('click', function() {
        firstOrSecond(2);
    })
    btn3.on('click', function() {
        firstOrSecond(3);
    })
    btn4.on('click', function() {
        firstOrSecond(4);
    })
    btn5.on('click', function() {
        firstOrSecond(5)
    })
    btn6.on('click', function() {
        firstOrSecond(6)
    })
    btn7.on('click', function() {
        firstOrSecond(7)
    })
    btn8.on('click', function() {
        firstOrSecond(8);
    })
    btn9.on('click', function() {
        firstOrSecond(9);
    })
    btn0.on('click', function() {
        firstOrSecond(0);
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
       firstNumberText.text("")
       secondNumberText.text("")
       operatorText.text("") 
    })

    btnEqual.on('click', function() {
        
    })




    
})