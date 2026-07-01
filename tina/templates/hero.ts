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
      label: "Section name that appears in navigation at the top of the page",
    },
    {
      type: "string",
      name: "slug",
      label: "Slug: the URL path to a section within your website",
      ui: {
        component: "hidden",
      },
    },
    {
      type: "string",
      name: "title",
      label: "Headline",
    },
    {
      type: "string",
      name: "subtitle",
      label: "Sub Headline",
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
