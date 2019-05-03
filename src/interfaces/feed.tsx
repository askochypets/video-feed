export default interface Feed {
  readonly type: string;
  readonly source: string;
  readonly views: number;
  readonly title?: string;
  readonly videoId?: string;
  readonly url?: string;
}
