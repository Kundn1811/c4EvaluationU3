
let newsSearch = async (url)=>{
    let res = await fetch(url)

    let data = await res.json();
   return data.articles
}

function append(data, container) {
    container.innerHTML = null;
    data.forEach(el => {
        
        let box = document.createElement("div");
        box.setAttribute("class", "news");
        let box2 = document.createElement("div");
        let image = document.createElement("img");
        image.src = el.urlToImage;
        let heading = document.createElement("h3");
        heading.innerText = el.title;
        let desc = document.createElement("p");
        desc.innerText = el.description;

        box.addEventListener("click",()=>{
            let arr = [];
            arr.push(el);

            localStorage.setItem("news",JSON.stringify(arr))
            window.location.href = "news.html"
        })
         box2.append(heading, desc);
        box.append(image,box2);
        container.append(box);
    });


}

export {newsSearch,append}