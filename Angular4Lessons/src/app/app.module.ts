import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";


import {AppComponent} from './app.component';
import {SimpleFormComponent} from './simple-form/simple-form.component';
import {MailService} from "./mail.service";
import {UserComponent} from './user/user.component';
import {MembersComponent} from './members/members.component';
import {MemberService} from "./member.service";


export const ROUTES: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'user'},
    {path: 'user', component: UserComponent},
    {path: 'members', component: MembersComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        SimpleFormComponent,
        UserComponent,
        MembersComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [MailService, MemberService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
