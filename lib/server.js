const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (request, response) => {
    response.json({message: "Fizzbuzz API welcome!"});
});

app.listen(port, () => {
    console.log(`Fizzbuzz API in localhost: ${port}`);
});

app.get('/v1/explorers/:mission', (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorerByMission(mission);
    response.json(explorersInMission);
});

app.get('/v1/explorers/amount/:mission', (request, response) => {
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmountByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersAmountInMission});
});

app.get('/v1/explorers/usernames/:mission', (request, response) => {
    const mission = request.params.mission;
    const explorersUsernamesByMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: request.params.mission, explorers: explorersUsernamesByMission});
});

app.get('/v1/fizzbuzz/:score', (request, response) => {
    const score = request.params.score;
    response.json({score:request.params.score, trick: ExplorerController.getValidationInNumber(score)})
}); 