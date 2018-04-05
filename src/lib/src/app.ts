//our root app component
import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {QuickMessage} from './directive';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <h2>Hello {{name}}</h2>
            <div>
                <div class="col-sm-4">
                    <-- Need to add an example here -->
                </div>
            </div>
        </div>
    `,
})
export class App {

    name: string = '';

    constructor() {
        this.name = `Angular! v${VERSION.full}`;
    }

}

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [App, QuickMessage],
    bootstrap: [App]
})
export class AppModule {
}