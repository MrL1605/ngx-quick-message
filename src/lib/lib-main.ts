import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {QuickMessage} from './src';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [QuickMessage],
    exports: [QuickMessage]
})
export class QuickMessageModule {
}

