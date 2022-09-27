import { Log, User, UserManager, WebStorageStateStore } from "oidc-client";
import { Constants } from "./Constants";

export class AuthService {
  public userManager: UserManager;
  constructor() {
    const settings = {
      authority: Constants.stsAuthority,
      client_id: Constants.clientId,
      redirect_uri: `${Constants.clientRoot}/signin-callback.html`,
      silent_redirect_uri: `${Constants.clientRoot}/silent-renew.html`,
      post_logout_redirect_uri: Constants.clientRoot,
      response_type: Constants.clientResponseType,
      grant_type: Constants.clientGrantType,
      scope: Constants.clientScope,
    };

    this.userManager = new UserManager(settings);

    Log.logger = console;
    Log.level = Log.INFO;
  }

  public getUser(): Promise<User | null> {
    return this.userManager.getUser();
  }

  public login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  public renewToken(): Promise<User> {
    return this.userManager.signinSilent();
  }

  public logout(): Promise<void> {
    return this.userManager.signoutRedirect();
  }
}
