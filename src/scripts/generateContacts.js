import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";

const generateContacts = async (number) => {
    const oldContacts = await readContacts();
    const newContacts = Array.from({ length: number }, () => createFakeContact());
    const updatedContacts = oldContacts.concat(newContacts);
    await writeContacts(updatedContacts);
};

generateContacts(5);
