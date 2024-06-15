import mongoose, { Document, Model } from "mongoose";

/**
 * Mongoose schema for the Personal Details document.
 * @param {Object} schemaDefinition - Definition of the personal details schema.
 * @param {String} schemaDefinition.userId - User ID.
 * @param {String} schemaDefinition.fullName - Full name.
 * @param {String} schemaDefinition.email - Email address.
 * @param {String} schemaDefinition.gender - Gender.
 * @param {String} [schemaDefinition.resume] - Resume path (optional).
 * @param {String} [schemaDefinition.location] - Location (optional).
 * @param {String} [schemaDefinition.phoneNumber] - Phone number (optional).
 */
const personalDetailsSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    resume: { type: String },
    location: { type: String },
    phoneNumber: { type: String },
  },
  { _id: false, timestamps: false }
);

/**
 * Mongoose schema for the Past Experience document.
 * @param {Object} schemaDefinition - Definition of the past experience schema.
 * @param {String} schemaDefinition.currentJobTitle - Current job title.
 * @param {String} schemaDefinition.companyName - Company name.
 * @param {String} schemaDefinition.industry - Industry.
 * @param {Number} schemaDefinition.yearsOfExperience - Years of experience.
 * @param {String} schemaDefinition.highestDegreeAttained - Highest degree attained.
 * @param {String} schemaDefinition.universityInstitutionName - University or institution name.
 * @param {String} schemaDefinition.fieldOfStudy - Field of study.
 * @param {Number} schemaDefinition.graduationYear - Graduation year.
 * @param {String[]} schemaDefinition.keySkills - List of key skills.
 * @param {String[]} schemaDefinition.certificationsLicenses - List of certifications/licenses.
 */
const pastExperienceSchema = new mongoose.Schema(
  {
    currentJobTitle: { type: String, required: true },
    companyName: { type: String, required: true },
    industry: { type: String, required: true },
    yearsOfExperience: { type: Number, required: true },
    highestDegreeAttained: { type: String, required: true },
    universityInstitutionName: { type: String, required: true },
    fieldOfStudy: { type: String, required: true },
    graduationYear: { type: Number, required: true },
    keySkills: { type: [String], required: true },
    certificationsLicenses: { type: [String], required: true },
  },
  { _id: false, timestamps: false }
);

/**
 * Mongoose schema for the Past Work History document.
 * @param {Object} schemaDefinition - Definition of the past work history schema.
 * @param {String} schemaDefinition.previousJobTitle - Previous job title.
 * @param {String} schemaDefinition.companyName - Company name.
 * @param {String} schemaDefinition.employmentDates - Employment dates.
 * @param {String[]} schemaDefinition.responsiblitiesAchievements - List of responsibilities/achievements.
 * @param {String} schemaDefinition.personalBioSummary - Personal bio/summary.
 * @param {String} schemaDefinition.availablityReferrals - Availability and referrals.
 * @param {String} schemaDefinition.jobPreferences - Job preferences.
 */
const pastWorkHistorySchema = new mongoose.Schema(
  {
    previousJobTitle: { type: String, required: true },
    companyName: { type: String, required: true },
    employmentDates: { type: String, required: true },
    responsiblitiesAchievements: { type: [String], required: true },
    personalBioSummary: { type: String, required: true },
    availablityReferrals: { type: String, required: true },
    jobPreferences: { type: String, required: true },
  },
  { _id: false, timestamps: false }
);

/**
 * Mongoose schema for the Social Links document.
 * @param {Object} schemaDefinition - Definition of the social links schema.
 * @param {String} schemaDefinition.linkedInUrl - LinkedIn URL.
 * @param {String} schemaDefinition.gitHubUrl - GitHub URL.
 * @param {String} schemaDefinition.websiteUrl - Website URL.
 */
const socialLinksSchema = new mongoose.Schema(
  {
    linkedInUrl: { type: String, required: true },
    gitHubUrl: { type: String, required: true },
    websiteUrl: { type: String, required: true },
  },
  { _id: false, timestamps: false }
);

/**
 * Interface representing a User Account Details document.
 * @interface
 */
interface AccountDetailsDocument extends Document {
  userDetails: {
    personalDetails: {
      userId: string;
      fullName: string;
      email: string;
      gender: string;
      resume?: string;
      location?: string;
      phoneNumber?: string;
    };
    pastExperience: {
      currentJobTitle: string;
      companyName: string;
      industry: string;
      yearsOfExperience: number;
      highestDegreeAttained: string;
      universityInstitutionName: string;
      fieldOfStudy: string;
      graduationYear: number;
      keySkills: string[];
      certificationsLicenses: string[];
    };
    pastWorkHistory: {
      previousJobTitle: string;
      companyName: string;
      employmentDates: string;
      responsiblitiesAchievements: string[];
      personalBioSummary: string;
      availablityReferrals: string;
      jobPreferences: string;
    };
    socialLinks: {
      linkedInUrl: string;
      gitHubUrl: string;
      websiteUrl: string;
    };
  };
}

