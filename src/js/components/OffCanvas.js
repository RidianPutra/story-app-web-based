import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class OffCanvas extends LitWithoutShadowDom {
  static properties = {
    title: { type: String, reflect: true },
  };

  render() {
    return html`
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">${this.title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <nav-links></nav-links>
      </div>
    `;
  }
}

customElements.define('off-canvas', OffCanvas);