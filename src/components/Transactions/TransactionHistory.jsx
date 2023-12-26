export const TransactionRow = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td> {type}
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionRow key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};
