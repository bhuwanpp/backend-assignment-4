import express from "express";
import {
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controller/user";
import { auth, authorize } from "../middleware/auth";
import { validateReqParams, validateReqQuery } from "../middleware/validator";
import { ROLE } from "../enums/role";
import { getUserQuerySchema } from "../schema/user";
import { paramSchema } from "../schema/todo";
const router = express();
router.get("/", validateReqQuery(getUserQuerySchema), auth, authorize(ROLE.ADMIN), getUsers);
router.get("/:id", auth, validateReqParams(paramSchema), getUserById);
router.put("/:id", auth, validateReqParams(paramSchema), validateReqQuery(getUserQuerySchema), authorize(ROLE.ADMIN), updateUser);
router.delete("/:id", auth, validateReqParams(paramSchema), authorize(ROLE.ADMIN), deleteUser);
export default router;
