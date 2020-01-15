function create(){
     var h = document.getElementById("heigth").value;
     var w = document.getElementById("width").value;
     var c = document.getElementById("color_picker").value;
     var x = document.getElementById("x-pos").value;
     var y = document.getElementById("y-pos").value;
if (h.value !== "" && w.value !== "" & y.value !== "" & x.value !== "") {
    var box = document.getElementById("box");
     box.style.height = h +"px";
     box.style.width = w + "px";
     box.style.backgroundColor= c;
     box.style.top = x +"px";
     box.style.left = y +"px";
} else {    
   alert ("stop fucking up")
}
    
      
 }