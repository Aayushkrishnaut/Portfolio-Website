import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="https://formsubmit.co/aayushmyadav@gmail.com" method="POST">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input type="hidden" name="_subject" value="New contact form submission" />
        <input type="hidden" name="_captcha" value="false" />
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;


// import styles from './ContactStyles.module.css';

// function Contact() {
//   return (
//     <section id="contact" className={styles.container}>
//       <h1 className="sectionTitle">Contact</h1>
//       <form action="">
//         <div className="formGroup">
//           <label htmlFor="name" hidden>
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             placeholder="Name"
//             required
//           />
//         </div>
//         <div className="formGroup">
//           <label htmlFor="email" hidden>
//             Email
//           </label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             placeholder="Email"
//             required
//           />
//         </div>
//         <div className="formGroup">
//           <label htmlFor="message" hidden>
//             Message
//           </label>
//           <textarea
//             name="message"
//             id="message"
//             placeholder="Message"
//             required></textarea>
//         </div>
//         <input className="hover btn" type="submit" value="Submit" />
//       </form>
//     </section>
//   );
// }

// export default Contact;



// // import React, { useState } from 'react';
// // import styles from './ContactStyles.module.css';

// // function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     message: ''
// //   });
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitMessage, setSubmitMessage] = useState('');

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prevState => ({
// //       ...prevState,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     setSubmitMessage('');

// //     try {
// //       const response = await fetch('/api/send-email', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           ...formData,
// //           to: 'aayushmyadav@gmail.com'
// //         }),
// //       });

// //       if (response.ok) {
// //         setSubmitMessage('Message sent successfully!');
// //         setFormData({ name: '', email: '', message: '' });
// //       } else {
// //         setSubmitMessage('Failed to send message. Please try again.');
// //       }
// //     } catch (error) {
// //       setSubmitMessage('An error occurred. Please try again later.');
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <section id="contact" className={styles.container}>
// //       <h1 className="sectionTitle">Contact</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div className="formGroup">
// //           <label htmlFor="name" hidden>Name</label>
// //           <input
// //             type="text"
// //             name="name"
// //             id="name"
// //             placeholder="Name"
// //             required
// //             value={formData.name}
// //             onChange={handleChange}
// //           />
// //         </div>
// //         <div className="formGroup">
// //           <label htmlFor="email" hidden>Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             id="email"
// //             placeholder="Email"
// //             required
// //             value={formData.email}
// //             onChange={handleChange}
// //           />
// //         </div>
// //         <div className="formGroup">
// //           <label htmlFor="message" hidden>Message</label>
// //           <textarea
// //             name="message"
// //             id="message"
// //             placeholder="Message"
// //             required
// //             value={formData.message}
// //             onChange={handleChange}
// //           ></textarea>
// //         </div>
// //         <input 
// //           className="hover btn" 
// //           type="submit" 
// //           value={isSubmitting ? "Sending..." : "Submit"}
// //           disabled={isSubmitting}
// //         />
// //       </form>
// //       {submitMessage && <p>{submitMessage}</p>}
// //     </section>
// //   );
// // }

// // export default Contact;
