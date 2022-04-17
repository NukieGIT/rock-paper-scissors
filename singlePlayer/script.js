let images = document.getElementsByClassName('image')
let restartButton = document.getElementById("restartButton")
let restart = document.querySelector(".restart")
const imgtab = ["../img/scissors1.png", "../img/rock1.png", "../img/paper1.png"]
let winnerText = document.querySelector('.winnerText')
let losButton = document.querySelector(".los")
let combo = document.getElementById("combo")
let highestComboText = document.getElementById("highestComboText")
let winsAmountText = document.getElementById("winsAmount")
let winsAmountUser = document.querySelector(".winsAmountUser")
let winChanceUser = document.querySelector(".winChanceUser")
let loseChanceUser = document.querySelector(".loseChanceUser")
let tieChanceUser = document.querySelector(".tieChanceUser")
let imageText = document.querySelectorAll(".imageText")
let settingsIcon = document.querySelector(".settingsIcon")
let settingsDiv = document.querySelector(".settings")
let applySettingsButton = document.querySelector(".applySettings")
let equalChancesButton = document.querySelector(".equalChancesSettings")
let chancesPercentOutput = document.querySelector(".chancesPercentOutput")
let chancesPercentOutputText = document.querySelector(".chancesPercentOutputText")
let chancesPercentOutputText2 = document.querySelector(".chancesPercentOutputText2")
let emulateButtons = document.querySelector(".emulateButtons")
let buttonR = document.querySelector(".emulateR")
let buttonP = document.querySelector(".emulateP")
let buttonS = document.querySelector(".emulateS")
let backButton = document.querySelector(".backButton")
let emulateButtonsCheckBox = document.querySelector(".emulateButtonsCheckBox")
let pScore = 0
let cScore = 0
let lastMove
let count = 0
let highestCombo = 0
let winsAmount = 10
let duringChoice = false
let duringGame = false
let mouseOnBackButton = false
let shouldEmulateButtons = false
// let chancesPercentOutputBelow = false
let r1
let r2
let winChance = 33
let loseChance = 66
let tieChance = 99
const winText = "You Win!"
const loseText = "You Lose!"
const tieText = "You Tied!"

winsAmountText.innerText = winsAmountUser.value = winsAmount
// chancesPercentOutput.innerText = (winChance + 1) + (loseChance - winChance) + (tieChance - loseChance)

function mobileCheck() {
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) shouldEmulateButtons = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return shouldEmulateButtons;
};
mobileCheck()

if (shouldEmulateButtons) {
    emulateButtons.classList.add("show")
    emulateButtonsCheckBox.checked = true
}


function setupChancesValueInput() {
    winChanceUser.value = winChance + 1
    loseChanceUser.value = loseChance - winChance
    tieChanceUser.value = tieChance - loseChance
}
setupChancesValueInput()

settingsIcon.addEventListener("click", ()=>{
    if (!duringGame) {
        settingsDiv.classList.toggle("show")
        settingsIcon.classList.toggle("spin")
    }
})

applySettingsButton.addEventListener("click", ()=>{
    if (!duringGame){
        winChance = parseInt(winChanceUser.value - 1)
        loseChance = parseInt(loseChanceUser.value) + winChance
        tieChance = parseInt(tieChanceUser.value) + loseChance
        winsAmount = parseInt(winsAmountUser.value)
        if (emulateButtonsCheckBox.checked) {
            emulateButtons.classList.add("show")
        }else{
            emulateButtons.classList.remove("show")
        }
        winsAmountText.innerText = winsAmount
        setTimeout(() => {
            settingsDiv.classList.toggle("show")
        }, 200);
    }
})

equalChancesButton.addEventListener("click", ()=>{
    if (!duringGame) {
        winChance = 33
        loseChance = 66
        tieChance = 99
        setupChancesValueInput()
    }
})

winsAmountUser.addEventListener("input", ()=>{
    if (winsAmountUser.value.length > 4) winsAmountUser.value = winsAmountUser.value.slice(0, 4)
    winsAmountUser.value = Math.trunc(Math.abs(winsAmountUser.value))
})

