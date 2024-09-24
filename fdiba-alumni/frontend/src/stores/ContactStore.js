import { makeAutoObservable } from "mobx";

class ContactStore {
  contactDetails = {
    university: "Technical University of Sofia",
    department: "FDIBA",
    address: "8 blvd. St. Kliment Ohridski, Block 10, 2 Floor, Sofia 1756",
    phone: "+359 2 965 3213",
    email: "contact[at]fdiba.tu-sofia.bg",
    contactPerson: {
      name: "Detelina Stancheva",
      title: "Dean’s office",
      phone: "+359 2 965 3213",
      email: "detelina.stancheva@fdiba.tu-sofia.bg",
    },
  };

  constructor() {
    makeAutoObservable(this);
  }
}

const contactStore = new ContactStore();
export default contactStore;
