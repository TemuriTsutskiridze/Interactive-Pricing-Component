`use strict`

// ----------------------- functionality ------------------ //

const slider = document.querySelector('input[type="range"]');

slider.addEventListener("input", (event) => {

  // slider movement

  const thumbPosition = (event.target.value - event.target.min) / (event.target.max - event.target.min); 
  const thumbPositionPercent = thumbPosition * 100 + '%'; // converts thumbPosition to percentage
  document.documentElement.style.setProperty('--thumb-position', thumbPositionPercent); // assigns thumpPercentage to varable that is created in styles.css

  // slider calculation

  let dollar = String(dollar_text.textContent);
  if (dollar.length = 6) {
    dollar = dollar.slice(1, 6);
  } else {
    dollar = dollar.slice(1, 7);
  }
  
  dollar = Number(dollar);
  if (!toggle.checked) {
    dollar = 38 * event.target.value / 100;
  } else {
    dollar = 387.60 * event.target.value / 100;
  }
  
  dollar = dollar.toFixed(2);
  dollar = `$${dollar}`; 
  dollar_text.textContent = dollar;
  
});


// toggle 

const toggle = document.querySelector('input[type="checkbox"]');

toggle.addEventListener("change", (event) => {
  let dollar = String(dollar_text.textContent);
  if (dollar.length = 6) {
    dollar = dollar.slice(1, 6);
  } else {
    dollar = dollar.slice(1, 7);
  }
  dollar = Number(dollar);
  if (event.target.checked) {
    dollar = (dollar * 12) * 85 / 100;
    dollar = dollar.toFixed(2);
    dollar = `$${dollar}`; 
    dollar_text.textContent = dollar;
    month_year_text.textContent = "/ year"
  } else {
    dollar = dollar / (12 * 85 / 100);
    dollar = dollar.toFixed(2);
    dollar = `$${dollar}`; 
    dollar_text.textContent = dollar;
    month_year_text.textContent = "/ month"
  }
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


// declaring variables for dollar text and "month" text

let dollar_text = document.querySelector(".dollar");
const month_year_text = document.querySelector(".month");
