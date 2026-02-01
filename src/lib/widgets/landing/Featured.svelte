<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	const gallery = [
		// [
		// 	{
		// 		subTitle: 'Sed do eiusmod tempor',
		// 		img: '/images/gallery/10.png',
		// 		title: 'Lorem Ipsum Title 3',
		// 		altText: 'Placeholder image 3'
		// 	},
		// 	{
		// 		subTitle: 'Incididunt ut labore et dolore',
		// 		img: '/images/gallery/11.png',
		// 		title: 'Lorem Ipsum Title 4',
		// 		altText: 'Placeholder image 4'
		// 	}
		// ],
		[
			{
				subTitle: '8 types',
				img: '/images/gallery/4.JPG',
				title: 'Full set of elements',
				altText: 'Full set of elements'
			},
			{
				subTitle: '4 different rolls',
				img: '/images/gallery/2.JPG',
				title: ' Player tablets',
				altText: 'Placeholder image 4'
			}
		]
		// [
		// 	{
		// 		subTitle: 'Sed do eiusmod tempor',
		// 		img: '/images/gallery/4.JPG',
		// 		title: 'Lorem Ipsum Title 3',
		// 		altText: 'Placeholder image 3'
		// 	},
		// 	{
		// 		subTitle: 'Incididunt ut labore et dolore',
		// 		img: '/images/gallery/8.JPG',
		// 		title: 'Lorem Ipsum Title 4',
		// 		altText: 'Placeholder image 4'
		// 	}
		// ],
		// [
		// 	{
		// 		subTitle: 'Sed do eiusmod tempor',
		// 		img: '/images/gallery/15.jpg',
		// 		title: 'Lorem Ipsum Title 3',
		// 		altText: 'Placeholder image 3'
		// 	},
		// 	{
		// 		subTitle: 'Incididunt ut labore et dolore',
		// 		img: '/images/gallery/16.jpg',
		// 		title: 'Lorem Ipsum Title 4',
		// 		altText: 'Placeholder image 4'
		// 	}
		// ],
		// [
		// 	{
		// 		subTitle: 'Sed do eiusmod tempor',
		// 		img: '/images/gallery/17.jpg',
		// 		title: 'Lorem Ipsum Title 3',
		// 		altText: 'Placeholder image 3'
		// 	},
		// 	{
		// 		subTitle: 'Incididunt ut labore et dolore',
		// 		img: '/images/gallery/17.jpg',
		// 		title: 'Lorem Ipsum Title 4',
		// 		altText: 'Placeholder image 4'
		// 	}
		// ],
	];

	const baseInfo = [
		{
			title: 'Time',
			counter: '43-62 min',
			icon: '/icons/clock.svg'
		},
		{
			title: 'Age',
			counter: '16+',
			icon: '/icons/age.svg'
		},
		{
			title: 'Players',
			counter: '1-8',
			icon: '/icons/players.svg'
		},
		{
			title: 'Mechanic',
			counter: 'Cooperative / Educative',
			icon: '/icons/mechanic.svg'
		},

		{
			title: 'Open Source',
			counter: '',
			icon: '/icons/open-source.svg'
		}
	];
</script>

