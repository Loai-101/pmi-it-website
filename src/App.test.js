import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PMI IT navbar brand', async () => {
  render(<App />);
  const brandElement = await screen.findByText(/Digital Transformation Partner/i);
  expect(brandElement).toBeInTheDocument();
});
