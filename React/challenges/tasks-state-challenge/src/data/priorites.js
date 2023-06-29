const priorites = ['low', 'medium', 'high', 'very high', 'ultra important'];

export const rankPriority = (priority) => {
  return priorites.indexOf(priority);
};

export default priorites;
