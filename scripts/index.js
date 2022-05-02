// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();

import {newsSearch,append} from "./fetch.js"

let container = document.getElementById("results");

newsSearch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`).then((res)=>{
    append(res,container);
})

let search = (e)=>{
    if(e.key == "Enter"){

        let query =  document.getElementById("search_input").value ;

//         let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`
//         newsSearch(url).then((res)=>{
//             append(res,container);
//             window.location.href ="search.html"
//     })
//    console.log(query);

localStorage.setItem("querykey",query)
window.location.href="search.html"

   }
}
let country_code = document.getElementById("sidebar").children;


function searchMain(){
    let query = this.id;
    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`
    newsSearch(url).then((res)=>{
        append(res,container);
    })
}


for(let el of country_code ){
   el.addEventListener("click",searchMain)
}

 document.getElementById("search_input").addEventListener("keydown",search)

