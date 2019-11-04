import React from "react";
import { storiesOf } from "@storybook/react";
import Thumbnails from "./Thumbnails";

storiesOf("Thumbnails", module)
    .add("Block Vertical", () => <Thumbnails label="BlockV" type="blockv" text="Apple Macbook Pro" 
        stars="3" image="laptop" salePrice="499" retailPrice="599" 
        cartImage="cartcircle1" heartImage="heartcircle1" 
    />)
    .add("Block Vertical Filled", () => <Thumbnails label="BlockV" type="blockv" text="Apple Macbook Pro"
        stars="3" image="laptop" salePrice="499" retailPrice="599"
        cartImage="cartcircle2" heartImage="heartcircle2" backgroundFilled
    />)
    .add("Block Horizontal", () => <Thumbnails label="BlockH" type="blockh" text="Apple Macbook Pro"
        stars="3" image="laptop" salePrice="499" retailPrice="599"
    />)
    .add("Black Small", () => <Thumbnails label="blockSmall" type="blockSmall" text="Beats Solo 2 On Ear Headphones - Black"
        stars="3" image="headphones" salePrice="499" retailPrice="599"
    />)
    .add("Inline", () => <Thumbnails label="Inline" type="inline" text="Beats Solo 2 On Ear Headphones - Black"
        stars="3" image="laptop" salePrice="499" retailPrice="599" hot
    />);