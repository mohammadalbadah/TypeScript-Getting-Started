function startGame() {
    const playerName: string = 'Draco';
    logPlayer(playerName);
    //starting a new game
    var messageElement = document.getElementById('messages');
    messageElement!.innerText = 'Welcome to MultiMath! Starting a new game..';
}

function logPlayer(name:string):void {
    console.log(`New game started for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);


