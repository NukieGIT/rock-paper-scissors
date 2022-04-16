if (sessionStorage.getItem("secret")) {
    const Radziu = document.createElement("a")
    const p = document.createElement("p")
    p.innerText = sessionStorage.getItem("secret")
    Radziu.href = "#"
    Radziu.appendChild(p)
    Radziu.className = "Radziu"
    document.querySelector(".main").appendChild(Radziu)

}