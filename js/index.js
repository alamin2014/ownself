const filterButton=document.querySelector("#filter-btns").children;

for(let i=0; i<filterButton.length; i++){
    filterButton[i].addEventListener("click",function(){
       for(let j=0; j<filterButton.length; j++){
           filterButton[j].classList.remove("active")
       }
        this.classList.add("active");
        let's 
    })
}