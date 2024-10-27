<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// sleep(1);

Route::get('/', function () {
    $content = file_get_contents('/var/www/html/test-api/ep/contents.json');
    $details = json_decode($content, true);

    return Inertia::render('home', [
        'assetUrl' => fn() => $details['assetUrl'],
        'pageWidth' => fn() => $details['pageWidth'],
        'pageHeight' => fn() => $details['pageHeight'],
        'vmContentDetails' => fn() => $details['vmContentDetails']
    ]);
});

Route::get('/story/{id}', function ($id) {
    $content = file_get_contents('/var/www/html/test-api/ep/contentdetail_story_ex2.json');
    $story = json_decode($content, true);

    return Inertia::render('story', $story);
})->name('story');

Route::get('/image/{id}', function ($id) {
    $content = file_get_contents('/var/www/html/test-api/ep/contentdetail_image.json');
    $image = json_decode($content, true);

    return Inertia::render('image', $image);
});

Route::get('/subscribe', function () {
    return Inertia::render('subscribe');
});