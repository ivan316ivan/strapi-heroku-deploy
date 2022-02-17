module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e1b3315910c43505a29c69d42888c897'),
  },
});
