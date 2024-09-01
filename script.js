
document.addEventListener("DOMContentLoaded", function () {
  // Your GSAP code here
  gsap.from(".banner-contant button", {
    y: 50,
    opacity: 0, // Start with 0 opacity to fade in
    duration: 1,
    delay: 1.1,
  });
  gsap.from(".banner-contant h2", {
    y: 50,
    opacity: 0, // Start with 0 opacity to fade in
    duration: 1,
    delay: 0.9,
  });
  gsap.from(".banner-contant h1", {
    y: 50,
    opacity: 0, // Start with 0 opacity to fade in
    duration: 1,
    delay: 1,
  });
  gsap.from(".banner-contant p", {
    y: 50,
    opacity: 0, // Start with 0 opacity to fade in
    duration: 1,
    delay: 1.1,
  });
  gsap.from(".cards", {
    y: 50,
    opacity: 0, // Start with 0 opacity to fade in
    duration: 1.2,
    // delay:1.1,
    scrollTrigger: {
      trigger: ".cards",
      start: "top 50%",
      end: "bottom 100%",
      // scrub: true,
      // markers: true
    },
  });
  gsap.from(".years", {
    y: 50,
    opacity: 0, // Start with 0 opacity to fade in
    duration: 1.2,
    // delay:1.1,
    scrollTrigger: {
      trigger: ".years",
      start: "top 60%",
      end: "bottom 100%",
      // scrub: true,
      // markers: true
    },
  });

gsap.to('#yearsCount', {
  innerText:12,
  duration: 2,
  snap: 'innerText',
  scrollTrigger: {
    trigger: ".years",
    start: "top 60%",
    end: "bottom 100%",
    // scrub: true,
    // markers: true
  },
})
gsap.to('#clientsCount', {
  innerText:60,
  duration: 3,
  snap: 'innerText',
  scrollTrigger: {
    trigger: ".years",
    start: "top 60%",
    end: "bottom 100%",
    // scrub: true,
    // markers: true
  },
})
gsap.to('#TechnologiesCount', {
  innerText:9,
  duration: 3,
  snap: 'innerText',
  scrollTrigger: {
    trigger: ".years",
    start: "top 60%",
    end: "bottom 100%",
    // scrub: true,
    // markers: true
  },
})
gsap.to('#CompletedProjectsCount', {
  innerText:122,
  duration: 3,
  snap: 'innerText',
  scrollTrigger: {
    trigger: ".years",
    start: "top 60%",
    end: "bottom 100%",
    // scrub: true,
    // markers: true
  },
})
gsap.to('#AchivementsCount', {
  innerText:10,
  duration: 3,
  snap: 'innerText',
  scrollTrigger: {
    trigger: ".years",
    start: "top 60%",
    end: "bottom 100%",
    // scrub: true,
    // markers: true
  },
})



  gsap.from(".total", {
    y: 50,
    opacity: 0, // Start with 0 opacity to fade in
    duration: 1.5,
    delay: 0.4,
    scrollTrigger: {
      trigger: ".years",
      start: "top 60%",
      end: "bottom 100%",
      // scrub: true,
      // markers: true
    },
  });
  gsap.from(".heading h1", {
    y: 50,
    opacity: 0, // Start with 0 opacity to fade in
    duration: 1.5,
    // delay:.4,
    scrollTrigger: {
      trigger: ".heading",
      start: "top 70%",
      end: "bottom 100%",
      // scrub: true,
      // markers: true
    },
  });
  gsap.from(".heading p", {
    y: 50,
    opacity: 0, // Start with 0 opacity to fade in
    duration: 1.5,
    delay: 0.3,
    scrollTrigger: {
      trigger: ".heading",
      start: "top 70%",
      end: "bottom 100%",
      // scrub: true,
      // markers: true
    },
  });
  gsap.from(".view-all-btn", {
    y: 50,
    opacity: 0, // Start with 0 opacity to fade in
    duration: 1.2,
    // delay:.3,
    scrollTrigger: {
      trigger: ".heading",
      start: "top 70%",
      end: "bottom 100%",
      // scrub: true,
      // markers: true
    },
  });
  gsap.from("#project-card-1", {
    x: -50,
    opacity: 0, // Start with 0 opacity to fade in
    duration: 1.2,
    // delay:.3,
    scrollTrigger: {
      trigger: "#project-card-1",
      start: "top 70%",
      end: "bottom 100%",
      // scrub: true,
      // markers: true
    },
  });
  gsap.from("#project-card-2", {
    x: 50,
    opacity: 0, // Start with 0 opacity to fade in
    duration: 1.2,
    // delay:.3,
    scrollTrigger: {
      trigger: "#project-card-1",
      start: "top 70%",
      end: "bottom 100%",
      // scrub: true,
      // markers: true
    },
  });
  gsap.from("#project-card-3", {
    x: -50,
    opacity: 0, // Start with 0 opacity to fade in
    duration: 1.2,
    // delay:.3,
    scrollTrigger: {
      trigger: "#project-card-1",
      start: "top 70%",
      end: "bottom 100%",
      // scrub: true,
      // markers: true
    },
  });
  gsap.from("#project-card-4", {
    x: 50,
    opacity: 0, // Start with 0 opacity to fade in
    duration: 1.2,
    // delay:.3,
    scrollTrigger: {
      trigger: "#project-card-1",
      start: "top 70%",
      end: "bottom 100%",
      // scrub: true,
      // markers: true
    },
  });
  gsap.from("#contact-banner", {
    y: 50,
    opacity: 0, // Start with 0 opacity to fade in
    duration: 1.2,
    // delay:.3,
    scrollTrigger: {
      trigger: "#contact-banner",
      start: "top 70%",
      end: "bottom 100%",
      // scrub: true,
      // markers: true
    },
  });
  gsap.from(".backbtn", {
    x: 50,
    opacity: 0, // Start with 0 opacity to fade in
    duration: 1.2,
    delay: 1.2,
  });
});

const website = document.querySelector("#websites");
const mobileApps = document.querySelector("#mobile-apps");

const button1 = document.getElementById("togglebtn1");
const button2 = document.getElementById("togglebtn2");

button1.classList.add("clicked");

button1.addEventListener("click", function () {
  this.classList.add("clicked");
  button2.classList.remove("clicked");
  showWebsite();
});

button2.addEventListener("click", function () {
  this.classList.add("clicked");
  button1.classList.remove("clicked");
  showMobileApps();
});



function showsidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "block";
};
function hidesidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
};



function showWebsite() {
  website.style.display = "flex";
  mobileApps.style.display = "none";
}

function showMobileApps() {
  mobileApps.style.display = "flex";
  website.style.display = "none";
}

function handleContactButton() {
  const contactForm = document.querySelector(".contact-form");
  const bottomNav = document.querySelector(".bottom-nav");
  bottomNav.style.height = "900px";
  contactForm.style.display = "block";
}

const gototopbtn = document.querySelector(".backtotopbtn");

window.addEventListener('scroll', checkHeight);

function checkHeight() {
  if (window.scrollY > 200) {
    gototopbtn.style.display = "flex";
  } 
  else{
    gototopbtn.style.display = "none";
  }
}
gototopbtn.addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
})
