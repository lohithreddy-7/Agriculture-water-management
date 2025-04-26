import React, { useState } from "react";
import { sendContactEmail } from "../services/api";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await sendContactEmail(formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      console.error("Error sending message:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
      <div className="mb-6 space-y-2">
        <p className="text-gray-600 flex items-center gap-2">
          <span className="font-semibold">Developer:</span> Lohith Reddy
        </p>
        <p className="text-gray-600 flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <a
            href="mailto:lohithreddyg2004@gmail.com"
            className="text-blue-600 hover:text-blue-800"
          >
            lohithreddyg2004@gmail.com
          </a>
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 flex items-center gap-1"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg h-32"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600">
            Message sent successfully! We'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600">
            Failed to send message. Please try again or email us directly.
          </p>
        )}
      </form>
    </div>
  );
}
