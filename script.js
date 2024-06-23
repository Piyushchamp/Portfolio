const header = document.querySelector("header")

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}

window.onscroll = () => {
  menu.classList.remove('bx-x')
  navbar.classList.remove('active')
}

const sr = ScrollReveal({
  distance: '45px',
  duration: 2700,
  reset: true,
})

sr.reveal('.home-content', { delay: 350, origin: 'left' })
sr.reveal('.home-img', { delay: 350, origin: 'right' })
sr.reveal('.container', { delay: 50, origin: 'bottom' })

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link")
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


const submit = document.getElementById("contact-form");
const fullname = document.getElementById("name");
const msg = document.getElementById("msg");
const mail = document.getElementById("mail");

function sendmail() {
  const message = `Name:${fullname.value} <br> E-mail:${mail.value} <br> Message:${msg.value}`
  Email.send({
    SecureToken: "4e847e51-b87e-47b6-86b2-ff7b63ba0e43",
    To: 'ss6033630@gmail.com',
    From: "ss6033630@gmail.com",
    Subject: "Enquiry from portfolio",
    Body: message
  }).then(
    message => alert(message)
  );
}

submit.addEventListener('submit', (e) => {
  e.preventDefault();
  sendmail();

})