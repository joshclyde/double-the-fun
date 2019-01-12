import { createButton, createInput, createPageParams, createRadioInput } from "../../src/createLocator";

export const form = {
  ...createPageParams("http://localhost:4003"),
  username: createInput("[data-qa-id=usernameInput]"),
  password: createInput("[data-qa-id=passwordInput]"),
  firstName: createInput("[data-qa-id=firstNameInput]"),
  lastName: createInput("[data-qa-id=lastNameInput]"),
  greenColor: createRadioInput("[data-qa-id=greenInput]"),
  yellowColor: createRadioInput("[data-qa-id=yellowInput]"),
  redColor: createRadioInput("[data-qa-id=redInput]"),
  heartButton: createButton("[data-qa-id=heartButton]"),
};
