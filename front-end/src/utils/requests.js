const API_KEY = '8qlOkxz4wq';

const requests = {
	fetchTrending: `/trending?Token=${API_KEY}`,
	fetchTopRated: `/top-rate?Token=${API_KEY}`,
	fetchActionMovies: `/discover?Token=${API_KEY}&genreId=28`,
	fetchComedyMovies: `/discover?Token=${API_KEY}&genreId=35`,
	fetchHorrorMovies: `/discover?Token=${API_KEY}&genreId=27`,
	fetchRomanceMovies: `/discover?Token=${API_KEY}&genreId=10749`,
	fetchDocumentaries: `/discover?Token=${API_KEY}&genreId=99`,
	fetchDetailMovie:  (id)=> `/video?Token=${API_KEY}&film_Id=${id}`,
	fetchSearch: `/search?Token=${API_KEY}`,
};

export default requests;
