import { render } from '@testing-library/react';
import React from 'react';
import AuthNav from './AuthNav';

describe('AuthNav', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<AuthNav {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('AuthNav')).toBeTruthy();
    });
});
