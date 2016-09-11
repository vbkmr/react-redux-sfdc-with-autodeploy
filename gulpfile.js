
// load modules
var gulp = require( 'gulp' );
var webpack = require( 'gulp-webpack' );
var zip = require( 'gulp-zip' );
var jsforce = require( 'gulp-jsforce-deploy' );

var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minify = require('gulp-minify');


// Gulp tasks
var handleError = function(err){
  gutil.log(err);
  process.exit(1); //break the stream with throwing error
}

//Deploying to SFDC as static resource (after generating bundle.js of react/redux components)
gulp.task( 'deploy', ['resource-build'], function() {
   gulp.src( './pkg/**', { base: "." } )
       .pipe( zip( 'pkg.zip' ) )
       .pipe( jsforce( {
           username: process.env.SF_USERNAME, //Should be set as wercker pipleine env. var
           password: process.env.SF_PASSWORD, //Should be set as wercker pipleine env. var
           loginUrl: process.env.SF_ENV_URL //Should be set as wercker pipleine env. var
       } ) )
      .on('error', handleError(err));
} );

//Static resource build of webpack dist.
gulp.task( 'resource-build', ['webpack'], function() {
   return gulp.src( './dist/*' ).pipe( zip( 'ReactSearchStatic.resource' ) )
              .pipe( gulp.dest( 'pkg/staticresources' ) )
              .on('error', handleError(err));
} );

//Webpack build of react-redux
gulp.task( 'webpack', function() {
   return gulp.src( 'index.js' )
   .pipe(webpack( require('./webpack.config.js') ))
   .pipe( gulp.dest( './dist' ) )
   .on('error', handleError(err));
} );
