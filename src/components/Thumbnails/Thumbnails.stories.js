import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnails from "./Thumbnails";

storiesOf("Thumbnails", module)
    .add("Block1", () => <Thumbnails label="Block1" type="block1" text="Apple Macbook Pro" stars="3" image="laptop"
        salePrice="499" retailPrice="599"
    />)