// Rover Object Goes Here
// ======================

// ======================
console.log("MAPEADO DEL ROVER");
var grid = [
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null,null,null]
];

function RellenarMatriz(){
  for (i = 0; i <= 9; i++){
    for (f = 0; f <= 9; f++){
       grid[i][f]="_";
       //document.write(grid[i][f]);
    }
    //document.write("<br />");
  }
};
RellenarMatriz();

var Rover = {
  direction:"N",
  travelLog:"",
  x:0,
  y:0
}

var direction = Rover.direction;
var x = Rover.x;
var y = Rover.y;
var travelLog = Rover.travelLog;
grid [y][x]="X";
map();
console.log("coordenadas " + "y:"+ y +", x:"+ x );
//pruebas splice////////////////
function formatMap(){
    grid.splice(0, 9);
};
///////////////////////////////

function map(){
    grid.forEach(function(valor, y, x){
      console.log("--> " + y + " : " + valor);
    });
};

function turnLeft(a){
switch(a){
  case "N":
  direction="W";
  break;

  case "W":
  direction="S";  
  break;

  case "S":
  direction="E";  
  break;

  case "E":
  direction="N";  
  break;

  default:
  console.log("Intruduce una inicial de estas direcciones para moverte --> N,W,S,E");
}
  console.log("estas frente a: " + direction);
  console.log("Giraste a la izquierda!");
  return 0;
}
console.log("direccion:" + direction);
function turnRight(direccion){
  switch(direction){
      case "N":
      direction="E";  
      break;
    
      case "W":
      direction="N";  
      break;
    
      case "S":
      direction="W";  
      break;
    
      case "E":
      direction="S";  
      break;
    
      default:
      console.log("Intruduce dirección para moverte --> N,W,S,E");
    }
  console.log("estas frente a: " + direction);  
  console.log("Giraste a la derecha!");
  return 0;
}

function moveForward(direction){
  switch(direction){
      case "N":
      y-=1; 
      break;
    
      case "W":
      x-=1;  
      break;
    
      case "S":
      //x+=1;
      y+=1;  
      break;
    
      case "E":
      x+=1;  
      break;
    
      default:
      console.log("introduce dirección para moverte --> N,W,S,E");
    }
  console.log("has avanzado hacia adelante!");
}

function pulseKey(a){
  //formatea las posiciones no ocupadas por el rover a "o"
  grid [y][x]="o";
switch(a){
    case "f":
    console.log("direccion: " + direction);
    moveForward(direction);
    travelLog += a;
    break;
  
    case "r":
    turnRight(direction);
    travelLog += a;  
    break;
  
    case "l":
    turnLeft(direction);
    travelLog += a;
    break;
  
    default:
    console.log("Por favor introduce una de estas iniciales para moverte por el mapa:/n (f)orward, (r)ight, or (l)eft.");
  }
  console.log("coordenadas " + "y:"+ y +", x:"+ x );
  grid [y][x]="X";
console.log("KeyLogger: " + travelLog);
map();

}