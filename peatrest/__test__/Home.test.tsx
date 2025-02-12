import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

it('All components should be rendered', () => {
    render(<Home />);

    const myElem = screen.getByRole('heading', { level: 1 });
    expect(myElem).toBeInTheDocument();
});