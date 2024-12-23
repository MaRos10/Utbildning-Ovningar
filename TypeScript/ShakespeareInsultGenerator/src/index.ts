let insults: { insult: string; play: string }[] = [
  {
    insult:
      "Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner?",
    play: "Macbeth",
  },
  {
    insult: "Never hung poison on a fouler toad",
    play: "Richard III",
  },
  {
    insult: "He thinks too much: such men are dangerous",
    play: "Julius Ceasar",
  },
  {
    insult:
      "Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs",
    play: "The Merchant of Venice",
  },
  {
    insult: "Give me your hand...I can tell your fortune. You are a fool",
    play: "The Two Noble Kinsmen",
  },
  {
    insult:
      "He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish!",
    play: "The Tempest",
  },
  {
    insult:
      "It is a tale Told by an idiot, full of sound and fury, Signifying nothing",
    play: "Macbeth",
  },
  {
    insult:
      "Alas, poor heart, that kiss is comfortless As frozen water to a starved snake",
    play: "Titus Andronicus",
  },

  {
    insult:
      "He hath eaten me out of house and home; he hath put all substance into that fat belly of his",
    play: "Henry IV, Part 2",
  },
  {
    insult:
      "Out, you green-sickness carrion! Out, you baggage! You tallow-face!",
    play: "Romeo and Juliet",
  },
];

// Hämtar HTML-element
const insult = document.getElementById("insult") as HTMLElement;
const play = document.getElementById("play") as HTMLElement;

// Funktion som slumpmässigt väljer en förolämpning
function getRandomInsult(): { insult: string; play: string } {
  const randomInsult = insults[Math.floor(Math.random() * insults.length - 1)];
  return randomInsult;
}

// Funktion som visar den slumpmässiga förolämpningen
// LevelUp - ta bort varje slumpad förolämpning från arrayen och återställ arrayen när alla är visade

let copiedInsults = [...insults];

function displayRandomInsult(): void {
  if (insults.length > 0) {
    const randomIndex = Math.floor(Math.random() * insults.length); // Väljer index från arrayen
    const insultObj = insults[randomIndex]; // Hämta insult från insults baserat på indexet

    insult.textContent = insultObj.insult;
    play.textContent = insultObj.play;

    insults.splice(randomIndex, 1);
  }
  // Om alla insults visats, återställ insults-arrayen
  if (insults.length === 0) {
    insults = [...copiedInsults];
    console.log(
      "Alla förolämpningar visades, arrayen har återställts: ",
      insults
    );
  }
}

// Lyssna på knapptryck för att slumpa en ny förolämpning
const button = document.getElementById("insultButton") as HTMLElement;
button.addEventListener("click", displayRandomInsult);

/* Visar den slumpmässiga förolämpningen på sidan utan LevelUp

function displayRandomInsult(): void {
  const insultObj = getRandomInsult();

  insult.textContent = insultObj.insult;
  play.textContent = insultObj.play;
} */
