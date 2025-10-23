import React from 'react';
import Header from '../components/Header';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Header />
      <div className="w-full max-w-3xl mx-auto py-32 px-4 text-slate-800">
        <h1 className="text-4xl font-extrabold mb-6">Privacy Policy</h1>
        <div className="space-y-4 prose prose-lg">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Your privacy is important to us. It is TempDrop&apos;s policy to respect your privacy regarding any information we may collect from you across our website.
          </p>
          <h2 className="text-2xl font-bold">1. Information We Collect</h2>
          <p>
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. The only data we actively collect is the file you choose to upload. We do not collect personal data like your name, email, or IP address in our primary database.
          </p>
          <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
          <p>
            The files you upload are stored temporarily on our secure servers (provided by Supabase) for the sole purpose of being shared via the generated link. We do not access, view, or share your files. Files are automatically deleted after a set period (e.g., 24 hours), and the link becomes invalid.
          </p>
          <h2 className="text-2xl font-bold">3. Security</h2>
          <p>
            We take security seriously. Your files are uploaded over an encrypted connection (HTTPS). While we strive to use commercially acceptable means to protect your files, remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>
          <h2 className="text-2xl font-bold">4. Links to Other Sites</h2>
          <p>
            Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
          </p>
          <p>
            Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
