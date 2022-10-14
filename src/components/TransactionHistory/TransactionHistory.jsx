import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction_history}>
        <thead className={css.head}>
            <tr>
                <th className = {css.head_item}>Type</th>
                <th className = {css.head_item}>Amount</th>
                <th className = {css.head_item}>Currency</th>
            </tr>
        </thead>

            <tbody className={css.body}>
            {items.map(items => (
                <tr className={css.body_row} key={items.id}>
                    <td className={css.body_item}>{items.type}</td>
                    <td className={css.body_item}>{items.amount}</td>
                    <td className={css.body_item}>{items.currency}</td>
                </tr>
            ))}
            
        </tbody>
    </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
}
