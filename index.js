// 1 is rock 2 is paper 3 is scissors 

var count_one = 0; 
var count_two = 0; 


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

    if(rand1 == rand2){
        document.querySelector("h1").innerText = "IT IS A DRAW"; 
    }


    var win1 = false; 
    var win2 = false; 

    if(rand1 === 1 && rand2 == 2){
        win2 = true; 
        // document.querySelector("h1").innerHTML = "PLAYER 2 WON"; 
    }
    if(rand1 == 1 && rand2 == 3){
        win1 = true; 
        // document.querySelector("h1").innerHTML = "PLAYER 1 WON"; 
    }
    if(rand1 == 2 && rand2 == 1){
        win1 = true; 
        // document.querySelector("h1").innerHTML = "PLAYER 1 WON"; 
    }
    if(rand1 == 2 && rand2 == 3){
        win2 = true; 
        // document.querySelector("h1").innerHTML = "PLAYER 2 WON"; 
    }
    if(rand1 == 3 && rand2 == 1){
        win2 = true; 
        // document.querySelector("h1").innerHTML = "PLAYER 2 WON"; 
    }
    if(rand1 == 3 && rand2 == 2){
        win1 = true; 
        // document.querySelector("h1").innerHTML = "PLAYER 1 WON"; 
    }

    if(win1 == true){
        document.querySelector("h1").innerHTML = "PLAYER 1 WON"; 
        count_one++; 
    }
    if(win2 == true){
        document.querySelector("h1").innerHTML = "PLAYER 2 WON"; 
        count_two++;
    }
    
    console.log("First", count_one); 
    console.log("Second", count_two); 

}

function refreshPage(){
    window.location.reload();
} 

document.querySelector(".Playbtn").addEventListener("click", rpsgame); 
