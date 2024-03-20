import { useState } from "react";
import Input from "../components/Input";
import Label from "../components/Label";

function NewProduct() {
  const [value, setValue] = useState("");
  return (
    <div>
      <Label></Label>
      <Input placeholder="Attila Feher" value={value} setValue={setValue} />
    </div>
  );
}

export default NewProduct;
