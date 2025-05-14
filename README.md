
# Payment Requests Table

A React implementation of a payment requests table with dynamic date visibility based on hover state and date changes.

## How to Run

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:8080`

## Technical Decisions

### Component Structure

- **PaymentRequests**: Main container component that manages the page layout and holds the mock data
- **PaymentRequestsTable**: Core table component that handles the date visibility logic
- **StatusBadge**: Reusable component for displaying payment status with appropriate styling
- **ContactAvatar**: Component for displaying contact initials in a circular avatar

### Date Visibility Logic

The table implements a specialized date visibility behavior:
- Dates are only shown when they change (first occurrence of a date)
- Dates are shown on hover for any row
- If the user hovers over a row, its date becomes visible regardless of previous date visibility rules

This is achieved through the `shouldShowDate` function which compares the current date with the previous date, combined with a React state hook that tracks which row is currently being hovered.

### Responsive Design

- The table is fully responsive using Tailwind CSS utilities
- For larger screens, the table expands to take advantage of additional space while maintaining readability
- On smaller screens, the table becomes horizontally scrollable to ensure all data remains accessible

### Styling

- Custom color palette for status badges that matches the design
- Clean, minimal design that focuses on readability
- Consistent spacing and typography

### State Management

For this simple implementation, component-level state using React hooks is sufficient:
- `useState` is used to track the currently hovered row
- No global state management is needed given the scope of the application

### Performance Considerations

- The date comparison logic is optimized to avoid unnecessary re-renders
- Empty divs are used to maintain consistent row heights when dates are hidden
