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

let current = 0;
let animating = false;

function showCard(index){

    photo.classList.add("flip");

    photo.style.opacity = 0;
    caption.style.opacity = 0;

    setTimeout(()=>{

        photo.src = cards[index].image;
        caption.textContent = cards[index].text;

        photo.classList.remove("flip");
        photo.classList.add("next");

        photo.style.opacity = 1;
        caption.style.opacity = 1;

        setTimeout(()=>{
            photo.classList.remove("next");
            animating=false;
        },250);

    },300);

}

photo.addEventListener("click", () => {
    if (animating) return;

    animating = true;

    current++;

    if (current >= cards.length) {
        current = 0;
    }

    showCard(current);
});

photo.src = cards[0].image;
caption.textContent = cards[0].text;
photo.style.opacity = 1;
caption.style.opacity = 1;
