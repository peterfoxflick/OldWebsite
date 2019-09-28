---
layout: project
title: "Canvas Quiz Printer - A Chrome Extension"
categories: canvas
img: 'QuizPrinter.png'
showTitle: true
gitHub: 'https://github.com/peterfoxflick/CanvasQuizPrinter'
---

A Chrome extension that offers a [frequently requested feature](https://community.canvaslms.com/ideas/1055-printable-pdf-exportable-quizzes), printable canvas quizzes. The extension works in four basic steeps

1. Trigger when a users clicks on the icon
2. Get the quiz id, course id, and school id from the url
3. Use the above id’s to get the questions from a quiz
4. Output each question as HTML

All of the code is written in Javascript and is available on [GitHub](https://github.com/peterfoxflick/CanvasQuizPrinter).

The largest part of this project was going through and generating HTML for each question. I started with the easy ones, like multiple choice, or essay questions. Some questions like drop-downs, or matching were trickier to plan.

After a working HTML document was created I went back and added some Bootstrap styling and imported in the quiz title. This greatly increased the look and feel of the quiz.

While no particular part of this project was extremely complicated, the project as a whole served the purpose of filling a common need. It goes to show that a simple program can solve our larger problems. You can read more about how I made it on [my blog](http://peterfoxflick.com/learn/2019-09-28-Canvas_Quiz_Printer/). 