/**
 * Mongoose schema for the User Account Details document.
 * @param {Object} schemaDefinition - Definition of the user account details schema.
 * @param {Object} schemaDefinition.userDetails - User details schema.
 * @param {Object} schemaDefinition.userDetails.personalDetails - Personal details schema.
 * @param {String} schemaDefinition.userDetails.personalDetails.userId - User ID.
 * @param {String} schemaDefinition.userDetails.personalDetails.fullName - Full name.
 * @param {String} schemaDefinition.userDetails.personalDetails.email - Email address.
 * @param {String} schemaDefinition.userDetails.personalDetails.gender - Gender.
 * @param {String} [schemaDefinition.userDetails.personalDetails.resume] - Resume path (optional).
 * @param {String} [schemaDefinition.userDetails.personalDetails.location] - Location (optional).
 * @param {String} [schemaDefinition.userDetails.personalDetails.phoneNumber] - Phone number (optional).
 * @param {Object} schemaDefinition.userDetails.pastExperience - Past experience schema.
 * @param {String} schemaDefinition.userDetails.pastExperience.currentJobTitle - Current job title.
 * @param {String} schemaDefinition.userDetails.pastExperience.companyName - Company name.
 * @param {String} schemaDefinition.userDetails.pastExperience.industry - Industry.
 * @param {Number} schemaDefinition.userDetails.pastExperience.yearsOfExperience - Years of experience.
 * @param {String} schemaDefinition.userDetails.pastExperience.highestDegreeAttained - Highest degree attained.
 * @param {String} schemaDefinition.userDetails.pastExperience.universityInstitutionName - University or institution name.
 * @param {String} schemaDefinition.userDetails.pastExperience.fieldOfStudy - Field of study.
 * @param {Number} schemaDefinition.userDetails.pastExperience.graduationYear - Graduation year.
 * @param {String[]} schemaDefinition.userDetails.pastExperience.keySkills - List of key skills.
 * @param {String[]} schemaDefinition.userDetails.pastExperience.certificationsLicenses - List of certifications/licenses.
 * @param {Object} schemaDefinition.userDetails.pastWorkHistory - Past work history schema.
 * @param {String} schemaDefinition.userDetails.pastWorkHistory.previousJobTitle - Previous job title.
 * @param {String} schemaDefinition.userDetails.pastWorkHistory.companyName - Company name.
 * @param {String} schemaDefinition.userDetails.pastWorkHistory.employmentDates - Employment dates.
 * @param {String[]} schemaDefinition.userDetails.pastWorkHistory.responsiblitiesAchievements - List of responsibilities/achievements.
 * @param {String} schemaDefinition.userDetails.pastWorkHistory.personalBioSummary - Personal bio/summary.
 * @param {String} schemaDefinition.userDetails.pastWorkHistory.availablityReferrals - Availability and referrals.
 * @param {String} schemaDefinition.userDetails.pastWorkHistory.jobPreferences - Job preferences.
 * @param {Object} schemaDefinition.userDetails.socialLinks - Social links schema.
 * @param {String} schemaDefinition.userDetails.socialLinks.linkedInUrl - LinkedIn URL.
 * @param {String} schemaDefinition.userDetails.socialLinks.gitHubUrl - GitHub URL.
 * @param {String} schemaDefinition.userDetails.socialLinks.websiteUrl - Website URL.
 */
const accountDetailsSchema = new mongoose.Schema<AccountDetailsDocument>(
  {
    userDetails: {
      type: new mongoose.Schema(
        {
          personalDetails: { type: personalDetailsSchema, required: true },
          pastExperience: { type: pastExperienceSchema, required: true },
          pastWorkHistory: { type: pastWorkHistorySchema, required: true },
          socialLinks: { type: socialLinksSchema, required: true },
        },
        { _id: false, timestamps: false }
      ),
      default: null,
    },
  },
  { timestamps: true, _id: false }
);

/**
 * Mongoose model for the User Account Details document.
 * @type {Model<AccountDetailsDocument>}
 */
const accountDetailsModel: Model<AccountDetailsDocument> =
  mongoose.model<AccountDetailsDocument>(
    "AccountDetails",
    accountDetailsSchema
  );

export { accountDetailsModel };
