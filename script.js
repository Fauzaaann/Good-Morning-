function showMorning() {
    fadeOutIn('stage1', 'stage2');
}

function showLetter() {
    fadeOutIn('stage2', 'stage3');
    document.body.style.overflowY = "auto"; // Enable scrolling for the letter
}

function showTicket() {
    fadeOutIn('stage3', 'stage4');
    window.scrollTo(0, 0);
    document.body.style.overflowY = "hidden"; // Lock screen for the ticket
}

function fadeOutIn(outId, inId) {
    const outEl = document.getElementById(outId);
    const inEl = document.getElementById(inId);
    
    outEl.style.opacity = '0';
    setTimeout(() => {
        outEl.classList.add('hidden');
        inEl.classList.remove('hidden');
        inEl.style.opacity = '1';
    }, 800);
}
