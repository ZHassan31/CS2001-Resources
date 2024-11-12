import React, { useRef } from 'react';
import axios from 'axios';

export default function Registration() {
    // Use useRef to store references to each input field
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const repPasswordRef = useRef(null);
    const buyerRef = useRef(null);
    const sellerRef = useRef(null);
    const tosRef = useRef(null);

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Collecting values from the form fields
        const name = nameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value;
        const repPassword = repPasswordRef.current.value;
        const buyer = buyerRef.current.checked;
        const seller = sellerRef.current.checked;
        const tos = tosRef.current.checked;

        // Form validation logic
        if (!name || !email || !password || !repPassword || !tos) {
            alert("Please fill out all required fields.");
            return;
        }

        if (password !== repPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Sending data to the mock API
        try {
            const response = await axios.post('https://ca27703e-20a9-4063-b3e7-a83a0bf75136.mock.pstmn.io/api/users', {
                name,
                email,
                password,
                buyer,
                seller,
            });

            // Alert and log the response data on successful submission
            if (response.status === 201) {
                alert("Form submitted successfully!");
                console.log("API Response:", response.data);
            } else {
                alert("Failed to submit the form. Status: " + response.status);
            }
        } catch (error) {
            console.error("Error submitting form:", error.response?.data || error.message);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" ref={nameRef} placeholder="Enter your name" required maxLength="50" /><br /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" ref={emailRef} placeholder="Enter your email" required /><br /><br />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" ref={passwordRef} placeholder="Enter your password" required minLength="8" /><br /><br />

                <label htmlFor="repPassword">Re-type Password:</label>
                <input type="password" id="repPassword" ref={repPasswordRef} placeholder="Re-type your password" required minLength="8" /><br /><br />

                <input type="checkbox" id="buyer" ref={buyerRef} />
                <label htmlFor="buyer">I want to buy produce directly from allotment owners.</label><br />

                <input type="checkbox" id="seller" ref={sellerRef} />
                <label htmlFor="seller">I want to sell produce from my allotment.</label><br /><br />

                <input type="checkbox" id="tos" ref={tosRef} required />
                <label htmlFor="tos">I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.</label><br /><br />

                <input type="submit" value="Register" />
            </form>
        </div>
    );
}
