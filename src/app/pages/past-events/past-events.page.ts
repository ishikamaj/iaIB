import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.page.html',
  styleUrls: ['./past-events.page.scss'],
})
export class PastEventsPage implements OnInit {

  public events: any[][];

  constructor() { 

    this.events = [
    ["Scratch Workshop", "4TH-8TH GRADE", "November 19, 2019", "10am - 12pm", "Scratch Workshop in partnership with OSU\'s ACM-W!"], 
    ["#TECHNOFASHION Workshop", "6TH-8TH GRADE", "September 28, 2019", "9:30am - 11:30am", "TECHNOFASHION is a series of Science, Technology, Engineering, and Math (STEM) workshops paced over a year-long program culminating in a design challenge. The program aims to educate girls in electronics and programming, strengthen their self-confidence, boost their awareness of team dynamics, help them develop leadership skills, and attract them towards STEM careers in the future. In the first half of the program, TECHNOFASHION participants work in teams to self-explore sewable electronics and learn how to program them. In the second half, a Design Challenge is assigned, and teams work in their own creative ways to design and build TECHNOFASHION prototypes that will compete at a year-end Competition. Two technical workshops will provide participants with hands-on kits and homework assignments, while a leadership workshop will help participants strengthen their self-confidence and develop leadership skills. Mentors will be available throughout the TECHNOFASHION experience to guide girls as needed."],
    ["SPARK the IMAGINATION", "6TH-8TH GRADE", "April 6, 2019", "9am - 12pm", "In this three-hour workshop, we are partnering with Ohio State's ElectroScience Lab to learn basic circuit design using playdough, conductive threads, fabrics, and more. During the event, participants will: Tour the ElectroScience Lab, Explore electronic circuits with playdough, and Create their own light up stuffed toy."],
    ["Mobile App Panel Discussion", "9TH-12TH GRADE", "February 17, 2019", "1pm - 3pm", "The panel includes 4 Emerge participants who developed the mobile application around organizing conferences: Meghan Letizia, Luke Rouker, Nic Larson, and Kenton Steiner. The presentation contains multiple different sections such as: the live demo of the application, Tech stack used is Ionic Framework with Firebase backend, Communication and Collaboration while developing, and Development Tool choices and best practices."],
    ["Learn About Data Science From the Experts", "7TH-12TH", "November 17th, 2018", "9:30am to 12:30pm", "In this workshop we will spend 3 hours on learning about data and performing multiple hands on labs to design, run and interpret predictive models using a tool called RapidMiner.  The tool is a GUI based configurable component family of tools which is a different type of programming.  Predictive Models are for those who like to think and solve problems.  The RapidMiner tool is a visual GUI based tool that we simply drag and drop our design as we think about it. "],
    ["Code a Talking Robot with Ohbot", "3RD-7TH", "September 29th, 2018", "4pm - 6pm", "In this event series comprising of two, two-hour sessions, and participants will get hands on experience with using the Ohbot application to write code to make the Ohbot robot move and talk."]
    ];
    
  }

  showEvents() {
    
    for (var i = 0; i < this.events.length; i++) {
    {
      var j = 0;
      while ((j < this.events[0].length)) {
      {
        console.log('Name: ' + this.events[i][j]);
        j++;
        console.log('Age: ' + this.events[i][j]);
        j++;
        console.log('Date: ' + this.events[i][j]);
        j++;
        console.log('Time: ' + this.events[i][j]);
        j++;
        console.log('Desc: ' + this.events[i][j]);
        j++;
      }
      };
    };
    }
  }


  ngOnInit() {
  }

}
