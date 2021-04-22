//Import is how code is shared across different files in javascript/typescript
import {Component, OnInit} from '@angular/core';
import {Code} from '../shared/classes/Code';
import {CodeService} from '../shared/services/code.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


//decorator that marks a class as an Angular Component
@Component({
	// url to the template containing the html (view) for this component.
	templateUrl: './codes.component.html'
})

/*
* Main component for the codes view
 */
export class CodesComponent implements OnInit {
	/**
	 * State variable containing all of the codes returned by the server
	 * @var Codes[] codes and array containing all the code objects that exists on the server
	 */
	public codes: Code[] = [];

	public codeForm: FormGroup;

	constructor(private codeService: CodeService, private formBuilder: FormBuilder) {
		this.codeForm = this.formBuilder.group({
			pool: ["", [Validators.required]],
			length: ["", [Validators.required, Validators.maxLength(20)]]
		})
	}

	ngOnInit() {
		this.setAllCodes()
	}

	/**
	 * Simple mutator method that interacts with the code service to grab all the codes from the server and sets
	 * them to the codes state variable
	 */
	setAllCodes(): void {
		this.codeService.getAllCodes().subscribe(reply => {
			this.codes = reply
		});
	}

	createCode(): void {

		console.log(this.codeForm)
		const code: Code = {
			id: null,
			created: null,
			pool: this.codeForm.value.pool,
			length: this.codeForm.value.length,
			guessCount: null,
			solved: null,
			text: null
		}

		this.codeService.createCode(code).subscribe(response => {
			this.codeForm.reset()
			this.setAllCodes()
		})
	}
}