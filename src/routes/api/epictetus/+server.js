import { json } from '@sveltejs/kit';
import { second } from '$sharedData';

export async function GET(event) {
	const filteredPromo = second.filter((item) => item.author === 'Эпиктет');

	return json(filteredPromo);
}
