import {Main} from './Main';
import ReactDOM from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App {
    constructor() {
        this.render();
    }

    public static addTwoNumbers(num1: number, num2: number): number {
        return num1 + num2;
    }

    private render(): void {
        ReactDOM.render(React.createElement(Main, {app: this}),
            document.getElementById("app") || document.createElement("div")
        );
    }
}

new App();
