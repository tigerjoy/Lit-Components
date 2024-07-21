import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3.1.4/all/lit-all.min.js';

export class NavigationButton extends LitElement {
  static properties = {
    active: { type: Boolean },
    name: { type: String },
    key: { type: String }
  };

  static styles = css`
    .custom-tab-button {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        inline-size: 115px;
        padding: 0;
        border: unset;
        background-color: transparent;
        transition: transform .2s ease-in-out;
    }

    .custom-button {
        --color-icon: rgb(var(--color-white));
        --button-bg: var(--highlight-primary, var(--color-purple));
        --button-text: var(--color-white);
        position: relative;
        display: inline-flex;
        align-items: center;
        padding: var(--button-padding, var(--size-18) var(--size-32) var(--size-16));
        border: var(--button-border, unset);
        border-radius: var(--button-border-radius, var(--border-radius-xs));
        background-color: rgb(var(--button-bg));
        color: rgb(var(--button-text));
        font-weight: 700;
        font-size: var(--button-font-size, var(--size-14));
        transition: var(--button-transition, var(--transition-short));
        transform: translateY(0);
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .custom-button:active,
    .custom-button:hover {
        cursor: pointer;
        transform: translateY(1px);
    }

    .custom-button-shadow {
        --shadow-color: var(--button-shadow-color, var(--highlight-shadow, var(--color-shadow)));
        --shadow-size: var(--button-shadow-from, var(--shadow-button, 0 10px 25px));
    }

    .custom-button-shadow:after,
    .custom-button-shadow:before {
        content: "";
        position: absolute;
        inset-inline-start: 0;
        inset-block-start: 0;
        inline-size: 100%;
        block-size: 100%;
        border-radius: var(--button-border-radius, var(--border-radius, var(--border-radius-xs)));
        transition: opacity var(--transition-short);
    }

    .custom-button-shadow:before {
        box-shadow: var(--shadow-size) rgba(var(--shadow-color));
        opacity: 1;
    }

    .custom-button-shadow:hover:before {
        opacity: 0;
    }

    .custom-tab-button svg {
        filter: drop-shadow(0 5px 20px rgba(127, 118, 179, .1));
        transform: scale(.9);
    }

    .custom-tab-button {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        inline-size: 115px;
        padding: 0;
        border: unset;
        background-color: transparent;
        transition: transform .2s ease-in-out;
    }

    .custom-tab-button:after,
    .custom-tab-button:before {
        display: none;
    }

    .custom-tab-button:hover {
        cursor: pointer;
        transform: translateY(-3px);
    }

    .svg-container-wrapper {
        flex-direction: column;
        inline-size: 115px;
    }

    .svg-container-wrapper {
        display: flex;
        align-items: center;
        filter: drop-shadow(0 5px 20px rgba(127, 118, 179, .1));
    }

    .svg-container-wrapper-active .svg-container {
        background: linear-gradient(130deg, #24223e, #282642);
        transform: scale(1.25);
    }

    .svg-container-wrapper-active .tab-title {
        color: #24223e;
        font-weight: 800;
        font-size: 16px;
    }

    .svg-container {
        display: flex;
        align-items: center;
        filter: drop-shadow(0 5px 20px rgba(127, 118, 179, .1));
    }

    .svg-container {
        position: relative;
        flex-shrink: 0;
        justify-content: center;
        inline-size: 55px;
        block-size: 55px;
        background: rgb(var(--color-white));
        background: linear-gradient(130deg, #f8f8fc, #f8f8fc);
        -webkit-clip-path: path("M55 27.5C55 21.3548 54.7339 16.3754 54.3904 12.5079C53.8158 6.03697 48.963 1.18424 42.4921 0.609579C38.6246 0.266118 33.6452 0 27.5 0C21.3548 0 16.3754 0.266118 12.5079 0.609579C6.03697 1.18424 1.18424 6.03697 0.609579 12.5079C0.266118 16.3754 0 21.3548 0 27.5C0 33.8762 0.286505 38.9973 0.648635 42.9236C1.22382 49.1598 5.82715 53.8374 12.0652 54.3924C15.9146 54.7349 20.9952 55 27.5 55C34.0048 55 39.0854 54.7349 42.9348 54.3924C49.1729 53.8374 53.7762 49.1598 54.3514 42.9236C54.7135 38.9973 55 33.8762 55 27.5Z");
        clip-path: path("M55 27.5C55 21.3548 54.7339 16.3754 54.3904 12.5079C53.8158 6.03697 48.963 1.18424 42.4921 0.609579C38.6246 0.266118 33.6452 0 27.5 0C21.3548 0 16.3754 0.266118 12.5079 0.609579C6.03697 1.18424 1.18424 6.03697 0.609579 12.5079C0.266118 16.3754 0 21.3548 0 27.5C0 33.8762 0.286505 38.9973 0.648635 42.9236C1.22382 49.1598 5.82715 53.8374 12.0652 54.3924C15.9146 54.7349 20.9952 55 27.5 55C34.0048 55 39.0854 54.7349 42.9348 54.3924C49.1729 53.8374 53.7762 49.1598 54.3514 42.9236C54.7135 38.9973 55 33.8762 55 27.5Z");
    }

    .svg-container-wrapper-active .svg-container {
        background: linear-gradient(130deg, #24223e, #282642);
        transform: scale(1.25);
    }

    .svg-container slot svg {
        max-block-size: 32px;
    }

    .tab-title {
        inline-size: 115px;
        -webkit-margin-before: 11px;
        margin-block-start: 11px;
        color: #7b73ae;
        font-weight: 500;
        font-size: 14px;
        line-height: normal;
        text-align: center;
    }

    .svg-container-wrapper-active .tab-title {
        color: #24223e;
        font-weight: 800;
        font-size: 16px;
    }

    ::slotted(.svg-icon) path,
    ::slotted(.svg-icon) rect {
      stroke: rgb(var(--color-white));
    }

    .svg-container-wrapper-active ::slotted(.svg-icon) {
        stroke: rgb(var(--color-white)) !important;
    }

    .svg-container-wrapper-active ::slotted(.svg-icon) path,
    .svg-container-wrapper-active ::slotted(.svg-icon) rect {
        stroke: rgb(var(--color-white)) !important;
    }
  `;

  constructor() {
    super();
  }

  updated(changedProperties) {
    const svgIcon = this.shadowRoot.querySelector('slot[name="svg-icon"]').assignedElements()[0];
    if (svgIcon) {
      if (this.active) {
        // Apply stroke to inner elements
        this._applyInnerStyles(svgIcon, 'rgb(var(--color-white))');
      } else {
        // Remove stroke from inner elements
        this._applyInnerStyles(svgIcon, '');
      }
    }
  }

  _applyInnerStyles(svgElement, strokeColor) {
    const paths = svgElement.querySelectorAll('path, rect');
    paths.forEach((path) => {
      path.style.stroke = strokeColor;
    });
  }

  render() {
    return html`
      <button type="button" class="custom-button custom-button-shadow custom-tab-button" @click="${this._handleClick}">
          <div class="svg-container-wrapper ${this.active ? 'svg-container-wrapper-active' : ''}">
              <div class="svg-container">
                  <slot name="svg-icon"></slot>
              </div>
              <div class="tab-title">
                <slot name="title"></slot>
              </div>
          </div>
      </button>
    `;
  }

  _handleClick() {
    this.dispatchEvent(new CustomEvent('navigation-button-click', {
      detail: { active: this.active, name: this.name, key: this.key },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('navigation-button', NavigationButton);
