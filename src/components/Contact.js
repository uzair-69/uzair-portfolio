import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Contacts() {
  return (
    <>
      <FloatingLabel controlId="floatingInput" className="mb-3">
      <Form.Label className="emailLabel">Email address</Form.Label>
      <br />
  <Form.Control type="email" placeholder="name@example.com" />
  
</FloatingLabel>
<FloatingLabel controlId="floatingPassword">
    
  <Form.Label className="passwordLabel">Password</Form.Label>
  <br />
  <Form.Control type="password" placeholder="Password" />
</FloatingLabel>

    </>
  );
}

export default Contacts;