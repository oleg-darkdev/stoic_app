<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	import links from '../data/links';

	const contacts = [
		{
			title: 'Linkedin',
			link: 'https://www.linkedin.com/in/oleg-darkdev'
		},
		{
			title: 'Facebook',
			link: 'https://www.facebook.com/hulio.mondre'
		},
		{
			title: 'GitHub',
			link: 'https://github.com/oleg-darkdev/'
		},
		{
			title: 'WWWW',
			link: 'https://oleg-darkdev.vercel.app/'
		},
		{
			title: 'Buy me a coffee',
			link: 'https://buymeacoffee.com/oleg_darkdev'
		}
	];
</script>

<div class="footer-container">
	<div class="_12-column-grid large-gap">
		<a
			id="w-node-a8575ca2-1aaa-00b4-b132-db92cda4632b-6e8bb146"
			href="/"
			aria-current="page"
			class="w-inline-block w--current"
		>
			<img src="/images/logo_light.svg" loading="lazy" alt="" class="h-20 w-64" />
		</a>
		<div id="w-node-d429f99a-70bc-6376-15b8-e98d6e8bb14b-6e8bb146" class="service-content-block">
			<div class="large-text white">
				This educational tabletop game immerses you in the philosophy of Stoicism, turning abstract
				ideas into practical experience through cards, challenges, and quotes from the great Stoics.
				The game is complemented by a web application that deepens your knowledge, provides
				interactive materials, and helps analyze the quotes, transforming the learning process into
				an engaging and mindful journey.
			</div>
			<a href="/app" target="_blank" class="button w-button">Let's start</a>
		</div>
		<div id="w-node-d429f99a-70bc-6376-15b8-e98d6e8bb150-6e8bb146" class="divider white"></div>
		<div id="w-node-d429f99a-70bc-6376-15b8-e98d6e8bb151-6e8bb146" class="back-to-top-block">
			<a href="#top" class="back-to-top-button w-inline-block">
				<div class="top-arrow-mask">
					<div class="top-arrow-wrapper">
						<img
							src="/images/65b2247ecca0749a612d0df4_Up-Arrow.svg"
							loading="lazy"
							alt=""
							class="back-to-top-arrow-icon"
						/>
						<img
							src="/images/65b2247ecca0749a612d0df4_Up-Arrow.svg"
							loading="lazy"
							alt=""
							class="back-to-top-arrow-icon"
						/>
					</div>
				</div>
				<div class="standard-text white-60">Top</div>
			</a>
		</div>
		<div
			id="w-node-d429f99a-70bc-6376-15b8-e98d6e8bb159-6e8bb146"
			class="footer-link-block-wrapper"
		>
			<div id="contact" class="standard-text white">Homepage</div>
			<div class="footer-link-list">
				{#each links as link}
					<!-- w--current -->
					<a href={link.link} aria-current="page" class="footer-link">{link.title}</a>
				{/each}
			</div>
		</div>
		<div
			id="w-node-d429f99a-70bc-6376-15b8-e98d6e8bb16b-6e8bb146"
			class="footer-link-block-wrapper"
		>
			<div class="standard-text white">Contact</div>
			<div class="footer-link-list">
				{#each contacts as contact}
					<a href={contact.link} target="_blank" class="footer-link">{contact.title}</a>
				{/each}
			</div>
		</div>
		<!-- <div
			id="w-node-d429f99a-70bc-6376-15b8-e98d6e8bb17b-6e8bb146"
			class="footer-link-block-wrapper"
		>
			<div class="standard-text white">Legal</div>
			<div class="footer-link-list">
				<a href="/privacy" class="footer-link">Privacy</a>
				<a href="/terms" class="footer-link">Terms</a>
				<a fs-cc="open-preferences" href="#" class="footer-link">Cookies</a>
			</div>
		</div> -->
	</div>
	<div class="copyright">
		<div class="_12-column-grid align-center">
			<div
				id="w-node-e044da9c-d56f-d318-4d19-a45e790f8066-6e8bb146"
				class="standard-text white-60 is-copyright"
			>
				<a
					href="https://github.com/oleg-darkdev/"
					target="_blank"
					class="local-link"
					style="display: block;"
				>
					Development by oleg_darkdev
				</a>
			</div>
			<div id="w-node-da75bfd8-8dec-d230-5c38-627b211ea160-6e8bb146" class="footer-language-wrap">
				<!-- <img src="images/67a03af36f4a48dde3b788a9_icon-globe.svg" loading="lazy" alt="" /> -->
				<div class="locales-wrapper w-locales-list">
					<div role="list" class="locales-list w-locales-items">
						<!-- <div role="listitem" class="locale w-locales-item">
							<a
								hreflang="en"
								href="/"
								aria-current="page"
								class="local-link w--current"
								style="display: none;">English</a
							>
						</div> -->
						<div role="listitem" class="locale w-locales-item">
							<!-- https://github.com/oleg-darkdev/oleg_darkdev -->
							<!-- <a
								href="https://github.com/oleg-darkdev/"
								target="_blank"
								class="local-link"
								style="display: block;"
							>
								Development by oleg_darkdev
							</a> -->
						</div>
					</div>
				</div>
			</div>
			<div id="w-node-e044da9c-d56f-d318-4d19-a45e790f8068-6e8bb146" class="footer-level-team-wrap">
				<!-- <a
					data-w-id="e044da9c-d56f-d318-4d19-a45e790f8069"
					href="/"
					target="_blank"
					class="footer-head-icon _1 w-inline-block"
				>
					<img
						loading="lazy"
						src="images/6686351116cd929172239fcd_Josh.png"
						alt=""
						class="footer-head-img"
					/>
					<div class="footer-linkedin-wrap">
						<div class="footer-linkedin-inner-wrap">
							<div class="footer-linkedin-inner-left">
								<p>Lorem impsum</p>
								<p class="text-size-small text-color-grey">Lorem</p>
							</div>
							<div class="footer-linkedin-inner-right">
								<img
									loading="lazy"
									src="images/6686351216cd92917223a045_Icon%20simple-linkedin.svg"
									alt=""
									class="linkedin-icon"
								/>
							</div>
							<div class="linkedin-small-rectangle"></div>
						</div>
					</div>
				</a> -->
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
