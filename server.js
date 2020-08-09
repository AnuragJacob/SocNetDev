const express = require("express")

const app = express()

app.get("/", (req, res) => res.send("API running"))

const PORT = process.env.PORT || 5000 /*Heroku looks for this PORT variable within the environment. If it
                                        does not find instanceof, it goes to default port 5000 */

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
