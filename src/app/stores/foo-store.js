import {observable, action} from "mobx";

export class FooStore {
	@observable bar;
	@observable cnt;

	constructor() {
		this.bar = "blabla";
		this.cnt = 0;
	}

	@action	updateBar(text) {
		this.bar = text;
	}
	@action	updateCnt() {
		this.cnt++;
	}

}
