import {
  formStyles as styles,
  imageSectionStyles as styles1,
  handleChange,
  UserSvg,
} from "../imports";

const ImageSection = ({
  setProfileInfo,
  socialLinks,
  setSocialLinks,
  hasErrors,
}) => {
  return (
    <div className={styles.imageSection}>
      <div className={styles.uploadImage}>
        <UserSvg className={styles.userSvg} />
      </div>
      <button className={styles1.uploadButton}>Upload Image</button>
      <div className={styles.socialLinks}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="linkedInUrl"
            value={socialLinks.linkedInUrl}
            onChange={(e) => handleChange(e, setSocialLinks)}
            placeholder="LinkedIn Profile URL"
            className={`${styles.inputField} ${
              hasErrors.linkedInUrl && styles.inputError
            }`}
          />
          {hasErrors.linkedInUrl && <small className={styles.errorMessage}>{hasErrors.linkedInUrl}</small>}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="gitHubUrl"
            value={socialLinks.gitHubUrl}
            onChange={(e) => handleChange(e, setSocialLinks)}
            placeholder="GitHub Profile URL (Optional)"
            className={`${styles.inputField} ${
              hasErrors.gitHubUrl && styles.inputError
            }`}
          />
          {hasErrors.gitHubUrl && <small className={styles.errorMessage}>{hasErrors.gitHubUrl}</small>}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="websiteUrl"
            value={socialLinks.websiteUrl}
            onChange={(e) => handleChange(e, setSocialLinks)}
            placeholder="Website URL (Optional)"
            className={`${styles.inputField} ${
              hasErrors.websiteUrl && styles.inputError
            }`}
          />
          {hasErrors.websiteUrl && <small className={styles.errorMessage}>{hasErrors.websiteUrl}</small>}
        </div>
      </div>

      <div
        className={`${styles.genderSection} ${
          hasErrors.gender && styles.inputError
        }`}
      >
        <label className={styles1.radioLabel}>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => handleChange(e, setProfileInfo)}
          />
          Male
        </label>
        <label className={styles1.radioLabel}>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => handleChange(e, setProfileInfo)}
          />
          Female
        </label>
        <label className={styles1.radioLabel}>
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={(e) => handleChange(e, setProfileInfo)}
          />
          Other
        </label>
      </div>
      {hasErrors.gender && (
        <small className={styles.errorMessage}>{hasErrors.gender}</small>
      )}
    </div>
  );
};

export default ImageSection;
