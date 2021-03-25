const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const generateJokes = async () => {
    try {
        const url = "https://icanhazdadjoke.com";
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        };
        const res = await fetch(url, setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch (error) {
        alert(`This error is ${error}`);
    };
};

jokeBtn.addEventListener('click', generateJokes);
generateJokes();