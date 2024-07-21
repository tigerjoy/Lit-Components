import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3.1.4/all/lit-all.min.js;

export class CustomButton extends LitElement {
    static properties = {
        active: { type: Boolean },
    };

    static styles = css`
    :host {
      display: inline-block;
      text-align: center;
      margin: 10px;
    }
    .button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100px;
      height: 100px;
      background-color: var(--background-color, transparent);
      border: 1px solid black;
      cursor: pointer;
      transition: transform 0.2s, background-color 0.2s, color 0.2s;
    }
    .button:hover {
      transform: translateY(-5px);
    }
    .button svg {
      fill: var(--svg-color, black);
      width: 50px;
      height: 50px;
    }
    .button.active {
      background-color: black;
      color: white;
    }
    .button.active svg {
      fill: white;
    }
    .title {
      margin-top: 5px;
      font-size: 14px;
    }
  `;

    constructor() {
        super();
        this.active = false;
    }

    render() {
        return html`
      <div class="button ${this.active ? 'active' : ''}" @click="${this._handleClick}">
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        <div class="title"><slot></slot></div>
      </div>
    `;
    }

    _handleClick() {
        this.active = !this.active;
        this.dispatchEvent(new CustomEvent('button-click', {
            detail: { active: this.active },
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define('custom-button', CustomButton);
