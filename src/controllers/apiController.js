import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "data.json");

const facts = JSON.parse(fs.readFileSync(filePath, "utf-8"));

// --------------------

export const getFacts = (req, res) => {
    return res.json(facts);
}

export const createFacts = (req, res) => {
    const newId = facts[facts.length - 1].id + 1;
    const newFact = Object.assign({ productId: newId }, req.body);
    facts.push(newFact);

    fs.writeFile(filePath, JSON.stringify(facts), (err) => {
        if (err) return res.json(err);
        return res.json({ Message: "Successfully created fact!" });
    });

}

export const deleteFacts = (req, res) => {
    const id = Number(req.params.id);
    const index = facts.findIndex(f => f.id === id);

    facts.splice(index, 1);

    fs.writeFile(filePath, JSON.stringify(facts), (err) => {
        if (err) return res.json(err);
        return res.json({ Message: "Successfully deleted fact!" });
    });
};