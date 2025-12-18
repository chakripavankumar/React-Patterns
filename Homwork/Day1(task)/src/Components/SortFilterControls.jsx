export default function SortFilterControls({ value, onChange }) {
  return (
    <div className="mb-5">
      <label> Sort By :</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="price"> Price</option>
        <option value="rating"> Rating</option>
      </select>
    </div>
  );
}
