import type { Schema, Attribute } from '@strapi/strapi';

export interface InfoBlockButton extends Schema.Component {
  collectionName: 'components_info_block_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    colour: Attribute.Enumeration<['turquoise', 'orange', 'black', 'beige']>;
    slug: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'info-block.button': InfoBlockButton;
    }
  }
}
