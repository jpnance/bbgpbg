import { render, screen } from '@testing-library/react';
import AddPropBet from '@/pages/admin/addPropBet';

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
});
