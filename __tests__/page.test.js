import { render, screen } from '@testing-library/react';
import Home from './app/page'; // Corrected path, assuming __tests__ is in root

describe('Home Page', () => {
  it('renders a Login button', () => {
    render(<Home />);
    const loginButton = screen.getByRole('button', { name: /Login/i });
    expect(loginButton).toBeInTheDocument();
  });
});