<section id="features">
	<div class="container -mb-64">
		<div class="_12-column-grid large-gap">
			<div id="w-node-cebaa910-8405-e00e-71d5-142581d24bf7-b4ea5f94" class="">
				<div class="section-title-wrapper">
					<div class="dot"></div>
					<h2 class="section-small-title">Preview</h2>
				</div>
				<div class="work-content-block">
					{#each baseInfo as info}
						<div class="flex flex-row items-center justify-center">
							<img src={info.icon} class="mr-2 h-10 w-10" alt="" />
							<p class="large-text">
								{info.title} <span class="">{info.counter}</span>
							</p>
						</div>
					{/each}

					<a href="/app" target="_blank" class="button black w-button">Let's start</a>
				</div>
			</div>
			<div
				id="w-node-_64632a33-4fac-cd03-1cbb-94ca7786b3da-b4ea5f94"
				class="showcase-half-img-wrap"
			>
				<a href="/" class="project-link w-inline-block">
					<div class="project-thumbnail-wrapper">
						<img
							loading="lazy"
							alt="project-thumbnail"
							src="/images/gallery/7.JPG"
							class="project-thumbnail"
						/>
						<div class="image-mask"></div>
					</div>
					<!-- <div class="">
						<div class="project-info-block">
							<div class="medium-text">Lorem Ipsum</div>
							<div class="standard-text black-50">Lorem, Ipsum, jest, tekstem</div>
						</div>
					</div> -->
				</a>
			</div>

			<!-- <div id="w-node-_2965d7b9-b3c9-42af-b0ef-506a6d5fe66d-b4ea5f94" class="related-showcase-wrap">
				<div
					id="w-node-_2965d7b9-b3c9-42af-b0ef-506a6d5fe679-b4ea5f94"
					class="showcase-half-img-wrap"
				>
					<a
						href="/showcase/elytone"
						data-w-id="2965d7b9-b3c9-42af-b0ef-506a6d5fe67a"
						class="project-link w-inline-block"
					>
						<div data-w-id="2965d7b9-b3c9-42af-b0ef-506a6d5fe67b" class="project-thumbnail-wrapper">
							<img
								loading="lazy"
								alt="project-thumbnail"
								src="images/6822fd51798ca8a5eda3be51_level-showcase-elytone-full-img-1.jpg"
								class="project-thumbnail"
							/>
							<div class="image-mask"></div>
						</div>
						<div class="">
							<div class="project-info-block">
								<div class="medium-text">Elytone</div>
								<div class="standard-text black-50">Audio, Electronics, Manufacturing <br /></div>
							</div>
						</div>
					</a>
				</div>
				<div
					id="w-node-_2965d7b9-b3c9-42af-b0ef-506a6d5fe66e-b4ea5f94"
					class="showcase-half-img-wrap"
				>
					<a
						href="/showcase/act-genomics"
						data-w-id="2965d7b9-b3c9-42af-b0ef-506a6d5fe66f"
						class="project-link w-inline-block"
					>
						<div data-w-id="2965d7b9-b3c9-42af-b0ef-506a6d5fe670" class="project-thumbnail-wrapper">
							<img
								loading="lazy"
								alt="project-thumbnail"
								src="images/6822feb454b7b5e31ec71c3a_level-showcase-act-genomics-full-img-1.jpg"
								class="project-thumbnail"
							/>
							<div class="image-mask"></div>
						</div>
						<div class="">
							<div class="project-info-block">
								<div class="medium-text">ACT Genomics</div>
								<div class="standard-text black-50">Healthcare, Medical, Research</div>
							</div>
						</div>
					</a>
				</div>
			</div> -->
		</div>
	</div>
	<div class="container">
		{#each gallery as imgSet}
			<div class="showcase-component">
				<div class="_4-rem-showcase-divider"></div>
				<div class="related-showcase-wrap">
					<div
						id="w-node-_1cf0c83d-a3ae-fc7b-ff9e-a4a3d330e65d-b4ea5f9d"
						class="showcase-half-img-wrap"
					>
						<a href="/" class="project-link w-inline-block">
							<div class="project-thumbnail-wrapper">
								<img
									src={imgSet[0].img}
									loading="lazy"
									alt={imgSet[0].altText}
									class="project-thumbnail"
								/>
								<div class="image-mask"></div>
							</div>
							<div class="">
								<div class="project-info-block">
									<div class="medium-text">{imgSet[0].title}</div>
									<div class="standard-text black-50">{imgSet[0].subTitle}</div>
								</div>
							</div>
						</a>
					</div>
					<div
						id="w-node-_1cf0c83d-a3ae-fc7b-ff9e-a4a3d330e669-b4ea5f9d"
						class="showcase-half-img-wrap"
					>
						<a href="/" class="project-link w-inline-block">
							<div class="project-thumbnail-wrapper">
								<img
									src={imgSet[1].img}
									loading="lazy"
									alt={imgSet[0].altText}
									class="project-thumbnail"
								/>
								<div class="image-mask"></div>
							</div>
							<div class="">
								<div class="project-info-block">
									<div class="medium-text">{imgSet[1].title}</div>
									<div class="standard-text black-50">{imgSet[1].subTitle}</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- <section>
	
</section> -->

<style lang="postcss">
</style>
