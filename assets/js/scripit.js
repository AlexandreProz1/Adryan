const imgdestaques = "./assets/img/rdr2.avif"

let imagenAtual = 1;

const imagen = document.querySelector("imagendestaque")

setInterval,function (){
   atual++;
   if(imgagenAtual >= imgdestaques.length)
      imagenAtual = 0;
   
}
 imagen.src = imgdestaques,imagenAtual
 