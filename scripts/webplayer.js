
console.log("yeah");
const title = document.querySelector('#player_titel');
const audio = document.querySelector('#player_audio');
const cover = document.querySelector('#player_cover');
const download = document.querySelector('#player_download');
const downloadlink = document.querySelector('#player_downloadlink')
const next = document.querySelector('#player_next');
const description = document.querySelector('#player_description')


const songs = ["alles flitst voorbij", "melodica in de bergen", "waar zoekt een mens als een mens alles heeft gevonden", "wat zie je als je in de spiegel kijkt"];

const songIndex = 0;

loadSong(songs[songIndex]);
console.log("hoi");

function loadSong(song) {
  title.innerText = song;
console.log(song)
  // CORRECT logging

  // CORRECT audio source
  audio.src = `Muziek/webplayer/muziek/${song}.wav`;

  // CORRECT background image
  cover.style.backgroundImage = `url("Muziek/webplayer/foto/${song}.jpg")`;

  // description.innerText = fetch(`http://localhost/Muziek/webplayer/tekst/${song}.txt`)
  //   .then(response => response.text())
  //   .then((data) => {
  //     console.log(data)
  //   })
downloadlink.href = `Muziek/webplayer/muziek/${song}.wav`;
loadTextFile(song);
}

next.addEventListener('click', () => {
newSong()
}
)

function newSong() {
// random I generenren 
  // nummertitelpakken uit lijst met i
  // loadsonguitvoeren met songtitel

const i = Math.floor(Math.random() * songs.length);
loadSong(songs[i]);
}

function loadTextFile(song) {
fetch(`https://localhost/Muziek/webplayer/tekst/${song}.txt`)
  .then(response => response.text())
  .then((data) => {
    console.log(data)
  })

  console.log(song)
}

