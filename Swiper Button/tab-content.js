import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3.1.4/all/lit-all.min.js';

export class TabContent extends LitElement {
    static properties = {
        tabTitle: { attribute: "tab-title" },
        primaryImageUrl: { attribute: "primary-image-url" },
        secondaryImageUrl: { attribute: "secondary-image-url" },
    };

    static styles = css`
        .tab-content {
            position: relative;
            max-inline-size: 100%;
            z-index: 3;
            margin-inline: 40px;
        }

        .tab-content-image-hidden {
            display: none;
        }

        .tab-content-image {
            position: relative;
            overflow: hidden;
            border: 1px solid transparent;
            border-radius: 14px;
            background: linear-gradient(#fff, hsla(0, 0%, 100%, 0)) padding-box, linear-gradient(90deg, #45c4f9, #ff0be5) border-box;
            opacity: 0;
        }

        .tab-content-image-secondary {
            position: absolute;
            display: none;
            overflow: hidden;
            opacity: 0;
        }

        @media (min-width: 1200px) {
            .tab-content-image-secondary {
                display: block;
            }
        }

        .tab-content-image-secondary-offset {
            inset-inline-end: -70px;
            inset-block-end: -70px;
        }

        .tab-content-image-visible {
            position: relative;
            opacity: 1;
            visibility: visible;
            animation: CuHomeTabs_fadeIn__6V9ei .25s;
        }

        .tab-content-image-secondary-visible {
            position: absolute;
            opacity: 1;
            animation: CuHomeTabs_fadeInSm__kaoqf .25s;
        }

        picture {
            display: block;
        }

        .tab-content-image-secondary-visible picture {
            transform: scale(.9);
        }

        img {
            display: block;
        }

        img {
            max-inline-size: 100%;
        }

        .tab-content-image img {
            transform: scale(1.002);
        }

        img[width][height] {
            block-size: auto;
        }

        @keyframes CuHomeTabs_fadeIn__6V9ei {
            0% {
                opacity: 0;
                transform: translateY(2%);
                opacity: 0;
                transform: translateY(2%);
            }

            100% {
                opacity: 1;
                transform: translateY(0);
                opacity: 1;
                transform: translateY(0px);
            }

        }

        @keyframes CuHomeTabs_fadeInSm__kaoqf {
            0% {
                opacity: 0;
                transform: translate3d(0, 10%, 0);
                opacity: 0;
                transform: translate3d(0px, 10%, 0px);
            }

            100% {
                opacity: 1;
                transform: translateZ(0);
                opacity: 1;
                transform: translateZ(0px);
            }

        }
    `;

    constructor() {
        super();
        this.primaryImageUrl = "";
        this.secondaryImageUrl = "";
    }

    render() {
        return html`
            <div class="tab-content-parent-container">
                <div class="tab-content">
                    <div class="tab-content-image ${this.primaryImageUrl ? "tab-content-image-visible" : "tab-content-image-hidden"}">
                        <picture class="" data-testid="cu-image">
                            <img src="${this.primaryImageUrl}" height="1248" width="1870" alt="${this.tabTitle}" loading="eager"
                                decoding="async">
                        </picture>
                    </div>
                    <div class="tab-content-image-secondary ${this.secondaryImageUrl ? "tab-content-image-secondary-visible" : "tab-content-image-hidden"} tab-content-image-secondary-offset">
                        <picture class="">
                            <img src="${this.secondaryImageUrl}" height="393" width="658" alt="${this.tabTitle}" loading="eager"
                                decoding="async">
                        </picture>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('tab-content', TabContent);