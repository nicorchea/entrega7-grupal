"use strict";

const URL = "https://6362dab637f2167d6f6e580b.mockapi.io/users/";

const BTN_SEARCH = document.getElementById("btnGet1");
const BTN_POST = document.getElementById("btnPost");
const BTN_PUT = document.getElementById("btnPut");
const BTN_DELETE = document.getElementById("btnDelete");

const CONTAINER = document.getElementById("results");

const SEARCH_ID_FILTER = document.getElementById("inputGet1Id").value - 1;

const POST_NAME = document.getElementById("inputPostNombre").value;
const POST_LASTNAME = document.getElementById("inputPostApellido").value;

const DELETE_INPUT = document.getElementById("inputDelete").value;

let data;

async function fetchApi(method, endpoint = "") {
  let info = await fetch(URL + endpoint);
  data = await info.json();

  method: method;
  return data;
}

BTN_SEARCH.onclick = async () => {
  const SEARCH_ID = document.getElementById("inputGet1Id").value;

  await fetchApi("GET");

  if (SEARCH_ID == "") {
    data.forEach((post) => {
      const li = document.createElement("li");
      li.innerHTML = `ID: ${post.id}<br>NAME: ${post.name}<br>LASTNAME: ${post.lastname}<hr>`;
      CONTAINER.appendChild(li);
      btnEnable();
    });
  } else if (data.includes(data[SEARCH_ID_FILTER])) {
    const li = document.createElement("li");

    li.innerHTML = `ID: ${data[SEARCH_ID_FILTER].id}<br>NAME: ${data[SEARCH_ID_FILTER].name}<br>LASTNAME: ${data[SEARCH_ID_FILTER].lastname}<hr>`;

    // li.setAttribute("id", SEARCH_ID);
    CONTAINER.appendChild(li);
    btnEnable();
  } else {
    Swal.fire({
      title: "ha ocurrido un error",
      text: "No se encontro el ID",
      icon: "error",
      backdrop: true,
      timer: 2000,
      allowOutsideClick: true,
      allowEscapeKey: true,
      allowEnterKey: true,
      showConfirmButton: false,
    });
  }
  {
  }
};

BTN_POST.onclick = async () => {
  // const user = {
  //   name: POST_NAME,
  //   lastname: POST_LASTNAME,
  // };

  await fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      name: "asdasd",
      lastname: "qweqwe",
    }),
  });

  console.log(POST_NAME);
  console.log(POST_LASTNAME);
};

BTN_DELETE.onclick = async () => {
  await fetch(URL + DELETE_INPUT, {
    method: "DELETE",
  });
};

function btnEnable() {
  BTN_POST.removeAttribute("disabled", "");
  BTN_PUT.removeAttribute("disabled", "");
  BTN_DELETE.removeAttribute("disabled", "");
}

function btnDisable() {
  BTN_POST.setAttribute("disabled", "");
  BTN_PUT.setAttribute("disabled", "");
  BTN_DELETE.setAttribute("disabled", "");
}
btnDisable();

// ! Bugs
// ! Se cargan varios elementos con el mismo id
// ! Se cargan varios elementos
