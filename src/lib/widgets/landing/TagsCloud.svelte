<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	const tags = [
		{ link: 'tags/body', tag: 'body' },
		{ link: 'tags/health', tag: 'health' },
		{ link: 'tags/illness', tag: 'illness' },
		{ link: 'tags/food', tag: 'food' },
		{ link: 'tags/injuries', tag: 'injuries' },
		{ link: 'tags/violence', tag: 'violence' },
		{ link: 'tags/torture', tag: 'torture' },
		{ link: 'tags/age', tag: 'age' },

		{ link: 'tags/anger', tag: 'anger' },
		{ link: 'tags/fear', tag: 'fear' },
		{ link: 'tags/anxiety', tag: 'anxiety' },
		{ link: 'tags/joy', tag: 'joy' },
		{ link: 'tags/sadness', tag: 'sadness' },
		{ link: 'tags/grief', tag: 'grief' },
		{ link: 'tags/suffering', tag: 'suffering' },
		{ link: 'tags/envy', tag: 'envy' },
		{ link: 'tags/hatred', tag: 'hatred' },
		{ link: 'tags/calmness', tag: 'calmness' },
		{ link: 'tags/moderation', tag: 'moderation' },
		{ link: 'tags/passions', tag: 'passions' },

		{ link: 'tags/virtue', tag: 'virtue' },
		{ link: 'tags/good', tag: 'good' },
		{ link: 'tags/vice', tag: 'vice' },
		{ link: 'tags/evil', tag: 'evil' },
		{ link: 'tags/honesty', tag: 'honesty' },
		{ link: 'tags/justice', tag: 'justice' },
		{ link: 'tags/conscience', tag: 'conscience' },
		{ link: 'tags/truth', tag: 'truth' },
		{ link: 'tags/deception', tag: 'deception' },

		{ link: 'tags/other people', tag: 'other people' },
		{ link: 'tags/friendship', tag: 'friendship' },
		{ link: 'tags/family', tag: 'family' },
		{ link: 'tags/people', tag: 'people' },
		{ link: "tags/other people's opinions", tag: "other people's opinions" },
		{ link: 'tags/society', tag: 'society' },
		{ link: 'tags/enemies', tag: 'enemies' },
		{ link: 'tags/power', tag: 'power' },
		{ link: 'tags/control', tag: 'control' },
		{ link: 'tags/social norms', tag: 'social norms' },

		{ link: 'tags/philosophy', tag: 'philosophy' },
		{ link: 'tags/mind', tag: 'mind' },
		{ link: 'tags/wisdom', tag: 'wisdom' },
		{ link: 'tags/truth', tag: 'truth' },
		{ link: 'tags/knowledge', tag: 'knowledge' },
		{ link: 'tags/learning', tag: 'learning' },
		{ link: 'tags/books', tag: 'books' },
		{ link: 'tags/values', tag: 'values' },
		{ link: 'tags/science', tag: 'science' },

		{ link: 'tags/death', tag: 'death' },
		{ link: 'tags/life', tag: 'life' },
		{ link: 'tags/steadfastness', tag: 'steadfastness' },
		{ link: 'tags/acceptance', tag: 'acceptance' },
		{ link: 'tags/courage', tag: 'courage' },
		{ link: 'tags/guidance', tag: 'guidance' },
		{ link: 'tags/valor', tag: 'valor' },
		{ link: 'tags/will', tag: 'will' },
		{ link: 'tags/peace', tag: 'peace' },
		{ link: 'tags/patience', tag: 'patience' }
	];
</script>

<section>
	<div class="container">
		<div
			data-w-id="cebaa910-8405-e00e-71d5-142581d24c10"
			class="big-heading-with-scroll-animation-wrapper"
		>
			<div class="text-scroll-animation">Stoic Quotes</div>
		</div>

		<div class="tools-block">
			<div class="_12-column-grid large-gap">
				<div id="w-node-_36e8b8be-e4cd-4742-2fb0-eccf8c2855c2-b4ea5f94" class="">
					<div
						id="w-node-_36e8b8be-e4cd-4742-2fb0-eccf8c2855c3-b4ea5f94"
						class="section-title-wrapper"
					>
						<div class="dot"></div>
						<h2 class="section-small-title">Tags list</h2>
					</div>
				</div>
				<div id="w-node-_36e8b8be-e4cd-4742-2fb0-eccf8c2855c7-b4ea5f94" class="tools-list">
					{#each tags as tag}
						<a href={tag.link} target="_blank" class="tools-item"
							><div class="standard-text">{tag.tag}</div></a
						>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
