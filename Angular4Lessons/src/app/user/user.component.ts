import {Component, OnInit} from '@angular/core';

interface Address {
    province: string;
    city: string;
}

@Component({
    selector: 'app-user',
    template: `
        <h2>hello, 我是{{name}}</h2>
        <p>我来自<strong>{{address.province}}</strong>省，
            <strong>{{address.city}}</strong>市
        </p>
        <button (click)="toggleSkills()">
            {{showSkills ? '隐藏技能' : '显示技能'}}
        </button>
        <div *ngIf="showSkills">
            <h3>我的技能</h3>
            <ul>
                <li *ngFor="let skill of skills">
                    {{skill}}
                </li>
            </ul>
            <form (submit)="addSkill(skill.value)">
                <label class="btn">添加技能</label>
                <input type="text" #skill [ngStyle]="{border: 'solid 1px red'}">
            </form>
        </div>
        <div>
            <p><strong>模版语法与指令入门</strong></p>
            <div>Hello {{learner}}</div>
            <div>{{'Angular' | lowercase}}</div>
            <div>{{'Angular' | uppercase}}</div>
            <div #todo>双向绑定</div>
            <input [ngModel]="todo.text" (ngModelChange)="todo.text=$event" class="border">
            <div class="border" [ngSwitch]="myVar" [ngStyle]="{'margin-top': '20px'}">
                <div *ngSwitchCase="'A'">Var is A</div>
                <div *ngSwitchCase="'B'">Var is B</div>
                <div *ngSwitchCase="'C'">Var is C</div>
                <div *ngSwitchDefault>Var is Other</div>
            </div>
            <div [ngClass]="{btn: false}">ngClass的使用</div>
            <div [ngClass]="{btn: true}">ngClass的使用</div>
            <div ngNonBindable>ngNonBindable 指令用于告诉 Angular 编译器，无需编译页面中某个特定的HTML代码片段。</div>
            <p *ngIf="shown; else hidden">
                Our secret is being happy
            </p>
        </div>
    `,
    styles: [`
        .btn {
            color: blue;
        }
        .border {
            border: solid 1px #f55;   
        }
    `]
})
export class UserComponent implements OnInit {

    name: string;
    address: Address;
    showSkills: boolean;
    skills: string[];
    learner: string;
    myVar: string;

    constructor() {
        this.name = 'FengZC';
        this.address = {
            province: '浙江',
            city: '杭州'
        };
        this.showSkills = true;
        this.skills = ['AngularJS 1.x', 'AngularJS 2.x', 'AngularJS 4.x'];
        this.learner = 'FengZC';
        this.myVar = 'A';
    }

    ngOnInit() {}

    toggleSkills() {
        this.showSkills = !this.showSkills;
    }

    addSkill(skill: string) {
        let skillStr = skill.trim();
        if (this.skills.indexOf(skillStr) === -1) {
            this.skills.push(skillStr);
        }
    }

    // shown() {
    //     return false;
    // }

    hidden() {
        return true;
    }

}
