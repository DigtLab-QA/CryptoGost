const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://cryptoarm.ru/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://raw.githubusercontent.com/DigtLab-QA/CryptoGost/master/src/images/cryptogost.png',
    logoLink: 'https://cryptoarm.ru//',
    title: '',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'Kloud',
      algoliaAppId: "ALEC0WYN85",
      algoliaSearchKey: "5b3e9e822ca6424f23ac7eabae6576e9",
      algoliaAdminKey: "3a662f2a97971b3daa07d1509dc3cf44",
    },
  },
  sidebar: {
    forcedNavOrder: [
      '1-about',
      '2-repare_to_working',
      '3-work_with_product',
      '4-instructions'

    ],
    collapsedNav: [],
    links: [{ text: 'КриптоАРМ ГОСТ', link: 'https://cryptoarm.ru/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://cryptoarm.ru/'>КриптоАРМ ГОСТ </a>",
  },
  siteMetadata: {
    title: 'GitDocs CRYPTO.GOST',
    description: 'Documentation built with mdx.',
    ogImage: null,
    docsLocation: '',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'GitDocs CRYPTO.GOST',
      short_name: 'GitDocs CRYPTO.GOST',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
