const version = '1';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(`static-${version}`)
        .then(cache => cache.addAll([
            '/',
            '/classes',
            '/classes/index.html',
            '/contact',
            '/contact/index.html',
            '/shows',
            '/shows/index.html',
            '/workshops',
            '/workshops/index.html',
            '/assets/css/style.css',
            '/assets/js/marcelaviola.com.min.js',
            '/assets/images/favicon.png',
            '/assets/images/marcelaprofile.jpg',
            '/assets/images/home/x2/hero1_v.jpg',
            '/assets/images/home/x2/hero1.jpg',
            '/assets/images/home/x2/hero2_v.jpg',
            '/assets/images/home/x2/hero2.jpg',
            '/assets/images/home/x2/hero3_v.jpg',
            '/assets/images/home/x2/hero3.jpg',
            '/assets/images/home/x2/hero4_v.jpg',
            '/assets/images/home/x2/hero4.jpg',
            '/assets/images/logo/x2/logo-horizontal.png',
            '/assets/images/logo/x2/logo.png'
        ]))
    );
});