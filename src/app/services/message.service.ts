import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  addMessage(message: string): void {
    console.log("3. Add message to list");
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }
}
