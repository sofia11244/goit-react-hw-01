import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';

// eslint-disable-next-line react-refresh/only-export-components
const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionTable}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
      {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td> 
            <td>{amount}</td>
            <td>{currency}</td>
          </tr> 
        ))}
      </tbody>
    </table>
  );  
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;