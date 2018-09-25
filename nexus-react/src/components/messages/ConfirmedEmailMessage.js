import React from 'react';
import { Message } from 'semantic-ui-react';

const ConfirmEmailMessage = () => (
	<span>
		<Message info>
			<Message.Header>Please, verify your email.</Message.Header>
		</Message>
	</span>	
);

export default ConfirmEmailMessage;