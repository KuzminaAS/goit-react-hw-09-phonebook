import { render } from '@testing-library/react';
import React from 'react';
import LoginView from './LoginView';

describe('LoginView', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<LoginView {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('LoginView')).toBeTruthy();
    });
});
