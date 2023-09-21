import { transformQuiz } from './transformQuiz';

export async function fetchQuestion() {
	let userInfo = JSON.parse(localStorage.getItem('userInfo'));
	console.log(userInfo);
	let quiz_data;
	try {
		const resp = await fetch(
			`https://opentdb.com/api.php?amount=10&category=${userInfo.category}&difficulty=${userInfo.difficulty}&type=multiple`
		);
		const questions = await resp.json();
		quiz_data = questions.results.map(transformQuiz);
		console.log(quiz_data, 1);
		localStorage.setItem('quiz', JSON.stringify(quiz_data));
	} catch (e) {
	} finally {
	}
	return quiz_data;
}
