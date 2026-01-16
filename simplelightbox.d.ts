declare module 'simplelightbox' {
  interface SimpleLightboxOptions {
    captions?: boolean;
    captionsData?: 'title' | 'alt';
    captionDelay?: number;
    scrollZoom?: boolean;
  }

  class SimpleLightbox {
    constructor(selector: string | string[], options?: SimpleLightboxOptions);
    refresh(): void;
    open(index?: number): void;
    close(): void;
    destroy(): void;
  }

  export default SimpleLightbox;
}
