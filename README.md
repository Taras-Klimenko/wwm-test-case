# How to Run This Project

This project relies on relative paths and is designed to be run in a local development environment using a tool that serves files as a local server. Opening the HTML files directly in the browser (using `file://` paths) may result in broken paths for assets such as images, styles, or scripts.

## Steps to Run the Project

1. **Clone or Download the Repository**

   - Clone this repository to your local machine using Git, or download it as a ZIP and extract it.

   ```bash
   git clone https://github.com/Taras-Klimenko/wwm-test-case.git
   ```

2. **Install a Live Server Tool**
   Use a development tool to serve the files via a local server. Below are some popular options:

   ### VS Code Live Server Extension

   - Install the **Live Server** extension in Visual Studio Code.
   - Open the project folder in VS Code.
   - Right-click on the `index.html` file and select **Open with Live Server**.

   ### Node.js HTTP Server

   - Install `http-server` globally via npm:
     ```bash
     npm install -g http-server
     ```
   - Navigate to the project directory and start the server:
     ```bash
     http-server
     ```
   - Open the provided local URL in your browser (e.g., `http://127.0.0.1:8080`).

   ### Python SimpleHTTPServer

   - Use Python to start a simple HTTP server:
     ```bash
     python -m http.server
     ```
   - Open the local URL in your browser (e.g., `http://127.0.0.1:8000`).

3. **View the Project**
   Once the local server is running, navigate to the local URL provided by the tool (e.g., `http://127.0.0.1:8080`) to view the project.

4. **Enjoy the Site**
   Test the functionality, explore the pages, and interact with the features.

---

### Notes

- If you encounter issues with asset loading, double-check the paths and ensure you are serving the project via a local server.
- If deploying to another hosting service, adjust paths in the project as needed.
