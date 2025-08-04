import {Article} from "@/types/props";

interface ArticleCardProps {
    article: Article
}

export default function ArticleCard({article}: ArticleCardProps) {
    return (
        <div
            className="group hover:bg-primary rounded-lg border border-[#A6A6A6] bg-[#E2E6DB] p-4 duration-300 flex flex-col hover:scale-105">
            <img
                src={article.featured_image}
                alt={article.title}
                className="h-72 w-full rounded-lg object-cover object-center"
            />
            <h3 className="text-primary mt-2 ml-4 w-4/5 font-semibold group-hover:text-white">
                {article.title}
            </h3>
            <div className="mt-2 mb-6 flex justify-between px-4 group-hover:text-white">
                <div>
                    <h4 className="font-semibold">By {article.author}</h4>
                    <h4>{article.date}</h4>
                </div>
                <img
                    className="h-12 w-12 rounded-full"
                    src={`https://ui-avatars.com/api/?bold=true&name=${article.author}`}
                    alt="avatar"
                />
            </div>
            <div className="flex mt-auto justify-center">
                <a
                    target="_blank"
                    href={article.url}
                    className="bg-primary group-hover:text-primary mt-4 rounded-full border-[#074A42] px-16 py-2 font-semibold text-white group-hover:bg-[#E2E6DB] hover:border-[#A6A6A6]"
                >
                    READ MORE
                </a>
            </div>
        </div>
    );
}
