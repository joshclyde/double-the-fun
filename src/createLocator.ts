import { addFrame } from "./giffin";

// locator actions

const setUrl = (url: string) => {
  browser.url(url);
  addFrame();
};

const click = (locator: string) => {
  $(locator).click();
  addFrame();
};

const setValue = (locator: string, value: string) => {
  $(locator).setValue(value);
  addFrame();
};

// commmon locator stuff

const commonStuff = (locator: string) => ({
  locator,
});

// create locators

export const createPageParams = (url: string) => ({
  url,
  navigateTo: () => setUrl(url),
});

export const createInput = (locator: string) => ({
  ...commonStuff(locator),
  set: (value: string) => setValue(locator, value),
});

export const createRadioInput = (locator: string) => ({
  ...commonStuff(locator),
  click: () => click(locator),
});

export const createButton = (locator: string) => ({
  ...commonStuff(locator),
  click: () => click(locator),
});
