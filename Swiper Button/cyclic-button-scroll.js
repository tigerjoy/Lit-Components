import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3.1.4/all/lit-all.min.js';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

class CyclicButtonScroll extends LitElement {
    static properties = {
        activeButtonIndex: { type: Number },
        buttons: { type: Array },
    };

    static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100px; /* Adjust based on your needs */
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }
    button {
      padding: 1rem;
    }
    button.active {
      transform: scale(1.2); /* Scale up the active button */
    }
  `;

    constructor() {
        super();
        this.activeButtonIndex = 2; // Default active button index
        this.buttons = ['B1', 'B2', 'B3', 'B4', 'B5'];
    }

    render() {
        return html`
      <div class="swiper-container">
        <div class="swiper-wrapper">
          ${this.buttons.map(
            (btn, index) => html`
              <div class="swiper-slide">
                <button
                  class="${index === this.activeButtonIndex ? 'active' : ''}"
                  @click="${() => this._handleButtonClick(index)}"
                >
                  ${btn}
                </button>
              </div>
            `
        )}
        </div>
      </div>
    `;
    }

    firstUpdated() {
        this._initSwiper();
    }

    updated(changedProperties) {
        if (changedProperties.has('activeButtonIndex')) {
            this._scrollToCenter();
        }
    }

    _initSwiper() {
        this.swiper = new Swiper(this.shadowRoot.querySelector('.swiper-container'), {
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            on: {
                slideChange: () => {
                    this.activeButtonIndex = this.swiper.realIndex;
                },
            },
        });
    }

    _handleButtonClick(index) {
        const currentIndex = this.swiper.realIndex;
        if (index !== currentIndex) {
            const direction = index > currentIndex ? 'next' : 'prev';
            const steps = Math.abs(index - currentIndex);

            for (let i = 0; i < steps; i++) {
                this.swiper[direction]();
            }
        }
    }

    _scrollToCenter() {
        this.swiper.slideToLoop(this.activeButtonIndex, 500);
    }
}

customElements.define('cyclic-button-scroll', CyclicButtonScroll);
