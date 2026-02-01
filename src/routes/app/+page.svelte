<script lang="ts">
	import {} from '$sharedData';
	import {} from '$sharedUi';
	import {} from '$widgetsApp';
	import { CitateCard } from '$entitiesApp';
	import { first } from '$sharedData';
	import { slide } from 'svelte/transition';

	import { writable } from 'svelte/store';

	let orgsMode = writable({
		progress: 0
	});
	// import { SEO } from '$sharedUtils';
</script>

<section class="flex flex-col justify-center">
	<div class="mb-10 flex flex-row justify-center pt-10">
		<button
			class="button black w-button mr-10"
			onclick={() => {
				$orgsMode.progress -= 1;
			}}>Prev</button
		>

		<button
			class=" button black w-button"
			onclick={() => {
				$orgsMode.progress += 1;
			}}>Next</button
		>
	</div>
	<!-- <div transition:slide> -->
	{#each first as citate, index (citate.id)}
		{#if $orgsMode.progress == index}
			<div class="mx-auto" transition:slide>
				<CitateCard {citate} />
			</div>
		{/if}
	{/each}
	<!-- </div> -->
</section>

<style lang="postcss"></style>
