import css from './Statistics.module.css';
import PropTypes from 'prop-types'

export const Statistics = ({ title, stats }) => {
    const isTitle = {title}
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{isTitle && title}</h2>
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
    stats: PropTypes.array.isRequired
}
