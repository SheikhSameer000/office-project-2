// const locationIs= document.querySelector("main")+ window.location.href;

// console.log("Lcoation is",locationIs)

function showsidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'block'
}
function hidesidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none'
}






const website = document.querySelector("#websites")
const mobileApps = document.querySelector("#mobile-apps")


const button1 = document.getElementById('togglebtn1');
const button2 = document.getElementById('togglebtn2');

button1.classList.add('clicked');

button1.addEventListener('click', function() {
    this.classList.add('clicked');
    button2.classList.remove('clicked');
});

button2.addEventListener('click', function() {
    this.classList.add('clicked');
    button1.classList.remove('clicked');
});




function showWebsite(){
    website.style.display = 'flex'
    if(website.style.display="flex"){
        mobileApps.style.display = 'none'
    }
}   
function showMobileApps(){
    mobileApps.style.display = 'flex'
    if(display="none"){
        website.style.display = 'none'
    }
    
}   


const contactBtn = document.querySelector(".contact-btn");

// contactBtn.addEventListener('click', function () {
    //     console.log("hello");
    // });
    
    
    function handleContactButton () {
    const contactForm = document.querySelector(".contact-form");
    const bottomNav = document.querySelector(".bottom-nav")
    bottomNav.style.height="900px"
    contactForm.style.display='block'
}

     