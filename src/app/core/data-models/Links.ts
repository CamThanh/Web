export interface ILink {
  rel: string;
  href: string;
  hreflang: string;
  media: string;
  title: string;
  type: string;
  deprecation: string;
}

export class Link {
  rel: string;
  href: string;
  hreflang: string;
  media: string;
  title: string;
  type: string;
  deprecation: string;
  
  constructor(link?: ILink) {
    if (link) {
      this.rel = link.rel;
      this.href = link.href;
      this.hreflang = link.hreflang;
      this.media = link.media;
      this.title = link.title;
      this.type = link.type;
      this.deprecation = link.deprecation;
    } else  {
      this.rel = "";
      this.href = "";
      this.hreflang = "";
      this.media = "";
      this.title = "";
      this.type = "";
      this.deprecation = "";
    }
  }
}