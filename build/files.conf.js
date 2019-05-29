module.exports = {
    CSSJSfiles: [{
        name: 'all page',
        quotefile: '_includes/index_head.html',
        prefix: 'app-',
        type: 'js',
        list: [
            'node_modules/jquery/dist/jquery.js',
            'static/js/bs3-typeahead.js',//
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'node_modules/pace-progress/pace.js',
            'static/js/scroll.js',
        ]
    }, {
        name: 'all pages',
        quotefile: '_includes/index_head.html',
        prefix: 'app-',
        type: 'css',
        list: [
            'node_modules/normalize.css/normalize.css',
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'node_modules/animate.css/animate.css',
            'node_modules/components-font-awesome/css/font-awesome.css',
            'node_modules/font-mfizz/dist/font-mfizz.css',
            'node_modules/gritter/jquery.gritter.css',
            'node_modules/pace-progress/themes/blue/pace-theme-flash.css',
        ]
    }]
}
