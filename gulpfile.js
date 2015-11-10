var connect = require('gulp-connect');
var gulp = require('gulp');

gulp.task('server',function(){
	connect.server({
		 port: 8876
	});
});