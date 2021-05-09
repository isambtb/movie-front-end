import { Cookie } from 'ng2-cookies';

export class CookieHelper {
  public static setCookie(name: string, value: string) {
    try {
      Cookie.set(name, value);
    } catch (e) {
      console.log('Error while setting cookie', e);
    }
  }

  public static getCookie(name: string): string {
    try {
      return Cookie.get(name);
    } catch (e) {
      console.error(`Error while setting cookie ${name}`, e);
      return null as any;
    }
  }
}
