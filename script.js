let count = 0;
let mala = 0;
let goal = 0;
const current = document.getElementById("currentCount");
const malaEl = document.getElementById("malaCount");
const goalEl = document.getElementById("goalCount");
const progress = document.getElementById("progressText");
const countBtn = document.getElementById("countBtn");
const resetBtn = document.getElementById("resetBtn");
countBtn.addEventListener("click", () => {
    count++;
 if (count >= 109) {
        count = 0;
        mala++;
        if (mala >= 5) {
            mala = 0;
            goal++;
            goalEl.textContent = goal;
        }malaEl.textContent = mala;
    }current.textContent = count;
    progress.textContent = `${count} / 108`;
});resetBtn.addEventListener("click", () => {
    count = 0;
    mala = 0;
    goal = 0; current.textContent = 0;
    malaEl.textContent = 0;
    goalEl.textContent = 0;
    progress.textContent = `0 / 108`;
});
