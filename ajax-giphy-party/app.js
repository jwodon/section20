const searchButton = document.getElementById('searchButton');
const removeButton = document.getElementById('removeButton');
const searchBar = document.getElementById('searchBar');
const gifContainer = document.getElementById('container');


async function addGif(url){
    let newImg = document.createElement("img");
    newImg.src = url;
    newImg.class = "w-100";
    let newCol = document.createElement('div');
    newCol.class = "col-md-4 col-12 mb-4";
    newCol.appendChild(newImg);
    gifContainer.append(newCol);
}

searchButton.addEventListener('click', async function(e){
    e.preventDefault();

    let searchBarValue = document.getElementById('searchBar').value;
    let response = await axios.get("https://api.giphy.com/v1/gifs/search", { 
        params: {
            q: searchBarValue, 
            api_key: 'KlhzgGs3wSahqx08vQMElOTLLZmd0gns'
        }
    });
    let randomNum = Math.floor(Math.random() * 51);
    let gifUrl = response.data.data[randomNum].images.original.url;

    addGif(gifUrl);
    searchBarValue = "";
});

removeButton.addEventListener('click', function(){
    gifContainer.innerHTML = '';
})


