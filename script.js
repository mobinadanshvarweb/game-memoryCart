// Data
const cartData4 = [
  { id: 1, src: "./img/1.svg" },
  { id: 2, src: "./img/2.svg" },
  { id: 3, src: "./img/3.svg" },
  { id: 4, src: "./img/4.svg" },
  { id: 5, src: "./img/5.svg" },
  { id: 6, src: "./img/6.svg" },
  { id: 7, src: "./img/7.svg" },
  { id: 8, src: "./img/8.svg" },
  { id: 9, src: "./img/1.svg" },
  { id: 10, src: "./img/2.svg" },
  { id: 11, src: "./img/3.svg" },
  { id: 12, src: "./img/4.svg" },
  { id: 13, src: "./img/5.svg" },
  { id: 14, src: "./img/6.svg" },
  { id: 15, src: "./img/7.svg" },
  { id: 16, src: "./img/8.svg" },
];
const cartData6 = [
  { id: 1, src: "./img/1.svg" },
  { id: 2, src: "./img/2.svg" },
  { id: 3, src: "./img/3.svg" },
  { id: 4, src: "./img/4.svg" },
  { id: 5, src: "./img/5.svg" },
  { id: 6, src: "./img/6.svg" },
  { id: 7, src: "./img/7.svg" },
  { id: 8, src: "./img/8.svg" },
  { id: 9, src: "./img/9.jpg" },
  { id: 10, src: "./img/20.jpg" },
  { id: 11, src: "./img/10.jpg" },
  { id: 12, src: "./img/11.png" },
  { id: 13, src: "./img/12.jpg" },
  { id: 14, src: "./img/13.png" },
  { id: 15, src: "./img/14.jpg" },
  { id: 16, src: "./img/15.jpg" },
  { id: 17, src: "./img/1.svg" },
  { id: 18, src: "./img/2.svg" },
  { id: 19, src: "./img/3.svg" },
  { id: 20, src: "./img/4.svg" },
  { id: 21, src: "./img/5.svg" },
  { id: 22, src: "./img/6.svg" },
  { id: 23, src: "./img/7.svg" },
  { id: 24, src: "./img/8.svg" },
  { id: 25, src: "./img/9.jpg" },
  { id: 26, src: "./img/20.jpg" },
  { id: 27, src: "./img/10.jpg" },
  { id: 28, src: "./img/11.png" },
  { id: 29, src: "./img/12.jpg" },
  { id: 30, src: "./img/13.png" },
  { id: 31, src: "./img/14.jpg" },
  { id: 32, src: "./img/15.jpg" },
  { id: 33, src: "./img/17.png" },
  { id: 34, src: "./img/20.jpg" },
  { id: 35, src: "./img/19.jpg" },
  { id: 36, src: "./img/19.jpg" },
];
//Selector
const four = document.getElementById("four");
const six = document.getElementById("six");
const holder4 = document.getElementById("holder-4");
const holder6 = document.getElementById("holder-6");
const score = document.getElementById("myScore");
const cartsFour = document.querySelectorAll("#holder-4 > span > span");
const cartsSix = document.querySelectorAll("#holder-6 > span > span");

// Select Cart Size
const select = (element1, element2, holder1, holder2) => {
  element1.style.backgroundColor = "#0a5db08d";
  element2.style.backgroundColor = "transparent";
  holder1.style.display = "flex";
  holder2.style.display = "none";
};
const selectFour = () => {
  select(four, six, holder4, holder6);
  shuffleArray(cartData4);
  assigneCarts(cartsFour, cartData4);
  scoreCount = 0;
};
const selectSix = () => {
  select(six, four, holder6, holder4);
  shuffleArray(cartData6);
  assigneCarts(cartsSix, cartData6);
  scoreCount = 0;
};

//assigne cartData to carts
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
}

let checkCart = null;
let selectedCards = [];
let lockBoard = false;
let scoreCount = 0;

const assigneCarts = (element, arr) => {
  element.forEach((cart, index) => {
    cart.dataset.id = arr[index].id;
    cart.dataset.image = arr[index].src;
    cart.style.backgroundImage = `url(${arr[index].src})`;
    cart.style.backgroundSize = "cover";
    cart.style.backgroundPosition = "center";
    cart.style.display = "inline-block";

    cart.addEventListener("click", () => {
      if (
        lockBoard ||
        cart.style.visibility === "hidden" ||
        selectedCards.includes(cart)
      )
        return;

      cart.classList.add("change-z-index");
      selectedCards.push(cart);

      if (selectedCards.length === 2) {
        lockBoard = true;
        const [firstCard, secondCard] = selectedCards;

        if (
          firstCard.dataset.image === secondCard.dataset.image &&
          firstCard.dataset.id !== secondCard.dataset.id
        ) {
          setTimeout(() => {
            firstCard.style.visibility = "hidden";
            secondCard.style.visibility = "hidden";
            selectedCards = [];
            lockBoard = false;
          }, 1000);
          scoreCount++;
          score.innerText = scoreCount;
        } else {
          setTimeout(() => {
            firstCard.classList.remove("change-z-index");
            secondCard.classList.remove("change-z-index");
            selectedCards = [];
            lockBoard = false;
          }, 1000);
        }
      }
    });
  });
};

assigneCarts(cartsFour, cartData4);
