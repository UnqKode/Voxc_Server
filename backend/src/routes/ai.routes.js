import express, { response } from "express"
import askGemini from "../google/google.js";


const router = express.Router()

router.post("/aiTalk", async (req, res) => {
    try {
        console.log("🧠 AI talks here:", req.body.message); 
        let response;
        if(req.body.message){
            response = await askGemini(req.body.message);
        }
        console.log("hi:", response);
        
        if (response === undefined) {
            res.status(200).json({ message: "" });
        } else {
            res.status(200).json({ message: response });
        }
    } catch (error) {
        console.error("Error in AI talk:", error);
        res.status(500).json({ error: "Something went wrong!" });
    }
});




export default router;