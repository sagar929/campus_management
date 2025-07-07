import React from 'react';

const ContactUs = () => {
  const contacts = [
    { role: 'Warden (Boys Hostel)', phone: '+91-9876543210' },
    { role: 'Warden (Girls Hostel)', phone: '+91-9876543211' },
    { role: 'Electrician', phone: '+91-9876543212' },
    { role: 'Plumber', phone: '+91-9876543213' },
    { role: 'Nursing Assistance', phone: '+91-9876543214' },
    { role: 'Room Cleaner', phone: '+91-9876543215' },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-900">Contact Us</h2>
      <ul className="space-y-4">
        {contacts.map((contact, index) => (
          <li key={index} className="flex justify-between border-b pb-2">
            <span className="font-medium">{contact.role}</span>
            <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline">{contact.phone}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactUs;
