document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cards = [
        {
            name: 'bread',
            img: 'src/images/bread-slice-solid.svg'
        },
        {
            name: 'cheese',
            img: 'src/images/cheese-solid.svg'
        },
        {
            name: 'egg',
            img: 'src/images/egg-solid.svg'
        },
        {
            name: 'hanburger',
            img: 'src/images/hamburger-solid.svg'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza-slice-solid.svg'
        },
        {
            name: 'bread',
            img: 'src/images/bread-slice-solid.svg'
        },
        {
            name: 'cheese',
            img: 'src/images/cheese-solid.svg'
        },
        {
            name: 'egg',
            img: 'src/images/egg-solid.svg'
        },
        {
            name: 'hanburger',
            img: 'src/images/hamburger-solid.svg'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza-slice-solid.svg'
        }
    ]

    cards.sort(() => 0.5 - Math.random());
    console.log(cards)

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cards.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'src/images/bunny-154508_640.png')
            card.setAttribute('data-id', i)
            card.style.width = '100px';
            card.style.height = '100px';
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cards[cardId].name);
        cardsChosenIds.push(cardId)
        this.setAttribute('src', cards[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    function checkForMatch() {
         const cards = document.querySelectorAll('img')
         const optionOneId = cardsChosenIds[0]
         const optionTwoId = cardsChosenIds[1]

         if (optionOneId == optionTwoId) {
             alert('You have clicked the same image!')
             cards[optionOneId].setAttribute('src', 'src/images/bunny-154508_640.png')
             cards[optionTwoId].setAttribute('src', 'src/images/bunny-154508_640.png')
         } else if (cardsChosen[0] === cardsChosen[1]) {
             alert('You have found a match!')
             cards[optionOneId].removeEventListener('click', flipCard)
             cards[optionTwoId].removeEventListener('click', flipCard)
             cardsWon.push(cardsChosen)
         } else {
            cards[optionOneId].setAttribute('src', 'src/images/bunny-154508_640.png')
            cards[optionTwoId].setAttribute('src', 'src/images/bunny-154508_640.png')
            alert('Try again!')
         }
         cardsChosen = [] 
         cardsChosenIds = []
         resultDisplay.textContent = cardsWon.length
         if (cardsWon.length === cards.length / 2) {
             resultDisplay.textContent = ' Congratulations! You won!'
         }
    }

    createBoard()
})