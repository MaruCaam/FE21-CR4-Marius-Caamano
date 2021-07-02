var Movies = JSON.parse(moviesList);
console.log(Movies);

for (let i = 0; i < Movies.length; i++) {
document.getElementById("Card-Container").innerHTML += 
`<div class="container-fluid" style= "width: 30%">
<div class="card my-3">
        <div class="flex-row flex-wrap">
            <div class="flex-col-lg-3 flex-col-md-6 flex-col-sm-12 flex-wrap">
                <img src=${Movies[i].image} class="img-fluid rounded-start" alt="...">
            </div>
            <div class="flex-col-lg-3 flex-col-md-6 flex-col-sm-12 flex-wrap">
                <div class="card-body">
                    <h5 class="card-title">${Movies[i].movieName}</h5>
                    <p class="card-text">${Movies[i].description}.</p>
                    <a href="#" class="btn btn-primary">Likes ${Movies[i].likes} &#128077;</a>
            </div>
        </div>
        </div >
</div >
</div>
</div>
`}







// document.getElementsByClassName(`"${Movies[i].likes}"`)[0].addEventListener("click", () => document.class.style.background = "grey");














// for (let i = 0; i < Movies.length; i++) {
//     document.getElementById("Card-Container").innerHTML +=
//         `<div class="card my-3" style="width: 30%;" >
//         <div class="row-g-3">
//             <div class="col-lg-4 col-md-6 col-sm-12">
//                 <img src=${Movies[i].image} class="img-fluid rounded-start" alt="...">
//             </div>
//             <div class="col-xl-4">
//                 <div class="card-body">
//                     <h5 class="card-title">${Movies[i].movieName}</h5>
//                     <p class="card-text">${Movies[i].description}.</p>
//                     <p class="card-text">${Movies[i].likes}</small></p>
//             </div>
//         </div>
//         </div >
// </div >`}




// for (let i = 0; i < Movies.length; i++) {
// document.getElementById("Card-Container").innerHTML +=`
// <div class="row">
// <div class="card my-3" style="width: 30%;" >
//             <div class="col-lg-4 col-md-6 col-sm-12">
//                 <img src=${Movies[i].image} class="img-fluid rounded-start" alt="...">
//             </div>
//     <div class="col-sm-6">
//         <div class="card">
//             <div class="card-body">
//                 <h5 class="card-title">${Movies[i].movieName}</h5>
//                 <p class="card-text"${Movies[i].description}</p>
//                 <a href="#" class="btn btn-primary"Likes ${Movies[i].likes}</a>
//             </div>
//         </div>
//     </div>`}






// document.write(Movies);