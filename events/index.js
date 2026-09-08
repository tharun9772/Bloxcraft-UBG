const API = "https://bloxcraftapires.bloxcraft-ubg.workers.dev";
const FALLBACK = "https://cdn.jsdelivr.net/gh/tharun9772/One-Link@main/events.json";

const eventsDiv = document.getElementById("events");
const modal = document.getElementById("modal");
const editor = document.getElementById("editor");

let EVENTS = [];

function openAdmin() {
  modal.style.display = "flex";
}

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

async function loadEvents() {
  let data = null;

  try {
    const res = await fetch(API + "/events");
    if (res.ok) {
      data = await res.json();
    }
  } catch {}

  if (!data) {
    try {
      const res = await fetch(FALLBACK);
      if (res.ok) {
        data = await res.json();
      }
    } catch {}
  }

  if (
    !data ||
    data === "There Are No Events!" ||
    (Array.isArray(data) && data.length === 0)
  ) {
    eventsDiv.innerHTML = `
      <div class="no-events">
        <h1>There Are No Events! Checkback Later.</h1>
        Events powered by Cloudflare Workers
      </div>
    `;
    return;
  }

  EVENTS = data;
  renderEvents();
}

function escapeHtml(str) {
  return String(str ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

function renderEvents() {
  eventsDiv.innerHTML = "";

  EVENTS.forEach((event, index) => {
    const card = document.createElement("div");
    card.className = "event";

    card.innerHTML = `
      <img class="banner" src="${escapeHtml(event.img)}">
      <div class="overlay"></div>
      <div class="content">
        <h2>${escapeHtml(event.name)}</h2>
        <div class="tag">${escapeHtml(event.type)}</div>
      </div>
    `;

    card.onclick = () => {
      if (event.type === "URL") {
        window.open(event.url, "_blank", "noopener,noreferrer");
      }

      if (event.type === "TOPURL") {
        top.location.href = event.url;
      }

      if (event.type === "URLPOPUP") {
        window.open(event.url, "_blank");
      }
    };

    eventsDiv.appendChild(card);
  });
}

async function login() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const loginBox = document.getElementById("loginBox");
  const adminBox = document.getElementById("adminBox");

  const res = await fetch(API + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value
    })
  });

  const data = await res.json();

  if (!data.success) {
    alert("Invalid Login");
    return;
  }

  localStorage.setItem("token", data.token);

  if (loginBox) loginBox.hidden = true;
  if (adminBox) adminBox.hidden = false;

  renderEditor();
}

function renderEditor() {
  editor.innerHTML = "";

  EVENTS.forEach((event, index) => {
    const div = document.createElement("div");
    div.className = "editor-item";

    const nameInput = document.createElement("input");
    nameInput.placeholder = "Name";
    nameInput.value = event.name || "";
    nameInput.onchange = (e) => { EVENTS[index].name = e.target.value; };

    const imgInput = document.createElement("input");
    imgInput.placeholder = "Image";
    imgInput.value = event.img || "";
    imgInput.onchange = (e) => { EVENTS[index].img = e.target.value; };

    const typeSelect = document.createElement("select");
    ["URL", "TOPURL", "URLPOPUP"].forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt;
      option.textContent = opt;
      option.selected = event.type === opt;
      typeSelect.appendChild(option);
    });
    typeSelect.onchange = (e) => { EVENTS[index].type = e.target.value; };

    const urlInput = document.createElement("input");
    urlInput.placeholder = "URL";
    urlInput.value = event.url || "";
    urlInput.onchange = (e) => { EVENTS[index].url = e.target.value; };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => { EVENTS.splice(index, 1); renderEditor(); };

    div.append(nameInput, imgInput, typeSelect, urlInput, deleteBtn);
    editor.appendChild(div);
  });
}

function addEvent() {
  EVENTS.push({
    name: "New Event",
    img: "",
    type: "URL",
    url: ""
  });

  renderEditor();
}

async function saveEvents() {
  const res = await fetch(API + "/admin/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    },
    body: JSON.stringify(EVENTS)
  });

  const data = await res.json();

  if (!data.success) {
    alert("Failed");
    return;
  }

  alert("Saved");
  modal.style.display = "none";
  renderEvents();
}

loadEvents();
