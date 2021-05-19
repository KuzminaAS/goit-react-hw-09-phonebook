import { render } from '@testing-library/react';
import React from 'react';
import RegisterView from './RegisterView';

describe('RegisterView', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<RegisterView {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('RegisterView')).toBeTruthy();
    });
});
