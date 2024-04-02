import { useState } from 'react';
import Input from '../components/Input';
import Main from '../components/Main';

function NewProduct() {
  const [value, setValue] = useState('');

  return (
    <Main>
      <Input placeholder="Attila Feher" value={value} setValue={setValue} />
    </Main>
  );
}

export default NewProduct;
