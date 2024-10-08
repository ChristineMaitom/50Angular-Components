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
import {CharactercounterComponent} from "./components/charactercounter/charactercounter.component";
import {PalindromecheckerComponent} from "./components/palindromechecker/palindromechecker.component";
import {TemperatureConverterComponent} from "./components/temperatureconverter/temperatureconverter.component";
import {ShoppingListComponent} from "./components/shoppinglist/shoppinglist.component";
import {FactorialCalculatorComponent} from "./components/factorialcalculator/factorialcalculator.component";
import {TodoManagerComponent} from "./components/todomanager/todomanager.component";
import {GuessNumberGameComponent} from "./components/guessnumbergame/guessnumbergame.component";
import {WordCounterComponent} from "./components/wordcounter/wordcounter.component";
import {RandomNumberGeneratorComponent} from "./components/randomnumbergenerator/randomnumbergenerator.component";
import {MultiplicationcheckerComponent} from "./components/multiplicationchecker/multiplicationchecker.component";
import {UppercaseConverterComponent} from "./components/uppercaseconverter/uppercaseconverter.component";
import {WordShufflerComponent} from "./components/wordshuffler/wordshuffler.component";
import {BMISolverComponent} from "./components/bmisolver/bmisolver.component";
import {UsernameValidatorComponent} from "./components/usernamevalidator/usernamevalidator.component";
import {InterestCalculatorComponent} from "./components/interestcalculator/interestcalculator.component";
import {CompoundInterestCalculatorComponent} from "./components/compoundinterestcalculator/compoundinterestcalculator.component";
import {FibonacciGeneratorComponent} from "./components/fibonaccigenerator/fibonaccigenerator.component";
import {OddSumCalculatorComponent} from "./components/oddsumcalculator/oddsumcalculator.component";
import {CurrencyFormatterComponent} from "./components/currencyformatter/currencyformatter.component";
import {RandomQuoteDisplayComponent} from "./components/randomquotedisplay/randomquotedisplay.component";
import {UppercaseGreetingComponent} from "./components/uppercasegreeting/uppercasegreeting.component";
import {DivisibleCheckerComponent} from "./components/divisiblechecker/divisiblechecker.component";
import {LetterReplacerComponent} from "./components/letterreplacer/letterreplacer.component";
import {CountdowntimerComponent} from "./components/countdowntimer/countdowntimer.component";
import {UnitconverterComponent} from "./components/unitconverter/unitconverter.component";
import {DicerollerComponent} from "./components/diceroller/diceroller.component";
import {PasswordStrengthCheckerComponent} from "./components/passwordstrengthchecker/passwordstrengthchecker.component";
import {CreatingbracketComponent} from "./components/creatingbracket/creatingbracket.component";
import {DailyjournalComponent} from "./components/dailyjournal/dailyjournal.component";
import {CheckmbpsComponent} from "./components/checkmbps/checkmbps.component";
import {BooleancheckerComponent} from "./components/booleanchecker/booleanchecker.component";
import {DowhileloopComponent} from "./components/dowhileloop/dowhileloop.component";


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
  {path: 'charactercounter',  component:CharactercounterComponent},
  {path: 'palindromechecker',  component:PalindromecheckerComponent},
  {path: 'temperatureconverter',  component:TemperatureConverterComponent},
  {path: 'shoppinglist',  component:ShoppingListComponent},
  {path: 'factorialcalculator',  component:FactorialCalculatorComponent},
  {path: 'todomanager',  component:TodoManagerComponent},
  {path: 'guessnumbergame',  component:GuessNumberGameComponent},
  {path: 'wordcounter',  component:WordCounterComponent},
  {path: 'randomnumbergenerator',  component:RandomNumberGeneratorComponent},
  {path: 'multiplicationchecker',  component:MultiplicationtableComponent},
  {path: 'uppercaseconverter',  component:UppercaseConverterComponent},
  {path: 'wordshuffler',  component:WordShufflerComponent},
  {path: 'bmisolver',  component:BMISolverComponent},
  {path: 'usernamevalidator',  component:UsernameValidatorComponent},
  {path: 'interestcalculator',  component:InterestCalculatorComponent},
  {path: 'compoundinterestcalculator',  component:CompoundInterestCalculatorComponent},
  {path: 'fibonaccigenerator',  component:FibonacciGeneratorComponent},
  {path: 'oddsumcalculator',  component:OddSumCalculatorComponent},
  {path: 'currencyformatter',  component:CurrencyFormatterComponent},
  {path: 'randomquotedisplay',  component:RandomQuoteDisplayComponent},
  {path: 'uppercasegreeting',  component:UppercaseGreetingComponent},
  {path: 'letterreplacer',  component:LetterReplacerComponent},
  {path: 'countdowntimer',  component:CountdowntimerComponent},
  {path: 'unitconverter',  component:UnitconverterComponent},
  {path: 'diceroller',  component:DicerollerComponent},
  {path: 'passwordstrengthchecker',  component:PasswordStrengthCheckerComponent},
  {path: 'creatingbracket',  component:CreatingbracketComponent},
  {path: 'dailyjournal',  component:DailyjournalComponent},
  {path: 'checkmbps',  component:CheckmbpsComponent},
  {path: 'booleanchecker',  component:BooleancheckerComponent},
  {path: 'dowhileloop',  component:DowhileloopComponent},

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
    BookmarklistComponent,
    CharactercounterComponent,
    PalindromecheckerComponent,
    TemperatureConverterComponent,
    ShoppingListComponent,
    FactorialCalculatorComponent,
    TodoManagerComponent,
    GuessNumberGameComponent,
    WordCounterComponent,
    RandomNumberGeneratorComponent,
    MultiplicationcheckerComponent,
    UppercaseConverterComponent,
    WordShufflerComponent,
    BMISolverComponent,
    UsernameValidatorComponent,
    InterestCalculatorComponent,
    CompoundInterestCalculatorComponent,
    FibonacciGeneratorComponent,
    OddSumCalculatorComponent,
    CurrencyFormatterComponent,
    RandomQuoteDisplayComponent,
    UppercaseGreetingComponent,
    DivisibleCheckerComponent,
    LetterReplacerComponent,
    CountdowntimerComponent,
    UnitconverterComponent,
    DicerollerComponent,
    PasswordStrengthCheckerComponent,
    CreatingbracketComponent,
    DailyjournalComponent,
    CheckmbpsComponent,
    BooleancheckerComponent,
    DowhileloopComponent,

  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
