import categorie from "./collections/categorie";
import portfolio from "./collections/portfolio";
import post from "./collections/post";
import pages from "./collections/pages";

const config = {
  load_config_file: false,
  backend: {
    name: "git-gateway",
    branch: "development"
  },
  // Folder where user uploaded files should go
  media_folder: "site/static/img",
  public_folder: "img",
  media_library: {
    name: "cloudinary",
    config: {
      // These are not sensitive ;)
      cloud_name: "cuppilekkia",
      api_key: 231587635213359
    }
  },
  // A list of collections the CMS should be able to edit
  collections: [post, portfolio, categorie, pages]
};

export default config;
