export const weekData = [
  { id: 1, day: "Sun", date: 15 },
  { id: 2, day: "Mon", date: 16 },
  { id: 3, day: "Tue", date: 17 },
  { id: 4, day: "Wed", date: 18 },
  { id: 5, day: "Thu", date: 19 },
  { id: 6, day: "Fri", date: 20 },
  { id: 7, day: "Sat", date: 21 },
];




export const tasks = [
  {
    id: 1,
    title: "Schedule a meeting with Harshit Sir",
    time: "09:00 AM",
    tags: ["Habit", "Must"],
    type: "meeting",
    status: "done",   // marked as completed
  },
  {
    id: 2,
    title: "2.5 Hours Simran and Meditation",
    time: "09:00 AM",
    tags: ["Habit", "Must"],
    type: "meditation",
    status: "done",
  },
  {
    id: 3,
    title: "Save 200 Rupees Daily",
    time: "12:00 PM",
    tags: ["Habit", "Must"],
    type: "savings",
    status: "pending",
  },
  {
    id: 4,
    title: "Walk 10k Step Daily",
    time: "07:00 AM",
    tags: ["Important"],
    type: "fitness",
    status: "done",
    progress: "12/31",
  },
  {
    id: 5,
    title: "Buy Sunflower for Mumma",
    time: "11:00 AM",
    tags: ["Task", "Important"],
    type: "shopping",
    status: "pending",
    progress: "0/1",
  },
  {
    id: 6,
    title: "Make Mandala and Colour Daily",
    time: "07:30 PM",
    tags: ["Task"],
    type: "creative",
    status: "pending",
    progress: "12/30",
  },
   
];


export const activityTypes = [
  {
    id: 1,
    title: "Habit",
    description: "Activity that repeats over time; it has detailed tracking and statistics.",
    type: "habit",    // for dynamic icon
  },
  {
    id: 2,
    title: "Recurring Task",
    description: "Activity that repeats over time; it has detailed tracking and statistics.",
    type: "recurring",  // for dynamic icon
  },
  {
    id: 3,
    title: "Task",
    description: "Single instance activity without tracking over time.",
    type: "task",
  },
  {
    id: 4,
    title: "Goal of the Day",
    description: "A specific target set for oneself to achieve within a single day.",
    type: "goal",
  },
];