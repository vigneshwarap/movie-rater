import User from '../models/userModel.js'

export const getAllUsers = async () => {
  try {
    return await User.find()
  } catch (err) {
    throw new Error(`Error while getting all users`)
  }
}

export const getUser = async (id) => {
  try {
    return await User.findById(id)
  } catch (err) {
    throw new Error(`Error while fetching user with id ${id}`)
  }
}

export const createUser = async (userData) => {
  try {
    return await User.create(userData)
  } catch (err) {
    throw new Error(`Error while creating user with id ${id}`)
  }
}

export const deleteUser = async (id) => {
  try {
    return await User.findByIdAndDelete(id)
  } catch (err) {
    throw new Error(`Error while deleting user with id ${id}`)
  }
}


export const updateUser = async (id, updateUserData) => {
  try {
    console.log(updateUserData)
    const updatedUser = await User.findByIdAndUpdate(id, {$set: updateUserData}, {new : true})
    console.log(updatedUser)
    return updatedUser
  } catch (err) {
    throw new Error(`Error while updating user with id ${id}`)
  }
}
