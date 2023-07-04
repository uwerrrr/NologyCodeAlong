import Form from '../../../../components/Form/Form';
import { Input } from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';

const ContactForm = () => {
  const onSubmit = (val) => console.log(val);
  return (
    <Form onSubmit={onSubmit}>
      <Input type='text' name='username' hasLabel />
      <Input type='email' name='email' hasLabel />
      <Input type='password' name='password' placeholder='enter password' />
      <Button>Submit</Button>
    </Form>
  );
};

export default ContactForm;
