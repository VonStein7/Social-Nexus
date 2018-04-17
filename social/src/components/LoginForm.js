import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export class LoginForm extends React.Component {
		state = {
			data: {},
			loading: false,
			errors: {}
		};

	render() {
		return (
			<Form>
				<Button primary>Login</Button>
			</Form>
		);
	}
}
