<?php

    namespace App\Http\Controllers;

    use Inertia\Inertia;
    use Statamic\Facades\Entry;
    use Statamic\Facades\GlobalSet;

    class PagesController extends Controller
    {
        public function index()
        {
            $mortgage_moments = collect(GlobalSet::findByHandle('mortgage_moments')->inDefaultSite()->get('entries'))->map(fn(
                $entry
            ) => [
                'id' => $entry['id'],
                'url' => str($entry['url'])->replaceFirst('shorts', 'embed')->toString(),
            ]);
            $faq_sections = collect(GlobalSet::findByHandle('faq')->inDefaultSite()->get('faq_sections'))->map(fn(
                $section
            ) => $section['faq_section']);
            $articles_groups = collect(Entry::whereCollection('articles')->all())->map(fn($article) => [
                'id' => $article['id'],
                'title' => $article['title'],
                'url' => $article['url'],
                'featured_image' => url('images/'.$article['featured_image']->path),
                'date' => $article['date']->format('F j, Y'),
                'tags' => $article['tags'],
                'author' => $article['author']->name,
            ])->chunk(8, false);
            return Inertia::render('welcome', [
                'mortgage_moments' => $mortgage_moments,
                'faq_sections' => $faq_sections,
                'articles_groups' => $articles_groups,
            ]);
        }
    }
