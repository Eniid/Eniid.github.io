const annimElt = document.getElementsByClassName("annim"); 

console.log(annimElt);

function annime(){
    console.log("coucou");
    
    oneElt.classList.add('annimation_suite')
}

for(var i= 0; i < annimElt.length; i++)
{
    let oneElt = annimElt[i];
    oneElt.classList.add('annimation')
    console.log(oneElt);
}


window.addEventListener("scroll", e => { // On fait en sorte que l'action se passe lorsque qu'on scrolle
document.querySelectorAll(".annim").forEach(element => { // On boucle sur tous les éléments qui ont la class annim
    const scrollDeLaPage = window.pageYOffset; // On récupère le scroll de la page
    const positionDeLElement = element.offsetTop; // Puis la position de l'élément .annim
    const tailleDeLaPage = window.innerHeight // et on prend la taille de la page
    if (scrollDeLaPage >= positionDeLElement - tailleDeLaPage + 200) { // Si on est plus bas que l'élément en bas + 200px (à modifier si tu veux que l'event se passe plus tôt)
        element.classList.add("animation_suite"); // on ajoute la class
    }
})
}, false)