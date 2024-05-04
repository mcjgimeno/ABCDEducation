import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js'

/** get all questions */
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q) 
    } catch (error) {
        res.json({ error })
    }
}

export async function insertQuestions(req, res) {
    try {
      const questionsData = { questions: questions, answers };
      const result = await Questions.insertMany(questionsData);
      sendSuccessResponse(res, "Data Saved Successfully...");
    } catch (error) {
      console.error(error);
      sendErrorResponse(res, error);
    }
  }
  
  function sendSuccessResponse(res, message) {
    res.json({ msg: message });
  }
  
  function sendErrorResponse(res, error) {
    res.status(500).json({ error: error.message });
  }

export async function dropQuestions(req, res){
   try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.json({ error })
   }
}

export async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

export async function storeResult(req, res) {
    try {
      const { username, result, attempts, points, achived } = req.body;
      if (!username ||!result) {
        throw new Error('Data Not Provided...!');
      }
  
      const resultData = { username, result, attempts, points, achived };
      const createdResult = await Results.create(resultData);
      sendSuccessResponse(res, "Result Saved Successfully...");
    } catch (error) {
      console.error(error);
      sendErrorResponse(res, error);
    }
  }

export async function dropResult(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}