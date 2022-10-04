import css from './Statistics.module.css';
import PropTypes from 'prop-types'

export const Statistics = ({stats}) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>
            <ul className={css.stat_list}>
                {stats.map(stats => (
                    <li key={stats.id} className={css.item}>
                        <span className={css.label}>{stats.label}</span>
                        <span className={css.percentage}>{stats.percentage}%</span>
                    </li>))
            
                }
            </ul>
            
        </section>
    );
}


Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}
