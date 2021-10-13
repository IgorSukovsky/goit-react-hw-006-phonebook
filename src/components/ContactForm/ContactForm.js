import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import { connect } from "react-redux";
import actions from "../../redux/phonebook/phonebookAction";

// ===============================================================
const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState("");

  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    handleSubmit({ name, number });

    setName("");
    setNumber("");
  };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <span className={styles.title}>Name</span>
        <input
          onChange={handleChange}
          className={styles.inputContact}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="имя:"
        />
        <span className={styles.title}>Number</span>
        <input
          className={styles.inputContact}
          name="number"
          type="tel"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          placeholder="тел:"
        />
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default connect(null, { addContact: actions.addContact })(ContactForm);
// ===============================================================

// class ContactForm extends Component {
//   state = {
//     id: uuid(),
//     name: "",
//     number: "",
//   };

//   handleChange = (evt) => {
//     this.setState({ [evt.target.name]: evt.target.value });
//   };

//   onSubmit = (evt) => {
//     evt.preventDefault();

//     this.props.handleSubmit(this.state);

//     this.setState({ name: "", number: "" });
//   };

//   render() {
//     return (
//       <>
//         <form className={styles.form} onSubmit={this.onSubmit}>
//           <span className={styles.title}>Name</span>
//           <input
//             onChange={this.handleChange}
//             className={styles.inputContact}
//             value={this.state.name}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//             placeholder="имя:"
//           />
//           <span className={styles.title}>Number</span>
//           <input
//             className={styles.inputContact}
//             name="number"
//             type="tel"
//             onChange={this.handleChange}
//             value={this.state.number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//             placeholder="тел:"
//           />
//           <button className={styles.btn} type="submit">
//             Add contact
//           </button>
//         </form>
//       </>
//     );
//   }
// }
// ContactForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

// export default ContactForm;
