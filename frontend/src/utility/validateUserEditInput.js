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
  const isPhone = (value) => 
    /^(\+\d{1,3})?[-.\s]?(\(?\d{3}\)?)[-.\s]?\d{3}[-.\s]?\d{4}$/.test(value) || value === ""
    ? true 
    : "needs to be a valid number";
  const isURL = (value) => 
    /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w-]*)*\/?(\?.*)?(#.*)?$/.test(value) || value === ""
    ? true 
    : "needs to be a valid URL";

//Will only work with login and signup
const validateEditUserData = (data) => {

  let { personalInfo, professionalInfo, selectedOption, socialLinks } = data;
  console.log("The complete data inside validateEditUserData: ", data)
  //Loop that will run the list of validations assigned to each field
  let listOfErrors = []
  const validateField = (field, value, validations) => {
    for (let validation of validations) {
      const result = validation(value);
      console.log(result)
      // Handle multiple types of results:
      // - Exact names like URL's should be left untouched.
      // - Others should be split to better readeability.
      if (result === "needs to be a valid URL") return listOfErrors.push({field, value , errMsg: `${field.replace("Url", "")} ${result}`});
      if (result !== true) return listOfErrors.push({field, value , errMsg: `${field.split(/(?=[A-Z])/).join(" ").toLowerCase()} ${result}`});
    }
    return true;
  };

  // All the posible validations that will be processed 
  const fieldValidations = [
    data.personalInfo.gender !== undefined && {
      field: "gender",
      value: personalInfo.gender,
      validations: [isRequired],
    },
    data.personalInfo.phoneNumber !== undefined && {
      field: "phoneNumber",
      value: personalInfo.phoneNumber,
      validations: [isPhone]
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
    data.socialLinks.linkedInUrl !== undefined && {
      field:"linkedInUrl",
      value: socialLinks.linkedInUrl,
      validations:[isURL]
    },
    data.socialLinks.gitHubUrl !== undefined && {
      field:"gitHubUrl",
      value: socialLinks.gitHubUrl,
      validations:[isURL]
    },
    data.socialLinks.websiteUrl !== undefined && {
      field:"websiteUrl",
      value: socialLinks.websiteUrl,
      validations:[isURL]
    }
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
