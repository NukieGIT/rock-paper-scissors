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
let imageText = document.querySelectorAll(".imageText")
let settingsIcon = document.querySelector(".settingsIcon")
let settingsDiv = document.querySelector(".settings")
let pScore = 0
let cScore = 0
let lastMove
let count = 0
let highestCombo = 0
let winsAmount = 10
let duringChoice = false
let r1
let r2
const winChance = .33
const loseChance = .66
const tieChance = 1
const winText = "You Win!"
const loseText = "You Lose!"
const tieText = "You Tied!"

settingsIcon.addEventListener("click", ()=>{
    settingsDiv.classList.toggle("show")
    settingsIcon.classList.toggle("spin")
    winsAmount = winsAmountUser.value
    console.log(winsAmountUser.value)
})

winsAmountText.innerText = winsAmount
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
        restart.classList.add("unshow")
})

function startClick() {
    losButton.innerText = "Next move"
}
// main
function los() {
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
                        let randNum = Math.random()
                        
                        if (r1==0) {
                            if (randNum < winChance) {
                                r2 = 2
                                images[1].src = imgtab[r2]
                            }else if (randNum < loseChance) {
                                r2 = 1
                                images[1].src = imgtab[r2]
                            }else if(randNum < tieChance){
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
                            }else if(randNum < tieChance){
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
                            }else if(randNum < tieChance){
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
                            restart.classList.remove("unshow")
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