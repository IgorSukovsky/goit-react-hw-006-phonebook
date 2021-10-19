import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import actions from "../../redux/phonebook/phonebookAction";
import styles from "./ContactListItem.module.css";
const ContactsListItem = ({ item }) => {
  const { name, number, id } = item;
  const dispatch = useDispatch();

  const onHandleDelete = () => dispatch(actions.handleDelete(id));

  return (
    <li>
      <div className={styles.textContent}>
        <span>
          {name}: {number}
        </span>
        <button className={styles.btn} onClick={onHandleDelete}>
          X
        </button>
      </div>
    </li>
  );
};

ContactsListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactsListItem;
