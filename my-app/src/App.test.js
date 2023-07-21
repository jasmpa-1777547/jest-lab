import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// Example done in class
describe('The App', () => {
  test('renders correctly', () => {
    render(<App />) // Render into testing DOM

    screen.debug(); // Use for Debugging: Render DOM/HTML into console
    
    // Look into the DOM and expects to see the text "Hello World"
    // in the DOM. If it finds it, it passes.
    expect(screen.getByText("Hello World")).toBeInTheDocument();

    // Assign a feature to the value 'button' and then to be
    // called to click on it.
    const button = screen.getByRole('button'); // query (access) DOM
    userEvent.click(button); // send user events
  })
})

// Individual example
describe('The App', () => {
  test('renders correctly', () => {
    render(<App />) // Render into testing DOM

    screen.debug(); // Use for Debugging: Render DOM/HTML into console

    expect(screen.getAllByRole('checkbox').toBeChecked())

    const checkbox = screen.getAllByRole('checkbox');
    userEvent.click(checkbox);
  })
})