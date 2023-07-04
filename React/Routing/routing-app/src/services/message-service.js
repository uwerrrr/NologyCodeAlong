export const createMessage = async (messageData) => {

  const newMessage = { ...messageData, createdAt: new Date() };
  
  const response = await fetch('http://localhost:3000/messages', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(newMessage),
  });

  if (!response.ok) {
    throw new Error('Failed to create message');
  }

  return await response.json();
};
