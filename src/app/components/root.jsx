import React from 'react';
import {observer} from 'mobx-react';

@observer
class Root extends React.Component {

	render() {
		return <div>
			<h1>This is foo Root!</h1>
		</div>
	}
}

export default Root