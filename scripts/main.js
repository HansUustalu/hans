
console.log(alert)

function firstFunction(){
  var value = document.getElementById("text").value;
  alert(value);
}

var i = 0;
var button = document.getElementById('click2');
button.onclick = function move(){
  if (i == 0){
    i = 1;
    var element =
    document.getElementById("thebar");
    var width = 1;
    var thebar = setInterval(frame, 20);

    function frame(){
      if (width >= 70){
        clearInterval(thebar);
        i = 0;
      }else {
        width++;
        element.style.width = width + "%";
      }
    }
  }
}

 function items(){
  var stuff = ["coffee" , " milk" , " medicine" , " water"];
  var display = stuff.toString();
 document.getElementById("things").innerHTML = display;

}
