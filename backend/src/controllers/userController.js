import * as userService from "../services/userService.js";

export const getAllUsers = async (req, res, next) => {
  try {
    console.log("Reached get all users")
    const users = await userService.getAllUsers()
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
}


export const getUser = async (req, res, next) => {
  try {
    const user = await userService.getUser(req.params.id)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}


export const createUser = async (req, res, next) => {
  try {
    const createdUser = await userService.createUser(req.body)
    res.status(200).json(createdUser)
  } catch (err) {
    next(err)
  }
}

export const UpdateUser = async (req, res, next) => {
  try {
    console.log("put called")
    const user  = await userService.getUser(req.params.id)
    if (!user) {
      throw new Error(`User with id : ${req.params.id} doesn't exist`)
    }
    console.log("body {}", req.body)
    const updatedUser = await userService.updateUser(req.params.id, req.body)
    res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    const user  = await userService.getUser(req.params.id)
    if (!user) {
      throw new Error(`User with id : ${req.params.id} doesn't exist`)
    }
    await userService.deleteUser(req.params.id)
    res.status(200).send()
  } catch (err) {
    next(err)
  }
}