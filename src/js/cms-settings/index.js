module.exports = {
  load_config_file: false,
  backend: {
    name: "git-gateway",
    branch: "development"
  },
  // Folder where user uploaded files should go
  media_folder: "site/static/img",
  media_library: {
    name: "cloudinary",
    config: {
      cloud_name: "cuppilekkia",
      api_key: 231587635213359,
      default_transformations: [
        [
          {
            fetch_format: "auto",
            quality: "auto",
            crop: "fill"
          }
        ]
      ]
    }
  },
  public_folder: "img",
  // A list of collections the CMS should be able to edit
  collections: [
    {
      name: "post", // # Used in routes, ie.: /admin/collections/:slug/edit
      label: "Post", // # Used in the UI, ie.: "New Post"
      folder: "site/content/post", // # The path to the folder where the documents are stored
      create: true, // # Allow users to create new documents in this collection
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Publish Date", name: "date", widget: "datetime" },
        { label: "Intro Blurb", name: "description", widget: "text" },
        { label: "Image", name: "image", widget: "image", required: false },
        { label: "Body", name: "body", widget: "markdown" }
      ]
    },
    {
      name: "portfolio",
      label: "Portfolio",
      folder: "site/content/portfolio",
      create: true,
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Publish Date", name: "date", widget: "datetime" },
        {
          label: "Categoria",
          name: "categories",
          widget: "relation",
          collection: "categorie",
          searchFields: ["title", "intro"],
          valueField: "title",
          displayFields: ["title"]
        },
        { label: "Intro", name: "intro", widget: "text" },
        { label: "Body", name: "body", widget: "markdown" },
        {
          label: "Head Image",
          name: "mainimage",
          widget: "image",
          media_library: {
            config: {
              default_transformations: [
                {
                  width: 500
                }
              ]
            }
          }
        },
        {
          label: "Images",
          name: "images",
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
                      width: 500
                    }
                  ]
                }
              }
            },
            {
              label: "Caption",
              name: "caption",
              widget: "string"
            }
          ]
        }
      ]
    },
    {
      name: "categorie",
      label: "Categorie",
      folder: "site/content/categorie",
      create: true,
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Slug", name: "slug", widget: "string" },
        {
          label: "Weight",
          name: "weight",
          widget: "number",
          default: 1,
          valueType: "int"
        },
        { label: "Intro", name: "intro", widget: "text" },
        {
          label: "Image",
          name: "image",
          widget: "image",
          media_library: {
            config: {
              default_transformations: [
                [
                  {
                    width: 500
                  }
                ]
              ]
            }
          }
        }
      ]
    },
    {
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
    }
  ]
};
