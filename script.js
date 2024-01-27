let player = 'x';

function play(celula) {

    if (celula.innerHTML == "") {
        celula.innerHTML = player;

        if (player == 'x') {
            player = 'o';
        } else {
            player = 'x'
        }
    }
    
}

function restart() {
    window.location.reload();  //to reload the page
}

