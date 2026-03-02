export default function SearchBar({ value, onChange, onSubmit, placeholder }) {
  return (
    <form
      className="row"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
      style={{ width: "100%" }}
    >
      <input
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Search..."}
        aria-label="Search"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}