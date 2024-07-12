import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import { socialLinks } from "../constants";
import { Link } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  //Click/typing engaged
  const handleFocus = () => {
    setCurrentAnimation('walk');
  }
  //Click/typing disengaged
  const handleBlur = () => {
    setCurrentAnimation('idle');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Tamojit Das",
        from_email: form.email,
        to_email: 'tamojitdas181007@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);

      showAlert({
        show: true,
        text: "Message sent Successfully!😊",
        type: 'success'
      });

      setTimeout(() => { //clearing slate after 3 secs
        hideAlert();
        setCurrentAnimation('idle');
        setForm({ name: '', email: '', message: '' });
      }, [3000]);
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle');

      showAlert({
        show: true,
        text: "Error in sending message!😔",
        type: 'danger'
      });
      console.log(error);
    })
  }

  return (
    <section className="relative flex lg:flex-row flex-col max-container xl:h-[100vh] h-full">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit} ref={formRef}>
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your Name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter your Email"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Message
            <textarea
              name="message"
              className="textarea"
              rows={4}
              placeholder="Enter your Message. Let me know how can I help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="flex gap-2 mt-10 ml-2">
          {socialLinks.map((social) => (
            <Link
              to={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
              className="w-8 h-8 flex justify-center items-center"
            >
              <img
                src={social.iconUrl}
                alt={social.name}
                className="w-full h-full p-1"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75, /* Field of view */
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact