if (sessionStorage.getItem("secret")) {
    const Radziu = document.createElement("a")
    const p = document.createElement("p")
    p.innerText = sessionStorage.getItem("secret")
    Radziu.href = "https://radziu47.github.io/Asperia/"
    Radziu.appendChild(p)
    Radziu.className = "Radziu"
    Radziu.addEventListener("click", e => {
        sessionStorage.setItem("eventTriggered", true)
    })
    document.querySelector(".main").appendChild(Radziu)
}

if (sessionStorage.getItem("code1")) {
    document.querySelector(".overlay").classList.add("show")
    document.title = 4829
    sessionStorage.removeItem("code1")
}
if (sessionStorage.getItem("code2")) {
    document.querySelector(".overlay").classList.add("show")
    document.title = 8207
    sessionStorage.removeItem("code2")
}
