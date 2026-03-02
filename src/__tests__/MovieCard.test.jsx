import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MovieCard from "../components/MovieCard.jsx";

test("renders movie title and rating", () => {
  const movie = { id: 1, title: "Inception", vote_average: 8.8 };

  render(
    <MemoryRouter>
      <MovieCard movie={movie} />
    </MemoryRouter>
  );

  expect(screen.getByText("Inception")).toBeInTheDocument();
  expect(screen.getByText(/Rating:/i)).toBeInTheDocument();
});