
import React from 'react';
import Header from '../components/Header';

const TermsOfServicePage = () => {
  return (
    <>
      <Header />
      <div className="w-full max-w-3xl mx-auto py-32 px-4 text-slate-800">
        <h1 className="text-4xl font-extrabold mb-6">Terms of Service</h1>
        <div className="space-y-4 prose prose-lg">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            By accessing and using TempDrop, you agree to be bound by these terms of service.
          </p>
          <h2 className="text-2xl font-bold">1. Use of Service</h2>
          <p>
            TempDrop is provided to you for free for the purpose of temporary file sharing. You are responsible for the content of the files you upload. You agree not to use the service to upload any files that are illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable. This includes, but is not limited to, copyrighted material for which you do not have the rights to distribute.
          </p>
          <h2 className="text-2xl font-bold">2. File Retention and Deletion</h2>
          <p>
            All files uploaded to TempDrop are temporary. We reserve the right to delete any file at any time, for any reason, without notice. Typically, files are automatically deleted after a short period (e.g., 24 hours). We are not a file storage service; do not use TempDrop as a backup solution.
          </p>
          <h2 className="text-2xl font-bold">3. Disclaimer of Warranties</h2>
          <p>
            The service is provided &quot;as is&quot;. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <h2 className="text-2xl font-bold">4. Limitation of Liability</h2>
          <p>
            In no event shall TempDrop or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TempDrop&apos;s website, even if TempDrop or a TempDrop authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
          <h2 className="text-2xl font-bold">5. Changes to Terms</h2>
          <p>
            We may revise these terms of service for our website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage;
