import type { Template } from "tinacms";
export const galleryTemplate: Template = {
  name: "gallery",
  label: "Gallery",

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
      type: "image",
      name: "images",
      list: true,
    },
  ],
};
