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
      name: "header",
      label: "Header for this section",
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
