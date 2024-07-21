import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3.1.4/all/lit-all.min.js';

export class TestComponent extends LitElement {
    static properties = {
        test: {}
    };

    constructor() {
        console.log("constructor called.");
        super();
        this.test = 0;
    }

    set test(value) {
        console.log("set test() called.");
        this.test = value;
    }

    connectedCallback() {
        console.log("connectedCallback called.");
        super.connectedCallback();
    }

    hasChanged() {
        console.log("hasChanged() called");
        return super.hasChanged();
    }



    disconnectedCallback() {
        console.log("disconnectedCallback called.");
        super.disconnectedCallback();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log("attributeChangedCallback called.");
        super.attributeChangedCallback(name, oldValue, newValue);
    }
}