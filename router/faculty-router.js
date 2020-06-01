const express = require('express')
const facultyRouter = new express.Router()
const auth = require('../middlewares/auth')
const FacultyController = require('../controllers/faculty-controller')
const MyMulter = require('../middlewares/extract-file')


// get results
facultyRouter.get('/universityApi/faculty/getStudentResults', auth, FacultyController.getStudentResults)

//  logging in
facultyRouter.post('/universityApi/faculty/login', FacultyController.facultyLogin)

//  logout
facultyRouter.post('/universityApi/faculty/logout', auth, FacultyController.facultyLogout)

//  Signup
facultyRouter.post('/universityApi/faculty/newFaculty', MyMulter.uploadAsBuffer, FacultyController.facultySignup)

/* //  Get user avatar
facultyRouter.get('/universityApi/faculty/:facultyId/avatar', auth, FacultyController.getFacultyrAvatar) */

// storing result data
facultyRouter.post('/universityApi/faculty/resultUpload', MyMulter.uploadResult, FacultyController.uploadSuccess)

module.exports = facultyRouter
