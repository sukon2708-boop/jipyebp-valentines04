const questions = [
  {
    q: "If we had one free day together, what would you want to do most?",
    c: ["Watch a movie", "Go for a walk", "Just be together"],
    correct: 2,
  },
  {
    q: "When do you miss me the most?",
    c: ["Before bed", "When you're tired", "All the time"],
    correct: 2,
  },
  {
    q: "What makes you smile the easiest?",
    c: ["A text message", "The sound of laughter", "Seeing my face"],
    correct: 1,
  },
  {
    q: "If today wasn't a good day, what would you need most?",
    c: ["Encouragement", "A hug", "Just having you by my side"],
    correct: 2,
  },
  {
    q: "What do you want to say this Valentine's Day?",
    c: ["Thank you", "I love you", "Let's stay together for a long time"],
    correct: 2,
  }
];

let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " That’s exactly right!";
  } else {
    answerHint.textContent = " That’s okay, no worries";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>Game Over </h2>
    <p class="subtle">You scored</p>
    <h6>${score} / ${questions.length}Final Score</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 5) return "An amazing match — truly meant for each other";
  if (score >= 3) return "Just the right amount of sweetness, so lovely ";
  return "Love isn’t about the score, it’s about the heart";
}

renderQuestion();
