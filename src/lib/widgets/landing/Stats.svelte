<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	const stats = [
		{
			count: 50,
			title: 'Stoic Quotations',
			desc: 'Dive into the authentic quotations of Stoic philosophers. Each quote is more than just words — it is wisdom tested by time.'
		},
		{
			count: 4,
			title: 'Stoic Philosophers',
			desc: 'Get to know the four key Stoics who left their mark on the history of Stoicism.'
		},
		{
			count: 15,
			title: 'Fundamentals of Stoicism',
			desc: 'Explore the fundamental concepts of Stoicism: the distinction between what is within our control and what is not, the value of virtue, the power of reason, and the importance of inner calm.'
		},
		{
			count: 0,
			title: 'Stoic Practices',
			desc: 'Stoicism is not just a philosophy, but a set of concrete practices that help manage emotions, accept the inevitable, and maintain inner balance.'
		}
	];
</script>

<div id="w-node-cebaa910-8405-e00e-71d5-142581d24b8e-b4ea5f94" class="statistic-wrapper">
	<div class="_12-column-grid">
		{#each stats as stat}
			<div id="w-node-cebaa910-8405-e00e-71d5-142581d24b99-b4ea5f94" class="">
				<div id="w-node-cebaa910-8405-e00e-71d5-142581d24b9a-b4ea5f94" class="statistic-item">
					<div class="big-statistic-text-wrapper">
						<div class="statistic-big-text">{stat.count}</div>
						<div class="standard-text">{stat.title}</div>
					</div>
					<div class="standard-text black-50">
						{stat.desc}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
</style>
