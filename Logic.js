console.log("Wwlocome to JavaScript");

let bgMusic = new Audio("music.mp3")
let TurnAudio = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let turn = "X"
let isGameOver = false

const
changeTurn = () => {
    
    return turn === "X" ? "0" : "X"
}


const checkWin = () => {
    let boxText = document.getElementsByClassName("boxText")
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && boxText[e[0]].innerText !== '') {
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " WON"
            isGameOver = true
            document.querySelector(".ImgBox").getElementsByTagName('img')[0].style.width = "120px"
        }
        // let a = document.querySelector('.info').innerText
        // if (a === "X WON" || a === "0 WON") {
        //     document.querySelector(".ImgBox").getElementsByTagName('img')[0].style.width = "120px"
        //     document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won";
        //     // bgMusic.play()
        //     let boxes = document.getElementsByClassName("box")
        //     Array.from(boxes).forEach(element => {
        //         let boxText = element.querySelector(".boxText")
        //         element.addEventListener('click', () => {
        //             if (boxText.innerText === '') {
        //                 boxText.innerText = turn
        //                 turn = changeTurn()
        //                 TurnAudio.play()
        //                 checkWin()
        //                 if (!isGameOver) {

        //                 }
        //                 else {
        //                     document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        //                 }
        //             }
        //         })
        //     })
        // }
    })
}



let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText")
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn
            turn = changeTurn()
            TurnAudio.play()
            checkWin()
            if (isGameOver) {

            }
            else {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

document.querySelector("#reset").addEventListener("click", () => {
    let boxText = document.getElementsByClassName("boxText")
    Array.from(boxText).forEach(element => {
        element.innerText = ""
    })
    isGameOver = false
    turn = "X"
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    bgMusic.pause()
    document.querySelector(".ImgBox").getElementsByTagName('img')[0].style.width = "0px"
})
