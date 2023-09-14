import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class NavLinks extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <nav-link content="${msg('Dasbor')}" to="/"></nav-link>
        <nav-link content="${msg('Tambah Cerita')}" to="/actions/add.html"></nav-link>
        <nav-link content="${msg('Profil Pengembang')}" to="/profile.html"></nav-link>
        <locale-picker></locale-picker>
      </ul>
    `;
  }
}

customElements.define('nav-links', NavLinks);