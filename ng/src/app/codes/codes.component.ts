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

	/**
	 * constructor method for the codes component.The constructor is called when bootstrapping the component
	 * and is called before ngOnInit. Values not related to the lifecycle of the component should be defined and set in
	 * the constructor.
	 * @param codeService HTTP service that interacts with the code endpoint on the server
	 * @param formBuilder provided by angular for the creation of Reactive forms
	 * @param router Router object that can navigate to other views and manipulate urls
	 */

	constructor(private codeService: CodeService, private formBuilder: FormBuilder, private router: Router) {
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
			this.navigateToDetailedView(code)
		})
	}
	/**
	 * Method for handling the redirect to the detailed-code view for a specific code when the user clicks the detailed
	 * information button for a specific code
	 * when an end user clicks on the detailed information
	 *
	 * @param code Code The code object that will be displayed in the detailed code view
	 */
	navigateToDetailedView(code: Code): void {
		this.router.navigate(['/detailed-code/', code.id]).catch(error => {
			console.error(error)
		})
	}
}