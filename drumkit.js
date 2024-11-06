const container = document.querySelector("#container"); //select the container element
console.log(container);
const drumMap = {
  //Define each drum with a keyboard shortcut and position
  kick: { key: "w", position: { top: "100px", left: "200px" } },
  snare: { key: "q", position: { top: "170px", left: "60px" } },
  hihat: { key: "e", position: { top: "40px", left: "60px" } },
  openhat: { key: "r", position: { top: "340px", left: "270px" } },
  ride: { key: "u", position: { top: "100px", left: "460px" } },
  tom: { key: "y", position: { top: "170px", left: "410px" } },
  tink: { key: "t", position: { top: "100px", left: "340px" } },
  clap: { key: "i", position: { top: "300px", left: "280px" } },
};

//Create the drum kit image
const image = document.createElement("img"); //create an image element for the drum button
image.src = "./images/drum-kit.png"; //set the source of the drum kit image
image.style.height = "500px"; //set height for image
image.style.width = "600px"; //set width for image
image.style.position = "absolute"; //position the image absolutely
container.style.position = "relative"; //make the container relatively position

container.append(image); //append the image to the container
//create drum pads
for (let key in drumMap) {
  const drum = document.createElement("div"); //create a div for each drum button

  drum.classList.add("drum-button"); //add the drum button class for styling
  drum.style.position = "absolute"; //position the drum absolutely
  // Set absolute positioning
  drum.textContent = `${key.toUpperCase()} (${drumMap[key].key})`; //display the drum name and shortcut key
  drum.style.top = drumMap[key].position.top; //set vertical position from drumMap
  drum.style.left = drumMap[key].position.left; //set horizontal position from drumMap
  console.log(drum);

  drum.addEventListener("click", () => {
    playSound(key); //play sound when the drum button is clicked
  });

  container.append(drum); //append each drum button to the container
}

//Function to play sound
function playSound(key) {
  const audio = new Audio(`./sounds/${key}.wav`);
  //load the sound file based on key
  audio.play(); //play the audio
}

document.addEventListener("keydown", (event) => {
  //map keys to drum sounds
  const keyMapping = {
    w: "kick",
    q: "snare",
    e: "hihat",
    r: "openhat",
    u: "ride",
    t: "tink",
    i: "clap",
    y: "tom",
  };

  const soundKey = keyMapping[event.key]; //find the sound key for the pressed key
  if (soundKey) {
    playSound(soundKey); // play the associated sound if key is mapped
  }
});
