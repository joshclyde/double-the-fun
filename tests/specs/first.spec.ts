import { createGif } from "../../src/giffin";
import { form } from "../pageObjects/form";

describe("testing stuff", function() {
  it("fill out form", async function() {
    form.navigateTo();

    form.username.set("user1234");
    form.password.set("password");

    form.firstName.set("Josh");
    form.lastName.set("Clyde");

    form.greenColor.click();
    form.yellowColor.click();
    form.redColor.click();

    form.heartButton.click();

    await createGif();
    console.log("GIF CREATED");
  });
});
