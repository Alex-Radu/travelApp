/* eslint-disable no-restricted-globals */
import { LitElement, html, css } from 'lit-element';

export class DestinationsView extends LitElement {
  static get properties() {
    return {
      destinationId: { type: String },
    };
  }

  static get styles() {
    return css``;
  }

  onBeforeEnter(location) {
    if (location?.params?.destination)
      this.destinationId = location.params.destination;
  }

  render() {
    return html`
      <h1>Destinations View</h1>
      <a href="/destinations/1">Destination 1</a>
      <a href="/destinations/2">Destination 2</a>
      <a href="/destinations/3">Destination 3</a>

      ${this.destinationId
        ? html` <h2>Destination Id: ${this.destinationId}</h2> `
        : ''}
    `;
  }
}

customElements.define('destinations-view', DestinationsView);
