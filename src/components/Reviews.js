import Toast from 'react-bootstrap/Toast';

export const BuyerReview = () => {
	return (
		<>
		  {[
			'Primary',
			'Secondary',
			'Success',
			'Danger',
			'Warning',
			'Info',
			'Light',
			'Dark',
		  ].map((variant, idx) => (
			<Toast
			  className="d-inline-block m-1"
			  bg={variant.toLowerCase()}
			  key={idx}
			>
			  <Toast.Header>
				<img
				  src="holder.js/20x20?text=%20"
				  className="rounded me-2"
				  alt=""
				/>
				<strong className="me-auto">Asfand Ali</strong>
				<small>20 mins ago</small>
			  </Toast.Header>
			  <Toast.Body className={variant === 'Dark' && 'text-white'}>
				Best developer ever with best services.
			  </Toast.Body>
			</Toast>
		  ))}
		</>
	  );
}
export const SellerReview = () => {
	return (
		<>
		  {[
			'Primary',
			'Secondary',
			'Success',
			'Danger',
			'Warning',
			'Info',
			'Light',
			'Dark',
		  ].map((variant, idx) => (
			<Toast
			  className="d-inline-block m-1"
			  bg={variant.toLowerCase()}
			  key={idx}
			>
			  <Toast.Header>
				<img
				  src="holder.js/20x20?text=%20"
				  className="rounded me-2"
				  alt=""
				/>
				<strong className="me-auto">Asfand Ali</strong>
				<small>20 mins ago</small>
			  </Toast.Header>
			  <Toast.Body className={variant === 'Dark' && 'text-white'}>
				Best developer ever with best services.
			  </Toast.Body>
			</Toast>
		  ))}
		</>
	  );
}