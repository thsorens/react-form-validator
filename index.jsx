import Provider from './provider';
import context from './context';
import useRegister from './use-register';

import ButtonGroup1 from './components/button-group';
import Select1 from './components/select';
import TextArea1 from './components/text-area';
import TextInput1 from './components/text-input';
import Submit1 from './components/submit';

export const Form = Provider;
export const validationContext = context;
export const useRegisterComponent = useRegister;
export const ButtonGroup = ButtonGroup1;
export const Select = Select1;
export const TextArea = TextArea1;
export const TextInput = TextInput1;
export const Submit = Submit1;