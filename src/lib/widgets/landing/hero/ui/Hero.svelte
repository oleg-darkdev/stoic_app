<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	// philosophers citats

	const eduData = [
		{
			id: 1,
			text: 'Stoic Quotations',
			sup: '01',
			href: '/#citats'
		},
		{
			id: 2,
			text: 'Stoic Philosophers',
			sup: '02',
			href: '/#philosophers'
		},
		{
			id: 3,
			text: 'Fundamentals of Stoicism',
			sup: '03',
			href: '/'
		},
		{
			id: 4,
			text: 'Stoic Practices',
			sup: '04',
			href: '/'
		}
	];
</script>

<div class="hero-background-video is-2 w-background-video w-background-video-atom">
	<image class="" src="" />
	<!-- 		style="background-image:url(&quot;https://cdn.prod.website-files.com/65b22404f7d1427d1b8d612f/65cdbecc6149e6e6dd2764ed_0215_1-poster-00001.jpg&quot;)"
 -->
</div>
<div class="hero-container">
	<div class="hero-text-wrapper">
		<div class="_12-column-grid">
			<h1 id="w-node-cebaa910-8405-e00e-71d5-142581d24b66-b4ea5f94" class="hero-heading">
				From Print to Practice: Start Your Stoic Journey.
			</h1>
			<div
				id="w-node-cebaa910-8405-e00e-71d5-142581d24b68-b4ea5f94"
				class="standard-text white-60 hide-mobile"
			>
				This is not just a game, but an educational experience based on the authentic texts of
				Seneca, Epictetus, Marcus Aurelius, and Gaius Musonius Rufus.
			</div>
		</div>
		<a href="#expertise" class="button mobile-hero w-button">Lorem Ipsum jest</a>
	</div>
	<div class="service-intro-list hide-mobile">
		<div class="_12-column-grid">
			{#each eduData as data}
				<a
					id="w-node-cebaa910-8405-e00e-71d5-142581d24b6c-b4ea5f94"
					href={data.href}
					class="service-intro-block w-inline-block"
				>
					<div class="standard-text white">{data.text} <sup>{data.sup}</sup></div>
				</a>
			{/each}

			<!-- <a
				id="w-node-cebaa910-8405-e00e-71d5-142581d24b71-b4ea5f94"
				href="/"
				class="service-intro-block w-inline-block"
			>
				<div class="standard-text white">Lorem Ipsum jest <sup>02</sup></div>
			</a>
			<a
				id="w-node-cebaa910-8405-e00e-71d5-142581d24b76-b4ea5f94"
				href="/"
				class="service-intro-block w-inline-block"
			>
				<div class="standard-text white">Lorem Ipsum jest <sup>03</sup></div>
			</a>
			<a
				id="w-node-cebaa910-8405-e00e-71d5-142581d24b7b-b4ea5f94"
				href="/"
				class="service-intro-block w-inline-block"
			>
				<div class="standard-text white">Lorem Ipsum jest <sup>04</sup></div>
			</a> -->
		</div>
	</div>
</div>

<style lang="postcss">
</style>
