var box = document.getElementById('addBox');
var canvas = document.getElementById('canvas')
box.addEventListener('click', function(e){
 
  var div = document.createElement("div");
  div.className = "box";
  document.body.appendChild(div);
  var text = document.createElement("textarea");
  text.placeholder = "Napisz coś";
  div.appendChild(text);

});