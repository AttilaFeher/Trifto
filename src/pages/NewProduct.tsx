import { useState } from 'react';
import Input from '../components/Input';

function NewProduct() {
  const [value, setValue] = useState('');
  return (
    <div>
      <Input placeholder="Attila Feher" value={value} setValue={setValue} />
    </div>
  );
}

export default NewProduct;