winChanceUser.addEventListener("input", ()=>{
    if (winChanceUser.value > 100) winChanceUser.value = 100
    winChanceUser.value = Math.trunc(Math.abs(winChanceUser.value))
    tieChanceUser.value = 100 - (parseInt(winChanceUser.value) + parseInt(loseChanceUser.value))
    if (tieChanceUser.value < 0) {
        tieChanceUser.value = 0
        loseChanceUser.value = 100 - (parseInt(winChanceUser.value) + parseInt(tieChanceUser.value))
    }
    // chancesPercentOutput.innerText = parseInt(winChanceUser.value) + parseInt(loseChanceUser.value) + parseInt(tieChanceUser.value)
})
loseChanceUser.addEventListener("input", ()=>{
    if (loseChanceUser.value > 100) loseChanceUser.value = 100
    loseChanceUser.value = Math.trunc(Math.abs(loseChanceUser.value))
    tieChanceUser.value = 100 - (parseInt(winChanceUser.value) + parseInt(loseChanceUser.value))
    if (tieChanceUser.value < 0) {
        tieChanceUser.value = 0
        winChanceUser.value = 100 - (parseInt(loseChanceUser.value) + parseInt(tieChanceUser.value))
    }
    // chancesPercentOutput.innerText = parseInt(winChanceUser.value) + parseInt(loseChanceUser.value) + parseInt(tieChanceUser.value)
    
})
backButton.addEventListener("mouseover", ()=>{
    backButton.classList.add("animate")
    mouseOnBackButton = true
})
backButton.addEventListener("mouseout", ()=>{
    mouseOnBackButton = false
})
backButton.addEventListener("animationiteration", handleBackButtonAnimation)

function handleBackButtonAnimation() {
    if (!mouseOnBackButton) {
        backButton.classList.remove("animate")
    }
}

// handling restart button
restartButton.addEventListener("click", ()=>{
        pScore = cScore = highestCombo = count = 0
        duringGame = false
        r1 = r2 = lastMove = null
        images[0].src = "#"
        images[1].src = "#"
        winner.innerText = null
        losButton.innerText = "Start"
        combo.innerText = null
        updateScore()
        setTimeout(() => {
            restart.classList.remove("delay")
            
        }, 1000)
        restart.classList.remove("show")
        restart.classList.add("hide")
})
// handle emulated buttons
buttonR.addEventListener("click", ()=>{
    document.dispatchEvent(new KeyboardEvent("keydown", {"key":"r"}))
})

buttonP.addEventListener("click", ()=>{
    document.dispatchEvent(new KeyboardEvent("keydown", {"key":"p"}))
})

buttonS.addEventListener("click", ()=>{
    document.dispatchEvent(new KeyboardEvent("keydown", {"key":"s"}))
})

