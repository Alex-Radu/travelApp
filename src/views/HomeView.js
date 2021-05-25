import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from '../open-wc-logo.js';

export class HomeView extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `;
  }

  render() {
    return html`
      <div class="logo">${openWcLogo}</div>
      <h1>${this.title}</h1>
      <p>Welcome traveller 🚀 !</p>
    `;
  }
}

customElements.define('home-view', HomeView);
