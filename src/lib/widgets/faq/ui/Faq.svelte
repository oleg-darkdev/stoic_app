<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	import { FaqItem } from '$entities';
	import basicFaq from '../data/basicFaq';
	import appFaq from '../data/appFaq';
	import boardgameFaq from '../data/boardgameFaq';

	const faq = [basicFaq, appFaq, boardgameFaq];
</script>

<section>
	<div class="page-heading container">
		<div class="">
			<h1>Answers to common questions about Persona.</h1>
		</div>
	</div>
</section>

<section id="faq">
	<div class="container">
		<div class="_12-column-grid large-gap">
			<div id="w-node-_9f3f99b2-4e88-93f0-acbb-d27d5b344070-e0a35d86" class="testimonial-block">
				{#each faq as faq}
					<div class="_12-column-grid large-gap">
						<div id="w-node-_9f3f99b2-4e88-93f0-acbb-d27d5b344072-e0a35d86" class=" sticky">
							<div class="section-title-wrapper">
								<div class="dot"></div>
								<h2 class="section-small-title">{faq.category}</h2>
							</div>
						</div>
						<div id="w-node-_9f3f99b2-4e88-93f0-acbb-d27d5b344077-e0a35d86" class="faq-wrapper">
							<div class="w-dyn-list">
								<div role="list" class="w-dyn-items">
									{#each faq.faq as faq}
										<FaqItem {faq} />
									{/each}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
