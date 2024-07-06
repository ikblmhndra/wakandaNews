<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class NewsController extends Controller
{
    //
    public function index()
    {
        $newskey=env('API_KEY');
        $response = Http::get('https://newsapi.org/v2/everything?domains=detik.com&apiKey='.$newskey);
        $newsdata = $response->json()["articles"];
        return Inertia::render('NewsComponent', ['newsdata' => $newsdata]);
    }
}
