import { fetchCategories } from './src/js/fetchCategory';

const formField = document.querySelector('form');
const nameInputField = formField.querySelector('#name');
const catagoryField = formField.querySelector('#category');
const difficultyField = formField.querySelector('#difficulty');

window.addEventListener('DOMContentLoaded', () => {
	fetchCategories().then((datas) => {
		localStorage.setItem('categories', JSON.stringify(datas));
		for (let i of datas) {
			let optionEle = document.createElement('option');
			optionEle.innerHTML = i.name;
			optionEle.value = i.id;
			catagoryField.append(optionEle);
		}
	});
});

nameInputField.addEventListener('change', (e) => {
	let name = e.target.value.trim();
	catagoryField.removeAttribute('disabled');
	difficultyField.removeAttribute('disabled');
	if (!name.length) {
		catagoryField.setAttribute('disabled', true);
		difficultyField.setAttribute('disabled', true);
	}
});

formField.addEventListener('submit', (e) => {
	e.preventDefault();
	let username = nameInputField.value;
	let difficulty = difficultyField.value;
	let category = catagoryField.value;
	const userInfo = {
		username,
		difficulty,
		category,
	};
	localStorage.setItem('userInfo', JSON.stringify(userInfo));
	navigation.navigate('src/quiz.html');
	console.log(userInfo);
});
