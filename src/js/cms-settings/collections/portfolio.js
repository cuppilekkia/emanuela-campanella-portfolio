const portfolio = {
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
};

export default portfolio;
