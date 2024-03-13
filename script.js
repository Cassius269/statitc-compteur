// selection des boutons
let boutonMoins = document.querySelector("#moins");
let boutonPlus = document.querySelector("#plus");

/*
    Correction du prof en utilisant de l'affectation par décomposition
    let [boutonMoins,boutonPlus] = document.querySelectorAll(".buttons-container button") // 


*/

// Selection du compteur
let compteur = document.querySelector(".counter-display");


let compterPlus = 0;


const updateCompteur = ()=>{
    if(compterPlus>0){
        compteur.style.color ='black';
    }
    else{
        compteur.style.color ='red';
    }

    compteur.textContent = compterPlus;
}

boutonPlus.addEventListener("click", ()=>{
   compterPlus++;
   updateCompteur();
})


boutonMoins.addEventListener("click", ()=>{
    compterPlus--;
    updateCompteur();
 })
 
console.log(compteur.textContent)