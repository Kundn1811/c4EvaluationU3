// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("news"));
console.log(data)


        
    let box = document.createElement("div");
    box.setAttribute("class", "news");
    let box2 = document.createElement("div");
    let image = document.createElement("img");
    image.src = data[0].urlToImage;
    let heading = document.createElement("h3");
    heading.innerText = data[0].title;
    let desc = document.createElement("p");
    desc.innerText = data[0].description;
    let content = document.createElement("p");
    content.innerText = data[0].content;
     box.append(image,heading,desc,content)
    document.getElementById("detailed_news").append(box)