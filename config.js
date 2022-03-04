const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://cryptoarm.ru/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://raw.githubusercontent.com/DigtLab-QA/CryptoGost/master/src/images/cryptogost.svg',
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
      indexName: 'Crgost',
      algoliaAppId: "YSUPZ6O4QF",
      algoliaSearchKey: "a9c5865fedb6fa111eba7be1fffb6ac8",
      algoliaAdminKey: "856f676628f9f739513bb0757591b2cc",
    },
  },
  sidebar: {
    forcedNavOrder: ['01-v2.5.11','05-v3.0-Beta','06-v3.2','46-faq'],
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
