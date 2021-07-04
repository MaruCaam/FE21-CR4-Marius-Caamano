var Movies = JSON.parse(moviesList);


//First Loop Card Output
for (let x = 0; x < Movies.length; x++) {
    document.getElementById("Card-Container").innerHTML += 
    `
    <div class="card my-3 col-lg-4 col-md-6 col-sm-12">
            
                <div class="col">
                    <img src=${Movies[x].image} class="img w-50 m-4 rounded-start">
                </div>
                <div class="col">
                    <div class="card-body">
                        <h5 class="card-title h2">${Movies[x].movieName}</h5>
                        <p class="card-text">${Movies[x].description}.</p>
    
                        <div class="btn btn-dark likes">Likes <span class="vote">${Movies[x].likes}</span> &#128077;</div>
                </div>
            </div>
            </div>
    `}


//Like +1 Loop and Function
    var buttons = document.getElementsByClassName("vote");
    var likes = document.getElementsByClassName("likes");
    for (let i = 0; i < likes.length; i++) {
      likes[i].addEventListener("click", function () {
        vote(i);
      });
    }


//Vote-Like Function    
    function vote(index) {
      var newNr = Number(buttons[index].innerHTML) + 1;
      buttons[index].innerHTML = newNr;
      Movies[index].likes = newNr;}
    



//Sorting Functions
var sortingFunc = document.getElementsByClassName("sorting-btn"); 
sortingFunc[0].addEventListener("click", function () {
    sort();});






 //Second Sorted Output after likes   
function sort() {

 document.getElementById("Card-Container").innerHTML = "";

    Movies.sort(function (a, b) {
      return b.likes - a.likes;
    })
    

    for (let x = 0; x < Movies.length; x++) {
        document.getElementById("Card-Container").innerHTML += 
        `<div class="card my-3 col-lg-4 col-md-6 col-sm-12">
                
                    <div class="col">
                        <img src=${Movies[x].image} class="img w-50 m-4 rounded-start">
                    </div>
                    <div class="col">
                        <div class="card-body">
                            <h5 class="card-title h2">${Movies[x].movieName}</h5>
                            <p class="card-text">${Movies[x].description}.</p>
        
                            <div class="btn btn-dark likes">Likes <span class="vote">${Movies[x].likes}</span> &#128077;</div>
                    </div>
                </div>
                </div>
        `}
      
    

        var buttons = document.getElementsByClassName("vote");
        var likes = document.getElementsByClassName("likes");
        for (let i = 0; i < likes.length; i++) {
          likes[i].addEventListener("click", function () {
            vote(i);
          });
        }


        function vote(index) {
          var newNr = Number(buttons[index].innerHTML) + 1;
          buttons[index].innerHTML = newNr;
          Movies[index].likes = newNr;}

}


 


















//HORRENDOUS TRIALS AND ERROS  
 
// function removeItem(){
//     getElementsByClassName("Card-Container")
// }

// removeItem()

// function addRemoveToList(){

//     var items = document.getElementsByClassName("Card-Container");

//     for ( let i in items ){

//         items[i].addEventListener("click",removeItem);

//     }

// }





// document.getElementsByClassName("sorting-btn").addEventListener("click", sort);


    // function z (){ removeObj();};


    // function removeObj(){
    //     var myObj = document.getElementsByClassName("Card-Container");
    //     myObj.remove();
        
    //     return 
        
    //     }



    // function removeObj(abc){
    //     var myObj = document.getElementsByClassName("card");
    //     myObj[abc].remove();

               
    //     return 
        
        
    // }

































