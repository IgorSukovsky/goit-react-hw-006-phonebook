import PropTypes from "prop-types";
import { connect } from "react-redux";
import ContactsListItem from "../ContactListItem/ContactListItem";
import styles from "./ContactList.module.css";

const ContactsList = ({ contacts }) => {
  console.log(contacts);
  return (
    <>
      <ul className={styles.ul}>
        {contacts.contact.map((item) => (
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
    contacts: state,
  };
};

export default connect(mapStateToProps)(ContactsList);
