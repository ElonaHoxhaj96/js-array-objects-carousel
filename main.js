// creiamo una Array che contenga le mie immagini
const immaginiArray = [
    'img/04.webp',
    'img/03.webp',
    'img/01.webp',
    'img/02.webp',
    'img/05.webp'
];

//estrapoliamo l'elemnto del contenitore di HTML
const imgCarosello = document.querySelector("#container");

//estrapoliamo gli elementi dall array
for(let i = 0; i < immaginiArray.length; i++){
    let imgFile = immaginiArray[i];
    // console.log(imgFile);
    // creare l'elemento da inserire ad ogni interazione
    let itemCarosello = `
                <div class="photo_img" > 
                  <img src= "${imgFile}">  
                </div>`;
    //inseriamo questo nuovo elemento al contenitore
    imgCarosello.innerHTML +=  itemCarosello    
}

//selezioniamo tutti gli elementi photo_img della pagina
const photo_img = document.getElementsByClassName("photo_img");
console.log(photo_img);

let visibleItes = 0;
// rendiamo visibile il primo elemento 
photo_img[visibleItes].classList.add("visible");

// selezioniamo lei icone con freccia su e giu
const iconeNextUp = document.querySelector(".up");
console.log(iconeNextUp);
// diamo la funzione al click delle icone in alto
iconeNextUp.addEventListener("click",
    function (){
        if(visibleItes < immaginiArray.length - 1){
        //tolgo la classe visible al elemento visibile
        photo_img[visibleItes].classList.remove("visible");
        //incremento il valore dell'indice visibleItems
        visibleItes++;
        //mettiamo la classe attiva al valore incrementato
        photo_img[visibleItes].classList.add("visible");
    }else {
        photo_img[visibleItes].classList.remove("visible");
        //incremento il valore dell'indice visibleItems
        visibleItes = 0;
        //mettiamo la classe attiva al valore incrementato
        photo_img[visibleItes].classList.add("visible");

    }
    }
)
// diamo la funzione al click delle icone in basso

const iconeNextDown = document.querySelector(".down");
console.log(iconeNextDown);
iconeNextDown.addEventListener("click",
    function (){
        if(visibleItes > 0){
        //tolgo la classe visible al elemento visibile
        photo_img[visibleItes].classList.remove("visible");
        //incremento il valore dell'indice visibleItems
        visibleItes--;
        //mettiamo la classe attiva al valore incrementato
        photo_img[visibleItes].classList.add("visible");
    }else{
        //tolgo la classe visible al elemento visibile
        photo_img[visibleItes].classList.remove("visible");
        //incremento il valore dell'indice visibleItems
        visibleItes = 4;
        //mettiamo la classe attiva al valore incrementato
        photo_img[visibleItes].classList.add("visible");
    }
    }
)