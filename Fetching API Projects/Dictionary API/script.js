let headWord = document.querySelector("#theWord");
words = 
[
"apple", "book", "cat", "dog", "elephant", "fish", "garden", "house", "ice", "juice",
"kite", "lamp", "moon", "night", "ocean", "pen", "queen", "river", "star", "tree",
"umbrella", "violet", "water", "xylophone", "yellow", "zebra", "air", "ball", "cake", "door",
"egg", "flower", "grass", "hill", "island", "jar", "key", "leaf", "mountain", "nest",
"owl", "paper", "quilt", "road", "sky", "table", "unicorn", "village", "wind", "yard",
"ant", "bird", "cloud", "dream", "earth", "fire", "glove", "hat", "ink", "joy",
"king", "light", "map", "note", "orange", "pearl", "question", "rain", "sun", "time",
"valley", "wave", "year", "zipper", "bear", "chair", "day", "eye", "forest", "gate",
"heart", "idea", "jacket", "knee", "love", "music", "name", "path", "rose", "ship",
"tiger", "voice", "wall", "youth", "bridge", "cup", "dawn", "field", "gift", "home"
]

async function game()
{
    try
    {
        let randomWord = Math.floor(Math.random() * words.length);
        let randomDicWord = words[randomWord];
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${randomDicWord}`;

        let response = await axios.get(url);
        headWord.innerHTML = response.data[0].word;

        console.log(response);
        return response;
    }
    catch(e)
    {
        console.log("Error" , e);
    }
}

game();
