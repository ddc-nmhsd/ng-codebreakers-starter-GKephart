import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({templateUrl:"./detailed-code.component.html"})

export class DetailedCodeComponent {
	/**
	 * The codeId grabbed from the url, the value is set in the constructor and cannot be updated after it has been initialized
	 * @var  string codeId
	 */
	private readonly codeId: string;

	constructor(private currentRoute: ActivatedRoute) {
		// this.route.snapshot grabs pertinent url parameters of off the url on object instantiation.
		// <string> asserts that what we get back from currentRoute.snapshot.paramMap.get('codeId') will be a string.
		this.codeId = <string>this.currentRoute.snapshot.paramMap.get('codeId');
	}
}