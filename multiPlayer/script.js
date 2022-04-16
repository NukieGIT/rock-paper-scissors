let images = document.getElementsByClassName('image')
let restartButton = document.getElementById("restartButton")
let restart = document.querySelector(".restart")
const imgtab = ["../img/scissors1.png", "../img/rock1.png", "../img/paper1.png"]
let winnerText = document.querySelector('.winnerText')
let losButton = document.querySelector(".los")
let combo = document.getElementById("combo")
let combo2 = document.getElementById("combo2")
let winner = document.getElementById("winner")
let highestComboText = document.getElementById("highestComboText")
let highestComboText2 = document.getElementById("highestComboText2")
let winsAmountText = document.getElementById("winsAmount")
let winsAmountUser = document.querySelector(".winsAmountUser")
let imageText = document.querySelectorAll(".imageText")
let settingsIcon = document.querySelector(".settingsIcon")
let settingsDiv = document.querySelector(".settings")
let applySettingsButton = document.querySelector(".applySettings")
let p1Score = 0
let p2Score = 0
let lastMove
let count = 0
let count2 = 0
let highestCombo = 0
let highestCombo2 = 0
let winsAmount = 10
let duringChoice = false
let duringGame = false
let r1
let r2
const winText = "Player 1 Wins!"
const winText2 = "Player 2 Wins!"
const tieText = "Tie!"

winsAmountText.innerText = winsAmountUser.value = winsAmount



settingsIcon.addEventListener("click", ()=>{
    if (!duringGame) {
        settingsDiv.classList.toggle("show")
        settingsIcon.classList.toggle("spin")
    }
})

applySettingsButton.addEventListener("click", ()=>{
    if (!duringGame){
        winsAmount = parseInt(winsAmountUser.value)
        winsAmountText.innerText = winsAmount
        setTimeout(() => {
            settingsDiv.classList.toggle("show")
        }, 200);
    }
})


winsAmountUser.addEventListener("input", ()=>{
    if (winsAmountUser.value.length > 4) winsAmountUser.value = winsAmountUser.value.slice(0, 4)
    winsAmountUser.value = Math.trunc(Math.abs(winsAmountUser.value))
})


// handling restart button
restartButton.addEventListener("click", ()=>{
        p1Score = p2Score = highestCombo = highestCombo2 = count = count2 = 0
        duringGame = false
        r1 = r2 = lastMove = null
        images[0].src = "#"
        images[1].src = "#"
        winner.innerText = combo.innerText = combo2.innerText = null
        losButton.innerText = "Start"
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

function winnerCheck() {   
        //winner check

        if (r1 === r2) {
            winner.innerText = tieText
            count = count2 = 0
            if (highestCombo<count) {
                highestCombo = count
            }
            if (highestCombo2<count2) {
                highestCombo2 = count2
            }
            lastMove = tieText
            duringChoice = false

            return
        }
        //rock
        if (r1 === 1) {
            if (r2 === 0) {
                winner.innerText = winText
                count2 = 0
                if (lastMove == winText) {
                    count++
                }else{
                    count = 0
                }
                if (highestCombo<count) {
                    highestCombo = count
                }
                lastMove = winText
                p1Score++
            } else{
                winner.innerText = winText2
                count = 0
                if (lastMove == winText2) {
                    count2++
                }else{
                    count2 = 0
                }
                if (highestCombo2<count2) {
                    highestCombo2 = count2
                }
                lastMove = winText2
                p2Score++
            }
        }
        //paper
        else if (r1 === 2) {
            if (r2 === 1) {
                count2 = 0
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
                p1Score++
            } else{
                winner.innerText = winText2
                count = 0
                if (lastMove == winText2) {
                    count2++
                }else{
                    count2 = 0
                }
                if (highestCombo2<count2) {
                    highestCombo2 = count2
                }
                lastMove = winText2
                p2Score++
            }
        }
        //scissors
        else if (r1 === 0) {
            if (r2 === 2) {
                winner.innerText = winText
                count2 = 0
                if (lastMove == winText) {
                    count++
                }else{
                    count = 0
                }
                if (highestCombo<count) {
                    highestCombo = count
                }
                lastMove = winText
                p1Score++
            } else{
                winner.innerText = winText2
                count = 0
                if (lastMove == winText2) {
                    count2++
                }else{
                    count2 = 0
                }
                if (highestCombo2<count2) {
                    highestCombo2 = count2
                }
                lastMove = winText2
                p2Score++
            }
        }
        updateScore()
        if (p1Score === winsAmount || p2Score === winsAmount) {
            restart.classList.add("delay")
            restart.classList.remove("hide")
            restart.classList.add("show")
            const winner = p1Score === winsAmount ? winText : winText2
            winnerText.innerText = winner
            highestComboText.innerText = highestCombo
            highestComboText2.innerText = highestCombo2 
        }
        duringChoice = false
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
            imageText[1].innerText = "Waiting for player 1"
            losButton.innerText = "..."
            await player1()
            imageText[0].innerText = "User has selected an option"
            imageText[1].innerText = "Awaitng for user input \navailable options:\nrock = r\n paper = p\n scissors = s"
            await player2()
            imageText[0].innerText = null
            imageText[1].innerText = null
            images[0].src = imgtab[r1]
            images[1].src = imgtab[r2]
            winnerCheck()
            startClick()
        }
        userChoice()

        // check for user input
        function player1() {
            return new Promise((resolve) => {
                document.addEventListener('keydown', onKeyHandler)
                function onKeyHandler(e) {
                    if (e.key === "r") {
                        r1 = 1
                        document.removeEventListener('keydown', onKeyHandler)
                        resolve()
                    }else if (e.key === "p") {
                        r1 = 2
                        document.removeEventListener('keydown', onKeyHandler)
                        resolve()
                    }else if (e.key === "s") {
                        r1 = 0
                        document.removeEventListener('keydown', onKeyHandler)
                        resolve()
                    }

                }
            })
        }
        function player2() {
            return new Promise((resolve) => {
                document.addEventListener('keydown', onKeyHandler)
                function onKeyHandler(e) {
                    if (e.key === "r") {
                        r2 = 1
                        document.removeEventListener('keydown', onKeyHandler)
                        resolve()
                    }else if (e.key === "p") {
                        r2 = 2
                        document.removeEventListener('keydown', onKeyHandler)
                        resolve()
                    }else if (e.key === "s") {
                        r2 = 0
                        document.removeEventListener('keydown', onKeyHandler)
                        resolve()
                    }

                }
            })
        }
    }
}



function updateScore() {
    document.getElementById('p1Score').textContent = p1Score
    document.getElementById('p2Score').textContent = p2Score
    combo.innerText = count
    combo2.innerText = count2
}
// yes