import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-blue-50 p-6 rounded-xl mb-8">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600">
          Get in touch with us for any queries or suggestions.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-md">
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <img
                src="https://avatars.githubusercontent.com/u/your-username"
                alt="Profile"
                className="w-14 h-14 rounded-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Lohith Reddy</h3>
              <p className="text-gray-600">Full Stack Developer</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="flex items-center gap-2 text-gray-700">
              <Mail className="h-5 w-5 text-blue-500" />
              <a
                href="mailto:lohithreddyg2004@gmail.com"
                className="hover:text-blue-600"
              >
                lohithreddyg2004@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <Github className="h-5 w-5" />
              <a
                href="https://github.com/lohithreddy7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                GitHub Profile
              </a>
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <Linkedin className="h-5 w-5 text-blue-600" />
              <a
                href="https://linkedin.com/in/gaddam-lohith-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
        </div>

        <div className="border-t pt-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
