import { render, screen } from '@testing-library/react';
import AddPropBet from '@/pages/admin/addPropBet';
import userEvent from '@testing-library/user-event';

describe('/admin/addPropBet', () => {
	it('should present a form for adding a new prop bet into the system', () => {
		render(<AddPropBet />);

		const formFields = {
			description: screen.getByRole('textbox', { name: /^Description$/i }),
			shortDescription: screen.getByRole('textbox', { name: /Short Description/i }),
			sides: screen.getAllByRole('textbox', { name: /Side/i }),
			notes: screen.getByRole('textbox', { name: /Notes/i }),
		};

		const submitButton = screen.getByRole('button', { name: /Add Prop Bet/i });
	});

	it('should not allow the submit button to be clicked until the necessary fields have been provided', async () => {
		const user = userEvent.setup();

		render(<AddPropBet />);

		const formFields = {
			description: screen.getByRole('textbox', { name: /^Description$/i }),
			shortDescription: screen.getByRole('textbox', { name: /Short Description/i }),
			sides: screen.getAllByRole('textbox', { name: /Side/i }),
			notes: screen.getByRole('textbox', { name: /Notes/i }),
		};

		const submitButton = screen.getByRole('button', { name: /Add Prop Bet/i });

		expect(submitButton).toBeDisabled();

		await user.type(formFields.notes, 'Whatever the box score says at 9am PT on Monday, February 13 is what we\'ll go with.');
		expect(submitButton).toBeDisabled();

		await user.type(formFields.description, 'How many total points will be scored?');
		expect(submitButton).toBeDisabled();

		await user.type(formFields.shortDescription, 'Total points');
		expect(submitButton).toBeDisabled();

		await user.type(formFields.sides[0], '49 or more');
		expect(submitButton).toBeDisabled();

		await user.type(formFields.sides[1], '48 or fewer');
		expect(submitButton).toBeEnabled();

		await user.clear(formFields.notes);
		expect(submitButton).toBeEnabled();
	});
});
