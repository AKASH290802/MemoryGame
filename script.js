// Array of images to use on cards
const cardImages = [
    'https://picsum.photos/id/1/200/300',
    'https://picsum.photos/id/2/200/300',
    'https://picsum.photos/id/3/200/300',
    'https://picsum.photos/id/4/200/300',
    'https://picsum.photos/id/5/200/300',
    'https://picsum.photos/id/6/200/300',
    'https://picsum.photos/id/7/200/300',
    'https://picsum.photos/id/8/200/300',
  ];
  
  // Shuffle function to randomize the order of the card images
  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  
  // Create a new shuffled array of card images
  const shuffledCards = shuffle([...cardImages, ...cardImages]);
  
  // Get the game board and restart button elements
  const gameBoard = document.querySelector('.game-board');
  const restartButton = document.querySelector('.restart-button');
  
  // Add event listener to restart button to shuffle and reset the game
  restartButton.addEventListener('click', () => {
    // Create a new shuffled array of card images
    const shuffledCards = shuffle([...cardImages, ...cardImages]);
  
    // Flip all cards back over
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      card.classList.remove('flipped');
    });
  
    // Wait a short time before updating the cards to prevent clicking too quickly
    setTimeout(() => {
      // Remove all cards from the game board
      gameBoard.innerHTML = '';
  
      // Create a new set of cards and add them to the game board
      shuffledCards.forEach((cardImage) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.style.backgroundImage = `url(${cardImage})`;
        cardElement.addEventListener('click', () => {
          cardElement.classList.add('flipped');
        });
        gameBoard.appendChild(cardElement);
      });
    }, 500);
  });
  