const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

function isPalindrome(num) {
    const str = num.toString();
    return str === str.split("").reverse().join("");
}

app.post("/check", (req, res) => {
    const { number } = req.body;

    if (isNaN(number)) {
        return res.json({ error: "Please enter a valid number." });
    }

    const result = isPalindrome(number);
    res.json({ number, isPalindrome: result });
});

app.listen(3000, () => console.log("Backend running on port 3000"));
