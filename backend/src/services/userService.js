import user from '../models/userModel.js'

export const getAllUsers = async () => {
  try {
    return await user.find()
  } catch (err) {
    throw new Error(`Error while getting all users`)
  }
}

export const getUser = async (id) => {
  try {
    return await user.findById(id)
  } catch (err) {
    throw new Error(`Error while fetching user with id ${id}`)
  }
}

export const createUser = async (userData) => {
  try {
    return await user.create(userData)
  } catch (err) {
    throw new Error(`Error while creating user with id ${id}`)
  }
}

export const deleteUser = async (id) => {
  try {
    return await user.findByIdAndDelete(id)
  } catch (err) {
    throw new Error(`Error while deleting user with id ${id}`)
  }
}


export const updateUser = async (id, updateUserData) => {
  try {
    console.log(updateUserData)
    const updatedUser = await user.findByIdAndUpdate(id, {$set: updateUserData}, {new : true})
    console.log(updatedUser)
    return updatedUser
  } catch (err) {
    throw new Error(`Error while updating user with id ${id}`)
  }
}
