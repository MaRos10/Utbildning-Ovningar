const memoryCards = document.querySelectorAll(
  ".memory-card"
) as NodeListOf<HTMLElement>;
const overlay = document.querySelector(".overlay") as HTMLElement;

let clickedCards: HTMLElement[] = [];
let matches: HTMLElement[] = [];

// Lägger till klickhändelse på korten
function addClickEventToCards(cards: NodeListOf<HTMLElement>): void {
  cards.forEach((card: HTMLElement) => {
    card.addEventListener("click", (e: MouseEvent) => {
      const clickedCard = e.currentTarget as HTMLElement;

      // Kontrollera om kortet redan är vänt eller matchat
      if (
        !clickedCard.classList.contains("flip") &&
        !clickedCard.classList.contains("matched")
      ) {
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
          } else {
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
function checkWin(): void {
  if (matches.length === memoryCards.length) {
    overlay.classList.add("show");
  }
}

// Starta spelet
function startGame(): void {
  addClickEventToCards(memoryCards);
}

// När sidan har laddats, starta spelet
document.addEventListener("DOMContentLoaded", startGame);

// Stäng overlay vid klick
overlay
  .querySelector(".close")
  ?.addEventListener("click", (event: MouseEvent) => {
    overlay.classList.remove("show");
  });
