const slider = document.querySelector('input[type="range"]');

slider.addEventListener("input", function() {
    const thumbPosition = (this.value - this.min) / (this.max - this.min); 
    const thumbPositionPercent = thumbPosition * 100 + '%'; // converts thumbPosition to percentage
    document.documentElement.style.setProperty('--thumb-position', thumbPositionPercent); // assigns thumpPercentage to varable that is created in styles.css
});