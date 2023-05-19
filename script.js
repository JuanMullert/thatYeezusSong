let fantasySongs = ["Dark Fantasy", "Gorgeous", "Power", "All of the Lights", "Monster", "So Appalled", "Devil in a New Dress", "Runaway", "Hell of a Life", "Blame Game", "Lost in the World"];
let yeezusSongs = ["On Sight", "I Am a God", "Black Skinhead", "New Slaves"];
let pabloSongs = ["Ultralight Beam", "Father Stretch My Hands pt.1", "Pt.2", "Famous", "Feedback"];
let yeSongs = ["I Thought About Killing You", "Yikes", "All Mine", "No Mistakes", "Wouldn't Leave", "Ghost Town", "Violent Crimes"];
let jikSongs = ["Every Hour", "Selah", "Follow God", "Closed On Sunday", "On God", "Everything We Need", "Water", "God Is", "Hands On", "Use This Gospel", "Jesus is Lord"];
let dondaSongs = ["Donda Chant", "Jail", "God Breathed", "Off the Grid", "Hurricane", "Praise God", "Jonah", "Ok Ok", "Junya", "Believe What I Say", "24", "Moon", "Remote Control", "Heaven and Hell", "Keep My Spirit Alive", "Jesus Lord"];
let albumsTogether = fantasySongs.concat(yeezusSongs, pabloSongs, yeSongs, jikSongs, dondaSongs);

let enterSong = prompt('enter song');

    
    // for (let i = 0; i < fantasySongs.length; i++) {
    //     if (inputBox === fantasySongs[i]) {
    //         alert('good song');
    //         break;
    //     }
    // }



// let btn = document.getElementById("btn1");
// btn.onclick = alertFunc;

// function alertFunc() {
//     alert('hello world');
// }

try {
    for (let i = 0; i < albumsTogether.length; i++) {
        if (enterSong=== albumsTogether[i] || enterSong.toLowerCase()) {
            alert("That song is from the album: My Beautiful Dark Twisted Fantasy")
            break;
        }
    }
}
catch(err) {
    alert(err)

}

// for (let i = 0; i < yeezusSongs.length; i++) {
//     if (enterSong === yeezusSongs[i]) {
//         alert("That song is from the album: Yeezus");
//     }
// }

// for (let i = 0; i < pabloSongs.length; i++) {
//     if (enterSong === pabloSongs[i]) {
//         alert("That song is from the album: The Life of Pablo");
//     }
// }

// for (let i = 0; i < yeSongs.length; i++) {
//     if (enterSong === yeSongs[i]) {
//         alert("That song is from the album: ye");
//     }
// }
// for (let i = 0; i < jikSongs.length; i++) {
//     if (enterSong === jikSongs[i]) {
//         alert("That song is from the album: Jesus is King");
//     }
// }

// for (let i = 0; i < dondaSongs.length; i++) {
//     if (enterSong === dondaSongs[i]) {
//         alert("That song is from the album: Donda");
//     }
// }


// function testPop () {
//     var pop = window.open("","", "width=200,heigh=300")
//     if (pop !== null || typeof(pop) !== "undefined") {
//         alert("pop!");
//     }
    
// }

