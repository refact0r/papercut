export const parseDate = (rawDate) => 
	new Intl.DateTimeFormat('en-GB', {
		dateStyle: 'full',
		timeStyle: 'long',
	}).format(new Date(rawDate))

export default parseDate