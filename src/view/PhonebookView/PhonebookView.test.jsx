import { render } from '@testing-library/react';
import React from 'react';
import PhonebookView from './PhonebookView';

describe('PhonebookView', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<PhonebookView {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('PhonebookView')).toBeTruthy();
    });
});
