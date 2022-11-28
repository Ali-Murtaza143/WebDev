function getnum(num) {
    var inputdata = document.getElementById("inputdata");
    inputdata.value += num;
}


function getresult() {
    var result = document.getElementById("result");
    result.value = eval(inputdata.value)
}


function clearresult() {
    var result = document.getElementById("result");
    result.value = "";
    var result = document.getElementById("inputdata");
    inputdata.value = "";
}