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
let keyBindsButton = document.querySelector(".keyBinds")
let keyBindsEditorMenu = document.querySelector(".keyBindsEditorMenu")
let applyKeyBindSettings = document.querySelector(".applyKeyBindSettings")
let keyBindInputsLabels =  document.querySelectorAll(".keyBindInputsLabels")
let sameInputType = document.querySelector(".sameInputType")
let player1Input = document.querySelectorAll(".player1Input")
let player2Input = document.querySelectorAll(".player2Input")
let emulateButtons = document.querySelector(".emulateButtons")
let buttonR = document.querySelector(".emulateR")
let buttonP = document.querySelector(".emulateP")
let buttonS = document.querySelector(".emulateS")
let backButton = document.querySelector(".backButton")
let emulateButtonsCheckBox = document.querySelector(".emulateButtonsCheckBox")
let keyBinds = {
    player1: {
        Rock: "r",
        Paper: "p",
        Scissors: "s"
    },
    player2: {
        Rock: "r",
        Paper: "p",
        Scissors: "s"
    }
}
let p1Score = 0
let p2Score = 0
let lastMove
let count = 0
let count2 = 0
let highestCombo = 0
let highestCombo2 = 0
let winsAmount = 10
let p1Turn = true
let duringChoice = false
let duringGame = false
let mouseOnBackButton = false
let shouldEmulateButtons = false
let isEmulatingButtons = false
let regExTest = true
let duplicateKeyBinds = false
let itemIndex
let r1
let r2
const winText = "Player 1 Wins!"
const winText2 = "Player 2 Wins!"
const tieText = "Tie!"

window.onload = document.body.classList.remove("preloader")

winsAmountText.innerText = winsAmountUser.value = winsAmount

losButton.addEventListener("click", los)

function mobileCheck() {
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) shouldEmulateButtons = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return shouldEmulateButtons;
}
mobileCheck()

if (shouldEmulateButtons) {
    emulateButtons.classList.add("show")
    emulateButtonsCheckBox.checked = true
    isEmulatingButtons = true
}


settingsIcon.addEventListener("click", ()=>{
    if (!duringGame) {
        settingsDiv.classList.toggle("show")
        settingsIcon.classList.toggle("spin")
        winsAmountUser.value = winsAmount
        if (isEmulatingButtons) {
            emulateButtonsCheckBox.checked = true
        }else{
            emulateButtonsCheckBox.checked = false
        }
        
    }
})

applySettingsButton.addEventListener("click", ()=>{
    if (!duringGame){
        winsAmount = parseInt(winsAmountUser.value)
        if (emulateButtonsCheckBox.checked) {
            isEmulatingButtons = true
            emulateButtons.classList.add("show")
        }else{
            isEmulatingButtons = false
            emulateButtons.classList.remove("show")
        }
        winsAmountText.innerText = winsAmount
        setTimeout(() => {
            settingsDiv.classList.remove("show")
        }, 200)
    }
})

player1Input.forEach((element, key)=>{
    element.value = Object.values(keyBinds.player1)[key].toUpperCase()
})
player2Input.forEach((element, key)=>{
    element.value = Object.values(keyBinds.player2)[key].toUpperCase()
})

