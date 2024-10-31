# Guide on how to add your own stories!

## Overview

This is a poetic web project dedicated to expressing love, life, and the beauty of everyday moments. It's an ode to a special person and the unique connection shared between two souls.

**Project path on the internet:** https://onlyforherforever.github.io

**Description:** A website where users can share their feelings, thoughts, and stories in a beautifully designed space.

## Features

*   **Story Sharing:** Allows users to share their stories in various formats (feelings, thoughts, crushes, etc.).
*   **Aesthetic Design:** Features a dark, elegant design with subtle animations and interactive elements.
*   **Responsive Layout:** Adapts seamlessly to different screen sizes for optimal viewing on any device.
*   **Easy Navigation:** Provides a clear and intuitive navigation menu.
*   **Social Sharing:** Enables users to easily share their favorite stories with others.

## How to Use This Project

This website is designed to be a collaborative space for sharing stories and feelings. Here's how you can contribute your own story:

1.  **Go to the GitHub repository:** Visit the project's GitHub repository at [https://github.com/onlyforherforever/onlyforherforever](https://github.com/onlyforherforever/onlyforherforever).

2.  **Fork the repository:** Click the "Fork" button in the top right corner to create your own copy of the repository.

3.  **Edit the HTML file:** In your forked repository, navigate to the `index.html` file and locate the `posts` array within the `<script>` tag.

4.  **Add your story:** Add your story to the **top** of the `posts` array using the following format:

    ```javascript
    {
      avatar: "YOUR_AVATAR_URL",
      username: "YOUR_USERNAME",
      date: "DATE_OF_STORY",
      storyType: "STORY_TYPE",
      headline: "YOUR_HEADLINE",
      story: "YOUR_STORY_CONTENT"
    }, 
    ```

    *   Replace the placeholders with your actual information.
    *   Make sure to add your story object as a **new entry at the beginning of the array**, not at the end. This will ensure your story appears at the top of the page.

5.  **Commit your changes:** Save the changes you made to the `index.html` file and commit them to your forked repository.

6.  **Create a pull request:** Go back to the original GitHub repository and click the "New pull request" button. Select your forked repository and branch, and submit your pull request.

7.  **Review and merge:** The maintainers of the project will review your pull request and merge it into the main website if everything is in order.

**Example**

```javascript
{
  avatar: "[https://via.placeholder.com/48](https://via.placeholder.com/48)",
  username: "@yourusername",
  date: "Nov 1, 2024",
  storyType: "Thought",
  headline: "My amazing thought",
  story: "This is the content of my story. It's a beautiful thought I want to share with the world."
},
// ... other stories ...
```
## Technical Details

*   **Built with:** HTML, CSS, JavaScript
*   **Font:** OnePlus Sans
*   **Icons:** Font Awesome

## Contributing

We welcome contributions from the community! If you'd like to help improve this project, you can:

*   **Share your stories:**  Contribute your own feelings, thoughts, and experiences to the website.
*   **Report bugs:** If you encounter any issues, please report them on the GitHub repository.
*   **Suggest improvements:** Feel free to suggest new features or design enhancements.
*   **Become a maintainer:**  Help maintain and grow the project by becoming a maintainer.

## License

This project is licensed under the [MIT] License - see the [[license.txt](https://github.com/onlyforherforever/onlyforherforever.github.io/blob/main/license.txt)] file for details.