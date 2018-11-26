---
layout: post
title: "Appointment Scheduler"
categories: GoogleScript
img: 'appointmentScheduler.jpg'
showTitle: true
gitHub: 'https://github.com/peterfoxflick/Appointment-Scheduler'
---

Our office needed to assign appointments made on Acuity to representative. After giving it some thought and experimenting with the software, I found that Acuity could sync with Google Calendar. From there I could use Google App Script to add these appointments to a Google Sheet which could be used to assign each appointment to a representative.

## The Process
After a week I had a working prototype. The code was unorganized but working and operated as a proof of concept. I tested it for a week and introduced it to the team. The software streamlined appointment assignments helping save time,  confusion and prevented missed appointments once fully integrated.

After the initial script was integrated I began work on the code here. This version is much more organized, uses javascript objects, and furthers the functionality of the original script. The current version sends Slack messages to representatives with a daily summary of their appointments, and reminders 15 min before each appointment. I even planed it to one day assign representatives to appointment automatically based off their work schedule.   

## Lesson Learned
I learned some valuable lessons while working with this script. The first is to moduleze code. Version 1 was not modulized and is confusing to translate to version 2. I also learned the value of automated tests. Each page of the script has a simple unit test at the bottom so I can get a better look into each piece of code.

## Next Step
Currently, I'm working on adding all the code to Github. Some API keys and document Ids are stored directly in the code so I have to strip them out and make sure each function is properly commented to further readability.

Automate the assignment process. This may sound simple but the script would have to read in each employees schedule and ensure they can make the appointment. Furthermore, each representative is specialized with a specific department and the script would have to priorities those appointment to their correlating specialized representative.
