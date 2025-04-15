"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ArrowRight, Link } from "lucide-react";
import { useContext } from "react";
import { Message, MessagesContext } from "@/context/MessagesContext";
import { UserContext } from "@/context/UserContext";
import LoginDialog from "./LoginDialog";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import lookup from "@/data/lookup";
import { Cover } from "../ui/cover";

const StarBackground = dynamic(() => import("../ui/StarBackground"), { ssr: false });
const ShootingStars = dynamic(() => import("../ui/ShootingStars"), { ssr: false });

const Hero = () => {
    const [userInput, setUserInput] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [openDialog, setOpenDialog] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const { messages, setMessages } = useContext(MessagesContext);
    const { userDetail } = useContext(UserContext);

    const CreateWorkspace = useMutation(api.workspace.CreateWorkspace);
    const router = useRouter();

    useEffect(() => {
        setSuggestions(lookup.SUGGESTIONS);
    }, []);

    const onGenerate = async (input: string) => {
        if (!userDetail?.name) {
            setOpenDialog(true);
            return;
        }

        if (!userDetail || !userDetail.token || userDetail?.token < 10) {
            toast("You don't have enough tokens to generate response");
            return;
        }

        const msg: Message = {
            role: "user",
            content: input,
        };

        if (file) {
            console.log("File uploaded:", file.name);
        }

        setMessages([...messages, msg]);

        const workspaceId = await CreateWorkspace({
            user: userDetail?._id,
            messages: [msg],
        });

        router.push(`/workspace/${workspaceId}`);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (typeof window !== "undefined") {
            const uploadedFile = event.target.files?.[0] || null;
            setFile(uploadedFile);
        }
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-[#0a0a1f] to-[#1a1a2e] flex flex-col justify-center">
            <StarBackground />
            <ShootingStars />
            <div className="relative z-10 flex flex-col items-center gap-4 w-full px-4 md:px-6 lg:px-8 drop-shadow-xl">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center leading-tight text-white">
                        {lookup.HERO_HEADING} at
                    </h2>
                </div>
                <Cover>
                    <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center leading-snug text-white">
                        {lookup.HERO_DESC}
                    </h2>
                </Cover>

                <div className="p-6 border rounded-xl max-w-2xl w-full mt-3 bg-[#3d3d3a]">
                    <div className="flex flex-col md:flex-row gap-2">
                        <textarea
                            placeholder={lookup.INPUT_PLACEHOLDER}
                            className="outline-none bg-transparent w-full h-32 max-h-56 resize-none text-sm md:text-base lg:text-lg"
                            onChange={(e) => setUserInput(e.target.value)}
                        />
                        {userInput && (
                            <ArrowRight
                                onClick={() => onGenerate(userInput)}
                                className="bg-blue-500 p-2 h-10 w-10 rounded-md cursor-pointer text-white hover:bg-blue-600 transition-colors"
                            />
                        )}
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                        <label
                            htmlFor="fileInput"
                            className="flex items-center gap-2 cursor-pointer text-blue-500 hover:text-blue-600 transition-colors"
                        >
                            <Link className="w-5 h-5" />
                            <span className="text-sm md:text-base">Attach a file</span>
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                        {file && <span className="text-sm text-gray-400">{file.name}</span>}
                    </div>
                </div>
            </div>
            <div className="relative z-10 flex flex-col justify-center text-center md:flex-row flex-wrap max-w-xl mx-auto pt-5 md:justify-center gap-2">
                {suggestions.map((suggestion, index) => (
                    <h2
                        key={index}
                        className="p-1 px-2 border rounded-full text-xs md:text-sm lg:text-base font-normal text-gray-400 hover:text-white cursor-pointer hover:border-blue-300 transition-colors"
                        onClick={() => onGenerate(suggestion)}
                    >
                        {suggestion}
                    </h2>
                ))}
            </div>
            <LoginDialog
                openDialog={openDialog}
                closeDialog={(v) => setOpenDialog(v)}
            />
        </div>
    );
};

export default Hero;