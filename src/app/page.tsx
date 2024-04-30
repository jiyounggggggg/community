"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [messages, setMessages] = useState<{ id: number; text: string }[]>(
    [],
  );

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/messages")
      .then((res) => {
        console.log(res.data);
        setMessages(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Messages</h1>
        <ul>
          {messages.map((message) => (
            <li key={message.id}>{message.text}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
