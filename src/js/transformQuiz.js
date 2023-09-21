export const transformQuiz = (data, id) => {
	let task_info = {
		id: id + 1,
		question: data.question,
		correct_answer: data.correct_answer,
		options: [...data.incorrect_answers, data.correct_answer],
	};
	return task_info;
};
