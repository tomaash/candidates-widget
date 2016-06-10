import React from 'react';
import {observer} from 'mobx-react';
import Button from 'react-bootstrap/lib/Button';
import autobind from 'autobind-decorator';

@observer
class Root extends React.Component {

	@autobind
	clickHandler(e) {
		this.props.fooStore.updateCnt();
	}
	render() {
		const {fooStore} = this.props;
		return <div>
			<h1>This is foo Root!</h1>
			<h2>{fooStore.bar}</h2>
			<h2>{fooStore.cnt}</h2>
			<Button bsStyle="danger" onClick={this.clickHandler}>Danger</Button>
		</div>
	}
}

export default Root