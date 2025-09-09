// Select DOM elements
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const errorEl = document.getElementById("error-message");
const newQuoteBtn = document.getElementById("new-quote");
const shareBtn = document.getElementById("share-linkedin");

// API endpoint (DummyJSON)
const API_URL = "https://dummyjson.com/quotes/random";

// Fetch random quote
async function getQuote() {
  try {
    quoteEl.textContent = "Loading...";
    authorEl.textContent = "";
    errorEl.textContent = "";

    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    quoteEl.textContent = `"${data.quote}"`;  
    authorEl.textContent = `- ${data.author}`;
  } catch (err) {
    errorEl.textContent = "Failed to load quote. Try again!";
    console.error("Fetch error:", err);
  }
}

// Share on LinkedIn
function shareOnLinkedIn() {
  const quote = quoteEl.textContent;
  const author = authorEl.textContent;
  const text = encodeURIComponent(`${quote} ${author}`);
  const url = `https://www.linkedin.com/feed/?shareActive=true&text=${text}`;
  window.open(url, "_blank");
}

// Event listeners
newQuoteBtn.addEventListener("click", getQuote);
shareBtn.addEventListener("click", shareOnLinkedIn);

// Load a quote when page opens
window.addEventListener("load", getQuote);
