import express from 'express'
import userController from "../controllers/user-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";
import {body} from "express-validator";

const router= express.Router();

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 6, max: 16}),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)

export default router