keyBindInputsLabels.forEach((element, key)=>{
    element.addEventListener("keydown", e=>{
        if (e.key == "Backspace" || e.key == " " || e.key == "Enter") {
            e.preventDefault()
        }
    })
    element.addEventListener("keypress", e=>{
        e.preventDefault()
        const regex = new RegExp(/[A-Za-z0-9'=,-./;=[\\\]`]+$/)
        if (regex.test(e.key)) {
            regExTest = true
            keyBindInputsLabels[key].value = e.key.toUpperCase()
        }
        else{
            regExTest = false
        }
        if (keyBindInputsLabels[key].value.length > 1) keyBindInputsLabels[key].value = keyBindInputsLabels[key].value.slice(0, 1)
        // checkDuplicates(key)
        checkDuplicatesv2()
    })
    element.addEventListener("change", ()=>{
        const regex = new RegExp(/[A-Za-z0-9'=,-./;=[\\\]`]+$/)
        if (regex.test(keyBindInputsLabels[key].value)) {
            regExTest = true
        }
        else{
            regExTest = false
            keyBindInputsLabels[key].value = null
        }
        if (keyBindInputsLabels[key].value.length > 1) keyBindInputsLabels[key].value = keyBindInputsLabels[key].value.slice(0, 1)
        // checkDuplicates(key)
        checkDuplicatesv2()
    })
})

function checkDuplicatesv2() {
    let player1Keys = []
    let player2Keys = []
    let p1DuplicatedKeys = []
    let p2DuplicatedKeys = []

    player1Input.forEach((element, index)=>{
        duplicateKeyBinds = false
        player1Input[index].classList.remove("red")
        player1Keys.push(element.value)
    })
    player2Input.forEach((element, index)=>{
        duplicateKeyBinds = false
        player2Input[index].classList.remove("red")
        player2Keys.push(element.value)
    })
    
    player1Keys.forEach((element, index) => {
        if (index != player1Keys.indexOf(element)) p1DuplicatedKeys.push(index, player1Keys.indexOf(element))
    })
    player2Keys.forEach((element, index) => {
        if (index != player2Keys.indexOf(element)) p2DuplicatedKeys.push(index, player2Keys.indexOf(element))
    })

    p1DuplicatedKeys.forEach((element, key)=>{
        player1Input[element].classList.add("red")
        duplicateKeyBinds = true
    })
    p2DuplicatedKeys.forEach((element, key)=>{
        player2Input[element].classList.add("red")
        duplicateKeyBinds = true
    })

    // console.log(p1DuplicatedKeys);
    // console.log(p2DuplicatedKeys);
}

// old duplicate key highlighter

// function checkDuplicates(key) {
//     let player1Keys = []
//     let player2Keys = []
//     let p1inputIndex = key == 0 ? 0 : key == 2 ? 1 : key == 4 ? 2 : null
//     let p2inputIndex = key == 1 ? 0 : key == 3 ? 1 : key == 5 ? 2 : null
//     keyBindInputsLabels[key].classList.contains("player1Input") ? player1CheckKeys() : player2CheckKeys()
    
//     function player1CheckKeys() {
//         player1Input.forEach((element, index)=>{
//             if (index == p1inputIndex) {player1Keys.push(null); return}
//             player1Keys.push(element.value)
//         })
//         player1Input.forEach(element=>element.classList.remove("red"))
//         if (player1Keys.some((value, index) => {itemIndex = index; return keyBindInputsLabels[key].value.includes(value)})){
//             keyBindInputsLabels[key].classList.add("red")
//             player1Input[itemIndex].classList.add("red")
//             duplicateKeyBinds = true
//         }else{
//             duplicateKeyBinds = false
//             keyBindInputsLabels[key].classList.remove("red")
//             player1Input[itemIndex].classList.remove("red")
//         }
//     }
//     function player2CheckKeys() {
//         player2Input.forEach((element, index)=>{
//             if (index == p2inputIndex) {player2Keys.push(null); return}
//             player2Keys.push(element.value)
//         })
//         player2Input.forEach(element=>element.classList.remove("red"))
//         if (player2Keys.some((value, index) => {itemIndex = index; return keyBindInputsLabels[key].value.includes(value)})){
//             duplicateKeyBinds = true
//             keyBindInputsLabels[key].classList.add("red")
//             player2Input[itemIndex].classList.add("red")
//         }else{
//             duplicateKeyBinds = false
//             keyBindInputsLabels[key].classList.remove("red")
//             player2Input[itemIndex].classList.remove("red")
//         }
//     }
//     console.log(player1Keys)
//     console.log(player2Keys)
// }


keyBindsButton.addEventListener("click", ()=>{
    window.addEventListener("keydown", escapeKeyHandler)
    keyBindsEditorMenu.showModal()
})

function escapeKeyHandler(e) {
    if (e.key == "Escape") {
        e.preventDefault()
    }
}


function Radziu() {
    const vals = Object.values(keyBinds.player1)
    const vals2 = Object.values(keyBinds.player2)
    const vals3 = [...vals , ...vals2]
    if (vals3.join("") == "radziu") {
        sessionStorage.setItem("secret", "Radziu mode")
    }
}


applyKeyBindSettings.addEventListener("click", ()=>{
    if (!duringGame && regExTest && !isNotEmpty() && !duplicateKeyBinds) {
        Object.keys(keyBinds.player1).forEach((key, index)=>{
            keyBinds.player1[key] = player1Input[index].value.toLowerCase()
        })
        Object.keys(keyBinds.player2).forEach((key, index)=>{
            keyBinds.player2[key] = player2Input[index].value.toLowerCase()
        })
        Radziu()
        window.removeEventListener("keydown", escapeKeyHandler)
        keyBindsEditorMenu.setAttribute("closing", "")
        keyBindsEditorMenu.addEventListener("animationend", ()=>{
            keyBindsEditorMenu.removeAttribute("closing")
            keyBindsEditorMenu.close()
        }, {once: true} )
    }
})

function isNotEmpty() {
    keyBindInputsLabels.forEach((element, key) => {
       if (element.value == null || element.value == "") {
           return false
       }
    })
}

winsAmountUser.addEventListener("input", ()=>{
    if (winsAmountUser.value.length > 4) winsAmountUser.value = winsAmountUser.value.slice(0, 4)
    winsAmountUser.value = Math.trunc(Math.abs(winsAmountUser.value))
})

backButton.addEventListener("mouseover", ()=>{
    backButton.classList.add("animate")
    mouseOnBackButton = true
})
backButton.addEventListener("mouseout", ()=>{
    mouseOnBackButton = false
})
backButton.addEventListener("animationiteration", ()=>{
    if (!mouseOnBackButton) {
        backButton.classList.remove("animate")
    }
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
    
// handle emulated buttons
buttonR.addEventListener("click", ()=>{
    const key = p1Turn ? keyBinds.player1.Rock : keyBinds.player2.Rock
    document.dispatchEvent(new KeyboardEvent("keydown", {"key":key}))
})

buttonP.addEventListener("click", ()=>{
    const key = p1Turn ? keyBinds.player1.Paper : keyBinds.player2.Paper
    document.dispatchEvent(new KeyboardEvent("keydown", {"key":key}))
})

buttonS.addEventListener("click", ()=>{
    const key = p1Turn ? keyBinds.player1.Scissors : keyBinds.player2.Scissors
    document.dispatchEvent(new KeyboardEvent("keydown", {"key":key}))
})

    
function startClick() {
    losButton.innerText = "Next move"
}

function winnerCheck() {   
        //winner check

        if (r1 === r2) {
            winner.innerText = tieText
            if (highestCombo<count) {
                highestCombo = count
            }
            if (highestCombo2<count2) {
                highestCombo2 = count2
            }
            count = count2 = 0
            lastMove = tieText
            duringChoice = false
            updateScore()

            return
        }
        //rock
        if (r1 === 1) {
            if (r2 === 0) {
                winner.innerText = winText
                lastMove = winText
                count2 = 0
                if (lastMove == winText) {
                    count++
                }else{
                    count = 0
                }
                if (highestCombo<count) {
                    highestCombo = count
                }
                p1Score++
            } else{
                winner.innerText = winText2
                lastMove = winText2
                count = 0
                if (lastMove == winText2) {
                    count2++
                }else{
                    count2 = 0
                }
                if (highestCombo2<count2) {
                    highestCombo2 = count2
                }
                p2Score++
            }
        }
        //paper
        else if (r1 === 2) {
            if (r2 === 1) {
                winner.innerText = winText
                lastMove = winText
                count2 = 0
                if (lastMove == winText) {
                    count++
                }else{
                    count = 0
                }
                if (highestCombo<count) {
                    highestCombo = count
                }
                p1Score++
            } else{
                winner.innerText = winText2
                lastMove = winText2
                count = 0
                if (lastMove == winText2) {
                    count2++
                }else{
                    count2 = 0
                }
                if (highestCombo2<count2) {
                    highestCombo2 = count2
                }
                p2Score++
            }
        }
        //scissors
        else if (r1 === 0) {
            if (r2 === 2) {
                winner.innerText = winText
                lastMove = winText
                count2 = 0
                if (lastMove == winText) {
                    count++
                }else{
                    count = 0
                }
                if (highestCombo<count) {
                    highestCombo = count
                }
                p1Score++
            } else{
                winner.innerText = winText2
                lastMove = winText2
                count = 0
                if (lastMove == winText2) {
                    count2++
                }else{
                    count2 = 0
                }
                if (highestCombo2<count2) {
                    highestCombo2 = count2
                }
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
function los(e) {
    settingsDiv.classList.remove("show")
    duringGame = true
    if (!duringChoice) {
        duringChoice = true

        async function userChoice() {
            images[0].src = "#"
            images[1].src = "#"
            imageText[0].innerText = `Awaitng for user input \navailable options:\nrock = ${keyBinds.player1.Rock}\n paper = ${keyBinds.player1.Paper}\n scissors = ${keyBinds.player1.Scissors}`
            imageText[1].innerText = "Waiting for player 1"
            losButton.innerText = "..."
            p1Turn = true
            await player1()
            imageText[0].innerText = "User has selected an option"
            imageText[1].innerText = `Awaitng for user input \navailable options:\nrock = ${keyBinds.player2.Rock}\n paper = ${keyBinds.player2.Paper}\n scissors = ${keyBinds.player2.Scissors}`
            p1Turn = false
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
                    if (e.key === keyBinds.player1.Rock) {
                        r1 = 1
                        document.removeEventListener('keydown', onKeyHandler)
                        resolve()
                    }else if (e.key === keyBinds.player1.Paper) {
                        r1 = 2
                        document.removeEventListener('keydown', onKeyHandler)
                        resolve()
                    }else if (e.key === keyBinds.player1.Scissors) {
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
                    if (e.key === keyBinds.player2.Rock) {
                        r2 = 1
                        document.removeEventListener('keydown', onKeyHandler)
                        resolve()
                    }else if (e.key === keyBinds.player2.Paper) {
                        r2 = 2
                        document.removeEventListener('keydown', onKeyHandler)
                        resolve()
                    }else if (e.key === keyBinds.player2.Scissors) {
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