import React from "react";
import { storiesOf } from "@storybook/react";
import Forms from "./Forms";

storiesOf("Forms", module)
    .add("E-mail Small-Size", () => <Forms label="Email" type="email" text="text" />)
    .add("E-mail Medium-Size", () => <Forms label="Email" type="email" text="text" mediumsize />)
    .add("E-mail Large-Size", () => <Forms label="Email" type="email" text="text" largesize />)
    .add("Select Small-Size", () => <Forms label="Select" type="select" selectText="Select" />)
    .add("Select Medium-Size", () => <Forms label="Select" type="select" selectText="Select" medselect />)
    .add("Select Large-Size", () => <Forms label="Select" type="select" selectText="Select" largeselect />)
    .add("Select Filled Small-Size", () => <Forms label="Select" type="select" selectText="Select" filledselect />)
    .add("Select Filled Medium-Size", () => <Forms label="Select" type="select" selectText="Select" medselect filledselect />)
    .add("Select Filled Large-Size", () => <Forms label="Select" type="select" selectText="Select" largeselect filledselect />)
    .add("Counter", () => <Forms label="Counter" type="counter" max="10" min="0" by ="1" starting="1" />)
    .add("Text and Button Small", () =>
        <Forms label="textAndutton" type="textAndutton" action="http://www.bing.com/?"
            data="search" submitButton="submit-button" submitText="submit-text" value="Redeem" placeholder="Voucher code"
        />)
    .add("Text and Button Large", () =>
        <Forms label="textAndutton" type="textAndutton" action="http://www.bing.com/?"
            data="search" submitButton="submit-button-large" submitText="submit-text-large" value="Redeem" placeholder="Voucher code"
        />)
    .add("Checkbox Black", () => <Forms label="CheckBox" type="checkbox" checkboxText="Text" isChecked="" />)
    .add("Checkbox Blue", () => <Forms label="CheckBox" type="checkbox" checkboxText="Text" isChecked="" checkboxBlue />);