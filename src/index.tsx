import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App/App';


// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.querySelector('#app')!);

root.render(
	<React.StrictMode>
			<App />
	</React.StrictMode>,
);
