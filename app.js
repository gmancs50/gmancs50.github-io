document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
    for(const image of images){
        fetch("https://foodish-api.com/images/burger/")
        .then(response => response.json())
        .then(data => {
            image.src = data.message
            image.width = 1000;
            image.height = 1000;
    })
    }
})