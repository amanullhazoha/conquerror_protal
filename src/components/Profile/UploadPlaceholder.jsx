/* eslint-disable react/prop-types */
import { Button } from '@/components/ui/button';
import { ImagePlus } from 'lucide-react';

export function UploadPlaceholder({ onUpload, multiple = false }) {
    return (
        <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <ImagePlus className="h-12 w-12 text-gray-400" />
            <label htmlFor="image-upload" className="cursor-pointer">
                <Button variant="primary-outline" asChild>
                    <label htmlFor="upload"> Upload Transaction Receipt{multiple ? 's' : ''}</label>
                </Button>
                <input
                    id="upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={onUpload}
                    multiple={multiple}
                />
            </label>
            <div className="text-sm text-gray-500 space-y-1 text-center">
                <p>*Please upload a clear image</p>
                <p>*Full face should be visible</p>
                <p>*Image size cannot exceed 2MB</p>
            </div>
        </div>
    );
}