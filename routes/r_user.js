import express from "express";
import {
 getUser,
 getUserFriends,
 addRemoveFriend,
} from "../controllers/c_users.js";
import { verifyToken } from "../middleware/m_auth.js";

const router = express.Router();

// read

 router.get("/:id", verifyToken, getUser);
 router.get("/:id/friends", verifyToken, getUserFriends);


 // update
  router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;