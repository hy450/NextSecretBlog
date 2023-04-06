export type BlogData = {
  id: string;
  title: string;
  summary: string | undefined | null;
  contentPath: string | undefined | null;
  imagePath: string | undefined | null;
  tags: string[] | undefined | null;
  writer: string;
  createdAt: number;
  updatedAt: number;
};
