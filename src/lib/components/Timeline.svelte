<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_no_static_element_interactions -->

<script lang="ts">
	import { fly } from 'svelte/transition';
	import { grasaAlbum, grasaEvents } from '$lib/grasa';
	import type { Song, AlbumEvent } from '$lib/types';

	import { padding } from '../../store';

	const { duration, songs } = grasaAlbum;

	import { mapSongsDuration, secondsDisplay, groupBy, relativeToAbsoluteSeconds } from '$lib/utils';

	const durations = mapSongsDuration(grasaAlbum, padding);

	const categories = groupBy(grasaEvents, (g: AlbumEvent) => g.category);

	let width = 200,
		height = 200;

	let songHeight = 10;

	let hoveredSong: Song | null = null;
	let hoveredEvent: AlbumEvent | null = null;

	let selectedCategory: string | null;

	//sort the events based on when they happen
	//and make those events that last for less than
	//a second a bit longer for easier reachability
	grasaEvents
		.sort((a, b) => {
			return (
				relativeToAbsoluteSeconds({
					album: grasaAlbum,
					secondsIntoSong: a.secondsIntoSong,
					songIndex: a.songIndex,
					padding: padding
				}) -
				relativeToAbsoluteSeconds({
					album: grasaAlbum,
					secondsIntoSong: b.secondsIntoSong,
					songIndex: b.songIndex,
					padding: padding
				})
			);
		})
		.map((e) => {
			if (e.end - e.start <= 2) {
				e.end += 3;
			}
		});

	$: displayEvents = grasaEvents.filter(
		(e) => e.category == selectedCategory || selectedCategory == null
	);

	$: hoveredSongEvents = grasaEvents.filter((e) => {
		return songs[e.songIndex - 1].title == hoveredSong?.title;
	});
</script>

<section class="flex flex-col gap-3">
	<h1 class="text-center font-extrabold tracking-tight text-3xl">GRASA</h1>
	<h2 class="text-center font-semibold text-xl opacity-90">Nathy Peluso</h2>
	<h2 class="text-center text-xl opacity-70">2024 — 42 min 43 s</h2>
</section>

<section bind:clientWidth={width}>
	<svg
		{width}
		{height}
		on:mouseleave={() => {
			hoveredSong = null;
		}}
		class="border-2 border-primary/20 rounded-xl w-full"
	>
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
			{#each displayEvents as event}
				<rect
					id={event.title}
					x="{(event.start / duration) * 100}%"
					y={height / 2.3 - songHeight / 2}
					height={songHeight}
					width="{((event.end - event.start) / duration) * 100}%"
					class="hover:h-[20px] hover:-translate-y-[5px] fill-accent transition-all"
					class:eventHovered={hoveredEvent == event}
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
</section>

<!-- event categories -->
<section class="flex my-10 gap-5">
	<div class="join overflow-x-scroll">
		{#each Object.keys(categories) as category}
			<button
				class:categorySelected={category == selectedCategory}
				on:click={() => {
					if (selectedCategory == category) selectedCategory = null;
					else if (selectedCategory == null || selectedCategory != category)
						selectedCategory = category;

					hoveredEvent = null;
				}}
				class="join-item btn btn-outline cursor-pointer">{category}</button
			>
		{/each}
	</div>
</section>

{#if selectedCategory}
	<section class="mt-10">
		<h2 class="font-semibold text-xl mb-5">
			<span class="opacity-70">Highlights in relation to</span>
			<span>{selectedCategory}</span>
		</h2>
		<div transition:fly={{ duration: 120, x: -20 }} class="flex flex-col gap-5">
			{#each displayEvents as event, i}
				<div class="flex flex-row gap-2 hover:cursor-help">
					<span class="opacity-70 tabular-nums">{i + 1}.</span>
					<div
						on:click={() => {
							if (!hoveredEvent || hoveredEvent !== event) hoveredEvent = event;
							else hoveredEvent = null;
						}}
					>
						<div class="category-event-list" class:selected-event={hoveredEvent === event}>
							{event.title}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
{/if}

<section class="mt-10">
	{#if hoveredSong}
		<div>
			<div in:fly={{ duration: 150, x: -20 }} class="font-bold text-xl">
				{hoveredSong.title}
			</div>
			<div class="">
				<span class="text-primary tabular-nums">{secondsDisplay(hoveredSong.duration)}</span> •
				<span class="opacity-70">
					{hoveredSong.artist}
				</span>
			</div>
		</div>
	{/if}
</section>

{#if hoveredSong && hoveredSongEvents.length > 0}
	<section class="mt-10">
		<h2 class="font-semibold opacity-70 text-xl mb-3">Highlights of the song</h2>
		{#each hoveredSongEvents as event, i}
			<div class="flex flex-row gap-2 hover:cursor-help">
				<span class="opacity-70 tabular-nums">{i + 1}.</span>
				<div
					on:mouseenter={() => {
						hoveredEvent = event;
					}}
					on:mouseleave={() => {
						hoveredEvent = null;
					}}
				>
					<div class="">
						{event.title}
					</div>
				</div>
			</div>
		{/each}
	</section>
{/if}

<section class="mt-10 card w-fit bg-base-200 border border-primary/20 shadow-primary/10 shadow-md">
	{#if hoveredEvent}
		<div class="card-body">
			<h2 class="font-semibold text-lg opacity-70 mb-5 card-title">Event Details</h2>
			<div class="flex flex-col gap-2">
				<div class="font-bold text-xl">
					{hoveredEvent.title}
				</div>
				<div>
					<span class="opacity-70">Song {hoveredEvent.songIndex}:</span>
					{grasaAlbum.songs[hoveredEvent.songIndex - 1].title} •
					<span class="text-primary">{secondsDisplay(hoveredEvent.secondsIntoSong)}</span>
				</div>
				<div class="badge border-primary/20 badge-outline">{hoveredEvent.category}</div>
			</div>
		</div>
	{/if}
</section>

<section class="h-[400px] opacity-0">asdf</section>

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
	.categorySelected {
		border-color: currentColor;
		--tw-border-opacity: 0.5;
		background-color: var(--fallback-p, oklch(var(--p) / 1));
		color: var(--fallback-pc, oklch(var(--pc) / 1));
	}

	.eventHovered {
		height: 20px;
		min-width: 20px;
		width: 20px;

		--tw-translate-y: -5px;
		--tw-translate-x: -5px;

		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));

		fill: var(--fallback-a, oklch(var(--a) / 1));

		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}
	.category-event-list {
		text-decoration: underline;
		text-decoration-color: oklch(var(--a) / 0.4);
		text-decoration-style: dotted;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
	.selected-event {
		text-decoration: underline;
		text-decoration-color: oklch(var(--a) / 1);
		text-decoration-style: line;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
