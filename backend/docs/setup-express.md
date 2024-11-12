# SETUP EXPERESS

```bash
npm i express cors dotenv && npm i -D nodemon
```

```env
# APP CONFIG
# =================================================
APP_NAME="SYSTEM"
APP_HOST="localhost"
APP_PORT=xxxxx
```

```json
{
    .....
    "main": "index.js",
    "type": "module",
    "scripts": {
        "dev": "nodemon index.js",
        "start": "node index.js"
    },
    .....
}
```

```js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("*", (req, res) => {
    res.status(404).send("Not Found");
})

const NAME = process.env.APP_NAME || "Backend";
const PORT = process.env.APP_PORT || 5000;
const HOST = process.env.APP_HOST || "localhost";

app.listen(PORT, () => {
    console.log(`${NAME} running on http://${HOST}:${PORT}`);
});
```