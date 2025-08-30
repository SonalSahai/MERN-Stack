function calculateGrade(score) {
  if (score >= 90 && score <= 100) return { grade: "A", color: "#4CAF50", emoji: "🌟" };
  if (score >= 80) return { grade: "B", color: "#2196F3", emoji: "👍" };
  if (score >= 70) return { grade: "C", color: "#FF9800", emoji: "🙂" };
  if (score >= 60) return { grade: "D", color: "#FFC107", emoji: "😅" };
  if (score >= 0) return { grade: "F", color: "#F44336", emoji: "❌" };
  return null; // invalid
}

function showGrade() {
  let score = document.getElementById("score").value;
  score = Number(score);

  let gradeData = calculateGrade(score);
  let resultEl = document.getElementById("result");

  if (gradeData) {
    resultEl.textContent = `${gradeData.emoji} Your Grade is: ${gradeData.grade}`;
    resultEl.style.background = gradeData.color;
    resultEl.style.color = "white";
  } else {
    resultEl.textContent = "⚠️ Please enter a valid score between 0–100";
    resultEl.style.background = "transparent";
    resultEl.style.color = "red";
  }
}
