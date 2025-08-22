export type MortgageMoment = {
    id: number;
    url: string
}

export type FAQEntry = {
    question: string;
    answer: string
}

export type Review = {
    source: string;
    author: string;
    img_url: string;
    rating: number;
    excerpt: string;
    content: string;
    date: string;
}

export type FAQSection = {
    title: string;
    entries: FAQEntry[];
}
export type FAQSections = FAQSection[];

export type Article = {
    id: string;
    title: string;
    url: string;
    featured_image: string;
    date: string;
    tags: string[];
    author: string;
}

export type ArticlesGroup = Article[];

export type ArticlesGroups = ArticlesGroup[];
