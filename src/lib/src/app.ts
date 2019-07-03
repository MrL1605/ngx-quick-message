//our root app component
<<<<<<< HEAD
import {Component, NgModule, VERSION, ViewChild} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {TabbedInputDirective} from './directive';
=======
import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {QuickMessage} from './directive';
>>>>>>> e07ec6cadcd6e66bc9cbc7f544185c2976f6ab26

@Component({
    selector: 'my-app',
    template: `
        <div>
            <h2>Hello {{name}}</h2>
<<<<<<< HEAD
            <div >
                <div class="col-sm-4">
                    <tabbed-input [onlyOptionsAllowed]="false" [initVal]="arr"
                                  [options]="autoPopulateOptions" #tabbedInput>
                    </tabbed-input>
                </div>
                <div class="btn btn-default" (click)="cleanCards()">Clear All</div>
            </div>
            <div class="col-sm-4">
                <div class="btn btn-default" (click)="getCards()">Get All</div>
                <ul class="list-group">
                    <li class="list-group-item" *ngFor="let i of result"> {{i}}</li>
                </ul>
            </div>

=======
            <div>
                <div class="col-sm-4">
                    <-- Need to add an example here -->
                </div>
            </div>
>>>>>>> e07ec6cadcd6e66bc9cbc7f544185c2976f6ab26
        </div>
    `,
})
export class App {

<<<<<<< HEAD
    @ViewChild("tabbedInput") tInput;
    arr: Array<string> = ['One', 'To2'];
    name: string = '';
    autoPopulateOptions: Array<string> = ['Option1', 'Oops2'];
    result: Array<string> = [];
=======
    name: string = '';
>>>>>>> e07ec6cadcd6e66bc9cbc7f544185c2976f6ab26

    constructor() {
        this.name = `Angular! v${VERSION.full}`;
    }

<<<<<<< HEAD
    cleanCards() {
        this.tInput.clearAll();
    }

    getCards() {
        this.result = this.tInput.getCards();
    }

=======
>>>>>>> e07ec6cadcd6e66bc9cbc7f544185c2976f6ab26
}

@NgModule({
    imports: [BrowserModule, FormsModule],
<<<<<<< HEAD
    declarations: [App, TabbedInputDirective],
=======
    declarations: [App, QuickMessage],
>>>>>>> e07ec6cadcd6e66bc9cbc7f544185c2976f6ab26
    bootstrap: [App]
})
export class AppModule {
}