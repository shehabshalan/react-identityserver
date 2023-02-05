export class Constants {
  public static stsAuthority = import.meta.env.VITE_STS_AUTHORITY; // this is how vite handles env variables. docs here: https://vitejs.dev/guide/env-and-mode.html
  public static clientId = import.meta.env.VITE_CLIENT_ID;
  public static clientResponseType = import.meta.env.VITE_CLIENT_RESPONSE_TYPE;
  public static clientGrantType = import.meta.env.VITE_CLIENT_GRANT_TYPE;
  public static clientRoot = import.meta.env.VITE_CLIENT_ROOT;
  public static clientScope = import.meta.env.VITE_CLIENT_SCOPE;
  public static apiRoot = import.meta.env.VITE_API_ROOT;
}
