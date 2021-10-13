import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../redux/phonebook/phonebookAction";
// import actions from "../../redux/phonebook/phonebookAction";
import ContactsListItem from "../ContactListItem/ContactListItem";
import styles from "./ContactList.module.css";

const ContactsList = ({ handleDelete, items }) => {
  console.log(items);
  return (
    <>
      <ul className={styles.ul}>
        {items.map((item) => (
          <ContactsListItem
            key={item.id}
            item={item}
            handleDelete={() => handleDelete(item.id)}
          />
        ))}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
  return {
    contacts: state.contact,
  };
};

export default connect(mapStateToProps, { handleDelete: actions.handleDelete })(
  ContactsList
);
