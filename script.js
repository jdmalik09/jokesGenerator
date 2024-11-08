const btnE = document.getElementById("btn1");
const btnH = document.getElementById("btn2");
const joke = document.getElementById("joke");

async function englishJokes() {
    try{
        const obj ={
            headers: {
                Accept: "application/json"
            }
        };
        joke.innerText = "Updating...";
        btnE.disabled = true;
        btnE.innerText = "Loading...";
        const url = 'https://icanhazdadjoke.com/'
        const res = await fetch(url, obj);
        const data = await res.json();

        btnE.disabled = false;
        btnE.innerText = " Get a Joke ";
        console.log(data);
        joke.innerText = data.joke;
    }
    catch(error){
        console.log(`this is error  ${error}`);
        p.innerText = "Couldn't fetch a joke! , Try again....";
    }


}

async function hindiJokes() {

    try{
        const obj ={
            headers: {
                Accept: "application/json"
            }
        }
        joke.innerText = "Updating...";
        btnH.disabled = true;
        btnH.innerText = "लोड...";
        const url = 'https://hindi-jokes-api.onrender.com/jokes?api_key=354ebc20fd695123d2ce5be7b7f9';
        const res = await fetch(url,obj);
        const data = await res.json();

        btnH.disabled = false;
        btnH.innerText = " दूसरे चुटकुले ";
        console.log(data);
        joke.innerText = data.jokeContent;
       }
       catch(error){
        console.log(`this is error ${error}`);
        p.innerText = "Couldn't fetch a joke! , Try again....";
       }
}

btnE.addEventListener("click", englishJokes);
btnH.addEventListener("click", hindiJokes);


