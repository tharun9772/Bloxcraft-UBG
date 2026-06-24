let welcomeSlides = [];
let currentSlideIndex = 0;
const WELCOME_KEY = 'bloxcraft_welcome_seen'; 

let overlay;

window.addEventListener('DOMContentLoaded', async () => {
    overlay = document.getElementById('modal-overlay');
    
 
    try {
        const res = await fetch('https://cdn.jsdelivr.net/gh/tharun9772/game-assets@main/welcome.json');
        const json = await res.json();
        welcomeSlides = json.slides || [];
    } catch (e) {
        console.error("Failed to load welcome.json", e);
    }


    const welcomeSeen = localStorage.getItem(WELCOME_KEY);

    if (!welcomeSeen && welcomeSlides.length > 0) {
        showWelcome();
    } else {
        checkAnnouncements();
    }
});

function showWelcome() {
    if (!overlay) return;
    overlay.style.display = 'flex';
    
    const card = document.getElementById('welcome-card');
    if (card) card.style.display = 'flex';

    const dots = document.getElementById('pagination-dots');
    if (dots) {
        dots.innerHTML = '';
        welcomeSlides.forEach((_, i) => {
            const d = document.createElement('div');
            d.className = i === 0 ? 'dot active' : 'dot';
            dots.appendChild(d);
        });
    }

    renderSlide();
}

function renderSlide() {
    const slide = welcomeSlides[currentSlideIndex];
    if (!slide) return;

    const titleEl = document.getElementById('welcome-title');
    const textEl = document.getElementById('welcome-description');
    const iconEl = document.getElementById('welcome-icon-container');
    const nextBtn = document.getElementById('next-btn');

    if (titleEl) titleEl.innerText = slide.title;
    if (textEl) textEl.innerText = slide.text;

    if (iconEl) {
        iconEl.innerHTML = slide.type === "img"
            ? `<img src="${slide.content}" alt="slide icon" style="max-width:100%;">`
            : slide.content;
    }

    document.querySelectorAll('.dot').forEach((d, i) => {
        d.classList.toggle('active', i === currentSlideIndex);
    });

    if (nextBtn) {
        nextBtn.innerText = currentSlideIndex === welcomeSlides.length - 1 ? "Finish" : "Next";
    }
}


window.handleNext = function() {
    if (currentSlideIndex < welcomeSlides.length - 1) {
        currentSlideIndex++;
        renderSlide();
    } else {
        exitFlow('welcome-card', closeWelcome);
    }
};

function exitFlow(id, callback) {
    const el = document.getElementById(id);
    if (!el) return callback();
    
    el.classList.add('leaving');
    setTimeout(() => {
        el.style.display = 'none';
        el.classList.remove('leaving');
        callback();
    }, 200);
}

function closeWelcome() {
    localStorage.setItem(WELCOME_KEY, 'true');

    if (overlay) overlay.style.display = 'none'; 
    checkAnnouncements();
}

async function checkAnnouncements() {
    try {
        const res = await fetch('https://cdn.jsdelivr.net/gh/tharun9772/game-assets@main/annc.json');
        const json = await res.json();
        const data = json.announcements?.[0];

        if (!data) return;

        const key = `announcement-${data.id}`;

        if (!localStorage.getItem(key)) {
            if (overlay) overlay.style.display = 'flex';

            document.getElementById('announcement-title').innerText = data.title;
            document.getElementById('announcement-text').innerText = data.content;
            document.getElementById('announcement-icon-container').innerHTML = data.icon;
            document.getElementById('announcement-btn').innerText = data.buttonText;

            const annCard = document.getElementById('announcement-card');
            annCard.setAttribute('data-id', data.id);
            annCard.style.display = 'flex';
        }
    } catch (e) {
        console.error("Failed to load announcements.json", e);
    }
}

window.closeAnnouncement = function() {
    const el = document.getElementById('announcement-card');
    if (!el) return;
    
    const id = el.getAttribute('data-id');
    localStorage.setItem(`announcement-${id}`, 'true');
    
    el.style.display = 'none';
    if (overlay) overlay.style.display = 'none';
};
