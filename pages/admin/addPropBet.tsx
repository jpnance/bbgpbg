import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';

const AddPropBet = () => {
	const [propBetFields, setPropBetFields] = useState({
		description: '',
		shortDescription: '',
		sideOne: '',
		sideTwo: '',
		notes: ''
	});

	const [isValid, setIsValid] = useState(false);

	const handleFieldChange = (fieldName: 'description' | 'shortDescription' | 'sideOne' | 'sideTwo' | 'notes', newValue: string) => {
		let newPropBetFields = { ...propBetFields };
		newPropBetFields[fieldName] = newValue;

		setPropBetFields(newPropBetFields);

		if (newPropBetFields.description !== '' && newPropBetFields.shortDescription !== '' && newPropBetFields.sideOne !== '' && newPropBetFields.sideTwo !== '') {
			setIsValid(true);
		}
		else {
			setIsValid(false);
		}
	};

	return (
		<Form>
			<Form.Label htmlFor="description">Description</Form.Label>
			<Form.Control
				type="text"
				id="description"
				value={propBetFields.description}
				onChange={(event) => handleFieldChange.call(null, 'description', event.target.value)}
			/>

			<Form.Label htmlFor="shortDescription">Short Description</Form.Label>
			<Form.Control
				type="text"
				id="shortDescription"
				value={propBetFields.shortDescription}
				onChange={(event) => handleFieldChange.call(null, 'shortDescription', event.target.value)}
			/>

			<Form.Label htmlFor="sideOne">Side One</Form.Label>
			<Form.Control
				type="text"
				id="sideOne"
				value={propBetFields.sideOne}
				onChange={(event) => handleFieldChange.call(null, 'sideOne', event.target.value)}
			/>

			<Form.Label htmlFor="sideTwo">Side Two</Form.Label>
			<Form.Control
				type="text"
				id="sideTwo"
				value={propBetFields.sideTwo}
				onChange={(event) => handleFieldChange.call(null, 'sideTwo', event.target.value)}
			/>

			<Form.Label htmlFor="notes">Notes</Form.Label>
			<Form.Control
				as="textarea"
				id="notes"
				value={propBetFields.notes}
				onChange={(event) => handleFieldChange.call(null, 'notes', event.target.value)}
			/>

			<Button
				variant="primary"
				type="submit"
				disabled={!isValid}
			>Add Prop Bet</Button>
		</Form>
	);
};

export default AddPropBet;
