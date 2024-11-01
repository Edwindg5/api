"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const UserService_1 = require("../../negocio/services/UserService");
const UserRepository_1 = require("../../persistencia/repositorios/UserRepository");
const userRepository = new UserRepository_1.UserRepository();
const userService = new UserService_1.UserService(userRepository);
const userController = new usersController_1.UserController(userService);
exports.userRoutes = (0, express_1.Router)();
exports.userRoutes.post('/register', userController.createUser.bind(userController));