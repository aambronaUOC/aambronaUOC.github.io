
const bits = document.querySelectorAll(".bit");
const modal = document.getElementById("modal");
const confirmBtn = document.getElementById("confirm");
const cancelBtn = document.getElementById("cancel");
const overlay = document.getElementById("system-overlay");
const overlayMsg = document.getElementById("system-message");
let pendingBit = null;

bits.forEach(bit => {
    const switchBtn = bit.querySelector(".switch");
    switchBtn.addEventListener("click", () => {
        pendingBit = bit;
        modal.classList.remove("hidden");
    });
});

cancelBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    pendingBit = null;
});

confirmBtn.addEventListener("click", () => {
    if (!pendingBit) return;
    const n = pendingBit.dataset.bit;
    const video = pendingBit.querySelector("video");
    const switchBtn = pendingBit.querySelector(".switch");
    video.src = `assets/videos/bit${n}_off.mp4`;
    video.loop = false;
    switchBtn.textContent = "0";
    switchBtn.dataset.state = "off";
    overlayMsg.textContent = `SYSTEM: BIT ${n} PURGED`;
    overlay.classList.add("visible");
    setTimeout(() => overlay.classList.remove("visible"), 1800);
    modal.classList.add("hidden");
    pendingBit = null;
});
