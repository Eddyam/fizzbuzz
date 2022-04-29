const Reader = require("../utils/Reader")
const explorers = Reader.readJsonFile("explorers.json")

class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode;
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInNode = this.filterByMission(explorers, mission)
        return explorersInNode.length;
    }
}

module.exports = ExplorerService