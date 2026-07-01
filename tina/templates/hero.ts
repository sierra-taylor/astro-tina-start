import type { Template } from "tinacms";
export const heroTemplate: Template = {
  name: "hero",
  label: "Hero",

  fields: [
    {
      type: "string",
      name: "type",
      ui: { component: "hidden" },
    },
    {
      type: "string",
      name: "label",
      label: "Navigation Label",
    },
    {
      type: "string",
      name: "title",
      label: "Headline",
    },
    {
      type: "image",
      name: "image",
      label: "Hero Image",
    },
    {
      type: "string",
      name: "buttonText",
      label: "Button Text",
    },
  ],
};
