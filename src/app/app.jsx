import React from 'react';
import ReactDOM from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import Main from './components/main';
import Root from './components/root';

import {FooStore} from './stores/foo-store';

// import {ContactStore} from './stores/contact-store';
// import {TagStore} from './stores/tag-store';

// import {useStrict} from 'mobx';

// useStrict(true);

//Needed for onTouchTap
// injectTapEventPlugin();

// const tagStore = new TagStore();
// const contactStore = new ContactStore(tagStore);

const fooStore = new FooStore();

ReactDOM.render(
	<Root
		fooStore = {fooStore}
	/>,
	document.getElementById('app')
);
