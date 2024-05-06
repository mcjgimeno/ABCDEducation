import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/userSchema.js"

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

  export async function deleteQuestion(req, res) {
    try {
      const questionId = req.params.id;
      const filter = {}; // Define your filter, maybe you want to use a specific filter based on your requirements
      const update = {
        $pull: {
          questions: { id: questionId }
        }
      };
  
      // No need for arrayFilters in this case as you are not using any positional operators
      const options = {};
  
      const result = await Questions.updateOne(filter, update, options);
  
      if (result.modifiedCount === 0) {
        return res.status(404).json({ error: "Question not found" });
      }
  
      res.json({ msg: "Question deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" }); // Complete the response in case of an error
    }
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

export async function registerUser(req, res) {
  try {
    const { username, password } = req.body;

    if (!username ||!password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(`Error registering user: ${error.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


export async function loginUser(req, res) {
  try {
    const { username, password } = req.body;

    if (!username ||!password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const isValidPassword = await bcrypt.compare(password,user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(`Error logging in user: ${error.message}`);
    console.error(error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}