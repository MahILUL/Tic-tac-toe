//Create Grid
let rowsNumber = 3;
const gridClick = false;


function createGrid() {
  const parent = document.querySelector('.parent');
  for (let y = 0; y <= 2; y++) {


    for (let x = 0; x <= 2; x++) {

      let grid = document.createElement('div');
      parent.appendChild(grid);
      let news = (parent.clientHeight / 3) + 'px';
      grid.style.width = news;

      grid.style.height = news;
      // grid.style.margin = '0';
      //grid.style.padding = '0';
      grid.style.border = 'border-box';
      grid.style.border = '1px solid black';
      grid.style.float = 'left';
      grid.style.boxSizing = 'border-box';
      grid.style.position = 'relative';
    }

  }
}

createGrid();

//Start the game 
function Player(name, marker) {
  this.name = name
  this.marker = marker
  this.sayName = function () {
    console.log(name)
  }
}

const player1 = new Player('Mahlet', 'blue')
const player2 = new Player('Mahi', 'red')
player1.sayName() // logs 'steve'
player2.sayName()
//1.Turn, check and update

document.getElementById("grid").addEventListener('click', function () {
  alert('hola!');
  //if(player.mahlet==='blue')
    //grid.style.textContent ='X';
    grid.style.backgroundColor = 'blue';

  
});
document.getElementById("grid1").addEventListener('click', function () {
  alert('hola!');
  //if(player.mahlet==='blue')
    //grid.style.textContent ='X';
    grid.style.backgroundColor = 'red';

  
});
document.getElementById("grid2").addEventListener('click', function () {
  alert('hola!');
  //if(player.mahlet==='blue')
    //grid.style.textContent ='X';
    grid.style.backgroundColor = 'yellow';

  
});



/*createGrid(3);

const resetGrid = () => {

document.getElementById('parent').innerHTML = '';

rowsNumber = prompt(3);

createGrid(rowsNumber);
}

const changeStatus = () => {

   gridClick = !gridClick;
}

*/

