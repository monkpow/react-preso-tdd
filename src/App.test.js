import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders "Welcome React Chicago" as headline', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome React Chicago/i);
  expect(linkElement).toBeInTheDocument();
});
