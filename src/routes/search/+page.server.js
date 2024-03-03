import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, url }) => {
		const formData = await request.formData();

		console.log('formData', formData);
		console.log('url', url);

		redirect(303, '/search');
	}
};
