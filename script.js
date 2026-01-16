document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    let mala = 0;

    const currentCountEl = document.getElementById('currentCount');
    const malaCountEl = document.getElementById('malaCount');
    const countBtn = document.getElementById('countBtn');
    const resetBtn = document.getElementById('resetBtn');

    if (!countBtn || !resetBtn || !currentCountEl || !malaCountEl) {
        console.error('Check HTML element IDs');
        return;
    }

    countBtn.addEventListener('click', () => {
        count++;
        if (count === 109) {
            mala++;
            malaCountEl.textContent = mala;
            count = 0;
        }
        currentCountEl.textContent = count;
    });

    resetBtn.addEventListener('click', () => {
        count = 0;
        mala = 0;
        currentCountEl.textContent = count;
        malaCountEl.textContent = mala;
    });
});
