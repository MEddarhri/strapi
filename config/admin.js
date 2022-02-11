module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'be96b3f02525e98468317002d5f5312c'),
  },
});
