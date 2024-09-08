export function formDataToJson(formData: FormData): string {
  const formDataObject: Record<string, any> = {};

  formData.forEach((value, key) => {
    // If the key already exists, convert the value to an array
    if (formDataObject[key]) {
      // If it's not an array, convert it to an array
      if (!Array.isArray(formDataObject[key])) {
        formDataObject[key] = [formDataObject[key]];
      }
      // Push the new value into the array
      formDataObject[key].push(value);
    } else {
      // Otherwise, just set the value
      formDataObject[key] = value;
    }
  });

  return JSON.stringify(formDataObject); // Return the JSON string
}
