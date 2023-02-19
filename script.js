const slider = document.querySelector('input[type="range"]');

slider.addEventListener("input", function() {
    const thumbPosition = (this.value - this.min) / (this.max - this.min); 
    const thumbPositionPercent = thumbPosition * 100 + '%'; // converts thumbPosition to percentage
    document.documentElement.style.setProperty('--thumb-position', thumbPositionPercent); // assigns thumpPercentage to varable that is created in styles.css
});


// -------------- code for responsive design ----------------- //

const mediaQuery = window.matchMedia('(min-width: 1440px)');

const payment = document.querySelector('.payment');
const yearly_percent = document.querySelector('.yearly_percent');

function handleScreenSizeChange(e) {
  const first_div = document.querySelector('div:first-of-type');
  if (e.matches) {
    first_div.classList.add('first_div');
    first_div.innerHTML += '<div class = "payment">' +
                                '<p class = "dollar">$16.00</p>' + 
                                '<p class = "month">/ month</p>' +
                           '</div>';
    payment.style.display = "none";
    yearly_percent.textContent = "-25% discount";
  } else {
    first_div.classList.remove('first_div');
    payment.style.display = "flex";
    first_div.innerHTML = '<h2 class="main_heading">100K PAGEVIEWS</h2>';
    yearly_percent.textContent = "-25%";
  }
}

// add listener for screen size change
mediaQuery.addListener(handleScreenSizeChange);

// check initial screen size
handleScreenSizeChange(mediaQuery);


