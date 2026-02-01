<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	const steps = [
		{
			title: 'Download the Print & Play Files',
			id: 1,
			desc: 'Dive into the world of Stoicism from the very first step. By downloading the PnP files of our game, you’ll get all the materials you need to create your own copy of the tabletop game.',
			icon: '/icons/download.svg',
			btnTitle: 'Download PnP',
			img: '/images/steps/images/66b05a119a1386c2dcf8834c_branding.avif',
			link: '/',
			subSteps: [
				'Get all game materials in one package',
				'Includes cards, instructions, and visuals',
				'Ready for printing and assembly',
				'Start your Stoic journey immediately'
			]
		},
		{
			title: 'Create Your Print & Play Copy',
			id: 2,
			desc: 'Follow the detailed instructions to easily assemble your Print & Play version of the game. It’s more than just printing and cutting — it’s the first step toward a personal experience of Stoicism and a hands-on understanding of its philosophical principles through gameplay.',
			icon: '/icons/assemble.svg',
			btnTitle: '',
			img: '/images/steps/images/66b05a119a1386c2dcf8834c_branding.avif',

			link: '',
			subSteps: [
				'Print all game components',
				'Cut and prepare cards and boards',
				'Follow step-by-step assembly guide',
				'Experience Stoicism through play'
			]
		},
		{
			title: 'Start Exploring Stoicism with the Game',
			id: 3,
			desc: 'Use the tabletop game together with our web application to deepen your knowledge of Stoicism. Play, reflect on the quotes, and engage with the philosophy. Each round is a small step toward inner calm, clarity of mind, and practical understanding of Stoic principles.',
			icon: '/icons/play.svg',
			btnTitle: 'Start to play',
			img: '/images/steps/images/66b05a119a1386c2dcf8834c_branding.avif',

			link: '/app',
			subSteps: [
				'Play solo or with friends',
				'Reflect on Stoic quotes',
				'Apply principles in daily life',
				'Use web app for extra insights'
			]
		}
	];
</script>

<section id="print-and-play">
	<div class="page-heading container">
		<div class="">
			<h1>
				From Print to Practice:
				<br />
				Start Your Stoic Journey
			</h1>
		</div>
	</div>
</section>
<section>
	<div class="container">
		<div class="_12-column-grid large-gap">
			<!--  -->
			<div id="w-node-_7ce556fd-d749-5a7a-bef7-a1c5868a54d1-b4ea5f9a" class="service-detail-list">
				{#each steps as step}
					<div class="service-detail-item is-expertise hide-desktop">
						<div class="divider"></div>
						<div class="_12-column-grid">
							<div id="w-node-_7ce556fd-d749-5a7a-bef7-a1c5868a54d5-b4ea5f9a" class="">
								<div class="standard-text">[0{step.id}]</div>
							</div>
							<div id="w-node-_7ce556fd-d749-5a7a-bef7-a1c5868a54d8-b4ea5f9a" class="">
								<div class="service-detail-text-block is-lottie">
									<div class="service-detail-text-wrap">
										<h3 id="w-node-_7ce556fd-d749-5a7a-bef7-a1c5868a54db-b4ea5f9a">
											Brand Identity
										</h3>
										<a
											id="w-node-_7ce556fd-d749-5a7a-bef7-a1c5868a54f5-b4ea5f9a"
											href="/expertise/brand-identity"
											class="image-mask-wrapper w-inline-block"
											><img
												src="images/66b05a119a1386c2dcf8834c_branding.avif"
												loading="lazy"
												alt="Service Image"
												class="image-effect hide"
											/>
											<div
												data-is-ix2-target="1"
												class="image-effect"
												data-w-id="d44478ca-12ea-64e3-93a2-ccfcc0f39b5e"
												data-animation-type="lottie"
												data-src="https://cdn.prod.website-files.com/65b22404f7d1427d1b8d612f/67a326b45209db31fda59d55_0437cf1c598160f6ad06e8b79e41132e_Expertise---Brand-Identity.json"
												data-loop="1"
												data-direction="1"
												data-autoplay="0"
												data-renderer="svg"
												data-default-duration="0"
												data-duration="5"
												data-ix2-initial-state="0"
											></div>
											<div class="image-mask"></div></a
										>
										<div class="medium-text">
											Your DNA. The building blocks needed to set the stage and ensure your
											personality shines through every touch point.
										</div>
									</div>
									<div class="service-detail-included">
										<ul role="list" class="list black-50">
											<li>
												<div>Strategy & Positioning<br /></div>
											</li>
											<li>
												<div>Visual Systems & Guidelines<br /></div>
											</li>
											<li>
												<div>Brand Templates & Assets<br /></div>
											</li>
										</ul>
									</div>
									<a href="/expertise/brand-identity" class="button black w-button">Explore</a>
								</div>
							</div>
						</div>
					</div>
					<div class="service-detail-item is-expertise hide-mobile">
						<div class="divider"></div>
						<div class="_12-column-grid">
							<div id="w-node-b42f5aeb-cfd3-cde6-2664-11f7cd2abfbd-b4ea5f9a" class="">
								<div class="standard-text">[0{step.id}]</div>
							</div>

							<div id="w-node-b42f5aeb-cfd3-cde6-2664-11f7cd2abfc0-b4ea5f9a" class="">
								<div class="service-detail-text-block">
									<div class="service-detail-text-wrap">
										<h3 id="w-node-b42f5aeb-cfd3-cde6-2664-11f7cd2abfc3-b4ea5f9a">
											{step.title}
										</h3>
										<div class="medium-text">
											{step.desc}
										</div>
									</div>
									<div class="service-detail-included">
										<ul role="list" class="list black-50">
											{#each step.subSteps as subStep}
												<li>
													<div>{subStep}</div>
												</li>
											{/each}
										</ul>
									</div>
									{#if step.btnTitle.length > 1}
										<a href={step.link} target="_blank" class="button black w-button"
											>{step.btnTitle}</a
										>
									{/if}
								</div>
							</div>
							<a
								id="w-node-b42f5aeb-cfd3-cde6-2664-11f7cd2abfd8-b4ea5f9a"
								href="/expertise/brand-identity"
								class="image-mask-wrapper w-inline-block"
								><img src={step.img} loading="lazy" alt="Service Image" class="image-effect hide" />
								<!-- <div
									data-is-ix2-target="1"
									class="image-effect"
									data-w-id="b42f5aeb-cfd3-cde6-2664-11f7cd2abfda"
									data-animation-type="lottie"
									data-src="https://cdn.prod.website-files.com/65b22404f7d1427d1b8d612f/67a326b45209db31fda59d55_0437cf1c598160f6ad06e8b79e41132e_Expertise---Brand-Identity.json"
									data-loop="0"
									data-direction="1"
									data-autoplay="0"
									data-renderer="svg"
									data-default-duration="0"
									data-duration="0"
									data-ix2-initial-state="0"
								></div> -->
								<div class="image-mask"></div></a
							>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
