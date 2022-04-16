let images = document.getElementsByClassName('image')
let restartButton = document.getElementById("restartButton")
let restart = document.querySelector(".restart")
const imgtab = ["img/scissors1.png", "img/rock1.png", "img/paper1.png"]
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
let pScore = 0
let cScore = 0
let lastMove
let count = 0
let highestCombo = 0
let winsAmount = 10
let duringChoice = false
let duringGame = false
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


// handling restart button
restartButton.addEventListener("click", ()=>{
        pScore = cScore = highestCombo = count = 0
        r1 = r2 = null
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
                            duringGame = false
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