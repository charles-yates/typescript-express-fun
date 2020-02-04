import { Server } from "http";
import app from "./app";
import { init } from "./db";

/**
 * Start Express server.
 */
const server: Server = app.listen(app.get("port"), async () => {
    // initialize the sqlite db
    try {
        await init(true);
    } catch (error) {
        console.log(error.message, error);
        process.exit(1);
    }

    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;