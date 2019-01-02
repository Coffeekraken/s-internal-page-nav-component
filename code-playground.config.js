module.exports = {
  // server port
  port: 3000,

  // title
  title: 's-internal-page-nav-component',

  // layout
  layout: 'right',

  // compile server
  compileServer: {

    // compile server port
    port: 4000

  },

  // editors
  editors: {
    html: {
      language: 'html',
      data: `
        <h1 class="h3 m-b-small m-t-big">
          Coffeekraken s-internal-page-nav-component
        </h1>
        <p class="p m-b-bigger">
          Provide a simple way to create a nice internal page navigation that automaticaly activate the good link depending on the displayed section.
        </p>
        <header id="header">
          <s-internal-page-nav>
            <ul class="nav nav--primary">
              <li class="nav__item">
                <a href="#item-1" title="item-1">Item #1</a>
              </li>
              <li class="nav__item">
                <a href="#item-2" title="item-2">Item #2</a>
              </li>
              <li class="nav__item">
                <a href="#item-3" title="item-3">Item #3</a>
              </li>
              <li class="nav__item">
                <a href="#item-4" title="item-4">Item #4</a>
              </li>
            </ul>
          </s-internal-page-nav>
        </header>

        <section id="content">
          <section id="item-1">
            <h1 class="h1 m-b">Item 1</h1>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
          </section>

          <section>
            <h1 class="h1 m-b">No item</h1>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
          </section>

          <section id="item-2">
            <h1 class="h1 m-b">Item 2</h1>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
          </section>

          <section id="item-3">
            <h1 class="h1 m-b">Item 3</h1>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
          </section>

          <section id="item-4">
            <h1 class="h1 m-b">Item 4</h1>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
            <p class="p m-b">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et suscipit felis, quis varius nunc. Aliquam mollis, nisl nec dictum pharetra, tortor massa vestibulum dolor, non rutrum felis odio ac enim. Nulla blandit quis dolor sit amet ullamcorper. Vivamus sit amet odio sapien. Aenean posuere laoreet tellus, id varius enim faucibus et. Sed in lacinia magna. Duis quis ullamcorper urna, a vulputate enim. Ut molestie interdum luctus. Pellentesque enim diam, rhoncus ut orci vitae, bibendum tincidunt elit. Pellentesque ullamcorper, enim at consectetur maximus, risus massa eleifend neque, eget bibendum nunc libero eu mi. Curabitur sit amet elementum libero, in sagittis dolor.
            </p>
          </section>

        </section>
      `
    },
    css: {
      language: 'sass',
      data: `
        @import 'node_modules/coffeekraken-sugar/index';
        @import 'node_modules/coffeekraken-s-typography-component/index';

        @include s-setup(());
        @include s-init();
        @include s-classes();
        @include s-typography-classes();

        body {
          padding: s-space(bigger);
        }

        #header {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          background: white;
          padding: s-space(default);
          border-bottom: 1px solid #ddd;
        }

        .nav {
        }
        .nav--primary {
          margin: 0 -10px;

          .nav__item {
            display: inline-block;
            margin: 0 10px;

            a {
              text-decoration: none;

              &.active {
                font-weight: bold;
                color: s-color(primary);
              }
            }
          }
        }

      `
    },
    js: {
      language: 'js',
      data: `
        import SInternalPageNavComponent from './dist/index'
      `
    }
  }
}
