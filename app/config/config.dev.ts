/**
 * These are configuration settings for the dev environment.
 *
 * Do not include API secrets in this file or anywhere in your JS.
 *
 * https://reactnative.dev/docs/security#storing-sensitive-info
 */
if (!process.env.API_URL) {
  throw new Error("You need to create a .env file in root of the project")
}

export default {
  API_URL: process.env.API_URL,
}
