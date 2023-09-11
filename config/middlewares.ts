export default [
  'strapi::errors',
  /* 'strapi::security', */ {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'localhost',
            'market-assets.strapi.io',
            `${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com`, // change here
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'localhost',
            'market-assets.strapi.io',
            `${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com`, // change here
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  }, 
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
