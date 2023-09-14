import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { updateWhenLocaleChanges } from '@lit/localize';
import { getLocale } from '../localization.js';

class StoryCard extends LitWithoutShadowDom {
  static properties = {
    storyId: { type: String, reflect: true },
    storyName: { type: String, reflect: true },
    storyDesc: { type: String, reflect: true },
    storyPhoto: { type: String, reflect: true },
    storyDate: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
    this.storyId = '';
    this.storyName = '';
    this.storyDesc = '';
    this.storyPhoto = '';
    this.storyDate = '';
  }

  render() {
    return html`
    <div class="card mb-5" id="${this.storyId}">
      <img src="${this.storyPhoto}" class="card-img-top" alt="Story Photo">
      <div class="card-body">
        <h5 class="card-title">${this.storyName}</h5>
        <p class="card-text">${this.storyDesc}</p>
        <p class="card-text"><small class="text-body-secondary">${this._dateFormat(this.storyDate)}</small></p>
      </div>
    </div>
    `;
  }

  _dateFormat(isoDate) {
    const date = new Date(isoDate);
    let options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return new Intl.DateTimeFormat(getLocale(), options).format(date);
  }
}

customElements.define('story-item', StoryCard);