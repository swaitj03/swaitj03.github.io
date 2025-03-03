const tracks = [
    { title: 'Blinding Lights', artist: 'The Weeknd', year: 2020 },
    { title: 'Levitating', artist: 'Dua Lipa', year: 2021 },
    { title: 'Save Your Tears', artist: 'The Weeknd', year: 2020 },
  ];

function getMusicTitlesByYear(music){
    if(!Array.isArray(music)){
        throw new TypeError("Not an array");
    }

    if(music.length == 0){
        return {};
    }

    let musicByYear = {};
    music.forEach(element => {
        if(element.year == undefined){
            throw new TypeError("Year is undefined");
        }
        if(typeof element.year != "number"){
            throw new TypeError("Year is not a string");
        }

        if(element.title == undefined){
            throw new TypeError("Title is undefined");
        }
        if(typeof element.title != "string"){
            throw new TypeError("Title is not a string");
        }

        if(element.artist == undefined){
            throw new TypeError("Artist is undefined");
        }
        if(typeof element.artist != "string"){
            throw new TypeError("Artist is not a string");
        }

        if(musicByYear[element.year] == undefined){
            musicByYear[element.year] = []
        }
        musicByYear[element.year].push(element.title);
        musicByYear[element.year].sort();
    });

    return musicByYear
}

module.exports = { getMusicTitlesByYear };