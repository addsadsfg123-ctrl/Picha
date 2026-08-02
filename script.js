const cards = [
    {
        image: "-ZvMl2Ip7l0.jpg",
        text: "Здесь будет подпись №1"
    },
    {
        image: "-jK1A1rtkOs.jpg",
        text: "Здесь будет подпись №2"
    },
    {
        image: "B7bH7HIbE2c-1.jpg",
        text: "Здесь будет подпись №3"
    },
    {
        image: "EON2NYRv-YM.jpg",
        text: "Здесь будет подпись №4"
    },
    {
        image: "IMG20260606194519.jpg",
        text: "Здесь будет подпись №5"
    },
    {
        image: "IMG_20260802_190224_995.jpg",
        text: "Здесь будет подпись №6"
    },
    {
        image: "IMG_20260802_190231_011.jpg",
        text: "Здесь будет подпись №7"
    },
    {
        image: "Mt6UQuxZS0c.jpg",
        text: "Здесь будет подпись №8"
    },
    {
        image: "WQdOc23CU4A.jpg",
        text: "Здесь будет подпись №9"
    },
    {
        image: "ZfCyyRaCrfg.jpg",
        text: "Здесь будет подпись №10"
    }
];


const photo = document.getElementById("photo");
const caption = document.getElementById("caption");
const cover = document.getElementById("cover");


let current = 0;
let animating = false;


// первое фото
photo.src = cards[0].image;
caption.textContent = cards[0].text;


// открытие альбома
setTimeout(() => {
    cover.classList.add("hide-cover");
}, 1800);


// смена фото
photo.addEventListener("click", () => {

    if(animating) return;

    animating = true;

    photo.style.opacity = 0;
    caption.style.opacity = 0;


    setTimeout(() => {

        current++;

        if(current >= cards.length){
            current = 0;
        }


        photo.src = cards[current].image;
        caption.textContent = cards[current].text;


        photo.style.opacity = 1;
        caption.style.opacity = 1;


        animating = false;

    },350);

});
