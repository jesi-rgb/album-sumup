import type { Song, Album, AlbumEvent } from '$lib/types/index';

export const grasaAlbum: Album = {
	songs: [
		{ title: 'CORLEONE', duration: 148 },
		{ title: 'APRENDER A AMAR', duration: 99 },
		{ title: 'REAL', duration: 179 },
		{ title: 'LEGENDARIO', duration: 184 },
		{ title: 'ESCALERAS DE METAL', duration: 107 },
		{ title: 'TODO ROTO', duration: 187 },
		{ title: 'ENVIDIA', duration: 155 },
		{ title: 'MENINA', duration: 128 },
		{ title: 'IDEAS RADICALES', duration: 180 },
		{ title: 'MANHATTAN', duration: 192 },
		{ title: 'EL DÍA QUE PERDÍ MI JUVENTUD', duration: 168 },
		{ title: 'LA PRESA', duration: 216 },
		{ title: 'LA MENTIRA', duration: 194 },
		{ title: 'REMEDIO', duration: 195 },
		{ title: 'MAMÁ', duration: 207 }
	],
	duration: 2563
};

export const grasaEvents: AlbumEvent[] = [
	{
		title: 'PERRA',
		start: 193,
		end: 194
	}
];
