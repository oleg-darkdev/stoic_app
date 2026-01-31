<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	const team = [
		{
			linkedin: 'https://www.linkedin.com/in/oleg-darkdev',
			fullName: 'Oleg Medvedev',
			skill: 'Boardgames / Front-end developer',
			img: '/images/team/me.JPG'
		},
		{
			linkedin: '',
			fullName: 'Pikachu',
			skill: 'Design',
			img: '/images/team/pika.png'
		}
	];
</script>

<section>
	<div class="container">
		<div class="_12-column-grid large-gap">
			<div id="w-node-_398634c5-cf00-353f-96db-87241abea813-b4ea5f96" class="sticky">
				<div class="section-title-wrapper">
					<div class="dot"></div>
					<h2 class="section-small-title">Dream team</h2>
				</div>
				<div class="work-content-block">
					<div class="large-text">
						If the philosophy of Stoicism helps you navigate challenges and appreciate the value of
						each moment, we would be glad to have you on our team. 

						<!-- Join us to help create a game
						that inspires and teaches mindful living. -->
					</div>
					<a href="mailto:darkdev_brand@riseup.net" class="button black w-button">Join Us</a>
				</div>
			</div>
			<div id="w-node-_398634c5-cf00-353f-96db-87241abea81d-b4ea5f96" class="team-block">
				<div
					id="w-node-_4147cb43-7720-5174-b9b5-1b2c7cca85dd-b4ea5f96"
					class="team-collection-list-wrap w-dyn-list"
				>
					<div role="list" class="team-collection-list w-dyn-items">
						{#each team as member}
							<div
								id="w-node-_4147cb43-7720-5174-b9b5-1b2c7cca85df-b4ea5f96"
								role="listitem"
								class="team-collection-item w-dyn-item"
							>
								<div class="single-member-wrap">
									<div data-w-id="6bf12a20-ba53-feff-472a-ccca6dfaa0e8" class="image-mask-wrapper">
										<img
											loading="lazy"
											width="161"
											alt="{member.fullName} photo"
											src={member.img}
											class="image-effect"
										/>
										<div class="image-mask white"></div>
									</div>
									<div class="">
										<div class="team-member-info-block">
											<a
												aria-label="Oleg Medvedev"
												href={member.linkedin}
												target="_blank"
												class="single-member-link w-inline-block"
												><div class="medium-text">{member.fullName}</div>
												<div class="medium-text hide">Lorem impsum</div></a
											>
											<div class="standard-text black-50">{member.skill}</div>
										</div>
									</div>
								</div>
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
