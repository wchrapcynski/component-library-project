import React from "react";
import { storiesOf } from "@storybook/react";
import Forms from "./Forms";
import arrowdown from "./images/arrowdown.svg";

storiesOf("Forms", module)
  .add("E-mail Small-Size", () => <Forms label="Email" type="email" text="text" />)
  .add("E-mail Medium-Size", () => <Forms label="Email" type="email" text="text" mediumsize />)
  .add("E-mail Large-Size", () => <Forms label="Email" type="email" text="text" largesize />)
  .add("Select Small-Size", () => <Forms label="Select" type="select" selecttext="Select" />)
  .add("Select Medium-Size", () => <Forms label="Select" type="select" selecttext="Select" medselect/>)
  .add("Select Large-Size", () => <Forms label="Select" type="select" selecttext="Select" largeselect/>)
  .add("Select Filled Small-Size", () => <Forms label="Select" type="select" selecttext="Select" filledselect/>)
  .add("Select Filled Medium-Size", () => <Forms label="Select" type="select" selecttext="Select" medselect filledselect/>)
  .add("Select Filled Large-Size", () => <Forms label="Select" type="select" selecttext="Select" largeselect filledselect/>)
  .add("Counter", () => <Forms label="Counter" type="counter"/>);