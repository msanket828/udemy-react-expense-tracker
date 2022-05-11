import "./ExpenseFilter.css";

const ExpenseFilter = ({ onFilterByYear, filteredYear }) => {
  const drodownHandler = (event) => {
    onFilterByYear(event.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <label className="text-white">Filter By</label>
        <select
          className="custom-select"
          onChange={drodownHandler}
          value={filteredYear}
        >
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
