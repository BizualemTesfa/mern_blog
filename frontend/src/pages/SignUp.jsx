import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange=(e)=>{
    setFormData({...formData, [e.target.id]: e.target.value.trim});
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage('please fillout all fields!');
    }
    try{
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.sucess === false){
      return setErrorMessage(data.message);
      }
    }
    catch(error){
      console.log(error);
      
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
        <Link to="/" className='sm:text-xl font-bold dark:text-white text-4xl'> 
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Biruh`s </span>Blog
        </Link>
        <p className="text-sm mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, incidunt voluptas. Obcaecati numquam ut ea quibusdam sequi. Exercitationem culpa dolorem dolore temporibus animi in, assumenda quasi eligendi eveniet repudiandae sed!
        </p>
        </div>
        {/* right */}
        <div className="flx-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
             <Label value="Your username" />
             <TextInput type="text" placeholder="Username" id="username" onChange={handleChange}/>
            </div>
            <div>
             <Label value="Your email" />
             <TextInput type="email" placeholder="name@gmail.com" id="email" onChange={handleChange}/>
            </div>
            <div>
             <Label value="Your password"  />
             <TextInput type="password" placeholder="password" id="password"  onChange={handleChange}/>
            </div>
            <Button type="submit" className="bg-blue-500">SignUp</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to= '/</div>sign-in' className="text-blue-500">SignIn</Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-5" color='failure'>{errorMessage}</Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}
