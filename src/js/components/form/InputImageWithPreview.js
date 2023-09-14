import { html, nothing } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class InputImageWithPreview extends LitWithoutShadowDom {
  static properties = {
    label: { type: String, reflect: true },
    inputId: { type: String, reflect: true },
    defaultImage: { type: String, reflect: true },
    defaultImageAlt: { type: String, reflect: true },

    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },

    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
    this.defaultImage = '';
    this.defaultImageAlt = '';
    // this.label = '';
    // this.invalidFeedbackMessage = '';
  }

  render() {
    return html`
      <label for="${this.inputId || nothing}" class="form-label">${msg('Foto')}</label>
      <div style="width: 100%; height: 20rem" class="mb-3 ${!this.defaultImage ? 'd-none' : ''}">
        ${this._imagePreviewTemplate()}
      </div>
      <input
        type="file"
        class="form-control"
        id="${this.inputId || nothing}"
        accept="image/*"
        ?required=${this.required}
        @change=${this._updatePhotoPreview}
      />
 
      ${this._feedbackTemplate()}
      <div class="invalid-feedback">${msg('Kolom input foto wajib diisi!')}</div>
    `;
  }

  _updatePhotoPreview() {
    const storyImgChange = document.querySelector(`#${this.inputId}ImgChange`);
    const storyImgInput = document.querySelector(`#${this.inputId}`);

    let storyRecordImg = null;
    if (this.defaultImage) {
      storyRecordImg = document.querySelector(`#${this.inputId}Img`);
    }

    const photo = storyImgInput.files[0];
    if (!photo) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (this.defaultImage) {
        storyRecordImg.classList.add('d-none');
      }
      storyImgChange.parentElement.classList.remove('d-none');
      storyImgChange.classList.remove('d-none');
      storyImgChange.style.backgroundImage = `url('${event.target.result}')`;
    };

    reader.readAsDataURL(photo);
  }

  _feedbackTemplate() {
    let validFeedbackTemplate = '';
    let invalidFeedbackTemplate = '';
    if (this.validFeedbackMessage) {
      validFeedbackTemplate = html`
        <div class="valid-feedback">${this.validFeedbackMessage}</div>
      `;
    }
    // if (this.invalidFeedbackMessage) {
    //   invalidFeedbackTemplate = html`
    //     <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
    //   `;
    // }

    return html`${validFeedbackTemplate}${invalidFeedbackTemplate}`;
  }

  _imagePreviewTemplate() {
    const imgChangeTemplate = html`
      <div
        class="w-100 h-100 ${this.defaultImage ? 'd-none' : ''}"
        style="
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        "
        id="${this.inputId || nothing}ImgChange"
      ></div>
    `;
    if (this.defaultImage) {
      return html`
        <img
          class="img-fluid h-100"
          src="${this.defaultImage}"
          alt="${this.defaultImageAlt}"
          id="${this.inputId || nothing}Img"
        />
        ${imgChangeTemplate}
      `;
    }

    return html` ${imgChangeTemplate} `;
  }
}


customElements.define('input-image-with-preview', InputImageWithPreview);