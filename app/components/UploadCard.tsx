/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';
import useCopyToClipboard from '../hooks/useCopyToClipboard';
import { UploadCloudIcon, FileIcon, CopyIcon, CheckIcon, LinkIcon } from './icons';

type UploadStatus = 'idle' | 'selected' | 'uploading' | 'success' | 'error';

const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const FileInfo: React.FC<{ file: File }> = ({ file }) => (
    <div className="w-full flex items-center gap-4 bg-slate-100 p-4 rounded-lg">
        <FileIcon className="w-10 h-10 text-slate-500 flex-shrink-0" />
        <div className="overflow-hidden">
            <p className="font-medium text-slate-800 truncate">{file.name}</p>
            <p className="text-sm text-slate-500">{formatBytes(file.size)}</p>
        </div>
    </div>
);

const UploadSuccess: React.FC<{ url: string; onReset: () => void }> = ({ url, onReset }) => {
    const [isCopied, copy] = useCopyToClipboard();
    return (
        <div className="w-full text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckIcon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Upload Successful!</h3>
            <p className="text-slate-600">Your file is ready to be shared.</p>
            <div className="w-full flex items-center bg-slate-100 rounded-lg p-2 border border-slate-200">
                <LinkIcon className="w-5 h-5 text-slate-400 mx-2"/>
                <input
                    type="text"
                    value={url}
                    readOnly
                    className="flex-grow bg-transparent outline-none text-slate-700 text-sm"
                />
                <button
                    onClick={() => copy(url)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800 text-white font-semibold text-sm hover:bg-slate-700 transition-colors"
                >
                    {isCopied ? <CheckIcon className="w-4 h-4"/> : <CopyIcon className="w-4 h-4"/>}
                    {isCopied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <button
                onClick={onReset}
                className="w-full mt-2 px-4 py-2.5 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
                Upload Another File
            </button>
        </div>
    );
};


const UploadCard: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<UploadStatus>('idle');
    const [progress, setProgress] = useState(0);
    const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleReset = () => {
        setFile(null);
        setStatus('idle');
        setProgress(0);
        setUploadedUrl(null);
        setError(null);
    };
    
    const handleFileChange = (selectedFile: File | null | undefined) => {
        if (selectedFile) {
            setFile(selectedFile);
            setStatus('selected');
        }
    };

    const handleDragEvents = (e: React.DragEvent<HTMLDivElement>, dragging: boolean) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(dragging);
    };
    
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        handleDragEvents(e, false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFileChange(e.dataTransfer.files[0]);
            e.dataTransfer.clearData();
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        setStatus('uploading');
        setProgress(0);
        setError(null);
        
        // --- SIMULATED UPLOAD ---
        // This is a simulated upload to allow the UI to be tested without Supabase credentials.
        // The original Supabase logic has been commented out below.
        // Once you have configured your credentials in `.env.local`,
        // you can restore the original logic.
        try {
            await new Promise<void>((resolve) => {
                let currentProgress = 0;
                const interval = setInterval(() => {
                    currentProgress += 10;
                    if (currentProgress >= 100) {
                        clearInterval(interval);
                        setProgress(100);
                        setUploadedUrl(`https://example.com/shared/${Date.now()}-${file.name.replace(/\s/g, '_')}`);
                        setStatus('success');
                        resolve();
                    } else {
                        setProgress(currentProgress);
                    }
                }, 150); // Simulates a ~1.5 second upload
            });
        } catch (err: unknown) {
            setError('Simulated upload failed.');
            setStatus('error');
        }
        // --- ORIGINAL SUPABASE UPLOAD LOGIC ---
        // 1. Uncomment this block.
        // 2. Add `import { supabase } from '../services/supabaseClient';` to the top of the file.
        // 3. Ensure your .env.local file has your real credentials.
        
        const filePath = `${Date.now()}-${file.name.replace(/\s/g, '_')}`;

        try {
            // Simulating progress as Supabase v2 upload doesn't have a built-in progress event
            let currentProgress = 0;
            const interval = setInterval(() => {
                currentProgress += 10;
                if (currentProgress >= 90) {
                    clearInterval(interval);
                } else {
                    setProgress(currentProgress);
                }
            }, 150);
            
            const { error: uploadError } = await supabase.storage
                .from('tempDrop_buckets') // replace with your bucket name
                .upload(filePath, file, {
                    cacheControl: '3600',
                    upsert: false,
                });

            clearInterval(interval);

            if (uploadError) {
                throw uploadError;
            }

            const { data: signedUrlData, error: signedUrlError } =
                await supabase.storage
                    .from('tempDrop_buckets') // replace with your bucket name
                    .createSignedUrl(filePath, 3600); // URL expires in 1 hour

            if (signedUrlError) {
                throw signedUrlError;
            }
            
            setProgress(100);
            setUploadedUrl(signedUrlData.signedUrl);
            setStatus('success');

        } catch (err: any) {
            setError(err.message || 'An unknown error occurred.');
            setStatus('error');
        }
    };

    const renderContent = () => {
        switch (status) {
            case 'success':
                return uploadedUrl && <UploadSuccess url={uploadedUrl} onReset={handleReset} />;
            case 'uploading':
            case 'selected':
                return (
                    <>
                        {file && <FileInfo file={file} />}
                        {status === 'uploading' && (
                            <div className="w-full">
                                <div className="w-full bg-slate-200 rounded-full h-2.5">
                                    <div 
                                        className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300" 
                                        style={{ width: `${progress}%` }}>
                                    </div>
                                </div>
                                <p className="text-center text-sm text-slate-500 mt-2">{progress}% Uploaded</p>
                            </div>
                        )}
                         {status === 'selected' && <button
                            onClick={handleUpload}
                            className="w-full px-4 py-2.5 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition-colors"
                        >
                            Upload File
                        </button>}
                         <button
                            onClick={handleReset}
                            className="text-sm text-slate-500 hover:text-slate-700"
                            disabled={status === 'uploading'}
                         >
                            Cancel
                         </button>
                    </>
                );
            case 'error':
                 return (
                    <div className="w-full text-center flex flex-col items-center gap-4">
                        <p className="font-medium text-red-600 bg-red-100 p-3 rounded-lg">Error: {error}</p>
                        <button
                            onClick={handleReset}
                            className="w-full mt-2 px-4 py-2.5 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-700 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                 );
            case 'idle':
            default:
                return (
                     <div
                        onDrop={handleDrop}
                        onDragOver={(e) => handleDragEvents(e, true)}
                        onDragLeave={(e) => handleDragEvents(e, false)}
                        onClick={() => inputRef.current?.click()}
                        className={`w-full h-48 flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-2xl cursor-pointer transition-colors ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-slate-300 hover:border-indigo-400'}`}
                    >
                        <UploadCloudIcon className="w-10 h-10 text-slate-400" />
                        <p className="font-semibold text-slate-700">Click to browse or drag & drop</p>
                        <p className="text-sm text-slate-500">Maximum file size: 50MB</p>
                        <input
                            type="file"
                            className="hidden"
                            ref={inputRef}
                            onChange={(e) => handleFileChange(e.target.files?.[0])}
                        />
                    </div>
                );
        }
    };

    return (
        <section className="w-full max-w-lg mx-auto mb-20 -mt-10">
            <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-6 transition-all transform-gpu">
               {renderContent()}
            </div>
        </section>
    );
};

export default UploadCard;