import { useState } from "react"
import { Upload, ChevronDown } from 'lucide-react';
import Header from "../components/Header"
import axios from "axios";
import { useNavigate } from "react-router-dom";


function PersonalSignUp({ onToggle }) {

  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

 

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    nationality: "",
    state: "",
    interests: "",
    profession: "",
    experience: "",
    email:"",
    password:"",
    
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if file is selected
    if (!file) {
      alert("Please select a profile picture.");
      return;
    }
  
    // Check if all fields are filled
    for (const key in formData) {
      if (formData[key] === "") {
        alert(`Please fill the ${key} field.`);
        return;
      }
    }
  
    try {
      // 1. Upload Image First
      const imageFormData = new FormData();
      imageFormData.append("image", file);
  
      const imageRes = await axios.post(`${import.meta.env.VITE_API_URL}/upload`, imageFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      const uploadedImageUrl = imageRes.data.url;
      console.log("Image uploaded to:", uploadedImageUrl);
  
      // 2. Attach uploaded image URL to formData
      const fullFormData = {
        ...formData,
        profilePicture: uploadedImageUrl,
      };
  
      // 3. Submit the Form with Image URL
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/personal-signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fullFormData),
      });

  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);  
        localStorage.setItem('userId', data.userId);  
        console.log('Success:', data);
        alert("Form submitted successfully!");
        navigate("/profile"); 
        // maybe reset form here
      } else {
        console.error('Error submitting form:', response.statusText);
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("An error occurred during submission.");
    }
  };
  
  

  return (
    <div className="h-auto w-full  px-4 py-8 md:px-8 lg:px-16 overflow-hidden">
      <div className="">
        <Header/>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#2d3748" }}>
          About you
        </h2>

            
        </div>

        <div className="mb-10">
          <div className="flex justify-between ">
            <div>
              <h3 className="text-xl font-semibold" style={{ color: "#2d3748" }}>
                Personal Info
              </h3>
              <p className="text-sm text-gray-600">Provide your personal info</p>
            </div>

            <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-200"
              />
            </div>

            <div className="grid grid-cols-4 gap-4">

            <div>
  <label className="block text-sm text-gray-600 mb-1">DOB</label>
  <div className="relative">
    <select
      name="dob"
      value={formData.dob}
      onChange={handleChange}
      className="w-full appearance-none px-4 py-2 bg-gray-100 rounded-md border border-gray-200"
    >
      <option value="">Select Year</option>
      {Array.from({ length: 2025 - 1950 + 1 }, (_, index) => {
        const year = 1950 + index;
        return (
          <option key={year} value={year} className="">
            {year}
          </option>
        );
      })}
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <ChevronDown />
    </div>
  </div>
            </div>


            <div>
  <label className="block text-sm text-gray-600 mb-1">Gender</label>
  <div className="relative">
    <select
      name="gender"
      value={formData.gender}
      onChange={handleChange}
      className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-200 appearance-none"
    >
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <ChevronDown />
    </div>
  </div>
</div>



<div>
  <label className="block text-sm text-gray-600 mb-1">Nationality</label>
  <div className="relative">
    <select
      name="nationality"
      value={formData.nationality}
      onChange={handleChange}
      className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-200 appearance-none"
    >
      <option value="">Select Nationality</option>
      <option value="Afghanistan">Afghanistan</option>
      <option value="Albania">Albania</option>
      <option value="Algeria">Algeria</option>
      <option value="Andorra">Andorra</option>
      <option value="Angola">Angola</option>
      <option value="Argentina">Argentina</option>
      <option value="Australia">Australia</option>
      <option value="Austria">Austria</option>
      <option value="Bangladesh">Bangladesh</option>
      <option value="Belgium">Belgium</option>
      <option value="Bhutan">Bhutan</option>
      <option value="Brazil">Brazil</option>
      <option value="Canada">Canada</option>
      <option value="China">China</option>
      <option value="Denmark">Denmark</option>
      <option value="Egypt">Egypt</option>
      <option value="Finland">Finland</option>
      <option value="France">France</option>
      <option value="Germany">Germany</option>
      <option value="India">India</option>
      <option value="Indonesia">Indonesia</option>
      <option value="Italy">Italy</option>
      <option value="Japan">Japan</option>
      <option value="Mexico">Mexico</option>
      <option value="Nepal">Nepal</option>
      <option value="Netherlands">Netherlands</option>
      <option value="New Zealand">New Zealand</option>
      <option value="Norway">Norway</option>
      <option value="Pakistan">Pakistan</option>
      <option value="Russia">Russia</option>
      <option value="Singapore">Singapore</option>
      <option value="South Africa">South Africa</option>
      <option value="Spain">Spain</option>
      <option value="Sri Lanka">Sri Lanka</option>
      <option value="Sweden">Sweden</option>
      <option value="Switzerland">Switzerland</option>
      <option value="United Kingdom">United Kingdom</option>
      <option value="United States">United States</option>
      <option value="Vietnam">Vietnam</option>
      {/* Add more countries if you want */}
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <ChevronDown />
    </div>
  </div>
</div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">State</label>
                <div className="relative">
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-200"
                  />
                 
                </div>
              </div>
            </div>

            

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-200"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-200"
              />
            </div>

<div>
      <label className="block text-sm text-gray-600 mb-1">Profile Picture</label>
      <div className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-200">
        <input type="file" onChange={handleFileChange} className="flex-1 text-gray-600" />
        
      </div>
    </div>
          </div>

            
          </div>

          
        </div>

        <div className="mb-10 flex items-center ">
          <div className="mb-2 mr-54">
            <h3 className="text-xl font-semibold" style={{ color: "#2d3748" }}>
              Interests
            </h3>
            <p className="text-sm text-gray-600">Provide your interests</p>
          </div>

          <div className="w-full relative flex items-center justify-center">
            <input
              type="text"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-200"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ChevronDown />
            </div>
          </div>
        </div>

        <div className="mb-10 flex justify-between">
  <div className="mb-2 mr-34">
    <h3 className="text-xl font-semibold" style={{ color: "#2d3748" }}>
      Profession
    </h3>
    <p className="text-sm text-gray-600">Provide your profession and experience</p>
  </div>

  <div className="space-y-4 w-full">
    {/* Profession Dropdown */}
    <div className="relative flex items-center justify-center">
      <select
        name="profession"
        value={formData.profession}
        onChange={handleChange}
        className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-200 appearance-none"
      >
        <option value="">Select Profession</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Data Scientist">Data Scientist</option>
        <option value="Doctor">Doctor</option>
        <option value="Teacher">Teacher</option>
        <option value="Business Analyst">Business Analyst</option>
        <option value="Lawyer">Lawyer</option>
        <option value="Designer">Designer</option>
        <option value="Marketing Manager">Marketing Manager</option>
        {/* Add more professions here if needed */}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <ChevronDown />
      </div>
    </div>

    {/* Experience Dropdown */}
    <div className="relative">
      <label className="block text-sm text-gray-600 mb-1">Experience</label>
      <div className="flex items-center justify-center">
        <select
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-200 appearance-none"
        >
          <option value="">Select Experience (in years)</option>
          <option value="1">1 year</option>
          <option value="2">2 years</option>
          <option value="3">3 years</option>
          <option value="5">5 years</option>
          <option value="7">7 years</option>
          <option value="10">10 years</option>
          <option value="15">15 years</option>
          <option value="20">20+ years</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <ChevronDown />
        </div>
      </div>
    </div>
  </div>
</div>


        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  )
}

export default PersonalSignUp
