import { render } from '@testing-library/react';
import React from 'react';
import HomeView from './HomeView';

describe('HomeView', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<HomeView {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('HomeView')).toBeTruthy();
    });
});
