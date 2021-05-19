import { render } from '@testing-library/react';
import React from 'react';
import Navigation from './Navigation';

describe('Navigation', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Navigation {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Navigation')).toBeTruthy();
    });
});