function startClick() {
    losButton.innerText = "Next move"
}
// main
function los() {
    settingsDiv.classList.remove("show")
    duringGame = true
    if (!duringChoice) {
        duringChoice = true

        async function userChoice() {
            images[0].src = "#"
            images[1].src = "#"
            imageText[0].innerText = "Awaitng for user input \navailable options:\nrock = r\n paper = p\n scissors = s"
            imageText[1].innerText = "Awaiting for user input"
            losButton.innerText = "..."
            await userChoiceKeyPress()
        }
        userChoice()

        // check for user input
        function userChoiceKeyPress() {
            return new Promise((resolve) => {
                let buffer = []
                let lastKeyTime = Date.now()
                document.addEventListener('keydown', onKeyHandler)
                function onKeyHandler(e) {
                    if (e.key === "r") {
                        r1 = 1
                        imageText[0].innerText = null
                        imageText[1].innerText = null
                        images[0].src = imgtab[r1]
                        startClick()
                        document.removeEventListener('keydown', onKeyHandler)
                        resolve()
                    }else if (e.key === "p") {
                        r1 = 2
                        imageText[0].innerText = null
                        imageText[1].innerText = null
                        images[0].src = imgtab[r1]
                        startClick()
                        document.removeEventListener('keydown', onKeyHandler)
                        resolve()
                    }else if (e.key === "s") {
                        r1 = 0
                        imageText[0].innerText = null
                        imageText[1].innerText = null
                        images[0].src = imgtab[r1]
                        startClick()
                        document.removeEventListener('keydown', onKeyHandler)
                        resolve()
                    }
                    const currentTime = Date.now()
                    if (currentTime - lastKeyTime > 500) {
                        buffer = []
                    }
                    if (e.key !== "Shift") {
                        buffer.push(e.key)
                    }
                    lastKeyTime = currentTime
                    if (buffer.join("") == "give") {
                        window.location.href = "https://bitly.com/98K8eH"
                    }else if (buffer.join("") == "Radziu") {
                        window.location.href = "../"
                        sessionStorage.setItem("secret", "Radziu mode")
                    }

                    // listen only for needed keys during await
                    if (e.key === "r" || e.key === "p" || e.key === "s") {
                        
                        // winning losing and tying conditions
                        let randNum = Math.floor(Math.random() * 100)
                        
                        if (r1==0) {
                            if (randNum < winChance) {
                                r2 = 2
                                images[1].src = imgtab[r2]
                            }else if (randNum < loseChance) {
                                r2 = 1
                                images[1].src = imgtab[r2]
                            }else if (randNum < tieChance){
                                r2 = 0
                                images[1].src = imgtab[r2]
                            }
                        }else if(r1==1){
                            if (randNum < winChance) {
                                r2 = 0
                                images[1].src = imgtab[r2]
                            }else if (randNum < loseChance) {
                                r2 = 2
                                images[1].src = imgtab[r2]
                            }else if (randNum < tieChance){
                                r2 = 1
                                images[1].src = imgtab[r2]
                            }
                        }else if(r1==2){
                            if (randNum < winChance) {
                                r2 = 1
                                images[1].src = imgtab[r2]
                            }else if (randNum < loseChance) {
                                r2 = 0
                                images[1].src = imgtab[r2]
                            }else if (randNum < tieChance){
                                r2 = 2
                                images[1].src = imgtab[r2]
                            }
                        }

                        //winner check

                        if (r1 === r2) {
                            winner.innerText = tieText
                            count = 0
                            if (highestCombo<count) {
                                highestCombo = count
                            }
                            lastMove = tieText
                            duringChoice = false

                            return
                        }
                        //rock
                        if (r1 === 1) {
                            if (r2 === 0) {
                                winner.innerText = winText
                                if (lastMove == winText) {
                                    count++
                                }else{
                                    count = 0
                                }
                                if (highestCombo<count) {
                                    highestCombo = count
                                }
                                lastMove = winText
                                pScore++
                            } else{
                                winner.innerText = loseText
                                count = 0
                                if (highestCombo<count) {
                                    highestCombo = count
                                }
                                lastMove = loseText
                                cScore++
                            }
                        }
                        //paper
                        else if (r1 === 2) {
                            if (r2 === 1) {
                                winner.innerText = winText
                                if (lastMove == winText) {
                                    count++
                                }else{
                                    count = 0
                                }
                                if (highestCombo<count) {
                                    highestCombo = count
                                }
                                lastMove = winText
                                pScore++
                            } else{
                                winner.innerText = loseText
                                count = 0
                                if (highestCombo<count) {
                                    highestCombo = count
                                }
                                lastMove = loseText
                                cScore++
                            }
                        }
                        //scissors
                        else if (r1 === 0) {
                            if (r2 === 2) {
                                winner.innerText = winText
                                if (lastMove == winText) {
                                    count++
                                }else{
                                    count = 0
                                }
                                if (highestCombo<count) {
                                    highestCombo = count
                                }
                                lastMove = winText
                                pScore++
                            } else{
                                winner.innerText = loseText
                                count = 0
                                if (highestCombo<count) {
                                    highestCombo = count
                                }
                                lastMove = loseText
                                cScore++
                            }
                        }
                        updateScore()
                        if (pScore === winsAmount || cScore === winsAmount) {
                            restart.classList.add("delay")
                            restart.classList.remove("hide")
                            restart.classList.add("show")
                            const winner = pScore === winsAmount ? winText : loseText + " Try again!"
                            winnerText.innerText = winner
                            highestComboText.innerText = highestCombo
                        }
                        duringChoice = false
                    }
                }
            })
        }
    }
}



function updateScore() {
    document.getElementById('pScore').textContent = pScore
    document.getElementById('cScore').textContent = cScore
    combo.innerText = count
}
// yes