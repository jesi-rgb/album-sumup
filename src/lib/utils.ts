import type { Album } from './types';

export const groupBy = (x: any, f: any) =>
	x.reduce((a: any, b: any, i: any) => ((a[f(b, i, x)] ||= []).push(b), a), {});

export function mapSongsDuration(album: Album, padding: number = 0) {
	// album is a list of songs
	// we want to return a new array of the different moments
	// each song starts and end so we can plot it in a rect
	//
	let { songs, duration: albumDuration } = album;
	let durations = [];
	let currDuration = 0;

	for (let i = 0; i < songs.length; i++) {
		const currSong = songs[i];
		const relativeDuration = currSong.duration / albumDuration;
		const relativePadding = padding / albumDuration;

		console.log(relativeDuration);

		let currStartEnd;
		switch (i) {
			case 0:
				currStartEnd = {
					start: 0,
					end: currDuration + relativeDuration - relativePadding / 2
				};
				break;
			case songs.length - 1:
				currStartEnd = {
					start: currDuration + relativePadding / 2,
					end: currDuration + relativeDuration
				};
				break;
			default:
				currStartEnd = {
					start: currDuration + relativePadding / 2,
					end: currDuration + relativeDuration - relativePadding / 2
				};
		}

		durations.push(currStartEnd);

		currDuration += relativeDuration;
	}

	console.log(durations);
	return durations;
}

export function secondsDisplay(duration: number) {
	const minutes = Math.floor(duration / 60);
	const seconds = Math.floor(duration % 60);
	const minText = minutes == 1 ? 'minute' : 'minutes';
	const secText = seconds == 1 ? 'second' : 'seconds';
	return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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
	let relativePadding = padding / album.duration;
	for (let i = 0; i < songIndex - 1; i++) {
		shiftToSong += songs[i].duration + relativePadding / 2;
	}

	return shiftToSong + secondsIntoSong;
}
