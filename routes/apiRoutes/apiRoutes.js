const router = require("express").Router();
const fs = require("fs");
const savedNotes = require("../../db/db.json");
const path = require("path");
const { ok } = require("assert");

function createNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync("db/db.json", JSON.stringify(notesArray, null, 2));
  return note;
}

router.get("/notes", (req, res) => {
  var notes = savedNotes;
  try {
    fs.readFile("db/db.json", (err, notes) => {
      if (err) {
        throw err;
      }
      res.json(JSON.parse(notes));
    });
  } catch (error) {
    res.json(error);
  }
});
//API Routes

router.post("/notes", (req, res) => {
  try {
    fs.readFile("db/db.json", (err, notes) => {
      if (err) {
        throw err;
      }
      var savedNotes = JSON.parse(notes);
      req.body.id = savedNotes.length.toString();
      const note = createNote(req.body, savedNotes);
      res.json({ msg: "ok" });
    });
  } catch (error) {
    res.json(error);
  }
});

//router.put("", (req, res) => {});

router.delete("/notes/:id", (req, res) => {
  fs.readFile("db/db.json", (err, notes) => {
    if (err) {
      throw err;
    }
    var savedNotes = JSON.parse(notes);
    console.log(req.params.id);
    var updatedNotes = savedNotes.filter((note) => note.id !== req.params.id);
    console.log(updatedNotes);
    fs.writeFileSync("db/db.json", JSON.stringify(updatedNotes, null, 2));

    res.json({ ok: true });
  });

  //res.json({ ok: true });
  //res.redirect("/api/notes");
});

module.exports = router;
