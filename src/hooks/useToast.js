import { toast } from "react-hot-toast";

// Custom hook to handle toast notifications
const useToast = () => {
	const showSuccess = (message) => {
		toast.success(message, {
			duration: 4000,
			position: "top-center",
		});
	};

	const showError = (message) => {
		toast.error(message, {
			duration: 4000,
			position: "top-center",
		});
	};

	const showInfo = (message) => {
		toast(message, {
			icon: "ℹ️",
			duration: 4000,
			position: "top-center",
		});
	};

	const showLoading = (message) => {
		toast.loading(message, {
			duration: 4000,
			position: "top-center",
		});
	};

	return {
		showSuccess,
		showError,
		showInfo,
		showLoading,
	};
};

export default useToast;
