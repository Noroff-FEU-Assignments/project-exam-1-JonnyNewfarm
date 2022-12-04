
const url = "https://www.rainydays.no/wp-json/wp/v2/posts?_embed";
const moreBtn = document.querySelector(".view-btn");



const resultsContainer = document.querySelector(".results");

async function makeApiCall() {



    const response = await fetch(url);

    const results = await response.json();





    console.log(results);

    results.forEach(function (result) {
        resultsContainer.innerHTML += `<div class="card1"> <a href="details.html?id=${result.id}" class="card">

        <h4 class="cardh4">${result.title.rendered}</h4>
        
        

        <img class="post-image" src="${result._embedded["wp:featuredmedia"][0].source_url}" alt="food"></img>
    
    </a> </div>`;












    });






}

makeApiCall();

moreBtn.addEventListener("click", function () {
    makeApiCall();
});
