import React, { useState } from "react";
import { getContract } from "../utils/contract";

const BookSession = () => {
    const [tutor, setTutor] = useState("");
    const [student, setStudent] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");

    const bookSession = async () => {
        const contract = await getContract();
        if (contract) {
            await contract.bookSession(tutor, student, time, price);
            alert("Session booked successfully!");
        }
    };

    return (
        <div>
            <h2>Book a Session</h2>
            <input placeholder="Tutor Name" onChange={(e) => setTutor(e.target.value)} />
            <input placeholder="Student Name" onChange={(e) => setStudent(e.target.value)} />
            <input placeholder="Time" type="number" onChange={(e) => setTime(e.target.value)} />
            <input placeholder="Price" type="number" onChange={(e) => setPrice(e.target.value)} />
            <button onClick={bookSession}>Book</button>
        </div>
    );
};

export default BookSession;
