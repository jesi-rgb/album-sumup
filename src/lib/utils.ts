import type { Album } from './types';

export function mapSongsDuration(album: Album, padding: number = 0) {
	// album is a list of songs
	// we want to return a new array of the different moments
	// each song starts and end so we can plot it in a rect
	//
	let { songs } = album;
	let durations = [];
	let currDuration = padding / 2;

	for (let i = 0; i < songs.length; i++) {
		const currSong = songs[i];

		const currStartEnd = {
			start: currDuration,
			end: currDuration + currSong.duration - padding / 2
		};

		durations.push(currStartEnd);

		currDuration += currSong.duration + padding / 2;
	}

	return durations;
}

export function secondsDisplay(duration: number) {
	const minutes = Math.floor(duration / 60);
	const seconds = Math.floor(duration % 60);
	const minText = minutes == 1 ? 'minute' : 'minutes';
	const secText = seconds == 1 ? 'second' : 'seconds';
	return `${minutes} ${minText} and ${seconds} seconds`;
}

/**
 * Returns the offset of a given event in absolute seconds taking
 * into account the duration of previous songs.
 * Song index as seen on Spotify, 1 based indexing.
 * */
export function relativeToAbsoluteSeconds({
	album,
	songIndex,
	secondsIntoSong,
	padding
}: {
	album: Album;
	songIndex: number;
	secondsIntoSong: number;
	padding: number;
}) {
	const { songs } = album;
	if (songIndex >= songs.length)
		throw RangeError(
			'The song index for the event cannot be greater or equal than the album length'
		);

	let shiftToSong = 0;
	for (let i = 0; i < songIndex - 1; i++) {
		shiftToSong += songs[i].duration + padding;
	}

	console.log(shiftToSong + secondsIntoSong);
	return shiftToSong + secondsIntoSong;
}
