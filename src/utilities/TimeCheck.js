const daysList = ["Tu", "Th"];

export const parseMeetingString = (meetingString) => {
    const [dayPart, timePart] = meetingString.split(' ');

    const splitDays = (dayPart) => {
      let days = [];
      let i = 0;
      while (i < dayPart.length) {
        const twoCharDay = dayPart.slice(i, i + 2);
        if (daysList.includes(twoCharDay)) {
          days.push(twoCharDay);
          i += 2;
        }
        else {
          days.push(dayPart[i]);
          i += 1;
        }
      }
      return days;
    };

    const [startTime, endTime] = timePart.split('-').map(time => {
      const [hour, minute] = time.split(':').map(Number);
      return hour * 60 + minute;
    });

    return splitDays(dayPart).map(day => ({
      day,
      startTime,
      endTime
    }));
};

export const checkTimeConflict = (course1, course2) => {
    const meetings1 = parseMeetingString(course1.meets);
    const meetings2 = parseMeetingString(course2.meets);

    for (let meeting1 of meetings1) {
      for (let meeting2 of meetings2) {
        if (meeting1.day === meeting2.day && meeting1.startTime < meeting2.endTime && meeting2.startTime < meeting1.endTime) {
          return true;
        }
      }
    }
    return false;
};

export const TimeConflictChecker = (newCourse, selectedCourses, allCourses) => {
    if (selectedCourses.includes(newCourse.id)) {
      return false;
    }
    
    for (let i = 0; i < selectedCourses.length; i++) {
        const selectedCourseId = selectedCourses[i];
        const selectedCourse = allCourses[selectedCourseId];
    
        if (checkTimeConflict(newCourse, selectedCourse)) {
          return true;
        }
    }
    return false;
}