const url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

async function GetData() {
    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        let data = await response.json(); 
        return data;
    } catch (e) {
        console.error("Error: ", e);
        return null; 
    }
}

let button = document.querySelector("#action");

button.addEventListener("click", async () => {
    let result = await GetData();
    if (result) 
        {
        if (result.type === "single") 
            {
            console.log(result.joke); 
            document.querySelector("#output").textContent = result.joke;

        } 
        else if (result.type === "twopart") 
            {
            console.log(`${result.setup} - ${result.delivery}`); 
            document.querySelector("#output").textContent = `${result.setup} - ${result.delivery}`;
        }
    } 
    else 
        {
        console.log("Failed to fetch joke");
    }
});