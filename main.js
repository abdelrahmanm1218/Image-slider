//get slider items
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
//get number of slides
var slidesCount = sliderImages.length;
//set starting slide
var currentSlide = 1;
//slide number Element
let slideNumberElement = document.getElementById("slide-number");
//previous & next button
let previous = document.getElementById("prev");
let next = document.getElementById("next");

//handle click o previous and next buttons
next.onclick = nextSlide;
previous.onclick = prevSlide;

//create main ul element 
let paginationUl = document.createElement("ul");
// set id to ul
paginationUl.setAttribute('id', 'pagination-ul');
//create list [li] items inside ul
for(let i=1;i<=slidesCount;i++) {
    let paginationLi = document.createElement("li");
    //set id to list item
    paginationLi.setAttribute('data-index', i);
    //set item content
    paginationLi.appendChild(document.createTextNode(i));
    //append list in main UL
    paginationUl.appendChild(paginationLi);
}
//append ul to indicators span
document.getElementById("indicators").appendChild(paginationUl);

//get the new created ul 
let paginationCreatedUl = document.getElementById("pagination-ul");
//create array containing Lis
let paginationLiArray = Array.from(document.querySelectorAll("#pagination-ul li"));

//Loop through all bullets items
for(let i = 0; i<paginationLiArray.length;i++){
    paginationLiArray[i].onclick = ()=> {
        currentSlide = parseInt(paginationLiArray[i].getAttribute("data-index"));
        checker();
    }
}

//trigger the checker function
checker();

//function next slide
function nextSlide(){
    if(next.classList.contains("disabled")) {
        //do nothing
        return false;
    }else {
        //go to next
        currentSlide++;
        checker();
    }
}
//function previous slide
function prevSlide(){
    if(previous.classList.contains("disabled")) {
        //do nothing
        return false;
    }else {
        //go to previous
        currentSlide--;
        checker();
    }
}
//checker function
function checker(){
    //set the slide number
    slideNumberElement.textContent = `slide #${currentSlide} of ${slidesCount}`;

    removeAllActive();
    //set active class on current slide
    sliderImages[currentSlide-1].classList.add("active");
    //set active class on current pagination
    paginationCreatedUl.children[currentSlide-1].classList.add("active");
    //check if the current element is the first
    (currentSlide ==1)? previous.classList.add("disabled") : previous.classList.remove("disabled");
    //check if the current element is the last
    (currentSlide ==slidesCount)? next.classList.add("disabled") : next.classList.remove("disabled") ;
}

//remove active active classes from images and ul li
function removeAllActive(){
    //loop throug images
    sliderImages.forEach((img)=> img.classList.remove("active"));
    // loop through pagination bullets or ul li
    paginationLiArray.forEach((li)=>li.classList.remove("active"));
}
