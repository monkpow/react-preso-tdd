import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('Renders "Welcome React Chicago" as headline', () => {
  render(<App />);
  const welcomeStatement = screen.getByText(/Welcome React Chicago/i);
  expect(welcomeStatement).toBeInTheDocument();
});

test("Application renders in dark-mode by default", () => {
  render(<App />);
  const element = screen.getByTestId('main-body-styles');
  expect(element).toHaveClass('dark-mode');
});

test("Application allows user to toggle dark-mode", () => {
  render(<App />)
  const element = screen.getByTestId('main-body-styles');
  expect(element).toHaveClass('dark-mode');
  fireEvent.click(screen.getByText('Dark Mode'))
  expect(element).not.toHaveClass('dark-mode');
  fireEvent.click(screen.getByText('Dark Mode'))
  expect(element).toHaveClass('dark-mode');
});


test("Application shows thoughtful logo", () => {
  render(<App />)
  const element = screen.getByTestId('application-logo');
  expect(element.src).toMatch(/thoughtful/);
})
