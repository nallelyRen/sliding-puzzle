
function change(cell1,cell2) {
    let auxC = document.getElementById(cell1).className;
    let text=document.getElementById(cell1).innerText;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell1).innerText=  document.getElementById(cell2).innerText;
    document.getElementById(cell2).className = auxC;
    document.getElementById(cell2).innerText = text;

  }

function clickSection(row,col){
    var cell=document.getElementById("cell"+row+col);
    var section = cell.className;    
    if (section!="section9") {   
        if (row>1) {
            if ( document.getElementById("cell"+(row-1)+col).className=="section9") {
             change("cell"+row+col,"cell"+(row-1)+col);
              return;
            }
          }
         if (row<3) {
            if ( document.getElementById("cell"+(row+1)+col).className=="section9") {
             change("cell"+row+col,"cell"+(row+1)+col);
              return;
            }
          } 
         if (col<3) {
           if ( document.getElementById("cell"+row+(col+1)).className=="section9") {
            change("cell"+row+col,"cell"+row+(col+1));
             return;
           }
         }
         if (col>1) {
           if ( document.getElementById("cell"+row+(col-1)).className=="section9") {
            change("cell"+row+col,"cell"+row+(col-1));
             return;
           }
         }
        
    }

}

function restart(){
let col;
let row;
    for(let i=1; i<4;i++){
        for(let j=1; j<4;j++){
            row= Math.floor(Math.random() * 3)+1;
            col=Math.floor(Math.random() * 3)+1;
            change("cell"+i+j,"cell"+row+col);
        } 
    }
}