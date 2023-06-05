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
            listen: '', 
            listen2: ''
        },

        {
            name: 'Black Skinhead',
            producer: 'Daft Punk, Kanye West, Gesaffelstein',
            features: 'No features',
            lyrics: '',
            listen: '',
            listen2: ''
        },

        {
            name: 'I Am A God',
            producer: 'Daft Punk, Hudson Mohawke, Mike Dean, Kanye West',
            features: 'No features',
            lyrics: '',
            listen: '',
            listen2: ''

        },

        {
            name: 'New Slaves',
            producer: 'Noah Goldstein, Travis Scott, Mike Dean, Kanye West, Arca',
            features: 'Frank Ocean',
            lyrics: '',
            listen: '',
            listen2: ''
        },

        {
            name: 'Hold My Liquor',
            producer: 'Noah Goldstein, Arca, Mike Dean, Kanye West',
            features: 'Chief keef, Justin Vernon',
            lyrics: '',
            listen: '',
            listen2: ''
        },

        {
            name: 'Im In It',
            producer: 'Noah Goldstein, Arca, Mike Dean, Kanye West',
            features: 'Assassin, Justin Vernon',
            lyrics: '',
            listen: '',
            listen2: ''

        },

        {
            name: 'Blood On The Leaves',
            producer: 'Arca, Mike Dean, 88-Keys, Kanye West',
            features: 'No features',
            lyrics: '',
            listen: '',
            listen2: ''
        },

        {
            name: 'Guilt Trip',
            producer: 'Travis Scott, Mike Dean, Kanye West',
            features: 'Kid Cudi, Popcaan',
            lyrics: '',
            listen: '',
            listen2: ''
        },

        {
            name: 'Send It Up',
            producer: 'Daft Punk, Gesaffelstein, Arca, Mike Dean, Kanye West',
            features: 'King Louie, Benie Man',
            lyrics: '',
            listen: '',
            listen2: ''
        },

        {
            name: 'Bound 2',
            producer: 'Noah Goldstein, Mike Dean, Kanye West, No I.D',
            features: 'Charlie Wilson',
            lyrics: '',
            listen: '',
            listen2: ''
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

    getListen: function (theListen) {
        for (let listenSong of this.Songs) {
            if (listenSong.listen.toLowerCase() === theListen.toLowerCase()) {
                return listenSong;
            }
        }
        return null;
    },

    getListen2: function (theListen2) {
        for (let listenSong2 of this.Songs) {
            if (listenSong2.listen2.toLowerCase() === theListen2.toLowerCase()) {
                return listenSong2;
            }
        }
        return null;
    }


    
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
                image.setAttribute("src", "./images/yeeee.png");
                let img = "./images/yeeee.png";
                image.append(img)

                let details = document.createElement("p");
                details.setAttribute("class", "details-2");
                let textDetails = document.createTextNode("Year: " + yeezusInfo.Year);
                details.appendChild(textDetails);

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

                let linkLyrics = document.createElement("a");
                linkLyrics.setAttribute("href", "https://genius.com/albums/Kanye-west/Yeezus")
                let textDetails6 = document.createTextNode("Lyrics " + track.lyrics);
                linkLyrics.append(textDetails6);

                let listen2Me = document.createElement("a");
                listen2Me.setAttribute("href", "https://music.apple.com/us/album/yeezus/1440873068")
                let textDetails7 = document.createTextNode(" Apple Music" + track.listen);
                listen2Me.append(textDetails7);

                let listen2Me2 = document.createElement("a");
                listen2Me2.setAttribute("href", "https://open.spotify.com/album/7D2NdGvBHIavgLhmcwhluK?si=K2OPCUHzQ3aViORBAC1_4A")
                let textDetails8 = document.createTextNode(" Spotify" + track.listen2);
                listen2Me2.append(textDetails8);

                targetDiv.appendChild(details);
                targetDiv.appendChild(details3);
                targetDiv.appendChild(details4);
                targetDiv.appendChild(details5);
                targetDiv.appendChild(linkLyrics);
                targetDiv.appendChild(listen2Me);
                targetDiv.appendChild(listen2Me2);
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