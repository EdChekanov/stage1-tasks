const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}


//SOUND ON CHARS


const charD = document.querySelector('.D');
const charF = document.querySelector('.F');
const charG = document.querySelector('.G');
const charH = document.querySelector('.H');
const charJ = document.querySelector('.J');
const charK = document.querySelector('.K');
const charL = document.querySelector('.L');
const charR = document.querySelector('.R');
const charT = document.querySelector('.T');
const charU = document.querySelector('.U');
const charI = document.querySelector('.I');
const charO = document.querySelector('.O');

window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyD') {
        const src = `assets/audio/c.mp3`;
        playAudio(src);
        charD.classList.add('piano-key-active');
    };
    if (event.code === 'KeyF') {
        const src = `assets/audio/d.mp3`;
        playAudio(src);
        charF.classList.add('piano-key-active');
    };
    if (event.code === 'KeyG') {
        const src = `assets/audio/e.mp3`;
        playAudio(src);
        charG.classList.add('piano-key-active');
    };
    if (event.code === 'KeyH') {
        const src = `assets/audio/f.mp3`;
        playAudio(src);
        charH.classList.add('piano-key-active');
    };
    if (event.code === 'KeyJ') {
        const src = `assets/audio/g.mp3`;
        playAudio(src);
        charJ.classList.add('piano-key-active');
    };
    if (event.code === 'KeyK') {
        const src = `assets/audio/a.mp3`;
        playAudio(src);
        charK.classList.add('piano-key-active');
    };
    if (event.code === 'KeyL') {
        const src = `assets/audio/b.mp3`;
        playAudio(src);
        charL.classList.add('piano-key-active');
    };
    if (event.code === 'KeyR') {
        const src = `assets/audio/c#.mp3`;
        playAudio(src);
        charR.classList.add('piano-key-active');
    };
    if (event.code === 'KeyT') {
        const src = `assets/audio/d#.mp3`;
        playAudio(src);
        charT.classList.add('piano-key-active');
    };
    if (event.code === 'KeyU') {
        const src = `assets/audio/f#.mp3`;
        playAudio(src);
        charU.classList.add('piano-key-active');
    };
    if (event.code === 'KeyI') {
        const src = `assets/audio/g#.mp3`;
        playAudio(src);
        charI.classList.add('piano-key-active');
    };
    if (event.code === 'KeyO') {
        const src = `assets/audio/a#.mp3`;
        playAudio(src);
        charO.classList.add('piano-key-active');
    };
    
});

window.addEventListener('keyup', (event) => {
    if (event.code === 'KeyD') {
        charD.classList.remove('piano-key-active');
    };
    if (event.code === 'KeyF') {
        charF.classList.remove('piano-key-active');
    };
    if (event.code === 'KeyG') {
        charG.classList.remove('piano-key-active');
    };
    if (event.code === 'KeyH') {
        charH.classList.remove('piano-key-active');
    };
    if (event.code === 'KeyJ') {
        charJ.classList.remove('piano-key-active');
    };
    if (event.code === 'KeyK') {
        charK.classList.remove('piano-key-active');
    };
    if (event.code === 'KeyL') {
        charL.classList.remove('piano-key-active');
    };
    if (event.code === 'KeyR') {
        charR.classList.remove('piano-key-active');
    };
    if (event.code === 'KeyT') {
        charT.classList.remove('piano-key-active');
    };
    if (event.code === 'KeyU') {
        charU.classList.remove('piano-key-active');
    };
    if (event.code === 'KeyI') {
        charI.classList.remove('piano-key-active');
    };
    if (event.code === 'KeyO') {
        charO.classList.remove('piano-key-active');
    };
});

piano.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
    }
});

piano.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('piano-key')) {
        pianoКeys.forEach((el) => {
            if (el.classList.contains('active')) {
                el.classList.remove('active');
            }
        });
        event.target.classList.add('active');
    }
});


// NOTES|LETTERS


const notes = document.querySelector('.btn-notes');
const letters = document.querySelector('.btn-letters');

notes.addEventListener('click', (event) => {
    if (notes.classList.contains('btn-active')) {
        notes.classList.remove('btn-active');
    }
    letters.classList.remove('btn-active');
    notes.classList.add('btn-active');
    pianoКeys.forEach((el) => {
        if (el.classList.contains('piano-key-letter')) {
            el.classList.remove('piano-key-letter');
        }
    }
    )
}
)

letters.addEventListener('click', (event) => {
    if (letters.classList.contains('btn-active')) {
        letters.classList.remove('btn-active');
    }
    notes.classList.remove('btn-active');
    letters.classList.add('btn-active');
    pianoКeys.forEach((el) => {
        if (~el.classList.contains('piano-key-letter')) {
            el.classList.add('piano-key-letter');
        }
    }
    )
}
)

// FULLSCREEAN


const buttonFull = document.querySelector('.fullscreen');
buttonFull.addEventListener('click', (event) => {
    if (document.fullscreen) {
    document.exitFullscreen();
} else {
    document.documentElement.requestFullscreen();
};
});