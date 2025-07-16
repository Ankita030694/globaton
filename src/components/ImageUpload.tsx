'use client';

import { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/firebase/firebase';

interface ImageUploadProps {
  onImageUpload: (url: string) => void;
  currentImageUrl?: string;
  className?: string;
}

export default function ImageUpload({ onImageUpload, currentImageUrl, className = '' }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    // Create preview URL
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);

    try {
      setUploading(true);
      setUploadProgress(0);

      // Create a unique filename
      const timestamp = Date.now();
      const fileName = `blog-images/${timestamp}-${file.name}`;
      const storageRef = ref(storage, fileName);

      // Upload file
      const snapshot = await uploadBytes(storageRef, file);
      
      // Get download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      setUploadProgress(100);
      onImageUpload(downloadURL);
      
      // Clear preview URL after successful upload
      setPreviewUrl(null);
      
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
      setPreviewUrl(null);
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  // Clean up preview URL on unmount
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Current Image Preview */}
      {currentImageUrl && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Image
          </label>
          <div className="relative inline-block">
            <img
              src={currentImageUrl}
              alt="Current blog image"
              className="w-32 h-32 object-cover rounded-lg border border-gray-300"
            />
          </div>
        </div>
      )}

      {/* Upload Preview */}
      {previewUrl && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Preview
          </label>
          <div className="relative inline-block">
            <img
              src={previewUrl}
              alt="Upload preview"
              className="w-32 h-32 object-cover rounded-lg border border-gray-300"
            />
          </div>
        </div>
      )}

      {/* Upload Section */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload New Image
        </label>
        <div className="flex items-center space-x-4">
          <label className="cursor-pointer bg-[#165D3F] text-white px-4 py-2 rounded-md hover:bg-[#124E33] transition-colors">
            {uploading ? 'Uploading...' : 'Choose Image'}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
              disabled={uploading}
            />
          </label>
          
          {uploading && (
            <div className="flex items-center space-x-2">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#165D3F] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600">{uploadProgress}%</span>
            </div>
          )}
        </div>
        
        <p className="text-xs text-gray-500 mt-2">
          Supported formats: JPG, PNG, GIF. Max size: 5MB
        </p>
      </div>

      {/* Preview of uploaded image */}
      {currentImageUrl && !uploading && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image URL
          </label>
          <input
            type="text"
            value={currentImageUrl}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md text-black text-sm bg-gray-50"
          />
        </div>
      )}
    </div>
  );
} 