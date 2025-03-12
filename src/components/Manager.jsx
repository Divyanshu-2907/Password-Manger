import React, { useState, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Eye, EyeOff, Copy } from "lucide-react"; // Icons

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [passwords, setPasswords] = useState([]); // Stores saved passwords
  const passwordRef = useRef(null);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Save password to state
  const savePassword = (e) => {
    e.preventDefault();
    if (!form.site || !form.username || !form.password) return;

    setPasswords([...passwords, form]); // Add new password to list
    setForm({ site: "", username: "", password: "" }); // Reset form
  };

  // Copy password to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Password copied!");
  };

  return (
    <div className="mycontainer">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center text-green-500 drop-shadow-md">
        &lt;PassOP/&gt;
      </h1>
      <p className="text-center text-gray-400 mt-2">Securely store your passwords</p>

      {/* Form Card */}
      <Card className="mt-6 shadow-lg rounded-xl bg-gray-800 text-white">
        <CardContent className="p-6 space-y-5">
          {/* Password Manager Form */}
          <form onSubmit={savePassword} className="space-y-4">
            <Input
              value={form.site}
              onChange={handleChange}
              placeholder="Website URL"
              name="site"
              className="bg-gray-700 text-white placeholder-gray-400"
              required
            />
            <Input
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              name="username"
              className="bg-gray-700 text-white placeholder-gray-400"
              required
            />

            {/* Password Input with Toggle Icon */}
            <div className="relative">
              <Input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="bg-gray-700 text-white placeholder-gray-400 pr-10"
                required
              />
              <span
                className="absolute right-3 top-2.5 cursor-pointer text-gray-400 hover:text-gray-200 transition"
                onClick={toggleShowPassword}
              >
                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
              </span>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 transition font-semibold">
              Add Password
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Saved Passwords Section */}
      {passwords.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-300">Saved Passwords</h2>
          <div className="space-y-4 mt-3">
            {passwords.map((item, index) => (
              <Card key={index} className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <div>
                  <p className="text-green-400 font-semibold">{item.site}</p>
                  <p className="text-sm text-gray-400">{item.username}</p>
                  <p className="text-sm text-gray-400">
                    {item.password.replace(/./g, "•")} {/* Hide password */}
                  </p>
                </div>
                <Button
                  className="bg-gray-600 hover:bg-gray-500 p-2 rounded-full"
                  onClick={() => copyToClipboard(item.password)}
                >
                  <Copy size={18} />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Manager;
