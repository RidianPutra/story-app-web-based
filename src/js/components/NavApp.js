import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavApp extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  render() {
    return html`
      <nav class="navbar bg-body-tertiary sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">${this.brandName}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <off-canvas title="Story App"></off-canvas>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-app', NavApp);