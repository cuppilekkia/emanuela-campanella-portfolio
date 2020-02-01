const pages = {
  name: "pages",
  label: "Pages",
  files: [
    {
      file: "site/content/_index.md",
      label: "Home Page",
      name: "home",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Subtitle", name: "subtitle", widget: "string" },
        {
          label: "Slides",
          name: "slides",
          widget: "list",
          fields: [
            { label: "Image", name: "src", widget: "image" },
            { label: "Caption", name: "caption", widget: "string" }
          ]
        },
        {
          label: "Blurb",
          name: "blurb",
          widget: "object",
          fields: [
            { label: "Heading", name: "heading", widget: "string" },
            { label: "Text", name: "text", widget: "text" }
          ]
        }
      ]
    },
    {
      file: "site/content/contact/_index.md",
      label: "Contact Page",
      name: "contact",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Logo", name: "logo", widget: "image" },
        { label: "Body", name: "body", widget: "markdown" },
        {
          label: "Contact Entries",
          name: "contact_entries",
          widget: "list",
          fields: [
            {
              label: "Heading",
              name: "heading",
              widget: "string"
            },
            {
              label: "Text",
              name: "text",
              widget: "text"
            }
          ]
        }
      ]
    }
  ]
};

export default pages;
