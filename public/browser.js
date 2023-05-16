console.log("FrontEnd JS");

function itemTemplate(item) {
  return `
          <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.item}</span>
          <div>
            <button
              data-id="${item.id}"
              class="btn edit-me btn-secondary btn-sm m1-1"
            >
              Edit
            </button>
            <button
              data-id="${item.id}"
              class="btn delete-me btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();
  axios
    .post("/create-item", { item: createField.value })
    .then((res) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(res.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Err : try again!");
    });
});
