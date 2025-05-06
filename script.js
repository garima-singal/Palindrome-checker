const checkButton = document.getElementById("check-button");
const result = document.getElementById("result-p");
const inputField = document.getElementById("string");

function checkPalindrome() {
  const inputValue = inputField.value;
  const cleaned = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");

  const resultVal =
    cleaned && cleaned === reversed
      ? `"${inputValue}" is a palindrome`
      : `"${inputValue}" is not a palindrome`;

  result.innerText = resultVal;
}

checkButton.addEventListener("click", checkPalindrome);

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkPalindrome();
  }
});
