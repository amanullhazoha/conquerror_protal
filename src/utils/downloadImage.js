export const downloadImage = async (imageUrl, imageName) => {
	try {
		const response = await fetch(imageUrl);
		const blob = await response.blob();

		const url = window.URL.createObjectURL(blob);
		const link = document.createElement("a");

		link.href = url;
		link.download = imageName;

		document.body.appendChild(link);
		link.click();

		document.body.removeChild(link);
		window.URL.revokeObjectURL(url);
	} catch (error) {
		console.error("Failed to download image:", error);
	}
};
