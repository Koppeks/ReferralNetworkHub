/**
 * Validates user data to ensure that the name, username, and password meet the minimum length requirement.
 *
 * @param {Object} data - The user data to be validated.
 * @param {string} data.name - The user's name.
 * @param {string} data.username - The user's username.
 * @param {string} data.password - The user's password.
 * @returns {string|boolean} - Returns an error message if validation fails, otherwise returns true.
 */

const validateUserData = (data) => {
  //List of validations
  const isRequired = (value) => value ? true : "is required!"
  const minLength = (value, limit) =>
    value.length >= limit ? true : `must be at least ${limit} characters!`;
  const isEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email) ? true : "must be valid!";
  };

  //Loop that will run the list of validations assigned to each field
  const validateField = (field, value, validations) => {
    for (let validation of validations) {
      const result = validation(value);
      if (result !== true) return `${field} ${result}`;
    }
    return true;
  };

  let { name, username, email, password } = data;

  //Information and list of validations of each field
  const fieldValidations = [
    data.name !== undefined && {
      field: "name",
      value: name,
      validations: [isRequired,(val) => minLength(val, 5)],
    },
    data.username !== undefined && {
      field: "username",
      value: username,
      validations: [isRequired,(val) => minLength(val, 5)],
    },
    data.email !== undefined && {
      field: "email",
      value: email,
      validations: [isRequired, isEmail],
    },
    data.password !== undefined && {
      field: "password",
      value: password,
      validations: [isRequired,(val) => minLength(val, 5)],
    },
  ].filter(Boolean);

  for (let { field, value, validations } of fieldValidations) {
    const result = validateField(field, value, validations);
    if (result !== true) return `${result}`;
  }
  return true;
};

// const validateUserData = (data) => {
//   let { name, username, password } = data;
//   let errMsg = "must be at least 6 characters!";

//   if (name?.length < 5) {
//     return "Name " + errMsg;
//   } else if (username?.length < 5) {
//     return "Username " + errMsg;
//   } else if (password?.length < 5) {
//     return "Password " + errMsg;
//   } else {
//     return true;
//   }
// };

export { validateUserData };
