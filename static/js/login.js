const inputs = document.querySelectorAll(".input")

function addFocus() {
    this.parentNode.parentNode.classList.add("focus") // input-box
}

function removeFocus() {
    if (this.value == "") {
        this.parentNode.parentNode.classList.remove("focus")
    }
}

inputs.forEach(i => {
    i.addEventListener("focus", addFocus)
    i.addEventListener("blur", removeFocus)
})

const sr = ScrollReveal({
    distance: '20px',
    duration: 2000,
    reset: true
})

sr.reveal(`section`, { interval: 200, origin: 'left' })
sr.reveal(`form`, { interval: 200, origin: 'right' })

document.getElementById("hidelogin").addEventListener("click", function () {
    const contentlogin = document.getElementById("form-login");
    const contentsignup = document.getElementById("form-signup");
    contentlogin.style.display = "none";
    contentsignup.style.display = "block";
  });

document.getElementById("hidesignup").addEventListener("click", function () {
    const contentlogin = document.getElementById("form-login");
    const contentsignup = document.getElementById("form-signup");
    contentlogin.style.display = "block";
    contentsignup.style.display = "none";
  });