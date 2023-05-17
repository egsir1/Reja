console.log("FrontEnd JS");

function itemTemplate(item) {
  return `
          <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.item}</span>
          <div>
            <button
              data-id=${item._id}
              class="btn edit-me btn-secondary btn-sm m1-1"
            >
              Edit
            </button>
            <button
              data-id=${item._id}
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

document.addEventListener("click", function (e) {
  //delete
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Are you sure to delete this element?")) {
      axios
        .post("/delete-item", {
          id: e.target.getAttribute("data-id"),
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log(err.message || "Please try again!");
        });
    }
  }

  //Edit

  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "Edit the element",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );

    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log(err.message || "Please try again!");
        });
    }
  }
});

//delete all

document.getElementById("clean-all").addEventListener("click", function () {
  axios
    .post("/delete-all", { delete_all: true })
    .then((response) => {
      alert(response.data.state);
      document.location.reload();
    })
    .catch((err) => {
      console.log(err.message || "Please try again!");
    });
});
