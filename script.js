// DOM SELECTOR
const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// Keep track of current card
let currentActiveCard = 0;

// Store DOM cards
const cardsEl = [];
// ================= Create cards & Flip Effect =================
// Store card data
const cardsData = [
  {
    question: 'Qual o maior estado do Brasil?',
    answer: 'Amazonas'
  },
  {
    question: 'Quantos países tem no mundo?',
    answer: '193 países'
  },
  {
    question: 'Quem descobriu o Brasil?quem',
    answer: 'Pedro Álvares Cabral'
  }
]

// Create all cards
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index))
}


// Create a single card in DOM
function createCard(data, index) {
  const card = document.createElement('div')
  card.classList.add('card')

  if(index === 0 ) {
    card.classList.add('active')
  }

  card.innerHTML = `
  <div class="inner-card">
    <div class="inner-card-front">
      <p>${data.question}</p>
    </div>
    <div class="inner-card-back">
      <p>${data.answer}</p>
    </div>
  </div>
  ` ;

  card.addEventListener('click', () => card.classList.toggle('show-answer'))

  // Add to DOM cards 
  cardsEl.push(card)

  cardsContainer.appendChild(card)  

  updateCurrentText()
}

// Show number of cards
function updateCurrentText() {
  currentEl.innerHTML = `${ currentActiveCard + 1}/${cardsEl.length}` 
}

createCards()

// Event listerners

nextBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card left'

  currentActiveCard = currentActiveCard + 1

  if(currentActiveCard > cardsEl.length - 1){
    currentActiveCard = cardsEl.length -1
  }

  cardsEl[currentActiveCard].className = 'card active'

  updateCurrentText()
});

prevBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card right';

  currentActiveCard = currentActiveCard - 1;

  if(currentActiveCard < 0) {
    currentActiveCard = 0
  }

  cardsEl[currentActiveCard].className = 'card active'

  updateCurrentText()
});