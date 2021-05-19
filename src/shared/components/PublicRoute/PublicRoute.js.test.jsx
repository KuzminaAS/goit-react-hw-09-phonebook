import { render } from '@testing-library/react';
import React from 'react';
import PublicRoute from './PublicRoute';

describe('PublicRoute', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<PublicRoute {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('PublicRoute')).toBeTruthy();
    });
});
