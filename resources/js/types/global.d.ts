import { AxiosInstance } from 'axios';
import { route as ziggyRoute } from 'ziggy-js';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    var route: typeof ziggyRoute;
}

export interface NewsItem {
    author: string;
    title: string;
    content: string;
    url: string;
    publishedAt: string;
    urlToImage: string;
  }