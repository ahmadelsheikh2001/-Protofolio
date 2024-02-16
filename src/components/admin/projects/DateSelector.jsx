
import React, { useState } from 'react';

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Generate an array of dates (just an example, replace with your logic)
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDates = dates.filter(date =>
    date.toString().includes(searchQuery)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a date..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <br />
      <select value={selectedDate} onChange={handleDateChange}>
        <option value="">Select a date</option>
        {filteredDates.map((date, index) => (
          <option key={index} value={date}>{date}</option>
        ))}
      </select>
    </div>
  );
};

export default DateSelector;
