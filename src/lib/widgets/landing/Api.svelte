<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	const apiList = ['', '', '', '', '', '', '', ''];
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
							<div class="industry-item">
								<div class="large-text white">· Lorem Ipsum jest</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
