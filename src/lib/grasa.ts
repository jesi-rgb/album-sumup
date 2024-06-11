import type { Song, Album, AlbumEvent } from '$lib/types/index';
import { relativeToAbsoluteSeconds } from './utils';
import { padding } from '../store';

export const grasaAlbum: Album = {
	songs: [
		{ title: 'CORLEONE', duration: 148, color: 'red' },
		{ title: 'APRENDER A AMAR', duration: 99 },
		{ title: 'REAL', duration: 179 },
		{ title: 'LEGENDARIO', duration: 184 },
		{ title: 'ESCALERAS DE METAL', duration: 107 },
		{ title: 'TODO ROTO', duration: 187 },
		{ title: 'NO LES CREO NADA - SKIT', duration: 18 },
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
		title: 'PERRA?',

		songIndex: 2,
		secondsIntoSong: 43,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 2,
			secondsIntoSong: 43,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 2,
			secondsIntoSong: 44,
			padding: padding
		}),
		category: 'perra'
	},
	{
		title: 'Levántate, perra',

		songIndex: 6,
		secondsIntoSong: 3,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 6,
			secondsIntoSong: 3,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 6,
			secondsIntoSong: 4,
			padding: padding
		}),
		category: 'perra'
	},

	{
		title: 'PERRA!',

		songIndex: 9,
		secondsIntoSong: 94,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 9,
			secondsIntoSong: 94,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 9,
			secondsIntoSong: 95,
			padding: padding
		}),
		category: 'perra'
	},
	{
		title: '7 pastillas para ir a dormir',
		songIndex: 4,
		secondsIntoSong: 10,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 4,
			secondsIntoSong: 10,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 4,
			secondsIntoSong: 12,
			padding: padding
		}),
		category: 'medicinas'
	},
	{
		title: 'cartera llena de Clorazepam',
		songIndex: 15,
		secondsIntoSong: 94,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 15,
			secondsIntoSong: 94,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 15,
			secondsIntoSong: 96,
			padding: padding
		}),
		category: 'medicinas'
	},
	{
		title: 'pero tengo Espidifen',
		songIndex: 14,
		secondsIntoSong: 104,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 14,
			secondsIntoSong: 104,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 14,
			secondsIntoSong: 106,
			padding: padding
		}),
		category: 'medicinas'
	},
	{
		title: 'sword sound (decimating a cat?)',
		songIndex: 9,
		secondsIntoSong: 30,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 9,
			secondsIntoSong: 30,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 9,
			secondsIntoSong: 31,
			padding: padding
		}),
		category: 'swords, blades, knifes'
	},

	{
		title: 'la hoja del cuchillo',
		songIndex: 5,
		secondsIntoSong: 43,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 5,
			secondsIntoSong: 43,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 5,
			secondsIntoSong: 44,
			padding: padding
		}),
		category: 'swords, blades, knifes'
	},

	{
		title: 'tampoco con el puñal',
		songIndex: 13,
		secondsIntoSong: 65,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 13,
			secondsIntoSong: 65,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 13,
			secondsIntoSong: 65,
			padding: padding
		}),
		category: 'swords, blades, knifes'
	},

	{
		title: 'automatic shotgun shots',
		songIndex: 3,
		secondsIntoSong: 24,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 3,
			secondsIntoSong: 24,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 3,
			secondsIntoSong: 25,
			padding: padding
		}),
		category: 'shots SFX'
	},
	{
		title: 'automatic shotgun shots',
		songIndex: 3,
		secondsIntoSong: 86,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 3,
			secondsIntoSong: 86,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 3,
			secondsIntoSong: 86,
			padding: padding
		}),
		category: 'shots SFX'
	}
];
