// Validator function for the form fields
export const validateCourseForm = (id, value) => {
    switch (id) {
      case 'title':
        return value.length >= 2 ? '' : 'Title must be at least 2 characters.';
      
      case 'meets':
        const meetsRegex = /^([MTuWThFSaSu]+ \d{2}:\d{2}-\d{2}:\d{2})?$/;
        return value === '' || meetsRegex.test(value) ? '' : 'Must contain days and start-end, e.g., MWF 12:00-13:20';
      
      default:
        return '';
    }
  };
  