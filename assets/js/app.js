
var body= document.getElementsByTagName("BODY")[0];
var section= document.createElement("section");
var cancha=document.createElement("div");
    cancha.setAttribute("class","cancha");

section.appendChild(cancha);
body.appendChild(section);

for(var i=0;i<6;i++){
  var div=document.createElement("div");
  div.classList.add("elementos");
  cancha.appendChild(div);
  if(i<3){
    div.classList.add("pelotas");
    div.setAttribute("id","pelota"+i)
  }else if (i>2 & i<5) {
    div.classList.add("porteria");
    div.setAttribute("id","porteria"+(i-2))
  }else {
    div.classList.add("centro");
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
