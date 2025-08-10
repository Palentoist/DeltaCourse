async function getData()
{
    try
    {
        let response = await fetch("https://cataas.com/cat");
        if (!response.ok) throw new Error('Network response was not JSON');

        let data = await response.json();
        return data;
    }
    catch(error)
    {
        console.log(error);
        return null;
    }
};

let button = document.querySelector("#btn");
button.addEventListener("click" , async() => {
    try
    {
        let data = await getData();
        console.log(data);
    }
    catch(error)
    {
        console.log("Error in the Listner - " , error);
    }
})



