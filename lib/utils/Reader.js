const fs = require("fs")

class Reader {
    static readJsonFile(file) {
        const rawdata = fs.readFileSync(file)
        const explorers = JSON.parse(rawdata)
        return explorers
    }
}

module.exports = Reader