import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders "Welcome React Chicago" as headline', () => {
  render(<App />);
  const welcomeStatement = screen.getByText(/Welcome React Chicago/i);
  expect(welcomeStatement).toBeInTheDocument();
});
