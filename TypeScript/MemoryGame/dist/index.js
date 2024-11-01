var _a;
const memoryCards = document.querySelectorAll(".memory-card");
const overlay = document.querySelector(".overlay");
let clickedCards = [];
let matches = [];
// Lägger till klickhändelse på korten
function addClickEventToCards(cards) {
    cards.forEach((card) => {
        card.addEventListener("click", (e) => {
            const clickedCard = e.currentTarget;
            // Kontrollera om kortet redan är vänt eller matchat
            if (!clickedCard.classList.contains("flip") &&
                !clickedCard.classList.contains("matched")) {
                clickedCard.classList.add("flip");
                clickedCards.push(clickedCard);
                // Kontrollera om vi har två kort
                if (clickedCards.length === 2) {
                    const [firstCard, secondCard] = clickedCards;
                    // Kontrollera om korten matchar
                    if (firstCard.dataset.card === secondCard.dataset.card) {
                        firstCard.classList.add("matched");
                        secondCard.classList.add("matched");
                        matches.push(firstCard, secondCard);
                        clickedCards = [];
                        checkWin();
                    }
                    else {
                        setTimeout(() => {
                            firstCard.classList.remove("flip");
                            secondCard.classList.remove("flip");
                            clickedCards = [];
                        }, 1000);
                    }
                }
            }
        });
    });
}
// Kontrollera om spelaren har vunnit
function checkWin() {
    if (matches.length === memoryCards.length) {
        overlay.classList.add("show");
    }
}
// Starta spelet
function startGame() {
    addClickEventToCards(memoryCards);
}
// När sidan har laddats, starta spelet
document.addEventListener("DOMContentLoaded", startGame);
// Stäng overlay vid klick
(_a = overlay
    .querySelector(".close")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (event) => {
    overlay.classList.remove("show");
});
