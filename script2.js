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
            producer: 'Daft Punk',
            lyrics: '...',
        },

        {
            name: 'Black Skinhead',
            producer: '',
            lyrics: '...'
        },

        {
            name: 'I Am A God',
            producer: '',
            lyrics: '...'
        },

        {
            name: 'New Slaves',
            producer: 'Frank Ocean',
            lyrics: '...'
        },

        {
            name: 'Hold My Liquor',
            producer: 'Chief Keef',
            lyrics: '...'
        },

        {
            name: 'Blood On The Leaves',
            producer: '',
            lyrics: '...'

        },

        {
            name: 'Guilt Trip',
            producer: 'Kid Cudi',
            lyrics: '...'
        },

        {
            name: 'Im In It',
            producer: '',
            lyrics: '...'
        },

        {
            name: 'Send It Up',
            producer: '',
            lyrics: '...'
        },

        {
            name: 'Bound 2',
            producer: '',
            lyrics: '...'
        }
    ],

    getSongInfo: function (trackTitle) {
        for (let songName of this.Songs) {
            if (songName.name.toLowerCase() === trackTitle.toLowerCase()) {
                return songName;
            }
        }
        return null;
    }
}

// const getInfo = yeezusInfo.getSongInfo('on sight')
// console.log(getInfo)



// console.log(yeezusInfo.Songs[0].name)


function songSearch() {
    try {
        let targetInputField = document.getElementById("inputSong");
        let inputValue = targetInputField.value;
        let targetDiv = document.getElementById("dropDetails");
        let foundSong = false;

        for (let track of yeezusInfo.Songs) {
            if (inputValue !== null && inputValue === track.name.toLowerCase()) {
                foundSong = true;

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
                let textDetails4 = document.createTextNode("Producer: " + track.producer);
                details4.append(textDetails4);

                targetDiv.parentNode.insertBefore(details, targetDiv.nextSibling);
                targetDiv.parentNode.insertBefore(details2, targetDiv.nextSibling);
                targetDiv.parentNode.insertBefore(details3, targetDiv.nextSibling);
                targetDiv.parentNode.insertBefore(details4, targetDiv.nextSibling);
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






