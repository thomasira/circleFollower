window.addEventListener('DOMContentLoaded', function(){


    let elBody = document.querySelector('body'),
        elCircle = elBody.querySelector('[data-js-circle]'),  //div parent
        target = elCircle.querySelector('div');     //div enfant

    let size = 300; //pour la taille du cercle

    elCircle.style.width = `${size}px`; //assigner la taille au div parent 

    elBody.addEventListener('mousemove', function(e){

        /*
        e.pageX retourne la position en X de l'événement
        e.pageY retourne la position en Y de l'événement
        */

        //centrer le cercle.*1- voir commentaires
        elCircle.style.top = `${e.pageY-(size/2)}px`;
        elCircle.style.left = `${e.pageX-(size/2)}px`;

        //écouter le mouse down sur le div parent. *2-V.C
        elCircle.addEventListener('mousedown', function(){
            color = randomColor();
            target.style.backgroundColor = color;

            target.style.width = `${size}px`;
        })
        //écouter le mouse up sur l'enfant. *3-V.C
        target.addEventListener('mouseup', function(){
            target.style.width = '0px';
        })

    

    })

})

/**
 * 
 * @returns string 'rgb(0to255,0to255,0to255)'.
 * 
 * fonctionne pour toute requete couleur en rgb
 */
function randomColor(){

    return `rgb(${Math.floor(Math.random()*(256))},${Math.floor(Math.random()*(256))},${Math.floor(Math.random()*(256))})`;

}

/*
commentaires:

    Pour que l'effet de transition 0 to size fonctionne, il n'est pas possible de passer directement par l'enfant car le gest d'eve. ne peut pas écouter un élément qui n'existe pas(0px). C'est pourquoi le parent est nécessaire pour l'écoute et transmet ensuite le comportement souhaité à son kid.

    *1- le div parent est en position absolute dans le body. on peut donc lui assigner un top et left pour le positionner où on veut. Dans ce cas, j'utilise la position de l'événement(avec pageX et pageY) - size/2, pour le centrer sur la souris.

    *2- sur le div parent(qui suit maintenant la souris), on assigne un gest d'eve au 'mousedown'(comme un clic) et on altere les styles du kid(target). soit la couleur(random) et la largeur, défini par la variable size.

    *3- maintenant sur l'enfant(target), on assigne un gest d'eve 'mouseup' pour retirer les styles du 'mousedown'

*/
