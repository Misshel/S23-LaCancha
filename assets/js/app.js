
var body= document.getElementsByTagName("BODY")[0];
var section= document.createElement("section");
var cancha=document.createElement("div");
    cancha.setAttribute("class","cancha");

section.appendChild(cancha);
body.appendChild(section);

for(var i=0;i<6;i++){
  var div=document.createElement("div");
  cancha.appendChild(div);
  if(i<3){
    div.setAttribute("class","pelotas");
  }else if (i>2 & i<5) {
    div.setAttribute("class","porteria");
    div.setAttribute("id","porteria"+(i-2))
  }else {
    div.setAttribute("class","centro");
  }
}

//
// var namecoder= document.createElement("span");
// imagen.setAttribute("src","assets/image/"+ i +".png");
// namecoder.innerHTML=coder[i];
// imagen.setAttribute("class","foto");
// div.setAttribute("class","imagen");
// namecoder.setAttribute("class","text");
// div.appendChild(imagen);
// div.appendChild(namecoder);
