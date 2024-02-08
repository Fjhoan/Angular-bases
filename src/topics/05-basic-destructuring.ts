
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Seheeran',
        year: 2015
    }
};

const {
    song: anotherSong,
    songDuration: duration,
    details
} = audioPlayer;

const { author } = details;

// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author);

const [p1,p2,p3,p4]:string[] = ['Goku','Gohan','Vegeta','Trunks'];


console.error('Personaje 2:', p2)


export { };