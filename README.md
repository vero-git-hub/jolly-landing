# Jolly Landing

Jolly Landing is a landing page with interactive elements and animations. The site is adapted for mobile devices and supports smooth transitions between sections. The main sections include: home page, products and contacts. There is animation and pop-up elements.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Responsiveness](#responsiveness)
- [Contributing](#contributing)

## Features
- **Interactive Elements:** Smooth transitions between sections using the Swiper library, as well as customizable animations.
- **Responsive Design:** Supports mobile devices with content adaptation.
- **Easy Customization:** Easily modify the page content through the `content.json` file.

## Technologies
The project utilizes the following technologies:
- **HTML5:** The latest standard for HTML, used for structuring the content of the web pages.
- **CSS3:** For styling the website, including the use of Flexbox and animations.
- **JavaScript (ES6+):** For adding interactivity and managing dynamic content.
- **Swiper.js:** A popular library for creating sliders, used here for smooth vertical transitions.
- **Google Fonts:** For using custom fonts like 'Risque' and 'Roboto'.
- **JSON:** For handling content data, allowing easy customization of text and images.

## Requirements
To run the project, you need the following components:
- Any modern web browser (like Google Chrome)
- Internet connection for loading dependencies (e.g., Swiper)
- Local server for testing (optional)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/vero-git-hub/jolly-landing
    ```

2. Navigate to the project directory:

    ```bash
    cd jolly-landing
    ```

3. Open the `index.html` file in your web browser.

## Usage

- Navigation through the page is done via the menu at the top of the page or using the burger menu, which expands to half the screen.
- When hovering over the menu items, you will see a crossfade effect.
- The image at the bottom left is half visible and slowly rotates.
- There is a glowing popup message in the middle of the screen that appears after a delay.
- The main background features an animation of falling and twinkling objects.
- The transition between sections is done screen by screen.
- In the "Products" section, you can switch between different products by clicking on the circles with images.
- In the "Contacts" section, visitors can fill out the form by entering their information.

## Project Structure

- `index.html` - The main HTML file containing the site's structure.
- `css/` - Folder containing the style files.
- `js/` - Folder containing JavaScript files.
    - `app.js` - The main script responsible for interactivity.
    - `effects.js` - Script for animations and visual effects.
    - `select.js` - Script for the custom select in the form.
    - `contacts.js` - Script for handling the contacts form.
- `img/` - Folder containing images used on the site.
- `content.json` - File containing content to replace text on the site.

## Responsiveness

The project is adapted for display on mobile devices. Key adaptation points:

- Font sizes and elements are reduced.
- Elements are arranged in a column for better display.
- Content blocks (e.g., images and text) are rearranged to improve the user experience on smaller screens.

## Contributing

If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch with your change: `git checkout -b feature/YourFeature`.
3. Commit your change: `git commit -m 'Add YourFeature'`.
4. Push your branch to the repository: `git push origin feature/YourFeature`.
5. Create a Pull Request.
