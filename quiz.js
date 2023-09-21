import { fetchQuestion } from './src/js/fetchQuestion';
const formField = document.querySelector('form');
const question_1 = formField.querySelector('.question_1');
const question_2 = formField.querySelector('.question_2');
const question_3 = formField.querySelector('.question_3');
const question_4 = formField.querySelector('.question_4');
const question_5 = formField.querySelector('.question_5');
const question_6 = formField.querySelector('.question_6');
const question_7 = formField.querySelector('.question_7');
const question_8 = formField.querySelector('.question_8');
const question_9 = formField.querySelector('.question_9');
const question_10 = formField.querySelector('.question_10');

const questionsFieldArr = [
	question_1,
	question_2,
	question_3,
	question_4,
	question_5,
	question_6,
	question_7,
	question_8,
	question_9,
	question_10,
];

window.addEventListener('DOMContentLoaded', async () => {
	let questions = await fetchQuestion();
	questions.forEach((question, i) => {
		let questionField = questionsFieldArr[i];
		let questionBlock = questionField.querySelector('span');
		questionBlock.innerHTML = question.question;

		question.options.forEach((option) => {
			const optionElem = document.createElement('option');
			optionElem.value = option;
			optionElem.innerHTML = option;
			const select = questionField.querySelector('select');
			select.append(optionElem);
		});
	});
});
