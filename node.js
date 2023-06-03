function tempconvert() {
    var opt = document.getElementById('box2');
    var selected = opt.value;

    if (selected == 'f') {
        val = parseFloat(document.getElementById('box1').value);
        var a = (val * 1.8) + 32;
        document.getElementById('box3').value = (a + " °F");
    }
    else {
        val = parseFloat(document.getElementById('box1').value);
        var b = (val - 32) * 0.55;
        document.getElementById('box3').value = (b + " °C");
    }


}





