import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import {DisplayhelloworldComponent} from "./components/displayhelloworld/displayhelloworld.component";
import {ShowhellobuttonComponent} from "./components/showhellobutton/showhellobutton.component";
import {CounterComponent} from "./components/counter/counter.component";
import {SimpleformComponent} from "./components/simpleform/simpleform.component";
import {DisplaynameComponent} from "./components/displayname/displayname.component";
import {UserageComponent} from "./components/userage/userage.component";
import {UsergreetingComponent} from "./components/usergreeting/usergreeting.component";
import {CalculatorComponent} from "./components/calculator/calculator.component";
import {TextlengthComponent} from "./components/textlength/textlength.component";
import {CurrencyconverterComponent} from "./components/currencyconverter/currencyconverter.component";
import {EvenoddcheckerComponent} from "./components/evenoddchecker/evenoddchecker.component";
import {WordreverserComponent} from "./components/wordreverser/wordreverser.component";
import {ShowdateComponent} from "./components/showdate/showdate.component";
import {ShowUsernameComponent} from "./components/showusername/showusername.component";
import {MultiplicationtableComponent} from "./components/multiplicationtable/multiplicationtable.component";
import {SimpleloginComponent} from "./components/simplelogin/simplelogin.component";
import {FahrenheittocelsiusComponent} from "./components/fahrenheittocelsius/fahrenheittocelsius.component";
import {BookmarklistComponent} from "./components/bookmarklist/bookmarklist.component";


const routes: Routes = [
  {path: '',  component:DisplayhelloworldComponent},
  {path: 'showhellobutton',  component:ShowhellobuttonComponent},
  {path: 'counter',  component:CounterComponent},
  {path: 'simpleform',  component:SimpleformComponent},
  {path: 'displayname',  component:DisplaynameComponent},
  {path: 'userage',  component:UserageComponent},
  {path: 'usergreeting',  component:UsergreetingComponent},
  {path: 'calculator',  component:CalculatorComponent},
  {path: 'textlength',  component:TextlengthComponent},
  {path: 'currencyconverter',  component:CurrencyconverterComponent},
  {path: 'evenoddchecker',  component:EvenoddcheckerComponent},
  {path: 'wordreverser',  component:WordreverserComponent},
  {path: 'showdate',  component:ShowdateComponent},
  {path: 'showusername',  component:ShowUsernameComponent},
  {path: 'multiplicationtable',  component:MultiplicationtableComponent},
  {path: 'simplelogin',  component:SimpleloginComponent},
  {path: 'fahrenheittocelsius',  component:FahrenheittocelsiusComponent},
  {path: 'bookmarklist',  component:BookmarklistComponent},
]

@NgModule ({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],

  declarations: [
    AppComponent,
    DisplayhelloworldComponent,
    ShowhellobuttonComponent,
    CounterComponent,
    SimpleformComponent,
    DisplaynameComponent,
    UserageComponent,
    UsergreetingComponent,
    CalculatorComponent,
    TextlengthComponent,
    CurrencyconverterComponent,
    EvenoddcheckerComponent,
    WordreverserComponent,
    ShowUsernameComponent,
    MultiplicationtableComponent,
    SimpleloginComponent,
    FahrenheittocelsiusComponent,
    BookmarklistComponent
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
