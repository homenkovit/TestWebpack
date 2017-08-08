import "./index2.js"
// import "./style.sass"
// import "./fonts.sass"


window.myForm = {
	validate() {
		let myForm = document.querySelector('.myForm');

		let errorField = [];

		console.log('Привет')
	},

	getDate() {
		// return {
		// 	fio: querySelector(‘[name =«fio»]’).
		// 	value = ;
		// }
	},

	setDate(obj) {
		// querySelector(‘[name = «fio»]’).
		// value = obj.fio;
		// querySelector(‘[name = «phone»]’).
		// value = obj.phone;
	},

	submit(e) {

	}
};

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', window.myForm.validate);
