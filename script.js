const inserted = document.getElementById('myInput')
inserted.addEventListener('input', function (event) {
    let converted = event.target.value

    let dollarsValue = document.getElementById('dollarsId')
    dollarsValue.innerHTML = converted * 0.000070000

    let poundsValue = document.getElementById('poundsId')
    poundsValue.innerHTML = converted * 0.000050000

    let eurosValue = document.getElementById('eurosId')
    eurosValue.innerHTML = converted * 0.000060000

})