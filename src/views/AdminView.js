import { LitElement, html, css } from 'lit-element';

const codeImage = new URL('../../assets/images/code.jpg', import.meta.url).href;

export class AdminView extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      img {
        display: block;
        margin: 0 auto;
        width: 80vw;
        height: 80vh;
      }
    `;
  }

  render() {
    return html`
      <h1>Admin View</h1>
      <img src="${codeImage}" alt="" />
    `;
  }
}

customElements.define('admin-view', AdminView);
