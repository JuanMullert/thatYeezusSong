let fantasySongs = ["Dark Fantasy", "Gorgeous", "Power", "All of the Lights", "Monster", "So Appalled", "Devil in a New Dress", "Runaway", "Hell of a Life", "Blame Game", "Lost in the World"];
let yeezusSongs = ["On Sight", "I Am a God", "Black Skinhead", "New Slaves"];
let pabloSongs = ["Ultralight Beam", "Father Stretch My Hands pt.1", "Pt.2", "Famous", "Feedback"];
let yeSongs = ["I Thought About Killing You", "Yikes", "All Mine", "No Mistakes", "Wouldn't Leave", "Ghost Town", "Violent Crimes"];
let jikSongs = ["Every Hour", "Selah", "Follow God", "Closed On Sunday", "On God", "Everything We Need", "Water", "God Is", "Hands On", "Use This Gospel", "Jesus is Lord"];
let dondaSongs = ["Donda Chant", "Jail", "God Breathed", "Off the Grid", "Hurricane", "Praise God", "Jonah", "Ok Ok", "Junya", "Believe What I Say", "24", "Moon", "Remote Control", "Heaven and Hell", "Keep My Spirit Alive", "Jesus Lord"];
let albumsTogether = fantasySongs.concat(yeezusSongs, pabloSongs, yeSongs, jikSongs, dondaSongs);

function songSearch() {
    try {
        
        let enterSong = prompt("enter a song");
        let details = document.createElement("p");
        let textDetails = document.createTextNode("good song");
        details.appendChild(textDetails);
        let targetDiv = document.getElementById("dropDetails");
        let foundSong = false;
        for (let i = 0; i < albumsTogether.length; i++) {
            if (enterSong !== null && (enterSong === albumsTogether[i] || enterSong.toLowerCase() === albumsTogether[i].toLowerCase())) {
                foundSong = true;
                targetDiv.parentNode.insertBefore(details, targetDiv.nextSibling);
                break;
                
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

btn1.onclick = songSearch;





