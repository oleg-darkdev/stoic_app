<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	const apiList = [
		{
			title: 'Seneca',
			link: '/api/seneca'
		},
		{
			title: 'Epictetus',
			link: '/api/epictetus'
		},
		{
			title: 'Marcus Aurelius',
			link: '/api/marcus-aurelius'
		},
		{
			title: 'Gaius Musonius Rufus',
			link: '/api/gaius-musonius-rufus'
		}
	];
</script>

<section id="api">
	<div class="background black">
		<div class="container">
			<div class="_12-column-grid">
				<div id="w-node-_7ce556fd-d749-5a7a-bef7-a1c5868a5561-b4ea5f9a" class="">
					<div class="section-title-wrapper">
						<div class="dot white"></div>
						<h2 class="section-small-title white">API</h2>
					</div>
				</div>
				<div id="w-node-_7ce556fd-d749-5a7a-bef7-a1c5868a5566-b4ea5f9a" class="">
					<div class="medium-text white-60">
						Our public API provides access to authentic quotes from Seneca, Epictetus, Marcus
						Aurelius, and Gaius Musonius Rufus.
					</div>
				</div>
				<div id="w-node-_7ce556fd-d749-5a7a-bef7-a1c5868a5569-b4ea5f9a" class="industry-list">
					<div class="">
						{#each apiList as api}
							<a href={api.link} target="_blank">
								<div class="industry-item">
									<!-- : <span class='white-60'>{api.link}</span> -->
									<div class="large-text white">· {api.link} </div>
								</div>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
