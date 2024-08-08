import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import LoadSpinner from './LoadSpinner';
import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import LoadingSpinner from '../components/LoadingSpinner';

const isValidEmail = (email) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };


const ApplicationForm = () => {
    // const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [firstNameError, setfirstNameError] = useState('');
    const [surnameError, setSurnameError] = useState('');
    const [emailAddressError, setEmailAddressError] = useState('');
    const [nationalIDTextError, setNationalIDTextError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [nationalityError, setNationalityError] = useState('');
    const [maritalStatusError, setMaritalStatusError] = useState('');
    const [dobError, setDobError] = useState('');
    const [experienceError, setExperienceError] = useState('');
    const [advertIdError, setAdvertIdError] = useState('');
    const [contactNumberError, setContactNumberError] = useState('');
    const [referral_name_1Error, setRefereeName1Error] = useState('');
    const [referral_email_1Error, setRefereeEmail1Error] = useState('');
    const [referral_contact_1Error, setRefereeContact1Error] = useState('');
    const [referral_name_2Error, setRefereeName2Error] = useState('');
    const [referral_email_2Error, setRefereeEmail2Error] = useState('');
    const [referral_contact_2Error, setRefereeContact2Error] = useState('');
    const [referral_name_3Error, setRefereeName3Error] = useState('');
    const [referral_email_3Error, setRefereeEmail3Error] = useState('');
    const [referral_contact_3Error, setRefereeContact3Error] = useState('');








    const [cvError, setCvError] = useState('');
    const [nationalIdError, setNationalIdError] = useState('');
    const [qualificationError, setQualificationError] = useState('');

  const [advertId, setAdvertId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [dob, setDob] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [experience, setExperience] = useState('');
  const [referral_name_1, setRefereeName1] = useState('');
  const [referral_email_1, setRefereeEmail1] = useState('');
  const [referral_contact_1, setRefereeContact1] = useState('');
  const [referral_name_2, setRefereeName2] = useState('');
  const [referral_email_2, setRefereeEmail2] = useState('');
  const [referral_contact_2, setRefereeContact2] = useState('');
  const [referral_name_3, setRefereeName3] = useState('');
  const [referral_email_3, setRefereeEmail3] = useState('');
  const [referral_contact_3, setRefereeContact3] = useState('');
  const [cvFile, setCVFile] = useState(null);
  const [nationalIDFile, setNationalIDFile] = useState(null);
  const [qualificationFile, setQualificationFile] = useState(null);



    const formSubmit = async (event) => {
        event.preventDefault();


        const formData = new FormData();
        formData.append('advert_id', advertId);
        formData.append('firstname', firstName);
        formData.append('surname', surname);
        formData.append('email_address', emailAddress);
        formData.append('national_id', nationalId);
        formData.append('gender', gender);
        formData.append('nationality', nationality);
        formData.append('marital_status', maritalStatus);
        formData.append('dob', dob);
        formData.append('contact_number', contactNumber);
        formData.append('experience', experience);
        // formData.append('document_cv', cvFile);
        // formData.append('document_national_id', nationalIDFile);
        // formData.append('document_qualification', qualificationFile);
        formData.append('referral_name_1', referral_name_1);
        formData.append('referral_name_2', referral_name_2);
        formData.append('referral_name_3', referral_name_3);
        formData.append('referral_email_1', referral_email_1);
        formData.append('referral_email_2', referral_email_2);
        formData.append('referral_email_3', referral_email_3);
        formData.append('referral_contact_1', referral_email_3);
        formData.append('referral_contact_2', referral_email_3);
        formData.append('referral_contact_3', referral_email_3);
        formData.append('document_cv', cvFile);
        formData.append('document_national_id', nationalIDFile);
        formData.append('document_qualification', qualificationFile);

        console.log(formData);
        // Log the individual key-value pairs to the console
        for (const [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        

        try {
            //Validations
            if (!firstName) {
                toast.error('First name is required');
                setfirstNameError('First name is required');
                return;
            }
            if (firstName.length < 2) {
                toast.error('First name must be at least 2 characters long');
                setfirstNameError('First name must be at least 2 characters long');
                return;
            }

            // Custom validation for surname
            if (!surname) {
                toast.error('Last name is required');
                setSurnameError('Last name is required');
                return;
            }
            if (surname.length < 2) {
                toast.error('Last name must be at least 2 characters long');
                setSurnameError('Last name must be at least 2 characters long');
                return;
            }

            if (!emailAddress) {
                toast.error('Email address is required');
                setEmailAddressError('Email address is required');
                return;
            }
            if (!isValidEmail(emailAddress)) {
                toast.error('Invalid email address');
                setEmailAddressError('Invalid email address');
                return;
            }
    
            // Custom validation for nationalId
            if (!nationalId) {
                toast.error('National ID is required');
                setNationalIDTextError('National ID is required');
                return;
            }
    
            // Custom validation for gender
            if (!gender) {
                toast.error('Gender is required');
                setGenderError('Gender is required');
                return;
            }
    
            // Custom validation for nationality
            if (!nationality) {
                toast.error('Nationality is required');
                setNationalityError('Nationality is required');
                return;
            }
    
            // Custom validation for maritalStatus
            if (!maritalStatus) {
                toast.error('Marital status is required');
                setMaritalStatusError('Marital status is required');
                return;
            }
    
            // Custom validation for dob
            if (!dob) {
                toast.error('Date of birth is required');
                setDobError('Date of birth is required');
                return;
            }

            // Custom validation for dob
            if (!experience) {
                toast.error('Number of job experience is required');
                setExperienceError('Number of job experience is required');
                return;
            }
    
            // Custom validation for contactNumber
            if (!contactNumber) {
                toast.error('Contact number is required');
                setContactNumberError('Contact number is required');
                return;
            }
            // if (!isValidContactNumber(contactNumber)) {
            //     toast.error('Invalid contact number');
            //     setContactNumberError('Invalid contact number');
            //     return;
            // }
    

            if (!referral_name_1) {
                toast.error('Referral name 1 is required');
                setRefereeName1Error('Referral name 1 is required');
                return;
              }
              if (!referral_email_1) {
                toast.error('Referral email 1 is required');
                setRefereeEmail1Error('Referral email 1 is required');
                return;
              }
              if (!referral_contact_1) {
                toast.error('Referral contact 1 is required');
                setRefereeContact1Error('Referral contact 1 is required');
                return;
              }
              if (!referral_name_2) {
                toast.error('Referral name 2 is required');
                setRefereeName2Error('Referral name 2 is required');
                return;
              }
              if (!referral_email_2) {
                toast.error('Referral email 2 is required');
                setRefereeEmail2Error('Referral email 2 is required');
                return;
              }
              if (!referral_contact_2) {
                toast.error('Referral contact 2 is required');
                setRefereeContact2Error('Referral contact 2 is required');
                return;
              }
              if (!referral_name_3) {
                toast.error('Referral name 3 is required');
                setRefereeName3Error('Referral name 3 is required');
                return;
              }
              if (!referral_email_3) {
                toast.error('Referral email 3 is required');
                setRefereeEmail3Error('Referral email 3 is required');
                return;
              }
              if (!referral_contact_3) {
                toast.error('Referral contact 3 is required');
                setRefereeContact3Error('Referral contact 3 is required');
                return;
              }

              if (!cvFile) {
                toast.error('CV file is required');
                setCvError('CV file is required');
                return;
              }

              if (!nationalIDFile) {
                toast.error('National ID file is required');
                setNationalIdError('National ID file is required');
                return;
              }

              if (!qualificationFile) {
                toast.error('Please provide Qualifications file');
                setQualificationError('Qualifications file is required');
                return;
              }

          setIsLoading(true);

          
          const response = await axios.post('https://hrm.msu.ac.zw/api/v2/application-form', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

          if (response.status === 200) {
            // Form submission successful
            setAdvertId('');
            setFirstName('');
            setSurname('');
            setEmailAddress('');
            setNationalId('');
            setGender('');
            setNationality('');
            setMaritalStatus('');
            setDob('');
            setContactNumber('');
            setExperience('');
            setRefereeName1('');
            setRefereeName2('');
            setRefereeName3('');
            setRefereeEmail1('');
            setRefereeEmail2('');
            setRefereeEmail3('');
            setCVFile(null);
            console.log('Form submitted successfully');
            console.log(formData);
            setIsLoading(false);
            navigate(`/`);
          } else {
            // Form submission failed
            console.error('Form submission failed');
            setIsLoading(false);
          }   
        } catch (error) {
          console.error('An error occurred while submitting the form:', error);
          toast.error('NOTE: Fill all the fields !');
          
          setIsLoading(false);
        }

        // navigate(`/`);
      };


      const handleCVFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          if (file.size > 5 * 1024 * 1024) {
            setCvError('File size exceeds the maximum limit of 5 MB.');
          } else {
            setCvError('');
            setCVFile(file);
            console.log('CV file selected:', file.name);
          }
        }
      };

      const handleNationalIDFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          if (file.size > 5 * 1024 * 1024) {
            setNationalIdError('File size exceeds the maximum limit of 5 MB.');
          } else {
            setNationalIdError('');
            setNationalIDFile(file);
          }
        }
      };

      const handleQualificationFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          if (file.size > 10 * 1024 * 1024) {
            setQualificationError('File size exceeds the maximum limit of 10 MB.');
          } else {
            setQualificationError('');
            setQualificationFile(file);
          }
        }
      };


  return (
    <div className='bg-gray-100'>
        <form onSubmit={formSubmit} className='flex justify-center'>
        <div className=' rounded-sm shadow-md mt-8 mb-12 py-4 px-8 bg-white'>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className='text-4xl mt-3 font-bold text-blue-600 uppercase'>Application Form</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Please fill in below information inorder to apply.
          </p>
          </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base text-xl font-bold leading-7 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {/* {errors['firstName'] && (
                <span className="text-red-500">{errors['firstName']}</span>
                )} */}
            {firstNameError && <span className="text-red-500">{firstNameError}</span>}


              </div>
            </div>



            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  value={surname}
          onChange={(e) => setSurname(e.target.value)}
                  
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            {surnameError && <span className="text-red-500">{surnameError}</span>}
                
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email_address"
                  type="email"
                  autoComplete="email"
                  value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            {emailAddressError && <span className="text-red-500">{emailAddressError}</span>}

              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="id" className="block text-sm font-medium leading-6 text-gray-900">
                National ID
              </label>
              <div className="mt-2">
                <input
                  id="nationalid"
                  name="nationalid"
                  type="text"
                  autoComplete="text"
                  value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            {nationalIDTextError && <span className="text-red-500">{nationalIDTextError}</span>}

              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender-name"
                  value={gender}
          onChange={(e) => setGender(e.target.value)}

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
            {genderError && <span className="text-red-500">{genderError}</span>}

              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Nationality
              </label>
              <div className="mt-2">
                <select
                  id="nationality"
                  name="nationality"
                  autoComplete="country-name"
                  value={nationality}
          onChange={(e) => setNationality(e.target.value)}

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Zimbabwean</option>
                  <option>South Africa</option>
                  <option>Botswana</option>
                  <option>Kenya</option>
                  <option>Malawi</option>
                </select>
                {nationalityError && <span className="text-red-500">{nationalityError}</span>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                Marital Status
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender-name"
                  value={maritalStatus}
                  

          onChange={(e) => setMaritalStatus(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select Marital Status</option>
                  <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                </select>
                {maritalStatusError && <span className="text-red-500">{maritalStatusError}</span>}
              </div>
            </div>

            <div className="flex flex-col mt-4">
                <label for="dob" className="text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input id="dob"
                 type="date"
                  min="1958-01-01" max="2006-12-31"
                  value={dob}
          onChange={(e) => setDob(e.target.value)}

                 className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                </div>

                <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Number of Experience
              </label>
              <div className="mt-2">
                <input
                  id="experience"
                  name="experience"
                  type="text"
                  autoComplete="text"
                  placeholder='enter number of job experience..'
                  value={experience}
          onChange={(e) => setExperience(e.target.value)}
          

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {experienceError && <span className="text-red-500">{experienceError}</span>}
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="advert_id" className="block text-sm font-medium leading-6 text-gray-900">
                Advert_Id
              </label>
              <div className="mt-2">
                <input
                  id="experience"
                  name="experience"
                  type="number"
                  autoComplete="text"
                  placeholder='enter number of job experience..'
                  value={advertId}
          onChange={(e) => setAdvertId(e.target.value)}
          

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>



            <div className="col-span-full">

            </div>

            <div className="sm:col-span-2 sm:col-start-1">

            </div>

            <div className="sm:col-span-2">

            </div>

            <div className="sm:col-span-2">

            </div>
          </div>
        </div>


        <h2 className="text-base text-xl font-bold leading-7 text-gray-900">Contact Information</h2>
        <div className="">
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                Contact Type
              </label>
              <div className="mt-2">
                <select
                  id="contact-type"
                  name="contact-type"
                  autoComplete="contact-type"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Select Contact Type</option>
                  <option>Cell Number</option>
                  <option>Telephone</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                Enter Contact
              </label>
              <div className="mt-2">

                <input
                  id="contact"
                  name="contact"
                  type="number"
                  autoComplete="text"
                  value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {contactNumberError && <span className="text-red-500">{contactNumberError}</span>}
              </div>
            </div>


        <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base text-xl font-bold leading-7 text-gray-900">Referees</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
            NB: Enter any three Referees below
          </p>
          <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
        <div className="sm:col-span-2 mt-2">
            <label htmlFor="referral_name_1" className="block text-sm font-medium leading-6 text-gray-900">
            Referee Name 1
            </label>
            <input
            type="text"
            name="referral_name_1"
            id="referral_name_1"
            autoComplete="text"
            value={referral_name_1}
            onChange={(e) => setRefereeName1(e.target.value)}
            
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {referral_name_1Error && <span className="text-red-500">{referral_name_1Error}</span>}
        </div>
    <div className="sm:col-span-2 mt-2">
        <label htmlFor="referral_email_1" className="block text-sm font-medium leading-6 text-gray-900">
        Email
        </label>
        <input
        type="email"
        name="referral_email_1"
        id="referral_email_1"
        autoComplete="given-referral_email_1"
        value={referral_email_1}
        onChange={(e) => setRefereeEmail1(e.target.value)}

        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {referral_email_1Error && <span className="text-red-500">{referral_email_1Error}</span>}
    </div>
    <div className="sm:col-span-2 mt-2">
        <label htmlFor="referral_email_1" className="block text-sm font-medium leading-6 text-gray-900">
        Contact Number
        </label>
        <input
        type="number"
        name="refferal_contact_1"
        id="refferal_contact_1"
        autoComplete="given-referral_contact_1"
        value={referral_contact_1}
        onChange={(e) => setRefereeContact1(e.target.value)}

        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {referral_contact_1Error && <span className="text-red-500">{referral_contact_1Error}</span>}
    </div>

  <div className="sm:col-span-2 mt-2">
    <label htmlFor="referral_name_2" className="block text-sm font-medium leading-6 text-gray-900">
      Referee Name 2
    </label>
    <input
      type="text"
      name="referral_name_2"
      id="referral_name_2"
      autoComplete="text"
      value={referral_name_2}
      onChange={(e) => setRefereeName2(e.target.value)}

      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    {referral_name_2Error && <span className="text-red-500">{referral_name_2Error}</span>}
  </div>
  <div className="sm:col-span-2 mt-2">
    <label htmlFor="referral_email_2" className="block text-sm font-medium leading-6 text-gray-900">
      Email
    </label>
    <input
      type="email"
      name="referral_email_2"
      id="referral_email_2"
      autoComplete="given-referral_email_2"
      value={referral_email_2}
      onChange={(e) => setRefereeEmail2(e.target.value)}

      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    {referral_email_2Error && <span className="text-red-500">{referral_email_2Error}</span>}
  </div>
  <div className="sm:col-span-2 mt-2">
        <label htmlFor="referral_email_2" className="block text-sm font-medium leading-6 text-gray-900">
        Contact Number
        </label>
        <input
        type="number"
        name="refferal_contact_2"
        id="refferal_contact_2"
        autoComplete="given-referral_contact_2"
        value={referral_contact_2}
        onChange={(e) => setRefereeContact2(e.target.value)}

        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {referral_contact_2Error && <span className="text-red-500">{referral_contact_2Error}</span>}
    </div>
  <div className="sm:col-span-2 mt-2">
    <label htmlFor="referral_name_3" className="block text-sm font-medium leading-6 text-gray-900">
      Referee Name 3
    </label>
    <input
      type="text"
      name="referral_name_3"
      id="referral_name_3"
      autoComplete="text"
      value={referral_name_3}
      onChange={(e) => setRefereeName3(e.target.value)}

      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    {referral_name_3Error && <span className="text-red-500">{referral_name_3Error}</span>}
  </div>
  <div className="sm:col-span-2 mt-2">
    <label htmlFor="referral_email_3" className="block text-sm font-medium leading-6 text-gray-900">
      Email
    </label>
    <input
      type="email"
      name="referral_email_3"
      id="referral_email_3"
      autoComplete="given-referral_email_3"
      value={referral_email_3}
      onChange={(e) => setRefereeEmail3(e.target.value)}
      
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
    {referral_email_3Error && <span className="text-red-500">{referral_email_3Error}</span>}
  </div>
  <div className="sm:col-span-2 mt-2">
        <label htmlFor="referral_contact_3" className="block text-sm font-medium leading-6 text-gray-900">
        Contact Number
        </label>
        <input
        type="number"
        name="refferal_contact_3"
        id="refferal_contact_3"
        autoComplete="given-referral_contact_3"
        value={referral_contact_3}
        onChange={(e) => setRefereeContact3(e.target.value)}

        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {referral_contact_3Error && <span className="text-red-500">{referral_contact_3Error}</span>}
    </div>
</div>
        </div>


        <h2 className="text-base text-xl font-bold leading-7 text-gray-900">Uploads</h2>
        <div>
        <label className="block text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload CV</label>
        <input
        onChange={handleCVFileChange}

        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept="application/pdf"/>
        {cvError && <span className="text-red-500">{cvError}</span>}
        </div>
        <div>
        <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">National ID</label>
        <input
            onChange={handleNationalIDFileChange}

        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept="application/pdf"/>
        {nationalIdError && <span className="text-red-500">{nationalIdError}</span>}
        </div>

        <div>
        <label
        className="block mb-2 text-sm font-bold text-red-600 dark:text-white uppercase" for="file_input">NB: upload all qualifications in a single pdf file</label>
        <input
        onChange={handleQualificationFileChange}

        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept="application/pdf"/>
        {qualificationError && <span className="text-red-500">{qualificationError}</span>}
        </div>

        <div className="border-b border-gray-900/10 pb-12">


          <div className="mt-10 space-y-10">


          </div>
        </div>
      </div>



      <div className="mt-6 flex items-center justify-end gap-x-6">

        <button
          type="submit"
          className="flex rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Submit
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
        </svg>
        </button>
      </div>
      </div>
    </form>
    {isLoading && <LoadingSpinner/>}

    </div>
  );
};




export default ApplicationForm;