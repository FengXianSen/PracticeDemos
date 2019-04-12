import {Component, Inject} from '@angular/core';
import {MailService} from "./mail.service";

@Component({
    selector: 'app-root',
    // templateUrl: './app.component.html',
    // styleUrls: ['./app.component.css']

    // template: `
    //   <div>
    //     <h3>{{title}}</h3>
    //     <ul>
    //       <li *ngFor="let message of mailService.messages; index as i;">
    //         {{i}} - {{message}}
    //       </li>
    //     </ul>
    //     <div>
    //       <app-simple-form *ngFor="let message of mailService.messages;"
    //                        (update)="onUpdate(message.id, $event.text)"
    //                        [message]="message"></app-simple-form>
    //       {{mailService.messages}}
    //     </div>
    //   </div>
    // `

    template: `
        <div>
            <h2>欢迎来到Angular4的世界</h2>
            <nav [ngStyle]="{'text-align': 'center'}">
                <a routerLink="/user" class="btn">我的</a>
                <a routerLink="/members" class="btn btnMargin">Angular成员</a>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        a:link {
            text-decoration: none;
        }

        a:active {
            text-decoration: none;
        }

        a:hover {
            text-decoration: none;
        }

        a:visited {
            text-decoration: none;
        }

        .btn {
            color: blue;
            border: solid 1px red;
        }
        
        .btnMargin {
            margin-left: 50px;
        }
    `]

})
export class AppComponent {
    title = 'Hello, Angular';

    // private mailService: MailService 一般用来注入Type类型(函数类型)对象
    // constructor(
    //   @Inject(MailService) private mailService,
    // ) {}

    // constructor(private mailService: MailService) {
    //
    // }

    // onUpdate(id, text) {
    //   this.mailService.update(id, text);
    // }
}
