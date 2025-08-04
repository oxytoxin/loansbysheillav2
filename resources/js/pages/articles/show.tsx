import {Head} from '@inertiajs/react'
import MainLayout from "@/layouts/main-layout";
import {useEmbed} from "@/hooks/use-embed";

export default function Show({article, author}) {
    console.log(article);
    const getEmbedUrl = useEmbed();
    return (
        <MainLayout>
            <Head title="show"/>
            <section
                className="relative w-full h-auto overflow-hidden object-cover">
                <div className="absolute inset-0 z-0 h-full bg-green-900 opacity-50"></div>
                <img className="absolute inset-0  w-full z-[-1]" src={article.featured_image.url}
                     alt={article.title}/>
                <div className="container flex items-center justify-center h-auto py-48 mx-auto">
                    <div className="z-10 flex flex-col items-center px-8 xl:px-0">
                        <h1 className="mx-6 mt-1 text-5xl font-black text-center text-white lg:text-6xl sm:text-center sm:mx-0">{article.title}</h1>
                        <h4 className="font-semibold text-2xl text-orange-400 mt-4">by {author}</h4>
                        <p className="w-2/3 mt-24 text-xl font-normal text-center text-gray-200">{article.summary}</p>
                    </div>
                </div>
            </section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                {article.page_builder[0].article.map((section, index) => {
                    if (section.type === 'text') {
                        return <div key={index} className="flex flex-col gap-4"
                                    dangerouslySetInnerHTML={{__html: section.text}}></div>
                    }
                    if (section.type === 'video') {
                        return <iframe key={section.id}
                                       src={getEmbedUrl(section.video_url)}
                                       className="h-96 mx-auto my-12 w-2/3" width="auto" height="auto" frameBorder="0"
                                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                       allowFullScreen></iframe>

                    }
                })}
            </div>
        </MainLayout>
    )
}
