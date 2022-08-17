export const app = () => {
  const text = getElementById("total");
  const input = getElementById("number-input");
  const submitBtn = getElementById("submit-btn");

  async function getVal() {
    console.log(process.env.API_URL);
    const response = await fetch(process.env.API_URL);
    const parsed = await response.json();
    console.log(parsed);
  }

  getVal();

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
};
