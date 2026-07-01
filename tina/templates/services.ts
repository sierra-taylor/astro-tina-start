import type { Template } from "tinacms";
export const servicesTemplate: Template = {
  name: "services",
  label: "Services",

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
      name: "heading",
      label: "Heading",
    },
    {
      type: "object",
      name: "items",
      label: "Services",
      list: true,

      ui: {
        itemProps: (item: any) => ({
          label: item?.title,
        }),
      },

      fields: [
        {
          type: "string",
          name: "title",
        },
        {
          type: "string",
          name: "description",
        },
      ],
    },
  ],
};
