import { ChromiumBrowser } from 'playwright';

export type store = {
    name: string;
    url: string;
    data: ({ browser, url }: { browser: ChromiumBrowser, url: string }) => Promise<{ image: string; description: string, price: string, link: string, url: string, orderByPrice: number }>;
}