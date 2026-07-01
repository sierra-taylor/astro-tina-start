import type { Template } from "tinacms";
export const teamTemplate: Template = {
  name: "team",
  label: "Team",
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
      label: "Header for the services section",
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
      type: "object",
      name: "members",
      label: "Team members",
      list: true,
      ui: {
        itemProps: (member: any) => ({
          label: member?.name,
        }),
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "string",
          name: "position",
          label: "Their position or title",
        },
        {
          type: "image",
          name: "avatar",
          label: "Avatar image",
        },
      ],
    },
  ],
};
