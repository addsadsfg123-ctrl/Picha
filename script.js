const cards = [
    {
        image: "-ZvMl2Ip7l0.jpg",
        text: "Тут ты звонишь в СССР"
    },
    {
        image: "-jK1A1rtkOs.jpg",
        text: "Здесь ты Стильное Солнце"
    },
    {
        image: "B7bH7HIbE2c-1.jpg",
        text: "Такую тебя, Я вижу каждую минуту "
    },
    {
        image: "EON2NYRv-YM.jpg",
        text: "Прям тут ты Королева"
    },
    {
        image: "IMG20260606194519.jpg",
        text: "А тут просто очаровашка-милашка"
    },
    {
        image: "IMG_20260802_190224_995.jpg",
        text: "Здеся мы попались"
    },
    {
        image: "IMG_20260802_190231_011.jpg",
        text: "Смешнявка"
    },
    {
        image: "Mt6UQuxZS0c.jpg",
        text: "В тот день ты была словно из Сказки"
    },
    {
        image: "WQdOc23CU4A.jpg",
        text: "А в этот была промокашкой"
    },
    {
        image: "ZfCyyRaCrfg.jpg",
        text: "А здесь ты Апаснасть"
    }
];


const photo = document.getElementById("photo");
const caption = document.getElementById("caption");
const cover = document.getElementById("cover");


let current = 0;
let animating = false;


function changePhoto(){

    if(animating) return;

    animating = true;


    photo.style.opacity = 0;
    caption.style.opacity = 0;


    setTimeout(()=>{

        current++;

        if(current >= cards.length){
            current = 0;
        }


        photo.src = cards[current].image;
        caption.textContent = cards[current].text;


        photo.style.opacity = 1;
        caption.style.opacity = 1;


        animating = false;

    },400);

}


// клик по фото
photo.onclick = changePhoto;


// первое фото
photo.src = cards[0].image;
caption.textContent = cards[0].text;


// обложка
setTimeout(()=>{
    cover.classList.add("hide-cover");
},1800);
