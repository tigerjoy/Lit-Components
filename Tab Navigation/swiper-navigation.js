import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3.1.4/all/lit-all.min.js';

class NavTab extends LitElement {
    static styles = css`
        .swiper-container {
            width: 100%;
            overflow: hidden;
        }

        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            font-weight: bold;
            color: #6b6b6b;
            cursor: pointer;
        }

        .swiper-slide-active {
            color: #000;
        }
    `;

    render() {
        return html`
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    ${this.tabs.map(tab => html`
                        <div class="swiper-slide">${tab}</div>
                    `)}
                </div>
            </div>
        `;
    }

    constructor() {
        super();
        this.tabs = ['Forms', 'Sprints', 'Docs', 'Time tracking', 'Chat', 'Whiteboards', 'Projects', 'Dashboards', 'AI'];
    }

    firstUpdated() {
        new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 10,
            loop: true,
            centeredSlides: true,
            slideToClickedSlide: true,
        });
    }
}

customElements.define('nav-tab', NavTab);
