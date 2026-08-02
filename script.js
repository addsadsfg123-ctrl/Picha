const cards = [
{
image:"",
text:"Совсем скоро здесь появится первое фото ❤️"
}
];

const photo = document.getElementById("photo");
const caption = document.getElementById("caption");

photo.src = cards[0].image;
caption.textContent = cards[0].text;
