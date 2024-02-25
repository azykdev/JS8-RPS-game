window.addEventListener('DOMContentLoaded', () => {

    const choice = document.querySelectorAll('.choice'),
      score = document.querySelector('#score'),
      modal = document.querySelector('.modal'),
      result = document.querySelector('#result'),
      restart = document.querySelector('#restart'),
      scoreBoard = {
        player: 0,
        computer: 0,
        draw: 0
      }


    // Play Game
    function play(event) {
        restart.style.display = 'inline-block'
        const playerChoice =event.target.id
        const computerChoice = getComputerChoice()
        const winner = getWinner(playerChoice, computerChoice)
        showWinner(winner, computerChoice)
    }

    // Get Compyuter choice
    function getComputerChoice() {
        let randomNum = parseInt(Math.random() * 4);

        if(randomNum <= 1){
            return 'rock';
        } else if (randomNum == 2) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }

    // Get Winner
    function getWinner(player, comp) {
        if (player === comp){
            return 'draw'
        } else if (player == 'rock') {
            if ( comp == 'paper') {
                return 'computer'
            } else {
                return "player"
            }
        } else if (player == 'paper') {
            if ( comp == 'scissors') {
                return 'computer'
            } else {
                return "player"
            }
        } else {
            if ( comp == 'rock') {
                return 'computer'
            } else {
                return "player"
            }
        }
    }

    // Show Winner
    function showWinner(winner, computerChoice) {
        if (winner == 'player') {
            scoreBoard.player++;
            result.innerHTML = `
                <h1 class='text-win'>You Win</h1>
                <i class='fas fa-hand-${computerChoice} fa-10x'></i>
                <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong> </p>
            `
        } else if (winner == 'computer') {
            scoreBoard.computer++;
            result.innerHTML = `
                <h1 class='text-lose'>You Lose</h1>
                <i class='fas fa-hand-${computerChoice} fa-10x'></i>
                <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong> </p>
            `
        } else{
            scoreBoard.draw++;
            result.innerHTML = `
                <h1 class='text-draw'>It's A Draw</h1>
                <i class='fas fa-hand-${computerChoice} fa-10x'></i>
                <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong> </p>
            `
        }

        score.innerHTML = `
            <p>Player: ${scoreBoard.player}</p>
            <p>Computer: ${scoreBoard.computer}</p>
            <p>Draw: ${scoreBoard.draw}</p>
        `
        modal.style.display = 'block'


    }

    // Restart Game
    function restartGame(){
        scoreBoard.player = 0
        scoreBoard.computer = 0
        scoreBoard.draw = 0
        score.innerHTML = `
            <p>Player: ${scoreBoard.player}</p>
            <p>Computer: ${scoreBoard.computer}</p>
            <p>Draw: ${scoreBoard.draw}</p>
        `
    }

    // Clear Modal
    function clearModal(event) {
        if (event.target == modal) {
            modal.style.display = 'none'
        }
    }


    // Event listener
    choice.forEach(item => item.addEventListener('click', play))
    window.addEventListener('click', clearModal)
    restart.addEventListener('click', restartGame)

})