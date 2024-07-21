import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3.1.4/all/lit-all.min.js';

export class SliderComponent extends LitElement {
    static properties = {
        selectedIndex: { state: true },
    };

    static styles = css`
        .slider {
            display: flex;
            overflow-x: auto;
            scroll-behavior: smooth;
            white-space: nowrap;
            margin-bottom: 20px;
        }
        .slider button {
            display: inline-block;
            padding: 10px 20px;
            margin-right: 10px;
            cursor: pointer;
        }
        .images img {
            display: none;
            width: 100%;
            height: auto;
        }
        .images img.active {
            display: block;
        }
    `;

    constructor() {
        super();
        this.selectedIndex = 0;
        this.images = [
            'path/to/your/image1.png', // Replace with your actual image paths
            'path/to/your/image2.png',
            'path/to/your/image2.png',
            'path/to/your/image2.png',
            'path/to/your/image2.png',
            'path/to/your/image2.png',
            'path/to/your/image2.png',
            'path/to/your/image2.png',
            'path/to/your/image2.png',
        ];
        this.titles = [
            'AI', 'Forms', 'Sprints', 'Docs', 'Time Tracking', 'Chat', 'Whiteboards', 'Projects', 'Dashboards'
        ];
    }

    render() {
        return html`
            <div class="slider">
                ${this.titles.map((title, index) => html`
                    <button @click=${() => this.selectImage(index)}>${title}</button>
                `)}
            </div>
            <div class="images">
                ${this.images.map((image, index) => html`
                    <img src="${image}" class="${index === this.selectedIndex ? 'active' : ''}" alt="${this.titles[index]}">
                `)}
            </div>
        `;
    }

    selectImage(index) {
        this.selectedIndex = index;
        const button = this.shadowRoot.querySelectorAll('button')[index];
        button.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
}

customElements.define('slider-component', SliderComponent);