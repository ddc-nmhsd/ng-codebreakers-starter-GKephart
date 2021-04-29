# Ng Code Breakers Wrap up Assignment
## Getting Started
### Fully Doc blocked example: https://github.com/deep-dive-coding/ng-codebreakers

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
#### [Getting Started Recording](https://cnm-edu.zoom.us/rec/share/9hIyEhvZsEdnCsQEaTZzsBvpx3bctJnv-AbpX4N9UBwac4zLx9cAiblINpTxTH_H.vrIxR0_f-52dELmt?startTime=1619728180000  
## Instructions 
### Overview
* Now that you have had a walk through of how to wire a component, it's time to enforce what you have learned through 
implementing a detailed view page for a specific code and creating a service for interacting with guesses on the server.
### Objectives 
### Create a Guesses Service in `/ng/src/app/shared/services/guess.service.ts`
* The Guess interface has been provided for you 
* This service should have two methods:
   * getGuessByCodeId that takes a single argument of the codeId as a string.
   * createGuess that takes two arguments first the codeId as a string, and the second a guess object containing the current guess.
* Pay close attention to how to build out the guess url. 
     * The code service getAllUnResolvedCodes is a great example to follow on how to handle the guess url.
####[Create a Guesses Service Recording](https://cnm-edu.zoom.us/rec/play/wY1O_C1oNMsRX6crdgtG3_-cKwKS4iOXDLtuzYPDj2xWVWyuhK5_snoI_V60ujyivr1Zawj2C5-zaLP7.GIZLGbuAG-r6JuGa?autoplay=true&startTime=1619631054000)
### Wire the individual code to display in the detailed-code view
* The code service already has a method for getting a code by id.
* remember to implement the OnInit interface and the ngOnInit method.
* the ~~*ngFor~~ `*ngIf` structural directive used in the codes view will be required for this objective
  
####[Wire the individual code to display in the detailed-code view Recording](https://cnm-edu.zoom.us/rec/play/jCP0lbnqpeAgMiIpvoD5RADcN22Xnhxyq6dw7szGhhcx_dITtgzvi4E0VDhy1TWYX1dSHlLn97Bj1Yxu.hx0oCjPiW0DhegeR?autoplay=true&startTime=1619709411000)
   * the codes view uses the ~~*ngFor directive~~ `*ngIf` directive.
### Wire all the guesses for a code to display in the detailed-code view. 
* You will need to create the guess service before being able to complete this objective
* Remember to implement the OnInit interface and the ngOnInit method.
####[Wire all the guesses for a code to display in the detailed-code view Recording](https://cnm-edu.zoom.us/rec/play/N8TqKdJTAcZsUY3psXTEwE6aDXblLcKv89XF_3GNtOoTbPaxTkGoBIGBp-sJlH1AmyKB1gEQGnuE04Jh.rCfSZgaokf2einBe?autoplay=true&startTime=1619711166000)
### Wire the submit a guess form to submit guesses to the server in the detailed-code view.
* You will need to create the guess service before being able to complete this objective.
* Form validation for this task is going to be difficult.
   * min and max length validation will need to be set dynamically depending on the length of the code returned by the server.
   * I recommend using the two methods setValidators and updateValueAndValidity provided by the Reactive Form's library provided by Angular.
 ####[Wire the submit a guess form to submit guesses to the server in the detailed-code view Recording](https://cnm-edu.zoom.us/rec/play/HeX0stC93Yyd1LjfpbYFSx8kMe06HbZjs8zMCtYXAzlSoq-SCAVljBAmM8DTCFNDwLqPdQNSr6justGM.HjJTqxxoW7WVWEtt?autoplay=true&startTime=1619724054000)
 ####[Form Validation Recording](https://cnm-edu.zoom.us/rec/play/s57mXITX1vtGxbVqX4bCwVoVl9eaI9PxK69kypKECV4bnlEbPEbREdIwdfuAu8Ga-C2QQLVq41Haq916.p1YnJSrDtRLr9ngU?autoplay=true&startTime=1619725555000)   
### Extra Credit: Display success and failure messages on submission of the form submit a guess form.
* The post method for submitting a guess comes back with details about the previous guess, and the detailed code template has a place to display that info.
####[Display Success and Failure Messages](https://cnm-edu.zoom.us/rec/share/J2VRDJjBygf4F5lR-QxMPwIPewJAxQ9pQPrKv_PvGEt6Rbf13JfupJvCAfwXC0_X.otn0EyTqv8h7PAht?startTime=1619728180000)
