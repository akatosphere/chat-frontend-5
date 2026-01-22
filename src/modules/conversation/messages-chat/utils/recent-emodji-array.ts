const maxSize = 11;
const array: string[] = [];

export const addRecentEmodji = (newElement: string): string[] => {
  array.unshift(newElement);
  if (array.length > maxSize) {
    array.splice(array.length - 1, array.length - maxSize);
  }
  return array;
};
