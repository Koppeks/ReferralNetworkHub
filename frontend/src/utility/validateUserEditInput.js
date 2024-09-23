/**
 * Validates user data to ensure that the name, username, and password meet the minimum length requirement.
 *
 * @param {Object} data - The user data to be validated.
 * @param {string} data.name - The user's name.
 * @param {string} data.username - The user's username.
 * @param {string} data.password - The user's password.
 * @returns {string|boolean} - Returns an error message if validation fails, otherwise returns true.
 */

  //List of validations
  const isRequired = (value) => value ? true : "is required!"

//Will only work with login and signup
const validateEditUserData = (data) => {

  let { personalInfo, professionalInfo, selectedOption } = data;
  console.log("The complete data inside validateEditUserData: ", data)
  //Loop that will run the list of validations assigned to each field
  let listOfErrors = []
  const validateField = (field, value, validations) => {
    for (let validation of validations) {
      const result = validation(value);
      console.log(result)
      if (result !== true) return listOfErrors.push({field, value , errMsg: `${field} ${result}`});
    }
    return true;
  };

  //All the posible validations that will be processed 
  const fieldValidations = [
    data.personalInfo.gender !== undefined && {
      field: "gender",
      value: personalInfo.gender,
      validations: [isRequired],
    },
    data.professionalInfo.companyName !== undefined && selectedOption !== "Fresher" && {
      field: "companyName",
      value: professionalInfo.companyName,
      validations: [isRequired]
    },
    data.professionalInfo.currentJobTitle !== undefined && selectedOption !== "Fresher" && {
      field: "currentJobTitle",
      value: professionalInfo.currentJobTitle,
      validations: [isRequired]
    },
    data.professionalInfo.industry !== undefined && selectedOption !== "Fresher" && {
      field: "industry",
      value: professionalInfo.industry,
      validations: [isRequired]
    },
    data.professionalInfo.yearsOfExperience !== undefined && selectedOption !== "Fresher" && {
      field: "yearsOfExperience",
      value: professionalInfo.yearsOfExperience,
      validations: [isRequired]
    },
  ].filter(Boolean);

  //Loop through each validation and make a list
  for (let { field, value, validations } of fieldValidations) {
    validateField(field, value, validations);
  }
  if(listOfErrors.length > 0){
    return listOfErrors
  }
  return true;
};

export { validateEditUserData };
