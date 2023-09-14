import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class TextareaWithValidation extends LitWithoutShadowDom {
  static properties = {
    customLabel: { type: String, reflect: true },
    inputId: { type: String, reflect: true },
    value: { type: String, reflect: true },
    rows: { type: Number, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
    this.rows = 3;
    this.required = false;
    // this.customLabel = '';
    // this.invalidFeedbackMessage = '';
  }

  render() {
    return html`
      <label for="${this.inputId}" class="form-label">${msg('Deskripsi')}</label>
      <textarea
        id=${this.inputId || nothing}
        class="form-control"
        rows=${this.rows || nothing}
        value=${this.value || nothing}
        ?required=${this.required}
        @input=${(e) => (this.value = e.target.value)}
      ></textarea>
 
      ${this._validFeedbackTemplate()}
      <div class="invalid-feedback">${msg('Kolom input deskripsi wajib diisi!')}</div>
    `;
  }

  _validFeedbackTemplate() {
    if (this.validFeedbackMessage) {
      return html` <div class="valid-feedback">${this.validFeedbackMessage}</div> `;
    }

    return html``;
  }
}

customElements.define('textarea-with-validation', TextareaWithValidation);