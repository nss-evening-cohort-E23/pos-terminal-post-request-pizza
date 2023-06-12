const client = {
  apiKey: process.env.APP_API_KEY,
  authDomain: process.env.APP_AUTH_DOMAIN,
  databaseURL: process.env.APP_DATABASE_URL,
  projectId: process.env.APP_PROJECT_ID,
  storageBucket: process.env.APP_STORAGE_BUCKET,
  appId: process.env.APP_APP_ID,
  measurementId: process.env.APP_MEASUREMENT_ID,
};

export default client;
