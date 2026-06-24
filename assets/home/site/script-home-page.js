const iframe = document.getElementById("contentFrame");
const htmlContainer = document.getElementById("htmlContainer");
const home = document.getElementById("home");
const extraOverlay = document.getElementById("extraOverlay");
const extraNavGroup = document.getElementById("extraNavGroup");

const predefinedExtras = [
  {name:"Tools",link:"/tools/",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M246.9 82.3L271 67.8C292.6 54.8 317.3 48 342.5 48C379.3 48 414.7 62.6 440.7 88.7L504.6 152.6C519.6 167.6 528 188 528 209.2L528 240.1L547.7 259.8L547.7 259.8C563.3 244.2 588.6 244.2 604.3 259.8C620 275.4 619.9 300.7 604.3 316.4L540.3 380.4C524.7 396 499.4 396 483.7 380.4C468 364.8 468.1 339.5 483.7 323.8L464 304L433.1 304C411.9 304 391.5 295.6 376.5 280.6L327.4 231.5C312.4 216.5 304 196.1 304 174.9L304 162.2C304 151 298.1 140.5 288.5 134.8L246.9 109.8C236.5 103.6 236.5 88.6 246.9 82.4zM50.7 466.7L272.8 244.6L363.3 335.1L141.2 557.2C116.2 582.2 75.7 582.2 50.7 557.2C25.7 532.2 25.7 491.7 50.7 466.7z"/></svg>'},
  {name:"Support",link:"/iframe-sites/bloxcraft-ubg-support/",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>'},
  {name:"Updates",link:"/updates/",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24"> <path d="M128 0c13.3 0 24 10.7 24 24l0 40 144 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 48 0c26.5 0 48 21.5 48 48l0 48L32 160l0-48c0-26.5 21.5-48 48-48l48 0 0-40c0-13.3 10.7-24 24-24zM416 192l0 224c0 26.5-21.5 48-48 48L80 464c-26.5 0-48-21.5-48-48L32 192l384 0zM312 248c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zM88 248c-13.3 0-24 10.7-24 24s10.7 24 24 24l160 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 248zM248 344c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0zM88 344c-13.3 0-24 10.7-24 24s10.7 24 24 24l96 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 344z"/> </svg>'},
  {name:"Secret Code Menu",link:"/assets/secret-code-popup.html",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M256 160L256 224L384 224L384 160C384 124.7 355.3 96 320 96C284.7 96 256 124.7 256 160zM192 224L192 160C192 89.3 249.3 32 320 32C390.7 32 448 89.3 448 160L448 224C483.3 224 512 252.7 512 288L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 288C128 252.7 156.7 224 192 224z"/></svg>'},
  {name:"Comments & Annoucements (Padlet)",link:"/assets/padlet.html",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M297.9 64L298 64C305.6 64.1 312.4 68.7 315.5 75.8L447.5 384.3L447.8 384.2L448 384.6L445.2 394.6L402.3 552.6C398.6 568.8 382.6 578.9 366.5 575.2L298.1 559.6L229.6 575.2C213.5 578.9 197.5 568.8 193.8 552.6L150.9 394.6L148.2 384.6L148.3 384.2L280.4 75.8C283.4 68.8 290.3 64.2 297.9 64zM160.1 386.1L291.1 425.2L298 547.7L305.9 426.2L436.5 386.9L436.7 386.8L305.7 411.9L297.1 91.7L291.9 411.9L160.1 386.1zM426 286.6L520.4 245.6L594.2 245.6L437.2 493.2L468.8 384.2L426 286.6zM597.5 245.4L638.9 321.6C642.9 329.1 635 337.5 627.3 333.8L579.7 311.1L597.5 245.4zM127.3 382.5L158.7 494L1.6 218.5C-4.3 208.1 7.1 196.5 17.5 202.3L169.3 286.5L127.2 382.5z"/></svg>'},  
  {name:"VMs",link:"/vms/",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M512 160L512 416L128 416L128 160L512 160zM128 96C92.7 96 64 124.7 64 160L64 416C64 451.3 92.7 480 128 480L272 480L256 528L184 528C170.7 528 160 538.7 160 552C160 565.3 170.7 576 184 576L456 576C469.3 576 480 565.3 480 552C480 538.7 469.3 528 456 528L384 528L368 480L512 480C547.3 480 576 451.3 576 416L576 160C576 124.7 547.3 96 512 96L128 96z"/></svg>'},  
  {name:"Events",link:"/events/",svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M295.4 37L310.2 73.8L347 88.6C350 89.8 352 92.8 352 96C352 99.2 350 102.2 347 103.4L310.2 118.2L295.4 155C294.2 158 291.2 160 288 160C284.8 160 281.8 158 280.6 155L265.8 118.2L229 103.4C226 102.2 224 99.2 224 96C224 92.8 226 89.8 229 88.6L265.8 73.8L280.6 37C281.8 34 284.8 32 288 32C291.2 32 294.2 34 295.4 37zM142.7 105.7L164.2 155.8L214.3 177.3C220.2 179.8 224 185.6 224 192C224 198.4 220.2 204.2 214.3 206.7L164.2 228.2L142.7 278.3C140.2 284.2 134.4 288 128 288C121.6 288 115.8 284.2 113.3 278.3L91.8 228.2L41.7 206.7C35.8 204.2 32 198.4 32 192C32 185.6 35.8 179.8 41.7 177.3L91.8 155.8L113.3 105.7C115.8 99.8 121.6 96 128 96C134.4 96 140.2 99.8 142.7 105.7zM496 368C502.4 368 508.2 371.8 510.7 377.7L532.2 427.8L582.3 449.3C588.2 451.8 592 457.6 592 464C592 470.4 588.2 476.2 582.3 478.7L532.2 500.2L510.7 550.3C508.2 556.2 502.4 560 496 560C489.6 560 483.8 556.2 481.3 550.3L459.8 500.2L409.7 478.7C403.8 476.2 400 470.4 400 464C400 457.6 403.8 451.8 409.7 449.3L459.8 427.8L481.3 377.7C483.8 371.8 489.6 368 496 368zM492 64C503 64 513.6 68.4 521.5 76.2L563.8 118.5C571.6 126.4 576 137 576 148C576 159 571.6 169.6 563.8 177.5L475.6 265.7L374.3 164.4L462.5 76.2C470.4 68.4 481 64 492 64zM76.2 462.5L340.4 198.3L441.7 299.6L177.5 563.8C169.6 571.6 159 576 148 576C137 576 126.4 571.6 118.5 563.8L76.2 521.5C68.4 513.6 64 503 64 492C64 481 68.4 470.4 76.2 462.5z"/></svg>'},  
];

let extraNavs = JSON.parse(localStorage.getItem("extraNavs") || "[]");

function clearContent(){
  iframe.style.display = "none";
  iframe.src = "";
  htmlContainer.style.display = "none";
  htmlContainer.innerHTML = "";
}

function showHome(){
  clearContent();
  home.style.display = "flex";
}

async function loadPage(url){
  home.style.display = "none";
  clearContent();
  iframe.src = url;
  iframe.style.display = "block";
}

function toggleExtraOverlay(){
  extraOverlay.style.display = extraOverlay.style.display === "flex" ? "none" : "flex";
}

function renderExtraNavGroup(){
  extraNavGroup.innerHTML = "";
  extraNavs.forEach(e => {
    const btn = document.createElement("button");
    btn.className = "nav-btn";
    btn.innerHTML = e.svg;
    btn.onclick = () => loadPage(e.link);
    extraNavGroup.appendChild(btn);
  });
}

function renderExtraOverlay(){
  const container = document.getElementById("extraList");
  container.innerHTML = "";

  const sectionSettingsTitle = document.createElement("div");
  sectionSettingsTitle.style = "font-weight: bold; font-size: 16px; color: #a1a1aa;";
  sectionSettingsTitle.textContent = "Default Settings";
  container.appendChild(sectionSettingsTitle);

  const wispWrapper = document.createElement("div");
  wispWrapper.style = "margin-top: 15px; margin-bottom: 15px; display: flex; flex-direction: column; gap: 5px;";
  wispWrapper.innerHTML = `<label style="font-size:13px; color:#e4e4e7;">Wisp Server URL:</label>`;
  
  const wispRow = document.createElement("div");
  wispRow.style = "display: flex; gap: 8px;";
  
  const wispInput = document.createElement("input");
  wispInput.type = "text";
  wispInput.style = "flex: 1; padding: 6px; background: #27272a; border: 1px solid #3f3f46; border-radius: 4px; color: #fff; font-size: 13px;";
  wispInput.value = localStorage.getItem("proxy-ws") || "wss://wisp.classroom.lat/";
  wispInput.oninput = () => {
    localStorage.setItem("proxy-ws", wispInput.value);
  };

  const wispDefaultBtn = document.createElement("button");
  wispDefaultBtn.textContent = "Default";
  wispDefaultBtn.style = "padding: 6px 12px; font-size: 13px; cursor: pointer;";
  wispDefaultBtn.onclick = () => {
    wispInput.value = "wss://wisp.classroom.lat/";
    localStorage.setItem("proxy-ws", "wss://wisp.classroom.lat/");
  };

  wispRow.appendChild(wispInput);
  wispRow.appendChild(wispDefaultBtn);
  wispWrapper.appendChild(wispRow);
  container.appendChild(wispWrapper);

  const cloakWrapper = document.createElement("div");
  cloakWrapper.style = "margin-bottom: 25px; display: flex; flex-direction: column; gap: 5px;";
  cloakWrapper.innerHTML = `<label style="font-size:13px; color:#e4e4e7;">Idle Tab Cloaking Preset:</label>`;

  const cloakSelect = document.createElement("select");
  cloakSelect.style = "padding: 6px; background: #27272a; border: 1px solid #3f3f46; border-radius: 4px; color: #fff; font-size: 13px; cursor: pointer;";
  
  const cloakOptions = [
    { value: "classroom", label: "Google Classroom (Default)" },
    { value: "drive", label: "Google Drive" },
    { value: "docs", label: "Google Docs" },
    { value: "custom", label: "Custom Title & Favicon" },
    { value: "none", label: "None (Keep Site Default)" }
  ];

  const activeCloakConfig = JSON.parse(localStorage.getItem("IdleFaviconTitleBloxyCraftieUnblocked") || '{"preset":"classroom"}');

  cloakOptions.forEach(opt => {
    const o = document.createElement("option");
    o.value = opt.value;
    o.textContent = opt.label;
    if(activeCloakConfig.preset === opt.value) o.selected = true;
    cloakSelect.appendChild(o);
  });
  cloakWrapper.appendChild(cloakSelect);

  const customInputsDiv = document.createElement("div");
  customInputsDiv.style = `display: ${activeCloakConfig.preset === 'custom' ? 'flex' : 'none'}; flex-direction: column; gap: 8px; margin-top: 5px; padding-left: 10px; border-left: 2px solid #3f3f46;`;
  customInputsDiv.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 3px;">
      <label style="font-size: 11px; color: #a1a1aa;">Custom Title:</label>
      <input type="text" id="cloak-custom-title" value="${activeCloakConfig.customTitle || ''}" style="padding: 5px; background: #27272a; border: 1px solid #3f3f46; border-radius: 4px; color: #fff; font-size: 12px;">
    </div>
    <div style="display: flex; flex-direction: column; gap: 3px;">
      <label style="font-size: 11px; color: #a1a1aa;">Custom Favicon URL:</label>
      <input type="text" id="cloak-custom-fav" value="${activeCloakConfig.customFavicon || ''}" style="padding: 5px; background: #27272a; border: 1px solid #3f3f46; border-radius: 4px; color: #fff; font-size: 12px;">
    </div>
  `;
  cloakWrapper.appendChild(customInputsDiv);
  container.appendChild(cloakWrapper);

  function saveCloakConfig() {
    const selectVal = cloakSelect.value;
    const titleVal = document.getElementById("cloak-custom-title")?.value || "";
    const favVal = document.getElementById("cloak-custom-fav")?.value || "";
    
    const settingsObject = {
      preset: selectVal,
      customTitle: titleVal,
      customFavicon: favVal
    };
    localStorage.setItem("IdleFaviconTitleBloxyCraftieUnblocked", JSON.stringify(settingsObject));
  }

  cloakSelect.onchange = () => {
    customInputsDiv.style.display = cloakSelect.value === 'custom' ? 'flex' : 'none';
    saveCloakConfig();
  };

  const sectionIconsTitle = document.createElement("div");
  sectionIconsTitle.style = "font-weight: bold; font-size: 16px; color: #a1a1aa; margin-bottom: 15px;";
  sectionIconsTitle.textContent = "Extra Navbar Icons";
  container.appendChild(sectionIconsTitle);

  predefinedExtras.forEach(item => {
    const div = document.createElement("div");
    div.className = "extraItem";
    div.innerHTML = `<div class="extraIconPreview">${item.svg}</div><span>${item.name}</span>`;

    const exists = extraNavs.find(x => x.name === item.name);

    if(!exists){
      const addBtn = document.createElement("button");
      addBtn.textContent = "Add";
      addBtn.onclick = () => {
        extraNavs.push(item);
        localStorage.setItem("extraNavs", JSON.stringify(extraNavs));
        renderExtraNavGroup();
        renderExtraOverlay();
      };
      div.appendChild(addBtn);
    } else {
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.onclick = () => {
        extraNavs = extraNavs.filter(x => x.name !== item.name);
        localStorage.setItem("extraNavs", JSON.stringify(extraNavs));
        renderExtraNavGroup();
        renderExtraOverlay();
      };
      div.appendChild(removeBtn);
    }
    container.appendChild(div);
  });

  setTimeout(() => {
    const tIn = document.getElementById("cloak-custom-title");
    const fIn = document.getElementById("cloak-custom-fav");
    if(tIn) tIn.oninput = saveCloakConfig;
    if(fIn) fIn.oninput = saveCloakConfig;
  }, 50);
}

renderExtraNavGroup();
renderExtraOverlay();

function exportSiteSave(){
  const localStorageData = {};
  for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    localStorageData[key] = localStorage.getItem(key);
  }

  const cookies = document.cookie
    .split("; ")
    .filter(Boolean)
    .map(c => {
      const eq = c.indexOf("=");
      return {
        name: c.substring(0, eq),
        value: c.substring(eq + 1)
      };
    });

  const saveData = {
    version: 1,
    timestamp: Date.now(),
    localStorage: localStorageData,
    cookies: cookies
  };

  const blob = new Blob(
    [JSON.stringify(saveData, null, 2)],
    { type: "application/json" }
  );

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "bloxcraft-site-save.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
}

function importSiteSave(input){
  const file = input.files[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try{
      const data = JSON.parse(reader.result);

      if(data.localStorage){
        Object.keys(data.localStorage).forEach(key=>{
          localStorage.setItem(key, data.localStorage[key]);
        });
      }

      if(Array.isArray(data.cookies)){
        data.cookies.forEach(c=>{
          document.cookie = `${c.name}=${c.value}; path=/`;
        });
      }

      if(typeof renderExtraNavGroup === "function") renderExtraNavGroup();
      if(typeof renderExtraOverlay === "function") renderExtraOverlay();

      alert("Site save imported successfully!\nReloading page…");
      location.reload();
    }catch(err){
      alert("Invalid save file.");
    }
  };
  reader.readAsText(file);

  input.value = "";
}
