const text = [
  "Web Developer",
  "Quiz App Developer",
  "HTML • CSS • ",
  "Python Learner"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;
const typing = document.getElementById("typing");

function typeEffect() {
  const current = text[textIndex];

  if (!deleting) {
    typing.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typing.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      textIndex = (textIndex + 1) % text.length;
    }
  }

  setTimeout(typeEffect, deleting ? 40 : 90);
}

typeEffect();

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#00e5ff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    move: {
      enable: true,
      speed: 2
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00e5ff",
      opacity: 0.3,
      width: 1
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
});
function toggleSkills() {
  var x = document.getElementById("skillsBox");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}