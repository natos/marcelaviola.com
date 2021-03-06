;
/*
 * Register
 */

(function(navigator) {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
            .then(function(reg) {
                console.log('Registration succeeded. Scope is ' + reg.scope);
            }).catch(function(error) {
                console.log('Registration failed with ' + error);
            });
    }
}(navigator));