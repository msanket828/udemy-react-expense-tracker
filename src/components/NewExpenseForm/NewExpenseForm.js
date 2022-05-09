const NewExpenseForm = () => {
  return (
    <div className="new-expenseform">
      <form>
        <div className="new-expenseform__container mb-4">
          <div className="form-group">
            <label className="text-white">Expense Item Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="New Expense Name"
            />
          </div>
          <div className="form-group">
            <label className="text-white">Expense Amount</label>
            <input type="tel" className="form-control" placeholder="Amount" />
          </div>
          <div className="form-group">
            <label className="text-white">Purchase Date</label>
            <input
              type="date"
              className="form-control"
              min="2022-01-01"
              max="2025-12-12"
              placeholder="Date"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Expense Item
        </button>
      </form>
    </div>
  );
};

export default NewExpenseForm;
