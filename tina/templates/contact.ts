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
