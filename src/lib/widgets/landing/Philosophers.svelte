<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	const stoicsList = [
		{
			href: 'philosophers/seneca',
			title: 'Seneca',
			index: '(01)',
			description:
				'A Roman Stoic philosopher, writer, and statesman. His works focus on ethics, self-discipline, and the ability to remain calm in the face of fate.',
			image: 'images/seneca.avif',
			imageAlt: 'Seneca'
		},
		{
			href: 'philosophers/epictetus',
			title: 'Epictetus',
			index: '(02)',
			description:
				'A former slave who became one of the most influential Stoic philosophers. He taught how to distinguish between what is within our control and what is not.',
			image: 'images/epictetus.avif',
			imageAlt: 'Epictetus'
		},
		{
			href: 'philosophers/marcus-aurelius',
			title: 'Marcus Aurelius',
			index: '(03)',
			description:
				'A Roman emperor and philosopher. His *Meditations* are a personal journal on duty, reason, and living in accordance with nature.',
			image: 'images/marcus.avif',
			imageAlt: 'Marcus Aurelius'
		},
		{
			href: 'philosophers/musonius-rufus',
			title: 'Gaius Musonius Rufus',
			index: '(04)',
			description:
				'The teacher of Epictetus and one of the strictest Stoics. He taught philosophy as a practice of everyday life and moral discipline.',
			image: 'images/musonius.avif',
			imageAlt: 'Gaius Musonius Rufus'
		}
	];
</script>

<section id="philosophers">
	<div class="background white-smoke">
		<div class="container">
			<div class="_12-column-grid large-gap">
				<div  class="">
					<div
						class="section-title-wrapper"
					>
						<div class="dot"></div>
						<h2 class="section-small-title">Philosophers</h2>
					</div>
				</div>
				<div id="w-node-cebaa910-8405-e00e-71d5-142581d24bbd-b4ea5f94" class="">
					<div
						class="service-content-block"
					>
						<div class="large-text">
							During the game, you will become acquainted with the origins of Stoicism and the
							thoughts of four key philosophers of this tradition: Seneca, Epictetus, Marcus
							Aurelius, and Gaius Musonius Rufus.

							<br />

							Their texts and ideas form the foundation of the game’s mechanics and cards.
						</div>
						<div class="large-text">
							The game mechanics are built around authentic quotations and philosophical ideas.
							Through cards, challenges, and discussions, you gradually explore core Stoic
							principles: the distinction between what is within our control and what is not, the
							value of virtue, the power of reason, and the importance of inner calm. The game
							combines learning with reflection on philosophical quotations.
						</div>

						<a href="/" class="button black w-button">Explore</a>
					</div>
				</div>
				<div id="w-node-cebaa910-8405-e00e-71d5-142581d24bc3-b4ea5f94" class="service-list">
					{#each stoicsList as stoic}
						<a href={stoic.href} class="service-item w-inline-block">
							<div class="divider"></div>
							<div class="_12-column-grid">
								<div id="w-node-cebaa910-8405-e00e-71d5-142581d24bc7-b4ea5f94" class="">
									<div class="service-title-wrapper">
										<div class="xl-text">{stoic.title}</div>
										<div class="standard-text">{stoic.index}</div>
									</div>
								</div>
								<div id="w-node-cebaa910-8405-e00e-71d5-142581d24bcd-b4ea5f94" class="">
									<div class="standard-text black-50">
										{stoic.description}
									</div>
								</div>
							</div>
							<div class="benefit-img-mask is-homepage">
								<img
									src="{stoic.image}"
									loading="lazy"
									sizes="(max-width: 479px) 100vw, 239.984375px"
									alt=""
									class="benefit-hover-img"
								/>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
