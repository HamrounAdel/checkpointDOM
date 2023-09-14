////////////incriment d'un quantite de produit
let btnplus = document.getElementsByClassName("btn-plus")
for(let btn of btnplus){
  btn.addEventListener('click',function(){
   {btn.previousElementSibling.innerText++
   
    }
    TotalAchat();
    TotalPrice()
  })
  
}


/////// discriment d'un qauntite de produit
let btnmoins = document.getElementsByClassName("btn-moins")
for(let btn of btnmoins){
  btn.addEventListener('click',function(){
    if(btn.nextElementSibling.innerText>0)
     {btn.nextElementSibling.innerText-- 
      
      } 
      TotalAchat();
      TotalPrice()
  })
  
}


////fonction de suppression de panier
let delet = document.getElementsByClassName("btn-delete")
for( let btndel of delet){
  btndel.addEventListener('click',function(){
    btndel.parentElement.parentElement.remove()
    TotalAchat();
  })
}

//////////like par color
var heartbtn = document.getElementsByClassName('')

console.log('hearts',heartbtn)

for ( let btn of heartbtn){
    btn.addEventListener('click',function(){
        if(btn.style.color === "red"){
            btn.style.color = "gray"
        }else{
            btn.src = "blue"
        }
    })
}


//////////////////like par source d'image
let coeur = document.querySelectorAll('.like');
for(let lik of coeur){
lik.addEventListener("click", function() {
  if (lik.src.endsWith("images/coeur.jpg")) {
    lik.src = "images/lik-red.jpg";
  } else {
  
    lik.src = "images/coeur.jpg";
  }
});
}


///////////fonction pour calculer le total d'achat
function TotalAchat(){
  let price = document.getElementsByClassName('prix')
  console.log("price=",price)
  
  let quantite = document.getElementsByClassName('quantity')
  console.log("quantit=",quantite)
let sum = 0
for (let i=0 ; i<price.length ; i++){ 
sum += price[i].innerText * quantite[i].innerText
}
document.getElementById('prix-total').innerText = sum
console.log("sommmm=",sum)
  
}


///////////fonction pour calculer le total de price
function TotalPrice(){
  let price = document.getElementsByClassName('prix')
  console.log("price=",price)
  
  let quantite = document.getElementsByClassName('quantity')
  console.log("quantit=",quantite)
  let prod =  document.getElementsByClassName('total')
   
for (let i=0 ; i<price.length ; i++){
 prod[i].innerText= price[i].innerText * quantite[i].innerText

}
return prod 
  
}


