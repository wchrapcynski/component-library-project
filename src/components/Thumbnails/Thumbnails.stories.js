import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnails from "./Thumbnails";

storiesOf("Thumbnails", module)
    .add("BlockV", () => <Thumbnails label="BlockV" type="blockv" text="Apple Macbook Pro" 
        stars="3" image="laptop" salePrice="499" retailPrice="599" 
        cartImage="cartcircle1" heartImage="heartcircle1" backgroundFilled
    />)
    .add("BlockH", () => <Thumbnails label="BlockH" type="blockh" text="Apple Macbook Pro"
        stars="3" image="laptop" salePrice="499" retailPrice="599"
        cartImage="cartcircle1" heartImage="heartcircle1"
    />);