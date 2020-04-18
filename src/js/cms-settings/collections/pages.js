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
            {
              label: "Image",
              name: "src",
              widget: "image",
              media_library: {
                config: {
                  default_transformations: [
                    {
                      fetch_format: "auto",
                      quality: "auto",
                      crop: "fill",
                      width: 2000
                    }
                  ]
                }
              }
            },
            { label: "Caption", name: "caption", widget: "string" }
          ]
        },
        {
          label: "Blurb",
          name: "blurb",
          widget: "object",
          fields: [
            {
              label: "About Image",
              name: "image",
              widget: "image",
              media_library: {
                config: {
                  default_transformations: [
                    {
                      fetch_format: "auto",
                      quality: "auto",
                      crop: "fill",
                      width: 1000
                    }
                  ]
                }
              }
            },
            { label: "Heading", name: "heading", widget: "markdown" },
            { label: "Text", name: "text", widget: "markdown" }
          ]
        }
      ]
    },
    {
      file: "site/content/about/_index.md",
      label: "About Page",
      name: "about",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Image", name: "image", widget: "image" },
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
