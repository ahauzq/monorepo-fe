export type PlatformOSType = 'iphone' | 'ipad' | 'android' | 'mac' | 'windows' | 'linux';

enum deviceType {
  windows = 0,
  ipad = 1,
  android = 2,
  iphone = 3,
  mac = 4,
  linux = 6,
}
const deviceTypeMap = {
  windows: 0,
  ipad: 1,
  android: 2,
  iphone: 3,
  mac: 4,
  linux: 6,
};

enum CorlorMode {
  dark = 'dark',
  light = 'light',
}

const getLanguage = () => {
  return navigator.userAgent.match(/POPOLanguage\/(\S+)/)?.[1] || 'zh-CN';
};

const getVersion = () => {
  //TODO 临时增加一个版本号
  return (
    navigator.userAgent.match(/POPOVersion\/(\S+)/)?.[1] ||
    navigator.userAgent.match(/popoversion_(\S+)/)?.[1] ||
    '4.17.0'
  );
};

const getTheme = () => {
  return (navigator.userAgent.match(/POPOTheme\/(\S+)/)?.[1] || CorlorMode.dark) as CorlorMode;
};

class WebPlatform {
  ANDROID: string;
  IPHONE: string;
  MAC: string;
  LINUX: string;
  WINDOWS: string;
  isMobile: boolean;
  isPOPO: boolean;
  isPC: boolean;
  OS: PlatformOSType;
  deviceType: deviceType;
  appVersion: string;
  appLanguage: string;
  appTheme: string;
  private ua: string;

  constructor() {
    this.ANDROID = 'android';
    this.IPHONE = 'iphone';
    this.MAC = 'mac';
    this.LINUX = 'linux';
    this.WINDOWS = 'windows';
    this.ua = navigator.userAgent.toLocaleLowerCase();
    this.OS = this.getPlatform();
    this.isPOPO = this.ua.includes('popo');
    this.isMobile = this.OS === 'ipad' || this.OS === this.ANDROID || this.OS === this.IPHONE;
    this.isPC = this.OS === this.WINDOWS || this.OS === this.MAC || this.OS === this.LINUX;
    this.deviceType = this.getdeviceType();
    this.appVersion = this.getVersion();
    this.appLanguage = this.getLanguage();
    this.appTheme = this.getTheme();
  }
  private getPlatform() {
    const ua = this.ua;
    let platform: PlatformOSType | undefined = undefined;
    if (/(iphone)/i.test(navigator.userAgent)) {
      platform = 'iphone';
    } else if (/(ipad)/i.test(ua)) {
      platform = 'ipad';
    } else if (/(android)/i.test(ua)) {
      platform = 'android';
    } else if (/(macintosh)/i.test(ua)) {
      platform = 'mac';
    } else if (/(windows)/i.test(ua)) {
      platform = 'windows';
    } else if (/(linux)/i.test(ua)) {
      platform = 'linux';
    } else {
      platform = 'windows';
    }

    return platform;
  }
  getdeviceType() {
    return deviceTypeMap[this.OS];
  }
  getVersion() {
    return getVersion();
  }
  getLanguage() {
    return getLanguage();
  }
  getTheme() {
    return getTheme();
  }
}

const Platform = new WebPlatform();

const setThemeConf = (value: CorlorMode) => {
  setTimeout(() => {
    if (value === CorlorMode.dark) {
      document.body.setAttribute('data-theme', CorlorMode.dark);
      document.body.setAttribute('data-color-scheme', CorlorMode.dark);
    } else {
      document.body.setAttribute('data-theme', CorlorMode.light);
      document.body.setAttribute('data-color-scheme', CorlorMode.light);
    }
  }, 0);
};
const setLanguageConf = (language: string) => {};

export { CorlorMode, getLanguage, getTheme, getVersion, Platform, setLanguageConf, setThemeConf };
