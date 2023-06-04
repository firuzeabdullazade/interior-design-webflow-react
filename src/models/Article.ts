import { ArticleReply } from './ArticleReply';

export interface ArticlesGridItem {
  postId: number;
  date: string;
  tag: string;
  imageSrc: string;
  firstPostImage: string;
  secondPostImage: string;
  content: string;
  postContent: string;
  shortTag: string;
  replies: ArticleReply[];
}
