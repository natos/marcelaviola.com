const version = '2';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(`static-${version}`)
        .then(cache => cache.addAll([
            '/',
            '/assets/css/style.css',
            '/assets/js/marcelaviola.com.min.js',
            '/assets/videos/231127_marce_@_marina_bay_16_9.mp4',
            '/assets/videos/231127_marce_@_marina_bay_9_16.mp4',
            '/assets/images/favicon.png',
            '/assets/images/about/x1/about.jpg',
            '/assets/images/about/x2/about.jpg',
            '/assets/images/v/x1/240221 R6ii - R6II6409.jpg',
            '/assets/images/v/x2/240221 R6ii - R6II6409.jpg',
            '/assets/images/contact/x1/contact.jpg',
            '/assets/images/contact/x2/contact.jpg',
            '/assets/images/credentials/x1/credentials.jpg',
            '/assets/images/credentials/x2/credentials.jpg',
            '/assets/images/services/x1/services.jpg',
            '/assets/images/services/x2/services.jpg',
            '/assets/images/nutrition/x1/nutrition.jpg',
            '/assets/images/nutrition/x2/nutrition.jpg',
            '/assets/images/strength/x1/strength.jpg',
            '/assets/images/strength/x2/strength.jpg',
            '/assets/images/mobility/x1/mobility.jpg',
            '/assets/images/mobility/x2/mobility.jpg'
        ]))
    );
});