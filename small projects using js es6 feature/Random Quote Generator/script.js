const quoteBtn = document.getElementById("new-quote");
const quoteText = document.getElementById("quote");

quoteBtn.addEventListener("click", async () => {
  const res = await fetch("https://api.quotable.io/random");
  const data = await res.json();
  quoteText.innerHTML = `"${data.content}" — ${data.author}`;
});
