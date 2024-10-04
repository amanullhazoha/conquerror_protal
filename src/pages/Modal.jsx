import PrivateLayout from "@/components/layouts/PrivateLayout";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FaFilePdf, FaRegImage } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";

const Modal = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<PrivateLayout>
			<div>
				<Button onClick={() => setOpenModal(true)} variant="outline">
					Open Modal
				</Button>

				<Dialog open={openModal} onOpenChange={() => setOpenModal(false)}>
					<DialogContent className="px-0">
						<DialogHeader>
							<DialogTitle className="pl-4">Download</DialogTitle>
						</DialogHeader>
						{/* <div className="border-b" /> */}
						<div className="grid grid-cols-2 gap-6 border-t border-b py-4  px-6">
							<div className="flex flex-col gap-6 justify-center items-center border p-10 rounded-xl w-full ml-auto">
								<FaFilePdf className="text-6xl" />

								<button className="flex items-center gap-1  border border-[#046C4E] text-[#046C4E] rounded-full px-4 py-1">
									<HiDownload /> Download
								</button>
							</div>

							<div className="flex flex-col gap-6 justify-center items-center border p-10 rounded-xl w-full mr-auto">
								<FaRegImage className="text-6xl" />

								<button className="flex items-center gap-1  border border-[#046C4E] text-[#046C4E] rounded-full px-4 py-1">
									<HiDownload /> Download
								</button>
							</div>
						</div>
					</DialogContent>
				</Dialog>
			</div>
		</PrivateLayout>
	);
};

export default Modal;
