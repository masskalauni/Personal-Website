/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById("header")
    // When the sccroll is greater that 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50)
        header.classList.add("scroll-header")
    
    else
        header.classList.remove("scroll-header")
}

window.addEventListener("scroll", scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll(".services__modal"),
      modalBtns = document.querySelectorAll(".services__button"),
      modalClose = document.querySelectorAll(".services__modal-close")

let modal = function(modalClick) {
    modalViews[modalClick].classList.add("active-modal")
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener("click", () => {
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener("click", () => {
        modalViews.forEach((mv) => {
            mv.classList.remove("active-modal")
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixer = mixitup(".work__container", {
    selectors: {
        target: ".work__card"
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll(".work__item")

function activeWork() {
    linkWork.forEach(l => l.classList.remove("active-work"))
    this.classList.add("active-work")
}

linkWork.forEach(l => l.addEventListener("click", activeWork))
 
/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    spaceBetween: 24,
    loop: true,
    autoplay:true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link")
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link")
    }
    })
}

window.addEventListener("scroll", scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById("theme-button")
const lightTheme = "light-theme"
const iconTheme = "bx-sun"

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? "dark" : "light"
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun"

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](lightTheme)
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chhose
    localStorage.setItem("selected-theme", getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 500,
    delay: 100,
    // reset: true,
})

sr.reveal(".nav__item", {origin: "bottom", distance: "15px", duration: 200, interval: 100})

sr.reveal(".section__title", {origin: "left"})
sr.reveal(".section__subtitle", {origin:"right", delay: 50})

sr.reveal(".home__data")
sr.reveal(".home__handle", {delay: 100})
sr.reveal(".home__social, .home__scroll", {delay: 200, origin: "bottom"})

sr.reveal(".about__img", {distance:"15px", duration: 1500})
sr.reveal(".about__data", {origin: "right"})
sr.reveal(".about__box", {origin: "right", duration: 200, interval: 50})
sr.reveal(".about__description", {origin: "right", delay: 200, duration: 200})

sr.reveal(".skills__content", {duration: 300, interval: 30, distance: "30px"})
sr.reveal(".skills__data", {origin: "bottom", duration: 200, interval: 10, distance: "15px"})

sr.reveal(".services__card", {duration: 300, interval: 100, distance: "30px"})

sr.reveal(".work__filters", {duration: 200})
sr.reveal(".work__card", {delay: 100, duration: 200, interval: 20, distance: "15px"})

sr.reveal("swiper-wrapper", {duration: 200})
sr.reveal(".swiper-pagination", {delay: 50, duration: 200})

sr.reveal(".contact__title", {duration: 200})
sr.reveal(".contact__card", {origin: "left", delay: 100, duration: 200, interval: 50})
sr.reveal(".contact__form", {origin: "right", delay: 100, duration: 300})

sr.reveal(".footer__title", {duration: 200, distance: "15px"})
sr.reveal(".footer__link", {delay: 100, duration: 300, interval: 30, distance: "15px"})
sr.reveal(".footer__social-link", {delay: 100, duration: 300, interval: 30, distance: "15px"})
sr.reveal(".footer__copy", {origin: "bottom", delay: 100, duration: 300, distance: "15px"})

/*=============== TITLE CHANGE ANIMATION ===============*/
const headerTexts = [ "Frontend Developer", "Content Creator","Data Scientist","Machine Learning Engineer","AI Developer"];
const headerElement = document.getElementById("dynamic-header");

let currentIndex = 0;
headerElement.textContent = headerTexts[currentIndex];

setInterval(() => {
  currentIndex = (currentIndex + 1) % headerTexts.length;
  headerElement.style.opacity = 0;
  setTimeout(() => {
    headerElement.textContent = headerTexts[currentIndex];
    headerElement.style.opacity = 1;
  }, 500);
}, 3000);

// Load CSS
const decodeHTML = function(html){
	const textarea = document.createElement('textarea');
	textarea.innerHTML = html;
	return textarea.value;
};
const getItemsFromContainerText = function(container, selector){
	const parser = new DOMParser();
	const parsedHtml = parser.parseFromString(decodeHTML(container.textContent), 'text/html');

	return parsedHtml.querySelectorAll(selector);
};
function loadCss(){
	const cssContainers = document.querySelectorAll('noscript[data-css-lazyload]');
	if(!cssContainers){
		return;
	}
	const styleSheets = document.createDocumentFragment();
	for(const cssContainer of cssContainers){
		const sheets = getItemsFromContainerText(cssContainer, 'link[rel="stylesheet"]');
		styleSheets.append(...sheets);
		cssContainer.remove();
	}
	document.head.append(styleSheets);
}
loadCss();

 // services box
 const boxViews = document.querySelectorAll(".services-box"),
 boxBtns = document.querySelectorAll(".services-button"),
 boxCloses = document.querySelectorAll(".services-box-close");

let box = function (boxClick) {
 boxViews[boxClick].classList.add("active-box");
};

boxBtns.forEach((boxBtn, i) => {
 boxBtn.addEventListener("click", () => {
   box(i);
 });
});

boxCloses.forEach((boxClose) => {
 boxClose.addEventListener("click", () => {
   boxViews.forEach((boxView) => {
     boxView.classList.remove("active-box");
   });
 });
});


// sound toogle 
function toggleSound() {
    var audio = document.getElementById('audio');
    var earphoneImg = document.getElementById('earphone-img');
    var earphoneText = document.getElementById('earphone-text');
    var earphoneTooltip = document.getElementById('earphone-tooltip');
    

    if (audio.paused) {
        audio.play();
        earphoneImg.src = 'assets/img/favicon/Pk_files/on_earphone.svg';
        earphoneText.textContent = 'sound off';
        earphoneTooltip.textContent = ' sound off';
    } else {
        audio.pause();
        audio.currentTime = 0; // Reset audio to the beginning
        earphoneImg.src = 'assets/img/favicon/Pk_files/earphone sound off.svg';
        earphoneText.textContent = 'sound off';
        earphoneTooltip.textContent = ' sound on';
    }
}

// SHOW SCROLL TOP
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);



//select to speak 
document.addEventListener('selectionchange', handleSelectionChange);

let utterance = new SpeechSynthesisUtterance();

// List available voices
speechSynthesis.onvoiceschanged = function() {
    const voices = speechSynthesis.getVoices();

    // Find a female voice
    const femaleVoice = voices.find(voice => voice.name.toLowerCase().includes('female'));

    // Set the voice to the first available female voice, or use the first available voice
    utterance.voice = femaleVoice || voices[0];
    
    // Adjust the rate for a natural pace (1 is the default, lower values are slower, higher values are faster)
    utterance.rate = 1.1;
};

function handleSelectionChange() {
    const selection = window.getSelection().toString().trim();

    if (selection) {
        speakText(selection);
    }
}

function speakText(text) {
    // Cancel any previous speech to avoid interruptions
    speechSynthesis.cancel();

    utterance.text = text;
    speechSynthesis.speak(utterance);
}

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const messageContent = document.getElementById("message");

function sendEmail(fullName, email, messageContent) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "premkalauni4777@gmail.com",
        Password: "0E00AF6F5355247073016DD17B9DCD76F1E0",
        To: 'premkalauni4777@gmail.com',
        From: "premkalauni4777@gmail.com",
        Subject: `New message from ${fullName}`,
        Body: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: #4CAF50;">New Contact Form Message</h2>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p style="background-color: #f9f9f9; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
                    ${messageContent}
                </p>
            </div>
        `
    }).then(
      () => {
          // Create a success message element
          const successMessage = document.createElement('div');
          successMessage.textContent = "Your email has been sent successfully!";
          successMessage.style.position = 'fixed';
          successMessage.style.top = '50%';
          successMessage.style.left = '50%';
          successMessage.style.transform = 'translate(-50%, -50%)';
          successMessage.style.color = 'blue';

          successMessage.style.zIndex = '1000';
          successMessage.style.maxWidth = '90%';
          successMessage.style.boxSizing = 'border-box';
          document.body.appendChild(successMessage);

          // Trigger confetti effect
          confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 }
          });

          // Remove the success message after 3 seconds
          setTimeout(() => {
              document.body.removeChild(successMessage);
          }, 1000);
      }
    ).catch(
      error => alert("There was an error sending your email: " + error)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullNameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (fullNameValue && emailValue && messageValue) {
        sendEmail(fullNameValue, emailValue, messageValue);
    } else {
        alert("Please fill in all fields before submitting.");
    }
});

