var MyBtn = document.getElementsByClassName('mybtn');
var index = 0;

function Button(n) {
    CurrentShowButton(index = n);
}

function CurrentShowButton(n) {
    for (let i = 0; i < MyBtn.length; i++) {
        MyBtn[i].className = MyBtn[i].className.replace(" Active", "");
    }

        MyBtn[n].className += " Active";
}

function List(){
    let myCard = document.querySelector(".business-cards");
    myCard.style.display = "block";
    
}

function Grid(){
    let myCard = document.querySelector(".business-cards");
    myCard.style.display = "grid";

}