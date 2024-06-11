<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<script lang="ts">
	import { fly } from 'svelte/transition';
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
	<svg {width} {height} class="border-2 border-primary/20 rounded-xl w-full">
		<g id="songs">
			{#each songs as song, i}
				<!-- invisible -->
				<rect
					id={song.title}
					x="{durations[i].start * 100}%"
					y={height / 2 - 80 / 2}
					height={80}
					fill="none"
					pointer-events="visible"
					width="{(durations[i].end - durations[i].start) * 100}%"
					on:mouseover={() => {
						hoveredSong = song;
					}}
					on:mouseleave={() => {
						hoveredSong = null;
					}}
				/>

				<!-- visible -->
				<rect
					id={song.title}
					x="{durations[i].start * 100}%"
					y={height / 2 - songHeight / 2}
					height={songHeight}
					width="{(durations[i].end - durations[i].start) * 100}%"
					class="fill-primary pointer-events-none"
					class:selected={hoveredSong == song}
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

<!-- event categories -->
<section>
	{#each grasaEvents as event}
		<li>{event.category}</li>
	{/each}
</section>

<section class="mt-20">
	{#if hoveredSong}
		<div>
			<div
				in:fly={{ duration: 150, x: -20 }}
				class="font-bold text-xl [font-variation-settings: 'opsz' 30]"
			>
				{hoveredSong.title}
			</div>
			<div class="text-primary">
				{secondsDisplay(hoveredSong.duration)}
			</div>
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

<!-- hover:h-[20px] hover:-translate-y-[5px] hover:fill-secondary fill-primary transition-all -->
<style>
	.selected {
		fill: var(--fallback-s, oklch(var(--s) / 1));
		--tw-translate-y: -5px;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
		height: 20px;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}
</style>
