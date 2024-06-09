<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<script lang="ts">
	import { grasaAlbum, grasaEvents } from '$lib/grasa';
	import type { Song, AlbumEvent } from '$lib/types';

	import { padding } from '../../store';

	const { duration, songs } = grasaAlbum;

	import { mapSongsDuration, secondsDisplay, relativeToAbsoluteSeconds } from '$lib/utils';

	const durations = mapSongsDuration(grasaAlbum, padding);

	let width = 200,
		height = 200;

	let songHeight = 10;

	let hoveredSong: Song | null = null;
	let hoveredEvent: AlbumEvent | null = null;
</script>

<div bind:clientWidth={width}>
	<svg {width} {height} class="border border-primary rounded-xl w-full">
		<g id="songs">
			{#each songs as song, i}
				<rect
					id={song.title}
					x="{(durations[i].start / duration) * 100}%"
					y={height / 2 - songHeight / 2}
					height={songHeight}
					width="{((durations[i].end - durations[i].start) / duration) * 100}%"
					class="hover:h-[20px] hover:-translate-y-[5px] hover:fill-secondary fill-primary transition-all"
					on:mouseover={() => {
						hoveredSong = song;
					}}
				/>
			{/each}
		</g>

		<g id="events">
			{#each grasaEvents as event}
				<rect
					id={event.title}
					x="{(event.start / duration) * 100}%"
					y={height / 2.3 - songHeight / 2}
					height={songHeight}
					width="{((event.end - event.start) / duration) * 100}%"
					class="hover:h-[20px] hover:-translate-y-[5px] hover:fill-secondary fill-primary transition-all"
					on:mouseover={() => {
						hoveredEvent = event;
					}}
					on:mouseleave={() => {
						hoveredEvent = null;
					}}
				/>
			{/each}
		</g>
	</svg>
</div>

<section class="mt-20">
	{#if hoveredSong}
		<div class="font-bold text-xl [font-variation-settings: 'opsz' 30]">
			{hoveredSong.title}
		</div>
		<div class="text-primary">
			{secondsDisplay(hoveredSong.duration)}
		</div>
	{/if}
</section>

<section class="mt-20">
	{#if hoveredEvent}
		<div class="font-bold text-xl [font-variation-settings: 'opsz' 30]">
			{hoveredEvent.title}
		</div>
		<div class="text-primary">
			{hoveredEvent.category}
		</div>
	{/if}
</section>
