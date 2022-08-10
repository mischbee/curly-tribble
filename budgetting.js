const text = getElementById("total");
const input = getElementById("number-input");
const submitBtn = getElementById("submit-btn");

submitBtn.addEventListener("click", () => {
  let val = Number.parseInt(input.value);
  let currentVal = Number.parseInt(text.innerText);

  if (isNaN(val)) val = 0;
  if (isNaN(currentVal)) currentVal = 0;

  text.innerText = currentVal + val;
});

function getElementById(id) {
  return document.getElementById(id);
}
