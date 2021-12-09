let stories = document.getElementById("stories")
let art = document.getElementById("art")
let world = document.getElementById("world")
let home = document.getElementById("home")

let url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=bOHnFHjBpwC1rke1TIeFWWK7xxqYkwO5"
let homeStories =  fetch(url)
.then (response => response.json())
.then(data => {
    console.log(data)
    data.results.slice(0, 4).forEach(article => {
        console.log(article.title)
        const div = document.createElement("div")
        const img = document.createElement("img")
        img.src=article.multimedia[0].url
        console.log(img)
        div.appendChild(img)

        const a = document.createElement("a")
        a.setAttribute("href", article.url)
        a.innerHTML = article.title
        div.appendChild(a)

        const p = document.createElement("p")
        p.innerHTML = article.abstract
        div.appendChild(p)

        div.style.background = "#f5e2c8"
        a.style.color = "#18206f"
        div.style.borderRadius = "5px"

        stories.appendChild(div)
        
    })
})

home.addEventListener("click", function(){
let url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=bOHnFHjBpwC1rke1TIeFWWK7xxqYkwO5"
stories.innerHTML = " "
let homeStories =  fetch(url)
.then (response => response.json())
.then(data => {
    console.log(data)
    data.results.slice(0, 4).forEach(article => {
        console.log(article.title)
        const div = document.createElement("div")
        const img = document.createElement("img")
        img.src=article.multimedia[0].url
        console.log(img)
        div.appendChild(img)

        const a = document.createElement("a")
        a.setAttribute("href", article.url)
        a.innerHTML = article.title
        div.appendChild(a)

        const p = document.createElement("p")
        p.innerHTML = article.abstract
        div.appendChild(p)

        div.style.background = "#f5e2c8"
        a.style.color = "#18206f"
        div.style.borderRadius = "5px"
        

        stories.appendChild(div)
        
    })
})
})





world.addEventListener("click", function(){
let url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=bOHnFHjBpwC1rke1TIeFWWK7xxqYkwO5"

stories.innerHTML = " "

   fetch(url)
.then (response => response.json())
.then(data => {
    console.log(data)
    data.results.slice(0, 4).forEach(article => {
        console.log(article.title)
        const div = document.createElement("div")
        const img = document.createElement("img")
        img.src=article.multimedia[0].url
        console.log(img)
        div.appendChild(img)

        const a = document.createElement("a")
        a.setAttribute("href", article.url)
        a.innerHTML = article.title
        div.appendChild(a)

        const p = document.createElement("p")
        p.innerHTML = article.abstract
        div.appendChild(p)

        div.style.background = "#d88373"
        a.style.color = "#18206f"
        div.style.borderRadius = "5px"

        stories.appendChild(div)
        
    })
})

})
art.addEventListener("click", function(){

stories.innerHTML = " "

let url = "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=bOHnFHjBpwC1rke1TIeFWWK7xxqYkwO5"

    fetch(url)
.then (response => response.json())
.then(data => {
    console.log(data)
    data.results.slice(0, 4).forEach(article => {
        console.log(article.title)
        const div = document.createElement("div")
        const img = document.createElement("img")
        img.src=article.multimedia[0].url
        console.log(img)
        div.appendChild(img)

        const a = document.createElement("a")
        a.setAttribute("href", article.url)
        a.innerHTML = article.title
        div.appendChild(a)

        const p = document.createElement("p")
        p.innerHTML = article.abstract
        div.appendChild(p)

        div.style.background = "#DBD2E0"
        a.style.color = "#18206f"
        div.style.borderRadius = "5px"

        stories.appendChild(div)
        
    })
})

})



