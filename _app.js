if ('serviceWorker' in navigator) {
    window.addEventListener('load', function(){
        navigator.serviceWorker.register('/_sw.js')
        .then(function(){
            console.log('ServiceWorker registered!');
        })
        .catch(function(err){
            console.log('ServiceWorker failed :(', err)
        });
    });
}