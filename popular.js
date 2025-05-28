const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTBmM2U2MGUwMDdhNDNhNWUwZTY4M2QxMjFkMDRhOCIsIm5iZiI6MTc0Mjk1NDc4Mi44MTUsInN1YiI6IjY3ZTM2MTFlZWM5OGJmMGEwZDc1ZmZhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LL7SqBIef0eKPzgJAvH5KNr8oYGQfPne6jIS-B241zY",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
  options
)
  .then((res) => res.json())
  .then((res) => {
    const movies = res.results;
    const container = document.getElementById("movie-list");

    container.innerHTML = movies
      .map(
        (movie) => `
          <div class="movie-card">
            <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />
            <div class="movie-info">
              <strong>${movie.title}</strong>
              <p>평점: ${movie.vote_average}</p>
              <p>개봉일: ${movie.release_date}</p>
            </div>
          </div>
        `
      )
      .join("");
  })
  .catch((err) => console.error("API 오류:", err));
