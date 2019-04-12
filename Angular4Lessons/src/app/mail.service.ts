import {Injectable} from '@angular/core';

@Injectable()
export class MailService {

  constructor() {}

  // message: string[] = [
  //   '该消息来自MailService',
  //   '该项目用来学习angular4.0',
  //   '学习者fengzicheng',
  //   '坚持就是胜利，加油'
  // ];

  messages: Array<{id: number, text: string}> = [
    {id: 0, text: '该消息来自MailService'},
    {id: 1, text: '该项目用来学习angular4.0'},
    {id: 2, text: '学习者fengZC'},
    {id: 3, text: '坚持就是胜利，加油'}
  ];

  update(id, text) {
    this.messages = this.messages.map(msg => {
      return msg.id === id ? {id, text} : msg;
    });
  }

}
