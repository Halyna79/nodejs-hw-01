import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    const contacts = await readContacts();
    const newContacts = createFakeContact();
    contacts.push(newContacts);
    await writeContacts(contacts);
};

addOneContact();
