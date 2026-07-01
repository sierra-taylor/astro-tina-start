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
      type: "image",
      name: "images",
      list: true,
    },
  ],
};
