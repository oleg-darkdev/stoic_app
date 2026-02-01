<script lang="ts">
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { citate } = $props();

	let { showAnswer } = $state(false);

	console.log(citate)
</script>

<!-- <section id="citats" class="testimonial-block"> -->
<!-- <div class="_12-column-grid large-gap"> -->

<!-- <div id="w-node-cebaa910-8405-e00e-71d5-142581d24c40-b4ea5f94" class="testimonial-list"> -->
<div class="flex max-w-4xl flex-col justify-center w-full">
	<!-- {#each data as citate} -->
	<button
		class=" button black w-button"
		onclick={() => {
			showAnswer = !showAnswer;
		}}>Show answer</button
	>
	<div class="testimonial-item">
		{#if !showAnswer}
			<div class="large-text">
				<!-- 	text: `Сколько раз попадались мне считающие невозможным все, чего сами они не могут, и говорящие, будто мы требуем больше, чем выдерживает человеческая природа. Насколько же лучше я думаю о них! Ведь и они многое могут, да не хотят. А кому из тех, кто пытался, изменял успех? Разве, когда возьмешься, все не оказывается легче? Мы не потому не осмеливаемся, что трудно, – трудно оттого, что мы не осмеливаемся.`,
		author: 'Сенека',
		themes: ['трудности', 'природа', 'стойкость'],
		practices: [] -->
				{citate.text}
			</div>
		{:else}
			<div class="people-info-block">
				<div class="people-info-text">
					<div class="medium-text">{citate.author}</div>
					<div class="flex flex-row flex-wrap">
						{#each citate.themes.splice(0, 6) as theme}
							<div class="tools-item"><div class="standard-text">{theme}</div></div>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>
	<!-- {/each} -->
</div>

<!-- </div> -->
<!-- </section> -->

<style lang="postcss">
</style>
