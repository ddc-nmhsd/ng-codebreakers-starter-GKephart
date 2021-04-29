import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CodeService} from '../shared/services/code.service';
import {Code} from '../shared/classes/Code';
import {GuessService} from '../shared/services/guess.service';
import {Guess} from '../shared/classes/Guess';
@Component({templateUrl:"./detailed-code.component.html"})

export class DetailedCodeComponent implements OnInit{
	/**
	 * The codeId grabbed from the url, the value is set in the constructor and cannot be updated after it has been initialized
	 * @var  string codeId
	 */
	private readonly codeId: string;

	public code: null | Code = null;

	public guesses : Guess[] = [];

	constructor(private currentRoute: ActivatedRoute, private codeService: CodeService, private guessService: GuessService) {
		// this.route.snapshot grabs pertinent url parameters of off the url on object instantiation.
		// <string> asserts that what we get back from currentRoute.snapshot.paramMap.get('codeId') will be a string.
		this.codeId = <string>this.currentRoute.snapshot.paramMap.get('codeId');
	}

	ngOnInit() {
		this.setCodeByCodeId(this.codeId);
		this.setGuessesByCodeId(this.codeId);
	}

	setCodeByCodeId(codeId: string) : void {
		this.codeService.getCodeByCodeId(this.codeId).subscribe(response => {
			this.code = response;
		})
	}

	setGuessesByCodeId(codeId: string): void {
		this.guessService.getGuessByCodeId(codeId).subscribe(response => {
			this.guesses = response;
		} )
	}


}