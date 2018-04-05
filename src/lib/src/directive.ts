/**
 * Created By : Lalit
 * Created On : 10/12/17
 * Organisation: CustomerXPs Software Private Ltd.
 */

import {Component, Input, OnInit} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: "quick-message",
    template: `
        <div [@slideTrigger]="showMessageStr"
             class="alert" [ngClass]="getBtnTypeClass()" role="alert">
            <span style="white-space: pre-line;word-break: break-all;"> {{message}} </span>
            <span class="glyphicon glyphicon-remove pull-right" (click)="closeMessageBox()"></span>
        </div>

    `,
    animations: [
        trigger('slideTrigger', [
            state('hide', style({
                transform: "translateY(-50%) scale(0)",
                opacity: 0,
                display: "none"
            })),
            state('display', style({
                transform: "scale(1)",
                display: "block",
                opacity: 1
            })),
            transition("hide <=> display", animate("300ms")),
        ])
    ]
})

export class QuickMessage implements OnInit {

    @Input() message: string;
    @Input() type: string;
    @Input() timeout: number = 3000;

    showMessage: boolean = false;
    showMessageStr: string = "hide";
    currentTimeout: any;

    constructor() {
    }

    ngOnInit() {
    }

    public showMessageBox() {
        this.showMessage = true;
        this.showMessageStr = "display";
        clearTimeout(this.currentTimeout);
        this.currentTimeout = setTimeout(() => {
            this.closeMessageBox();
        }, this.timeout);
    }


    closeMessageBox() {
        this.showMessage = false;
        this.showMessageStr = "hide";
    }

    getBtnTypeClass() {
        switch (this.type) {
            case "danger":
                return "alert-danger";
            case "success":
                return "alert-success";
            case "warning":
                return "alert-warning";
            case "info":
                return "alert-info";
            default:
                return "alert-info";
        }
    }
}
