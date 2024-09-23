import { validateEditUserData } from "../../utility/validateUserEditInput";
import { validateUserData } from "../../utility/validateUserInput";
import {
  formStyles as styles,
  useState,
  useNavigate,
  generateSnackbar,
  updateUserAccountInfo,
  resetStates,
  ImageSection,
  ResumeUpload,
  PersonalInfo,
  ProfessionalInfo,
  EducationInfo,
  SkillsExpertise,
  WorkHistory,
  Preferences,
  AdditionalInfo,
} from "./imports";

const Form = () => {
  const [selectedOption, setSelectedOption] = useState("Experienced");
  const navigate = useNavigate();

  const [hasErrors, setHasErrors] = useState({
    gender: false,
    companyName: false,
    currentJobTitle: false,
    industry: false,
    yearsOfExperience: false,
    // WIP resume and profile photo
    // resume: " ",
    // profilePhoto: " ",
  });

  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    gender: "",
    resume: " ",
    location: "",
    phoneNumber: "",
    profilePhoto: " ",
  });
  const [professionalInfo, setProfessionalInfo] = useState({
    currentJobTitle: "",
    companyName: "",
    industry: "",
    yearsOfExperience: "",
  });
  const [education, setEducation] = useState({
    highestDegreeAttained: "",
    uniInsName: "",
    fieldOfStudy: "",
    graduationYear: "",
  });
  const [skillsExpertise, setSkillsExpertise] = useState({
    keySkills: [],
    certificationsLicenses: [],
  });
  const [workHistory, setWorkHistory] = useState([
    {
      previousJobTitle: "",
      companyName: "",
      employmentDates: "",
      responsibilitiesAchievements: "",
    },
  ]);
  const [preferences, setPreferences] = useState({
    availabilityForReferrals: "",
    jobPreferences: [],
  });
  const [additionalInfo, setAdditionalInfo] = useState({
    personalBio: "",
  });
  const [socialLinks, setSocialLinks] = useState({
    linkedInUrl: "",
    gitHubUrl: "",
    websiteUrl: "",
  });
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  console.log(personalInfo)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!termsAndConditions) {
      generateSnackbar(
        "You must have checked Terms & Conditions Box!",
        "warning",
        2000
      );
      return;
    }

    let data = {
      personalInfo,
      professionalInfo,
      education,
      skillsExpertise,
      workHistory,
      preferences,
      additionalInfo,
      socialLinks,
      selectedOption
    };

    let response = validateEditUserData(data);

    setHasErrors({   
      gender: false,
      companyName: false,
      currentJobTitle: false,
      industry: false,
      yearsOfExperience: false
    });

    console.log("respuesta", response)

    if (response !== true) {
      if(selectedOption === "Fresher"){
        setHasErrors((prevState) => ({ ...prevState, 
          companyName: false,
          currentJobTitle: false,
          industry: false,
          yearsOfExperience: false,
        }));
      }

      response.forEach((error) => {
        setHasErrors((prevState) => ({ ...prevState, [error.field]: true }));
      });
      generateSnackbar("Fill all required fields", "warning", 2000);
    } else {
      updateUserAccountInfo(data, navigate);
      
      resetStates(
        setPersonalInfo,
        setProfessionalInfo,
        setEducation,
        setSkillsExpertise,
        setWorkHistory,
        setPreferences,
        setAdditionalInfo,
        setSocialLinks
      );
    }
  };

  return (
    <div className={styles.pageContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <ImageSection
          setProfileInfo={setPersonalInfo}
          socialLinks={socialLinks}
          setSocialLinks={setSocialLinks}
          hasErrors={hasErrors}
        />
        <div className={styles.formSection}>
          <ResumeUpload setResume={setPersonalInfo} />
          <PersonalInfo
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
          <ProfessionalInfo
            handleOptionClick={handleOptionClick}
            selectedOption={selectedOption}
            professionalInfo={professionalInfo}
            setProfessionalInfo={setProfessionalInfo}
            hasErrors={hasErrors}
          />
          <EducationInfo education={education} setEducation={setEducation} />
          <SkillsExpertise
            skillsExpertise={skillsExpertise}
            setSkillsExpertise={setSkillsExpertise}
          />
          <WorkHistory
            isDisabled={selectedOption === "Fresher"}
            workHistoryFields={workHistory}
            setWorkHistoryFields={setWorkHistory}
          />
          <Preferences
            preferences={preferences}
            setPreferences={setPreferences}
          />
          <AdditionalInfo
            additionalInfo={additionalInfo}
            setAdditionalInfo={setAdditionalInfo}
          />
          <div className={styles.footerInputes}>
            <div className={styles.termsAndConditions}>
              <label>
                <input
                  type="checkbox"
                  value="termsAndConditions"
                  checked={termsAndConditions}
                  onChange={() => setTermsAndConditions(!termsAndConditions)}
                />{" "}
                Accept Terms & Conditions
              </label>
            </div>
            <button className={styles.saveButton}>Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
