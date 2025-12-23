# Calculator
A working Calculator
# Elegant Calculator Web App

## Overview
The **Elegant Calculator** is a visually appealing, interactive calculator web application. It features an animated background with floating numbers and operators, a responsive calculator layout, and basic arithmetic functionality. The app allows users to perform calculations with ease while enjoying an elegant, modern interface.

---

## Features & Output

1. **Arithmetic Operations**
   - Users can perform:
     - Addition (`+`)
     - Subtraction (`−`)
     - Multiplication (`×`)
     - Division (`÷`)
     - Parentheses for grouping (`()`).
   - Decimal numbers are supported.

2. **Interactive Buttons**
   - Digit buttons (`0-9`) and operator buttons respond visually to hover.
   - **Equals (`=`)** calculates the result.
   - **Clear (`C`)** clears the display.
   - Buttons have distinct colors for operators, equals, and clear for better UX.

3. **Animated Background**
   - Floating numbers and operators move upward with a subtle rotation and fade effect.
   - The background is layered behind the calculator to enhance the modern aesthetic.

4. **Responsive Design**
   - The calculator container is centered and maintains its layout on different screen sizes.
   - Buttons adjust size and spacing within the grid.

---

## How the Output Works

1. **Display**
   - The main input field (`#display`) shows the current input or result.
   - Disabled input ensures users cannot type directly, keeping interaction through buttons.

2. **Button Interaction**
   - Clicking a number or operator appends it to the display.
   - The decimal point (`.`) is restricted to prevent multiple consecutive dots.
   - Clicking **C** clears the display.
   - Clicking **=** evaluates the expression using JavaScript's `eval()` function.
   - If the expression is invalid, an **Error** message appears briefly.

3. **Background Animation**
   - Each floating number or operator moves from bottom to top.
   - Animations vary in duration and position for a dynamic effect.
   - Background remains behind the calculator without interfering with interaction.

---

## Technologies Used
- **HTML5 & CSS3** – Structure, layout, styling, and animated background.
- **JavaScript** – Button interaction and arithmetic calculations.
- **CSS Animations** – Floating numbers and operators.

---

## Usage
1. Open `index.html` in a modern web browser.
2. Click buttons to input numbers and operators.
3. Press **=** to calculate the result.
4. Press **C** to clear the display.
5. Enjoy the animated background while performing calculations.

---

## Screenshots
- **Calculator UI** – Shows the display and button grid.
- **Animated Background** – Floating numbers and operators in motion behind the calculator.

---

## Notes
- Ensure JavaScript is enabled in the browser.
- For complex expressions, standard operator precedence is observed.
- Modern browsers like Chrome, Firefox, or Edge are recommended for optimal display.
