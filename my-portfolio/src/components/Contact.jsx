import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Message sent successfully ✅");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message ❌");
      }
    } catch (err) {
      alert("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl text-center mb-10">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 bg-gray-800 rounded"
          required
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 bg-gray-800 rounded"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 bg-gray-800 rounded"
          required
        />

        <button
          disabled={loading}
          className="w-full p-3 bg-blue-600 rounded hover:bg-blue-700"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
