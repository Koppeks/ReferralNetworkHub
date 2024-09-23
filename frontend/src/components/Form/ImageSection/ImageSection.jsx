import {
  formStyles as styles,
  imageSectionStyles as styles1,
  handleChange,
  UserSvg,
} from "../imports";

const ImageSection = ({ setProfileInfo, socialLinks, setSocialLinks, hasErrors }) => {
  return (
    <div className={styles.imageSection}>
      <div className={styles.uploadImage}>
        <UserSvg className={styles.userSvg} />
      </div>
      <button className={styles1.uploadButton}>Upload Image</button>
      <div className={styles.socialLinks}>
        <input
          type="url"
          name="linkedInUrl"
          value={socialLinks.linkedInUrl}
          onChange={(e) => handleChange(e, setSocialLinks)}
          placeholder="LinkedIn Profile URL"
          className={styles.inputField}
        />
        <input
          type="url"
          name="gitHubUrl"
          value={socialLinks.gitHubUrl}
          onChange={(e) => handleChange(e, setSocialLinks)}
          placeholder="GitHub Profile URL (Optional)"
          className={styles.inputField}
        />
        <input
          type="url"
          name="websiteUrl"
          value={socialLinks.websiteUrl}
          onChange={(e) => handleChange(e, setSocialLinks)}
          placeholder="Website URL (Optional)"
          className={styles.inputField}
        />
      </div>

      <div className={`${styles.genderSection} ${
            hasErrors.gender && styles.inputError
          }`}>
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
    </div>
  );
};

export default ImageSection;
