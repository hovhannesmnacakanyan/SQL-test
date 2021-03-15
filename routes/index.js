const express = require('express');
const router = express.Router();
const { students, sequelize, exams, subjects } = require('../models');

router.get('/', async function (req, res, next) {
  // max exam result student
  const maxExamResultStudent = await exams.findAll({
    include: [
      { model: students, attributes: ['name', 'surname'] },
      { model: subjects, attributes: [] },
    ],
    where: { subjectId: 1 },
    attributes: ['examResult', 'student.id'],
    group: ['student.id', 'examResult'],
    order: [[sequelize.fn('MAX', sequelize.col('examResult')), 'DESC']],
    limit: 1,
  });

  // best student
  const bestStudent = await exams.findAll({
    include: [{ model: students, attributes: ['name', 'surname'] }],
    attributes: [
      'student.id',
      [sequelize.fn('AVG', sequelize.col('examResult')), 'avgResult'],
    ],
    order: [[sequelize.fn('AVG', sequelize.col('examResult')), 'DESC']],
    group: ['student.id'],
    limit: 1,
  });

  // student exam result
  const studentExamResult = await students.findAll({
    attributes: ['name', 'surname'],
    include: [{ model: exams, attributes: ['examResult', 'examDate'] }],
    where: { id: 2 },
  });

  // sum credits
  const studentExams = await students.findAll({
    include: [
      {
        model: exams,
        attributes: [],
        include: [{ model: subjects, attributes: [] }],
      },
    ],
    attributes: [
      'name',
      'surname',
      [sequelize.fn('SUM', sequelize.col('exams.subject.credit')), 'sumCredit'],
    ],
    group: ['students.id'],
  });

  // await exams.upsert({
  //   examResult: 49,
  //   studentId: 4,
  //   subjectId: 10,
  //   examDate: '2016-02-01',
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // });

  res.json([
    { status: 'Max exam result student', maxExamResultStudent },
    { status: 'Best student', bestStudent },
    { status: 'Student exam result', studentExamResult },
    { status: 'Sum credits', studentExams },
  ]);
});

module.exports = router;
