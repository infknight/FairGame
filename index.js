// 1 is rock 2 is paper 3 is scissors 
function rpsgame(){
    var rand1 = Math.random(); 
    rand1 = Math.floor(rand1 * 3) + 1; 
    
    
    if(rand1 === 1){
        document.querySelector(".game1").setAttribute("src","images/rock.png");
    } else if(rand1 === 2){
        document.querySelector(".game1").setAttribute("src","images/paper.png");
    } else if(rand1 === 3){
        document.querySelector(".game1").setAttribute("src","images/scissors.png")
    }
    
    var rand2 = Math.random();
    rand2 = Math.floor(rand2 * 3) + 1; 
    
    if (rand2 === 1){
        document.querySelector(".game2").setAttribute("src","images/rock.png");
    } else if(rand2 === 2){
        document.querySelector(".game2").setAttribute("src","images/paper.png");
    } else if(rand2 === 3){
        document.querySelector(".game2").setAttribute("src","images/scissors.png")
    } 
}


function refreshPage(){
    window.location.reload();
} 


rpsgame(); 