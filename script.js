const multipleTextElement = document.querySelector('.multiple-text');
const titles = ['Computer Science Student', 'Frontend Developer']; 
let titleIndex = 0; 
let charIndex = 0; 
let isDeleting = false; 

function typeEffect() {
  const currentTitle = titles[titleIndex];
  const displayedText = currentTitle.substring(0, charIndex); 

  multipleTextElement.textContent = displayedText; 

  if (!isDeleting && charIndex < currentTitle.length) {
   
    charIndex++;
    setTimeout(typeEffect, 100); 
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50); 
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      titleIndex = (titleIndex + 1) % titles.length; 
    }
    setTimeout(typeEffect, 1000); 
  }
}

typeEffect();

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); 

  const name = event.target.querySelector('input[type="text"]').value; 
  alert(`Thank you, ${name}! Your message has been sent.`); 

  event.target.reset();
});
