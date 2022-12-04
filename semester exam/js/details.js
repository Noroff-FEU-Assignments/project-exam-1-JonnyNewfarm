const detailContainer = document.querySelector(".post-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");



console.log(id);


const url = `https://www.rainydays.no/wp-json/wp/v2/posts/${id}?_embed`;

console.log(url);

async function fetchPost() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);

    }
    catch (error) {
        console.log(error);

    }

}

fetchPost();

function createHtml(details) {
    detailContainer.innerHTML = `<h1 class="details-title">${details.title.rendered}</h1>

    <img src="${details._embedded["wp:featuredmedia"][0].source_url}" 
	onclick="onClick(this)" class="hover" alt="food">
  </div>

    
                                
                                    
                                <div class="details-content">${details.content.rendered}</div>
                            `;
}


function onClick(popUP) {
    document.getElementById("modalid").src = popUP.src;
    document.getElementById("modaldiv").style.display = "block";
}









