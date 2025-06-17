const accesskey="7suDnznFCUhBtTpYEQwyiBCt2MomjliHsenQ450YIlE";
const searchForm=document.getElementById("search_form");
const searchBar= document.getElementById("search_bar");
const searchResult= document.getElementById("search_result");
const showButton=document.getElementById("show-more-btn");

let keyword="";
let page=1;
 async function searchimages(){
    keyword=searchBar.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`; 

    const response= await fetch(url);
    const data=await response.json();

    // checks if the page is 1
    if(page===1){
        searchResult.innerHTML="";
    }

    const results= data.results;

    // this function is for displaying search images on window. 
    results.map((result)=>{
    const image= document.createElement("img");
    
    // urls.small is taken from api where different sizes of images are present.
    image.src = result.urls.small;
    const imagelink=document.createElement("a");
    imagelink.href= result.links.html;

    // code for showing images on new tab.
    imagelink.target="_blank";

    // code for putting images inside a tag (link)
    imagelink.appendChild(image);

    // code for putting all a tags(links) inside searchresult div.
    searchResult.appendChild(imagelink);
    }) 
    // code for display showmore button.
    showButton.style.display="block";
 }
// submit event 
 searchForm.addEventListener("submit",(e)=>{
   e.preventDefault();
   page=1;

    //calling searchimages function
      searchimages();
 });

//  click event for load more images by clicking showmorebtn.
showButton.addEventListener("click",()=>{
    page++;
    searchimages();
})