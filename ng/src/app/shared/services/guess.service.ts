import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Guess} from '../classes/Guess';

@Injectable({providedIn: "root"})

export class GuessService {
	private partialGuessUrlEndpoint = "codebreaker/codes";
	constructor(private http: HttpClient) {}
	public getGuessByCodeId(codeId: string): Observable<Guess[]> {
		return (this.http.get<Guess[]>(`${this.partialGuessUrlEndpoint}/${codeId}/guesses`))
	}
	public createGuess(codeId: string, guess: Guess): Observable<Guess> {
		return (this.http.post<Guess>(`${this.partialGuessUrlEndpoint}/${codeId}/guesses`, guess))
	}
}
