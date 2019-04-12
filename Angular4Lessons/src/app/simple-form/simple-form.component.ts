import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-simple-form',
    template: `
        <p>
            simple-form works!
        </p>
        <div>
            {{message}}
            <!--<input #myInput type="text" (keydown.enter)="onEnter($event, myInput.value)"/>-->
            <!--<button (click)="onClick($event, myInput.value)">点击</button>-->

            <input #myInput type="text"
                   [(ngModel)]="message"
                   [ngClass]="{mousedown: isMousedown}"
                   (mousedown)="isMousedown = true"
                   (mouseup)="isMousedown = false"
                   (mouseleave)="isMousedown = false"
            />
            <button (click)="update.emit({text: message})">更新</button>
            <div class="blue" [ngClass]="[{red: true}]">ngClass的用法</div>
            <div [ngStyle]="{color: 'black', 'background-color': 'blue'}">ngStyle的用法</div>
        </div>
    `,
    styles: [`
        :host {
            margin: 10px;
        }

        .mousedown {
            border: solid 1px green;
        }

        input:focus {
            border: solid 1px #f12;
        }

        .blue {
            color: blue;
        }

        .red {
            color: red;
        }
    `]
})

export class SimpleFormComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }

    isMousedown: boolean;

    onClick(event, value) {
        console.log(event);
        console.log(value);
    }

    onEnter(event, value) {
        console.log(event);
        console.log(value);
    }

    @Input('message') message: string;
    @Output() update = new EventEmitter<{ text: string }>();

}
