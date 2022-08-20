import { userList } from "./userOptions.mjs";
import { postRequest, getUser } from "./utils";
export const app = () => {
  const text = getElementById("total");
  const input = getElementById("number-input");
  const submitBtn = getElementById("submit-btn");
  const userSelect = getElementById("user-select");
  const total = getElementById("total");

  const savedName = () => localStorage.getItem("user") || "Both";

  async function getVal() {
    const response = await getUser(savedName());
    total.innerHTML = await response.json();
  }

  getVal();

  userList.forEach(async (name) => {
    const item = document.createElement("option");
    item.val = name;
    item.innerText = name;
    if (name === savedName()) item.selected = "selected";
    userSelect.appendChild(item);
  });

  userSelect.addEventListener("change", async (e) => {
    e.stopPropagation();
    localStorage.setItem("user", e.target.value);
    getVal();
    // await getUser(e.target.value); //get response
  });

  submitBtn.addEventListener("click", async () => {
    let val = Number.parseInt(input.value);
    let currentVal = Number.parseInt(text.innerText);

    if (isNaN(val)) val = 0;
    if (isNaN(currentVal)) currentVal = 0;

    text.innerText = currentVal + val;

    const user = localStorage.getItem("user");

    const res = await postRequest("transaction", { val, user });
    console.log(res);
  });

  function getElementById(id) {
    return document.getElementById(id);
  }
};
