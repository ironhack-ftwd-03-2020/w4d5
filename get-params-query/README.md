1. Add line 6 : app.use(express.static('public'));

2. $ mkdir public
   $ touch public/style.css
   in the style.css add 
    body {
        font-family: Roboto;
    }

3. Add a layout file :
   $ touch views/layout.hbs
   add basic html using !
   add a link to roboto font
   in the body : {{{ body }}} 

   skip the layout for a route: { layout: false }

4. Explain that you want to take out everyting that is in the each in the index
   and move it to a new file - a partial

5. Create a partials folder and a partial movieCard
   $ mkdir views/partials
   $ touch views/partials/movieCard.hbs

6. Take everything within each from index out and move it into the partial

7. In the each in index add : {{>movieCard this}}

8. register partials in app.js : 
    const hbs = require('hbs');
    hbs.registerPartials(__dirname + '/views/partials');

9. add a link around the image with href="/godfather"

10. add a new route for godfather, find the godfather via find from the allMovies array 
    and render a view movie

11. create the movie view
    $ touch views/movie.hbs

12. In the view add :  
    {{> movieCard movie}}