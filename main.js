var colors = ['#540D6E', '#EE4266', '#8EEDF7', '#FFD23F', '#FF9900', '#0EAD69'];
const con = document.querySelector('.container');
const cells = document.querySelectorAll('.cell');
const blurBg = document.querySelector('.blurBg');
var c = 3;
var time = 1200 //1.2 second

var count = setInterval(counter, 1000);

function counter() {
  if (c == 0) {
    blurBg.style.display = 'none';
    startgame = setInterval(addColor, time);
    clearInterval(count);
  } else {
    document.querySelector('.counter').innerText = c;
    c--;
  }
}

function randomNo() {
  var ranNo = Math.floor(Math.random() * 10);
  if (ranNo > 5) {
    ranNo = 10 - ranNo;
  }
  return ranNo;
}

cells.forEach(cell => {
  let ranNo = randomNo();
  cell.style.backgroundColor = colors[ranNo];
});

function rmBor(a) {
  cells.forEach(cell => cell.style.border = 'none');
  cells[a].style.border = '3px solid #fff';
}

function addColor() {
  let ranNo = randomNo();
  con.style.backgroundColor = colors[ranNo];
}

var x = 0;
var s = 0;
var lifes = document.querySelector('.lifes');

con.addEventListener('click', () => {
  let conBg = con.style.backgroundColor;
  let cellBg = cells[x].style.backgroundColor;
  if (conBg == cellBg) {
    //alert('right Color');
    x++;
    time -= 200;
    clearInterval(startgame);
    startgame = setInterval(addColor, time);
  } else {
    //console.log('wrong color');
    x--;
    if (x < 0) x = 0;
    let a = 0;
    a++;
    let ls = (lifes.innerText).substr(a);
    lifes.innerText = ls;
    if (ls.length == 0) {
      alert('you lose the game');
      location.reload()
    }
  }
  if (x == 6) {
    alert('Yes!, you win !');
    //s = 0;
    x = 0;
    location.reload()
  };
  rmBor(x);
});