// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'z6wq3cazm3'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-91t2tt75.us.auth0.com',            // Auth0 domain
  clientId: '2UHW6c1vb5IxdDQwzGyuEnJ18XaJrOyv',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
