/* eslint-disable no-restricted-globals */
import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';

import './views/AdminView.js';
import './views/DestinationsView.js';
import './views/HomeView.js';

export class TravelApp extends LitElement {
  static get properties() {
    return {
      _routes: Array,
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--travel-app-background-color);
      }

      main {
        flex-grow: 1;
      }
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot.getElementById('app');
    const router = new Router(outlet);
    router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/destinations', component: 'destinations-view' },
      { path: '/destinations/:destination', component: 'destinations-view' },
      { path: '/admin', component: 'admin-view' },
      { path: '(.*)', component: 'home-view' },
    ]);
  }

  render() {
    return html`
      <header>
        <a href="/">Home</a>
        <a href="/destinations">Destinations</a>
        <a href="/admin">Admin</a>
        <a href="/oops">Not Configured</a>
      </header>
      <main id="app"></main>
    `;
  }
}
