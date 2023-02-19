import express from "express";
import url from "url";
import path from "path";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

let app = express();
const PORT = 80;


app.use(express.static("./dist"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(PORT, () => {
    console.log(`Running at PORT: ${PORT}`);
});