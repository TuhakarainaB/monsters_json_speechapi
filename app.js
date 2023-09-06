// reference to our root div
const rootDiv = document.getElementById('root');
const monsterNav = document.getElementById('monsterNav');

// use fetch to load monsters.json file
// remember fetch has 2 promises (.then) and a catch.
fetch('monsters.json')
.then(response => response.json())
.then(
    // loop through all JSON objects and display in HTML
    monsters => {
        monsters.forEach(
            monster => {

                const monsterLink = document.createElement('a');
                monsterLink.href = "#";
                monsterLink.textContent = monster.monster;

                monsterLink.addEventListener(
                    'click', (e) => {
                        e.preventDefault(); // prevent browser default handling of links

                        // clear the rootdiv before displaying new monster details
                        rootDiv.innerHTML = "";

                        const name = document.createElement('h1');
                        name.textContent = monster.monster;
                        const location = document.createElement('p');
                        location.innerHTML = `<strong>Location: </strong>${monster.location}`;
                        const movies = document.createElement('p');
                        movies.innerHTML = `<strong>Movies: </strong>${monster.Movies}`;

                        rootDiv.appendChild(name);
                        rootDiv.appendChild(location);
                        rootDiv.appendChild(movies);

                        // Create a button for each JSON object
                        const button = document.createElement('button');
                        button.textContent = "Read Monster Name";

                        // Add an event listener to the button to read the desired content
                        button.addEventListener('click',
                        () => {
                            // tell browser content to read or speak
                            const read = new SpeechSynthesisUtterance(monster.monster);
                            // do the actual speaking...
                            window.speechSynthesis.speak(read);
                        }
                        );

                        // append button to root div
                        rootDiv.appendChild(button);
                    }
                );

                monsterNav.appendChild(monsterLink);
            }
        );
    }
)
.catch(error => console.error(error));