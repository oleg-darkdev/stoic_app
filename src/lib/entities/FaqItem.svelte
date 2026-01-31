<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	let { faq } = $props();

	let showAnswer = $state(false);
</script>

<div role="listitem" class="w-dyn-item">
	<div class="single-faq-wrap">
		<div onclick={() => (showAnswer = !showAnswer)} class="question-wrapper">
			<h3>{faq.q}</h3>
			<div class="faq-icon-wrap">
				<img alt="" src="images/66b9cdc775655d43af541594_faq-icon.svg" class="faq-icon" />
			</div>
		</div>

		{#if showAnswer}
			<div style="" class="answer-wrapper">
				<div class="faq-richtext w-richtext">
					{#each faq.a as answer}
						<p>
							{answer}
							<!-- We collaborate with a diverse range of businesses across Asia and
													worldwide markets, from ambitious startups ready to make their mark to
													established enterprises seeking a fresh perspective. While we're
													industry-agnostic, we excel in areas like consulting, consumer
													electronics, blockchain, fintech, IT, pharma, and personal care. <a
														href="https://www.thelevel.io/expertise#industries">Explore</a
													> the full list of industries we have experience supporting. -->
						</p>
					{/each}
				</div>
			</div>
		{/if}
	</div>
	<div class="faq-divider-space">
		<div class="divider"></div>
	</div>
</div>

<style lang="postcss">
</style>
