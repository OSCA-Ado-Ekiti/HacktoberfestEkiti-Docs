// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HacktoberFest Ekiti 2022 Docs',
  tagline: 'HacktoberFest Ekiti 2022 Docs',
  url: 'https://hacktoberfest-ekiti.web.app',
  baseUrl: "/",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OSCA Ado Ekiti', // Usually your GitHub org/user name.
  projectName: 'hacktoberfestekiti-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/OSCA-Ado-Ekiti/HacktoberfestEkiti-Docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/OSCA-Ado-Ekiti/HacktoberfestEkiti-Docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Hacktoberfest Ekiti Docs',
        logo: {
          alt: 'Hacktoberfest Ekiti Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://swag.hacktoberfest-ekiti.web.app',
            position: 'left',
            label: 'Swag',
          },
          {
            href: 'https://hacktoberfest-ekiti.web.app/docs/projects',
            position: 'left',
            label: 'Projects',
          },
          {
            href: 'https://github.com/OSCA-Ado-Ekiti/HacktoberfestEkiti-Docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'WhatsApp',
                href: 'https://twitter.com/osca_ad',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/osca_ado_ekiti',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/OSCA-Ado-Ekiti/HacktoberfestEkiti-Docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
