export type AlbumEvent = {
	start: number;
	end: number;
	songIndex: number;
	secondsIntoSong: number;
	title: string;
	notes?: string;
	category?: string;
};

export type EventGroup = {
	events: AlbumEvent[];
};

// let's express the duration in
// seconds and then format appropriately
export type Song = {
	duration: number;
	title: string;
	artist: string;
	color?: string;
};

export type Album = {
	songs: Song[];
	duration: number;
};
