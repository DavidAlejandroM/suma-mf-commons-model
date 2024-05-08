export class Config {
  private API_URL: string = 'https://stage.sumasolutin.com';
  private static instance: Config;

  constructor(apiUrl?: string) {
    if (Config.instance) {
      return Config.instance;
    }

    this.API_URL = apiUrl || this.API_URL;

    Config.instance = this;
  }

  getApiUrl() {
    return this.API_URL;
  }

  setApiUrl(apiUrl: string) {
    this.API_URL = apiUrl;
  }
}
