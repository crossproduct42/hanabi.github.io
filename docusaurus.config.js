module.exports = {
  title: 'The Hyphen-ated Conventions',
  url: 'https://hyphenated.github.com',
  baseUrl: '/hanabi-conventions/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Zamiell',
  projectName: 'hanabi-conventions',
  themeConfig: {
    // Vanilla components
    navbar: {
      title: 'Hyphen-ated Conventions',
      logo: {
        alt: 'My Site Logo',
        src: 'img/hyphenated.png',
      },
      items: [
        {
          to: 'docs/beginner',
          activeBasePath: 'docs',
          label: 'Beginner',
          position: 'left',
        },
        {
          to: 'docs/learning_path',
          activeBasePath: 'docs',
          label: 'Learning Path',
          position: 'left',
        },
        {
          to: 'docs/reference',
          activeBasePath: 'docs',
          label: 'Reference',
          position: 'left',
        },
        {
          to: 'docs/variant_specific',
          activeBasePath: 'docs',
          label: 'Variant-Specific',
          position: 'left',
        },
        {
          href: 'https://github.com/Zamiell/hanabi-conventions/issues',
          label: 'Proposals',
          position: 'right',
        },
        {
          href: 'https://github.com/Zamiell/hanabi-conventions',
          label: 'GitHub Repo',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Built with <a href="https://v2.docusaurus.io/">Docusaurus</a>.`,
    },

    // Extra settings
    algolia: {
      apiKey: 'd78c09bd651631ef68e85a10a605d1e8',
      indexName: 'hanabi-conventions',
      contextualSearch: false, // Only useful for versioned sites, e.g. docs for v1, v2
    },
    colorMode: {
      defaultMode: 'dark',
    },
    sidebarCollapsible: false,
  },
  /*
  plugins: [
    require.resolve('docusaurus-lunr-search'),
  ],
  */
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Zamiell/hanabi-conventions/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src: 'https://kit.fontawesome.com/1932a73877.js',
      crossorigin: 'anonymous',
    },
    '/hanabi-conventions/js/hotkey.js',
  ],
};