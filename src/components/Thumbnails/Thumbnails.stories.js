import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnails from "./Thumbnails";
import starsYellow from "./images/star-yellow.svg";

storiesOf("Thumbnails", module)
    .add("Block1", () => <Thumbnails label="" type="" text="Apple Macbook Pro" stars="4" />)