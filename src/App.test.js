import React from 'react';
import { render, wait, waitFor } from '@testing-library/react';
import App from './App';
import { fetchShow as mockFetchShow} from './api/fetchShow';

import { episodeList } from './components/Episodes.test';


test("Render app", () => {
    render(<App />);
});