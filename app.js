function inputValue(num) {
    var inputtext = document.getElementById("inputtext");
    inputtext.value += num;
}
    
    function result() {
        var inputtext = document.getElementById("inputtext")
        inputtext.value = eval(inputtext.value)
    }
    
    function allClear() {
        var inputtext = document.getElementById("inputtext")
        inputtext.value = ""
    }
    
    function singleClear() {
        var inputtext = document.getElementById("inputtext")
        inputtext.value = inputtext.value.slice(0, -1)
    }