<script lang="ts">
	import { grasaAlbum } from '$lib/grasa';
	import type { Song } from '$lib/types';

	const { duration, songs } = grasaAlbum;

	import { mapSongsDuration, secondsDisplay } from '$lib/utils';

	const durations = mapSongsDuration(grasaAlbum, 3);

	let width = 200,
		height = 400;

	let songHeight = 10;

	let hoveredSong: Song | null = null;
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
					fill="white"
					class="hover:h-[20px] hover:-translate-y-[5px] transition-all"
					on:mouseover={() => {
						hoveredSong = song;
					}}
				/>
			{/each}
			<rect></rect>
		</g>
	</svg>
</div>

<section class="mt-20">
	{#if hoveredSong}
		<div class="font-semibold text-xl">
			{hoveredSong.title}
		</div>
		<div class="tabular-nums text-muted-foreground">
			{secondsDisplay(hoveredSong.duration)}
		</div>
	{/if}
</section>
