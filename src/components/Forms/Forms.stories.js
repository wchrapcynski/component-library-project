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
  .add("Select Large-Size", () => <Forms label="Select" type="select" selecttext="Select" largeselect/>);