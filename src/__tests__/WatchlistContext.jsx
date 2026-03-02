import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useContext } from "react";
import { WatchlistContext, WatchlistProvider } from "../contexts/WatchlistContext.jsx";

function TestComponent() {
  const { watchlist, addToWatchlist } = useContext(WatchlistContext);
  return (
    <div>
      <button onClick={() => addToWatchlist({ id: 1, title: "Inception" })}>Add</button>
      <div>Count: {watchlist.length}</div>
    </div>
  );
}

test("adds an item to watchlist", async () => {
  const user = userEvent.setup();

  render(
    <WatchlistProvider>
      <TestComponent />
    </WatchlistProvider>
  );

  expect(screen.getByText("Count: 0")).toBeInTheDocument();
  await user.click(screen.getByText("Add"));
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});