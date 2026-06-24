(function() {
    'use strict';

    const originalTitle = document.title;
    const originalFavicon = document.querySelector("link[rel*='icon']")?.href || "/favicon.ico"; 
    const originalType = document.querySelector("link[rel*='icon']")?.getAttribute("type") || "image/png";
    const blank = " ";
    const png = "image/png";

    document.addEventListener("visibilitychange", () => {
        let icon = document.querySelector("link[rel*='icon']");
        if (!icon) {
            icon = document.createElement('link');
            icon.rel = 'shortcut icon';
            document.head.appendChild(icon);
        }

        if (document.hidden) {
            let config = { preset: "classroom" };
            try {
                const saved = localStorage.getItem("IdleFaviconTitleBloxyCraftieUnblocked");
                if (saved) config = JSON.parse(saved);
            } catch (err) {
                config = { preset: "classroom" };
            }


            if (config.preset === "none") return;

            let awayTitle = "Home - Classroom";
            let awayFavicon = "/idle-favicons/clasroom.ico"; 
            let awayType = blank;

            if (config.preset === "drive") {
                awayTitle = "Home - Google Drive";
                awayFavicon = "/idle-favicons/drive.png";
                awayType = png;
            } else if (config.preset === "docs") {
                awayTitle = "Google Docs";
                awayFavicon = "/idle-favicons/docs.ico";
                awayType = blank;
            } else if (config.preset === "custom") {
                awayTitle = config.customTitle || originalTitle;
                awayFavicon = config.customFavicon || originalFavicon;
                awayType = awayFavicon.toLowerCase().endsWith(".png") ? png : blank;
            }

            document.title = awayTitle;
            icon.setAttribute("href", awayFavicon);
            icon.setAttribute("type", awayType);
        } else {
            document.title = originalTitle;
            icon.setAttribute("href", originalFavicon);
            icon.setAttribute("type", originalType);
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) || (e.ctrlKey && e.key.toUpperCase() === 'U')) {
            e.preventDefault();
            try { window.top.location.href = "https://www.google.com"; } catch (err) { window.location.href = "https://www.google.com"; }
        }
    });

    setInterval(() => {
        if (window.self === window.top) {
            const threshold = 160;
            if ((window.outerWidth - window.innerWidth > threshold) || (window.outerHeight - window.innerHeight > threshold)) {
                window.location.href = "https://www.google.com";
            }
        }
        const start = performance.now();
        debugger;
        if (performance.now() - start > 100) {
            try { window.top.location.href = "https://www.google.com"; } catch (err) { window.location.href = "https://www.google.com"; }
        }
    }, 500);

    const menu = document.createElement('div');
    menu.id = 'custom-macro-menu';
    
    const style = document.createElement('style');
    style.innerHTML = `
        #custom-macro-menu {
            position: absolute;
            background: #18181b;
            border: 1px solid #27272a;
            border-radius: 8px;
            padding: 6px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5);
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            font-size: 13px;
            font-weight: 500;
            color: #e4e4e7;
            z-index: 99999999;
            display: none;
            min-width: 190px;
            user-select: none;
        }
        .macro-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 8px 12px;
            cursor: pointer;
            border-radius: 6px;
            transition: background 0.15s ease, color 0.15s ease;
        }
        .macro-item:hover {
            background: #27272a;
            color: #ffffff;
        }
        .macro-item svg {
            width: 16px;
            height: 16px;
            margin-left: 12px;
            flex-shrink: 0;
        }
        .close-btn {
            position: absolute;
            top: 4px;
            right: 4px;
            cursor: pointer;
            padding: 2px 6px;
            font-size: 12px;
            color: #a1a1aa;
            z-index: 100000000;
        }
        .close-btn:hover {
            color: #ffffff;
        }
    `;
    document.head.appendChild(style);

    const externalIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
    const discordIcon = `<svg viewBox="0 0 127.14 96.36"><path fill="currentColor" d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53a105.73,105.73,0,0,0,32,16.15,77.7,77.7,0,0,0,6.73-11A68.6,68.6,0,0,1,29.4,77.34c1-.71,2-1.46,3-2.23a74.12,74.12,0,0,0,62.43,0c1,.77,2,1.52,3,2.23a68.6,68.6,0,0,1-10.28,5.32,77,77,0,0,0,6.73,11,105.73,105.73,0,0,0,32-16.15C129.56,48.12,123.51,25.32,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/></svg>`;
    const docsIcon = `<svg viewBox="0 0 384 512"><path fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM120 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"/></svg>`;
    const youtubeIcon = `<svg viewBox="0 0 640 640"><path fill="currentColor" d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z"/></svg>`;
    const fullscreenIcon = `<svg viewBox="0 0 640 640"><path fill="currentColor" d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`;
    const copyIcon = `<svg viewBox="0 0 640 640"><path fill="currentColor" d="M451.5 160C434.9 160 418.8 164.5 404.7 172.7C388.9 156.7 370.5 143.3 350.2 133.2C378.4 109.2 414.3 96 451.5 96C537.9 96 608 166 608 252.5C608 294 591.5 333.8 562.2 363.1L491.1 434.2C461.8 463.5 422 480 380.5 480C294.1 480 224 410 224 323.5C224 322 224 320.5 224.1 319C224.6 301.3 239.3 287.4 257 287.9C274.7 288.4 288.6 303.1 288.1 320.8C288.1 321.7 288.1 322.6 288.1 323.4C288.1 374.5 329.5 415.9 380.6 415.9C405.1 415.9 428.6 406.2 446 388.8L517.1 317.7C534.4 300.4 544.2 276.8 544.2 252.3C544.2 201.2 502.8 159.8 451.7 159.8zM307.2 237.3C305.3 236.5 303.4 235.4 301.7 234.2C289.1 227.7 274.7 224 259.6 224C235.1 224 211.6 233.7 194.2 251.1L123.1 322.2C105.8 339.5 96 363.1 96 387.6C96 438.7 137.4 480.1 188.5 480.1C205 480.1 221.1 475.7 235.2 467.5C251 483.5 269.4 496.9 289.8 507C261.6 530.9 225.8 544.2 188.5 544.2C102.1 544.2 32 474.2 32 387.7C32 346.2 48.5 306.4 77.8 277.1L148.9 206C178.2 176.7 218 160.2 259.5 160.2C346.1 160.2 416 230.8 416 317.1C416 318.4 416 319.7 416 321C415.6 338.7 400.9 352.6 383.2 352.2C365.5 351.8 351.6 337.1 352 319.4C352 318.6 352 317.9 352 317.1C352 283.4 334 253.8 307.2 237.5z"/></svg>`;
    const panicIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;

    menu.innerHTML = `
        <div class="close-btn" id="close-menu">✕</div>
        <div class="macro-item" id="opt-close-menu"><span>Close</span></div>
        <div class="macro-item" id="opt-iframe"><span>Open about:blank</span>${externalIcon}</div>
        <div class="macro-item" id="opt-discord"><span>Discord</span>${discordIcon}</div>
        <div class="macro-item" id="opt-game-list-ubg"><span>Games List</span>${docsIcon}</div>
        <div class="macro-item" id="opt-youtube"><span>Youtube</span>${youtubeIcon}</div>
        <div class="macro-item" id="opt-fullscreen"><span>Fullscreen</span>${fullscreenIcon}</div>
        <div class="macro-item" id="opt-copy"><span>Copy URL</span>${copyIcon}</div>
        <div class="macro-item" id="opt-panic"><span>Panic Key</span>${panicIcon}</div>
    `;
    document.body.appendChild(menu);

    window.addEventListener('contextmenu', (e) => {
        if (e.shiftKey) return;
        e.preventDefault();
        e.stopPropagation();
        
        menu.style.left = `${e.pageX}px`;
        menu.style.top = `${e.pageY}px`;
        menu.style.display = 'block';
    });

    window.addEventListener('click', () => {
        menu.style.display = 'none';
    });

    document.getElementById('opt-iframe').addEventListener('click', (e) => {
        e.stopPropagation();
        menu.style.display = 'none';

        const currentUrl = window.top.location.href;
        const newTab = window.open('about:blank', '_blank');
        
        if (newTab) {
            newTab.document.body.style.margin = '0';
            newTab.document.body.style.height = '100vh';
            newTab.document.body.style.overflow = 'hidden';

            const iframe = newTab.document.createElement('iframe');
            iframe.src = currentUrl;
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.style.padding = '0';

            newTab.document.body.appendChild(iframe);
        }
    });
    
    document.getElementById('opt-discord').addEventListener('click', (e) => {
        e.stopPropagation();
        menu.style.display = 'none';
        window.open('https://discord.gg/sqPFYEsz8F', '_blank');
    });

    document.getElementById('opt-game-list-ubg').addEventListener('click', (e) => {
        e.stopPropagation();
        menu.style.display = 'none';
        window.open('https://docs.google.com/document/d/1UC3Eo6UoPCVlq1SiOFEj0HahQGPqqbadXSho5NKHbQU/edit', '_blank');
    });

    document.getElementById('opt-youtube').addEventListener('click', (e) => {
        e.stopPropagation();
        menu.style.display = 'none';
        window.open('https://www.youtube.com/@bloxcraftstudios', '_blank');
    });

    document.getElementById('opt-fullscreen').addEventListener('click', (e) => {
        e.stopPropagation();
        menu.style.display = 'none';
        const targetDoc = window.top.document;
        
        if (!targetDoc.fullscreenElement) {
            targetDoc.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            targetDoc.exitFullscreen();
        }
    });

    document.getElementById('opt-copy').addEventListener('click', (e) => {
        e.stopPropagation();
        menu.style.display = 'none';
        navigator.clipboard.writeText(window.top.location.href);
        alert("URL Copied!");
    });

    document.getElementById('opt-panic').addEventListener('click', (e) => {
        e.stopPropagation();
        window.top.location.href = "https://www.google.com";
    });
        
    document.getElementById('close-menu').addEventListener('click', (e) => {
        e.stopPropagation();
        menu.style.display = 'none';
    });

    document.getElementById('opt-close-menu').addEventListener('click', (e) => {
        e.stopPropagation();
        menu.style.display = 'none';
    });
    
})();
