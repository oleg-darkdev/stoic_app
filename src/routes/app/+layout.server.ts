// +layout.server.ts
import { second } from '$sharedData';

const emotional = [
	'anger',
	'fear',
	'anxiety',
	'joy',
	'sadness',
	'grief',
	'suffering',
	'envy',
	'hatred',
	'calmness',
	'moderation',
	'passions'
];

const moral = [
	'virtue',
	'good',
	'vice',
	'evil',
	'honesty',
	'justice',
	'conscience',
	'truth',
	'deception'
];

const social = [
	'other people',
	'friendship',
	'family',
	'people',
	"other people's opinions",
	'society',
	'enemies',
	'power',
	'control',
	'social norms'
];

const intellectual = [
	'philosophy',
	'mind',
	'wisdom',
	'truth',
	'knowledge',
	'learning',
	'books',
	'values',
	'science'
];

const existential = [
	'death',
	'life',
	'steadfastness',
	'acceptance',
	'courage',
	'guidance',
	'valor',
	'will',
	'peace',
	'patience'
];

function getRandomTags(tags: string[], min = 1): string[] {
	const shuffled = [...tags].sort(() => Math.random() - 0.5);
	const count = Math.max(min, Math.floor(Math.random() * tags.length) + 1);
	return shuffled.slice(0, count);
}

function filterByThemes(searchThemes: string[]) {
	const randomTags = getRandomTags(searchThemes, 1);

	return second.filter(
		(item) => item.themes && item.themes.filter((theme) => randomTags.includes(theme)).length > 0
	);
}

export function load() {
	const emotionalFiltered = filterByThemes(emotional);
	const moralFiltered = filterByThemes(moral);
	const socialFiltered = filterByThemes(social);
	const intellectualFiltered = filterByThemes(intellectual);
	const existentialFiltered = filterByThemes(existential);

	return {
		emotionalFiltered,
		moralFiltered,
		socialFiltered,
		intellectualFiltered,
		existentialFiltered
	};
}
