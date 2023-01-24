import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddPropBet = () => {
	return (
		<Form>
			<Form.Label htmlFor="description">Description</Form.Label>
			<Form.Control
				type="text"
				id="description"
			/>

			<Form.Label htmlFor="shortDescription">Short Description</Form.Label>
			<Form.Control
				type="text"
				id="shortDescription"
			/>

			<Form.Label htmlFor="sideOne">Side One</Form.Label>
			<Form.Control
				type="text"
				id="sideOne"
			/>

			<Form.Label htmlFor="sideTwo">Side Two</Form.Label>
			<Form.Control
				type="text"
				id="sideTwo"
			/>

			<Form.Label htmlFor="notes">Notes</Form.Label>
			<Form.Control
				as="textarea"
				id="notes"
			/>

			<Button
				variant="primary"
				type="submit"
			>Add Prop Bet</Button>
		</Form>
	);
};

export default AddPropBet;
