function giocata(row, col)
{
    if(chiHaVinto()!=undefined) 
    {
        alert('Partita finita');
        return
    }

    let x = '<div class="x">X</div>';
    let o = '<div class="o">O</div>';

    let cella = document.getElementById('grid').children[row].children[col];
    if( cella.childElementCount != 0 ) 
        alert('Posizione gà occupata.')
    else
    {
        let turno = document.getElementsByClassName('header')[0].lastElementChild;
        if( turno.classList.contains('o') )
        {
            cella.innerHTML = o;
            turno.outerHTML = x;
        }
        else
        {
            cella.innerHTML = x;
            turno.outerHTML = o;
        }
    }
    let winner = chiHaVinto();

    switch(winner)
    {
        case 'x':
        case 'o':
            document.getElementsByClassName('footer')[0].innerHTML = 'Ha vinto ' + winner.toUpperCase();   
            break;
        case 'pari':
            document.getElementsByClassName('footer')[0].innerHTML = 'Partita Pari';    
            break;
    }
}

function nuovaPartita()
{
    for( let e of document.getElementsByClassName('cella') ) e.innerHTML = "";
    let x = '<div class="x">X</div>';
    document.getElementsByClassName('header')[0].lastElementChild.outerHTML = x;
    document.getElementsByClassName('footer')[0].innerHTML = "";
}
