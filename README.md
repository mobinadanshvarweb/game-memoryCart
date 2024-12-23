

---

# Memory Matching Game

A fun and interactive **Memory Matching Game** where players match pairs of cards based on their images. This project is built using HTML, CSS, and JavaScript.

## 🎮 Features

- **Two Game Modes**:
  - 4x4 Grid (16 cards)
  - 6x6 Grid (36 cards)
- **Randomized Card Positions** on each game restart.
- **Score Tracking** to keep track of successful matches.
- Smooth animations and user-friendly interactions.
- Built-in logic to prevent mismatched clicks and ensure a seamless experience.

---

## 🚀 How to Play

1. Select the grid size (4x4 or 6x6).
2. Click on a card to reveal its image.
3. Click on a second card:
   - If the images match, both cards will disappear.
   - If they don’t match, the cards will flip back after 1 second.
4. Continue until all cards are matched.
5. Check your score at the top of the screen.

---

## 🛠️ Technologies Used

- **HTML**: Structure of the game.
- **CSS**: Styling for the cards and layout.
- **JavaScript**: Game logic and interactivity.

---

## 📂 File Structure

```plaintext
.
├── index.html        # Main HTML file
├── styles.css        # Styles for the game
├── script.js         # JavaScript for game logic
├── img/              # Folder containing all card images
└── README.md         # Project documentation
```

---

## 📝 How It Works

### Card Data

The card images and their IDs are stored in arrays:

```javascript
const cartData4 = [
  { id: 1, src: "./img/donat.jpg" },
  { id: 2, src: "./img/catHand.jpg" },
  ...
];
```

### Shuffling Cards

The `shuffleArray` function ensures that the cards are randomized each time the game is loaded or restarted:

```javascript
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
}
```

### Matching Logic

The game uses the following logic to check if two cards match:

- If the images of the two selected cards are the same, the cards are hidden, and the score is incremented.
- If not, the cards flip back after 1 second.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- A modern web browser (e.g., Chrome, Firefox, Safari)
- [Git](https://git-scm.com/) (optional, for cloning the repository)

### Installation

1. Clone this repository:

```bash
git clone https://github.com/mobinadanshvarweb/game-memoryCar.git
```

2. Navigate to the project folder:

```bash
cd game-memoryCar
```

3. Open the `index.html` file in your browser.

---

## 🎨 Customization

- **Add New Images**: Place new images in the `img/` folder and update the `cartData4` and `cartData6` arrays in `script.js`.
- **Styling**: Modify `styles.css` to customize the layout, colors, or animations.



## 🌟 Contributions

Contributions are welcome! If you find bugs or have ideas for new features, feel free to:

1. Fork the repository.
2. Create a new branch.
3. Submit a pull request.

---

## 📝 License

This project is licensed under the **MIT License**. You’re free to use, modify, and distribute it as you like.

---

## 📧 Contact

For any questions or feedback, feel free to reach out:

- **LinkedIn**: [MobinaDaneshvar](www.linkedin.com/in/mobinadaneshvar)

- **GitHub**: [MobinaDaneshvar](https://github.com/mobinadanshvarweb)

Enjoy the game and happy coding! 🎉

---

این ریدمی را به همراه اسکرین‌شات‌های مناسب برای پروژه‌تان استفاده کنید تا کاربران بتوانند به راحتی با برنامه شما آشنا شوند.
