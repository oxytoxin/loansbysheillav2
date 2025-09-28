<?php

    namespace App\Http\Controllers;

    use Inertia\Inertia;
    use Request;
    use Statamic\Facades\Entry;

    class GuidesController extends Controller
    {
        public function show(Request $request, $slug)
        {
            $article = Entry::whereCollection('guides')->where('slug', $slug)->first();
            abort_if(!$article, 404);
            return Inertia::render('guides/show', [
                'article' => $article,
                'author' => $article->author->name,
            ]);
        }
    }
