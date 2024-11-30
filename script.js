let lastFrameTime = performance.now();
let frameCount = 0;
let fpsDisplay = document.getElementById('fps-text');
let needle = document.getElementById('needle');

function calculateFPS() {
    const currentTime = performance.now();
    frameCount++;

    if (currentTime - lastFrameTime >= 1000) {
        const fps = frameCount;
        frameCount = 0;
        lastFrameTime = currentTime;
        fpsDisplay.textContent = `FPS: ${fps}`;
        if (fps < 25) {
            fpsDisplay.className = "fps-text low";
        } else if (fps >= 25 && fps <= 60) {
            fpsDisplay.className = "fps-text medium";
        } else {
            fpsDisplay.className = "fps-text high";
        }
        let rotation = Math.min(fps, 120) * 1.5 - 90;
        needle.style.transform = `rotate(${rotation}deg)`;
    }

    requestAnimationFrame(calculateFPS);
}

calculateFPS();