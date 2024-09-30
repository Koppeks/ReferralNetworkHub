import {formStyles as styles, handleChange} from '../imports'

const PersonalInfo = ({ personalInfo, setPersonalInfo, hasErrors }) => {

  console.log("Erros on personal info:", hasErrors)
  return (
    <div className={styles.personalInfo}>
      <h3>Personal Information</h3>
      <div className={styles.inputRow}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={personalInfo.fullName}
            onChange={(e) => handleChange(e, setPersonalInfo)}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={personalInfo.email}
            onChange={(e) => handleChange(e, setPersonalInfo)}
            className={styles.inputField}
          />
        </div>
      </div>
      <div className={styles.inputRow}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Location (City, Country)"
            name="location"
            value={personalInfo.location}
            onChange={(e) => handleChange(e, setPersonalInfo)}
            className={styles.inputField}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            type="number"
            placeholder="Phone Number"
            name="phoneNumber"
            value={personalInfo.phoneNumber}
            onChange={(e) => handleChange(e, setPersonalInfo)}
            className={`${styles.inputField} ${
              hasErrors.phoneNumber && styles.inputError
            }`}
          />
          {hasErrors.phoneNumber && <small className={styles.errorMessage}>{hasErrors.phoneNumber}</small>}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
