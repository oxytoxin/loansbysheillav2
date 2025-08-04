<?php

    namespace App\Http\Controllers;

    use Illuminate\Support\Facades\Request;
    use Inertia\Inertia;
    use Statamic\Facades\Entry;

    class ArticlesController extends Controller
    {
        public function show(Request $request, $slug)
        {
            $article = Entry::whereCollection('articles')->where('slug', $slug)->first();
            return Inertia::render('articles/show', [
                'article' => $article,
                'author' => $article->author->name,
            ]);
        }
    }
