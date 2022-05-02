// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();
import {newsSearch,append} from "./fetch.js";

let container = document.getElementById("results")
let search = (e)=>{
    if(e.key == "Enter"){
      
   let query =  document.getElementById("search_input").value ;
   let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`
    newsSearch(url).then((res)=>{
        append(res,container);
    })
   console.log(query);
   }
}

let query = localStorage.getItem("querykey")
let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`
newsSearch(url).then((res)=>{
    append(res,container);
})

 
  document.getElementById("search_input").addEventListener("keydown",search)
 