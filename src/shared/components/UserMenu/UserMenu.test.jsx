import { render } from '@testing-library/react';
import React from 'react';
import UserMenu from './UserMenu';

describe('UserMenu', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<UserMenu {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('UserMenu')).toBeTruthy();
    });
});
