/* ===================== Shared state ===================== */

const EXAM_DURATION_SECONDS = 60 * 60; // 60 minutes
const TOTAL_QUESTIONS = QUESTIONS.length;
const OPTION_KEYS = ["A", "B", "C", "D"];

let practice = {
  index: 0,
  answers: new Array(TOTAL_QUESTIONS).fill(null), // selected letter
  checked: new Array(TOTAL_QUESTIONS).fill(false),
  flagged: new Array(TOTAL_QUESTIONS).fill(false) // skipped for later review
};

let exam = {
  index: 0,
  answers: new Array(TOTAL_QUESTIONS).fill(null),
  flagged: new Array(TOTAL_QUESTIONS).fill(false), // skipped for later review
  remaining: EXAM_DURATION_SECONDS,
  timerId: null,
  submitted: false
};

/* ===================== Utility ===================== */

function $(id) { return document.getElementById(id); }

function showScreen(id) {
  ["startScreen", "practiceScreen", "examScreen", "resultsScreen"].forEach(s => {
    $(s).classList.toggle("hidden", s !== id);
  });
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/* ===================== Home / navigation ===================== */

$("startPracticeBtn").addEventListener("click", () => {
  practice = {
    index: 0,
    answers: new Array(TOTAL_QUESTIONS).fill(null),
    checked: new Array(TOTAL_QUESTIONS).fill(false),
    flagged: new Array(TOTAL_QUESTIONS).fill(false)
  };
  showScreen("practiceScreen");
  $("homeBtn").classList.remove("hidden");
  $("examTimerDisplay").classList.add("hidden");
  renderPracticeQuestion();
});

$("startExamBtn").addEventListener("click", () => {
  startExam();
});

$("homeBtn").addEventListener("click", () => {
  if (exam.timerId) {
    clearInterval(exam.timerId);
    exam.timerId = null;
  }
  $("homeBtn").classList.add("hidden");
  $("examTimerDisplay").classList.add("hidden");
  showScreen("startScreen");
});

$("backHomeBtn").addEventListener("click", () => {
  $("homeBtn").classList.add("hidden");
  $("examTimerDisplay").classList.add("hidden");
  showScreen("startScreen");
});

/* ===================== PRACTICE MODE ===================== */

function renderPracticeQuestion() {
  const i = practice.index;
  const item = QUESTIONS[i];

  $("pQNum").textContent = i + 1;
  $("pQTotal").textContent = TOTAL_QUESTIONS;
  $("pProgressFill").style.width = `${((i + 1) / TOTAL_QUESTIONS) * 100}%`;
  $("pQuestionText").textContent = item.q;

  const optsWrap = $("pOptions");
  optsWrap.innerHTML = "";

  const alreadyChecked = practice.checked[i];
  const selectedLetter = practice.answers[i];

  OPTION_KEYS.forEach(letter => {
    const div = document.createElement("div");
    div.className = "option";
    if (selectedLetter === letter) div.classList.add("selected");

    if (alreadyChecked) {
      div.classList.add("disabled");
      if (letter === item.correct) div.classList.add("correct");
      else if (letter === selectedLetter) div.classList.add("incorrect");
    }

    div.innerHTML = `<span class="option-letter">${letter}</span><span>${item.options[letter]}</span>`;

    if (!alreadyChecked) {
      div.addEventListener("click", () => {
        practice.answers[i] = letter;
        practice.flagged[i] = false;
        renderPracticeQuestion();
      });
    }
    optsWrap.appendChild(div);
  });

  $("pCheckBtn").classList.toggle("hidden", alreadyChecked);
  $("pCheckBtn").disabled = !selectedLetter;
  $("pSkipBtn").classList.toggle("hidden", alreadyChecked);
  $("pNextBtn").classList.toggle("hidden", !alreadyChecked);
  $("pNextBtn").textContent = (i === TOTAL_QUESTIONS - 1) ? "Finish" : "Next Question";
  $("pPrevBtn").disabled = (i === 0);

  const feedback = $("pFeedback");
  if (alreadyChecked) {
    renderPracticeFeedback(item, selectedLetter);
    feedback.classList.remove("hidden");
  } else {
    feedback.classList.add("hidden");
  }

  renderPracticeNavGrid();
}

function renderPracticeNavGrid() {
  const grid = $("practiceNavGrid");
  grid.innerHTML = "";
  for (let i = 0; i < TOTAL_QUESTIONS; i++) {
    const cell = document.createElement("div");
    cell.className = "nav-cell";
    if (practice.checked[i]) {
      cell.classList.add(practice.answers[i] === QUESTIONS[i].correct ? "correct" : "incorrect");
    } else if (practice.flagged[i]) {
      cell.classList.add("flagged");
    }
    if (i === practice.index) cell.classList.add("current");
    cell.textContent = i + 1;
    cell.addEventListener("click", () => {
      practice.index = i;
      renderPracticeQuestion();
    });
    grid.appendChild(cell);
  }
}

function renderPracticeFeedback(item, selectedLetter) {
  const feedback = $("pFeedback");
  const isCorrect = selectedLetter === item.correct;

  feedback.className = `feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
  feedback.innerHTML = `
    <div class="feedback-verdict ${isCorrect ? "correct" : "incorrect"}">
      ${isCorrect ? "✅ Correct" : "❌ Incorrect"} — Correct answer: ${item.correct}. ${item.options[item.correct]}
    </div>
    <div class="feedback-section">
      <h4>Explanation</h4>
      <p>${item.explanation}</p>
    </div>
    <div class="feedback-section feedback-tip">
      <h4>💡 Exam Tip</h4>
      <p>${item.tip}</p>
    </div>
  `;
}

$("pCheckBtn").addEventListener("click", () => {
  const i = practice.index;
  if (!practice.answers[i]) return;
  practice.checked[i] = true;
  practice.flagged[i] = false;
  renderPracticeQuestion();
});

$("pSkipBtn").addEventListener("click", () => {
  practice.flagged[practice.index] = true;
  if (practice.index < TOTAL_QUESTIONS - 1) practice.index++;
  renderPracticeQuestion();
});

$("pNextBtn").addEventListener("click", () => {
  if (practice.index === TOTAL_QUESTIONS - 1) {
    $("homeBtn").classList.add("hidden");
    showScreen("startScreen");
    return;
  }
  practice.index++;
  renderPracticeQuestion();
});

$("pPrevBtn").addEventListener("click", () => {
  if (practice.index === 0) return;
  practice.index--;
  renderPracticeQuestion();
});

/* ===================== EXAM MODE ===================== */

function startExam() {
  exam = {
    index: 0,
    answers: new Array(TOTAL_QUESTIONS).fill(null),
    flagged: new Array(TOTAL_QUESTIONS).fill(false),
    remaining: EXAM_DURATION_SECONDS,
    timerId: null,
    submitted: false
  };
  showScreen("examScreen");
  $("homeBtn").classList.remove("hidden");
  $("examTimerDisplay").classList.remove("hidden");
  updateTimerDisplay();
  renderExamQuestion();
  renderNavGrid();

  exam.timerId = setInterval(() => {
    exam.remaining--;
    updateTimerDisplay();
    if (exam.remaining <= 0) {
      clearInterval(exam.timerId);
      exam.timerId = null;
      submitExam(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = $("examTimerDisplay");
  el.textContent = formatTime(Math.max(exam.remaining, 0));
  el.classList.toggle("timer-warn", exam.remaining <= 300); // last 5 minutes
}

function renderExamQuestion() {
  const i = exam.index;
  const item = QUESTIONS[i];

  $("eQNum").textContent = i + 1;
  $("eQTotal").textContent = TOTAL_QUESTIONS;
  $("eProgressFill").style.width = `${((i + 1) / TOTAL_QUESTIONS) * 100}%`;
  $("eQuestionText").textContent = item.q;

  const optsWrap = $("eOptions");
  optsWrap.innerHTML = "";

  const selectedLetter = exam.answers[i];

  OPTION_KEYS.forEach(letter => {
    const div = document.createElement("div");
    div.className = "option";
    if (selectedLetter === letter) div.classList.add("selected");
    div.innerHTML = `<span class="option-letter">${letter}</span><span>${item.options[letter]}</span>`;
    div.addEventListener("click", () => {
      exam.answers[i] = letter;
      exam.flagged[i] = false;
      renderExamQuestion();
      renderNavGrid();
    });
    optsWrap.appendChild(div);
  });

  $("ePrevBtn").disabled = (i === 0);

  const isLast = i === TOTAL_QUESTIONS - 1;
  $("eNextBtn").classList.toggle("hidden", isLast);
  $("eSubmitBtn").classList.toggle("hidden", !isLast);
}

$("eNextBtn").addEventListener("click", () => {
  if (exam.index < TOTAL_QUESTIONS - 1) {
    exam.index++;
    renderExamQuestion();
    renderNavGrid();
  }
});

$("ePrevBtn").addEventListener("click", () => {
  if (exam.index > 0) {
    exam.index--;
    renderExamQuestion();
    renderNavGrid();
  }
});

$("eSkipBtn").addEventListener("click", () => {
  exam.flagged[exam.index] = true;
  if (exam.index < TOTAL_QUESTIONS - 1) exam.index++;
  renderExamQuestion();
  renderNavGrid();
});

function renderNavGrid() {
  const grid = $("examNavGrid");
  grid.innerHTML = "";
  for (let i = 0; i < TOTAL_QUESTIONS; i++) {
    const cell = document.createElement("div");
    cell.className = "nav-cell";
    if (exam.answers[i]) cell.classList.add("answered");
    else if (exam.flagged[i]) cell.classList.add("flagged");
    if (i === exam.index) cell.classList.add("current");
    cell.textContent = i + 1;
    cell.addEventListener("click", () => {
      exam.index = i;
      renderExamQuestion();
      renderNavGrid();
    });
    grid.appendChild(cell);
  }
}

$("eSubmitBtn").addEventListener("click", () => confirmSubmit());
$("eSubmitBtnSide").addEventListener("click", () => confirmSubmit());

function confirmSubmit() {
  const unanswered = exam.answers.filter(a => !a).length;
  if (unanswered > 0) {
    const proceed = confirm(`You have ${unanswered} unanswered question(s). Submit anyway?`);
    if (!proceed) return;
  }
  submitExam(false);
}

function submitExam(timeExpired) {
  if (exam.submitted) return;
  exam.submitted = true;
  if (exam.timerId) {
    clearInterval(exam.timerId);
    exam.timerId = null;
  }
  $("homeBtn").classList.add("hidden");
  $("examTimerDisplay").classList.add("hidden");
  renderResults(timeExpired);
}

/* ===================== RESULTS ===================== */

function renderResults(timeExpired) {
  let correctCount = 0;
  QUESTIONS.forEach((item, i) => {
    if (exam.answers[i] === item.correct) correctCount++;
  });
  const pct = Math.round((correctCount / TOTAL_QUESTIONS) * 100);

  showScreen("resultsScreen");
  $("reviewList").classList.add("hidden");
  $("reviewList").innerHTML = "";
  $("reviewBtn").textContent = "Review Answers";

  $("scorePercent").textContent = `${pct}%`;

  const timeNote = timeExpired ? " (time expired — auto-submitted)" : "";
  $("scoreDetail").textContent = `${correctCount} of ${TOTAL_QUESTIONS} correct${timeNote}`;
}

$("reviewBtn").addEventListener("click", () => {
  const list = $("reviewList");
  const isHidden = list.classList.contains("hidden");
  if (isHidden) {
    buildReview();
    list.classList.remove("hidden");
    $("reviewBtn").textContent = "Hide Review";
  } else {
    list.classList.add("hidden");
    $("reviewBtn").textContent = "Review Answers";
  }
});

function buildReview() {
  const list = $("reviewList");
  list.innerHTML = "";
  QUESTIONS.forEach((item, i) => {
    const userAnswer = exam.answers[i];
    const isCorrect = userAnswer === item.correct;
    const isUnanswered = !userAnswer;

    const div = document.createElement("div");
    div.className = "review-item";

    const badgeClass = isUnanswered ? "unanswered" : (isCorrect ? "correct" : "incorrect");
    const badgeText = isUnanswered ? "Unanswered" : (isCorrect ? "Correct" : "Incorrect");

    let optionsHtml = "";
    OPTION_KEYS.forEach(letter => {
      let cls = "option disabled";
      if (letter === item.correct) cls += " correct";
      else if (letter === userAnswer) cls += " incorrect";
      optionsHtml += `<div class="${cls}"><span class="option-letter">${letter}</span><span>${item.options[letter]}</span></div>`;
    });

    div.innerHTML = `
      <div class="review-item-header">
        <span>Question ${i + 1}</span>
        <span class="review-badge ${badgeClass}">${badgeText}</span>
      </div>
      <p class="question-text">${item.q}</p>
      <div class="options">${optionsHtml}</div>
      <div class="feedback ${isCorrect ? "is-correct" : "is-incorrect"}" style="margin-top:14px;">
        <div class="feedback-section">
          <h4>Explanation</h4>
          <p>${item.explanation}</p>
        </div>
        <div class="feedback-section feedback-tip">
          <h4>💡 Exam Tip</h4>
          <p>${item.tip}</p>
        </div>
      </div>
    `;
    list.appendChild(div);
  });
}

$("retakeBtn").addEventListener("click", () => {
  startExam();
});
