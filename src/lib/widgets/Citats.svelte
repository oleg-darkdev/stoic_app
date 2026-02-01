<script lang="ts">
	import { promo } from '$sharedData';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>

<section id="citats" class="testimonial-block">
	<div class="_12-column-grid large-gap">
		<div id="w-node-cebaa910-8405-e00e-71d5-142581d24c3b-b4ea5f94" class=" sticky">
			<div class="section-title-wrapper">
				<div class="dot"></div>
				<h2 class="section-small-title">Citats</h2>
			</div>
		</div>
		<div id="w-node-cebaa910-8405-e00e-71d5-142581d24c40-b4ea5f94" class="testimonial-list">
			<div class="">
				{#each promo as citate}
					<div class="testimonial-item">
						<div class="large-text">
							<!-- 	text: `Сколько раз попадались мне считающие невозможным все, чего сами они не могут, и говорящие, будто мы требуем больше, чем выдерживает человеческая природа. Насколько же лучше я думаю о них! Ведь и они многое могут, да не хотят. А кому из тех, кто пытался, изменял успех? Разве, когда возьмешься, все не оказывается легче? Мы не потому не осмеливаемся, что трудно, – трудно оттого, что мы не осмеливаемся.`,
		author: 'Сенека',
		themes: ['трудности', 'природа', 'стойкость'],
		practices: [] -->
							{citate.text}
						</div>
						<div class="people-info-block">
							<img
								src="images/65b2247ecca0749a612d0df0_Testimonial%20Logo%202.png"
								loading="lazy"
								width="64"
								alt="Partner Logo"
								class="testimonial-logo"
							/>
							<div class="people-info-text">
								<div class="medium-text">{citate.author}</div>
								<div class="flex flex-row flex-wrap">
									{#each citate.themes.splice(0, 6) as theme}
										<div class="standard-text black-50 mr-4">{theme}</div>
									{/each}
								</div>
							</div>
							<!-- <a href="/" target="_blank" class="clutch-wrap w-inline-block"
										><img
											src="images/65bc5f3c29c700cd05e1a4be_Clutch%20Logo.svg"
											loading="lazy"
											alt="Level Interactive independent review by Clutch."
											class="clutch-img"
										/></a
									> -->
							<!-- {#each citate.themes as theme}
								<span class="mr-4">{theme}</span>
							{/each} -->
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
