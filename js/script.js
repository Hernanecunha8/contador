let contador=document.querySelector('.contador')
let numero=0;

function diminuir(){
    numero-=1;
 
    contador.innerHTML=numero;

}
function adicionar(){
    numero+=1;
    contador.innerHTML=numero;

}