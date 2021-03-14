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
    }
    if(rand1 == 1 && rand2 == 3){
        win1 = true; 
    }
    if(rand1 == 2 && rand2 == 1){
        win1 = true; 
    }
    if(rand1 == 2 && rand2 == 3){
        win2 = true; 
    }
    if(rand1 == 3 && rand2 == 1){
        win2 = true; 
    }
    if(rand1 == 3 && rand2 == 2){
        win1 = true; 
    }

    if(win1 == true){
        document.querySelector("h1").innerHTML = "PLAYER 1 WON"; 
        count_one++; 
    }
    if(win2 == true){
        document.querySelector("h1").innerHTML = "PLAYER 2 WON"; 
        count_two++;
    }
    



    var total = count_one + count_two; 
    var one_percent = count_one / total; 
    var two_percent = count_two / total; 
    one_percent = Number.parseFloat(one_percent * 100).toPrecision(4); 
    two_percent = Number.parseFloat(two_percent * 100).toPrecision(4); 
    console.log("First", count_one, "  ", one_percent); 
    console.log("Second", count_two, "  ", two_percent); 
    var str_one = one_percent + "%"; 
    var str_two = two_percent + "%"; 


    // dont want to change it to NaN; 
    if(total === 0){

    } else{
        document.querySelectorAll(".calcprob")[0].innerHTML = str_one;
        document.querySelectorAll(".calcprob")[1].innerHTML = str_two;
    }


    if(str_one > str_two){
        document.querySelectorAll(".calcprob")[0].style.color="red";
        document.querySelectorAll(".calcprob")[1].style.color="black";
    } else if(str_one < str_two){
        document.querySelectorAll(".calcprob")[1].style.color="red";
        document.querySelectorAll(".calcprob")[0].style.color="black";
    } else if(str_one === str_two){
        document.querySelectorAll(".calcprob")[1].style.color="black";
        document.querySelectorAll(".calcprob")[0].style.color="black";
    }



}

function refreshPage(){
    window.location.reload();
} 

document.querySelector(".Playbtn").addEventListener("click", rpsgame); 
