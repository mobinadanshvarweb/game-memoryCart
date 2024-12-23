// Data
const cartData4 = [
  { id: 1, src: "./img/donat.jpg" },
  { id: 2, src: "./img/catHand.jpg" },
  { id: 3, src: "./img/cow.jpg" },
  { id: 4, src: "./img/catFinger.jpg" },
  { id: 5, src: "./img/prince.jpg" },
  { id: 6, src: "./img/dog.jpg" },
  { id: 7, src: "./img/doll.jpg" },
  { id: 8, src: "./img/fullAcc.jpg" },
  { id: 9, src: "./img/fullAcc.jpg" },
  { id: 10, src: "./img/donat.jpg" },
  { id: 11, src: "./img/catHand.jpg" },
  { id: 12, src: "./img/cow.jpg" },
  { id: 13, src: "./img/catFinger.jpg" },
  { id: 14, src: "./img/prince.jpg" },
  { id: 15, src: "./img/dog.jpg" },
  { id: 16, src: "./img/doll.jpg" },
];
const cartData6 = [
  { id: 1, src: "./img/donat.jpg" },
  { id: 2, src: "./img/catHand.jpg" },
  { id: 3, src: "./img/cow.jpg" },
  { id: 4, src: "./img/catFinger.jpg" },
  { id: 5, src: "./img/prince.jpg" },
  { id: 6, src: "./img/dog.jpg" },
  { id: 7, src: "./img/doll.jpg" },
  { id: 8, src: "./img/fullAcc.jpg" },
  { id: 9, src: "./img/fullAcc.jpg" },
  { id: 10, src: "./img/donat.jpg" },
  { id: 11, src: "./img/catHand.jpg" },
  { id: 12, src: "./img/cow.jpg" },
  { id: 13, src: "./img/catFinger.jpg" },
  { id: 14, src: "./img/prince.jpg" },
  { id: 15, src: "./img/dog.jpg" },
  { id: 16, src: "./img/doll.jpg" },
  { id: 17, src: "./img/1.svg" },
  { id: 18, src: "./img/2.svg" },
  { id: 19, src: "./img/3.svg" },
  { id: 20, src: "./img/4.svg" },
  { id: 21, src: "./img/5.svg" },
  { id: 22, src: "./img/6.svg" },
  { id: 23, src: "./img/7.svg" },
  { id: 24, src: "./img/8.svg" },
  { id: 25, src: "./img/9.jpg" },
  { id: 26, src: "./img/9.jpg" },
  { id: 27, src: "./img/10.jpg" },
  { id: 28, src: "./img/10.jpg" },
  { id: 29, src: "./img/10.jpg" },
  { id: 30, src: "./img/10.jpg" },
  { id: 31, src: "./img/10.jpg" },
  { id: 32, src: "./img/10.jpg" },
  { id: 33, src: "./img/10.jpg" },
  { id: 34, src: "./img/10.jpg" },
  { id: 35, src: "./img/10.jpg" },
  { id: 36, src: "./img/10.jpg" },
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
};
const selectSix = () => {
  select(six, four, holder6, holder4);
  shuffleArray(cartData6);
  assigneCarts(cartsSix, cartData6);
};

//assigne cartData to carts
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
}

let checkCart = null;
let lockBoard = false; // قفل برای جلوگیری از کلیک هم‌زمان
let scoreCount = 0;

const assigneCarts = (element, arr) => {
  element.forEach((cart, index) => {
    console.log(index, arr[index].id);
    cart.dataset.id = arr[index].id;

    cart.dataset.image = arr[index].src;
    cart.style.backgroundImage = `url(${arr[index].src})`;
    cart.style.backgroundSize = "cover";
    cart.style.backgroundPosition = "center";
    cart.style.display = "inline-block";
    cart.addEventListener("click", () => {
      if (lockBoard || cart.style.visibility === "hidden") return;
      cart.classList.add("change-z-index");
      if (!checkCart) {
        checkCart = cart;
      } else {
        lockBoard = true;
        if (
          cart.dataset.image === checkCart.dataset.image &&
          cart.dataset.id != checkCart.dataset.id
        ) {
          setTimeout(() => {
            cart.style.visibility = "hidden";
            checkCart.style.visibility = "hidden";
            checkCart = null;
            lockBoard = false;
          }, 1000);
          scoreCount++;
          score.innerText = scoreCount;
        } else {
          setTimeout(() => {
            cart.classList.remove("change-z-index");
            checkCart.classList.remove("change-z-index");
            checkCart = null;
            lockBoard = false;
          }, 1000);
        }
      }
    });
  });
};

assigneCarts(cartsFour, cartData4);

// Restart the game
const restart = () => {
  selectFour();
  shuffleArray(cartData4);
  assigneCarts();
  cartsFour.forEach((cart) => {
    cart.classList.remove("change-z-index");
    cart.style.visibility = "visible";
  });
  score.innerText = "0";
};
