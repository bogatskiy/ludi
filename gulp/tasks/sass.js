'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src('./source/style/main.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sassGlob())
      .pipe($.gp.sass({includePaths: $.normalize.includePaths}))
      .on('error', $.gp.notify.onError({ title: 'Style' }))
      .pipe($.gp.autoprefixer({browsers: ['> 1%']}))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  })
};