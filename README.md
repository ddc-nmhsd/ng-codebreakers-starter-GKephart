# Ng Code Breakers Wrap up Assignment
## Getting Started
A little more project setup is required before getting started. 
1. A new component for a detailed information view needs to be created and routed.
    * [Code For The Component](https://github.com/ddc-nmhsd/ng-codebreakers-starter-GKephart/blob/42e22de478d73d98c96d5ea0940686fb6dc1ce23/ng/src/app/detailed-code/detailed-code.component.ts#L1-L17)
    * [Routing Setup](https://github.com/ddc-nmhsd/ng-codebreakers-starter-GKephart/blob/42e22de478d73d98c96d5ea0940686fb6dc1ce23/ng/src/app/app-routing.module.ts#L11)
2. Slight code clean up on the detailed-code html
    * [remove formControlName="guess"](https://github.com/ddc-nmhsd/ng-codebreakers-starter-GKephart/blob/42e22de478d73d98c96d5ea0940686fb6dc1ce23/ng/src/app/detailed-code/detailed-code.component.html#L31-L32)
3. Enable Navigation on the codes route to the detailed code route.
    * In `/ng/src/app/codes.component.ts` inject the router service in the constructor
      * [Sample Constructor](https://github.com/ddc-nmhsd/ng-codebreakers-starter-GKephart/blob/42e22de478d73d98c96d5ea0940686fb6dc1ce23/ng/src/app/codes/codes.component.ts#L27-L41)
    *  In `/ng/src/app/codes.component.ts` create a method called `navigateToDetailedView`
      * [Example Method](https://github.com/ddc-nmhsd/ng-codebreakers-starter-GKephart/blob/42e22de478d73d98c96d5ea0940686fb6dc1ce23/ng/src/app/codes/codes.component.ts#L77-L87)
    * wire the detailed information button to route to the detailed code component
      * [Example click event binding](https://github.com/ddc-nmhsd/ng-codebreakers-starter-GKephart/blob/42e22de478d73d98c96d5ea0940686fb6dc1ce23/ng/src/app/codes/codes.component.html#L71-L73)
## Instructions 
### Overview
* Now that you have had a walk through of how to wire a component, it's time to enforce what you have learned through 
implementing a detailed view page for a specific code and creating a service for interacting with guesses on the server.
### Objectives 
#### Create a Guesses Service in `/ng/src/app/shared/services/guess.service.ts`
* The Guess interface has been provided for you 
* This service should have two methods:
   * getGuessByCodeId that takes a single argument of the codeId as a string.
   * createGuess that takes two arguments first the codeId as a string, and the second a guess object containing the current guess.
* Pay close attention to how to build out the guess url. 
     * The code service getAllUnResolvedCodes is a great example to follow on how to handle the guess url.
### Wire the individual code to display in the detailed-code view
* The code service already has a method for getting a code by id.
* remember to implement the OnInit interface and the ngOnInit method.
* the `*ngFor` structural directive used in the codes view will be required for this objective
   * the codes view uses the `*ngFor directive`
### Wire all the guesses for a code to display in the detailed-code view. 
* You will need to create the guess service before being able to complete this objective
* Remember to implement the OnInit interface and the ngOnInit method.
### Wire the submit a guess form to submit guesses to the server in the detailed-code view.
* You will need to create the guess service before being able to complete this objective.
* Form validation for this task is going to be difficult.
   * min and max length validation will need to be set dynamically depending on the length of the code returned by the server.
   * I recommend using the two methods setValidators and updateValueAndValidity provided by the Reactive Form's library provided by Angular.
### Extra Credit: Display success and failure messages on submission of the form submit a guess form.
* The post method for submitting a guess comes back with details about the previous guess, and the detailed code template has a place to display that info.
