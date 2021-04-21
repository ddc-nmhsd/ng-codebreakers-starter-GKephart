import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SplashComponent} from './splash/splash.component';
import {CodesComponent} from './codes/codes.component';


//Routes is an array of route objects. the route object defines
// the url path to a synthetic page and what component should be called when the page is visited
const routes: Routes = [
    {path: 'codes', component: CodesComponent},
    {path: '', component: SplashComponent}
];

// utility array that simplifies defining the declarations in app.module.ts
export const allAppComponents = [SplashComponent, CodesComponent];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}