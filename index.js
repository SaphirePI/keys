const {
    app,
    BrowserWindow,
    screen
} = require("electron");
const path = require("path");
let mainWindow;

function createWindow() {
    let screenSize = screen.getPrimaryDisplay().size;
    mainWindow = new BrowserWindow({
        width: screenSize.width,
        height: screenSize.height,
        frame: true,
        title: 'keys',
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });
    mainWindow.loadFile("index.html");
    mainWindow.on("closed", function() {
        mainWindow = null;
    });
}

app.on("ready", () => {
    createWindow();
})

app.on("window-all-closed", function() {
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", function() {
    if (mainWindow === null) createWindow();
});
