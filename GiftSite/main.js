// Get the menu button element by its ID
const menuBtn = document.getElementById('menu-btn');

// Get the navigation links container element by its ID
const navLinks = document.getElementById('nav-links');

// Select the icon inside the menu button (assumed to be an <i> element)
const menuBtnIcon = menuBtn.querySelector('i');

// Add a click event listener to the menu button
menuBtn.addEventListener('click', (e) => {
  // Toggle the 'open' class on the navLinks container to show/hide it
  navLinks.classList.toggle('open');

  // Check if the navLinks container has the 'open' class (visible state)
  const isOpen = navLinks.classList.contains('open');

  // Update the icon in the menu button based on whether navLinks is open or closed
  // Use 'ri-close-line' icon if open, 'ri-menu-line' icon if closed
  menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

// Add a click event listener to the navLinks container
// When a link inside the container is clicked, it will close the menu
navLinks.addEventListener('click', (e) => {
  // Remove the 'open' class from navLinks to hide it
  navLinks.classList.remove('open');

  // Reset the menu button icon to 'ri-menu-line' (closed state icon)
  menuBtnIcon.setAttribute('class', 'ri-menu-line');
});

// ScrollReveal animation options for elements that will appear from the bottom
const scrollRevealOption = {
  origin: 'bottom', // Elements will appear from the bottom
  distance: '50px', // Distance from which they will come up
  duration: 1000, // Duration of animation in milliseconds
};

// Apply ScrollReveal animations to various elements with different configurations

// Reveal image inside header section with animation coming from the right
ScrollReveal().reveal('.header__image img', {
  ...scrollRevealOption, // Base options for scroll animation
  origin: 'right', // Override to animate from the right
});

// Reveal header content paragraph with a delay
ScrollReveal().reveal('.header__content p', {
  ...scrollRevealOption,
  delay: 500, // 500ms delay before animation starts
});

// Reveal header content title with a longer delay
ScrollReveal().reveal('.header__content h1', {
  ...scrollRevealOption,
  delay: 1000, // 1000ms delay before animation starts
});

// Reveal header buttons with an even longer delay
ScrollReveal().reveal('.header__btns', {
  ...scrollRevealOption,
  delay: 1500, // 1500ms delay before animation starts
});

// Reveal each card in the destination section with an interval between them
ScrollReveal().reveal('.destination__card', {
  ...scrollRevealOption,
  interval: 500, // Each card reveals with a 500ms delay in between
});

// Showcase animations for left-side image and content

// Reveal image in showcase section from the left
ScrollReveal().reveal('.showcase__image img', {
  ...scrollRevealOption,
  origin: 'left', // Override to animate from the left
});

// Reveal heading in showcase content with delay
ScrollReveal().reveal('.showcase__content h4', {
  ...scrollRevealOption,
  delay: 500,
});

// Reveal paragraph in showcase content with a longer delay
ScrollReveal().reveal('.showcase__content p', {
  ...scrollRevealOption,
  delay: 1000,
});

// Reveal button in showcase content with an even longer delay
ScrollReveal().reveal('.showcase__btn', {
  ...scrollRevealOption,
  delay: 1500,
});
// ScrollReveal animation options for elements that will appear from the bottom
const ScrollRevealOption = {
  origin: 'bottom', // Elements will appear from the bottom
  distance: '50px', // Distance from which they will come up
  duration: 1000, // Duration of animation in milliseconds
};

// Apply ScrollReveal to the booking form container
ScrollReveal().reveal('#booking', scrollRevealOption);

// Apply ScrollReveal to individual form groups
ScrollReveal().reveal('.form__group', {
  ...scrollRevealOption,
  delay: 500, // Add a delay for the form groups
  interval: 200, // Stagger the animation between each form group
});

// Apply ScrollReveal to the submit button
ScrollReveal().reveal('.btn', {
  ...scrollRevealOption,
  delay: 1000, // Add a delay before the button appears
});
// Reveal each banner card with a staggered animation
ScrollReveal().reveal('.banner__card', {
  ...scrollRevealOption,
  interval: 500,
});
// Get all radio buttons for class selection
const classRadios = document.querySelectorAll('input[name="class"]');

// Get the labels for the radio buttons
const classLabels = document.querySelectorAll('.booking__nav label');

// Add event listeners to radio buttons for animation
classRadios.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    // Apply animation to the selected label
    classLabels.forEach((label, i) => {
      // If the radio button is checked, add the animation
      if (radio.checked && i === index) {
        label.classList.add('active');
      } else {
        label.classList.remove('active');
      }
    });
  });
});

// Add ScrollReveal animation for the entire form section
ScrollReveal().reveal('.booking__container', {
  origin: 'bottom', // Animating from the bottom
  distance: '50px',
  duration: 1000,
  delay: 500, // Delay before animation starts
  easing: 'ease-in-out', // Smooth animation
});

// Initialize a Swiper carousel for image or content slides
const swiper = new Swiper('.swiper', {
  slidesPerView: 3, // Display 3 slides at a time in view
  spaceBetween: 20, // Space of 20px between each slide
  loop: true, // Enables looping of slides infinitely
});

// Add ScrollReveal animation for the contact form
ScrollReveal().reveal('.contact__form__container', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 500,
  easing: 'ease-in-out',
});

// Optional: Additional animations for form inputs if desired
const formInputs = document.querySelectorAll(
  '.contact__form__container input, .contact__form__container textarea'
);
formInputs.forEach((input) => {
  input.addEventListener('focus', () => {
    input.classList.add('focused');
  });
  input.addEventListener('blur', () => {
    input.classList.remove('focused');
  });
});
// Initialize EmailJS with your user ID
emailjs.init('k6Yryxnp_OATiaIOn'); // Replace with your EmailJS user ID

// Get the form element
const form = document.getElementById('contact-form');

// Add event listener to the form for submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Send the form data using EmailJS
  emailjs.sendForm('service_g02a0oo', 'template_riv3jom', form).then(
    function (response) {
      console.log('Success!', response.status, response.text);
      alert('Your message has been sent successfully!');
    },
    function (error) {
      console.log('Failed...', error);
      alert('Failed to send the message. Please try again.');
    }
  );
});
