import ContactForm from "./components/form/ContactForm";
import SearchBox from "./components/search/SearchBox";
import ContactList from "./components/list/ContactList";

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
