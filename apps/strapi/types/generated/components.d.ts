import type { Schema, Struct } from "@strapi/strapi";

export interface WebContentBlocks extends Struct.ComponentSchema {
  collectionName: "components_web_content_blocks";
  info: {
    description: "";
    displayName: "content blocks";
    icon: "file";
  };
  attributes: {
    content_blocks: Schema.Attribute.Relation<
      "oneToMany",
      "api::content-block.content-block"
    >;
  };
}

export interface WebImage extends Struct.ComponentSchema {
  collectionName: "components_web_images";
  info: {
    displayName: "image";
    icon: "picture";
  };
  attributes: {
    image: Schema.Attribute.Media<"images"> & Schema.Attribute.Required;
  };
}

export interface WebStaticContent extends Struct.ComponentSchema {
  collectionName: "components_web_static_contents";
  info: {
    description: "";
    displayName: "static content";
    icon: "layout";
  };
  attributes: {
    static_component: Schema.Attribute.Enumeration<
      [
        "hero-carousel",
        "news-carousel",
        "general-admission-prices",
        "travellers-choice",
        "google-map",
        "booking-calendar",
        "zoo-map",
        "facebook-feed",
      ]
    >;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "web.content-blocks": WebContentBlocks;
      "web.image": WebImage;
      "web.static-content": WebStaticContent;
    }
  }
}
