const randomNum = Math.floor(Math.random() * 10) + 1;
const input = document.getElementById("guess");
const msg = document.getElementById("message");

document.getElementById("check").addEventListener("click", () => {
  const guess = Number(input.value);
  msg.textContent = guess === randomNum ? `🎉 Correct!` : `❌ Try again!`;
});
