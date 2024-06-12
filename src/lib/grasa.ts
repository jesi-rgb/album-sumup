import type { Song, Album, AlbumEvent } from '$lib/types/index';
import { relativeToAbsoluteSeconds } from './utils';
import { padding } from '../store';

export const grasaAlbum: Album = {
	songs: [
		{ title: 'CORLEONE', artist: 'NATHY PELUSO', duration: 148, color: 'red' },
		{ title: 'APRENDER A AMAR', artist: 'NATHY PELUSO', duration: 99 },
		{ title: 'REAL', artist: 'NATHY PELUSO', duration: 179 },
		{ title: 'LEGENDARIO', artist: 'NATHY PELUSO', duration: 184 },
		{ title: 'ESCALERAS DE METAL', artist: 'NATHY PELUSO', duration: 107 },
		{ title: 'TODO ROTO', artist: 'NATHY PELUSO, Paco Amoroso, CA7RIEL', duration: 187 },
		{ title: 'NO LES CREO NADA - SKIT', artist: 'NATHY PELUSO, C. Tangana', duration: 18 },
		{ title: 'ENVIDIA', artist: 'NATHY PELUSO', duration: 155 },
		{ title: 'MENINA', artist: 'NATHY PELUSO, Lua de Santana', duration: 128 },
		{ title: 'IDEAS RADICALES', artist: 'NATHY PELUSO', duration: 180 },
		{ title: 'MANHATTAN', artist: 'NATHY PELUSO', duration: 192 },
		{ title: 'EL DÍA QUE PERDÍ MI JUVENTUD', artist: 'NATHY PELUSO, Blood Orange', duration: 168 },
		{ title: 'LA PRESA', artist: 'NATHY PELUSO', duration: 216 },
		{ title: 'LA MENTIRA', artist: 'NATHY PELUSO', duration: 194 },
		{ title: 'REMEDIO', artist: 'NATHY PELUSO', duration: 195 },
		{ title: 'MAMÁ', artist: 'NATHY PELUSO', duration: 207 }
	],
	duration: 2563
};

export const grasaEvents: AlbumEvent[] = [
	{
		title: '"PERRA?"',

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
		title: '"Levántate, perra"',

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
		title: '"PERRA!"',

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
		title: '"7 pastillas para ir a dormir"',
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
		title: '"cartera llena de Clorazepam"',
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
		title: '"pero tengo Espidifen"',
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
		category: 'swords, blades, knives'
	},

	{
		title: '"la hoja del cuchillo"',
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
		category: 'swords, blades, knives'
	},
	{
		title: '"tampoco con el puñal"',
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
		category: 'swords, blades, knives'
	},
	{
		title: '"la espada del malo"',
		songIndex: 9,
		secondsIntoSong: 123,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 9,
			secondsIntoSong: 123,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 9,
			secondsIntoSong: 124,
			padding: padding
		}),
		category: 'swords, blades, knives'
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
		category: 'guns'
	},
	{
		title: '"me dispara duro con la metralleta"',
		songIndex: 14,
		secondsIntoSong: 25,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 14,
			secondsIntoSong: 25,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 14,
			secondsIntoSong: 25,
			padding: padding
		}),
		category: 'guns'
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
		category: 'guns'
	},
	{
		title: '"con la pistola"',
		songIndex: 13,
		secondsIntoSong: 59,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 13,
			secondsIntoSong: 59,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 13,
			secondsIntoSong: 61,
			padding: padding
		}),
		category: 'guns'
	},
	{
		title: 'automatic shotgun shots',
		songIndex: 3,
		secondsIntoSong: 174,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 3,
			secondsIntoSong: 174,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 3,
			secondsIntoSong: 175,
			padding: padding
		}),
		category: 'guns'
	},
	{
		title: '"quieren mi grasa"',
		songIndex: 9,
		secondsIntoSong: 91,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 9,
			secondsIntoSong: 91,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 9,
			secondsIntoSong: 91,
			padding: padding
		}),
		category: 'grasa'
	},
	{
		title: '"grasa!"',
		songIndex: 9,
		secondsIntoSong: 114,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 9,
			secondsIntoSong: 114,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 9,
			secondsIntoSong: 114,
			padding: padding
		}),
		category: 'grasa'
	},
	{
		title: 'fretless bass fill',
		songIndex: 16,
		secondsIntoSong: 85,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 16,
			secondsIntoSong: 85,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 16,
			secondsIntoSong: 89,
			padding: padding
		}),
		category: 'cool instruments'
	},

	{
		title: 'fretless bass fill',
		songIndex: 16,
		secondsIntoSong: 132,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 16,
			secondsIntoSong: 132,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 16,
			secondsIntoSong: 132,
			padding: padding
		}),
		category: 'cool instruments'
	},
	{
		title: 'wurlitzer outro',
		songIndex: 10,
		secondsIntoSong: 170,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 10,
			secondsIntoSong: 170,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 10,
			secondsIntoSong: 180,
			padding: padding
		}),
		category: 'cool instruments'
	},
	{
		title: 'talkbox intro',
		songIndex: 15,
		secondsIntoSong: 1,
		start: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 15,
			secondsIntoSong: 1,
			padding: padding
		}),
		end: relativeToAbsoluteSeconds({
			album: grasaAlbum,
			songIndex: 15,
			secondsIntoSong: 9,
			padding: padding
		}),
		category: 'cool instruments'
	}
];
