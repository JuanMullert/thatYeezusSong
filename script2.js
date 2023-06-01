let fantasySongs = ["Dark Fantasy", "Gorgeous", "Power", "All of the Lights", "Monster", "So Appalled", "Devil in a New Dress", "Runaway", "Hell of a Life", "Blame Game", "Lost in the World"];
let yeezusSongs = ["On Sight", "I Am a God", "Black Skinhead", "New Slaves"];
let pabloSongs = ["Ultralight Beam", "Father Stretch My Hands pt.1", "Pt.2", "Famous", "Feedback"];
let yeSongs = ["I Thought About Killing You", "Yikes", "All Mine", "No Mistakes", "Wouldn't Leave", "Ghost Town", "Violent Crimes"];
let jikSongs = ["Every Hour", "Selah", "Follow God", "Closed On Sunday", "On God", "Everything We Need", "Water", "God Is", "Hands On", "Use This Gospel", "Jesus is Lord"];
let dondaSongs = ["Donda Chant", "Jail", "God Breathed", "Off the Grid", "Hurricane", "Praise God", "Jonah", "Ok Ok", "Junya", "Believe What I Say", "24", "Moon", "Remote Control", "Heaven and Hell", "Keep My Spirit Alive", "Jesus Lord"];
let albumsTogether = fantasySongs.concat(yeezusSongs, pabloSongs, yeSongs, jikSongs, dondaSongs);

const yeezusInfo = {

    Artist: "Kanye West",
    Album: "Yeezus",
    Year: 2013,
    Genre: "Rap/Industrial Hip Hop",
    Songs: [
        {
            name: 'On Sight',
            producer: 'Daft Punk, Mike Dean, Kanye West',
            features: 'No features',
            lyrics: '',
        },

        {
            name: 'Black Skinhead',
            producer: 'Daft Punk, Kanye West, Gesaffelstein',
            features: 'No features',
            lyrics: ''
        },

        {
            name: 'I Am A God',
            producer: 'Daft Punk, Hudson Mohawke, Mike Dean, Kanye West',
            features: 'No features',
            lyrics: ''
        },

        {
            name: 'New Slaves',
            producer: 'Noah Goldstein, Travis Scott, Mike Dean, Kanye West, Arca',
            features: 'Frank Ocean',
            lyrics: ''
        },

        {
            name: 'Hold My Liquor',
            producer: 'Noah Goldstein, Arca, Mike Dean, Kanye West',
            features: 'Chief keef, Justin Vernon',
            lyrics: ''
        },

        {
            name: 'Im In It',
            producer: 'Noah Goldstein, Arca, Mike Dean, Kanye West',
            features: 'Assassin, Justin Vernon',
            lyrics: ''

        },

        {
            name: 'Blood On The Leaves',
            producer: 'Arca, Mike Dean, 88-Keys, Kanye West',
            features: 'No features',
            lyrics: ''
        },

        {
            name: 'Guilt Trip',
            producer: 'Travis Scott, Mike Dean, Kanye West',
            features: 'Kid Cudi, Popcaan',
            lyrics: ''
        },

        {
            name: 'Send It Up',
            producer: 'Daft Punk, Gesaffelstein, Arca, Mike Dean, Kanye West',
            features: 'King Louie, Benie Man',
            lyrics: ''
        },

        {
            name: 'Bound 2',
            producer: 'Noah Goldstein, Mike Dean, Kanye West, No I.D',
            features: 'Charlie Wilson',
            lyrics: ''
        }
    ],

    getSongInfo: function (trackTitle) {
        for (let songName of this.Songs) {
            if (songName.name.toLowerCase() === trackTitle.toLowerCase()) {
                return songName;
            }
        }
        return null;
    },

    getFeatureInfo: function (feats) {
        for (let feat of this.Songs) {
            if (feat.features.toLowerCase() === feats.toLowerCase()) {
                return feat;
            }
        }
        return null;
    },

    getLyrics: function (theLyrics) {
        for (let genius of this.Songs) {
            if (genius.lyrics.toLowerCase() === theLyrics.toLowerCase()) {
                return genius;
            }
        }
        return null;
    },

    
}

let previousSong = "";

function songSearch() {
    try {
        let targetInputField = document.getElementById("inputSong");
        let inputValue = targetInputField.value;
        let targetDiv = document.getElementById("dropDetails");
        let foundSong = false;

        if (inputValue === previousSong) {
            alert("Song already displayed.");
            return;
          }
      

        for (let track of yeezusInfo.Songs) {
            for (let ft of yeezusInfo.Songs) {
                if (inputValue !== null && inputValue === ft.features) {
                }
            }
            if (inputValue !== null && inputValue === track.name.toLowerCase()) {
                foundSong = true;
                previousSong = inputValue;

                targetDiv.innerHTML = "";

                let image = document.createElement("img");
                image.setAttribute("src", "../images/yeezusimg.png");
                let img = "../images/yeezusimg.png";
                image.append(img)

                let details = document.createElement("p");
                details.setAttribute("class", "details-2");
                let textDetails = document.createTextNode("Year: " + yeezusInfo.Year);
                details.appendChild(textDetails);

                let details2 = document.createElement("p");
                details2.setAttribute("class", "details-2")
                let textDetails2 = document.createTextNode("Album: " + yeezusInfo.Album);
                details2.append(textDetails2);

                let details3 = document.createElement("p");
                details3.setAttribute("class", "details-2")
                let textDetails3 = document.createTextNode("Genre: " + yeezusInfo.Genre);
                details3.append(textDetails3);

                let details4 = document.createElement("p");
                details4.setAttribute("class", "details-2")
                let textDetails4 = document.createTextNode("Producers: " + track.producer);
                details4.append(textDetails4);

                let details5 = document.createElement("p");
                details5.setAttribute("class", "details-2")
                let textDetails5 = document.createTextNode("Features: " + track.features);
                details5.append(textDetails5);

                let link = document.createElement("a");
                link.setAttribute("href", "https://genius.com/albums/Kanye-west/Yeezus")
                let textDetails6 = document.createTextNode("Lyrics" + track.lyrics);
                link.append(textDetails6);

                targetDiv.appendChild(details);
                targetDiv.appendChild(details2);
                targetDiv.appendChild(details3);
                targetDiv.appendChild(details4);
                targetDiv.appendChild(details5);
                targetDiv.appendChild(link);
                targetDiv.appendChild(image);

                break;

            } else if (inputValue.length === 0) {
                alert("please fill the field ")
                return false;
            }
        }
        if (!foundSong) {
            alert("Song not found")
        }
    }
    catch (err) {
        alert(err)

    }
}

btn1.onclick = songSearch; // function is called when button is clicked.

console.log(yeezusInfo)






