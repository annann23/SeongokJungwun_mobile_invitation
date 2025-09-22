declare global {
  interface Window {
    Kakao: {
      init: (appKey: string) => void;
      isInitialized: () => boolean;
      Link: {
        sendCustom: (options: {
          templateId: number;
          templateArgs?: Record<string, string>;
        }) => void;
      };
    };
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        Map: new (container: HTMLElement, options: any) => any;
        LatLng: new (lat: number, lng: number) => any;
        Marker: new (options: any) => any;
        InfoWindow: new (options: any) => any;
      };
    }
  }
}

export {};
