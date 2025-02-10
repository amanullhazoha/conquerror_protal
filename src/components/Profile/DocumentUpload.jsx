/* eslint-disable react/prop-types */
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { ImagePreview } from './ImagePreview';
import { UploadPlaceholder } from './UploadPlaceholder';

export function DocumentPreview({ title = 'Documents Preview' }) {
    const [image, setImage] = useState(null);
    console.log(image);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleReset = () => {
        setImage(null);
    };

    return (
        <Card className="max-w-md w-full shadow-none">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="text-sm font-medium">
                    Transaction Receipt*
                </div>

                <div className="border-2 border-dashed border-gray-200 rounded-lg p-4">
                    {image ? (
                        <div className="space-y-6">
                            <ImagePreview
                                imageUrl={image}
                                onReset={handleReset}
                            />
                        </div>
                    ) : (
                        <UploadPlaceholder
                            onUpload={handleImageUpload}
                        />
                    )}
                </div>
            </CardContent>
        </Card>
    );
}