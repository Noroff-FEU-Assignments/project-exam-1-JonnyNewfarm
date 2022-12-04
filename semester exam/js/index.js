const url = "https://www.rainydays.no/wp-json/wp/v2/posts?_embed";


const nextBtn = document.querySelector(".nextButton");
const prevBtn = document.querySelector(".previousButton");
const slider = document.querySelector(".slideshowdiv");

async function getBlogposts(url) {
    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        results.forEach(function (results) {
            slider.innerHTML += `<div class="slider-post">
                                <a href="details.html?id=${results.id}" class="slider-content">
                                 
                                 <img class="slider-image" src="${results._embedded["wp:featuredmedia"][0].source_url}" alt="food"></img>
                                </a>
                              </div>`;
        });

        const slideDivs = document.querySelectorAll(".slider-post");

        slideDivs.forEach(function (move, index) {
            move.style.left = `${index * 100}%`;
        });

        let number = 0;

        nextBtn.addEventListener("click", function () {
            if (window.innerWidth > 1300) {
                number = number + 2;

            } else {
                number++;
            }
            move();
        });

        prevBtn.addEventListener("click", function () {
            if (window.innerWidth > 600) {
                number = number - 2;

            } else {
                number--;
            }
            move();
        });

        function move() {
            if (number >= slideDivs.length) {
                number = 0;
            }

            if (number < 0) {
                if (window.innerWidth > 600) {
                    number = slideDivs.length - 3;
                }
                else {
                    number = slideDivs.length - 1;
                }
            }

            slideDivs.forEach(function (move) {
                move.style.transform = `translateX(-${number * 100}%)`;
            });
        }
    } catch (error) {
        console.log(error);
    }
}

getBlogposts(url);
