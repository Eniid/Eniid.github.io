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








let el = $('.switch');
let cur = el.find('.current');
let options = el.find('.options li');
let content = $('#content');

// Open language dropdown panel

el.on('click', function(e) {
  el.addClass('show-options');
  
  setTimeout(function() {
    el.addClass('anim-options');
  }, 50);
  
  setTimeout(function() {
    el.addClass('show-shadow');
  }, 200);
});


// Close language dropdown panel

options.on('click', function(e) {
  e.stopPropagation();
  el.removeClass('anim-options');
  el.removeClass('show-shadow');
  
  let newLang = $(this).data('lang');
  
  cur.find('span').text(newLang);
  content.attr('class', newLang);
  
  setLang(newLang);
  
  options.removeClass('selected');
  $(this).addClass('selected');
  
  setTimeout(function() {
    el.removeClass('show-options');
  }, 600);
});





//** Light Box */



const element = document.querySelector(".revers_scrool")
element.addEventListener("wheel", e=>{
    //e.preventDefault()
    element.scrollLeft += e.deltaY
}, true)


document.addEventListener("click", e=>{
    const el = e.target;
    if(el.classList.contains("lightbox_image")){
        e.preventDefault()
        const checkbox = document.querySelector("#lightbox");
        const lightbox = document.querySelector(".lightboxContainer")
        lightbox.innerHTML = ""
        const image = document.createElement("img")
        image.src = el.parentElement.getAttribute("href")
        lightbox.insertAdjacentElement("beforeend", image)
        checkbox.checked = true
        console.log("bouuu");
        
        return false; 
    }
    if(el.classList.contains("lightbox")){
        const checkbox = document.querySelector("#lightbox");
        checkbox.checked = false
    }
})