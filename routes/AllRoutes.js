import express from "express";
import { DetectLanguageOfText, TranslatedText, getListOfSupportedLanguages } from "../controllers/GTranslateControllers.js";

var router = express.Router();

router.post('/DetectLanguageOfText',DetectLanguageOfText)
router.get('/getListOfSupportedLanguages',getListOfSupportedLanguages)
router.post('/TranslatedText',TranslatedText)




export default router;