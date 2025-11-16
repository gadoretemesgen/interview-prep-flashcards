// TODO: Add Firebase authentication in the next phase of the project

console.log("Flashcards MVP Loaded - Firebase coming later");

// Login Section
const authSection = document.getElementById("auth-section");
const appSection = document.getElementById("app");
const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");
const logoutBtn = document.getElementById("logout");
const authMsg = document.getElementById("auth-message");

// Simulated login for MVP demo
function fakeLogin() {
  authMsg.textContent = "Logged in (demo mode only)";
  authSection.style.display = "none";
  appSection.style.display = "block";
  logoutBtn.style.display = "inline-block";
  renderDemoSet();
}

function fakeLogout() {
  authMsg.textContent = "";
  authSection.style.display = "block";
  appSection.style.display = "none";
  logoutBtn.style.display = "none";
}

loginBtn.addEventListener("click", fakeLogin);
signupBtn.addEventListener("click", fakeLogin);
logoutBtn.addEventListener("click", fakeLogout);

// Demo flashcard set
const setsDiv = document.getElementById("sets");
const quizSection = document.getElementById("quiz-section");
const quizSetName = document.getElementById("quiz-set-name");
const cardText = document.getElementById("card-text");
const flipBtn = document.getElementById("flip-card");
const gotItBtn = document.getElementById("got-it");
const missedItBtn = document.getElementById("missed-it");
const quizProgress = document.getElementById("quiz-progress");

const demoSet = {
  name: "Sample Behavioral Questions",
  cards: [
    { q: "Tell me about yourself.", a: "Use past → present → future." },
    { q: "Describe a time you handled conflict.", a: "Use STAR method." }
  ]
};

let showingAnswer = false;
let currentIndex = 0;
let gotItCount = 0;
let missedCount = 0;

function renderDemoSet() {
  setsDiv.innerHTML = "";
  const div = document.createElement("div");
  div.className = "set-card";
  div.innerHTML = `
    <h3>${demoSet.name}</h3>
    <button id="start-demo">Start Quiz</button>
  `;
  setsDiv.appendChild(div);
  div.querySelector("#start-demo").addEventListener("click", startQuiz);
}

function startQuiz() {
  quizSection.style.display = "block";
  quizSetName.textContent = demoSet.name;
  currentIndex = 0;
  gotItCount = 0;
  missedCount = 0;
  showingAnswer = false;
  showCurrentCard();
}

function showCurrentCard() {
  const card = demoSet.cards[currentIndex];
  cardText.textContent = showingAnswer ? card.a : card.q;
  quizProgress.textContent = `Card ${currentIndex + 1} of ${demoSet.cards.length} | ✔️ ${gotItCount} | ❌ ${missedCount}`;
}

flipBtn.addEventListener("click", () => {
  showingAnswer = !showingAnswer;
  showCurrentCard();
});

gotItBtn.addEventListener("click", () => {
  gotItCount++;
  nextCard();
});

missedItBtn.addEventListener("click", () => {
  missedCount++;
  nextCard();
});

function nextCard() {
  showingAnswer = false;
  currentIndex++;
  if (currentIndex >= demoSet.cards.length) {
    quizProgress.textContent = `Finished! ✔️ ${gotItCount} | ❌ ${missedCount}`;
    return;
  }
  showCurrentCard();
}
