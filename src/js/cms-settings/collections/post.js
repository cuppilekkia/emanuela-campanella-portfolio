const post = {
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
};

export default post;
