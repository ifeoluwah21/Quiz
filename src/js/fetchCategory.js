export const fetchCategories = async () => {
	let categories;
	try {
		const resp = await fetch('https://opentdb.com/api_category.php');
		const data = await resp.json();
		categories = data.trivia_categories;
	} catch (e) {
	} finally {
	}
	return categories;
};
