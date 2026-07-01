import type { Template } from "tinacms";
export const aboutTemplate: Template = {
  name: "about",
  label: "About",

  fields: [
    {
      type: "string",
      name: "type",
      ui: { component: "hidden" },
    },
    {
      type: "string",
      name: "heading",
    },
    {
      type: "string",
      name: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
    },
  ],
};
