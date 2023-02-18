import PropTypes from 'prop-types';
import { TransactionsTabel } from './TransactionHistory. styled';

const TransactionHistory = ({ transactions} ) => {
    return (
        <TransactionsTabel>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })} 
  </tbody>
</TransactionsTabel>  
            );
          };
    
  
          TransactionHistory.protoTypes = {
            transactions: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                amount: PropTypes.string.isRequired,
                currency: PropTypes.string.isRequired,
              })
            ),
          };

export default TransactionHistory;