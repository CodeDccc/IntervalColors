let btn = document.getElementById('btn');
btn.addEventListener('click', flip);

let num = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

let bg1 = document.querySelector('.sec1');
let bg2 = document.querySelector('.sec2');
let bg3 = document.querySelector('.sec3');
let bg4 = document.querySelector('.sec4');
let bg5 = document.querySelector('.sec5');
let bg6 = document.querySelector('.sec6');
let bg7 = document.querySelector('.sec7');


function flip(){

    let colors1 = '#';
    let colors2 = '#';
    let colors3 = '#';
    let colors4 = '#';
    let colors5 = '#';
    let colors6 = '#';
    let colors7 = '#';

   

    for(let i = 0; i<6; i++){
        let ran = Math.floor(Math.random()*num.length);
        colors1+=num[ran];
    }
        bg1.style.backgroundColor = colors1
    
        

    for(let i = 0; i<6; i++){
        let ran = Math.floor(Math.random()*num.length);
        colors2+=num[ran];
    }
            
        setTimeout(function(){ bg2.style.backgroundColor = colors2}, 500);

    for(let i = 0; i<6; i++){
        let ran = Math.floor(Math.random()*num.length);
        colors3+=num[ran];
    }
           
        setTimeout(function(){ bg3.style.backgroundColor = colors3}, 1000);

    for(let i = 0; i<6; i++){
        let ran = Math.floor(Math.random()*num.length);
        colors4+=num[ran];
    }
            
        setTimeout(function(){ bg4.style.backgroundColor = colors4}, 1500);

    for(let i = 0; i<6; i++){
        let ran = Math.floor(Math.random()*num.length);
        colors5+=num[ran];
    }
            
        setTimeout(function(){ bg5.style.backgroundColor = colors5}, 2000);

    for(let i = 0; i<6; i++){
        let ran = Math.floor(Math.random()*num.length);
        colors6+=num[ran];
    }
        
        setTimeout(function(){ bg6.style.backgroundColor = colors6}, 2500);

    for(let i = 0; i<6; i++){
        let ran = Math.floor(Math.random()*num.length);
        colors7+=num[ran];
    }
            
        setTimeout(function(){ bg7.style.backgroundColor = colors7}, 3000);
        clearInterval();
}
