import { Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react';


function App() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [dob, setDob] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')
  const [course, setCourse] = useState('');


  const [isFirstnameInvalid, setIsFirstnameInvalid] = useState(false)
  const [isLastnameInvalid, setIsLastnameInvalid] = useState(false)
  const [isEmailInvalid, setIsEmailInvalid] = useState(false)
  const [isMobileInvalid, setIsMobileInvalid] = useState(false)


  const validate = (inputTag) => {
    const { name, value } = inputTag
    if (name == 'firstname') {
      setFirstname(value);
      value.match(/^[a-zA-Z\s]+$/) ? setIsFirstnameInvalid(false) : setIsFirstnameInvalid(true)
    } else if (name == 'lastname') {
      setLastname(value);
      value.match(/^[a-zA-Z\s]+$/) ? setIsLastnameInvalid(false) : setIsLastnameInvalid(true)
    } else if (name == 'email') {
      setEmail(value);
      value.match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/) ? setIsEmailInvalid(false) : setIsEmailInvalid(true)
    } else if (name == 'mobile') {
      setMobile(value);
      value.match(/^\d{10}$/) ? setIsMobileInvalid(false) : setIsMobileInvalid(true)
    }
  }


  const handleRegister = (e) => {
    e.preventDefault()
    if (firstname && lastname && dob && email && mobile && gender && address && course) {
      alert(`Registered Successfully \n 
        Name : ${firstname + ' ' + lastname} \n 
        Date of Birth : ${dob} \n 
        E-mail : ${email} \n
        Mobile : ${mobile} \n 
        Gender : ${gender} \n 
        Address : ${address} \n 
        Course : ${course}`)
    } else {
      alert(`Please fill the form completely`)
    }
  }


  const handleReset = () => {
    setFirstname('')
    setLastname('')
    setDob('')
    setEmail('')
    setMobile('')
    setGender('')
    setAddress('')
    setCourse('')
    setIsFirstnameInvalid(false)
    setIsLastnameInvalid(false)
    setIsEmailInvalid(false)
    setIsMobileInvalid(false)
  };


  return (
    <>
      <div className="container-fluid " style={{ backgroundColor: 'whitesmoke' }}>
        <div className="row py-4" style={{ minHeight: '100vh' }}>
          <div className="col-md-3"></div>
          <div className="col-md-6 border rounded" style={{ backgroundColor: 'white' }}>
            <h4 className='text-center text-success mt-4' >Registration Form</h4>
            <form className='py-3 px-5'>

              {/* first name & lastname */}
              <div className="mb-3 d-flex">
                <div className="w-100">
                  <TextField
                    id="outlined-basic"
                    name='firstname'
                    value={firstname}
                    color="success"
                    label="Firstname"
                    variant="outlined"
                    style={{ width: '100%' }}
                    onChange={(e) => validate(e.target)}
                  />
                  {isFirstnameInvalid &&
                    <p className='text-danger'>*Invalid Input</p>
                  }
                </div>

                <div className="w-100 ms-3">
                  <TextField id="outlined-basic"
                    name='lastname'
                    value={lastname}
                    color="success"
                    label="Lastname"
                    variant="outlined"
                    style={{ width: '100%' }}
                    onChange={(e) => validate(e.target)}
                  />
                  {isLastnameInvalid &&
                    <p className='text-danger'>*Invalid Input</p>
                  }
                </div>
              </div>


              {/* email & mobile */}
              <div className="mb-3 d-flex">
                <div className="w-100">
                  <TextField id="outlined-basic"
                    name='email'
                    value={email}
                    color='success'
                    label="Email"
                    variant="outlined"
                    style={{ width: '100%' }}
                    onChange={(e) => validate(e.target)}
                  />
                  {isEmailInvalid &&
                    <p className='text-danger'>*Invalid Input</p>
                  }
                </div>

                <div className="w-100 ms-3">
                  <TextField id="outlined-basic"
                    name='mobile'
                    value={mobile}
                    color='success'
                    label="Mobile Number"
                    variant="outlined"
                    style={{ width: '100%' }}
                    onChange={(e) => validate(e.target)}
                  />
                  {isMobileInvalid &&
                    <p className='text-danger'>*Invalid Input</p>
                  }
                </div>
              </div>


              {/* gender */}
              <div className='w-100'>
                <FormLabel className="mb-2">Gender</FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="gender"
                  value={gender}
                  onChange={e => setGender(e.target.value)}
                >
                  <div className='d-flex  flex-column flex-md-row'>
                    <FormControlLabel value="female" control={<Radio color='success' />} label="Female" />
                    <FormControlLabel value="male" control={<Radio color='success' />} label="Male" />
                    <FormControlLabel value="other" control={<Radio color='success' />} label="Other" />
                  </div>
                </RadioGroup>
              </div>


              {/* DOB */}
              <div className='w-100 mt-3'>
                <FormLabel className=" mb-2">Date of Birth</FormLabel>
                <TextField id="outlined-basic"
                  name='dob'
                  value={dob}
                  type='date'
                  color="success"
                  variant="outlined"
                  style={{ width: '100%' }}
                  onChange={e => setDob(e.target.value)}
                />
              </div>


              {/* address */}
              <div className="w-100 mt-3">
                <TextField id="outlined-basic"
                  name='address'
                  value={address}
                  label="Address"
                  variant="outlined"
                  color='success'
                  style={{ width: '100%' }}
                  onChange={e => setAddress(e.target.value)} />
              </div>


              {/* Course */}
              <FormControl className="mt-3 w-100">
                <InputLabel id="demo-simple-select-label">Course</InputLabel>
                <Select labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={course}
                  name='course'
                  label="Course"
                  onChange={e => setCourse(e.target.value)}
                  className='w-100'
                >
                  <MenuItem value="" disabled>Select Course</MenuItem>
                  <MenuItem value="biology">Biology</MenuItem>n
                  <MenuItem value="computer-science">Computer Science</MenuItem>
                  <MenuItem value="commerce">Commerce</MenuItem>
                  <MenuItem value="humanities">Humanities</MenuItem>
                </Select>
              </FormControl>


              {/* Buttons */}
              <Stack spacing={2} direction="row" className="mb-5 mt-3">
                <Button type='submit'
                  variant="contained"
                  color='success'
                  className='w-50'
                  style={{ width: '25%', height: '50px' }}
                  onClick={handleRegister}>Register</Button>

                <Button variant="outlined"
                  color='error'
                  className='w-50'
                  style={{ width: '25%', height: '50px' }}
                  onClick={handleReset}>Reset</Button>
              </Stack>

            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  )
}

export default App