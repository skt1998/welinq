<template>
   <div class="custom-calendar rounded-10 pa-4">
      
     <div class="header">

      <div class="w-fit">
         <button @click="decreaseYear"><v-icon>mdi-chevron-left</v-icon></button>
       <select class="mx-3" v-model="selectedYear" @change="updateCalendar">
         <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
       </select>
       <button @click="increaseYear"><v-icon>mdi-chevron-right</v-icon></button>

      </div>
      



<div class="w-fit">
   <button @click="decreaseMonth"><v-icon>mdi-chevron-left</v-icon></button>
       
       <select class="mx-3" v-model="selectedMonth" @change="updateCalendar">
         <option v-for="(month, index) in months" :key="index" :value="index + 1">{{ month }}</option>
       </select>
       <button @click="increaseMonth"><v-icon>mdi-chevron-right</v-icon></button>
</div>

   
     </div>
     <table class="calendar">
       <thead>
         <tr>
           <th v-for="day in days" :key="day">{{ day }}</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="(week, weekIndex) in calendar" :key="weekIndex">
           <td v-for="(day, dayIndex) in week" :key="dayIndex" :class="{'event-day': hasEvent(day), 'selected-day': isSelected(day)}" class="cursor"  @click="handleDateClick(day)">{{ day || '' }}</td>
         </tr>
       </tbody>
     </table>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
      selectedDate: "not",
      selectedYear: new Date().getFullYear(),
      selectedMonth: new Date().getMonth() + 1,
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],
      events: [
      { start: '2023-11-11', end: '2023-11-11', title: 'Event 1' },
      { start: '2023-10-12', end: '2023-10-12', title: 'Event 2' },
      { start: '2023-10-25', end: '2023-10-25', title: 'Event 3' },
      { start: '2023-12-02', end: '2023-12-10', title: 'Event Strip' }
      // Add more events if needed
    ]
     };
   },
   computed: {
     years() {
       const currentYear = new Date().getFullYear();
       var year = Array.from({ length: 50 }, (_, index) => currentYear - 50 + index);
       var year2 = Array.from({ length: 50 }, (_, index) => currentYear + index);

       return [...year,...year2]
     },
     calendar() {
       const firstDay = new Date(this.selectedYear, this.selectedMonth - 1, 1).getDay();
       const lastDate = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
       const rows = Math.ceil((lastDate + firstDay) / 7);
       let day = 1;
       const calendar = [];
 
       for (let i = 0; i < rows; i++) {
         const week = [];
         for (let j = 0; j < 7; j++) {
           if (i === 0 && j < firstDay) {
             week.push(null);
           } else if (day > lastDate) {
             week.push(null);
           } else {
             week.push(day++);
           }
         }
         calendar.push(week);
       }
 
       return calendar;
     }
   },
   methods: {
      handleDateClick(day) {
         this.selectedDate = day;
    const clickedDate = new Date(this.selectedYear, this.selectedMonth - 1, day);
    const eventData = this.getEventData(clickedDate);

    console.log("Clicked Date:", clickedDate);
    console.log("Event Data:", eventData);

    // You can now use 'clickedDate' and 'eventData' as needed.
  },
  isSelected(day) {
      return this.selectedDate === day;
    },

  getEventData(clickedDate) {
    // Implement logic to fetch event data for the clicked date
    for (const event of this.events) {
      const eventStartDate = new Date(event.start);
      const eventEndDate = new Date(event.end);
      eventStartDate.setHours(0, 0, 0, 0);
      eventEndDate.setHours(0, 0, 0, 0);

      if (clickedDate >= eventStartDate && clickedDate <= eventEndDate) {
        return event;
      }
    }

    return null; // No event found for the clicked date
  },
     updateCalendar() {
       // Triggered when the selected year or month changes
     },
     increaseYear() {
       this.selectedYear++;
       this.updateCalendar();
     },
     decreaseYear() {
       this.selectedYear--;
       this.updateCalendar();
     },
     increaseMonth() {
       if (this.selectedMonth === 12) {
         this.selectedMonth = 1;
         this.increaseYear();
       } else {
         this.selectedMonth++;
       }
       this.updateCalendar();
     },
     decreaseMonth() {
       if (this.selectedMonth === 1) {
         this.selectedMonth = 12;
         this.decreaseYear();
       } else {
         this.selectedMonth--;
       }
       this.updateCalendar();
     },
     hasEvent(day) {
    const currentDate = new Date(this.selectedYear, this.selectedMonth - 1, day);
    currentDate.setHours(0, 0, 0, 0); // Set time to midnight

    for (const event of this.events) {
      const eventStartDate = new Date(event.start);
      eventStartDate.setHours(0, 0, 0, 0); // Set time to midnight
      const eventEndDate = new Date(event.end);
      eventEndDate.setHours(0, 0, 0, 0); // Set time to midnight


      // Check if the current date is within the event range
      if (currentDate >= eventStartDate && currentDate <= eventEndDate) {

        return true;
      }
    }

    return false;
  }
   }
 };
 </script>
 
 <style scoped>
 .custom-calendar {
   text-align: center;
   background-color: white;
   border: 1px solid #C0C5FC;
 }
 
 .header {
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin-bottom: 10px;
 }
 
 .header button {
   background: none;
   border: none;
   font-size: 16px;
   cursor: pointer;
 }
 
 .calendar {
   width: 100%;
   border-collapse: collapse;
 }
 
 .calendar th, .calendar td {
   font-family: Poppins;
font-size: 16px;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.3199999928474426px;
text-align: center;

   padding: 6px;
 }
 
 .event-day {
   background-color: var(--primary-light-2) /* Light blue for event days */
 }
 .selected-day {
  background-color: var(--primary-color); /* Change the color to your desired selection color */
}



 </style>
 