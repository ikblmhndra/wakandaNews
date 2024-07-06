import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface NewsItem {
    author: string;
    title: string;
    content: string;
    url: string;
    publishedAt: string;
    urlToImage: string;
  }

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
