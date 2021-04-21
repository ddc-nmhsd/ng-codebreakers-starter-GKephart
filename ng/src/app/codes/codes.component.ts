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

	constructor(private codeService: CodeService) {

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
}