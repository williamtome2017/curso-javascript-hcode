class CalcController {

	constructor() {

		this._displayCalc = "0";
		this._currentDate;
		this.initialize();

	}

	initialize() {
		let displayCalcEl = document.querySelector('#display');
		let dateEl = document.querySelector('#data');
		let timeEl = document.querySelector('#hora');

		displayCalcEl.innerHTML = '4567';
		dateEl.innerHTML = '25/12/2020';
		timeEl.innerHTML = '00:01';
	}

	get displayCalc() {
		return this._displayCalc;
	}

	get dataAtual() {
		return this._currentDate;
	}

	set displayCalc(value) {
		this._displayCalc = value;
	}

	set dataAtual(value) {
		this._currentDate = value;
	}

}