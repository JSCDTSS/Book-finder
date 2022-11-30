
export default function SearchBar({ value, setValue }) {

  return <input
    type="text"
    value={value}
    onChange={setValue}
    className="SearchBar"
    placeholder="Search"
  />
}