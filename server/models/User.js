
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password_hash: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: '',
  },
  dob: {
    type: String, // You might want to store this as Date later
    default: '',
  },
  gender: {
    type: String,
    default: '',
  },
  nationality: {
    type: String,
    default: '',
  },
  
  interests: {
    type: [String],
    default: [],
  },
  profession: {
    type: String,
    default: '',
  },
  experience: {
    type: String,
    default: '',
  },
  state: {
    type: String,
    default: '',
  },
  followers: {
    type: [
      {
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        userName: String,
        profile_image_url: String,
      },
    ],
    default: [],
  },
  following: {
    type: [
      {
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        userName: String,
        profile_image_url: String,
      },
    ],
    default: [],
  },
  ifOrganization: {
    type: Boolean,
    default: false,
  },
  website: {
    type: String,
    default: '',
  },
  fullAddress: {
    type: String,
    default: '',
  },
  sector: {
    type: String,
    default: '',
  },
  manager: {
    type: String,
    default: '',
  },
  managerEmailAddress: {
    type: String,
    default: '',
  },
  profile_image_url: {
    type: String,
    default: '',
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Project', // Assuming you will have a "projects" model
    },
  ],
},
{
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

module.exports = mongoose.model('User', userSchema);
