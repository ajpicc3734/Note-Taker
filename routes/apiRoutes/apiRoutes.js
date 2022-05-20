const router = require("express").Router();
//const app = express();
const { savedNotes } = require("../../db/db.json");

router.get("'/notes'", (req, res) => {
  var notes = savedNotes;
  res.json(notes);
});

module.exports = router;
