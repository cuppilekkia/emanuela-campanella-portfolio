const categorie = {
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
            {
              fetch_format: "auto",
              quality: "auto",
              crop: "fill",
              width: 500
            }
          ]
        }
      }
    }
  ]
};

export default categorie;
