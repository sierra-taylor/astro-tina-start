import type { Template } from "tinacms";
export const contactTemplate: Template = {
  name: "contact",
  label: "Contact",

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
      name: "header",
      label: "Header that apprea at the top of the section",
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
      name: "description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "email",
    },
    {
      type: "string",
      name: "phone",
    },
    {
      type: "string",
      name: "address",
    },
    {
      type: "string",
      name: "buttonText",
    },
  ],
};
