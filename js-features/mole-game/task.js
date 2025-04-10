const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let deadCounter = 0;
let lostCounter = 0;
getHole = index => document.getElementById(`hole${ index }`);
for (let holeIndex = 1; holeIndex <= 9; holeIndex++) {
    let hole = getHole(holeIndex);
    hole.addEventListener('click', function () {
     
        if (hole.className.includes( 'hole_has-mole' )) {
            deadCounter++;
            dead.textContent = deadCounter;
        } else {
            lostCounter++;
            lost.textContent = lostCounter;
        }
        if(deadCounter === 10) {
            alert('Вы победили!');
            deadCounter = 0;
            lostCounter = 0;
            lost.textContent = lostCounter;
            dead.textContent = deadCounter;
        }
        if(lostCounter === 5) {
            alert('Вы проиграли!');
            deadCounter = 0;
            lostCounter = 0;
            lost.textContent = lostCounter;
            dead.textContent = deadCounter;
        }
    })
   
}
