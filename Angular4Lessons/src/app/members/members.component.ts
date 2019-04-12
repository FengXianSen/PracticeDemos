import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

import {MemberService} from "../member.service";

interface Member {
    id: string;
    login: string;
    avatar_url: string;
}

@Component({
    selector: 'app-members',
    template: `
        <h3>Angular Orgs Members</h3>
        <ul *ngIf="members">
            <li *ngFor="let member of members">
                <p>
                    <img [src]="member.avatar_url" width="48" height="48"/>
                    ID: <span>{{member.id}}</span>
                    Name: <span>{{member.login}}</span>
                </p>
            </li>
        </ul>
    `,
    styles: []
})

export class MembersComponent implements OnInit {

    members: Member[];

    /**
     * constructor是ES6引入类的概念后新出现的东东，是类的自身属性，并不属于Angular的范畴，所以Angular没有办法控制constructor
     * constructor也有其用武之地，其主要作用是注入依赖
     */
    constructor(private memberService: MemberService) {

    }

    /**
     * ngOnInit用于在Angular第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。
     * ngOnInit纯粹是通知开发者组件/指令已经被初始化完成了，此时组件/指令上的属性绑定操作以及输入操作已经完成，
     * 也就是说在ngOnInit函数中我们已经能够操作组件/指令中被传入的数据了
     */
    ngOnInit() {
        this.memberService.getMembers().subscribe(data => {
            if (data) {
                this.members = data;
            }
        });
    }

}
