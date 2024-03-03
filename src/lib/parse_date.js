export const parseDate = (rawDate) =>
	new Intl.DateTimeFormat('en-US', {
		dateStyle: 'short'
	}).format(new Date(rawDate));

export default parseDate;
