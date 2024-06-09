export type AlbumEvent = {
	start: number;
	end: number;
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
	color?: string;
};

export type Album = {
	songs: Song[];
	duration: number;
};
