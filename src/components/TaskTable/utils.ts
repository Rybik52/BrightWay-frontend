export const formatDate = (dateString: number): string => {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
	};
	const date = new Date(dateString);
	const formattedDate = date.toLocaleDateString("ru", options);
	return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};
