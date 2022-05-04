if (sessionStorage.getItem("secret")) {
    const Radziu = document.createElement("a")
    const p = document.createElement("p")
    p.innerText = sessionStorage.getItem("secret")
    Radziu.href = "https://radziu47.github.io/Asperia/"
    Radziu.appendChild(p)
    Radziu.className = "Radziu"
    document.querySelector(".main").appendChild(Radziu)

}