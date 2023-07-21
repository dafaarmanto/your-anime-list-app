export const useStripTags = (description: string) => {
  return description.replace(/(<([^>]+)>)/gi, "");
};
