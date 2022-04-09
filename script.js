console.log("This the first container.");
let box= document.getElementsByClassName('box');

let index=0;
change_display= function (){
    let interate=setInterval(() => {
        if(index>0 && index<box.length){
            box[index-1].style.display='none';
            box[index].style.display='flex';
            // console.log(index);
        }
        else if(index==box.length){
            box[index-1].style.display='none';
            box[0].style.display='flex';
            clearInterval(interate);
        }
        console.log(index);
        index++;
    }, 2000);   
}

next_display= function(){
    if(index<box.length-1){
        box[index+1].style.display='flex';
        box[index].style.display='none';
        index++;
    }
    else{
        box[0].style.display='flex';
        box[9].style.display='none';
        index=0;
    }
}
previous_display= function(){
    if(index==0){
        box[9].style.display='flex';
        box[0].style.display='none';
        index=9;
    }
    else{
        box[index].style.display='none';
        box[index-1].style.display='flex';
        index--;
    }
}

// console.log(box.length);