import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class Stories extends LitWithoutShadowDom {
  static properties = {
    listStory: { type: Array, reflect: true },
  };

  constructor() {
    super();

    this.listStory = [];
  }

  render() {
    return html`
      ${this.listStory.map((story) => {
      return html`
          <story-item
            storyId=${story.id}
            storyName=${story.name}
            storyDesc=${story.description}
            storyPhoto=${story.photoUrl}
            storyDate=${story.createdAt}
          />
        `;
    })}
    `;
  }
}

customElements.define('story-container', Stories);