"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const PORT = process.env.PORT || 5000;
// Create a new express app instance
const app = express();
app.get("/", function (req, res) {
    let db = new sqlite3.Database("./db/db.db", (err) => {
        if (err) {
            res.send(err.message);
        }
    });
    db.serialize(() => {
        db.each(`select * from USER`, (err, row) => {
            if (err) {
                console.error(err.message);
            }
            res.send(row);
        });
    });
});
app.listen(PORT, function () {
    console.log("App is listening on port 5000!");
});
//# sourceMappingURL=server.js.map