import React from "react";
import { storiesOf } from "@storybook/react";
import Forms from "./Forms";

storiesOf("Forms", module)
  .add("E-mail Small-Size", () => <Forms label="Email" type="email" />)
  .add("E-mail Medium-Size", () => <Forms label="Email" type="email" mediumsize />)
  .add("E-mail Large-Size", () => <Forms label="Email" type="email" largesize />);