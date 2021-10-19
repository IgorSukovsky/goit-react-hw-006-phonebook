import { useSelector } from "react-redux";
import ContactsListItem from "../ContactListItem/ContactListItem";
import styles from "./ContactList.module.css";

const ContactsList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  const formattedFilter = filter.toLowerCase().trim();

  const filteredItems = contacts.filter((item) =>
    item.name.toLowerCase().includes(formattedFilter)
  );

  return (
    <>
      <ul className={styles.ul}>
        {filteredItems.map((item) => (
          <ContactsListItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
