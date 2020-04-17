const express = require('express');
const app = express();
const hbs = require('hbs');
const allMovies = require('./movies.json');

app.use(express.static('public'));

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index', { movies: allMovies });
});

app.get('/findmovies', (req, res) => {
    // res.send(req.query.movieTitle);
    const movies = allMovies.filter(movie => movie
        .title
        .toLowerCase()
        .includes(req.query.movieTitle.toLowerCase())
    );
    res.render('index', { movies: movies });
});


app.get('/search', (req, res) => {
    res.send(req.query);
});

// app.get('/godfather', (req, res) => {
//     const godfather = allMovies.find(movie => movie.title === 'The Godfather');
//     console.log(godfather);
//     res.render('movie', { movie: godfather });
// }); ----------------> this we want to make dynamic : 

app.get('/movies/:title', (req, res) => {
    // res.send(req.params);
    const movieFromTitle = allMovies.find(movie => movie.title === req.params.title);
    res.render('movie', { movie: movieFromTitle });
});


// access query string parameters - used for searching and pagination
// app.get('/search', (req, res) => {
//     res.send(req.query);
// });


// access the route parameters -> it can also be /books/:id
// also show : /user/:userId/posts/postId -> multiple params
// example : github/username/repository 
// app.get('/:name', (req, res) => {
//     res.send(req.params);
// });

app.listen(3000);