import express from "express";
import { updateLesson, getLesson, filterLesson, applyFilers } from "../controllers/lesson.js";

const router = express.Router();


router.post('/getLesson', getLesson)
router.put('/updateLesson', updateLesson)
router.post('/searchLesson', filterLesson)
router.get('/applyFilers', applyFilers)


export default router   