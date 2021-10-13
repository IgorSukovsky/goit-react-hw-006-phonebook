import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ handleFilter, filter }) => {
  return (
    <div className={styles.block}>
      <label className={styles.title} htmlFor="filter">
        Find contacts by name:
      </label>
      <input
        id="filter"
        name="filter"
        type="text"
        className={styles.input}
        onChange={handleFilter}
        value={filter}
      />
    </div>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
