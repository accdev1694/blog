import React, { useEffect, useState } from 'react';

const UkDateTime = () => {
  const [ukDateTime, setUkDateTime] = useState('');

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Europe/London',
    });
    setUkDateTime(formatted);
  }, []);

  return (
    <div>
      <span>{ukDateTime}</span>
    </div>
  );
};

export default UkDateTime;