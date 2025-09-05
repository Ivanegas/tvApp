import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.d742cde494e84bef8d046cdc65d2b81e',
  appName: 'tv-app-builder',
  webDir: 'dist',
  server: {
    url: 'https://d742cde4-94e8-4bef-8d04-6cdc65d2b81e.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true,
    useLegacyBridge: false,
    loggingBehavior: 'none'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#000000',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false
    }
  }
};

export default config;