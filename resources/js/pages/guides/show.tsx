import {Head} from '@inertiajs/react'
import MainLayout from "@/layouts/main-layout";
import {useEmbed} from "@/hooks/use-embed";

export default function Show({article: guide, author}) {
    const getEmbedUrl = useEmbed();
    return (
        <MainLayout>
            <Head title={guide.title}/>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className='text-3xl font-bold text-primary my-12'>{guide.title}</h1>
                {guide.page_builder[0].article.map((section, index) => {
                    if (section.type === 'text') {
                        return <div key={index} className="flex flex-col gap-4"
                                    dangerouslySetInnerHTML={{__html: section.text}}></div>
                    }
                    if (section.type === 'video') {
                        return <iframe key={section.id}
                                       src={getEmbedUrl(section.video_url)}
                                       className="h-[70vh] mx-auto my-12 w-full" width="auto" height="auto"
                                       frameBorder="0"
                                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                       allowFullScreen></iframe>

                    }
                })}
            </div>
        </MainLayout>
    )
}
