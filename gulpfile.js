@@ -26,14 +26,14 @@ if ('development' == env) {
 
 // JS hint task
 gulp.task('jshint', function() {
-  gulp.src('*.js')
-    .pipe(jshint())
-    .pipe(jshint.reporter('default'));
+    gulp.src('*.js')
+        .pipe(jshint())
+        .pipe(jshint.reporter('default'));
 });
 
 gulp.task('default', function() {
 
-	http.createServer(app).listen(app.get('port'))
-  console.log("Express server listening on port " + app.get('port'));
+    http.createServer(app).listen(app.get('port'))
+    console.log("Express server listening on port " + app.get('port'));
 
 });