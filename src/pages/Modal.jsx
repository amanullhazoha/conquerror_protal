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
	const [activeFile, setActiveFile] = useState("");

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

						<div className="grid grid-cols-2 gap-6 border-t border-b py-10 px-6">
							<div
								onClick={() => setActiveFile("pdf")}
								className={`flex flex-col gap-6 justify-center items-center border p-10 rounded-xl w-full cursor-pointer ${
									activeFile === "pdf"
										? "border border-[#046C4E] bg-[#F3FAF7]"
										: ""
								}`}
							>
								<FaFilePdf className="text-6xl" />

								<button
									className={`flex items-center gap-1  border border-[#046C4E] text-[#046C4E] rounded-full px-[14px] py-[6px] ${
										activeFile === "pdf" ? "!bg-[#046C4E] text-white" : ""
									}`}
								>
									<HiDownload /> Download
								</button>
							</div>

							<div
								onClick={() => setActiveFile("image")}
								className={`flex flex-col gap-6 justify-center items-center border p-10 rounded-xl w-full cursor-pointer ${
									activeFile === "image"
										? "border border-[#046C4E] bg-[#F3FAF7]"
										: ""
								}`}
							>
								<FaRegImage className="text-6xl" />

								<button
									className={`flex items-center gap-1  border border-[#046C4E] text-[#046C4E] rounded-full px-[14px] py-[6px] ${
										activeFile === "image" ? "!bg-[#046C4E] text-white" : ""
									}`}
								>
									<HiDownload /> Download
								</button>
							</div>
						</div>

						<div className="flex justify-end gap-4 px-4 py-2">
							<Button
								onClick={() => setOpenModal(false)}
								className="rounded-full font-medium hover:bg-transparent"
								variant="outline"
							>
								Close
							</Button>
							<Button
								className="rounded-full hover:bg-transparent font-medium border-[#046C4E] text-[#046C4E] hover:text-[#046C4E]"
								variant="outline"
							>
								Download PDF & Image
							</Button>
						</div>
					</DialogContent>
				</Dialog>
			</div>
		</PrivateLayout>
	);
};

export default Modal;
