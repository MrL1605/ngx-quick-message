import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
<<<<<<< HEAD
import {TabbedInputDirective} from './src';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [TabbedInputDirective],
    exports: [TabbedInputDirective]
})
export class TabbedInputModule {
=======
import {QuickMessage} from './src';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [QuickMessage],
    exports: [QuickMessage]
})
export class QuickMessageModule {
>>>>>>> e07ec6cadcd6e66bc9cbc7f544185c2976f6ab26
}

