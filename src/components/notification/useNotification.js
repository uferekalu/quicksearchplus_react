import { useState, useEffect } from 'react';

export function useNotification() {
  const [notification, setNotification] = useState(null);

  const createNotification = (message, duration = 3000, background = 'lightblue', color = 'black') => {
    setNotification({ message, duration, background, color });
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, notification.duration);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return { notification, createNotification };
}
